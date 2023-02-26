import React from 'react'

const Ratingcompo = (props) => {
    return (
        <>
            <div className='ratingcompomain'>
                <div className='ratingcomo1'>
                    <div className='ratingcomo1part1'>{ props.heading1 }  </div>
                    <div className='ratingcomo1part2'>{ props.tag } </div>
                </div>
                <div className='ratingcomo2'> <img src={ props.rate } alt="" /></div>
                <div className='ratingcomo3'>
                    <div className='ratingcomo1part3'><img src={ props.srcc }  alt="" /> </div>
                    <div className='ratingcomo1part4'>{ props.tag1 } </div>
                </div>
            </div>
        </>
    )
}

export default Ratingcompo;
