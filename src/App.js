import { Routes, Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import Bookstate from './components/Bookstate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="/catagories" element={<Bookstate />} />
    </Routes>
  );
}

export default App;
