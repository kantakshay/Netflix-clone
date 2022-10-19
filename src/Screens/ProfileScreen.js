import React from 'react'
import Nav from '../Components/Navbar'
import { selectUser } from '../features/userSlice'
import {useSelector} from "react-redux"
import { auth } from '../firebase'
import './ProfileScreen.css'


function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen_body">
          <h1>Edit Profile</h1>
          <div className="profileScreen_info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
            <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreen_plans">
              <h3>plans</h3>
                <button className='profileScreen_signout' onClick={()=> auth.signOut()}>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen