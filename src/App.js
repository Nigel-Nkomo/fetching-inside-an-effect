import { useEffect, useState } from "react";
import fetchBio from "./api";

function App() {
  const [person, setPerson] = useState("Michael");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    fetchBio(person).then((result) => {
      setBio(result);
    });

    //cleanup
    //otherwise loading won't show and the page will show the same value until the new value is fetched because the value of bio won't be null anymore
    // unless == if not
    // if bio isn't true show loading
    // bio stays null for 2s when the value is Jemma
    return () => setBio(null);
  }, [person]);

  return (
    <>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Michael">Michael</option>
        <option value="Jemma">Jemma</option>
        <option value="Sylvester">Sylvester</option>
      </select>
      <br />
      <hr />
      <br />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}

export default App;
