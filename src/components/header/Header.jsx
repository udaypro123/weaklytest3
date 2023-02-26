import React from 'react'
import './header.css'
const Header = () => {
    return (
        <>
            <div className="maioncontainer">
                <div className='navbar'>
                    <div className='logoimg'><img src="https://copyassignment.com/wp-content/uploads/2022/05/Capture-12.png" alt="" /></div>
                    <div className='navbarlist'>
                        <ul>
                            <li>credit score check</li>
                            <li> CRED pay</li>
                        </ul>
                    </div>
                </div>

                <div className='body'>
                    <div className='viewportcontent'>
                        <p className='para1'>
                            rewards for paying
                            credit card bills.
                        </p>
                        <p className='para2'>
                        join 9M+ members who win rewards and cashbacks everyday
                        </p>

                        <button>Download CRED</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
