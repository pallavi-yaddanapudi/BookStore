import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
import { Link} from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/books/${_id}`)
      .then((res) => {
        console.log("Deleted:", res.data);
        props.onDelete(_id); // Notify parent to update state
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <div className="btn">
        <Button className="btn-link" LinkComponent={Link} to={`/books/${_id}`}>
          Update
        </Button>
        <Button className="btn-link" onClick={deleteHandler}>Delete</Button>
      </div>
    </div>
  );
};

export default Book;
