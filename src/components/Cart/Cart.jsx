
import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    
    return (
        <div>
            <h5>Cart: {cart.length} </h5>
            <div className='cart-container img'>
                {
                    cart.map(cart => <div key={cart.id}>  <img  src={cart.img} /> <button onClick={()=>handleRemoveFromCart(cart.id)}>Remove</button> </div>)
                }
            </div>
           
        </div>
    );
};

Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;