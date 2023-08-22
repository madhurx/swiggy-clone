export const CATEGORY_IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const CATEGORY_API_URL = "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999";



// async function getRestaurants() {
//     // handle the error using try... catch
//     try {
//       const response = await fetch(swiggy_api_URL);
//       const json = await response.json();

//       // initialize checkJsonData() function to check Swiggy Restaurant data
//       async function checkJsonData(jsonData) {
//         for (let i = 0; i < jsonData?.data?.cards.length; i++) {

//           // initialize checkData for Swiggy Restaurant data
//           let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//           // if checkData is not undefined then return it
//           if (checkData !== undefined) {
//             return checkData;
//           }
//         }
//       }

//       // call the checkJsonData() function which return Swiggy Restaurant data
//       const resData = await checkJsonData(json);

//       // update the state variable restaurants with Swiggy API data
//       setAllRestaurants(resData);
//       setFilteredRestaurants(resData);
//     } catch (error) {
//       console.log(error);
//     }
//   }