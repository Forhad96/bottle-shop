import PropTypes from 'prop-types'
import './Cart.css'
const Cart = ({cart,handlerRemoveFromCart}) => {
    return (
        <div className="cart-container">
            <h2>Cart:{cart.length}</h2>
            <div className="cart-card">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={()=>handlerRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
     cart:PropTypes.array.isRequired,
     handlerRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;