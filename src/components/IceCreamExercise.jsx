import {useState} from "react";
import axios from "axios";

function IceCreamExercise(){

    const[age,setAge] = useState('');
    const[name,setName] = useState('');
    const[flavors,setFlavors] = useState([ "תפוח", "בננה", "מלון" , "תות"])
    const [userFlavors,setUserFlavors] = useState([]);
    const[choclate,setChoclate] = useState(["שוקולד לבן" ," שוקולד פרה ", "שוקולד מריר", "השחר" , "נוטלה"]);
    const [userChocolate,setUserChocolate] = useState("");
    const[likesIceCream,setLikesIceCream]=useState("");
    const [dayesOfIceCream,setDayesOfIceCream]=useState("");
   const [isAccepted, setIsAccepted] = useState(null);

    ///userFlavors[תפוח , בננה ,תןת]
    ///

    const handleFruit=(fruit)=>{
        setUserFlavors(userFlavors.includes(fruit) ?
            userFlavors.filter(f=> f!==fruit)
            : [...userFlavors,fruit]
        )

        console.log(userFlavors)
    }

    const checkDisabled=()=>{
        return age.length<=0||name.length<1||userFlavors.length<2||userChocolate.length===0||likesIceCream.length===0||dayesOfIceCream.length===0
    }

// const getStudentsByCourseId=()=>{
//         const courseId= 4589;
//         axios.get("http://localhost:8080/get-students?courseId=" + courseId)
// }

const register =()=>{
    axios.post("http://localhost:8080/register",{
        age:age,
        name:name,
        userChocolate:userChocolate,
        flavors:userFlavors,
        dayesOfIceCream:dayesOfIceCream,
        isLikesIceCream:likesIceCream
    }).then((response)=>{
        if (response.data!==null&&response.data){
           alert("נרשמת בהצלחה")
        }
    })
}

    const handleIceCreamForm=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/checkIceCream",{
            age:age,
            name:name,
            userChocolate:userChocolate,
            flavors:userFlavors,
            dayesOfIceCream:dayesOfIceCream,
            isLikesIceCream:likesIceCream
        }).then((response)=>{
            if (response.data!==null){
                if (response.data){
                    setIsAccepted(true)
                }else{
                    setIsAccepted(false)
                }
            }
        })
    }

    return(
        <form onSubmit={handleIceCreamForm}>
            <h2>Ice Cream</h2>
            <input
                type={"number"}
                value={age}
                placeholder={"enter age: "}
                onChange={(e) => setAge(e.target.value)}/>

            <input type={"text"}
                   value={name}
                   placeholder={"enter name: "}
                   onChange={(e) => setName(e.target.value)}/>

            <br/>
            {/*בחירה מרובה*/}
            {
                flavors.map((flavor, index) => {
                    return (
                        <label key={index}>
                            <input type={"checkbox"}
                                   checked={userFlavors.includes(flavor)}
                                   onChange={() => handleFruit(flavor)}/>
                            {flavor}
                        </label>
                    )
                })
            }
            <br/>
            <select value={userChocolate} onChange={(e) => setUserChocolate(e.target.value)}>
                {
                    choclate.map((choclateChioce, index) => {
                        return (
                            <option key={index} value={choclateChioce}>{choclateChioce}</option>
                        )
                    })
                }
            </select>
        <br />
            <input type={"number"}
            value={dayesOfIceCream}
                   placeholder={"enter dayesOfIceCream"}
            onChange={(event)=>setDayesOfIceCream(event.target.value)}/>

            <br/>
            <label>do you like ice Creame : </label>
            <label>
                Yes
                <input type={"radio"}
                name={likesIceCream}
                value={"yes"}
                checked={likesIceCream==="yes"}
                onChange={(e)=>setLikesIceCream(e.target.value)}/>
            </label>

            <label>
                No
                <input type={"radio"}
                name={likesIceCream}
                value={"no"}
                checked={likesIceCream==="no"}
                onChange={(e)=>setLikesIceCream(e.target.value)}/>
            </label>
            <button disabled={checkDisabled()} type={"submit"}>Send</button>

            {
                isAccepted!==null&&<div>

                    {
                        isAccepted&&isAccepted? <div>
                            <label>you accepted</label>
                            <button onClick={register}>register</button>
                        </div> : <label>not accepted</label>
                    }
                </div>
            }
        </form>
    )



}export default IceCreamExercise;