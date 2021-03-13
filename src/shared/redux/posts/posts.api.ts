import axios from "axios";

const baseAPI = "https://jsonplaceholder.typicode.com/";

export const getPosts = () => {

    return axios.get(`${baseAPI}posts`)
}