import './App.css';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import SignIn from './component/SignIn';
import About from './component/About';
import LogIn from './component/LogIn';

function App() {
  return (
    <>
   <Router>
      <Routes>
  
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign' element={<SignIn/>}/>
        <Route path='/login' element={<LogIn/>}/>
     </Routes>
    </Router> 
    </>
  );
}

export default App;
