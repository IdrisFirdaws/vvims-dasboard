import FlagedVehicles from '../components/vehicles/FlagedVehicles'
import DailyAverageVehicles from '../components/vehicles/TotalAverageVehicles'
import TotalVehicles from '../components/vehicles/TotalVehicles'
import AllVehicles from '../components/vehicles/AllVehicles'
import VehiclesChart from '../components/vehicles/VehiclesChart'
import WatchListVehicles from '../components/vehicles/WatchList'
import VehiclesAlert from '../components/vehicles/VehiclesAlert'
export default function VehiclesPage() {
    return (
        <div className='vehiclesPage'>
            <div className="set1">
                <div className="box box1">
                    <img src="images/Ellipse-8.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11.png" alt="" className='ellipse11' />

                    <TotalVehicles />
                </div>
                <div className="box box2">
                    <img src="images/Ellipse-8g.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9g.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10g.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11g.png" alt="" className='ellipse11' />

                    <FlagedVehicles />
                </div>
                <div className="box box3">
                    <img src="images/Ellipse-8r.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9r.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10r.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11r.png" alt="" className='ellipse11' />

                    <DailyAverageVehicles />
                </div>
            </div>
            <div className="box box4">
                <VehiclesChart />
            </div>

            <div className="box box5">
                <WatchListVehicles />
            </div>

            <div className="box box7">
                <VehiclesAlert />
            </div>

            <div className="box box6">
                <AllVehicles />
            </div>
        </div>
    )
}
