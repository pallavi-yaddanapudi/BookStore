import { Box, Button, FormControlLabel, FormLabel, TextField, Typography, Checkbox } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:8080/books/${id}`)
        .then((res) => {
          setInputs(res.data.book);
          setChecked(res.data.book.available);
        })
        .catch((err) => console.error(err));
    };
    fetchHandler();
  }, [id]);

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

const sendRequest = async() => {
  await axios.put(`http://localhost:8080/books/${id}`, {
    ...inputs,
    available: checked
  })
  .then(res => console.log("Updated:", res.data)) 
  .catch(err => console.error(err));
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    sendRequest().then(() => history("/books"));
    
  };

  return (
    <div>
     { inputs && <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={600}
          alignContent="center"
          alignSelf="center"
          padding={3}
          boxShadow={3}
          borderRadius={3}
          marginLeft="auto"
          marginRight="auto"
          marginTop="10px"
        >
          <Typography variant="h4" textAlign="center" marginBottom={2}>
            Edit Book Details
          </Typography>
          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name || ""} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />

          <FormLabel>Author</FormLabel>
          <TextField value={inputs.author || ""} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />

          <FormLabel>Description</FormLabel>
          <TextField value={inputs.description || ""} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />

          <FormLabel>Price</FormLabel>
          <TextField value={inputs.price || ""} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="price" type="number" />

          <FormControlLabel
            control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
            label="Available"
          /> 

          <FormLabel>Image</FormLabel>
          <TextField value={inputs.image || ""} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

          <Button variant="contained" sx={{ marginTop: 2 }} type="submit">
            Update Book
          </Button>
        </Box>
      </form> }
    </div>
  );
};

export default BookDetails;
