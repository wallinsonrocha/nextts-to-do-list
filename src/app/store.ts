import create from 'zustand';
import Task from './components/Task';

type Task = {
    id: string;
    day: string;
    priority: number;
    description: string;
}

interface ToDoStore {
    task: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    updateTask: (id: string, updatedTask: Task) => void;
}

const initialState: Task[] = [
    {
        id: '1',
        day: 'Seg',
        priority: 0,
        description: 'Task inicial para exemplo',
    },
]

export const useStore = create<ToDoStore>((set) => ({
    task: initialState,
    // Função para adicionar tarefa
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),
    // Função para remover tarefa
    removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
    })),
    // Função para atualizar tarefa
    updateTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task // Atualiza a tarefa
        )
    }))
}));