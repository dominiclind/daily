import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('AJAX REQUEST TO : ' + config.url);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export function getWorkouts() {
	return new Promise((resolve, reject) => {
		API.get(`/dailies`).then(res => {
	    const { data } = res;
	    const { workouts = [], featured = [] } = data;

	    resolve({workouts, featured});
	  })
  }) 
}