import { Routes, Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import Navigation from './components/Navigation';
import Category from './components/Category';

function App() {
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
