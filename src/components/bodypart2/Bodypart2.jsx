import React from 'react'
import './bodypart2.css'
const Bodypart2 = (props) => {
    return (
        <>
        

            <div className='bodypart2' style={{ backgroundImage:`url(${props.bgcolor})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
                <div className='bodypart2child'>
                    <p className='para1'>feel special
                        more often.
                    </p>
                    <p className='para2'>exclusive rewards for paying your bills
                    </p>
                    <p className='para3'>every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good
                    </p>
                    <button className='btn'>Explore rewards</button>
                </div>
            </div>
            
        </>
    )
}

export default Bodypart2;
