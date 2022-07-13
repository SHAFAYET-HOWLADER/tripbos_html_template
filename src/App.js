
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="root_point">
       <Navbar/>
       <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/home' element={<Home/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
