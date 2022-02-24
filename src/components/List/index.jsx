import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./index.css";

function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function x() {
      try {
        const data = await axios.get("http://localhost:3000/books");
        setData(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    x();
  }, []);
  return (
    <div className="cardList">
      {data.map(({ id, title, author, genre, summary }) => (
        <Card
          id={id}
          title={title}
          author={author}
          genre={genre}
          summary={summary}
          key={id}
        />
      ))}
    </div>
  );
}

export default List;
