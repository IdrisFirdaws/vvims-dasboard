
import React, { useState } from 'react';
import Pagination from '../Pagination';
import { attendanceItem } from '../../data/AttendanceData';
import { faPen, faPenToSquare, faTimes, faTrash, faTrashCan, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UsersList() {
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
                    <td className='headingItem staff'>user</td>
                    <td className='headingItem id'>ID</td>
                    <td className='headingItem dept'>Department/Office</td>
                    <td className='headingItem role'>Role</td>
                    <td className='headingItem phone'>Phone number</td>
                    <td className='headingItem email'>email</td>
                    <td className='headingItem action'>action</td>
                </th>
                {currentItems.map(staff => (
                    <tr className="visItem" key={staff.staffId}>

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

                        <td className='item role'>
                            {staff.role}
                        </td>

                        <td className='item phone'>
                            {staff.phone}
                        </td>

                        <td className='item email'>
                            {staff.email}
                        </td>

                        <td className='item action'>
                            <FontAwesomeIcon icon={faPenToSquare} className='edit' />
                            <FontAwesomeIcon icon={faTrashCan} className='del' />
                        </td>


                    </tr>
                ))}


                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
            </table>
        </>
    );
}
