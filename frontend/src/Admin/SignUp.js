import React from 'react'
import Dashboard from './Dashboard';
import Header, { Footer } from '../Pcomponents';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            {/* <Dashboard/> */}
            <Header />

            {/* =========   User SignUp Form Code ==========  */}
            <div className="login-head-section sign-up-head-section ">
                <div className="containe-fluid login-form sign-up">
                    <i class="fa-solid fa-user"></i><h5 className='text-primary'>Sign Up</h5>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Mobile' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Create Password' />
                    <input type="password" placeholder='Confirm Password' />
                    {/* <div className="pswrd flex-row">
                        <p>Forget Password?</p>
                        <input type="checkbox" /><p>Remember me</p>
                    </div> */}
                    <div className="btns signup-btn-div">
                        <button className="btn btn-warning">SIGN UP</button>
                        <p>Already Account?</p><br />
                        <Link to="/userlogin"><button className="btn btn-primary">LOG IN</button><br /></Link>
                    </div>

                </div>
            </div>

            {/* =========   Using Footer from Pcomponents.js ==========  */}
            <Footer/>

        </>
    )
}

export default SignUp;
