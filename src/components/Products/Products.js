import React from 'react';

const Products = ({product, addToCart}) => {
    const {name, id} = product;
    return (
        <div style={{border: '1px solid #161616', margin: '10px', padding: '10px'}}>
            <p>ID: {id}</p>
            <h5>name: {name}</h5>
            <button onClick={() => addToCart(id, name)}>Add to cart</button>
        </div>
    );
};

export default Products;