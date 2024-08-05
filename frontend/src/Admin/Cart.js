import React, { useState } from 'react';
import Header, { Footer } from '../Pcomponents'

const Cart = () => {

    const [a, seta] = useState(0);

    function increase() {
        if (a < 10) {
            seta(a + 1);
        }
        else {
            alert("Aukaat me order karo");
        }
    }
    function decrease() {
        if (a > 0) {
            seta(a - 1);
        }
    }


    return (
        <>
            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            <Header />
            <main className='table my-cart-table'>
                <section className="table-header">
                    <h1>My Cart</h1>
                    {/* <button className="btn btn-primary btn-add" onClick={ShowModal}>Add New Category</button> */}
                </section>
                <section className="table-body">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub-total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src={require('./Shoes/shoes3.png')} alt="" />Nike Shoes</td>
                                <td> <strong>₹2200</strong></td>
                                <td>
                                    <div className="counter-div">
                                        <div onClick={decrease} className="decrease">-</div>
                                        <div className="display">{a}</div>
                                        <div onClick={increase} className="increase">+</div>
                                    </div>
                                </td>
                                <td> 2200 </td>
                                <td> <i class="fa-solid fa-trash del-cart-icon"></i> </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img src={require('./Shoes/shoes3.png')} alt="" />Nike Shoes</td>
                                <td><strong>₹2200</strong></td>
                                <td>

                                    <div className="counter-div">
                                        <div onClick={decrease} className="decrease">-</div>
                                        <div className="display">{a}</div>
                                        <div onClick={increase} className="increase">+</div>
                                    </div>
                                </td>
                                <td> 200 </td>
                                <td> <i class="fa-solid fa-trash del-cart-icon"></i> </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td><img src={require('./Shoes/shoes3.png')} alt="" />Nike Shoes</td>
                                <td><strong>₹2200</strong></td>
                                <td>

                                    <div className="counter-div">
                                        <div onClick={decrease} className="decrease">-</div>
                                        <div className="display">{a}</div>
                                        <div onClick={increase} className="increase">+</div>
                                    </div>
                                </td>
                                <td> 200 </td>
                                <td> <i class="fa-solid fa-trash del-cart-icon"></i> </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><img src={require('./Shoes/shoes3.png')} alt="" />Nike Shoes</td>
                                <td><strong>₹2200</strong></td>
                                <td>

                                    <div className="counter-div">
                                        <div onClick={decrease} className="decrease">-</div>
                                        <div className="display">{a}</div>
                                        <div onClick={increase} className="increase">+</div>
                                    </div>
                                </td>
                                <td> 200 </td>
                                <td> <i class="fa-solid fa-trash del-cart-icon"></i> </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><img src={require('./Shoes/shoes3.png')} alt="" />Nike Shoes</td>
                                <td><strong>₹2200</strong></td>
                                <td>
                                    <div className="counter-div">
                                        <div onClick={decrease} className="decrease">-</div>
                                        <div className="display">{a}</div>
                                        <div onClick={increase} className="increase">+</div>
                                    </div>
                                </td>
                                <td> 200 </td>
                                <td> <i class="fa-solid fa-trash del-cart-icon"></i> </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>




            <main className='table my-cart-table grand-total'>
                <section className="table-header">
                    {/* <button className="btn btn-primary btn-add" onClick={ShowModal}>Add New Category</button> */}
                </section>
                <section className="table-body">
                    <table>
                        <thead>
                            <tr>
                                <th className='th'>Sub-total</th>
                                <th className='th'>₹22,200</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='th'>Discount</th>
                                <th className='th'>2,000</th>                               
                            </tr>
                            <tr>
                                <th className='th'>Total</th>
                                <th className='th'>20,000</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>

            <button className="btn-cart-proceed btn">PLACE ORDER <i class="fa-solid fa-arrow-right"></i></button>







            {/* =========   Using Footer from Pcomponents.js ==========  */}
            <Footer />
        </>
    )
}

export default Cart;
