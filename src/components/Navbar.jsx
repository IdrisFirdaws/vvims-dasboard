// Navbar.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faBell, faGear, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="brand">
                <img src="images/VVIM.png" alt="" className='logo' />
            </div>

            <div className="center">
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
                    <input type="" placeholder='search' />
                </div>

                <div className="right">
                    <FontAwesomeIcon icon={faBell} className='navicon' />
                    <FontAwesomeIcon icon={faGear} className='navicon' />

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

