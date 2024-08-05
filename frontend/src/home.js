import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Category from './Admin/category';
import LoginForm from './Admin/UserLogin';
import Modal from './Admin/Modal';
import { Link } from 'react-router-dom';
import Header, { Footer, HomePage, ProductCategory } from './Pcomponents';

const Home = () => {

  return (
    <>
      {/* Header  */}
      <Header />


      {/* Home Page Layout  */}
      <HomePage />


      <ProductCategory />


      <section className="advr-display">
        <div className="left-sec text-light">
          {/* <h1>Headphnes</h1>
          <p>lorem ipsum dolor sit amet.
          </p> */}
          <img src={require('./Admin/Shops/girl_headphone.jpg')} alt="" />
        </div>
        <div className="right-sec">
          <div className="right-sec-1">
            <h1>iPhone 14 Pro Max</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={require('./Shop/Images/Mobile/mobile2.png')} alt="" />
          </div>
          <div className="right-sec-1">
          <h1>iPhone 14 Pro Max</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={require('./Shop/Images/Mobile/mobile2.png')} alt="" />
          </div>
          <div className="right-sec-1">
          <h1>iPhone 14 Pro Max</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={require('./Shop/Images/Mobile/mobile2.png')} alt="" />
          </div>

          <div className="right-sec-1">
          <h1>iPhone 14 Pro Max</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <img src={require('./Shop/Images/Mobile/mobile2.png')} alt="" />
          </div>
        </div>
      </section>

      <h1>Clothings</h1>

      <section className="products">
        <div className="products-row">
          <div className="products-item-1">
            <img src={require('./Admin/Shops/man.png')} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error!</p>
          </div>
          <div className="products-item-1">
            <img src={require('./Admin/Shops/man.png')} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error!</p>
          </div>
          <div className="products-item-1">
            <img src={require('./Admin/Shops/man.png')} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error!</p>
          </div>
          <div className="products-item-1">
            <img src={require('./Admin/Shops/man.png')} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error!</p>
          </div>
        </div>
      </section>





      {/* FOOTER SECTION  */}

      <Footer />

    </>
  )
}
export default Home;