import React, { useState, useContext, useEffect } from 'react';
// import { SessionContext } from '../paginacion/contexts/SessionContext';

import favicon from '../imagenes/favicon-256x256.png'
import './Header.css'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  // const { loggedIn, user, logout } = useContext(SessionContext);
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
      setIsLoggedIn(loggedIn);
    }
  });

  return (
    <header className='headerH'>
    {/* <!-- ///logo  tiene una clse logo . img --> */}
    <a href="./index.php" className="logoH"><i className="icon-"></i>TopFoodye</a>
    <nav className="navbarH" id="navbarH">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtnH">
        <i className="menu-iconH"><img src={favicon} alt="" className='favicon' /></i>
      </label>
      <ul className='ulH'>
        {/* <a href="../conexion/Conexion.php">Platillos</a> */}
        <Link to={"/iot"} className="LinksH"  style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',   }} >Ver IoT</Link>
        <Link to={"/platillos"} className="LinksH"  style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',   }} >Platillos</Link>
        <Link to={"/bebidas"} className="LinksH" style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',}} >Bebidas</Link>
        <Link to={"/informacion"} className="LinksH" style={{fontSize: 17}}>¿Quienes somos?</Link>
        {isLoggedIn ? (
          <>
            <Link to={"/"} className="LinksH" style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',}} >Inicio</Link>
            
              <Link to={"/panel"} className="LinksH" style={{fontSize: 17}}>Ver mi perfil</Link>
            {/* )} */}
            <span className="text-muted me-2">Bienvenido, {user.usuario}!</span>
          </>
        ) : (
          <>
            <Link to={"/registro"} className="LinksH" style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',}} >Registro</Link>
            <Link to={"/login"} className="LinksH" style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',}} >Iniciar sesión</Link>
            <Link to={"/"} className="LinksH" style={{ fontSize: 17, overflowX: 'hidden', scrollPaddingTop: '5.5rem', scrollBehavior: 'smooth',}} >Inicio</Link>
          </>
        )}
        
      </ul>
    </nav>
  </header>
  )
}

export default Header;