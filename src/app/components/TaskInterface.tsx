"use client"
import Image from "next/image";
import { useStore } from "../store";
import { v4 } from 'uuid';
import Task from './Task';
import { useEffect, useState } from "react";

export default function TaskInterface() {
  const { tasks, addTask, clearTasks } = useStore();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true); // Define como pronto no cliente
  }, []);

  if (!clientReady) return null;

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <main className="bg-blue-950 p-8 grid place-items-center text-black">    
      <button className="text-white p-2 max-w-[200px] w-full bg-red-600 rounded-2xl" onClick={handleClear}>Limpar tarefas</button>

      {/* To do List */}
      <section className="w-full min-h-screen h-ful p-4 flex-wrap flex gap-9 justify-center" id="to-do-list">
        {/* To do */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/to-do-icon.svg" width={16} height={16} alt="Ícone para To Do" />
            <p className="font-bold">A fazer</p>
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
              <option value="1">Baixa</option>
              <option value="2">Média</option>
              <option value="3">Alta</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Adicionar Tarefa
            </button>
          </form>
        </div>

        {/* In progress */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/progress-icon.svg" width={24} height={24} alt="Ícone de Progresso" />
            <p className="font-bold">Em progresso</p>
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
            <p className="font-bold">Feito</p>
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
