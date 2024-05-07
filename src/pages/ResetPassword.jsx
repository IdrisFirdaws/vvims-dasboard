import React from 'react'
import LoginSidebar from '../components/LoginSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
    return (
        <div className='login'>
            <LoginSidebar />
            <div className="loginWrapper">
                <div className="loginTop">
                    <h3>forgot password</h3>
                    <p>enter your email to reset password</p>
                </div>

                <form action="" method="post">
                    <div className="input">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" name="" id="" placeholder='Email' />
                    </div>
                </form>

                <Link to="/" className="proceed">
                    submit
                </Link>


                <Link to='/login' className="log">
                    back to login
                </Link>

                <div className='copy'>
                    Copyright 2024 VVIMS. All rights Reserved
                </div>
            </div>
        </div>
    )
}
