import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle, handleCart}) => {
    const {name, img, price} = bottle;
  
    return (
        <div className="card-container">
            <h5>Name: {name} </h5>
            <img src={img}/>
            <p>Price: ${price}</p>
            <button onClick={()=> handleCart(bottle)}>Purchase</button>
           
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}
export default Bottle;
