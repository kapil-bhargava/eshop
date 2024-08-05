import React from 'react'
import Header, { Footer } from './Pcomponents';

import { Link } from 'react-router-dom';

const ForgetPswd = () => {
  return (
    <>
      {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            {/* <Dashboard/> */}
            <Header/>

{/* =========  Forgget Password page-1 Code ==========  */}


            <div className="login-head-section">
                <div className="container-fluid login-form user-login-form forget-pswd">
                    <h3>Forgot Password ?</h3>
                    <label>Enter your Email Address or Mobile No.</label>
                    <input type="text" placeholder='Enter your Mobile or Email' />
                    <div className="btns">
                    <Link  to="/userotp"><button className="btn btn-primary">GO</button></Link>    
                    </div>
                </div>
            </div>

            {/* =========   Using Footer from Pcomponents.js ==========  */}
            <Footer/>
    </>
  )
}

export default ForgetPswd
