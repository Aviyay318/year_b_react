import {useState} from "react";
import axios from "axios";

function Register() {

    const[user,setUser] = useState({
        name:"",
        password:"",
    });

    const register =()=>{
        //http: - פרוטוקול
        //localhost -> ip - הכתובת של השרת
        //8080 -> פורט
        //register-user הנתיב לשירות הספציפי בתוך האפליקציה / בשרת
        axios.post("http://localhost:8080/register-user",user).
        then((response)=>{
          if (response.data.success){

          }
        })

    }

    return(
        <div>
            <h3>Register</h3>
            <div>
                <input type={"text"}
                       value={user.name}
                       placeholder={"enter username"}
                       onChange={(e) => setUser({...user, name: e.target.value})}/>
                <br/>
                {user.name.length < 5 && <label> username len must to be at least 5 letters </label>}
            </div>


            <div>
                <input type={"password"}
                       value={user.password}
                       placeholder={"enter password"}
                       onChange={(e) => setUser({...user, password: e.target.value})}/>
                <br/>
                {user.password.length < 8 && <label> password len must to be at least 8 letters </label>}
            </div>

             <button onClick={register}>Register</button>
        </div>
    )
}

export default Register;