import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
        <Typography variant="body2">&copy; {new Date().getFullYear()} Book Haven. All Rights Reserved.</Typography>
        <Box display="flex" gap={2} mt={1}>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </Box>
    </div>
  );
};

export default Footer;
