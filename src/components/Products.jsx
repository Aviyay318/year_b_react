import {useEffect} from "react";
import axios from "axios";
import Product from "./Product.jsx";

function Products({products ,setProducts}) {

    useEffect(() => {
        axios.get("http://localhost:8080/get-products")
            .then(response=>{
                setProducts(response.data)
            })
    },[])

    return(
        <div>
            <h1>Products</h1>
            {
                products.length!==0?
                <div>
                    {
                        products.map(product=>{
                            return(
                                <Product product={product} />
                            )
                        })
                    }
                </div>
                    :
                    <div> in loading...</div>
            }
        </div>
    )

}export default Products;