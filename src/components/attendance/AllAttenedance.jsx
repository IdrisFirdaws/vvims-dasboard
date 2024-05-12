import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AllAttendance() {
    return (
        <div className='allVisitors'>

            <div className="top">
                <div className="right">
                    <div className="visTitle">All Vehicles</div>
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
                    <span>add new vehicle</span>
                </div>
            </div>






        </div>
    )
}
