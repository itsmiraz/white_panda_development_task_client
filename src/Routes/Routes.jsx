import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main.jsx';
import BookACar from "../Pages/BookACar/BookACar.jsx";
import CarDetails from "../Pages/CarDetail/CarDetails.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/cardetail/:id',
                loader:({params})=>fetch(`https://white-panda-task-server.vercel.app/carDetail/${params.id}`),
                element:<CarDetails></CarDetails>
            },
           
           
        ]
        
    }
    ,
    {
            path: '/bookcar/:id',
            loader:({params})=>fetch(`https://white-panda-task-server.vercel.app/carDetail/${params.id}`),
            element:<BookACar></BookACar>
       
    }
])

export default router