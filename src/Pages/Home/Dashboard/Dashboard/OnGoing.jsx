import { Droppable } from "react-beautiful-dnd";
// import useOnGoing from "../../../../Hooks/useOnGoing";
import TaskSection from "./ToDo/TaskSection";
import useTodo from "../../../../Hooks/useTodo";

const OnGoing = () => {
    const [toDo]= useTodo()
    const onGoingList = toDo.filter((item=>item.status === "onGoing"))

     return (
         <div>

         <div className=" bg-blue-100 py-5">
             <div className="px-5  w-full h-auto min-h-screen">
             <div className="gap-2 flex flex-col">
             <h1 className="font-bold text-blue-900 text-xl py-3 px-5 bg-blue-200 w-full rounded">OnGoing TaskList </h1>
                     
                     <Droppable droppableId="onGoing">
                     {(provided) => (
                       <div
                         ref={provided.innerRef}
                         {...provided.droppableProps}
                         className="min-h-screen h-auto rounded-b-xl p-2"
                       >
                         {onGoingList?.map((item, index) => (
                             <TaskSection
                               key={item._id}
                               item={item}
                               index={index}
                             />
                           ))}
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

export default OnGoing;