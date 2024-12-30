import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState();

  function HandleSubmit(e) {
    e.preventDefault();

    if (!userName.length && !password.length) {
      setErrMsg("field is empty");
    } else {
      setErrMsg("");
    }
  }

  return (
    <div className="bg-stone-900 text-stone-50">
      <form onSubmit={HandleSubmit}>
        <h2 className="bg-stone-900">fgsgf</h2>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se Connecter</button>

        {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      </form>
    </div>
  );
}

export default App;
