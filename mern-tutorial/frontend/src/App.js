import { Route, Routes } from 'react-router';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
