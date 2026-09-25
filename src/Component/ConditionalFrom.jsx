import React, { useState } from "react";

export default function ConditionalFrom() {
  const [formData, setFormdata] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    setFormdata({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChange2 = (e) => {
  //     const { checked, name } = e.target;
  //     setFormdata({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      setError("all the fields are required");
      return;
    }
    if (!formData.terms) {
      setError("must accept the checkbox");
      return;
    }
    setError("");
    alert("form is submitted successfully ");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Conditional form</h2>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter a password"
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
