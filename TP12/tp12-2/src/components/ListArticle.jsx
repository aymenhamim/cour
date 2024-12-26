import React, { useState } from "react";
export default function ListArticle() {
  const [id, setId] = useState(0);
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState(0);
  const [articles, setArticles] = useState([]);

  function handlerAddArticle() {
    if (id && designation && prix) {
      setArticles([
        ...articles,
        { id: id, designation: designation, prix: prix },
      ]);
    }

    setId("");
    setDesignation("");
    setPrix("");
  }

  return (
    <div className="container">
      <div className="list">
        <h2 className="title">Ajout d'un Article</h2>
        <div className="inputs">
          <div>
            <label>Id:</label>
            <input
              type="number"
              onChange={(e) => setId(e.target.value)}
              value={id}
              required
            />
          </div>
          <div>
            <label>designation:</label>
            <input
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
              required
            />
          </div>
          <div>
            <label>prix:</label>
            <input
              type="number"
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
              required
            />
          </div>
          <div className="button">
            <input type="button" value="Ajouter" onClick={handlerAddArticle} />
          </div>
        </div>
        <div>
          <h3>liste Articles</h3>
          <ul>
            {articles.map((a, i) => (
              <li key={i}>{`${a.id} | ${a.designation} | ${a.prix}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
