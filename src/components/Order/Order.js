import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Button from '../UI/Button/Button'

const Order = props => {
    const summary = Object.keys(props.products).map((item, index) => {
        return (
            <li key={index}>
                {item}: {props.products[item]}
            </li>
        )
    })
    return(
        <Wrapper>
            <h3>Order</h3>
            <p><b>Total: </b>{props.total}</p>
            <ul>
                {summary}
            </ul>
            <p>Continue?...</p>
            <Button type='success' click={props.continue}>Yes</Button>
            <Button type='danger' click={props.cancel}>No</Button>
        </Wrapper>
    )
}

export default Order