import React, { useEffect, useState } from "react";

export default function CRUD() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const addItem = () => {
    console.log("hello");
    const trimmedName = name.trim();
    const timmedEmail = email.trim();
    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: timmedEmail,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        //   res={name:"egerg",email:"frgreg"}
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          //   res={name:"egerg",email:"frgreg",id:11}

          setUser([...user, newUser]);
          setName("");
          setEmail("");
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // setUser(data)
        setUser((user) => {
          // user=[{id:1},{2},{3},.{5}...{10}]
          return user.filter((person) => person.id !== id);
        });
      });
  };
  return (
    <div>
      <h2>CRUD operation</h2>
      <table>
        <thead>
          <tr>
            <td>Sn.o</td>
            <td>name</td>
            <td>email</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          {user.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>delete</button>
                <button>edit</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItem}>update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
