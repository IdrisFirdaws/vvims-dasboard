
import React, { useState } from 'react';
import Pagination from '../Pagination';
import { LeaveItem, leaveItem } from '../../data/LeaveData'
import { attendanceItem } from '../../data/AttendanceData';
import { faCheck, faMarker, faTimesCircle, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function LeaveList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = leaveItem.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(leaveItem.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <table className="visItems">


                <th className='visItem'>
                    <td className='headingItem staff'>Staff</td>
                    <td className='headingItem id'>ID</td>
                    <td className='headingItem type'>type</td>
                    <td className='headingItem from'>from</td>
                    <td className='headingItem to'>to</td>
                    <td className='headingItem days'>days</td>
                    <td className='headingItem desc'>desc</td>
                    <td className='headingItem status'>status</td>
                    <td className='headingItem action'>action</td>
                </th>
                {currentItems.map(leave => (
                    <tr className="visItem" key={leave.leaveId}>


                        <td className="item staff">
                            <FontAwesomeIcon icon={faUserCircle} className='icon' />
                            <span>{leave.staff}</span>
                        </td>

                        <td className="item id">
                            {leave.id}
                        </td>

                        <td className="item type">
                            {leave.type}
                        </td>

                        <td className="item from">
                            {leave.from}
                        </td>

                        <td className="item to">
                            {leave.to}
                        </td>

                        <td className='item days'>
                            {leave.days}
                        </td>

                        <td className='item desc'>
                            {leave.Desc}
                        </td>

                        <td className={leave.status}>
                            {leave.status}
                        </td>

                        <td className='item action'>
                            <FontAwesomeIcon icon={faCheck} className='check' />
                            <FontAwesomeIcon icon={faTimesCircle} className='null' />
                        </td>
                    </tr>
                ))}


                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
            </table>
        </>
    );
}
