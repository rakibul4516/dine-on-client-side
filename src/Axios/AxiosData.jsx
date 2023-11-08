import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dine-on-server.vercel.app/api/v1',
    withCredentials:true,
  });
const AxiosData = () => {
    return instance;
};

export default AxiosData;