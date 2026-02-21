import "./App.css"
import Board from "./components/Board.jsx";
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList.jsx";
import Register2 from "./components/Register2.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import FourInARow from "./components/FourInARow.jsx";
import Setting from "./components/Setting.jsx";
import axios from "axios";
import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";
import Register from "./components/Register.jsx";
import ImageComponent from "./components/DisplayImage.jsx";
import ShowCategory from "./components/ShowCategory.jsx";
import AddProduct from "./components/AddProduct.jsx";
import Cookies from "js-cookie";
import Login from "./components/Login.jsx";
import AddCourse from "./components/AddCourse.jsx";
import Courses from "./components/Courses.jsx";
import IceCreamFlavorForm from "./components/IceCreamFlavorForm.jsx";
import IceCream from "./components/IceCream.jsx";
import BarrowBook from "./components/barrowBook.jsx";
import AddBook from "./components/AddBook.jsx";
import AddAuthor from "./components/AddAuthor.jsx";
import IceCreamExercise from "./components/IceCreamExercise.jsx";
import ShimritIceCream from "./components/ShimritIceCream.jsx";
import MentorApplication from "./components/MentorApplication.jsx";


function App() {

const addToken=()=>{
    Cookies.set("abc" ,"222");
    alert(Cookies.get("abc"));
    Cookies.remove("abc")

}

const[fruits,setFruits] = useState(["apple","banana","melon"])
const[userChoice,setUserChoice]=useState("");



    return (
        <div>
       <MentorApplication />


            {/*<label>*/}
            {/*    male*/}
            {/*    <input*/}
            {/*        name={gender}*/}
            {/*        value={"male"}*/}
            {/*        checked={gender==="male"}*/}
            {/*        onChange={(e) => setGender(e.target.value)}*/}
            {/*        type={"radio"}/>*/}
            {/*</label>*/}

            {/*<label>*/}
            {/*    female*/}
            {/*    <input*/}
            {/*        name={gender}*/}
            {/*        value={"female"}*/}
            {/*        checked={gender==="female"}*/}
            {/*        onChange={(e) => setGender(e.target.value)}*/}
            {/*        type={"radio"}/>*/}
            {/*</label>*/}




            {/*<select value={userChoice} onChange={(e) => setUserChoice(e.target.value)}>*/}
            {/*    <option value={"תפוח"}>תפוח</option>*/}
            {/*    <option value={"banana"}>2</option>*/}
            {/*    <option value={"998700-30"}>לינארית</option>*/}
            {/*    <option value={4}>4</option>*/}
            {/*</select>*/}


            {/* בחירה מרובה - ק'אקצ בוקס*/}
            {/* בחירה מתוך אפשרויות יחידה - סלקט ואופשיין*/}
            {/* בחירה יחידה כן/לא ,מגדר יהיה רדיו*/}


            {/*<label>*/}
            {/*    זכר*/}
            {/*    <input type={"radio"}*/}
            {/*           name={gender}*/}
            {/*           value={"זכר"}*/}
            {/*    checked={gender==="זכר"}*/}
            {/*    onChange={(e) => setGender(e.target.value)}/>*/}
            {/*</label>*/}

            {/*<label>*/}
            {/*    נקבה*/}
            {/*    <input type={"radio"}*/}
            {/*           name={gender}*/}
            {/*    value={"נקבה"}*/}
            {/*    checked={gender==="נקבה"}*/}
            {/*    onChange={(e)=>setGender(e.target.value)}/>*/}
            {/*</label>*/}


            {/*<select value={userCity} onChange={(e)=>{setUserCity(e.target.value);alert(userCity)}}>*/}
            {/*    <option value={1}>אשקלון</option>*/}
            {/*    <option value={2}>אשדוד</option>*/}
            {/*    <option value={3}>חברון</option>*/}
            {/*</select>*/}

            {/* <BrowserRouter>*/}
            {/* /!*<Navbar />*!/*/}

            {/*    <Routes>*/}
            {/*        /!*<Route path={"/"} element={<HomePage />}/>*!/*/}
            {/*        /!*<Route path={"/addBook"} element={<AddBook />} />*!/*/}
            {/*        /!*<Route path={"/AddAuthor"} element={<AddAuthor />} />*!/*/}


            {/*        <Route path={"/todolist"} element={<TodoList />}/>*/}
            {/*        <Route path={"/board"} element={<Board/>}/>*/}
            {/*        <Route path={"/cart"} element={<Cart />} />*/}
            {/*        /!*<Route path={"/productList"} element={<Products products={products} setProducts={setProducts} />}/>*!/*/}
            {/*        <Route path={"/register"} element={<Register />} />*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
