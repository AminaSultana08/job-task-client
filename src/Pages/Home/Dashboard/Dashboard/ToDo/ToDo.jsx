import { useState } from "react";
import CreateTask from "../CreateTask";
import ListedTasks from "./ListedTasks";


const ToDo = () => {
    const [tasks, setTasks] = useState()
    console.log ("tasks" , tasks);
    return (
        <div className="text-blue-700  h-screen flex flex-col items-center pt-3 gap-16">
        <h1 className="text-blue-900 font-bold text-center text-4xl pt-10">Job Management Dashboard</h1>

        <ListedTasks  tasks={tasks} setTasks={setTasks}   ></ListedTasks>
            <CreateTask tasks={tasks} setTasks={setTasks}   ></CreateTask>
        </div>
    );
};

export default ToDo;