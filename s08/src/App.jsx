import { useState } from "react";
import ChercheBar from "./ChercheBar";
import ResultatList from "./ResultatList";
const list = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" },
];
function App({}) {
  const [type, setType] = useState("");
  const [resultat, setResultat] = useState([]);

  function onChercheSubmitApp(term) {
    setType(term.toLowerCase());
    setResultat(list.filter((i) => i.type === term.toLowerCase()));
  }

  return (
    <div className="app">
      <h1 className="left">Composant App</h1>
      <ChercheBar onChercheSubmit={onChercheSubmitApp} />
      <p className="left">Le Type : {type}</p>
      <ResultatList resultat={resultat} />
    </div>
  );
}

export default App;
