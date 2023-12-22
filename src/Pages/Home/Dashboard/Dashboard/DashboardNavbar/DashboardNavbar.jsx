import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

import { FaHome } from "react-icons/fa";
const DashboardNavbar = () => {
    return (
        <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-80px xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between bg-blue-100">
            <div className="w-full space-y-8 ">
                <ul >
                    <li className="w-full flex flex-row items-center justify-start space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white py-2 gap-2 font-semibold border-l-4 border-transparent"><NavLink className='flex items-center'><MdDashboard/> <span className="xl:flex lg:flex  hidden">Dashboard</span> </NavLink> </li>
                    <li className="w-full flex flex-row items-center justify-start space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white py-2 gap-2 font-semibold border-l-4 border-transparent"><NavLink to='/dashboard/todo' className='flex items-center'><MdDashboard/> <span className="xl:flex lg:flex  hidden">ToDo</span> </NavLink> </li>
                   
                    <li className="w-full flex flex-row items-center  space-x-8 px-5 cursor-pointer hover:bg-blue-900 hover:text-white font-semibold py-2  border-l-4 border-transparent"><NavLink to='/' className='flex gap-2 items-center'   ><FaHome/><span className="xl:flex lg:flex  hidden">Home</span></NavLink> </li>
                    
                </ul>
               
            </div>
        </nav>
    );
};

export default DashboardNavbar;