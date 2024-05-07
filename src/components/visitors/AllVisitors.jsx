import React from 'react'
import VisitorList from './VisitorList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCaretDown, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AllVisitors() {
    return (
        <div className='recentVisitors'>

            <div className="top">
                <div className="right">
                    <div className="visTitle">All Visitors</div>
                    <div className="searchbar">
                        <div className="input">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type="text" placeholder='Search visitors' />
                        </div>
                        <div className="select">
                            <select name="Visitors" id="visitors" required>
                                <option value="all">All</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="button">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>add new visitors</span>
                </div>
            </div>

            <div className="heading">
                <div className="headingItem">
                    <span>Name & ID</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <div className="headingItem">
                    <span>Address</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <div className="headingItem">
                    <span>Purpose</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <div className="headingItem">
                    <span>Time Visited</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
            <hr />

            <VisitorList />
        </div>
    )
}
