import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
    const [show,handleShow]=useState(false)
    const history = useHistory();

    const transitionNavbar = () =>{
            (window.scrollY > 100 ? handleShow(true): handleShow(false));
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
        return () => {
            window.removeEventListener('scroll',transitionNavbar);
        }
    },[])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav__contents">
        <img
        onClick={() => history.push('/')}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
        onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
    
      </div>
    </div>
  );
}

export default Navbar;
