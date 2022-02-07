
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './component/Navbar';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route exact path='/home' element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Home><Navbar/></Home>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
