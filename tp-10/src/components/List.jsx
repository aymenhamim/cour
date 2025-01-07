import ListItem from './ListItem';

function List({ articles }) {
  return (
    <ul className="border-t-[1px] border-stone-800">
      {articles.map((a, i) => (
        <ListItem article={a} key={i} />
      ))}
    </ul>
  );
}

export default List;
