import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("");
  console.log(name);

  const [checkbox, setCheckbox] = useState(false);
  console.log(checkbox);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>name:{name}</h2>

      <div>
        <label htmlFor="">check box</label>
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
    </div>
  );
}
