import axios from 'axios';

//endpoint sobre el cual realizo las peticiones
//ip de mi equipo
const baseURL= 'http://192.168.120.56:8080/api';

//peticiones http
const userDB = axios.create({ baseURL});




export default userDB;