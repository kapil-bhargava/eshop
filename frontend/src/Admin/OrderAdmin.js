import React from 'react'
import Dashboard from './Dashboard';

const OrderAdmin = () => {

    // Javascript code for Adding Category 
    const ShowModal = () => {
        document.getElementById('modal').style.display = 'block';
    }
    const HideModal = () => {
        document.getElementById('modal').style.display = 'none';
    }
    // Javascript code for Order Modal Display
    const ShowModalOrder = () => {
        document.getElementById("modal-order").style.display = 'block';
    }
    const HideOrderModal = () => {
        document.getElementById("modal-order").style.display = 'none';
    }

    return (
        <>
            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            <Dashboard />

            {/* =========   Orders Code ==========  */}
            <main className='table'>
                <section className="table-header">
                    <h1>Customer's Orders</h1>
                    <button className="btn btn-primary btn-add" onClick={ShowModal}>Add New Category</button>
                </section>
                <section className="table-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Customer Name</th>
                                <th>Mobile No.</th>
                                <th>Shipping Address</th>
                                <th>Amount</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>Prashant</td>
                                <td>9675868409</td>
                                <td>Aliganj, Lucknow</td>
                                <td> <strong>Rs.2200</strong></td>
                                <td>06 may 2024</td>
                                <td> <p className='status delivered'>Delivered</p> </td>
                                <td><button onClick={ShowModalOrder} className="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
                            </tr>
                            <tr>
                                <td>#1</td>
                                <td>Prashant</td>
                                <td>9675868409</td>
                                <td>Aliganj, Lucknow</td>
                                <td> <strong>Rs.2200</strong></td>
                                <td>06 may 2024</td>
                                <td> <p className='status cancelled'>Cancelled</p> </td>
                                <td><button className="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
                            </tr>

                            <tr>
                                <td>#1</td>
                                <td>Prashant</td>
                                <td>9675868409</td>
                                <td>Aliganj, Lucknow</td>
                                <td> <strong>Rs.2200</strong></td>
                                <td>06 may 2024</td>
                                <td> <p className='status pending'>Pending</p> </td>
                                <td><button className="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
                            </tr>
                            <tr>
                                <td>#1</td>
                                <td>Prashant</td>
                                <td>9675868409</td>
                                <td>Aliganj, Lucknow</td>
                                <td> <strong>Rs.2200</strong></td>
                                <td>06 may 2024</td>
                                <td> <p className='status shipped'>Shipped</p> </td>
                                <td><button className="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
                            </tr>
                            <tr>
                                <td>#1</td>
                                <td>Prashant</td>
                                <td>9675868409</td>
                                <td>Aliganj, Lucknow</td>
                                <td> <strong>Rs.2200</strong></td>
                                <td>06 may 2024</td>
                                <td> <p className='status cancelled'>Cancelled</p> </td>
                                <td><button className="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>




            {/* ======= MODAL CODE  ======     */}
            <div className="modal-head-section" id="modal">
                <div className="modal-section">
                    <h6>Enter Category Name</h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <input type="text" placeholder='Category Name' />
                    <button className="btn btn-primary">Add Category</button>
                    <button className="btn btn-danger btn-cancel" onClick={HideModal}>Cancel</button>
                </div>

            </div>

            {/* MODAL FOR ORDER DETAILS VIEW ADMIN  */}
            <div className="order-modal-head-section" id="modal-order">
                <div className="order-modal-section">
                    <div className="order-modal-inner-data">
                        <p><strong>Order ID :</strong> #23409</p>
                        <p><strong>Customer Name :</strong> Prashant Kumar</p>
                        <p><strong>Mobile No. :</strong> 9686058500</p>
                        <p><strong>Order Date :</strong> 06 June 2024</p>
                        <p><strong>Total Amount :</strong> Rs.2200</p>
                        <p><strong>Shipping Address :</strong> Aliganj, sector Q, 226024, Lucknow</p>

                    </div>

                    <div className="cross-order-modal" onClick={HideOrderModal}>&times;</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td>Prashant</td> */}
                                <td> <img src={require('./Shoes/shoes3.png')} /> Nike Shoes lorehgdjhfjhjhsdhfsdfh </td>
                                <td><strong>Rs.2200</strong></td>
                                <td> <p className='status cancelled'>Cancelled</p> </td>
                            </tr>
                            <tr>
                                <td>Prashant</td>
                                <td><strong>Rs.2200</strong></td>
                                <td> <p className='status cancelled'>Cancelled</p> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default OrderAdmin;
