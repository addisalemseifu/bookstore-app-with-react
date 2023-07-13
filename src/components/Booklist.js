import React from 'react';
import Bookstate from './Bookstate';
import Creatbook from './Creatbook';

export default function Booklist() {
  const arr = [];
  // {if(arr===[]) {
  //   return(
  //     <h2>Cart is empty</h2>
  //   )
  // }}

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
      <Creatbook />
    </section>
  );
}
