import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import App from "../App";
import RootAuth from "../Pages/Authentication/RootAuth";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";
import AllFoods from "../Pages/AllFoods";
import MyAddedFoods from "../Pages/MyAddedFoods";
import AddFoodItem from "../Pages/AddFoodItem";
import MyOrders from "../Pages/MyOrders";
import ProtectedRoute from "../Components/ProtectedRoute";
import UpdateFoods from "../Pages/UpdateFoods";
import FoodDetails from "../Components/FoodDetails";
import PurcheseFood from "../Components/PurcheseFood";
import ErrorElement from "../Components/ErrorElement";
import Payment from "../Pages/Payment/Payment";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'allfoods',
                element: <AllFoods />,
                loader: () => fetch('https://dine-on-server.vercel.app/api/v1/countdata')
            },
            {
                path: 'blogs',
                element: <Blogs />,
            },
            {
                path: 'myaddedfood',
                element: <ProtectedRoute>
                    <MyAddedFoods />
                </ProtectedRoute>,
            },
            {
                path: 'addfooditem',
                element: <ProtectedRoute>
                    <AddFoodItem />
                </ProtectedRoute>,
            },
            {
                path: 'myorders',
                element: <ProtectedRoute>
                    <MyOrders />
                </ProtectedRoute>,
            },
            {
                path: 'payment',
                element: <ProtectedRoute>
                    <Payment/>
                </ProtectedRoute>,
            },
            {
                path: 'purchese/:id',
                element: <ProtectedRoute>
                    <PurcheseFood />
                </ProtectedRoute>,
                loader: ({ params }) => fetch(`https://dine-on-server.vercel.app/api/v1/allfoods/${params.id}`)
            },
            {
                path: 'edit/:id',
                element: <ProtectedRoute>
                    <UpdateFoods />
                </ProtectedRoute>,
                loader: ({ params }) => fetch(`https://dine-on-server.vercel.app/api/v1/allfoods/${params.id}`)
            },
            {
                path: 'details/:id',
                element: <FoodDetails />,
                loader: ({ params }) => fetch(`https://dine-on-server.vercel.app/api/v1/allfoods/${params.id}`)
            },
            {
                path: '/',
                element: <RootAuth />,
                children: [
                    {
                        path: 'signin',
                        element: <SignIn />
                    },
                    {
                        path: 'signup',
                        element: <SignUp />
                    },
                ]
            }

        ],
    },
])

export default Route;