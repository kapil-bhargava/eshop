import React from 'react';
import Dashboard from './Dashboard';

const ProductAdmin = () => {
    // Javascript code for Adding Category 
    const ShowModal = () => {
        document.getElementById('modal').style.display = 'block';
    }
    const HideModal = () => {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('editProductModal').style.display = 'none';
    }
    const openEditProductModal = () => {
        document.getElementById('editProductModal').style.display = 'block';
    }



    return (
        <>

            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            <Dashboard />

            {/* =========   Code for Sub-Category Section from Pcomponents.js ==========  */}
            <div className="category-section" id="category-sec">
                <h3>Product Admin Details</h3>
                <button className="btn btn-primary btn-add" onClick={ShowModal}>Add New Product</button>
                <table>
                    <tr>
                        <th className="table-head">S.No.</th>
                        <th>Category</th>
                        <th>Sub-category</th>
                        <th>Product</th>
                        <th>Pic</th>
                        <th>Price</th>
                        <th>Offer-Price</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Shoes</td>
                        <td>Boots</td>
                        <td>Chelsie Boots</td>
                        <td>Picture</td>
                        <td>Rs.2,299</td>
                        <td>Rs.1,759</td>
                        <td>

                            <button onClick={openEditProductModal} className="btn-table btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                            <button className="btn-table btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </table>
            </div>

            {/* ======= MODAL CODE FOR ADDING PRODUCTS ======     */}
            <div className="modal-head-section modal-head-section-product" id="modal">
                <div className="modal-section add-product">
                    <h6>Add Product to your Shop  </h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <select className="form-select">
                        <option>-Select Category-</option>
                        <option>Shoes</option>
                        <option>Clothes</option>
                        <option>Mobile</option>
                        <option>laptop</option>
                        <option>Electric</option>
                    </select>
                    <select className="form-select select-product">
                        <option>-Select Sub-category-</option>
                        <option>Boots</option>
                        <option>Winter Clothes</option>
                        <option>Gaming Phones</option>
                        <option>Gaming Laptops</option>
                        <option>Boots</option>
                        <option>Winter Clothes</option>
                        <option>Gaming Phones</option>
                        <option>Gaming Laptops</option>
                        <option>Boots</option>
                        <option>Winter Clothes</option>
                        <option>Gaming Phones</option>
                        <option>Gaming Laptops</option>
                        <option>Boots</option>
                        <option>Winter Clothes</option>
                        <option>Gaming Phones</option>
                        <option>Gaming Laptops</option>
                        <option>Boots</option>
                        <option>Winter Clothes</option>
                        <option>Winter Clothes</option>
                        
                    </select>
                    <input type="text" placeholder='Product Name' />
                    <input type="text" placeholder='Price' />
                    <input type="text" placeholder='Offer Price' />
                    <input type="text" placeholder='Description' />
                    <input type="file" placeholder='Add Pic' />

                    <button className="btn btn-primary">Add</button>
                    <button className="btn btn-dark btn-cancel" onClick={HideModal}>Cancel</button>
                </div>

            </div>

            {/* ======= Edit Product MODAL CODE FOR ADDING PRODUCTS ======     */}
            <div className="modal-head-section modal-head-section-product" id="editProductModal">
                <div className="modal-section add-product">
                    <h6>Edit the Product  </h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <select className="form-select">
                        <option>-Select Category-</option>
                        <option>Shoes</option>
                        <option>Clothes</option>
                        <option>Mobile</option>
                        <option>laptop</option>
                        <option>Electric</option>
                    </select>
                    <select className="form-select select-product">
                        <option>-Select Sub-category-</option>
                        <option>Boots</option>
                        <option>Winter Clothes</option>
                        <option>Gaming Phones</option>
                        <option>Gaming Laptops</option>
                    </select>
                    <input type="text" placeholder='Product Name' />
                    <input type="text" placeholder='Price' />
                    <input type="text" placeholder='Offer Price' />
                    <input type="text" placeholder='Description' />
                    <input type="file" placeholder='Add Pic' />

                    <button className="btn btn-success">Update</button>
                    <button className="btn btn-dark btn-cancel" onClick={HideModal}>Cancel</button>
                </div>

            </div>
        </>
    )
}

export default ProductAdmin;
