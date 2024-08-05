import React from 'react'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

const AdminChangePswd = () => {
    return (
        <>

            <Dashboard />
            {/* =========  Admin Change Password ==========  */}
            <div className="login-head-section">
                <div className="container-fluid login-form user-login-form">
                    <h3>Admin Change Password</h3>
                    {/* <label>Enter OTP</label> */}
                    <input type="text" placeholder='Enter Old Password' />
                    {/* <label>Create New Password</label> */}
                    <input type="text" placeholder='Enter New Password' />
                    {/* <label>Confirm Password</label> */}
                    <input type="text" placeholder='Confirm Password' />
                    <div className="pswrd flex-row">

                    </div>
                    <div className="btns">
                        <button className="btn btn-primary">SAVE CHANGES</button><br />

                    </div>

                </div>
            </div>


        </>
    )
}

export default AdminChangePswd;
