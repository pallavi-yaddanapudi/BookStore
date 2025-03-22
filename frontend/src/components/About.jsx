import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container">
      <Box className="about-content">
        <Typography variant="h4" className="about-title">
          Welcome to Book Haven!
        </Typography>
        <Typography variant="body1" className="about-text">
          Book Haven is your ultimate online bookstore, offering a diverse collection of books across various genres. Whether you're a passionate reader or a casual book lover, we are here to provide an enjoyable book-buying experience.
        </Typography>

        <Typography variant="h5" className="about-subtitle">Our Mission</Typography>
        <Typography variant="body1" className="about-text">
          We believe in the power of books to change lives. Our mission is to make books accessible to everyone, promote lifelong learning, and bring knowledge and entertainment to readers worldwide.
        </Typography>

        <Typography variant="h5" className="about-subtitle">What We Offer</Typography>
        <Typography variant="body1" className="about-text">
         A vast collection of books across multiple categories. <br />
        Easy-to-navigate platform for seamless browsing and purchasing. <br />
        Book reviews and recommendations to help you find the perfect read.
        </Typography>

        <Typography variant="h5" className="about-subtitle">Why Choose Us?</Typography>
        <Typography variant="body1" className="about-text">
          Wide Selection: From bestsellers to rare finds. <br />
          User-Friendly Interface: A smooth and efficient book-shopping experience. <br />
          Affordable Prices: Great deals on your favorite books.
        </Typography>

        <Typography variant="h5" className="about-subtitle">Get in Touch</Typography>
        <Typography variant="body1" className="about-text">
          Address: 123, Book Street, City, Country <br />
          Email: support@bookhaven.com <br />
          Phone: +123 456 7890
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
