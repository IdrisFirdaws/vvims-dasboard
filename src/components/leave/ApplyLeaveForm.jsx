import React, { useState } from 'react'
import SuccessLeaveModal from './SuccessLeaveModal';

export default function ApplyLeaveForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='leaveFormWrapper'>
            <div className="leaveFormTop">
                <div className="title">leave application</div>
                <p>To apply leave, kindly fill in your information below</p>
            </div>

            <form action="" className="leaveForm">
                <div className="formLeft">
                    <div className="formItem">
                        <label htmlFor="title">title</label>
                        <input type="text" placeholder='Enter text here' />
                    </div>


                    <div className="formItem">
                        <label htmlFor="sart-date">start date</label>
                        <input type="date" name="start-date" id="start-date" />
                    </div>

                    <div className="formItem">
                        <label htmlFor="end-date">end date</label>
                        <input type="date" name="end-date" id="end-date" />
                    </div>
                </div>

                <div className="formRight">
                    <div className="formItem">
                        <label htmlFor="leave-type">leave type</label>
                        <select name="leave-type" id="">
                            <option value="medical">medical leave</option>
                            <option value="medical">casual leave</option>
                            <option value="medical">half leave</option>
                            <option value="medical">unpaid leave</option>
                            <option value="medical">earned leave</option>
                            <option value="medical">adjustment leave</option>
                        </select>
                    </div>

                    <div className="formItem">
                        <textarea name="description" id="description" rows={7} placeholder='Serious medical case that require urgent surgery'></textarea>
                    </div>
                </div>


            </form>

            <div className="leaveFormBottom">
                <div className="submit" onClick={openModal}>submit application</div>
            </div>
            {isModalOpen && <SuccessLeaveModal onClose={() => setIsModalOpen(false)} />}

        </div>
    )
}
