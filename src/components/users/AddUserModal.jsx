// Modal.jsx
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function AddUserModal({ onClose }) {
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="addItemModal">
            <div className="modalWrapper">
                <div className="modalTop">
                    <div className="title">add new User</div>
                    <div className="closeModal" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <hr />

                <form action="">
                    <div className="input">
                        <label htmlFor="name">
                            name
                        </label>
                        <input type="text" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="role">
                            Assigned role
                        </label>
                        <input type="text" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="id">
                            user ID
                        </label>
                        <input type="text" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="phone-number">
                            user phone number
                        </label>
                        <input type="tel" name="" id="" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="email">
                            email
                        </label>
                        <input type="email" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="password">
                            user password
                        </label>
                        <input type='passwod' placeholder='password' />
                    </div>

                </form>

                <hr />

                <div className="modalBottom">
                    <button className="create" >
                        create
                    </button>

                </div>
            </div>
        </div>
    );
}