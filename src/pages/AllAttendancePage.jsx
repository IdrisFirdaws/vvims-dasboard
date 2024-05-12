import React, { useEffect, useState } from 'react'
import TotalWorkforce from '../components/attendance/TotalWorkforce'
import PrecentWorkforce from '../components/attendance/PrecentWorkforce'
import AbsentWorkforce from '../components/attendance/AbsentWorkforce'
import LateArrivals from '../components/attendance/LateArrivals'
import OnLeave from '../components/attendance/OnLeave'
import AttendanceChart from '../components/attendance/AttendanceChart'
import AttendanceStatsChart from '../components/attendance/AttendanceStatsChart'
import AllAttendance from '../components/attendance/AllAttenedance'


export default function AllAttendancePage() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDateTime = () => {
        const dateOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        };
        const timeOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };

        const dateString = currentDateTime.toLocaleDateString('en-US', dateOptions);
        let timeString = currentDateTime.toLocaleTimeString('en-US', timeOptions);

        timeString = timeString.replace(/\s+/g, '').toLowerCase();

        return `${dateString} - ${timeString}`;
    };



    return (
        <>
            <div className="top">
                <div className="label">attendance management</div>
                <div className="down">
                    <div className="breadcrumbs">
                        <span>dashboard - </span>
                        <span>attendance management - </span>
                        <span className="active">view all attendance</span>
                    </div>
                    <div className="time">{formattedDateTime()}</div>
                </div>

            </div>
            <div className="allAttendacePage">
                <div className="box box1">
                    <TotalWorkforce />
                </div>
                <div className="box box2">
                    <PrecentWorkforce />
                </div>
                <div className="box box3">
                    <AbsentWorkforce />
                </div>
                <div className="box box4">
                    <LateArrivals />
                </div>
                <div className="box box5">
                    <OnLeave />
                </div>
                <div className="box box6">
                    <AttendanceChart />
                </div>
                <div className="box box7">
                    <AttendanceStatsChart />
                </div>
                <div className="box box8">
                    {/* <AllAttendance /> */}
                </div>
            </div >
        </>
    )
}
