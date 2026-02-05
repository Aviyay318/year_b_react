import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8080/login?username=" + username + "&password=" + password)
            .then((response)=>{
                if (response.data.successes){
                    Cookies.set("token", response.data.token);
                }else {
                    setMessage("invalid username and password")
                }
            })
    }

    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
                <label>user name</label>
                <input
                    type={"text"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div>
                <label>password</label>
                <input
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    )


}

export default Login;