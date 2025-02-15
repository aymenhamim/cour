import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../articlesSlice';

const divStyle = 'mb-7 flex items-center justify-between';
const inputStyle =
  'flex w-[300px] rounded-md border border-stone-400 px-4 py-2 outline-0 transition-all duration-200 hover:bg-stone-100 focus:ring-4 focus:ring-stone-400';

const buttonStyle =
  'rounded-md border-0 bg-stone-900 px-5 py-2 text-stone-50 outline-none transition-all duration-200 hover:bg-stone-700 focus:ring-4 focus:ring-stone-300';

function Form() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [designation, setDesignation] = useState('');
  const [price, setPrice] = useState(0);

  const [update, setUpdate] = useState({ isEdit: false, id: 0 });

  function handleUpdate() {
    useDispatch(handleUpdate(1));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!id || !designation || !price) {
      alert('error');
    } else {
      dispatch(addArticle(id, designation, price));

      setDesignation('');
      setId(0);
      setPrice(0);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className={divStyle}>
        <label htmlFor="id" className="font-bold">
          ID
        </label>
        <input
          type="number"
          value={id}
          onChange={e => setId(+e.target.value)}
          id="id"
          className={inputStyle}
        />
      </div>

      <div className={divStyle}>
        <label htmlFor="designation" className="font-bold">
          designation
        </label>
        <input
          type="text"
          value={designation}
          onChange={e => setDesignation(e.target.value)}
          id="designation"
          className={inputStyle}
        />
      </div>

      <div className={divStyle}>
        <label htmlFor="price" className="font-bold">
          price
        </label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          id="price"
          className={inputStyle}
        />
      </div>
      <div className="flex justify-end">
        {update.isEdit ? (
          <button className={buttonStyle}>Update</button>
        ) : (
          <button className={buttonStyle} type="submit">
            Ajouter
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
