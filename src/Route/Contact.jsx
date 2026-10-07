import React from "react";
import useAxiosAPI from "../Component/useAxiosAPI";

export default function Contact() {
  const {
    data: user,
    loading,
    error,
  } = useAxiosAPI("https://jsonplaceholder.typicode.com/users");
  if (loading) return <h2>loadddinnngggg......!!!!!!1</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  return (
    <div>
      <h2>contact component</h2>
      {user.map((person) => (
        <div
          key={person.id}
          style={{ padding: "20px", border: "2px solid #333" }}
        >
          <h2>name:{person.name}</h2>
          <h2>email:{person.email}</h2>
        </div>
      ))}
    </div>
  );
}
