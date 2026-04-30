import React, { useState, useEffect, useRef } from "react";
import style from "../css/Article.module.css";
import styled from "@emotion/styled";
import axios from "axios";
import Contact from "./Contact"; 

function Article(props) {
  const [count, setCount] = useState(0); 
  const [name, setName] = useState("Alex");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, [name]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Article</h1>

      <h3>{props.title}</h3>
      <h2>{name}</h2>

      <button onClick={() => setName("John")}>
        Change Name
      </button>

      
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {user && (
        <div>
          <h3>User Info</h3>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>City:</b> {user.address.city}</p>
        </div>
      )}

      
      <div>
        <input
          type="text"
          placeholder="Enter your text"
          ref={inputRef}
        />
        <button
          onClick={() => {
            console.log(inputRef.current.value);
            inputRef.current.focus();
          }}
        >
          Submit
        </button>
      </div>

      
      <h2>{count}</h2>

      <button
        className={style.btn}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <Button>Styled Button</Button>
      <Button yellow>Yellow Button</Button>

    
      <Contact />
    </div>
  );
}

export default Article;


const Button = styled.button`
  background-color: ${(props) =>
    props.yellow ? "yellow" : "red"};
  color: white;
  width: 120px;
  height: 35px;
  margin: 5px;
`;
