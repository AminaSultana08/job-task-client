/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useTodo from "../../../../../Hooks/useTodo";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TaskSection = ({item,index}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const{_id,titles,deadlines,priority,}= item
  const axiosSecure = useAxiosSecure()
  const [ ,refetch]= useTodo()
  const customStyles = {
    content: {
      content: "center",
      height: "80%",
      width: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const updateTask = async (data) => {
    console.log(data)
    const titles = data.titles;
    const descriptions = data.descriptions;
    const deadlines = data.deadlines;
    const priority = data.priority;
    const status = data.status;
    const tasks = { titles, descriptions, deadlines, priority, status };
    const res = await axios.put(
      `https://job-task-server-one-xi.vercel.apptasks/update/${item?._id}`,
      tasks
    );
    if (res.data) {
      toast(`Your task updated successfully !
      New Deadline for this task is: ${deadlines}`);
      refetch();
      setIsOpen(false);
    }
  };
  const handleDelete= _id=>{
    console.log("deleted" , _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       
       axiosSecure.delete(`/tasks/${_id}`)
       .then(res =>{
       if(res.data.deletedCount > 0){
        refetch()
         Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

       }
       })
      }
    });

  }

  return (
    <>
   
    <Draggable key={item._id} draggableId={item._id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
           
           <div className="card mb-2 xl:w-80 lg:w-80 md:w-64 w-64 bg-base-100 shadow-xl">
           <div className="card-body">
             <h2 className="card-title">{titles}</h2>
             <p>{item?.descriptions} </p>
             <div className="card-actions justify-between">
               <h1 ><span className="text-blue-900 font-semibold">Deadlines:</span> {item?.deadlines} </h1>
               <h1> <span className="text-blue-900 font-semibold">Priority:</span> {item?.priority} </h1>
             </div>
             <div className="card-actions justify-between">
              <button onClick={openModal} className="btn bg-blue-900 text-white ">Edit</button>
              <button 
              onClick={()=>handleDelete(_id)}
               className="btn bg-red-600 text-white ">Delete</button>
              
             </div>
           </div>
         </div>
              </div>
        )}
      </Draggable>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Modal"
      >
        <div className="mx-10">
          <form onSubmit={handleSubmit(updateTask)} className="">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                defaultValue={item?.titles}
                placeholder="Task Title..."
                className="input input-bordered"
                {...register("titles")}
              />
            </div>

            {/* Description */}
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                defaultValue={item?.descriptions}
                placeholder="description"
                className="textarea textarea-bordered md:textarea-lg w-full "
                {...register("descriptions")}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Deadlines */}
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  defaultValue={item?.deadlines}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("deadlines")}
                />
              </div>
              {/* Priority */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Select tasks Priority</span>
                </label>
                <select
                  defaultValue={item?.priority}
                  className="select select-bordered w-full "
                  {...register("priority")}
                >
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            {/* Status */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select tasks Status</span>
              </label>
              <select
                defaultValue={item?.status}
                className="select select-bordered w-full "
                {...register("status")}
              >
                <option>todo</option>
                <option>onGoing</option>
                <option>completed</option>
              </select>
            </div>
            <div className="form-control mt-6 text-center flex-row justify-evenly">
              <button className="btn bg-blue-900 text-white " >
                update
              </button>
              <button  className="btn bg-red-600 text-white " onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
      </>
      );
};

export default TaskSection;

