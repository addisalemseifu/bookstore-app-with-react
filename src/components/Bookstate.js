export default function Bookstate( // eslint-disable-next-line react/prop-types
  {
  // eslint-disable-next-line react/prop-types
    itemid, title, category, removeBook,
  },
) {
  const handleRemove = () => {
    removeBook(itemid);
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
