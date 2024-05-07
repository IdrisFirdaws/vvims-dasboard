import { faAngleRight, faCar, faChartSimple, faGear, faHouse, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='dashboard'>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="top">
                    <div className="user">
                        <FontAwesomeIcon icon={faTimes} className='close' onClick={closeSidebar} />

                        <img src="images/user.png" alt="" />
                        <div className="name">fon teboh</div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>

                    <hr />
                </div>
                <div className="down">
                    <div className="items">
                        <NavLink to='/' className="item" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Dashboard</span>
                        </NavLink>

                        <NavLink to='/visitors' className="item" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faUsers} />
                            <span>visitors</span>
                        </NavLink>

                        <div className="item" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faCar} />
                            <span>Vehicles</span>
                        </div>

                        <div className="item" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faChartSimple} />
                            <span>report</span>
                        </div>

                        <div className="item" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faGear} />
                            <span>settings</span>
                        </div>
                    </div>

                    <div className="extra">
                        <img src="images/Ellipse 7.png" alt="" className='ellipse1' />
                        <img src="images/Ellipse 6.png" alt="" className='ellipse2' />
                        <img src="images/Ellipse 5.png" alt="" className='ellipse3' />
                        <img src="images/Ellipse 4.png" alt="" className='ellipse4' />
                        <img src="images/Ellipse 3.png" alt="" className='ellipse5' />
                        <img src="images/Ellipse 2.png" alt="" className='ellipse6' />
                        <img src="images/Ellipse 2.png" alt="" className='ellipse7' />
                        <div className="quest">
                            <FontAwesomeIcon icon={faQuestion} className='help' />

                        </div>

                        <div className="bottom">
                            <h3>Need help?</h3>
                            <p>Please check our docs</p>
                            <button><span>Documentation</span></button>
                        </div>
                    </div>

                    <Link to="/login" className="logout">
                        <img src="images/logout.png" alt="" />
                        <span>Log Out</span>
                    </Link>
                </div>

            </div>
            <div className='content'>
                <div className="top">
                    <button onClick={toggleSidebar} className="menu-btn">
                        <FontAwesomeIcon icon={faBars} className='toggleIcon' />
                    </button>
                    <div className="brand">
                        VVIMS Dashboard
                    </div>
                </div>
                <div className="charts">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
