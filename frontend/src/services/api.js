
import axios from 'axios'
import config from '../services/config.json'

const baseURL = config.url + config.porta + config.path;

const api = axios.create({
    baseURL
})

export default api;