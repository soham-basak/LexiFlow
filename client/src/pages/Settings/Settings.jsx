import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import pp from './pp.jpg'
import './Settings.css'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label> Profile Picture</label>
            <div className="settingsPP">
                <img src={pp} alt="" />
                <label htmlFor="fileInput">
                <i className=" settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Dexter'/>
            <label>Email</label>
            <input type="email" placeholder='dexter@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div> 
      <Sidebar/>
    </div>
  )
}
