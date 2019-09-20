import axios from 'axios';
import { Redirect } from 'react-router-dom';
export function AuthLogin(data, auth=false) {
    axios.post('http://127.0.0.1:8000/api/token/', {
        username: data.username,
        password: data.password
    }).then(res => {
        localStorage.setItem('jwt-r', res.data.refresh)
        localStorage.setItem('jwt-a', res.data.access)
    })
    .catch(error => {
        error = error.response.request.statusText
        console.log(error)
    })
        
}