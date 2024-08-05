import React from 'react'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import Header, { Footer } from '../Pcomponents';

const UserLogin = () => {
    return (
        <>
 {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            {/* <Dashboard/> */}
            <Header/>

{/* =========   User Login Form Code ==========  */}

            <div className="login-head-section">
                <div className="container-fluid login-form user-login-form">
                    <i class="fa-solid fa-user"></i><h5 className='text-primary'>Log In</h5>
                    <input type="text" placeholder='LoginID or Email Address' />
                    <input type="text" placeholder='Password' />
                    <div className="pswrd flex-row">
                    <Link className='link' to="/forgetpassword"><p>Forget Password?</p></Link>
                        <input type="checkbox" /><p>Remember me</p>
                    </div>
                    <div className="btns">
                        <button className="btn btn-primary">LOG IN</button><br />
                        <p>Dont have an account?</p><br />
                        <Link to="/signup"><button className="btn btn-warning">SIGN UP</button></Link>
                    </div>

                </div>
            </div>

            {/* =========   Using Footer from Pcomponents.js ==========  */}
            <Footer/>
        </>
    )
}

export default UserLogin;
