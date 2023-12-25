// import { useState } from "react";
import CreateTask from "../CreateTask";
import ListedTasks from "./ListedTasks";
import Completed from "../completed";
import OnGoing from "../OnGoing";
import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";
import useTodo from "../../../../../Hooks/useTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useOnGoing from "../../../../../Hooks/useOnGoing";
// import useCompleted from "../../../../../Hooks/useCompleted";


const ToDo = () => {
     const [ ,refetch]= useTodo()
   
   
    const onDragEnd = async (result) => {
        const { source, destination, draggableId } = result;
    
        // Dropping outside any list
        if (!destination) return;
    
        if (source.droppableId !== destination.droppableId) {
          // Send API request to update the task status in the database
          const status = { status: destination.droppableId };
         
          const res = await axios.put(
           ` https://job-task-server-one-xi.vercel.apptasks/${draggableId}`,
            status
          );
          if (res.data.modifiedCount > 0) {
           toast(`Successfully! updated your task to 
            ${status.status}`);

           
    
            refetch()
           
        }
    }
   
        }
    return (
        <div className="text-blue-700 pt-16 pb-20 min-h-screen flex flex-col items-center gap-16">
        

        <CreateTask   ></CreateTask>
       <div className="grid xl:grid-cols-3 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <DragDropContext onDragEnd={onDragEnd} >
      <ListedTasks   ></ListedTasks>
      <OnGoing></OnGoing>
      <Completed></Completed>
      </DragDropContext>
       </div>
       <ToastContainer />
        </div>
    );
};

export default ToDo;