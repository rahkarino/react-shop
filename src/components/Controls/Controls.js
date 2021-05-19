import React from 'react'
import Builder from './Builder/Builder'
import './Controls.css'

const products = [
    { title: 'Product 1', type: 'product1' },
    { title: 'Product 2', type: 'product2' },
    { title: 'Product 3', type: 'product3' },
    { title: 'Product 4', type: 'product4' },
]

const Controls = props => {
    return (  
        <div className="controls">
            <div className="total-price"><p>مجموع قیمت: {props.totalPrice}</p></div>
            {products.map((item, index) => {
                return <Builder key={index} title={item.title} add={() => props.productAdd(item.type)} sub={() => props.productSub(item.type)} />
            })}
            <button className="order-btn" onClick={props.displayModal}>سفارش</button>
        </div>
    )
}

export default Controls