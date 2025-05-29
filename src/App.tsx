import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import BookName from './pages/BookName';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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
            <Route path="/books" element={<Books />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;
