import React from 'react'
import { Link,useMatch,useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
    <Link className='logo' to='/'>Air Quality Monitoring</Link>
    <ul>     
        <CustomLink to='/admin'>Admin</CustomLink>
        <CustomLink to='/owner'>Owner</CustomLink>
        <CustomLink to='/aqi'>AQI</CustomLink>
        <CustomLink to='/signup'>Signup</CustomLink>
        <CustomLink to='/login'>Login</CustomLink>
    </ul>
    </nav>
  )
}

const CustomLink=({to,children,...props})=>{
const resolvedPath=useResolvedPath(to);
const isActive=useMatch({path:resolvedPath.pathname,end:true})

return(
  <li className={isActive?'active':''}>
    <Link to={to} {...props}>
    {children}
    </Link>
  </li>
)


}

export default Navbar