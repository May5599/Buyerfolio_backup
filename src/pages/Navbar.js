import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from "../assets/icons/logo.png";
import '../css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const goToPage = (page) => {
        navigate(page);
        handleMenuClose();
    };

    return (
        <div className="navbar-container">
            {/* Drop-down menu icon visible only on mobile */}
            {isMobile && (
                <IconButton className="mobile-menu-icon" edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                    <MenuIcon />
                </IconButton>
            )}
            <div className="left-section">
                {/* Logo */}
                <img src={Logo} alt="Company Logo" className="logo" />
            </div>
            <div className="left-links">
                <a className="nav-link" onClick={() => goToPage('/howitworks')}>How it Works</a>
                <a className="nav-link" onClick={() => goToPage('/agents')}>Agents</a>
                <a className="nav-link" onClick={() => goToPage('/aboutus')}>About</a>
                <a className="nav-link" onClick={() => goToPage('/blog')}>Blog</a>
                <a className="nav-link" onClick={() => goToPage('/contactus')}>Contact Us</a>
            </div>
            <div className="right-section">
                <button className="btn btn-signin">Sign In</button>
                <button className="btn btn-getstarted">Get Started</button>
            </div>
            {/* Drop-down menu */}
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => goToPage('/profile')}>Profile</MenuItem>
                <MenuItem onClick={() => goToPage('/settings')}>Settings</MenuItem>
                <MenuItem onClick={() => goToPage('/logout')}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar;
