import './car.css';
import Header, { Menu, Footer, Products } from './MyComponent';

const Car = () => {
    return (
        <>
            {/* Online Shop Heading  */}
            <Header />
            <div className="row">

                {/* List and Category partition  */}

                <div className="col-2">
                    <Menu />
                </div>

                <div className="col-10">

                    <div className="row right-div">

                        {/* Partition of Items with data */}



                        {/* <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div>
                        <div className="col-3 r1 text-center">
                            <img src={require('./Images/car1.png')} alt="" />
                            <h3>Car</h3>
                            <p>
                                <del> <b>Price:</b>6,00,000/-</del> <br /> <b>Offer Price : 5,00,00/-</b>
                            </p>
                            <div className="btn btn-primary">Buy Now</div>
                        </div> */}


                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />
                        <Products name="Maruti Car" price="12,25,000" offer="10,10,000" pic={require('./Images/Car/car-1.png')} />

                    </div>

                </div>
            </div>

            {/* Footer section              */}

            <Footer />

        </>
    )
}
export default Car;