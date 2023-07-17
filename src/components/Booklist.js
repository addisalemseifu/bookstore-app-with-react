import React from 'react';
import { useSelector } from 'react-redux';
import Bookstate from './Bookstate';
import Creatbook from './Creatbook';

export default function Booklist() {
  const { books } = useSelector((store) => store.book);

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {books.map((item) => (
          <Bookstate
            key={item.item_id}
            itemid={item.item_id}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
      <Creatbook />
    </section>
  );
}
