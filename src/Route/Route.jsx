import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import App from "../App";
import RootAuth from "../Pages/Authentication/RootAuth";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'blogs',
                element: <Blogs />,
            },
            {
                path:'/',
                element:<RootAuth/>,
                children:[
                    {
                        path:'signin',
                        element: <SignIn/>
                    },
                    {
                        path:'signup',
                        element: <SignUp/>
                    },
                ]
            }

        ],
    },
])

export default Route;