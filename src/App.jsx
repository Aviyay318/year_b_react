import "./App.css"
import Board from "./components/Board.jsx";
import {useState} from "react";
import TodoList from "./components/TodoList.jsx";
import Ex1 from "./components/Ex1.jsx";
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


function App() {
   const [products, setProducts] = useState([]);
   const [cart,setCart] = useState([])




    return (
        <div>




            <BrowserRouter>
                <Navbar />

               <Routes>
                   <Route path={"/"} element={<HomePage />}/>
                   <Route path={"/todolist"} element={<TodoList />}/>
                   <Route path={"/board"} element={<Board/>}/>
                   <Route path={"/cart"} element={<Cart />} />
                   <Route path={"/productList"} element={<Products products={products} setProducts={setProducts} />}/>
               </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;
