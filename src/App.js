import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import About from './components/About';
import Home from './components/Home';
import NoteState from './context/content/NoteState';
// import Signin from './components/Signin';
import Login from './components/Login';
import Signin from './components/Signin';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
      <div className="container">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signin/>} />
    </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
