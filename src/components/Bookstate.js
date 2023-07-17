import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function Bookstate(props) {
  const {
    itemid, title, category,
  } = props;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(itemid));
  };
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
            onClick={handleRemove}
          >
            Delete
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
