import { useState } from "react";
import ListArticle from "./ListArticle";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "article1", body: "this article 1" },
    { id: 2, title: "article2", body: "this is article 2" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [curId, setCurId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !body) {
      alert("error");
      return;
    }

    if (!isEdit) {
      const newArticle = { id: articles.length + 1, title, body };
      setArticles((prev) => [...prev, newArticle]);
    } else {
      const updatedArticle = { id: curId, body, title };
      setArticles((prev) =>
        prev.map((a) => (a.id == curId ? updatedArticle : a))
      );

      setIsEdit(false);
    }

    setCurId("");
    setBody("");
    setTitle("");
  }

  function handleDelete(id) {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  }

  function handleEdit(id) {
    setIsEdit(true);
    setCurId(id);
    const article = articles.find((a) => a.id === id);

    if (article) {
      setTitle(article.title);
      setBody(article.body);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />

        <label>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br />
        <br />

        {isEdit ? (
          <button type="submit">edit article</button>
        ) : (
          <button type="submit">Add article</button>
        )}
      </form>

      <ListArticle
        articles={articles}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
