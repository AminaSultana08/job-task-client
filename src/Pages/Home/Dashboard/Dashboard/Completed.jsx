import { Droppable } from "react-beautiful-dnd";
// import useCompleted from "../../../../Hooks/useCompleted";
import TaskSection from "./ToDo/TaskSection";
import useTodo from "../../../../Hooks/useTodo";


const Completed = () => {
    const [toDo]= useTodo()
    const completedList = toDo.filter((item=>item.status === "completed"))
    
     return (
         <div>
        
         <div className=" bg-blue-100 py-5">
             <div className="px-5  w-full h-auto min-h-screen">
             <div className="gap-2 flex flex-col">
             <h1 className="font-bold text-blue-900 text-xl py-3 px-5 bg-blue-200 w-full rounded">Completed TaskList </h1>
                 
                     <Droppable droppableId="completed">
                     {(provided) => (
                       <div
                         ref={provided.innerRef}
                         {...provided.droppableProps}
                         className="min-h-screen  rounded-b-xl p-2"
                       >
                         {completedList.map((item, index) => (
                             <TaskSection
                               key={item._id}
                               item={item}
                               index={index}
                             />
                            
                           ) )}
                           {provided.placeholder}
                           </div>
                         
                     )}
                     </Droppable>
                    

                 </div>
 
             </div>
         </div>
         </div>
     );
};

export default Completed;