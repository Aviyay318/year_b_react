function SingleProduct({product ,addToCart}){
   return(
       <div>
           <p style={{color:product.color}}>{product.name} - {product.price} $</p>
           <button onClick={()=>addToCart(product)}>Add to cart</button>
       </div>
   )
}

export default SingleProduct;