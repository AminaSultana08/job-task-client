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
            <div className="bg-blue-50 col-span-10">
                <Outlet></Outlet>
                <h1 className="text-blue-900 font-bold text-center text-4xl pt-10">Job Management Dashboard</h1>
            </div>
            </div>
           
            <Footer></Footer>
           
        </div>
    );
};

export default Dashboard;