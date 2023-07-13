import React, { useState } from 'react';
import Bookstate from './Bookstate';

export default function Booklist() {
  const bookArr = [];
  const [title, setTitle] = useState('');
  const [catagory, setCatagory] = useState('');
  const [arr, setArr] = useState([]);

  // const bookKey = Object.keys(books);

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
    setArr(bookArr);
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {arr.map((item) => (
          <Bookstate
            key={item.id}
            itemid={item.id}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
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
    </section>
  );
}
