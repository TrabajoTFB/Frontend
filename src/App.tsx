import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BarraNavegacion from "./components/layout/BarraNavegacion"
import BarraSuperior from './components/layout/BarraSuperior';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <BarraSuperior />
        <BarraNavegacion />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
