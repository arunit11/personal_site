import React from 'react';
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import Download from './Download';

const Header = () => {
    const path = useLocation().pathname;

    return (
        <Navbar fluid rounded   >
            <Navbar.Brand href="https://flowbite-react.com" >
                <span className="self-center whitespace-nowrap tet-with text-xl font-semibold dark:text-white pacifico-regular bg-gradient-to-r from-teal-400 to-blue-500 mr-1 p-2 rounded-2xl">Pranav</span>
                <span className='font-semibold text-xl pacifico-regular text-blue-500   gap-1 '>Coder</span>
            </Navbar.Brand>
            <div className="flex md:order-2">

              <Download/>

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/skill'}>
                    <Link to='/skill'>Skills</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/portfolio'}>
                    <Link to='/portfolio'>Portfolio</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/gallery'}>
                    <Link to='/gallery'>Gallery</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/contact'}>
                    <Link to='/contact'>Contact</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
