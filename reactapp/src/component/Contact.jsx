import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (data) => {
    event.preventDefault();
    if(!email.endsWith("@krmu.edu.in")){
        alert("invalid email address");
        return;
    }
    console.log(data);
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div>
      <h2>Contact Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;