import {Link, Route} from "react-router-dom";
import TodoList from "./TodoList.jsx";
import Board from "./Board.jsx";

function Navbar() {
   return (
       <nav style={{display:"flex" ,gap:20}}>
         <Link to={"/"}>Home Page </Link>
         <Link to={"/productList"}>products</Link>
         <Link to={"/cart"}>cart</Link>

       </nav>
   )
}

export default Navbar;