import PrecentWorkforce from '../components/attendance/PrecentWorkforce'
import AbsentWorkforce from '../components/attendance/AbsentWorkforce'
import LateArrivals from '../components/attendance/LateArrivals'
import OnLeave from '../components/attendance/OnLeave'


// import CurrentLeave from '../components/leave/CurrentLeave'
import AllLeave from '../components/leave/AllLeave'
import CurrentLeave from '../components/leave/CasualLeave'
import SickLeave from '../components/leave/SickLeave'
import CasualLeave from '../components/leave/CasualLeave'
import EarnedLeave from '../components/leave/EarnedLeave'
import AdjustmentLeave from '../components/leave/AdjustmentLeave'
import UnpaidLeave from '../components/leave/UnpaidLeave'
import HalfLeave from '../components/leave/HalfLeave'

export default function LeaveManagementPage() {
    return (
        <>
            <div className="top">
                <div className="label">leave management</div>
                <div className="down">
                    <div className="breadcrumbs">
                        <span>dashboard - </span>
                        <span>leave management - </span>
                        <span className="active">view all leave</span>
                    </div>
                </div>

            </div>
            <div className="leaveMangementPage">
                <div className="box box1">
                    <CasualLeave />
                </div>
                <div className="box box2">
                    <SickLeave />
                </div>
                <div className="box box3">
                    <EarnedLeave />
                </div>
                <div className="box box4">
                    <AdjustmentLeave />
                </div>
                <div className="box box5">
                    <UnpaidLeave />
                </div>
                <div className="box box6">
                    <HalfLeave />
                </div>

                <div className="box box7">
                    <AllLeave />
                </div>
            </div >
        </>
    )
}
