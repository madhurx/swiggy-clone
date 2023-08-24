
// // import React from 'react'
// // import {useSelector} from 'react-redux';

// // const getCordinates = () =>{
// // const latitude = useSelector();

// };



// export default getCordinates


//  function getLocation() {
//   if (navigator.geolocation) {
//   console.log(1);

//      navigator.geolocation.getCurrentPosition( showPosition,  showError);
//   } else {
//     return { res: "Geolocation is not supported by this browser." };
//   }
// }

// function showPosition(position) {
//   console.log(position.coords.latitude);
// }

// function showError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       return { res: "User denied the request for Geolocation."};
//     case error.POSITION_UNAVAILABLE:
//       return { res: "Location information is unavailable."};
//     case error.TIMEOUT:
//       return { res: "The request to get user location timed out."};
//     case error.UNKNOWN_ERROR:
//       return { res: "An unknown error occurred."};
//     default:
//       return { res: "UNKNOWN REASON"};
//   }
// }

// // function getLocation (){
// //   return showPosition();
// // }

// // function showPosition (position)
// // {
// //   console.log(2);
// //   return {A: "AS"}
// // }

// export default getLocation;


// import { useEffect } from 'react'
// import {useSelector, useDispatch} from 'react-redux';
// import {setLatitude} from './utils/redux/locationSlice';

// export const ueLocation = () => {
//     const latitude = useSelector(store => store.location.userData);
//       const dispatch = useDispatch(); 

//       useEffect (() => {
//         navigator.geolocation.getCurrentPosition((location) => {
//             if (location) dispatch(setLatitude(location.coords));
//           });

//       }, []);
// }