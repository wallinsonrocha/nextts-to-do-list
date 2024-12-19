"use client"
import dynamic from 'next/dynamic'
import Image from "next/image";
import { useStore } from "./store";
import { v4 } from 'uuid';

const Task = dynamic(() => import('./components/Task'), { ssr: false })

export default function Home() {
  const { tasks, addTask, clearTasks } = useStore();

  // Função para adicionar uma nova tarefa
  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar reload da página
    const formData = new FormData(event.currentTarget);
    const description = formData.get("description")?.toString() || "Nova tarefa";
    const priority = parseInt(formData.get("priority")?.toString() || "1");

    const newTask = {
      id: v4().toString(),
      priority,
      description,
      status: "to-do",
    };

    addTask(newTask);
    event.currentTarget.reset();
  };

  const handleClear = () => {
    clearTasks();
  };

  return (
    <main className="">
      {/* Apresentação */}
      <section id="introductio">
        <h1>To Do List NextTs</h1>
        <p>description to the App</p>
        <p>Who Done the App</p>
        <p>Link to site developer</p>
      </section>

      <button onClick={handleClear}>Clear All Tasks</button>

      {/* To do List */}
      <section className="w-full min-h-screen h-full bg-blue-950 p-4 flex gap-9" id="to-do-list">
        {/* To do */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/to-do-icon.svg" width={16} height={16} alt="Ícone para To Do" />
            <p className="font-bold">To Do</p>
          </div>

          {/* Exibição dinâmica de tarefas com status "to-do" */}
          <div className="grid gap-4">
            {tasks.filter((task) => task.status === "to-do").map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </div>

          {/* Formulário para adicionar tarefas */}
          <form onSubmit={handleAddTask} className="mt-4 grid gap-2">
            <input
              type="text"
              name="description"
              placeholder="Descrição"
              className="p-2 rounded border"
              required
            />
            <select name="priority" className="p-2 rounded border">
              <option value="1">Prioridade 1</option>
              <option value="2">Prioridade 2</option>
              <option value="3">Prioridade 3</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Adicionar Tarefa
            </button>
          </form>
        </div>

        {/* In progress */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/done-icon.svg" width={24} height={24} alt="Ícone de Done" />
            <p className="font-bold">In Progress</p>
          </div>

          {/* Exibição dinâmica de tarefas com status "done" */}
          <div className="grid gap-4">
            {tasks.filter((task) => task.status === "in-progress").map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </div>
        </div>

        {/* Done */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/done-icon.svg" width={24} height={24} alt="Ícone de Done" />
            <p className="font-bold">Done</p>
          </div>

          {/* Exibição dinâmica de tarefas com status "done" */}
          <div className="grid gap-4">
            {tasks.filter((task) => task.status === "done").map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
