import React from 'react'
import SearchDivImg from '../../../src/assets/images/LandingPgLocnDivImg.webp';

const SearchLocation = () => {
  return (
    <div>
      <div className='grid grid-flow-col-dense'>
        <div className='col-span-7'>Search</div>
        <div className='col-span-5 w-fit justify-self-end'>
          <div className=''>
            <img src={SearchDivImg} alt="SearchDivImg" className='h-[540px] justify-end'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchLocation;
