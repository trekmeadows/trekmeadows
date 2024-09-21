import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Thanks from './pages/Thanks';
import Home from './pages/Home';

function App() {
  return (
   
    <Routes>
      <Route path='/' element={ <div className="App">
      <HomePage />
    </div>} />
      <Route path='/home' element={<Home />} />
      <Route path='/thankyou' element={<Thanks/>} />
    </Routes>
  );
}

export default App;
