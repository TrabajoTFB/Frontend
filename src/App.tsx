import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookName from './pages/BookName';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import Books from './pages/Books';
=======
>>>>>>> f35fe0b82ee84faf75c8d53e37e4db102087a268
import Profile from './pages/Profile';
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
            <Route path="/bookname" element={<BookName />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;
