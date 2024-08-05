
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
// import Header, { Footer, HomePage } from '../Pcomponents';
const Dashboard = () => {

    const [cookie, createcookie, removecookie] = useCookies();
    const jump = useNavigate();

    useEffect(() => {
        if (cookie["adminCookie"] == null) {
            jump("/Adminlogin")
        }
    }, [])

    // var p1 = removecookie("adminCookie");
    // var p2 = removecookie("adminCookie");

    const logoutFun = () => {
        window.confirm("Sure");
        if (window.confirm("Sure") === true) {
            removecookie("adminCookie");
            removecookie("adminCookie");
        }


    }

    return (
        <>
            {/* =========    DASHBOARD CODE    ========== */}

            <div className="dashboard-div" id="Dash">
                <div className="list-div">
                    <button className="shop-btn-db">
                        <NavLink className='link' to="/">Kapil Store </NavLink>
                        <NavLink to="/dashboard"><button className="admin-d">ADMIN</button></NavLink>
                    </button>
                    <button className="dashboard-btn">
                        <NavLink className='link' to="/dashboard"><i class="fa fa-light fa-chart-simple d-icon"></i>Dashboard</NavLink>
                    </button>
                    <ul>
                        <NavLink className='link' to="/category"><i class="fa fa-list-alt" aria-hidden="true"></i><li>Category</li></NavLink>      {/*Done */}
                        <NavLink className='link' to="/subcategory"><i class="fa-regular fa-user"></i><li>Sub-Category</li></NavLink>
                        <NavLink className='link' to="/productadmin"><i class="fa fa-solid fa-money-bill-trend-up"></i><li>Products</li></NavLink>
                        <NavLink className='link' to="/orderadmin"><i class="fa fa-clipboard-check"></i><li>Orders</li></NavLink>
                        {/* <NavLink className='NavLink' to="/"><i class="fa fa-cart-shopping"></i><li>Catalog</li></NavLink>
                        <NavLink className='NavLink' to="/subcategory"><i class="fa-solid fa-blog"></i><li>Blogs</li></NavLink>
                        <NavLink className='NavLink' to="/subcategory"><i class="fa-solid fa-question"></i><li>Enquiries</li></NavLink> */}
                        <div className="bottom-links-db">
                            <hr className="hr-db" />
                            <NavLink onClick={logoutFun} className='link' to="/subcategory"><i class="fas fa-sign-out-alt"></i><li>Sign Out</li></NavLink>
                            <NavLink className='link' to="/adminchangepswd"><i class="fas fa-sign-out-alt"></i><li>Change Password</li></NavLink>
                        </div>
                    </ul>
                </div>
            </div>
            {/* <div className='db-icon'>
            <i class="fa-solid fa-user"/>
                <h1>Admin</h1>
            </div> */}
        </>
    )
}
export default Dashboard;