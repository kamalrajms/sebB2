import React, { useEffect, useState } from "react";

export default function UseEffectAIP() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch,axios
    fetch("https://jsonplaceholder.typicode.com/users")
      // api=[{},{},{},{}...{}]   // raw data
      .then((res) => res.json())
      // api=[{},{}.....{}]   // obj data
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>user List</h1>
      {loading ? (
        <h2>loading...!@#$%^%$#$%^&^%$#$%^&^%$#$%^&^%$#@ ..!!!!!</h2>
      ) : (
        <div>
          {user.map((person) => (
            <h2 key={person.id}>{person.name}</h2>
          ))}
        </div>
      )}
    </div>
  );
}
