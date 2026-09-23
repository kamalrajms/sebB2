import React from "react";
import "./Condition.css"

export default function ConditionalRender() {
  const user = true;
  return (
    <div className="condition">
      <h2>ternary operator</h2>
      {user ? <h3>welcome back.....!</h3> : <h3>please login...</h3>}
      <h2>logical operator</h2>
      {user && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est a culpa,
          quasi facere vel ipsam, cupiditate nostrum asperiores autem aperiam
          veritatis sit dicta animi, architecto dolorum nulla quia officia sed!
        </p>
      )}
    </div>
  );
}
