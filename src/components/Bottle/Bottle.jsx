import "./Bottle.css"

const Bottle = ({allBottle}) => {
    const {img, name, price}= allBottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;