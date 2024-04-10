import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton, Divider, List, ListItem, ListItemText } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import './Sidebar.css'; // Import CSS file

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true); // Initially show the sidebar

  useEffect(() => {
    // Add event listener to resize event
    window.addEventListener('resize', handleResize);
    // Call handleResize once initially to set initial state
    handleResize();
    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    // Update showSidebar state based on window width
    setShowSidebar(window.innerWidth >= 768);
  };

  return (
    <Box className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
      <Box className="sidebar-content">
        <Box className="sidebar-header" display="flex" alignItems="center" justifyContent="space-between" padding="10px">
          <Typography variant="h6">
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <ArrowBack />
          </IconButton>
        </Box>
        
        <Divider />
        
        <List className="sidebar-list">
          <ListItem button className="sidebar-item">
            <img src="/images/Vector.png" alt="Task Icon" width="24px" height="24px"  />
            <ListItemText primary="Tasks" style={{ marginLeft:'10px' , color: 'white'}} />
          </ListItem>

          <ListItem button className="sidebar-item">
            <img src="/images/house-care.svg" alt="Liked Homes Icon" width="24px" height="24px" />
            <ListItemText primary="Liked Homes" style={{ marginLeft:'10px'}} />
          </ListItem>

          <ListItem button className="sidebar-item">
            <img src="/images/Saved_Searches_Icon.svg" alt="Saved Searches Icon" width="24px" height="24px" />
            <ListItemText primary="Saved Searches" style={{ marginLeft:'10px'}} />
          </ListItem>

          <ListItem button className="sidebar-item">
            <img src="/images/Hidden_Homes.svg" alt="Hidden Homes Icon" width="24px" height="24px" />
            <ListItemText primary="Hidden Homes" style={{ marginLeft:'10px'}} />
          </ListItem>

          <ListItem button className="sidebar-item">
            <img src="/images/mortgage.svg" alt="Pre-qualification Icon" width="24px" height="24px" />
            <ListItemText primary="Pre-qualification" style={{ marginLeft:'10px'}}/>
          </ListItem>
        </List>

        <Divider style={{ marginTop: 'auto' }} />

        <Box className="sidebar-footer" display="flex" flexDirection="column" alignItems="center" padding="5px">
          <Typography variant="body2" align="center" gutterBottom>
            Download our App now!
          </Typography>

          <Box marginBottom="5px">
            <Button 
              variant="outlined" 
              style={{ color: '#000', minWidth: '80px', fontSize: '0.8rem', borderColor:'#000' }}
              startIcon={<img src="/images/Apple_Logo.svg" alt="App Store" width="16px" height="16px" />}
            >
              Appstore
            </Button>
          </Box>

          <Box marginBottom="5px">
            <Button 
              variant="outlined" 
              style={{ color: '#000', minWidth: '80px', fontSize: '0.8rem', borderColor:'#000' }}
              startIcon={<img src="/images/Google_Play.svg" alt="Play Store" width="16px" height="16px" />}
            >
              Playstore
            </Button>
          </Box>

          <img src="/images/barcode.png" alt="Barcode" width="60px" />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
