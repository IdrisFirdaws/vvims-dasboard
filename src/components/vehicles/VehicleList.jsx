
import React, { useState } from 'react';
import Pagination from '../Pagination';
import { visitorItem } from '../../data/VisitorsData';
import { vehicleItem } from '../../data/VehicleData';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function VehicleList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = vehicleItem.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(vehicleItem.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <table className="visItems">

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

            {currentItems.map(vehicle => (
                <tr className="visItem" key={vehicle.vehicleId}>
                    <td className="user">
                        <td className="icon">
                            <img src="images/car.png" alt="" />
                        </td>
                        <td className="text">
                            <p>{vehicle.model}</p>
                            <span>{vehicle.color}</span>
                        </td>
                    </td>

                    <td className="extra">
                        {vehicle.number}
                    </td>

                    <td className="extra">
                        {visitorItem.filter(visitor => visitor.visitorId === vehicle.visitorId)[0].name}
                    </td>

                    <td className="extra time">
                        {vehicle.entrydate}/{vehicle.entrymonth}/{vehicle.entryyear}-{vehicle.entrytime}
                    </td>

                    <td className="extra time">
                        {vehicle.exitdate}/{vehicle.exitmonth}/{vehicle.exityear}-{vehicle.exittime}
                    </td>

                    <td className={vehicle.condition}>
                        {vehicle.condition}
                    </td>
                </tr>
            ))}

            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </table>
    );
}
