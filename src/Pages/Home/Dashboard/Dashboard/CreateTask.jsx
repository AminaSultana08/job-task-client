//import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const CreateTask = ({tasks, setTasks}) => {
    const {user} = useAuth()
    const [task,setTask] = useState({
        id:"",
        name:"",
        status:"todo"
    })
    console.log(task);
  
    const handleSubmit= (e) =>{
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            name: task.name,
            status: "todo",
          };
          setTasks((prev) => {
            const list = [...prev, newTask];
            return list;
          });
          setTask({
            id: "",
            name: "",
            status: "todo",
          });
    }
    return (
        <div>
       
    <form onSubmit={handleSubmit} >
    <div className="flex flex-col  gap-3">
    <input onChange={(e)=>setTask({...task, id:uuidv4(), name:e.target.value })} type="text" 
    value={task.name}  placeholder="Title" className="input input-bordered" />
 
   <input type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-lg"/>
    </div>
    </form>
        </div>
    );
};

export default CreateTask;

 {/*  <div  className="flex gap-3 xl:flex-row lg:flex-row md:flex-col flex-col">
   <input onChange={(e)=>setTask({...task, id:uuidv4(), name:e.target.value })} type="text"   placeholder="Title" className="input input-bordered" />
   <input onChange={(e)=>setTask({...task, id:uuidv4(), name:e.target.value })} type="text"   placeholder="Description" className="input input-bordered" />
   </div>
   <div  className="flex gap-3 xl:flex-row lg:flex-row md:flex-col flex-col">
   <input onChange={(e)=>setTask({...task, id:uuidv4(), name:e.target.value })} type="date"   placeholder="Deadline" className="input input-bordered" />
   <select onChange={(e)=>setTask({...task, id:uuidv4(), name:e.target.value })}  className="input input-bordered w-full" >
 
   <option disabled value="default"> Select Priortiy</option>
   <option value="low">Low</option>
   <option value="moderate">Moderate</option>
   <option value="high">High</option>
 </select>
   </div> */}