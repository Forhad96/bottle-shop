import PropTypes from 'prop-types'
import './Bottle.css'

const Bottle = ({bottle,handlerBuyNow}) => {
    const {name,price,img} = bottle
    // console.log(name);
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() =>handlerBuyNow(bottle)}>Buy Now</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlerBuyNow: PropTypes.func.isRequired
}

export default Bottle;