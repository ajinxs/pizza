import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart'
import Navigation from './components/Navigation';
import { cartContext } from './CartContext'
import { useEffect, useState } from 'react';

const App = () => {

    const [cart, setCart] = useState({});

    //Getting info from local storeage
    useEffect(()=>{
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));  

    }, []);

    useEffect(()=>{
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    return (
       <>
            <Router>
                <cartContext.Provider value={{ cart, setCart }}>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/products" element={<ProductsPage/>}></Route>
                        <Route path="/products/:_id" element={<SingleProduct/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                    </Routes>
                </cartContext.Provider>
            </Router>
       </>
    )
}

export default App;