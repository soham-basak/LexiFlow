import React from 'react'
import { Link } from 'react-router-dom';
import "./TopBar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItems">
              <Link className='link' to="/">HOME</Link>
            </li>
            <li className="topListItems">
              <Link className='link' to="/">ABOUT</Link>
            </li>
            <li className="topListItems">
            <Link className='link' to="/">CONTACT</Link>
            </li>
            <li className="topListItems">
            <Link className='link' to="/write">WRITE</Link>
            </li>
            <li className="topListItems">
            <Link className='link' to="/">
              {user && "LOGOUT"}
            </Link>
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
         <img className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="" />
          ) : (
            <ul className='topList'>
              <li className="topListItems">
              <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className="topListItems">
              <Link className='link' to="/register">REGISTER</Link> 
              </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

