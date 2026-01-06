import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product.jsx";

const ShowCategory = () => {

    const [categories,setCategories] = useState([]);
    const [selectCategory,setSelectCategory] = useState("");
    const [products,setProducts] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/get-categories")
          .then((response) => {
              if (response.data!==null){
                  setCategories(response.data)
              }
          })
    },[])

    // const handleChoice=()=>{
    //    axios.get("http://localhost:8080/get-products-by-category-id?categoryId=" + selectCategory)
    //        .then((response) => {
    //            if (response.data!==null){
    //                setProducts(response.data)
    //            }
    //        })
    // }
    useEffect(()=>{
        axios.get("http://localhost:8080/get-products-by-category-id?categoryId=" + selectCategory)
               .then((response) => {
                   if (response.data!==null){
                       setProducts(response.data)
                   }})
    },[selectCategory])

    return(
        <div>
            {
                categories.length===0?
                    <p>No categories yet...</p>:
                    <select value={selectCategory}
                            onChange={(event)=>setSelectCategory(event.target.value)}>
                        <option> בחר קטגוריה </option>
                        {
                          categories.map((category,index)=>{
                              return(
                                  <option value={category.id} key={index}>{category.name}</option>
                              )
                          })
                        }
                    </select>
            }
            {/*<button onClick={handleChoice}>send</button>*/}

            {
                products.length!==0&&
                <div>
                    {
                        products.map((product,index)=>{
                            return(
                                <Product key={index} product={product} />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
 export default ShowCategory;