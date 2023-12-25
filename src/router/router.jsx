import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ToDo from "../Pages/Home/Dashboard/Dashboard/ToDo/ToDo";
import Contact from "../Pages/Contact";
import DashboardRight from "../Pages/Home/Dashboard/Dashboard/DashboardRight";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },

          
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children:[
            {
                path:'todo',
                element:<ToDo></ToDo>
            },
            {
                path:'/dashboard',
                element:<DashboardRight></DashboardRight>
            }

        ]
    }
])

export default router;