import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Products from '../Products/Products';

const Shop = (props) => {
    console.log(props);
    const {products, addToCart} = props;
   
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map( pd => <Products 
                    product={pd}
                    key={pd.id}
                    addToCart={addToCart}
                    ></Products>)
            } 
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// // connectToStore(Shop);
// connect(mapStateToProps, mapDispatchToProps)(Shop);


export default connect(mapStateToProps, mapDispatchToProps)(Shop);