import {useState} from "react";
import axios from "axios";

function BarrowBook(){
    const [bookName, setBookName] = useState("");
    const [isBarrow, setIsBarrow] = useState(true);
    const[canClick, setCanClick] = useState(false);
    const checkBook =()=>{
        axios.get("http://localhost:8080/check-book?bookName=" + bookName).then((response)=>{
            if (response.data.successes){
                setIsBarrow(response.data.canBarrow)

            }
        })
    }
    const barrow=()=>{
        //SERVER
        setCanClick(true);
    }

 return(
     <div>
         <h1>Barrow Book</h1>
         <input value={bookName}
         type={"text"}
         placeholder={"Enter Book name"}
         onChange={(e) => setBookName(e.target.value)}/>
         <button onClick={checkBook}>check</button>
         {
             isBarrow?<div>
                 <p>זמין</p>
                 <p>האם תרצה להשאיל?</p>
                 <button disabled={canClick} onClick={barrow}>Barrow</button>
             </div>:<p>לא זמין </p>
         }
     </div>
 )


}export default BarrowBook