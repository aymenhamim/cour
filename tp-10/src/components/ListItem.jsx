import { useDispatch } from 'react-redux';
import { deleteArticle } from '../articlesSlice';

function ListItem({ article }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteArticle(article.id));
  }

  return (
    <li className="flex items-center justify-between border-b-[1px] border-stone-800 px-3 py-2">
      <span>{article.id}</span>
      <span>{article.designation}</span>
      <span>{article.price}$</span>

      <div>
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
}

export default ListItem;
