import axios from "axios";
import store from "@/store/index.js";

const req = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: `Bearer ${store.state.token}`
    }
});


export default req;