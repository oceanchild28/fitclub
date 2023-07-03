import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile=window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened]=useState(false)
  return (
   <div className="header">
    <img src={Logo} alt="" className='logo' />
    {menuOpened===false&&mobile===true?(
      <div style={{backgroundColor:"var(--appColor)", padding:"0.5rem", borderRadius:"5px"}} onClick={()=>setMenuOpened(true)}><img src={Bars} alt="" style={{width:'1.5rem' , height:'1.5rem'}}/></div>
    ):<ul className='header-menu'>
    <li onClick={()=>setMenuOpened(false)}><Link to='home' span={true} smooth={true}>Home</Link> </li>
    <li onClick={()=>setMenuOpened(false)}><Link to='programs' span={true} smooth={true}>Programs</Link></li>
    <li onClick={()=>setMenuOpened(false)}><Link to='reasons' span={true} smooth={true}>Why Us</Link></li>
    <li onClick={()=>setMenuOpened(false)}><Link to='plans' span={true} smooth={true}>Plans</Link></li>
    <li onClick={()=>setMenuOpened(false)}> <Link to='Testimonials' span={true} smooth={true}>Testimonials</Link></li>
</ul>}
    

   </div>
  )
}

export default Header