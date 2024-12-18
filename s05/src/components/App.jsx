import "./App.css";
import Header from "./Header";
import Presentation from "./Presentation";

function App() {
  return (
    <div>
      <Header />
      <br />
      <Presentation nom={"Rami"} prenom={"Ahmed"} />
    </div>
  );
}

export default App;
