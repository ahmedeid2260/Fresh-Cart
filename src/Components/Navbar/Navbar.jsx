import { Link, useNavigate } from "react-router-dom"
import NavbarCss from "./Navbar.module.css"
import React, { useContext, useEffect } from 'react'
import logo from "../../Assets/Images/freshcart-logo.svg"
import { authContext } from "../../Context/LoggedAuthProvider/LoggedAuthProvider";
import { cartAuthContext } from "../../Context/CartAuthProvider/CartAuthProvider";

export default function Navbar() {
  const {cartCounter }= useContext(cartAuthContext);

  const {token, setToken} = useContext(authContext);
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token!=null){
    setToken(token)
    }
  },[]);
  const navigate= useNavigate()
 function logout(){
   setToken(null)
   localStorage.removeItem("token")
  navigate("/login");
 } 
  return <>
  {/* &gt; */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Fresh Cart" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {token?        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
        <li className="nav-item">
            <Link className="nav-link active" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="wishList">WishList</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="brands">Brands</Link>
          </li>
        </ul>  :""}

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <ul className="list-unstyled d-flex gap-3 mx-3">
            <li><Link target="_blank" to="https://www.instgram.com"><i className="fa-brands fa-instagram"></i></Link></li>
            <li><Link target="_blank" to="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></Link></li>
            <li><Link target="_blank" to="https://www.tiktok.com"><i className="fa-brands fa-tiktok"></i></Link></li>
            <li><Link target="_blank" to="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></Link></li>
            <li><Link target="_blank" to="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></Link></li>
            <li><Link target="_blank" to="https://www.youtube.com"><i className="fa-brands fa-youtube"></i></Link></li>
          </ul>
          {token?<div className="d-flex align-items-center gap-5 position-relative">
            <Link to='/profile'><span className={ NavbarCss.logout + `  ` }>Profile</span></Link>
            
            <span role="button" onClick={logout} className={ NavbarCss.logout + `  ` }>Logout</span>
            <div className="position-relative">
              <span className="cart">{cartCounter}</span>
            <i className={` fa-solid fa-cart-shopping fs-3`}></i>
            </div>
          </div>
          :<>
          <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Register</Link>
        </li>
        </>
          }
        </ul>
      </div>
    </div>
  </nav>
</>

}
