import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Books from './pages/Books';
import ScrollToTop from './components/ui/ScrollToTop';
import PrivateRoute from './components/ui/PrivateRoute';
import BookName from './pages/BookName';
import Cart from './pages/Cart'; 
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NavBar from "./components/layout/NavBar";
import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';
import ChatBot from './components/ui/ChatBot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
        <TopBar />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:isbn" element={<BookName />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
<<<<<<< Updated upstream
            <Route path="/books" element={<Books />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
=======
            <Route path="/books" element={<Books />} /> {/* lowercase */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} /> {/* Added cart route */}
>>>>>>> Stashed changes
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
