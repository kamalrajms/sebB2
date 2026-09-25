import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormdata({
      ...formData, //previous data
      [name]: value, // updata data
    });
  };
  console.log(formData);

  return (
    <div>
      <h2>multi fields</h2>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="enter a name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="enter a email"
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="enter a age"
      />
    </div>
  );
}
