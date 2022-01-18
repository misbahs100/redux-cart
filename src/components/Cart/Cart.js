import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/actions/actionCreators';
// import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = () => {
    
    const {cart} = useSelector((state) => state);
    const {removeFromCart} = bindActionCreators(actionCreators, useDispatch())

    return (
        <div>
            <h3>This is cart</h3>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}>
                        {pd.name} 
                        <button onClick={() => removeFromCart(pd.cartId)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

// const mapStateToProps =  state => {
//     return {
//         cart: state.cart
//     }
// }

// const mapDispatchToProps = {
//     removeFromCart: removeFromCart
// }

export default Cart;
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);