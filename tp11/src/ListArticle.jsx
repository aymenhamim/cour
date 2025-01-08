function ListArticle({ articles, handleDelete, handleEdit }) {
  return (
    <div>
      {articles.map((a, i) => (
        <div key={i}>
          <h4>{a.title}</h4>
          <p>{a.body}</p>
          <button onClick={() => handleEdit(a.id)}>edit</button>
          <button onClick={() => handleDelete(a.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default ListArticle;
