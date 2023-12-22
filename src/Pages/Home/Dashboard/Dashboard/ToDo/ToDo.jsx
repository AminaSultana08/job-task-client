import { useState } from "react";
import CreateTask from "../CreateTask";
import ListedTasks from "./ListedTasks";


const ToDo = () => {
    const [tasks, setTasks] = useState()
    console.log ("tasks" , tasks);
    return (
        <div className="text-blue-700  h-screen flex flex-col items-center pt-3 gap-16">

        <ListedTasks  tasks={tasks} setTasks={setTasks}   ></ListedTasks>
            <CreateTask tasks={tasks} setTasks={setTasks}   ></CreateTask>
        </div>
    );
};

export default ToDo;