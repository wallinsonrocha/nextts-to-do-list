import PriorityIcon from "../icon/PriorityIcon";

interface PriorityIconProps {
    propColor?: string;
}

export default function Task() {

    return (
        <div className="w-auto bg-slate-50 rounded-md p-6 grid gap-2">  
            <p className="font-bold">Create wireframes</p>
            <div className="flex gap-2 items-center">
                <div className="rounded-md text-xs grid items-center p-1.5 text-white bg-yellow-500">
                    <p>Seg</p>
                </div>
                <div className="flex gap-1">
                    <PriorityIcon propColor="#00f" />
                    <PriorityIcon />
                    <PriorityIcon />
                </div>
            </div>
        </div>
    );
}


