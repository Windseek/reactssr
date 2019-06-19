import axios from 'axios';

let serverRequest = axios.create({
  baseURL: 'http://47.95.113.63/ssr/'
});

let clientRequest = axios.create({
  baseURL: '/'
});

export { serverRequest, clientRequest };