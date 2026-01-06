import axios from "axios";

const getCategories =()=>{
    return axios.get("http://localhost:8080/get-categories");
}