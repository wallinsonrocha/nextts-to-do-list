"use client";
import React, { useState } from "react";
import PriorityIcon from "../icon/PriorityIcon";
import { useStore } from "../store";
import Image from "next/image";

interface TaskProps {
    id: string;
    description: string;
    priority: number;
    status: string;
}

export default function Task({ id, description, priority }: TaskProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [updatedPriority, setUpdatedPriority] = useState(priority);

    const updateTask = useStore((state) => state.updateTask);
    const updateStatusTask = useStore((state) => state.updateStatusTask);
    const deleteTask = useStore((state) => state.removeTask);

    const handleEditToggle = () => {
        if (isEditing) {
            updateTask(id, {
                id: id,
                description: updatedDescription,
                priority: updatedPriority,
                status: "to-do"
            });
        }
        setIsEditing(!isEditing);
    };

    const handleDeleteToggle = () => {
        if (isEditing) {
            deleteTask(id);
        }
        setIsEditing(!isEditing);
    };

    const handleStatusChange = (newStatus: string) => {
        updateStatusTask(id, newStatus); // Atualiza o status da task
    };

    const wIcon: number = 24;
    const hIcon: number = 24;

    // Função para criar ícones de prioridade
    const renderPriorityIcons = () => {
        switch (updatedPriority) {
            case 0:
                return (
                    <>
                        <PriorityIcon key={`priority-1-${id}`} />
                        <PriorityIcon key={`priority-2-${id}`} />
                        <PriorityIcon key={`priority-3-${id}`} />
                    </>
                );

            case 1:
                return (
                    <>
                        <PriorityIcon key={`priority-1-${id}`} propColor="#2D41A7" />
                        <PriorityIcon key={`priority-2-${id}`} />
                        <PriorityIcon key={`priority-3-${id}`} />
                    </>
                );

            case 2:
                return (
                    <>
                        <PriorityIcon key={`priority-1-${id}`} propColor="#ECB800" />
                        <PriorityIcon key={`priority-2-${id}`} propColor="#ECB800" />
                        <PriorityIcon key={`priority-3-${id}`} />
                    </>
                );

            case 3:
                return (
                    <>
                        <PriorityIcon key={`priority-1-${id}`} propColor="#E42C5F" />
                        <PriorityIcon key={`priority-2-${id}`} propColor="#E42C5F" />
                        <PriorityIcon key={`priority-3-${id}`} propColor="#E42C5F" />
                    </>
                );
        }
    };

    return (
        <div className="w-auto bg-slate-50 rounded-md p-6 grid gap-2 shadow-sm">
            <div className="place-self-end -mt-4 -mr-2">
                {!isEditing ?
                    (<button onClick={handleEditToggle}>
                        <Image src="/icons/edit-icon.svg" height={hIcon} width={wIcon} alt="Editar" />
                    </button>) :
                    (<button onClick={handleDeleteToggle}>
                        <Image src="/icons/delete-icon.svg" height={hIcon} width={wIcon} alt="Excluir" />
                    </button>)
                }
            </div>
            
            {/* Form de edição */}
            {isEditing ? (
                <div className="grid gap-2">
                    {/* Campo de descrição */}
                    <textarea
                        className="w-full p-2 rounded border"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
                    {/* Campo de prioridade */}
                    <select
                        className="w-full p-2 rounded border"
                        value={updatedPriority}
                        onChange={(e) => setUpdatedPriority(parseInt(e.target.value))}
                    >
                        <option value={1}>Baixa</option>
                        <option value={2}>Média</option>
                        <option value={3}>Alta</option>
                    </select>
                </div>
            ) : (
                // Task
                <div>
                    <p className="font-bold text-lg">{description}</p>
                    <div className="flex gap-2 items-center">
                        {/* Ícones de prioridade */}
                        <div className="flex gap-1">{renderPriorityIcons()}</div>
                    </div>
                </div>
            )}

            {/* Botão para salvar */}
            {isEditing ?
                <button
                    onClick={handleEditToggle}
                    className="mt-4 px-4 py-2 rounded text-white bg-green-500"
                >
                    Salvar
                </button>
                :
                null}

            {/* Botões para alterar o status */}
            <div className="mt-4 flex flex-col gap-2 items-start justify-start">
                <button
                    onClick={() => handleStatusChange('to-do')}
                    className="px-4 py-2 rounded-3xl bg-gray-500 text-white"
                >
                    A fazer
                </button>
                <button
                    onClick={() => handleStatusChange('in-progress')}
                    className="px-4 py-2 rounded-3xl bg-blue-500 text-white"
                >
                    Em progresso
                </button>
                <button
                    onClick={() => handleStatusChange('done')}
                    className="px-4 py-2 rounded-3xl bg-green-500 text-white"
                >
                    Feito
                </button>
            </div>
        </div>
    );
}
