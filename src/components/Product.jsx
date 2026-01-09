function Product({product}){
    return(
        <div>
          <h2 style={{color:product.color}}>{product.name} - {product.price} $</h2>
          <img style={{width:"100px" , height:"100px"}} src={product.url} alt={product.name}/>
        </div>
    )
}export default Product;