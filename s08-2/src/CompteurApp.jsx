import { useState } from "react";
import Compteur from "./Compteur";

function CompteurApp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(false)}>Demonter</button>
      <button onClick={() => setIsOpen(true)}>Montrer</button>
      {isOpen && (
        <div>
          <Compteur />
        </div>
      )}
    </div>
  );
}

export default CompteurApp;
