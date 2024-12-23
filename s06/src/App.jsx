import { useEffect, useRef, useState } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [infos, setInfos] = useState("");
  const [errMsg, setErrMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nom.length > 3 && prenom) {
      setInfos(`Nom : ${nom}, Prenom: ${prenom}`);

      setErrMsg("");
    } else {
      setErrMsg("field is empty");
      setInfos("");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Prenom</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <br />

        <label>Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <br />
        <br />
        <button type="submit">Afficher</button>
        <p>{infos}</p>
        {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      </form>
    </div>
  );
}

export default App;
