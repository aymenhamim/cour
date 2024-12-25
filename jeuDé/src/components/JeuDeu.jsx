import { useState } from "react";

function JeuDeu({ cache }) {
  const [data, setData] = useState({ nbrEssay: 0, fin: false, face: null });
  const [nbrEssay, setNbrEssay] = useState(0);
  const [isFin, setIsFin] = useState(false);
  const [face, setFace] = useState(null);

  const jouer = () => {
    if (cache === face) {
      setNbrEssay(0);
      setFace(0);
      setIsFin((prev) => !prev);
    } else {
      setNbrEssay((prev) => prev + 1);
      setFace(Math.floor(Math.random() * 6) + 1);
      setIsFin(false);
    }
  };

  return (
    <div>
      <img src="/public/images/init.PNG" alt="img" />
      <h2>Jeu de Deu ...</h2>
      <p>face: {face}</p>
      {face && (
        <img src={`../../public/images/face${face || ""}.PNG`} alt="img" />
      )}
      <h3>nombre d'essais: {nbrEssay}</h3>

      <button onClick={jouer}>{isFin ? "initialisé" : "joue"}</button>
    </div>
  );
}

export default JeuDeu;
