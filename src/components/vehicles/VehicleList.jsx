
import React, { useState } from 'react';
import Pagination from '../Pagination';
import { visitorItem } from '../../data/VisitorsData';
import { vehicleItem } from '../../data/VehicleData';

export default function VehicleList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = vehicleItem.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(vehicleItem.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="visItems">
            {currentItems.map(vehicle => (
                <div className="visItem" key={vehicle.vehicleId}>
                    <div className="user">
                        <div className="icon">
                            <img src="images/car.png" alt="" />
                        </div>
                        <div className="text">
                            <p>{vehicle.model}</p>
                            <span>{vehicle.color}</span>
                        </div>
                    </div>

                    <div className="extra">
                        {vehicle.number}
                    </div>

                    <div className="extra">
                        {visitorItem.filter(visitor => visitor.visitorId === vehicle.visitorId)[0].name}
                    </div>

                    <div className="extra time">
                        {vehicle.entrydate}/{vehicle.entrymonth}/{vehicle.entryyear}-{vehicle.entrytime}
                    </div>

                    <div className="extra time">
                        {vehicle.exitdate}/{vehicle.exitmonth}/{vehicle.exityear}-{vehicle.exittime}
                    </div>

                    <div className={vehicle.condition}>
                        {vehicle.condition}
                    </div>
                </div>
            ))}

            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
    );
}
