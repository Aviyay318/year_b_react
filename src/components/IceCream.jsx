import {useState} from "react";
import axios from "axios";

function IceCream(){
const[fruits,setFruits]=useState(["תפוח" , "בננה", "מלון" , "תות" ]);
const[chocolate,setChocolate] = useState(["שוקולד לבן" , "שוקולד פרה" , "שוקולד מריר", "השחר" , "נוטלה" ])
const [age,setAge]=useState();
const[likeIceCream,setLikeIceCream]=useState();
const[isValiv,setIsValiv]=useState(null);
const[flavors,setFlavors]=useState([]);
const[flavorsChocolate,setFlavorsChocolate]=useState("");

const handleFlavor=(fruit)=>{
   setFlavors(flavors.includes(fruit)?flavors.filter(f=>f!==fruit):[...flavors,fruit])
    console.log(flavors)
}

const sendNewFlavore=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/addFlavors", {
     age:age,
     flavors:flavors
    }).then((response)=>{
        if (response.data){
            setIsValiv(response.data)
        }
    })
}


    return(
        <form onSubmit={sendNewFlavore}>
            <input placeholder={"age"}
                   min={0}
                   max={130}
                   type={"number"}
                   value={age}
                   onChange={(e) => setAge(e.target.value)}/>


            {
                fruits.map((fruit,index) => {
                    return (
                        <label  key={index}>
                            <input
                                   type={"checkbox"}
                                   checked={flavors.includes(fruit)}
                            onChange={() => handleFlavor(fruit)}/>

                            {fruit}
                        </label>

                    )
                })
            }
            <select value={flavorsChocolate} onChange={(e) => setFlavorsChocolate(e.target.value)} >
                {
                    chocolate.map((choice,index) => {
                        return(
                            <option key={index} value={choice}>{choice}</option>
                        )
                    })
                }
            </select>
            <div>
                <label>no</label>
                <input name={likeIceCream}
                       value={"no"}
                       type={"radio"}
                       checked={likeIceCream === "no"}
                       onChange={(e) => setLikeIceCream(e.target.value)}
                />
                <label>yes</label>
                <input name={likeIceCream}
                       value={"yes"}
                       type={"radio"}
                       checked={likeIceCream === "yes"}
                       onChange={(e) => setLikeIceCream(e.target.value)}
                />
            </div>
            <button type={"submit"}>send</button>
            {
                isValiv===true?<div>
                    <p>התקבלת</p>
                    <button>to register</button>
                </div>:<p>לא הקבלת </p>
            }
        </form>
    )


}

export default IceCream;