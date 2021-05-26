import React from 'react'
import './Loader.scss'
import Loading from '../../../assets/loading.gif'
const Loader = () => {
    return (<p className='loader'><img src={Loading}></img></p>)
}

export default Loader