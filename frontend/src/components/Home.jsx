import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Book Haven</h1>
      <p className="home-subtitle">Your one-stop destination for amazing books.</p>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button 
          LinkComponent={Link} 
          to="/books" 
          className="home-button"
          variant="contained"
        >
          <Typography variant="h6">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
