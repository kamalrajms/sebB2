import React from "react";

export default function ListRender() {
  const fruits = ["apple", "banana", "orange", "mango"];

  const user = [
    { id: 1, name: "kamal" },
    { id: 2, name: "rahul" },
    { id: 3, name: "kumar" },
  ];
  return (
    <div>
      <h1>list render</h1>
      <h2>fruits data</h2>
      {fruits.map((name, ind) => (
        <h3 key={ind}>{name}</h3>
      ))}
      <h2>user data</h2>
      {user.length > 0 ? (
        <div>
          {user.map((person) => (
            <h3 key={person.id}>{person.name}</h3>
          ))}
        </div>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
