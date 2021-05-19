import React from 'react'
import './Builder.css'

const Builder = props => {
    return (
        <div className="builder">
            <div className="product-title">{props.title}</div>
            <button onClick={props.add}>اضافه</button>
            <button onClick={props.sub}>حذف</button>
        </div>
    )
}

export default Builder