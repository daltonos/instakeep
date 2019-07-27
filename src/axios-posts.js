import axios from "axios";

const instance = axios.create({
    baseURL: "https://job-interview-e18c6.firebaseio.com/"
});

export default instance;