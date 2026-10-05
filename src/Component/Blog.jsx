import React from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id, name, email } = useParams();
  return (
    <div>
      <h2>Blog detailes</h2>
      <h3>name:{name}</h3>
      <h3>id:{id}</h3>
      <h3>email:{email}</h3>
    </div>
  );
}
