// import { faAddressCard, faAngleDown, faAngleRight, faAngleUp, faBorderAll, faCar, faChartSimple, faGear, faHouse, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
// import { faUsersCog } from '@fortawesome/free-solid-svg-icons/faUsersCog';
// import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons/faUsersRectangle';
// import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';

// export default function DashboardLayout() {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);


//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const closeSidebar = () => {
//         setSidebarOpen(false);
//     };

//     const toggleDropdown = (dropdownName) => {
//         setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
//     };

//     const isDropdownOpen = (dropdownName) => {
//         return openDropdown === dropdownName;
//     };

//     const toggleIcon = (dropdownName) => {
//         return isDropdownOpen(dropdownName) ? faAngleUp : faAngleDown;
//     };


//     return (
//         <div className='dashboard'>
//             <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//                 <div className="top">
//                     <div className="user">
//                         <FontAwesomeIcon icon={faTimes} className='close' onClick={closeSidebar} />
//                         <img src="images/user.png" alt="" />
//                         <div className="name">fon teboh</div>
//                         <FontAwesomeIcon icon={faAngleRight} />
//                     </div>
//                     <hr />
//                 </div>
//                 <div className="down">
//                     <div className="items">

//                         <div className="item" onClick={closeSidebar} >
//                             <FontAwesomeIcon icon={faClock} />
//                             <NavLink to='/'>
//                                 <span>Dashboard</span>
//                             </NavLink>
//                         </div>

//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('staff')}>
//                                 <FontAwesomeIcon icon={faUsersRectangle} />
//                                 <span>Staff Mangement</span>
//                                 <FontAwesomeIcon icon={toggleIcon('staff')} />
//                             </div>
//                             {openDropdown === 'staff' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <p>dummy staff</p>
//                                     <p>dummy staff</p>
//                                 </div>
//                             )}
//                         </div>

//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('attendance')}>
//                                 <FontAwesomeIcon icon={faAddressCard} />
//                                 <span>attendace management</span>
//                                 <FontAwesomeIcon icon={toggleIcon('attendance')} />
//                             </div>
//                             {openDropdown === 'attendance' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <NavLink to='/all-attendance'>
//                                         <p>view all attendance</p>
//                                     </NavLink>
//                                 </div>
//                             )}
//                         </div>

//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('leave')}>
//                                 <FontAwesomeIcon icon={faCalendar} />
//                                 <span>leave management</span>
//                                 <FontAwesomeIcon icon={toggleIcon('leave')} />
//                             </div>
//                             {openDropdown === 'leave' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <p>dummy leave</p>
//                                     <p>dummy leave</p>
//                                 </div>
//                             )}
//                         </div>

//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('visitors')}>
//                                 <FontAwesomeIcon icon={faUsers} />
//                                 <span>Visitors</span>
//                                 <FontAwesomeIcon icon={toggleIcon('visitor')} />
//                             </div>
//                             {openDropdown === 'visitors' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <NavLink to='/visitors'>
//                                         <p>All visitors</p>
//                                     </NavLink>
//                                     <NavLink to='/visitors'>
//                                         <p>visitor analysis</p>
//                                     </NavLink>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('vehicles')}>
//                                 <FontAwesomeIcon icon={faCar} />
//                                 <span>Vehicles</span>
//                                 <FontAwesomeIcon icon={toggleIcon('vehicle')} />
//                             </div>
//                             {openDropdown === 'vehicles' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <NavLink to='/vehicles'>
//                                         <p>All vehicles</p>
//                                     </NavLink>
//                                     <NavLink to='/vehicles-analyser'>
//                                         <p>vehicle analyser</p>
//                                     </NavLink>

//                                 </div>
//                             )}
//                         </div>
//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('app')}>
//                                 <FontAwesomeIcon icon={faBorderAll} />
//                                 <span>App</span>
//                                 <FontAwesomeIcon icon={toggleIcon('app')} />
//                             </div>
//                             {openDropdown === 'app' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <p>dummy Report</p>
//                                     <p>dummy Report</p>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="dropdown">
//                             <div className="item" onClick={() => toggleDropdown('settings')}>
//                                 <FontAwesomeIcon icon={faGear} />
//                                 <span>Settings</span>
//                                 <FontAwesomeIcon icon={toggleIcon('settings')} />
//                             </div>
//                             {openDropdown === 'settings' && (
//                                 <div className="dropdownContent" onClick={closeSidebar}>
//                                     <p>dummy Settings</p>
//                                     <p>dummy Settings</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                     <div className="extra">
//                         <img src="images/Ellipse 7.png" alt="" className="ellipse7" />
//                         <img src="images/Ellipse 6.png" alt="" className="ellipse6" />
//                         <img src="images/Ellipse 5.png" alt="" className="ellipse5" />
//                         <img src="images/Ellipse 4.png" alt="" className="ellipse4" />
//                         <img src="images/Ellipse 3.png" alt="" className="ellipse3" />
//                         <img src="images/Ellipse 2.png" alt="" className="ellipse2" />
//                         <img src="images/Ellipse 1.png" alt="" className="ellipse1" />
//                         <div className="quest">
//                             <FontAwesomeIcon icon={faQuestion} className='help' />
//                         </div>
//                         <div className="bottom">
//                             <h3>Need help?</h3>
//                             <p>Please check our docs</p>
//                             <button><span>Documentation</span></button>
//                         </div>
//                     </div>
//                     <Link to="/login" className="logout">
//                         <img src="images/logout.png" alt="" />
//                         <span>Log Out</span>
//                     </Link>
//                 </div>
//             </div>
//             <div className='content'>
//                 <div className="top">
//                     <div onClick={toggleSidebar} className="menu-btn">
//                         <FontAwesomeIcon icon={faBars} className='toggleIcon' />
//                     </div>
//                     <div className="brand">
//                         VVIMS Dashboard
//                     </div>
//                 </div>
//                 <div className="charts">
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// }
