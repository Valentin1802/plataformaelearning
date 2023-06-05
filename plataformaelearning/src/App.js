import './App.css';
import Cursos from './Components/Cursos';
import Contacto from './Components/Contacto';
import Register from './Components/Register';
import Home from './Components/Home';
import { Routes, Route, React } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="cursos" element={<Cursos/>}></Route>
          <Route path="contacto" element={<Contacto/>}></Route>
          <Route path="register" element={<Register/>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
