import React, { useState, useEffect } from 'react';
import { AppBar, InputAdornment, Toolbar, TextField, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Search, ArrowDropDown, Notifications, Menu as MenuIcon } from '@mui/icons-material';
import './CustomAppBar.css'; // Import the CSS file

function CustomAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#7731e4' }}>
            <Toolbar>
                {/* Dropdown icon (rendered only on mobile) */}
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="menu" className="menu-icon">
                        <MenuIcon />
                    </IconButton>
                )}
                {/* Logo */}
                <img src="/images/logo.png" alt="buyerfolio" className="logo" />
                <div style={{ flexGrow: 1 }}></div>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    className="search-input"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
               
                <IconButton color="inherit" className="icon-btn">
                    <Notifications />
                </IconButton>
                <IconButton color="inherit" className="icon-btn" onClick={handleMenuOpen}>
                    <Avatar src="/images/User_icon.png" alt="User Avatar" />
                </IconButton>
                <IconButton color="inherit" className="icon-btn" onClick={handleMenuOpen}>
                    <ArrowDropDown />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;
