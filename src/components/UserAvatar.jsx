import { useEffect, useState } from "react";

export default function UserAvatar({ uid }) {
  const url = `https://fir-first-project-dd653-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, [url]);

  return (
    <article>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.title}</p>
    </article>
  );
}
