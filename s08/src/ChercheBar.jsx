import { useState } from "react";

function ChercheBar({ onChercheSubmit }) {
  const [term, setTerm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onChercheSubmit(term);
  }
  return (
    <form onSubmit={handleSubmit} className="serchBar">
      <h3>composant ChercheBar</h3>
      <p>Enter le mot clé de chercher:</p>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <br />
      <button type="submit">Cherche</button>
    </form>
  );
}

export default ChercheBar;
