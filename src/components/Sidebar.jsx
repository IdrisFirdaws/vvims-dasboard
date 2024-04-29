import { faAngleRight, faCar, faChartSimple, faGear, faHouse, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Sidebar() {
    return (
        <div className="sidebar">
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
                    <div className="item active">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Dashboard</span>
                    </div>

                    <div className="item">
                        <FontAwesomeIcon icon={faUsers} />
                        <span>visitors</span>
                    </div>

                    <div className="item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Vehicles</span>
                    </div>

                    <div className="item">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span>report</span>
                    </div>

                    <div className="item">
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
                        <button>Documentation</button>
                    </div>
                </div>

                <div className="logout">
                    <img src="images/logout.png" alt="" />
                    <span>Log Out</span>
                </div>
            </div>

        </div>
    )
}
