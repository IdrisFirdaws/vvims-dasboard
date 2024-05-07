import React from 'react'
import LoginSidebar from '../components/LoginSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons'
import Copyright from '../components/Copyright'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <LoginSidebar />
            <div className="loginWrapper">
                <div className="loginTop">
                    <h3>welcome back</h3>
                    <p>login to continue</p>
                </div>

                <form action="" method="post">
                    <div className="input">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" name="" id="" placeholder='Email' />
                    </div>

                    <div className="input">
                        <FontAwesomeIcon icon={faEye} />
                        <input type="password" name="" id="" placeholder='Password' />
                    </div>


                </form>

                <Link to="/" className="proceed">

                    proceed to my account
                </Link>


                <Link to="/reset" className="redirect">
                    Having issues with your password?
                </Link>

                <div className='copy'>
                    Copyright 2024 VVIMS. All rights Reserved
                </div>
            </div>
        </div>
    )
}
