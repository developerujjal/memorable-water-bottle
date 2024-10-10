import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottle.css"

const Bottles = () => {

    const [bottles, setBottles] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    return (
        <div>
            <h1>Bottle: {bottles.length}</h1>
            <div className="bottle-container">
            {
                bottles.map((bottle) => <Bottle
                    allBottle={bottle}
                    key={bottle.id}
                ></Bottle>)
            }
            </div>
        </div>
    )
}

export default Bottles;