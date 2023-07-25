import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


//endpoint sobre el cual realizo las peticiones
//ip de mi equipo
const baseURL= 'http://192.168.40.34:8080/api';

//peticiones http
const userDB = axios.create({ baseURL});

userDB.interceptors.request.use(
    async(config)=>{
        const token= await AsyncStorage.getItem('token');
        if(token) {
            config.headers["x-token"]= token;
        }
return config;
    }
)



export default userDB;