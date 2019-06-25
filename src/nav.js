import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/nav.css";

function Nav() {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <nav>
        <ul>
            <NavLink style={ linkStyle } to={baseUrl + '/'}><li>home</li></NavLink>
            <NavLink style={ linkStyle } to={baseUrl + '/cine'}><li>cine</li></NavLink>
            <NavLink style={ linkStyle } to={baseUrl + '/hair'}><li>hair</li></NavLink>
           
        </ul>
    </nav>
  );
}

const linkStyle = {
  padding: '30px',
}

export default Nav;
