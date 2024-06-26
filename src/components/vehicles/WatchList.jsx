import React from 'react';
import { vehicleItem } from "../../data/VehicleData";
import { visitorItem } from "../../data/VisitorsData";

export default function WatchListVehicles() {
    // Get the last 4 items from vehicleItem array
    const latestItems = vehicleItem.slice(-4);

    return (
        <div className='watchListVehicles'>
            <div className="vehTitle">Flagged Vehicles / Vehicles on watch list</div>

            <div className="vehItems">
                {
                    latestItems.map(vehicle => (
                        <div className="vehItem" key={vehicle.vehicleId}>
                            <div className="left">
                                <div className="icon">
                                    <img src="images/red-car.png" alt="" />
                                </div>
                                <div className="text">
                                    <p className="name">{vehicle.model} - {vehicle.tag}</p>
                                    <span className="tag">
                                        {visitorItem.filter(visitor => visitor.visitorId === vehicle.visitorId)[0].name}
                                    </span>
                                </div>
                            </div>
                            <div className="time">
                                <p>{vehicle.entryday}, {vehicle.entrymonth} {vehicle.entrydate} {vehicle.entryyear}</p>
                                <span>unflag</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
