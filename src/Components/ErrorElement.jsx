import Lottie from "lottie-react";
import animation from '../../public/Animation - 1699377540396.json'
const ErrorElement = () => {
    return (
        <div className="h-96 w-10/12 mx-auto">
            <Lottie className="h-[100vh] w-10/12 mx-auto" animationData={animation} loop={true}/>
        </div>
    );
};

export default ErrorElement;