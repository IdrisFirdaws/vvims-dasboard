import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import VehicleList from './VehicleList'

export default function AllVehicles() {
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

            <table>
                <th className='heading'>
                    <td className="headingItem">
                        <span>Model & color</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem sm">
                        <span>Plate Number</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem sm">
                        <span>Owner</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem time">
                        <span>Entry Time</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem time">
                        <span>Exit Time</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>

                    <td className="headingItem">
                        <span>Action</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </td>
                </th>
                <hr />

                <VehicleList />
            </table>

        </div>
    )
}
