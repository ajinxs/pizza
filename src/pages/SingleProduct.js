import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import products from '../menu.json'

const SingleProduct = () => {

    
    const[product, setProduct] = useState({});
    const params = useParams();
    console.log(params);
    
    useEffect(() => {
        fetch(`http://localhost:3000/products/${params._id}`)
        .then((response)=> response.json())
        .then((product)=> setProduct(product))
    }, [params._id])
    
    const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-12">
        <button className="mb-12 font-bold" onClick={() => { navigate('/')}}>Back</button>

        <div className="flex">
            <img src={product.image} alt="pizza_image"/>
            
            <div className="ml-16">
                <h1 className="text-xl font-bold ">{product.name}</h1>
                <div className="text-md">{product.size}</div>
                <div className="font-bold mt-2">{product.price}</div>
                <button className="bg-yellow-500 py-1 px-8 mt-4 rounded-full font-bold">Add to Cart</button>
            </div>
        </div>
        
    </div>
  )
}

export default SingleProduct