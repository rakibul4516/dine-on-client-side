import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
const CustomarReview = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next slide
            sliderRef.current.slickNext();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-full lg:h-[100vh] h-full" style={{ backgroundImage: 'url(https://i.ibb.co/TvfsdQC/restaurants-in-marbella.webp', backgroundSize: 'cover' }}>
            <div className="w-full h-full bg-black bg-opacity-60 py-10">
                <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="text-center p-5">
                        <h1 className="text-3xl text-white font-bold font-[Montez] ">WHAT OUR CLIENT SAY ?</h1>
                        <p className="text-xs text-slate-200 py-5">very visit to our restaurant is an exhilarating experience! From the moment you walk in, the vibrant atmosphere and delicious aromas set the stage for a culinary adventure. Our expert chefs create mouthwatering dishes that never fail to excite your taste buds. Join us for an unforgettable dining experience that will leave you craving for more.</p>
                        <div className="flex flex-wrap gap-5 justify-center py-5">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold text-amber-500">10K+</h3>
                                <h3 className="text-lg font-semibold">HAPPY CUSTOMAR</h3>
                            </div>
                            <div className="text-white">
                                <h3 className="text-2xl font-bold text-amber-500">16+</h3>
                                <h3 className="text-lg font-semibold">AWARD WINING</h3>
                            </div>
                            <div className="text-white">
                                <h3 className="text-2xl font-bold text-amber-500">60+</h3>
                                <h3 className="text-lg font-semibold">FOOD MENU</h3>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Slider className="w-10/12 mx-auto flex justify-center items-center" ref={sliderRef} {...settings}>
                            <div className="w-full">
                                <div className=" px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                    </div>

                                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Holiday</h2>

                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">I had an amazing time at your restaurant. The food was simply exquisite, and the service was impeccable. I can not wait to come back for another delightful evening!</p>

                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">Michael</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                    </div>

                                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Special Day</h2>

                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">A fantastic dining experience! The flavors in every dish were outstanding, and the ambiance was charming. This place truly knows how to make a customer feel special. I highly recommend it.</p>

                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">John Doe</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                    </div>

                                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">birthday</h2>

                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">I celebrated my birthday at your restaurant, and it was a night to remember. The staff went above and beyond to make it special, and the food was out of this world. Thank you for making my day truly exceptional!</p>

                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">Rakibul</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomarReview;