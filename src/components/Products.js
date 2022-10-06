import Product from './Product'
import products from '../menu.json'
//import { cartContext } from '../CartContext'
//import { useContext } from 'react';
//import { useState, useEffect } from 'react';

const Products = () => {

    //const { name }  = useContext(cartContext);

/*
const[products, setProducts] = useState([]);

useEffect(() =>{
    fetch("")
    .then(response => {
        response.json();
    })
    .then(products => {
        setProducts(products)
    })

}, [products]);
*/

  return (
    <>
        <div className="container mx-auto pd-24">
            <h1 className="text-lg font-bold my-8">Products</h1>

            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map((product) => <Product key={product._id} product={product}/>)
                }
            </div>

        </div>
    </>
  )
}

export default Products