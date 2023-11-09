// import axios from "axios";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import AxiosData from "../../Axios/AxiosData";


const SignUp = () => {
    const axios = AxiosData()
    const { signupUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const handleUserRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        // const imagelink = form.photo.files[0];
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        const user = { name, email, image, password }

        //password validation
        if (password.length < 6) {
            // Password is too short
            setError('Password should be at least 6 characters');
            return;
        } else if (!(/[A-Z]/.test(password))) {
            setError('At least one uppercase letter (A-Z)');
            return;
        } else if (!(/[@#$%^&+=!]/.test(password))) {
            setError('At least one special character (@#$%^&+=!)')
            return;
        }


        //Register users
        signupUser(email, password)
            .then((res) => {
                navigate(location?.state ? location.state : '/'); updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                })
                if (res?.user?.email) {
                    //Post user data in database
                    axios.post("/users", user)
                        .then(() => {
                            toast('Success')
                        })
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Sign Up",
                    });
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>DineOn | Register form</title>
            </Helmet>
            <form onSubmit={handleUserRegister} className="w-full max-w-sm p-6 m-auto mx-auto bg-[#FCF5ED]  rounded-lg shadow-md dark:bg-gray-800">
                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>

                    <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
                </div>
                {/* 
            <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                <input type="file" name="image" accept="image/jpeg,image/png" className="file-input file-input-bordered w-full max-w-xs" />
            </label> */}

                <div className="relative flex items-center mt-6">
                    <input type="text" name="image" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" />
                </div>

                <div className="relative flex items-center mt-6">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>

                    <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                </div>

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>

                    <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                </div>
                {
                    error ? <p className="text-red-800">Error: {error}</p> : ''
                }
                <div className="mt-6">
                    <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fa9140] rounded-lg focus:outline-none focus:ring  focus:ring-opacity-50">
                        Sign Up
                    </button>

                    <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to='/signin' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login Now</Link></p>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default SignUp;