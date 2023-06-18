import './App.css';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import { Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import NavB from './components/NavB';
import Gallery from './components/Gallery';
import Programmes from './components/Programmes';
import About from './components/About';
import Donate from './components/Donate';
import Paypal from './components/Paypal';
import Webinar from './pages/Webinar';


function App() {
  return (
    <div>
      <NavB/>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/programmes" element={<Programmes/>}/>
        <Route exact path="/webinar" element={<Webinar/>}/>
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/donate" element={<Donate/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path='/addbook' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/book_s" element={<Books />}/>
        <Route path="/books/:id" element={<BookDetail />} exact />
        <Route/>
        <Route/>
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
