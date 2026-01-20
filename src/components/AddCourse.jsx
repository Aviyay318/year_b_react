import {useState} from "react";
import axios from "axios";

function AddCourse() {
    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const[message,setMessage] = useState("");

    const addCourse =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:8080/add-course",
            {
            courseId:courseId,
            courseName:courseName
        }).then((response) => {
            if (response.data!==null){
                if (response.data.successes){
                    setMessage("The course was added successfully.")
                    setCourseId("");
                    setCourseName("");
                }else if(response.data.errorCode === 1004){
                    setMessage("The course already exists...")
                }
            }
        })
    }

    return(
        <div>
            <form onSubmit={addCourse}>
                <h2>Add Course</h2>
                <div>
                    <label>course id:</label>
                    <input
                        type={"number"}
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}/>
                </div>
                <div>
                    <label>course name:</label>
                    <input
                        type={"text"}
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}/>
                </div>
                <button type="submit">Add Course</button>
                <p>{message}</p>
            </form>
        </div>
    )

}

export default AddCourse;