import React from 'react';
import './header.css';

const Header= () =>
{
    return (
        <header className='container-fluid'>
        <img className='image1' src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1'/>
        <div className='navbar'>
        <a className="link" href='#'>About us</a>
        <a className="link"href='#'>Career</a>
        <a className="link"href='#'>Department</a>

        </div>
        </header>
    )
}
export default Header;