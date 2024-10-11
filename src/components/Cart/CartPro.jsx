import PropTypes from 'prop-types';
import './CartPro.css';

const CartPro = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cartShow-container">
                {
                    cart.map((singelCart, index) => <div key={index}>
                        <img src={singelCart.img} alt="img" />
                        <button onClick={()=> handleRemoveFromCart(singelCart.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

CartPro.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired

}

export default CartPro;