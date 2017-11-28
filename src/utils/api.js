import axios from 'axios';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '5cnboayn',
  dataset: 'workouts',
  //token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

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

export function getData() {
  const workoutQuery = '*[_type in ["workout"]]';
  const sliderQuery = `*[_type=='sliders']{
    title,
    'workouts':workouts[]->{
      _id,
      title,
      subtitle,
      "created_at":_createdAt,
      image,
      instruction
    }
  }`;
  return new Promise((resolve, reject) => {
    Promise.all([client.fetch(workoutQuery),client.fetch(sliderQuery)]).then(res => {
      console.log(res);
      const workouts = res[0];
      const sliders = res[1];

      console.log(workouts,sliders);
      resolve({workouts, sliders});
    }).catch(err => {
      console.log('promise all catch');
      reject();
    })
  }); 

  // .then(bikes => {
  //   console.log(bikes);
  //   console.log('Bikes with more than one seat:')
  //   // bikes.forEach(bike => {
  //   //   console.log(`${bike.name} (${bike.seats} seats)`)
  //   // })
  // })
  // .then(bikes => {
  //   console.log(bikes);
  //   console.log('Bikes with more than one seat:')
  //   // bikes.forEach(bike => {
  //   //   console.log(`${bike.name} (${bike.seats} seats)`)
  //   // })
  // })

	// return new Promise((resolve, reject) => {
	// 	API.get(`/dailies`).then(res => {
	//     const { data } = res;
	//     const { workouts = [], sliders = [] } = data;

	//     resolve({workouts, sliders});
	//   })
 //    .catch(error => {
 //      reject(error)
 //    })
 //  }) 
}