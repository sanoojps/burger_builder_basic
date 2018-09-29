import axios from 'axios';

const axios_instance = axios.create(
    {
        baseURL: "https://react-my-burger-1e22b.firebaseio.com/ "
    }
);


export default axios_instance;