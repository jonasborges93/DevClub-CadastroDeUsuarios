import axios from 'axios'

const api = axios.create({
    baseURL: 'https://devclub-apinodejs.onrender.com/'
})

export default api