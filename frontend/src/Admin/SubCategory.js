
import React from 'react';
import Dashboard from './Dashboard';




const SubCategory = () => {

    // Javascript code for Adding Category 
    const ShowModal = () => {
        document.getElementById('modal').style.display = 'block';
    }
    const HideModal = () => {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('editSubCategoryModal').style.display = 'none';
    }

    const openEditSubCategoryModal = () => {
        document.getElementById('editSubCategoryModal').style.display = 'block';
    }




    return (
        <>

            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            <Dashboard />

            {/* =========   Code for Sub-Category Section from Pcomponents.js ==========  */}
            <div className="category-section" id="category-sec">
                <h3>Sub-Categories of Items</h3>
                <button className="btn btn-primary btn-add" onClick={ShowModal}>Add New Sub-category</button>
                <table>
                    <tr>
                        <th className="table-head">S.No.</th>
                        <th>Category Id</th>
                        <th>Pic</th>
                        <th>Sub-category Name</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>334493ef4i40444egg4</td>
                        <td>Pic</td>
                        <td>Boots</td>
                        <td>

                            <button onClick={openEditSubCategoryModal} className="btn-table btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                            <button className="btn-table btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </table>
            </div>

            {/* ======= MODAL CODE  ======     */}
            <div className="modal-head-section" id="modal">

                <div className="modal-section">
                    <h6>New Sub-category</h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <select class="form-select">
                        <option>-Select Category-</option>
                        <option>Shoes</option>
                        <option>Clothes</option>
                        <option>Mobile</option>
                        <option>laptop</option>
                        <option>Electric</option>
                    </select>
                    <input type="text" placeholder='Sub-category Name' />
                    <input type="file"/>
                    <button className="btn btn-primary" >Add</button>
                    <button className="btn btn-dark btn-cancel" onClick={HideModal}>Cancel</button>
                </div>

            </div>

            {/* ======= Sub-category Edit MODAL CODE  ======     */}
            <div className="modal-head-section" id="editSubCategoryModal">

                <div className="modal-section">
                    <h6>Edit Sub-category</h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <select class="form-select">
                        <option>-Select Category-</option>
                        <option>Shoes</option>
                        <option>Clothes</option>
                        <option>Mobile</option>
                        <option>laptop</option>
                        <option>Electric</option>
                    </select>
                    <input type="text" placeholder='Sub-category Name' />
                    <input type="file"/>
                    <button className="btn btn-success" >Update</button>
                    <button className="btn btn-dark btn-cancel" onClick={HideModal}>Cancel</button>
                </div>

            </div>
        </>
    )
}

export default SubCategory;
