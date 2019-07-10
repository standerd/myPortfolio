import axios from 'axios';


const instance = axios.create({
    baseURL: "https://burger-app-project-6fd2d.firebaseio.com/"
})

export default instance;