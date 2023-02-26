import React from 'react'
import Ratingcompo from './Ratingcompo';
import './ratingpart.css'
const Ratingpart = () => {
  return (
    <>
      <div className='ratingdiv'>
        <Ratingcompo  heading1="4.8" tag="app store" tag1="Download the App" rate="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" srcc="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"  />
        <Ratingcompo heading1="4.7" tag="play store" tag1="Download the App" rate="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" srcc="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" />
      </div>
    </>
  )
}

export default Ratingpart;
