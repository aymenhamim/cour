import { Component } from "react";

export default class AppClass extends Component {
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

    if (this.state.nom.length >= 3 && this.state.prenom.length >= 3) {
      this.setState({
        infos: `Nom : ${this.state.nom} - Prenom: ${this.state.prenom}`,
        nom: "",
        prenom: "",
      });
      this.setState({ errMsg: "" });
    } else {
      this.setState({ errMsg: "field is empty" });
      this.setState({ infos: "" });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Prenom</label>
          <input
            type="text"
            value={this.state.prenom}
            onChange={(e) => this.setState({ prenom: e.target.value })}
          />

          <br />

          <label>Nom</label>
          <input
            type="text"
            value={this.state.nom}
            onChange={(e) => this.setState({ nom: e.target.value })}
          />

          <br />
          <br />
          <button type="submit">Afficher</button>
          <p>{this.state.infos}</p>
          {this.state.errMsg && (
            <p style={{ color: "red" }}>{this.state.errMsg}</p>
          )}
        </form>
      </div>
    );
  }
}
