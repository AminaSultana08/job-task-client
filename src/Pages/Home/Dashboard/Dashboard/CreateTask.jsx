
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useTodo from "../../../../Hooks/useTodo";





const CreateTask = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [ ,refetch]= useTodo()
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    if (user && user.email){
      const listItems = {
        name: user.displayName,
        email: user.email,
        titles:data.titles,
        descriptions:data.descriptions,
        deadlines:data.deadlines,
        priority:data.priority,
        status:"todo"
      }
      axiosSecure.post('/tasks',listItems)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
               
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your task has been added",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
          reset()
        }
      })
    }
  };
   //titles, descriptions, deadlines, and priority
    return (
        <div >
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-2">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Titles*</span>
                </label>
                <input type="text" {...register("titles", { required: true })} name="titles" placeholder="titles" className="input input-bordered" />
                {errors.titles && <span className="text-red-600">Titles is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Descriptions*</span>
                </label>
                <input type="text" {...register("descriptions", { required: true })} name="descriptions" placeholder="descriptions" className="input input-bordered" />
                {errors.descriptions && <span className="text-red-600">Descriptions is required</span>}
              </div>
                </div>
                <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col gap-2">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadlines*</span>
                </label>
                <input type="date" name="deadlines"  {...register("deadlines", { required: true })} placeholder="deadlines" className="input input-bordered" />
                {errors.deadlines && <span className="text-red-600">Deadlines is required</span>}
              </div>
                <div className="form-control">
               
                <label className="label">
                  <span className="label-text">Priority*</span>
                </label>
                <select defaultValue="default"
                {...register("priority")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Priority
                </option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
                {errors.email && <span className="text-red-600">Priority is required</span>}
              </div>
             
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn hover:bg-blue-900 text-white bg-blue-700" name="" value="Add Task" />

                </div>
              </form>
            
            </div>
           
    
        </div>
    );
};

export default CreateTask;

 