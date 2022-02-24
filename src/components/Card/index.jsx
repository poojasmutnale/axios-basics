import React from "react";
import "./card.css";

function Card(props) {
  console.log(props)
  const handleEdit = (event) => {
    event.preventDefault();
  };
  const handleDelete = (event) => {
    event.preventDefault();
  };
  return (
    <article className="card">
      <h4 className="title">{props.title}</h4>
      <div className="description">
        <p className="author">
          <strong>Author: </strong>{props.author}
        </p>
        <p className="genre">
          <strong>Genre:</strong>{props.genre}
        </p>
        <p>
          <strong>Summary:</strong>{props.summary}
        </p>
      </div>

      <div className="buttons">
        <button id="edit" type="submit" onClick={handleEdit}>
          Edit
        </button>
        <button id="delete" type="submit" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default Card;
