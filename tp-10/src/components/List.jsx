import ListItem from './ListItem';

function List({ articles }) {
  return (
    <ul>
      {articles.map((a, i) => (
        <ListItem a={a} key={i} />
      ))}
    </ul>
  );
}

export default List;
