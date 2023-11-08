import Lottie from "lottie-react";
import { NavLink, Outlet } from "react-router-dom";
import register from '../../../public/registerlogin.json'
const RootAuth = () => {
    return (
        <section className="grid lg:grid-cols-2 grid-cols-1  dark:bg-gray-900 py-10">
            <Lottie animationData={register} loop={true}/>
            <div className="container flex items-center lg:justify-end justify-center min-h-screen px-6 mx-auto">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <img src="https://i.ibb.co/6WY9fg4/logo.png" alt="logo" className="h-14 w-18" />
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <NavLink to='/signin' className="rootauth w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b dark:border-blue-400 dark:text-white">
                            sign in
                        </NavLink>

                        <NavLink to='/signup' className="rootauth w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b dark:border-blue-400 dark:text-white">
                            sign up
                        </NavLink>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default RootAuth;