import React from 'react'
import './Input.scss'

const Input = (props) => {
    let inputElement = null
    let inputClass = ['input-element']
    if(props.invalid && props.focused) {
        inputClass.push('invalid')
    }
    switch(props.inputType) {
        case 'input': 
            inputElement = <input className={inputClass.join(' ')} onChange={props.change} {...props.elementConfig} value={props.value} />
            break
        case 'textarea': 
            inputElement = <textarea className="textarea-element" onChange={props.change} {...props.elementConfig} value={props.value} />
            break
        case 'select': 
            inputElement = <select className="select-element" onChange={props.change} {...props.elementConfig} value={props.value} />
            break
        default: 
            inputElement = <input className={inputClass.join(' ')} onChange={props.change} {...props.elementConfig} value={props.value} />
            break
    }
    return (<div className="form-row">{inputElement}</div>)
}

export default Input