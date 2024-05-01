import { faAngleRight, faCar, faChartSimple, faGear, faHouse, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from '../components/Home'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Dashboard() {
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
                        <img src="images/user.png" alt="" />
                        <div className="name">fon teboh</div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>

                    <hr />
                </div>
                <div className="down">
                    <div className="items">
                        <div className="item active" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Dashboard</span>
                        </div>

                        <div className="item" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faUsers} />
                            <span>visitors</span>
                        </div>

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
                        <div className="quest">
                            <div className="help">
                                <FontAwesomeIcon icon={faQuestion} />
                            </div>
                        </div>

                        <div className="bottom">
                            <h3>Need help?</h3>
                            <p>Please check our docs</p>
                            <button><span>Documentation</span></button>
                        </div>
                    </div>

                    <div className="logout">
                        <img src="images/logout.png" alt="" />
                        <span>Log Out</span>
                    </div>
                </div>

            </div>
            <div className='content'>
                <div className="top">
                    {/* <button onClick={toggleSidebar} className="menu-btn">
                        <FontAwesomeIcon icon={faBars} className='toggleIcon' />
                    </button> */}
                </div>
                <div className="charts">
                    <Home />
                </div>
            </div>
        </div>
    );
}
