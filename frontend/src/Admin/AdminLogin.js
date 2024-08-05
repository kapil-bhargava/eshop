import React, { useState } from 'react'
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const AdminLogin = () => {
const [a,seta] = useState('');
const [b,setb] = useState('');
const jump  = useNavigate();
const [cookie,createCookie,removeCookie] = useCookies();

const loginFun = () => {
    if(a==="zn" && b==="infotech"){
        createCookie("adminCookie", "savedCookie");
        jump("/Dashboard");

    }
    else{
        alert("Invalid User");
    }
}

    
    return (
        <>


            {/* =========   Admin Login Form Code ==========  */}
            <div className="login-head-section">
                <div className="containe-fluid login-form">
                    <i class="fa-solid fa-user"></i><h5 className='text-primary'>Admin</h5>
                    <input onChange={(e)=>{seta(e.target.value)}} type="text" placeholder='LoginID' />
                    <input onChange={(e)=>{setb(e.target.value)}} type="password" placeholder='Password' />
                    <button onClick={loginFun} className="btn btn-primary admin-login-btn">LOG IN</button><br />
                </div>
            </div>

        </>
    )
}

export default AdminLogin;
