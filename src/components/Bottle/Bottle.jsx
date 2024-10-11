import PropTypes from 'prop-types';
import "./Bottle.css";

const Bottle = ({allBottle, handleCard}) => {
    const {img, name, price}= allBottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=> handleCard(allBottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    allBottle: PropTypes.object.isRequired,
    handleCard: PropTypes.func.isRequired
}

export default Bottle;