import React from 'react'
import Header, { Footer } from '../Pcomponents';

const MyOrder = () => {
  return (
    <>
      <Header />
      <div className="category-section">
        <h1>My Orders</h1>
        <table>
          <tr>
            <th>S.No.</th>
            <th>Order</th>
            <th>Amount</th>

            <th>Price</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <div className="my-order-table-img">
                <img src={require('./Shoes/shoes3.png')} />
                <h6>Shoes Nike</h6>
                <p>Size: Large</p>
                <p>Color: Sky Blue</p>
              </div>
            </td>
            <td>2</td>
            <td>₹2200</td>
            <td>May 05 2024</td>
            <td>May 06 2024</td>
          </tr>
          <tr>
            <td>2</td>

            <td>Shoes</td>
            <td>2</td>
            <td>₹2200</td>
            <td>May 05 2024</td>
            <td>May 06 2024</td>
          </tr>
          <tr>
            <td>3</td>

            <td>Shoes</td>
            <td>2</td>
            <td>₹2200</td>
            <td>May 05 2024</td>
            <td>May 06 2024</td>
          </tr>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default MyOrder;
