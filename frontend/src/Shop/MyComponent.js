
// Importing css file 
import './car.css';
// importing Link 
import { Link } from 'react-router-dom';


// Header 
const Header = () => {
    return (
        <>
            <div className="container-fluid main bg-primary ">
                <div className="logo">
                    <img className='logo-img' src={require('./Images/flipkart-logo.png')} />
                    <p>Explore <span>Plus</span></p>
                </div>
                {/* <h1>Online Shop</h1> */}
                <div className="srch">
                    <input className="inpt" type="text" placeholder="Search for products, brands and more" />
                    <i className="fas fa-search"></i>
                </div>

                <button className="b1 login-btn">LogIn</button>
                <button className="b1 seller-btn">Become a Seller</button>
                <button className="b1 seller-btn">More</button>
                <button className="b1 seller-btn"><i className="fa-solid fa-cart-shopping"></i> &nbsp;Cart</button>


            </div>

        </>

    )
}
// Menu 

const Menu = () => {
    return (
        <>
            <ul>
                <li> <Link className='link' to="/">Car</Link> </li>
                <li> <Link className='link' to="/mobile">Mobile</Link> </li>
                <li> <Link className='link' to="/bike">Bike</Link> </li>
            </ul>
        </>

    )
}

// Products 

const Products = (p) => {
    return (
        <>
            <div className="col-3 r1 product-img text-center">
                <img src={p.pic} alt="" />
                <h3>{p.name}</h3>
                <p>
                    <del> <b>Price:{p.price}</b></del> <br /> <b>Offer Price: {p.offer}</b>
                </p>
                <div className="btn btn-primary">Buy Now</div>
            </div>


        </>
    )
}


// Footer
const Footer = () => {
    return (
        <>
            <div className="container-fluid p-2 text-center footer">
                <p>Designed By : Kapil Bhargava &copy; All Rights Reserved</p>
            </div>
        </>

    )
}


export default Header;
export { Menu, Footer, Products };