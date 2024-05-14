// Modal.jsx
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function AddVisitorModal({ onClose }) {
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="addItemModal">
            <div className="modalWrapper">
                <div className="modalTop">
                    <div className="title">add new visitor</div>
                    <div className="closeModal" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <hr />

                <form action="">
                    <div className="input">
                        <label htmlFor="first-name">
                            First name
                        </label>
                        <input type="text" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="last-name">
                            last name
                        </label>
                        <input type="text" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="email">
                            email
                        </label>
                        <input type="email" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="phone-number">
                            phone number
                        </label>
                        <input type="tel" name="" id="" placeholder='Enter here' />
                    </div>

                    <div className="input">
                        <label htmlFor="gender">
                            gender
                        </label>
                        <select name="gender" id="gender">
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>

                    <div className="input">
                        <label htmlFor="category">
                            category
                        </label>
                        <select name="category" id="category">
                            <option value="guest">guest</option>
                            <option value="regular">regular</option>
                            <option value="super">super</option>
                        </select>
                    </div>


                    <div className="input">
                        <label htmlFor="address">
                            address
                        </label>
                        <input type="text" placeholder='Enter address here' />
                    </div>

                    <div className="input">
                        <label htmlFor="date">
                            visit date
                        </label>
                        <input type="date" name="date" id="date" placeholder={today} />
                    </div>

                    <div className="input">
                        <label htmlFor="entry-time">
                            entry time
                        </label>
                        <input type="time" name="entry-time" id="entry-time" />
                    </div>

                    <div className="input">
                        <label htmlFor="exit-time">
                            exit time
                        </label>
                        <input type="time" name="exit-time" id="exit-time" />
                    </div>

                    <div className="input">

                        <textarea name="note" id="note" placeholder='note' rows={5}>Write note here</textarea>
                    </div>

                    <div className="input">
                        <label htmlFor="status">
                            status
                        </label>
                        <input type="text" placeholder='pending' />
                    </div>
                </form>

                <hr />

                <div className="modalBottom">
                    <button className="close" onClick={onClose}>
                        close
                    </button>
                    <button className="add">
                        add
                    </button>
                </div>
            </div>
        </div>
    );
}