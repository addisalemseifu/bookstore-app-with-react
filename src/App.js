import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Booklist from './components/Booklist';
import Navigation from './components/Navigation';
import Category from './components/Category';
import { getBooks } from './redux/books/bookSlice';

function App() {
  const { isLoading } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/catagories" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
