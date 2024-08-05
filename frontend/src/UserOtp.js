import React from 'react'
import Header, { Footer } from './Pcomponents';

import { Link } from 'react-router-dom';

const UserOtp = () => {
    return (
        <>
            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            {/* <Dashboard/> */}
            <Header />

            {/* =========  Forget Password page-2 (OTP) Code ==========  */}
            <div className="login-head-section">
                <div className="container-fluid login-form user-login-form">
                <h3>Forgot Password ?</h3>
                {/* <label>Enter OTP</label> */}
                    <input type="text" placeholder='Enter OTP' />
                    {/* <label>Create New Password</label> */}
                    <input type="text" placeholder='New Password' />
                    {/* <label>Confirm Password</label> */}
                    <input type="text" placeholder='Confirm Password'/>
                    <div className="pswrd flex-row">
                    
                    </div>
                    <div className="btns">
                        <button className="btn btn-primary">SAVE</button><br />

                    </div>

                </div>
            </div>

            {/* =========   Using Footer from Pcomponents.js ==========  */}
            <Footer />
        </>
    )
}

export default UserOtp;
