import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <AppBar position="sticky" sx={{ width: "100%", backgroundColor: "#232F3D" }} className="nav">
      <Toolbar className="toolbar">
        <NavLink to="/" className="logo">
          <Typography variant="h6" style={{color:"white"}}><LibraryBooksIcon fontSize="large" /></Typography>
        </NavLink>
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ ml: "auto" }}
        >
          <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
          <Tab LinkComponent={NavLink} to="/books" label="Books" />
          <Tab LinkComponent={NavLink} to="/about" label="About Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
