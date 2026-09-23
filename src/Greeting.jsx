import React from "react";
import Hello from "./Hello";

export default function Greeting() {
  const name = "kumar";
  const city = "salem";
  return (
    <div className="greeting">
      <h3>
        react intro {name}
        {city}
      </h3>
      <Hello name={name} city={city}/>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        architecto atque, blanditiis modi officiis ducimus voluptas omnis
        tenetur corporis, nobis, quas error impedit molestias ad facilis
        obcaecati quo accusantium voluptatem!
      </p>
    </div>
  );
}
