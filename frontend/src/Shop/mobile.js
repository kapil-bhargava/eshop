import Header, { Menu, Footer, Products } from './MyComponent';
import './car.css';

const Mobile = () => {
    return (
        <>

            {/* Online Shop Heading  */}

            <Header />



            <div className="row">

                {/* List and Category partition  */}

                <div className="col-2">

                    <Menu />  

                </div>

                <div className="col-10 bg-">

                    <div className="row right-div">

                        {/* Partition of Items with data */}



                        {/* <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/mobile2.png')} alt="" />
                            <h3>iPhone 14 Pro Max</h3>
                            <p>
                                <del> <b>Price:</b>1,11,000</del> <br /> <b>Offer Price : 90,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div> */}

                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/galaxy-f23-FE.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/infinix-smart-8.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/mobile2.png')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/motorolaG35-5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/oneplus-nordCE-3-Lite.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/poco-m6-pro-5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/realme-12x-5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/vivoT3x5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/vivoT3x5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/vivoT3x5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/vivoT3x5g.webp')} />
                        <Products name="iPhhone 14 Pro" price="1,50,000" offer="1,10,000" pic={require('./Images/Mobile/vivoT3x5g.webp')} />
                        

                    </div>

                </div>
            </div>

            {/* Footer section              */}

            <Footer />
        </>
    )
}
export default Mobile;

