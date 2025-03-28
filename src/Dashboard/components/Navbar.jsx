import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();

  return (
    
    <div className='Nav-container'>

<button 
  type="button" 
  className="logout-button" 
  onClick={() => navigate('/')}
>
  Logout
</button>

    </div>
   
  )
}
export default Navbar;