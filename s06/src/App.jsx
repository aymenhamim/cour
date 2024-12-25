import { useEffect, useRef, useState } from "react";

function App() {
  const prenomRef = useRef("");
  const nomRef = useRef("");
  const [infos, setInfos] = useState("");
  const [errMsg, setErrMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const prenom = prenomRef.current.value;
    const nom = nomRef.current.value;

    if (nom.length > 3 && prenom) {
      setInfos(`Nom : ${nom} - Prenom: ${prenom}`);

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
        <input type="text" ref={prenomRef} />
        <br />

        <label>Nom</label>
        <input type="text" ref={nomRef} />
        <br />

        <button type="submit">Afficher</button>
        <p>{infos}</p>
        {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      </form>
    </div>
  );
}

export default App;
