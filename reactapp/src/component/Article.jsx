import React, { useState, useEffect } from "react";
import style from "../css/Article.module.css";
import styled from "styled-components";
import axios from "axios";

function Article(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, [name]);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
      console.log(response.data);
      }catch (err) {
        setError("Failed to fetch user data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Article</h1>

      <h2>{name}</h2>
      <h3>{count}</h3>

      <button
        className={style.btn}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <Button onClick={() => setCount(count - 1)}>
        Decrement
      </Button>

      <h3>{props.title}</h3>

      {/* API Data Section */}
      <div>
        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {user && (
          <div>
            <h3>User Info</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;

const Button = styled.button`
  background-color: ${(props) => (props.pink ? "pink" : "blue")};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;
