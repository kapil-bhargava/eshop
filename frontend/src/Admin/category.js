
import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Category = () => {
    // Javascript code for Adding Category Modal
    const ShowModal = () => {
        document.getElementById('modal').style.display = 'block';
    }
    const HideModal = () => {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('editCategoryModal').style.display = 'none';        // Javascript code for Edit Category Modal None
    }
    // Javascript code for Edit Category Modal Display
    const openEditModal = () => {
        document.getElementById('editCategoryModal').style.display = 'block';
    };

    // useStates 
    let [categoryName, setcategoryName] = useState("");

    // Save Category to Database Code 
    const saveCategory = async () => {
        const addCategory = await fetch("http://localhost:7200/category", {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({ctName: categoryName}),   //ctName is from API (as wrapper) // categoryName is frontend useState
        });
        const data = await addCategory.json();
        alert(data.msg);
    }


    return (
        <>

            {/* =========   Using Dashboard from Admin/Dashboard.js ==========  */}
            <Dashboard />

            {/* =========   Code for Category Section ==========  */}
            <div className="category-section" id="category-sec">
                <h3>Categories of Items</h3>
                <button className="btn btn-primary btn-add" onClick={ShowModal}>Add New Category</button>
                <table>
                    <tr>
                        <th className="table-head">S.No.</th>
                        <th>Pic</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Pic</td>
                        <td>Shoes</td>
                        <td>

                            <button onClick={openEditModal} className="btn-table btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                            <button className="btn-table btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </table>
            </div>

            {/* ======= New Category MODAL CODE  ======     */}
            <div className="modal-head-section" id="modal">
                <div className="modal-section">
                    <h6>New Category</h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <input value={categoryName} onChange={(e)=>setcategoryName(e.target.value)} type="text" placeholder='Category Name' />
                    <input type="file" />
                    <button onClick={saveCategory} className="btn btn-primary">Add Category</button>
                    <button className="btn btn-dark btn-cancel" onClick={HideModal}>Cancel</button>
                </div>
            </div>

            {/* ======= New Category Edit MODAL CODE  ======     */}
            <div className="modal-head-section" id="editCategoryModal">
                <div className="modal-section">
                    <h6>Edit Category</h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <input type="text" placeholder='Category Name' />
                    <input type="file" />
                    <button className="btn btn-success">Update</button>
                    <button className="btn btn-dark btn-cancel" onClick={HideModal}>Cancel</button>
                </div>
            </div>

        </>
    )
}

export default Category;
