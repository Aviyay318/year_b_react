import {useEffect, useState} from "react";
import axios from "axios";

function Courses(){
const[courses,setCourses]=useState([]);

useEffect(()=>{
    axios.get("http://localhost:8080/get-all-courses").then(res=>{
        if (res.data!==null){
            setCourses(res.data)
        }
    })
},[])

    return(
        <div>
            <h2>Courses:</h2>
            <select>
                <option value={""}>choose course</option>
                {
                    courses.map((course=>{
                        return(
                            <option key={course.courseId} value={course.courseId}>course_id: {course.courseId}- course_name:{course.courseName}</option>
                        )
                    }))
                }
            </select>
        </div>
    )
}export default Courses;