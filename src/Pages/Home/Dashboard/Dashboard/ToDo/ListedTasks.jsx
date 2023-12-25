

import useTodo from "../../../../../Hooks/useTodo";
import TaskSection from "./TaskSection";
import { Droppable } from "react-beautiful-dnd";



const ListedTasks = () => {
    const [toDo]= useTodo()
    const toDoList = toDo.filter((item=>item.status === "todo"))
   
    return (
        <div>
       
        <div className=" bg-blue-100 py-5">
            <div className="px-5  w-full min-h-screen h-auto">
            <div className="gap-2 flex flex-col">
            <h1 className="font-bold text-blue-900 text-xl py-3 px-5 bg-blue-200 w-full rounded">TO-DO List  </h1>
            <Droppable droppableId="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="min-h-screen h-auto pb-5 rounded-b-xl p-2"
              >
                {toDoList.map((item, index) => (
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

export default ListedTasks;
