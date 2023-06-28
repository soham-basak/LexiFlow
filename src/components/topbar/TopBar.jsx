import React from 'react'
import "./TopBar.css"

export default function TopBar() {
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
            <li className="topListItems">HOME</li>
            <li className="topListItems">ABOUT</li>
            <li className="topListItems">CONTACT</li>
            <li className="topListItems">WRITE</li>
            <li className="topListItems">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
         className="topImg"
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

