import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottle.css"
import { addDataToLS, getLocalStorage, handleRemove } from "../../utility/localStorage";
import CartPro from "../Cart/CartPro";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart]= useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    useEffect(()=>{

        if(bottles.length > 0){
            const getCartValue = getLocalStorage();

            const saveCart = [];
                for(const productID of getCartValue){
                   const eachBottle = bottles.find((bottle)=> bottle.id === productID);
                   if(eachBottle){
                    saveCart.push(eachBottle)
                   }
                }

                setCart(saveCart)

        }
    
    }, [bottles])


    const handleCard = (allBottle)=>{
       const newCart = [...cart, allBottle];
       setCart(newCart)
       addDataToLS(allBottle.id)
    }

    const handleRemoveFromCart = (id)=>{

        //Visual Cart Remove
        const remaining = cart.filter((bottle)=> bottle.id !== id)
        setCart(remaining)
        //Remove from Local Storage
        handleRemove(id)
    }



    return (
        <div>
            <CartPro cart={cart} handleRemoveFromCart={handleRemoveFromCart}></CartPro>
            
            <h1>Bottle: {bottles.length}</h1>
            <div className="bottle-container">
            {
                bottles.map((bottle) => <Bottle
                    allBottle={bottle}
                    key={bottle.id}
                    handleCard={handleCard}
                ></Bottle>)
            }
            </div>
        </div>
    )
}

export default Bottles;