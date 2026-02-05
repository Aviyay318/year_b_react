import {useEffect, useState} from "react";
import axios from "axios";

function TestClient() {
const[categories, setCategories] = useState([]);
const[userCategories, setuserCategories] = useState([]);
const[userId,setUserId] = useState(123);

    useEffect(() => {
        axios.get("http://localhost:8080/get-categories").then((response) => {
            if (response.data!==null){
                setCategories(response.data)
            }
        })
        axios.get("http://localhost:8080/get-categories-by-userId?userId=" + userId).then(
            (response) => {
                if (response.data!==null){
                    setuserCategories(response.data)
                }
            }
        )
    }, []);

    return(
        <div>

        </div>
    )
}