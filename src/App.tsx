import { Routes, Route } from 'react-router-dom';
import { Main, Posts } from './pages';
import { Nav } from './components'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
