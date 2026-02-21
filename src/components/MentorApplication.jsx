import {useState} from "react";
import axios from "axios";

function MentorApplication(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const[yearsExperience, setYearsExperience] = useState("");
const[manegedTeam, setManegedTeam] = useState("");
const[technology, setTechnology] = useState(["Java", "Python","React","DevOps", "SQL" ,"Cyber"]);
const[userTechnology, setUserTechnology] = useState([]);
const[cities, setCities] = useState(["תל אביב" , "אשקלון" , "אשדוד", "בת ים "]);
const[city, setCity] = useState("");
const [hourFrontal, setHourFrontal] = useState("");
const[hourOnline, setHourOnline] = useState("");
const[result,setResult] = useState(null);


const handleTechnology=(technology)=>{
    setUserTechnology(userTechnology.includes(technology)?
        userTechnology.filter(t=>t!==technology)
    : [...userTechnology,technology]
    );
}

const checkDis=()=>{
    return name.length===0 || email.length===0 ;
}

const handleApplication=(e)=>{
    e.preventDefault()
axios.post("http://localhost:8080/application",{
    email,
    name,
    yearsExperience,
    manegedTeam,
    userTechnology,
    city,
    hourFrontal,
    hourOnline
}).then((response)=>{
    if (response.data!==null){
        if (response.data.accepted){
            setResult(true)
        }else{
            setResult(false)
        }
    }
})
}

const register=()=>{
    axios.post("http://localhost:8080/register",{email}).then(
        (response) => {
            if (response.data!==null){
               if (response.data.successes){
                   alert("נרשמת בהצלחה")
               }else{
                   alert("תקלה")
               }
            }
        }
    )
}

return(
    <form onSubmit={handleApplication}>
     <h2>application</h2>
        <input
        value={name}
        type={"text"}
        placeholder={"enter name"}
        onChange={(event)=>{setName(event.target.value)}}/>

        <input type={"email"}
        value={email}
        placeholder={"enter email"}
        onChange={(event)=>{setEmail(event.target.value)}}/>

        <input type={"number"}
        value={yearsExperience}
        placeholder={"enter years experience"}
        onChange={(event)=>{setYearsExperience(event.target.value)}}/>

        <div>
            <p>do you manged teem before </p>
            <label>
                Yes
                <input type={"radio"}
                       name={manegedTeam}
                       value={true}
                       checked={manegedTeam === true}
                       onChange={(e) => setManegedTeam(e.target.value)}/>
            </label>
            <label>
                No
                <input type={"radio"}
                       name={manegedTeam}
                       value={false}
                       checked={manegedTeam === false}
                       onChange={(e) => setManegedTeam(e.target.value)}/>
            </label>
        </div>
        <p>which technology you ues:</p>
        {
            technology.map((t,index)=>{
                return(
                    <label key={index}>
                        {t}
                        <input type={"checkbox"}
                        checked={userTechnology.includes(t)}
                        onChange={()=>handleTechnology(t)}/>
                    </label>
                )
            })
        }

        <select value={city} onChange={(e) => setCity(e.target.value)}>
            {
                cities.map((c,index)=>{
                    return(
                        <option key={index} value={c}>{c}</option>
                    )
                })
            }
        </select>

        <input type={"number"}
        value={hourFrontal}
        placeholder={"enter frontal ..."}
        onChange={(event)=>{setHourFrontal(event.target.value)}}/>

        <input type={"number"}
        value={hourOnline}
        placeholder={"enter online..."}
        onChange={(e)=>setHourOnline(e.target.value)}/>

        <button disabled={checkDis()} type={"submit"}>send application</button>

        {
            result!==null&&<div>
                {
                    result?<div>
                        <p>כל הכבוד התקבלת</p>
                        <button onClick={register}>register</button>
                    </div>:
                        <p>לא התקבלת</p>
                }
            </div>
        }

    </form>
)


}

export default MentorApplication;