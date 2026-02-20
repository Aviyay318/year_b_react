//טופס הרשמה, ושליחה לשרת , והצגת תשובה בהתאם , - מעבר להוספת ספר חדש

import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddAuthor() {
    const[name,setName] = useState("")
    const [id,setId] = useState("")
    const[password, setPassword] = useState("")
   const navigate = useNavigate();

    const handleAuthor =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:8080/add-author",{
            id:id,
            name:name,
            password:password
        }).then((response)=>{
            if (response.data!=null){
                if (response.data.success){
                    navigate("/addBook")
                }
            }
        })
    }
const checkValidation=()=>{
        return name.length===0||id.length===0||password.length===0;
}



    return(
        <form onSubmit={handleAuthor}>
            <h2>add author</h2>
            <input type={"number"}
                   placeholder={"enter id"}
                   value={id}
                   onChange={(e)=>setId(e.target.value)}/>

            <input type={"text"}
                   placeholder={"enter name "}
                   value={name}
                   onChange={(e)=>setName(e.target.value)}/>

            <input type={"password"}
                   placeholder={"enter password"}
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/>

            <button disabled={checkValidation} type={"submit"}> submit </button>
        </form>
    )


}export default AddAuthor;