import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData, getBooks } from '../redux/books/bookSlice';

export default function Bookstate(props) {
  const {
    itemid, title, category,
  } = props;
  const [deleter, setDelete] = useState('Remove');
  const dispatch = useDispatch();
  function deleteDispatcher(itemid) {
    dispatch(deleteData(itemid));
    setDelete('...deleting');
    setTimeout(() => {
      dispatch(getBooks());
      setDelete('Delete');
    }, 1000);
  }
  return (
    <div className="book-container">
      <div className="book-detail-container">
        <h5>{category}</h5>
        <h2>{title}</h2>
        <ul>
          <button
            type="button"
            className="detail-btn"
          >
            Comments
          </button>
          <span />
          <button
            className="detail-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              console.log(itemid);
              deleteDispatcher(itemid);
            }}
          >
            {deleter}
          </button>
          <span />
          <button
            className="detail-btn"
            type="button"
          >
            Edit
          </button>
        </ul>
      </div>
    </div>
  );
}
