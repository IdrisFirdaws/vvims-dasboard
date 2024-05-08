import React from 'react'
import { visitorItem } from '../../data/VisitorsData'

import { vehicleItem } from '../../data/VehicleData'

export default function VehicleList() {
    return (
        <div className="visItems">
            {vehicleItem.map(vehicle => (
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

                    <div className="extra">
                        {vehicle.entrydate}/{vehicle.entrymonth}/{vehicle.entryyear}-{vehicle.entrytime}
                    </div>

                    <div className="extra">
                        {vehicle.exitdate}/{vehicle.exitmonth}/{vehicle.exityear}-{vehicle.exittime}
                    </div>

                    <div className={vehicle.condition}>
                        {vehicle.condition}
                    </div>
                </div>
            ))}


        </div>
    )
}
