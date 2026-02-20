import {useState} from "react";
import axios from "axios";

function ShimritIceCream(){

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[countOfIceCreams,setCountOfIceCreams]=useState("");
    const[fruitsOption,setFruitsOptions]=useState(["תפוח" , "בננה", "מלון" , "תות" ]);
    const[choosenFruits,setChoosenFruits] = useState([])
    const[choclatesOption,setChoclatesOptions]=useState(["שוקולד לבן ", "שוקולד פרה "," שוקולד מריר", "השחר" , "נוטלה" ])
    const [choosenChocolate,setChoosenChocolate]=useState("");
    const[isLikeIceCream,setIsLikeIceCream]=useState("");
    const[message,setMessage]=useState(null);

    //[בננה,תפוח]
    const handleFruitChoice=(fruit)=>{
        setChoosenFruits(choosenFruits.includes(fruit)?
            choosenFruits.filter(f=>f!==fruit):
            [...choosenFruits,fruit]
        )
        console.log(choosenFruits)
    }


    const handleIcecream=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:8080/check-flavore",{
            name:name,
            age:age,
            count:countOfIceCreams,
            choosenFruits:choosenFruits,
            choosenChocolate:choosenChocolate,
            isLikeIceCream:isLikeIceCream,
        }).then((response)=>{
            if (response.data!==null){
                if (response.data){
                    setMessage("Accepted")
                }else{
                    setMessage("Not Accepted")
                }
            }
        })
    }

    return(
        <form onSubmit={handleIcecream}>
            <h2>Ice Cream</h2>
            <input type={"text"}
                   value={name}
                   placeholder={"enter name: "}
                   onChange={(e) => setName(e.target.value)}/>

            <input type={"number"}
                   value={age}
                   placeholder={"enter age: "}
                   onChange={(e) => setAge(e.target.value)}/>

            <input type={"number"}
                   value={countOfIceCreams}
                   placeholder={"enter amount of ice creams: "}
                   onChange={(e) => setCountOfIceCreams(e.target.value)}/>
            <br/>
            {
                fruitsOption.map((fruit, index) => {
                    return (
                        <label key={index}>
                            {fruit}
                            <input type={"checkbox"}
                                   checked={choosenFruits.includes(fruit)}
                                   onChange={() => handleFruitChoice(fruit)}/>
                        </label>
                    )
                })
            }
            <br/>
            <select value={choosenChocolate} onChange={(e) => setChoosenChocolate(e.target.value)}>
                {
                    choclatesOption.map((choclate, index) => {
                        return (
                            <option value={choclate}>{choclate}</option>
                        )
                    })
                }
            </select>
            <br/>
<label>do yoy like ice cream</label>
            <label>
                Yes
                <input name={isLikeIceCream}
                       value={"yes"}
                       checked={isLikeIceCream === "yes"}
                       onChange={(e) => setIsLikeIceCream(e.target.value)}
                       type={"radio"}/>
            </label>

            <label>
                No
                <input name={isLikeIceCream}
                       value={"no"}
                       checked={isLikeIceCream === "no"}
                       onChange={(e) => setIsLikeIceCream(e.target.value)}
                       type={"radio"}/>
            </label>
            <button type={"submit"}>send</button>
            {
                message!==null&&<p>{message}</p>
            }
        </form>
    )

}

export default ShimritIceCream;