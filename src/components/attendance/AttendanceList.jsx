
import React, { useState } from 'react';
import Pagination from '../Pagination';
import { visitorItem } from '../../data/VisitorsData';
import { attendanceItem } from '../../data/AttendanceData';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AttendanceList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = attendanceItem.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(attendanceItem.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <table className="visItems">


                <th className='visItem'>
                    <td className='headingItem date'>Date</td>
                    <td className='headingItem staff'>Staff</td>
                    <td className='headingItem id'>ID</td>
                    <td className='headingItem dept'>Department/Office</td>
                    <td className='headingItem emp'>Empoyment</td>
                    <td className='headingItem status'>Status</td>
                    <td className='headingItem role'>Role</td>
                    <td className='headingItem check'>Check In</td>
                    <td className='headingItem check'>Check Out</td>
                </th>
                {currentItems.map(staff => (
                    <tr className="visItem" key={staff.staffId}>

                        <td className="item date">
                            {staff.date}
                        </td>

                        <td className="item staff">
                            <FontAwesomeIcon icon={faUserCircle} className='icon' />
                            <span>{staff.staff}</span>
                        </td>

                        <td className="item id">
                            {staff.id}
                        </td>

                        <td className="item dept">
                            {staff.dept}
                        </td>

                        <td className={staff.employment}>
                            {staff.employment}
                        </td>

                        <td className={staff.status}>
                            {staff.status}
                        </td>

                        <td className='item role'>
                            {staff.role}
                        </td>

                        <td className='item check'>
                            {staff.checkIn}
                        </td>

                        <td className='item check'>
                            {staff.checkOut}
                        </td>
                    </tr>
                ))}


                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
            </table>
        </>
    );
}
