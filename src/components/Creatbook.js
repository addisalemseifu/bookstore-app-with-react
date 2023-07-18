import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks, postData } from '../redux/books/bookSlice';

export default function Creatbook() {
  const [title, setTitle] = useState('');
  const [catagory, setCatagory] = useState('');
  const [pending, setPending] = useState('Add Book');
  const dispatch = useDispatch();

  function catagoryHandler(e) {
    setCatagory(e.target.value);
  }

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function postDispatcher() {
    const bookDetail = {
      title,
      category: catagory,
      item_id: Math.random(),
    };
    setPending('...Adding');
    dispatch(postData(bookDetail));
    setTimeout(() => {
      dispatch(getBooks());
      setPending('Add Book');
    }, 1000);
  }
  return (
    <footer>
      <hr className="horizontal" />
      <h4 className="foot-title">ADD NEW BOOK</h4>
      <div className="book-form">
        <form action="">
          <input
            type="text"
            className="form-input"
            placeholder="Book title"
            onChange={(e) => {
              titleHandler(e);
            }}
          />
          <select
            value={catagory}
            onChange={(e) => {
              catagoryHandler(e);
            }}
          >
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="History">Economy</option>
            <option value="Self-help">Self-help</option>
          </select>

        </form>
        <button
          type="button"
          className="add-book"
          onClick={() => {
            postDispatcher();
          }}
        >
          {pending}
        </button>
      </div>
    </footer>
  );
}
