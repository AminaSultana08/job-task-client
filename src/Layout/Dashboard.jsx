import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import DashboardNavbar from "../Pages/Home/Dashboard/Dashboard/DashboardNavbar/DashboardNavbar";
import Footer from "../Pages/Home/Footer/Footer";



const Dashboard = () => {
    return (
        <div className="flex flex-col">
      
           
            <div className="w-full h-auto min-h-screen grid grid-cols-12">
           
            <DashboardNavbar></DashboardNavbar>
            {/* right side */}
            <div className="bg-blue-50 h-auto min-h-screen  col-span-10">
                <Outlet></Outlet>
               
            </div>
            </div>
           
           
           
        </div>
    );
};

export default Dashboard;