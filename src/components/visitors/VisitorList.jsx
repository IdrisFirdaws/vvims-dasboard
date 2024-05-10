// VisitorList.js
import React, { useState } from 'react';
import Pagination from '../Pagination';
import { visitorItem } from '../../data/VisitorsData';

export default function VisitorList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = visitorItem.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(visitorItem.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="visItems">
            {currentItems.map(visitor => (
                <div className="visItem" key={visitor.visitorId}>
                    <div className="user">
                        <div className="icon">
                            <img src="images/usericon.png" alt="" />
                        </div>
                        <div className="text">
                            <p>{visitor.name}</p>
                            <span>{visitor.tag}</span>
                        </div>
                    </div>

                    <div className="extra">
                        {visitor.address}
                    </div>

                    <div className="extra">
                        {visitor.visit}
                    </div>

                    <div className="extra">
                        {visitor.time}
                    </div>
                </div>
            ))}

            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
    );
}
