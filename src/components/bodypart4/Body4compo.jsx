import React from 'react'
import './bodypart4.css'
const Body4compo = (props) => {
    return (
        <>
            <div className='bodypart4maindivpart1part2'>
                <div className='bodypart4maindivpart1part2part1'>

                    <p className='heading'> { props.heading } </p>
                    <p className='content'> { props.content } </p>
                </div>

                <div className='imgsrc'>
                    <img src={ props.imgsrc } alt="" />
                </div>
            </div>
        </>
    )
}

export default Body4compo;
