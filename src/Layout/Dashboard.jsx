import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import DashboardNavbar from "../Pages/Home/Dashboard/Dashboard/DashboardNavbar/DashboardNavbar";
import Footer from "../Pages/Home/Footer/Footer";



const Dashboard = () => {
    return (
        <div className="flex flex-col">
        <Navbar></Navbar>
           
            <div className="w-full min-h-[90vh] grid grid-cols-12">
            <DashboardNavbar></DashboardNavbar>
            {/* right side */}
            <div className="bg-red-100 col-span-10">
                <Outlet></Outlet>
            </div>
            </div>
           
            <Footer></Footer>
           
        </div>
    );
};

export default Dashboard;