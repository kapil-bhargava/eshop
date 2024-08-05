import React from 'react'
import Header, { Footer } from '../Pcomponents'

const ProductDetail = () => {
  return (
    <>
    <Header/>
    <div className="product-head-div">

     <div className="product-div">
        <div className="product-img">
<img src={require('./Shoes/shoes2.png')}/>

        </div>
        <div className="product-description">
            <h1>Product Name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis, rerum assumenda nobis odit provident excepturi sit nostrum temporibus, laborum quo modi repudiandae rem aliquam quis eius hic aliquid recusandae.</p>
        </div>
     </div>
     <p>You might also like</p>
     <div className="other-category">
        <div className="items"> <img src={require('./Shoes/shoes2.png')}/></div>
        <div className="items"> <img src={require('./Shoes/shoes2.png')}/></div>
        <div className="items"> <img src={require('./Shoes/shoes2.png')}/></div>
        <div className="items"> <img src={require('./Shoes/shoes2.png')}/></div>
        <div className="items"> <img src={require('./Shoes/shoes2.png')}/></div>
        <div className="items"> <img src={require('./Shoes/shoes2.png')}/></div>
        
        
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetail
