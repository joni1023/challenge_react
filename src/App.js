
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './component/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home><Navbar/></Home>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
