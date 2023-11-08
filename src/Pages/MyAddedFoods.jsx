import { useQuery } from "@tanstack/react-query";
import auth from "../firebase.config";
import MyFoodCard from "../Components/MyFoodCard";
import AxiosData from "../Axios/AxiosData";
import loadingdata from '../../public/loadingdata.json'
import Lottie from "lottie-react";
import NoData from '../../public/Animation2.json'
import { Helmet } from "react-helmet";

const MyAddedFoods = () => {
    const axios = AxiosData()
    const email = auth.currentUser.email;

    const { isLoading, data } = useQuery({
        queryKey: ['foods'],
        queryFn: () =>
            axios.get(`/foods?email=${email}`).then((res) => {
                console.log(res.data);
                return res.data;
            }),
    });

    if (isLoading) {
        return <Lottie className="h-80vh h-[80vh] w-10/12 mx-auto" animationData={loadingdata} loop={true} />
    }
    return (
        <div>
            <Helmet>
                <title>My added foods</title>
            </Helmet>
            <div>
                {
                    (data.length > 0) ? <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 mx-auto py-10">
                        {
                            data?.map(item => <MyFoodCard key={item._id} data={item}></MyFoodCard>)
                        }
                    </div> : <Lottie className=" w-10/12 h-[80vh] flex justify-center mx-auto" animationData={NoData} loop={true} />
                }
            </div>
        </div>
    );
};

export default MyAddedFoods;