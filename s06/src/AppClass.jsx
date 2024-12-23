import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      infos: "",
      errMsg: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.state.nom.length > 3 && this.state.prenom.length) {
      setInfos(`Nom : ${this.state.nom}, Prenom: ${this.state.prenom}`);

      setErrMsg("");
    } else {
      setErrMsg("field is empty");
      setInfos("");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Prenom</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />

          <br />

          <label>Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <br />
          <br />
          <button type="submit">Afficher</button>
          <p>{infos}</p>
          {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
        </form>
      </div>
    );
  }
}
