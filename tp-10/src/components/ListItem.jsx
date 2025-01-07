import { useDispatch } from 'react-redux';
import { deleteArticle, editArticle } from '../articlesSlice';

function ListItem({ article }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteArticle(article.id));
  }

  function handleEdit() {
    handleEdit(editArticle());
  }

  return (
    <li className="flex items-center justify-between border-b-[1px] border-stone-800 px-3 py-2">
      <span>
        <b>{article.id}</b>
      </span>
      <span>{article.designation}</span>
      <span>{article.price}$</span>

      <div>
        <button
          onClick={handleDelete}
          className="mr-2 rounded-md border border-red-700 bg-red-400 px-3 py-1 text-sm font-semibold text-red-50 outline-none transition-all duration-200 hover:bg-red-300 focus:ring-4 focus:ring-red-200"
        >
          X
        </button>

        <button
          onClick={() => handleEdit(article.id)}
          className="rounded-md border border-stone-600 bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-900 outline-none transition-all duration-200 hover:bg-stone-300 focus:ring-4 focus:ring-stone-400"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default ListItem;
