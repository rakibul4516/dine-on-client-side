import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/1T2SXYv/2546332495.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-6xl font-bold font-[Montez]">For your special day</h1>
                        <h1 className="mb-5 text-xl md:text-2xl font-semibold font-[Suranna]">EXCEPTIONAL CATERING SERVICES</h1>
                        <Link to='/allfoods' className="btn btn-ghost bg-gray-900">All Menu</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;