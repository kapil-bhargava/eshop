import './car.css';
import Header, { Menu, Footer, Products } from './MyComponent';

const Bike = () => {
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
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/bike1.png')} alt="" />
                            <h3>KTM Bike</h3>
                            <p>
                                <del> <b>Price:</b>2,45,000</del> <br /> <b>Offer Price : 2,10,000</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div> */}

                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                        <Products name="KTM 125 cc" price="1,25,000" offer="1,10,000" pic={require('./Images/Bike/bike1.jpg')} />
                       
                        

                    </div>

                </div>
            </div>

            {/* Footer section              */}

            <Footer />


        </>
    )
}
export default Bike;