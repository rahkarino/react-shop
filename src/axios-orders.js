import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-redux-main-ca2f8-default-rtdb.firebaseio.com/'
})

export default instance