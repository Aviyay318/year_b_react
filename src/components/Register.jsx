import { useState } from "react";
import axios from "axios";

function Register() {
   const [user, setUser] = useState({
       username:"",
       password:"",
       phoneNumber:"",
       gender:"",
       email:""
   });
   const handleRegister=()=>{
      axios.post("http://localhost:8080/register-user",user)
          .then((response)=>{
              if (response.data!==null){
                  if (response.data.successes){

                  }else {

                  }
              }
          })

   }

   return(
       <form onSubmit={handleRegister}>
           <h2>Register</h2>
           <div>
               <label>user name:</label>
               <input
                   type={"text"}
                   value={user.username}
                   onChange={(e) => setUser({...user, username: e.target.value})}/>
           </div>

           <div>
               <label>password:</label>
               <input
                   type={"password"}
                   value={user.password}
                   onChange={(e) => setUser({...user, password: e.target.value})}/>
           </div>

           <div>
               <label>phoneNumber:</label>
               <input
                   type={"number"}
                   value={user.phoneNumber}
                   onChange={(e) => setUser({...user, phoneNumber: e.target.value})}/>
           </div>

           <div>
               <label>gender:</label>
               <label>
                   <input name={user.gender}
                          value={"male"}
                          type={"radio"}
                          checked={user.gender === "male"}
                          onChange={(e) => setUser({...user, gender: e.target.value})}
                   />
                   male
               </label>
               <label>
                   <input name={user.gender}
                          value={"female"}
                          type={"radio"}
                          checked={user.gender === "female"}
                          onChange={(e) => setUser({...user, gender: e.target.value})}
                   />
                   female
               </label>
           </div>
           <div>
               <label>email:</label>
               <input
                   type={"text"}
                   value={user.email}
                   onChange={(e) => setUser({...user, email: e.target.value})}/>
           </div>

           <button type={"submit"}>register</button>
       </form>
   )
}


export default Register;
