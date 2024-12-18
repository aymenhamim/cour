import "./App.css";
import Header from "./Header";
import Presentation from "./Presentation";
import Voiture from "./Voiture";

function App() {
  return (
    <div>
      <Header />
      <br />
      <Presentation nom={"Rami"} prenom={"Ahmed"} />

      <Voiture />
    </div>
  );
}

export default App;
