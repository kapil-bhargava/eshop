import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import UserLogin from './Admin/UserLogin';
import Dashboard from './Admin/Dashboard';
import Category from './Admin/category';
import OrderAdmin from './Admin/OrderAdmin';
import SubCategory from './Admin/SubCategory';
import AdminLogin from './Admin/AdminLogin';
import SignUp from './Admin/SignUp';
import ProductDetail from './Admin/ProductDetail';
import ProductAdmin from './Admin/ProductAdmin';
import Cart from './Admin/Cart';
import Fashion from './Admin/Fashion';
import Electronics from './Admin/Electronics';
import AdminChangePswd from './Admin/AdminChangePswd';
import MyOrder from './Admin/MyOrder';
import ForgetPswd from './ForgetPswd';
import UserOtp from './UserOtp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
 <BrowserRouter>

<Routes>

 <Route exact path="/" element={<Home/>} />
 <Route exact path="/dashboard" element={<Dashboard/>} />
 <Route exact path="/userlogin" element={<UserLogin/>} />
 <Route exact path="/adminlogin" element={<AdminLogin/>} />
 <Route exact path="/category" element={<Category/>} />
 <Route exact path="/subcategory" element={<SubCategory/>} />
 <Route exact path="/orderadmin" element={<OrderAdmin/>} />
 <Route exact path="/signup" element={<SignUp/>} />
 <Route exact path="/productadmin" element={<ProductAdmin/>} />
 <Route exact path="/products" element={<ProductDetail/>} />
 <Route exact path="/cart" element={<Cart/>} />
 <Route exact path="/fashion" element={<Fashion/>} />
 <Route exact path="/electronics" element={<Electronics/>} />
 <Route exact path="/myorder" element={<MyOrder/>} />
 <Route exact path="/forgetpassword" element={<ForgetPswd/>} />
 <Route exact path="/userotp" element={<UserOtp/>} />
 <Route exact path="/adminchangepswd" element={<AdminChangePswd/>} />
 

</Routes>

</BrowserRouter>




{/* <ProductDetail/> */}
{/* <Dashboard/> */}
{/* <AdminLogin/> */}
{/* <Home/> */}

{/* <HomePage/> */}
{/* <Category/> */}
{/* <Modal/> */}
{/* <LoginForm/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
