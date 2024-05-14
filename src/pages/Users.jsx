import React, { useState } from 'react'
import AllUsers from '../components/users/AllUsers'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddUserModal from '../components/users/AddUserModal';

export default function Users() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <>
            <div className="top">
                <div className="label">Staff Management</div>
                <div className="down">
                    <div className="breadcrumbs">
                        <span>dashboard - </span>
                        <span>staff management - </span>
                        <span className="active">users</span>
                    </div>
                    <div className="btn" onClick={openModal}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span>add new user</span>
                    </div>
                </div>
            </div>
            <div className="usersPage">
                <div className="box">
                    <AllUsers />
                </div>
            </div>

            {isModalOpen && <AddUserModal onClose={() => setIsModalOpen(false)} />}

        </>
    )
}
