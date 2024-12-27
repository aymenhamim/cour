import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

export default function ListArticle() {
  const [id, setId] = useState(0);
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const initialState = [{ id: 1, designation: "article01", prix: 100 }];

  const [articles, setArticles] = useState(initialState);

  let prixTotal = articles.reduce((acc, cur) => acc + +cur.prix, 0);
  let prixMoyen = prixTotal / articles.length;

  function initialiser() {
    setId("");
    setDesignation("");
    setPrix("");
  }
  function handlerAddArticle() {
    if (id && designation && prix) {
      setArticles([
        ...articles,
        { id: id, designation: designation, prix: prix },
      ]);

      initialiser();
    }
  }

  function handleRemove(id) {
    setArticles(articles.filter((a) => a.id != id));
  }
  function handleShow(id) {
    const [article] = articles.filter((a) => a.id === id);
    alert(
      `id: ${article.id} - designation: ${article.designation} - prix: ${article.prix}`
    );
  }

  function handleEdit(id) {
    const [article] = articles.filter((a) => a.id === id);
    setId(article.id);
    setPrix(article.prix);
    setDesignation(article.designation);
    setIsEdit(true);

    // console.log(article);

    // articles.map();
  }

  function handleModifier() {
    setArticles((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              id: a.id,
              designation,
              prix,
            }
          : a
      )
    );
    initialiser();
    setIsEdit(false);
  }

  function handleCancel() {
    initialiser();
    setIsEdit(false);
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
            {isEdit ? (
              <>
                <button onClick={handleModifier}>Modifier</button>
                <button onClick={handleCancel}>cancel</button>
              </>
            ) : (
              <button onClick={handlerAddArticle}>ajouter</button>
            )}
          </div>
        </div>
        {articles.length > 0 && (
          <div>
            <h3>liste Articles</h3>
            <ul className="articles">
              {articles.map((a, i) => (
                <>
                  <li key={i}>
                    {`${a.id} | ${a.designation} | ${a.prix}`}{" "}
                    <div className="buttons">
                      <button
                        onClick={() => handleRemove(a.id)}
                        className="btnEvent delete"
                      >
                        <MdDeleteOutline />
                      </button>
                      <button
                        onClick={() => handleEdit(a.id)}
                        className="btnEvent update"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleShow(a.id)}
                        className="btnEvent show"
                      >
                        <CiRead />
                      </button>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        )}

        {articles.length > 0 && (
          <>
            <h2>Statistiques</h2>
            <p>
              prix moyen: <b>{prixMoyen}$</b>
            </p>
            <p>
              prix total: <b>{prixTotal}$</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
