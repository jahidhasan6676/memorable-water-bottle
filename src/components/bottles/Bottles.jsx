import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
 

    useEffect(()=>{
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    // load cart from local storage
    useEffect(()=>{
        if(bottles.length > 0){
            const storeCart = getStoredCart();
            const saveCart = [];
            for(const id of storeCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart);
        }
        
    },[bottles])


    // set handle cart
    const handleCart = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id)
        
    }


    const handleRemoveFromCart = (id) =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLs(id)

    }
       return (
        <div>
            <h4>Bottles here: {bottles.length} </h4>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart} ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;