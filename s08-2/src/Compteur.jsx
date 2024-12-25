import { useEffect, useState } from "react";

function Compteur() {
  const [compteur, setCompteur] = useState(0);
  useEffect(
    function () {
      console.log("The compteur was rendered");
    },
    [compteur]
  );

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "20px 30px",
        margin: "10px",
        borderRadius: "12px",
      }}
    >
      <h3>Composant Compteur</h3>
      <p>
        compteur : <span>{compteur}</span>
      </p>
      <button onClick={() => setCompteur(compteur - 1)}>Decrement</button>
      <button onClick={() => setCompteur(compteur + 1)}>Increment</button>
    </div>
  );
}

export default Compteur;
