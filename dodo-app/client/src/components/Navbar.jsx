import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import { getUserDetails } from '../util/GetUser';
import { Dropdown } from 'antd';
import avatar from '../assets/login.png';
function Navbar({active}) {
  const [user,setUser] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const userDetails = getUserDetails();
    setUser(userDetails);
  },[]);

  const handleLogout = ()=>{
    localStorage.removeItem('toDoAppUser');
    navigate('/login');
  }

  const items = [
    {
      key: '1',
      label: (
        <span onClick={handleLogout}> Logout</span>
      ),
    },
   
   
  ];

  return (
    <header>
    <nav>
         <div className='logo__wrapper'>
         <img src={logo} alt="logo"/>
         <h4>DoDo</h4>
         </div>
      <ul className="navigation-menu">
             
      <li><Link to="/" className={active==='home' && 'activeNav'}>Home</Link></li>
      {user && <li><Link to="/to-do-list" className={active==='myTask' && 'activeNav'}>My Task</Link></li>}

      {user ?
         
         <Dropdown
         menu={{
           items,
         }}
         placement="bottom"
         arrow
       >
         <div className='userInfoNav'>
           <img  src={avatar} alt="." />
           <span>{user?.firstName ? `Hello, ${user?.firstName} ${user?.lastName}` : user?.username}</span>
         </div>
       </Dropdown>
       : <>
        <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      </>}
      
        
      </ul>
    </nav>
  </header>
  )
}

export default Navbar