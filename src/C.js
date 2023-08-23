import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {setLatitude} from './utils/redux/locationSlice';


const C = () => {
      const latitude = useSelector(store => store.location.latitude);
      const dispatch = useDispatch(); 
      const addLatitude = () => {
            dispatch(setLatitude(1));
            console.log(latitude);
      }

  return (
    <div>
      <h1>{latitude}</h1>
      
    </div>
  )
}

export default C
