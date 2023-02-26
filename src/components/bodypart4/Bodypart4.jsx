import React from 'react'
import Body4compo from './Body4compo';
import './bodypart4.css'
const Bodypart4 = () => {
  return (
    <>
      <div className='bodypart4maindiv'>

        <div className='bodypart4maindivpart1'>
          <Body4compo heading="we’ve got your back." content="gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time." imgsrc="https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png" />
          <Body4compo heading="begin yourwinning streak." content="use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck." imgsrc="https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png"/>

          <Body4compo heading="for youreclectic taste." content="get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of." imgsrc="https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png" />

          <Body4compo heading="more cashin your pockets." content="switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord." imgsrc="https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png" />

        </div>
      </div>
    </>
  )
}

export default Bodypart4;
