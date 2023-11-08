import { Helmet } from "react-helmet";
import CustomarReview from "../Components/CustomarReview";
import OurArea from "../Components/OurArea";
import Slider from "../Components/Slider";
import TopFoods from "../Components/TopFoods";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DineOn</title>
            </Helmet>
            <div>
                <Slider />
                <TopFoods />
                <OurArea />
                <CustomarReview />
            </div>
        </div>
    );
};

export default Home;