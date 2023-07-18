import React from 'react';
import { useSelector } from 'react-redux';
import Bookstate from './Bookstate';
import Creatbook from './Creatbook';

export default function Booklist() {
  const { books } = useSelector((store) => store.book);

  const bookKey = Object.keys(books);

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {bookKey.map((key) => (books[key].map((item) => (
          <Bookstate
            key={item.item_id}
            itemid={key}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))))}
      </div>
      <Creatbook />
    </section>
  );
}
