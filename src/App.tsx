import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Main, Posts } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
