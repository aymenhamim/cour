import { useState } from "react";
import "./App.css";
import JeuDeu from "./components/JeuDeu";
import Quran from "./components/Quran";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <JeuDeu cache={3} /> */}
      <Quran />
    </div>
  );
}

export default App;
