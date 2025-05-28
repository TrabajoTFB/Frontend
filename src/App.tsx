import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import NavBar from "./components/layout/NavBar";
import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';
import ChatBot from './components/ui/ChatBot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <TopBar />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;
