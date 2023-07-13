import { Routes, Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import Bookstate from './components/Bookstate';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/catagories" element={<Bookstate />} />
      </Routes>
    </>
  );
}

export default App;
