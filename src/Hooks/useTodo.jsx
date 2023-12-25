import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useTodo = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
  const {data:toDo=[],refetch} = useQuery({
    queryKey:['toDo', user?.email],
    queryFn: async()=>{
       
       const res = await axiosSecure.get(`/tasks?email=${user.email}`)
       return res.data;
    }
  })
 


  return[toDo,refetch]
};

export default useTodo;