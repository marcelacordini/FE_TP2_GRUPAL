import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explorer from './pages/Explorer';
import ApiModule from './pages/ApiModule';
import Gallery from './pages/Gallery';
import Bitacora from './pages/Bitacora';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="explorador" element={<Explorer />} />
          <Route path="api" element={<ApiModule />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="bitacora" element={<Bitacora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;