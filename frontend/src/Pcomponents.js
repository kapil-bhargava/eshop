import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
// import Category from './Admin/category';
import LoginForm from './Admin/UserLogin';
import Modal from './Admin/Modal';
import { Link } from 'react-router-dom';

const Header = () => {



    // JS Code for Home Page loading animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            {/* Header  */}
            <div className="container-fluid main ">
                <div className="logo">

                    <Link to="/"><h3>KB Store</h3></Link>
                </div>
                <div className="srch">
                    <input className="inpt" type="text" placeholder="Search for products, brands and more" />
                    <i className="fas fa-search"></i>
                </div>
                <div className="menu-items">
                    <Link to="/products"><button className=" b1 seller-btn">Products</button></Link>
                    <Link to="/fashion"><button className=" b1 seller-btn">Fashion</button></Link>
                    <Link to="/electronics"><button className=" b1 seller-btn">Electronics</button></Link>
                    <Link to="/mobiles"><button className=" b1 seller-btn">Mobiles</button></Link>
                </div>
                <Link to="/userlogin"> <button className=" b1 login-btn">LogIn</button></Link>
                <div className="order-cart">
                    <Link to="/myorder"><button className=" b1 seller-btn">My Orders <i class="fas fa-shipping-fast"></i> </button></Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/cart"><button className=" b1 seller-btn cart-header"><div className='cart-order-added'>4</div><i className="fa-solid fa-cart-shopping"></i></button></Link>
                </div>
            </div>

        </>
    )
}

{/* Home Page Layout  */ }

const HomePage = () => {
    return (
        <>
        <div className="after-header">
            <h3>h</h3>
        </div>
            <div className="main-section" data-aos="zoom-out">
                
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active c1">
                            <img src={require("./Admin/Shoes/shoes5.png")} className="d-block" />
                            <div className="carousel-caption">
                                <h3>Nike Sports</h3>
                                <p>Experience a soft, rocker-shaped platform</p>
                                <button className="btn btn-primary">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="carousel-item c2">
                            <img src={require("./Admin/Shoes/shoes5.png")} className="d-block" />
                            <div className="carousel-caption">
                                <h3>Nike Sports</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Saepe, modi?</p>
                                <button className="btn btn-primary">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="carousel-item c3">
                            <img src={require("./Admin/Shoes/shoes5.png")} className="d-block" />
                            <div className="carousel-caption">
                                <h3>Nike Sports</h3>
                                <p>Experience a soft, rocker-shaped platform</p>

                                <button className="btn btn-primary">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="carousel-item c4">
                            <img src={require("./Admin/Shoes/shoes5.png")} className="d-block" />
                            <div className="carousel-caption">
                                <h3>Nike Sports</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Saepe, modi?</p>
                                <button className="btn btn-primary">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="carousel-item c5">
                            <img src={require("./Admin/Shoes/shoes5.png")} className="d-block" />
                            <div className="carousel-caption">
                                <h3>Nike Sports</h3>
                                <p>Experience a soft, rocker-shaped platform</p>
                                <button className="btn btn-primary">SHOP NOW</button>
                            </div>
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon change-btn"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon change-btn"></span>
                    </button>
                </div>

                
            </div >




        </>
    )
}


{/* Home Page ProductCategory section layout */ }

const ProductCategory = () => {
    return (
        <>
        <h3 className='h3-of-pc'>CATEGORY</h3>
            <section className="product-category-main-section">
                <div className="category-row">
                    <div className="category-items">
                        <img src={require('./Admin/Shoes/shoes5.png')}alt="" />
                        <p>Nike Shoes</p>
                        <p><strong>2,000</strong></p>
                    </div>
                    <div className="category-items">
                        <img src={require('./Admin/Shoes/shoes5.png')}alt="" />
                        <p>Nike Shoes</p>
                        <p><strong>2,000</strong></p>
                    </div>
                    <div className="category-items">
                        <img src={require('./Admin/Shoes/shoes5.png')}alt="" />
                        <p>Nike Shoes</p>
                        <p><strong>2,000</strong></p>
                    </div>
                    <div className="category-items">
                        <img src={require('./Admin/Shoes/shoes5.png')}alt="" />
                        <p>Nike Shoes</p>
                        <p><strong>2,000</strong></p>
                    </div>
                    <div className="category-items">
                        <img src={require('./Admin/Shoes/shoes5.png')}alt="" />
                        <p>Nike Shoes</p>
                        <p><strong>2,000</strong></p>
                    </div>
                    <div className="category-items">
                        <img src={require('./Admin/Shoes/shoes5.png')}alt="" />
                        <p>Nike Shoes</p>
                        <p><strong>2,000</strong></p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}






{/* Footer code */ }

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="f-1">
                    <h5>About</h5>
                    <p>Contact us</p>
                    <p>About us</p>
                    <p>Careers </p>
                    <p>Shop Story</p>
                </div>
                <div className="f-1">
                    <h5>group companies</h5>
                    <p>Myntra</p>
                    <p>Flipkart Wholsale</p>
                    <p>Clear Trip</p>
                    <p>Shopsy</p>
                </div>
                <div className="f-1">
                    <h5>Help</h5>
                    <p>Payments</p>
                    <p>Shipping us</p>
                    <p>Cancellation & Returns</p>
                    <p>FAQs</p>
                    <p>Report Infringement</p>
                </div>
                <div className="f-1">
                    <h5>About</h5>
                    <p>Terms of Use</p>
                    <p>Security</p>
                    <p>Privacy</p>
                    <p>Site Maps</p>
                    <p>EPR Complliance</p>
                </div>
                <div className="f-1 footer-icons">
                    <h5>Follow us on</h5>
                    <i class="fa-brands fa-instagram"></i> &nbsp;&nbsp;
                    <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;
                    <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;

                </div>
            </footer>
        </>
    )
}

// Dashbboard code 

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-div">

                <div className="list-div">
                    <button className="shop-btn-db">
                        Kapil Store <button className="admin-d">ADMIN</button>
                    </button>
                    <button className="dashboard-btn">
                        <i class="fa fa-light fa-chart-simple d-icon"></i>Dashboard
                    </button>
                    <ul>
                        <i class="fa-regular fa-user"></i><li>Customers</li>
                        <i class="fa fa-cart-shopping"></i><li>Catalog</li>
                        <Link to="/category"><i class="fa fa-list-alt" aria-hidden="true"></i><li>Categories</li></Link>
                        <i class="fa fa-clipboard-check"></i><li>Orders</li>
                        <i class="fa fa-solid fa-money-bill-trend-up"></i><li>Marketing</li>
                        <i class="fa-solid fa-blog"></i><li>Blogs</li>
                        <i class="fa-solid fa-question"></i><li>Enquiries</li>
                        <i class="fas fa-sign-out-alt"></i><li>Sign Out</li>
                    </ul>
                </div>
            </div>
        </>
    )
}



export default Header;
export { HomePage, Dashboard, Footer, ProductCategory };