import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UsePAramHook() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>user name</h2>
      {user.map((person) => (
        <h3 key={person.id}>
          <Link to={`/blogs/:${person.id}/:${person.name}/:${person.email}`}>
            {person.name}
          </Link>
        </h3>
      ))}
    </div>
  );
}
