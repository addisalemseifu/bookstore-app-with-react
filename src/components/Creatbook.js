import { React, useState } from 'react';

export default function Creatbook() {
  const bookArr = [];
  const [title, setTitle] = useState('');
  const [catagory, setCatagory] = useState('');

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
      id: Math.random(),
    };
    bookArr.push(bookDetail);
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
          Add-Book
        </button>
      </div>
    </footer>
  );
}
