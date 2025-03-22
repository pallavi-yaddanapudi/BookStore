import { Box, Button, FormLabel, TextField,Typography,Checkbox,FormControlLabel} from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
const URL = "https://bookstore-skyx.onrender.com/books";
import { useNavigate} from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate(); 
  const [inputs,setInputs] = useState({
    name:"",
    description:"",
    price:"",
    author:"",
    image:"",
  });
 const [checked,setChecked] = useState(false);

  const handleChange = (event) => {
      setInputs((prevState) => ({
         ...prevState, [event.target.name] : event.target.value
      }))
  };

const sendRequest = async () =>{
    await axios.post(URL,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      avaible:Boolean(checked),
      image:String(inputs.image),
    }).then((res) => res.data);
}



 const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs,checked);
  sendRequest()
    .then(() => history("/books"))
 };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
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
            Add New Book
          </Typography>
          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name}  onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />

          <FormLabel >Author</FormLabel>
          <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />

          <FormLabel>Description</FormLabel>
          <TextField  value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />

          <FormLabel >Price</FormLabel>
          <TextField value={inputs.price} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="price" type="number" />

          <FormControlLabel  control={<Checkbox checked={checked} onChange ={()=> setChecked(!checked)}  />} label="Avaible" />

          <FormLabel >Image</FormLabel>
          <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"  />

          <Button 
            variant="contained" 
            sx={{ marginTop: 2 }} 
            type="submit"
          >
            Add Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;
