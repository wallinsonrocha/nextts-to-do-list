import Image from "next/image";
import PriorityIcon from "./icon/PriorityIcon";
import Task from "./components/Task";

export default function Home() {
  return (
    <main className="">
      {/* Apresentação */}
      <section id="introductio">
        <h1>To Do List NextTs</h1>
        <p>description to the App</p>
        <p>Who Done the App</p>
        <p>Link to site developer</p>
      </section>

      {/* To do List */}
      <section className="w-full h-screen bg-blue-950 p-4 flex gap-9" id="to-do-list">

        {/* To do */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/to-do-icon.svg" width={16} height={16} alt="Icone para To Do" />
            <p className="font-bold">Name Tag</p>
          </div>

          <div className="grid gap-4">
            <Task />
            <Task />
          </div>
        </div>

        {/* Done */}
        <div className="bg-slate-300 rounded-2xl w-80 p-4 grid gap-4 h-fit">
          <div className="flex gap-2 items-center w-fit">
            <Image src="/icons/done-icon.svg" width={24} height={24} alt="Icone para To Do" />
            <p className="font-bold">Name Tag</p>
          </div>

          <div className="grid gap-4">
            <Task />
            <Task />
          </div>
        </div>
      </section>

    </main>
  );
}
