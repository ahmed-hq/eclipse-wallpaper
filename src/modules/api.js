// class API {
//   constructor(){
//     this.randomPhotosAPI = null;
//   }

//   async  getRandomPhotos() {
//     const body = document.body
//     const res = await fetch(
//       'https://api.unsplash.com/photos/random?count=30&collections=4369173', {
//         method: 'GET',
//         headers: {
//           Authorization: `Client-ID ${process.env.ACCESS_KEY}`
//         }
//       }
//     );
//     this.randomPhotosAPI = await res.json();
//   }
// }

// const api = new API();
// export { api }