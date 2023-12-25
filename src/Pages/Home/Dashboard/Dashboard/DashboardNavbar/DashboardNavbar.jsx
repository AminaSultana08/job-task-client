import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import avatar from '../../../../../assets/avatar.jpg'
import { FaHome } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { RiTodoFill } from "react-icons/ri";
import useAuth from "../../../../../Hooks/useAuth";

const DashboardNavbar = () => {
    const {user,logOut} = useAuth()
    const handleLogOut =()=>{
        logOut()
        .then(() => { })
              .catch(error => {
                  console.log(error);
              })
      }

    return (
        <nav className="col-span-2 border-r border-gray-200 h-auto w-80px xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between bg-blue-100">
            <div className="w-full space-y-8 ">
            <div className=" flex flex-col item-center md:space-x-3 xl:space-x-8 lg:space-x-8 px-5 py-2 gap-2    justify-center">
        
        <img
        className='rounded-full xl:w-28 xl:h-28 lg:w-20 lg:h-20 md:w-20 md:h-16  sm:w-16 sm:h-12 border-red-800 border-[2px]'
        referrerPolicy='no-referrer'
        src={user && user.photoURL ? user.photoURL : avatar}
        alt='profile'
       
      /> <span className="xl:text-xl lg:text-xl md:text-lg text-xs font-bold">{user?.displayName}  </span> </div>
      <div className="divider"></div>
                <ul >
                    <li className="w-full flex flex-row items-center justify-start space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white py-2 gap-2 font-semibold border-l-4 border-transparent"><NavLink className='flex items-center gap-2'><MdDashboard/> <span className="xl:flex lg:flex  hidden">Dashboard</span> </NavLink> </li>
                    <li className="w-full flex flex-row items-center justify-start space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white py-2 gap-2 font-semibold border-l-4 border-transparent"><NavLink to='/dashboard/todo' className='flex gap-2 items-center'><RiTodoFill/> <span className="xl:flex lg:flex  hidden">ToDo</span> </NavLink> </li>
                   
                    <li className="w-full flex flex-row items-center  space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white font-semibold py-2  border-l-4 border-transparent"><NavLink to='/' className='flex gap-2 items-center'   ><FaHome/><span className="xl:flex lg:flex  hidden">Home</span></NavLink> </li>
                    <li className="w-full flex flex-row items-end  space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white font-semibold py-2  border-l-4 border-transparent"> <button 
                    onClick={handleLogOut} className="flex gap-2 items-center" type=""><PiSignOutBold/><span className="xl:flex lg:flex  hidden">LogOut</span></button> </li>
                    
                </ul>
               
            </div>
        </nav>
    );
};

export default DashboardNavbar;