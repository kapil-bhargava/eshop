import React from 'react';                    
const Modal = () => {

    // Javascript code for Adding Category 
   
    const HideModal = () => {
        document.getElementById('modal').style.display = 'none';
    }

  

  return (
    <>
        <div className="modal-head-section" id="modal">
                <div className="modal-section">
                    <h6>Enter Category Name</h6>
                    <div className="cross" onClick={HideModal}>&times;</div>
                    <input type="text" placeholder='Category Name' />
                    <button className="btn btn-primary" >Addss    Category</button>
                    <button className="btn btn-danger btn-cancel" onClick={HideModal}>Cancel</button>
                </div>

            </div>
    </>
  )
}

export default Modal;


