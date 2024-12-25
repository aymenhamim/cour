function ResultatList({ resultat }) {
  return (
    <div>
      <h3>composant ResultatList</h3>
      <ul>
        {resultat.map((l, i) => (
          <li key={i}>{l.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultatList;
