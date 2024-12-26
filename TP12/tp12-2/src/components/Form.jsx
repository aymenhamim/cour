import React, { useState } from "react";
export default function Form() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  function handlerSubmit(event) {
    event.preventDefault();
    if (nom && prenom) {
      alert(`Salut: ${nom} - prénom: ${prenom}`);
    }
  }
  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        <div className="list">
          <h2 className="title">Formulaire Inscription</h2>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </div>
          <div>
            <label>Prenom:</label>
            <input
              type="text"
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
            />
            <div>
              <input type="submit" value="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
