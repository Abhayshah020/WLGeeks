import React from "react";
import '../cssFile/home.css';
import img from "../image/WLlogo.jpg";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none' }}><img src={img} alt="logo" /></Link>
                </div>
                <div>
                    <Link to="/features" style={{ textDecoration: 'none' }}><li>Features</li></Link>
                </div>
                <div>
                    <Link to="/demo" style={{ textDecoration: 'none' }}><li>Demo</li></Link>
                </div>
                <div>
                    <Link to="/preview" style={{ textDecoration: 'none' }}><li>PreView</li></Link>
                </div>
                <div>
                    <Link to="/pricePage" style={{ textDecoration: 'none' }}><li>Web Package Cost</li></Link>
                </div>
                <div>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>About Us</li></Link>
                </div>
                <div>
                    <Link to="/singUp" style={{ textDecoration: 'none' }}><li >Sing Up</li></Link>
                </div>
            </nav>
        </>
    )
}
export default NavBar;