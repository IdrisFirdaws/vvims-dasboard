import { vehicleItem } from "../../data/VehicleData";

export default function RecentVehicle() {
    return (
        <div className='recentVehicles'>
            <div className="vehTitle">Recent Logged in Vehicles</div>

            <div className="vehItems">
                {
                    vehicleItem.map(vehicle => (
                        <div className="vehItem" key={vehicle.vehicleId}>
                            <div className="icon">
                                <img src="images/car.png" alt="" />
                            </div>
                            <div className="text">
                                <p>{vehicle.model}</p>
                                <span>{vehicle.tag}</span>
                            </div>
                            <div className="time">
                                <p>{vehicle.time} ago</p>
                                <span>flag</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>


    )
}
