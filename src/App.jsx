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


function App() {

const addToken=()=>{
    Cookies.set("abc" ,"222");
    alert(Cookies.get("abc"));
    Cookies.remove("abc")

}

const[fruits,setfruits]=useState(["apple","banana","melon"]);
const[userFruits,setUserFruits]= useState([]);

function addFruits(fruit){

}

    return (
        <div>
           <BarrowBook />

           {/* <BrowserRouter>*/}
           {/*     <Navbar />*/}

           {/*    <Routes>*/}
           {/*        <Route path={"/"} element={<HomePage />}/>*/}
           {/*        <Route path={"/todolist"} element={<TodoList />}/>*/}
           {/*        <Route path={"/board"} element={<Board/>}/>*/}
           {/*        <Route path={"/cart"} element={<Cart />} />*/}
           {/*        <Route path={"/productList"} element={<Products products={products} setProducts={setProducts} />}/>*/}
           {/*        <Route path={"/register"} element={<Register />} />*/}
           {/*    </Routes>*/}
           {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
