import React from "react";
import "./index.css";

function Form() {
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
  return (
    <form className="addBook" onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <div className="formGroup">
        <label>
          Title:
          <input type="text"></input>
        </label>
      </div>
      <div className="formGroup">
        <label>
          Author:
          <input type="text"></input>
        </label>
      </div>
      <div className="formGroup">
        <label>
          Genre:
          <input type="text"></input>
        </label>
      </div>
      <div className="formGroup">
        <label>
          Summery:
          <input type="text"></input>
        </label>
      </div>
      
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Form;
