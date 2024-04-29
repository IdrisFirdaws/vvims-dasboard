import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="brand">
                <img src="images/VVIMS.png" alt="" className='logo' />
            </div>

            <div className="center">

                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />

                    <input type="" placeholder='search' />
                </div>

                <div className="right">
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faGear} />

                    <img src="images/user.png" alt="" />
                    <div className="name">
                        <span>fon teboh</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>

            </div>




        </div>
    )
}
