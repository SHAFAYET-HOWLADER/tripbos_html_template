
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Destination from './components/Pages/Destination';
import Home from './components/Pages/Home';
import Popular from './components/Popular';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import VideoPoint from './components/VideoPoint';

function App() {
  return (
    <div className="root_point">
       <Navbar/>
       <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/home' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/destination' element={<Destination/>}></Route>
           <Route path='/popularDestination' element={<Popular/>}></Route>
           <Route path='/vedioStory' element={<VideoPoint/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
