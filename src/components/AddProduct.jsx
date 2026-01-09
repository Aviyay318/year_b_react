import {useEffect, useState} from "react";
import axios from "axios";

function AddProduct() {
    const[name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [color,setColor]=useState("");
    const [url,setUrl]=useState("");
    const [category,setCategory]=useState("");
    const [categories,setCategories]=useState([]);
    const [messge,setMessge]=useState("");


    useEffect(()=>{
       axios.get("http://localhost:8080/get-categories")
           .then((response) => {
               if (response.data!==null){
                   setCategories(response.data)
               }
           })
    },[])

    const nameRegex=()=>{
        const regex = /^[a-z,A-Z]{3,}$/;
       return  regex.test(name)
    }
    const phoneRegex=()=>{
        const regex = /^05\d{8}$/;
        return  regex.test(price)
    }
    const imgRegex=()=>{
        const regex = /\.(jpg|png|jpeg)$/;
        return regex.test(url)

    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        if (imgRegex()){
            console.log("successes")
        }else {
            console.log("error")
        }

        axios.post("http://localhost:8080/add-product",
            {
               name:name,
               price:price,
               color:color,
               category:category,
               url:url,
            }).then((response) => {
                if (response.data!==null){
                   if (!response.data.successes && response.data.errorCode!==null){
                       setMessge("The product already exists")
                   }else {
                       setMessge("The product has been successfully added")
                   }
                }
        })


    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>enter name</label>
                    <input
                        placeholder={"product name"}
                        type={"text"}
                        value={name}
                        onChange={(e) => {setName(e.target.value);setMessge("")}}/>
                </div>

                <div>
                    <label>enter price</label>
                    <input
                        placeholder={"product price"}
                        type={"number"}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>enter color</label>
                    <input
                        placeholder={"product color"}
                        type={"text"}
                        value={color}
                        onChange={(e) => setColor(e.target.value)}/>
                </div>

                <div>
                    <label>enter img url</label>
                    <input
                        placeholder={"url img "}
                        type={"text"}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}/>
                </div>

                <div>
                <label>choose category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>בחר קטגוריה</option>
                        {
                            categories.map((category,index)=>{
                                return(
                                    <option key={index} value={category.id}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <button disabled={messge.length>0} type={"submit"}>Send</button>
                <p>{messge}</p>
            </form>
        </div>
    )


}

export default AddProduct;