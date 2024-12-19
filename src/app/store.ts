import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

type Task = {
    id: string;
    priority: number;
    description: string;
    status: string;
}

interface ToDoStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    updateTask: (id: string, updatedTask: Task) => void;
    updateStatusTask: (id: string, status: string) => void;
    clearTasks: () => void;
}

const initialState: Task[] = [
    {
        id: '1',
        priority: 0,
        description: 'Task inicial para exemplo',
        status: 'to-do'
    },
]

export const useStore = create(
    persist<ToDoStore>(
        (set) => ({
            tasks: [],  // inicializa com array vazio
            addTask: (task) => set((state) => ({
                tasks: [...state.tasks, task],
            })),
            removeTask: (id) => set((state) => ({
                tasks: state.tasks.filter((task) => task.id !== id),
            })),
            updateTask: (id, updatedTask) => set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id ? { ...task, ...updatedTask } : task
                ),
            })),
            updateStatusTask: (id, status) => set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === id ? { ...task, status } : task
                ),
            })),
            clearTasks: () => set(() => ({
                tasks: [],
            })),
        }),
        {
            name: "todo-storage",
            storage: createJSONStorage(() => localStorage),
        }
    ));