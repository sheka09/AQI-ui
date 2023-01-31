import Navbar from './components/Navbar.js';
import AQI from './components/AQI';
import Admin from './components/Admin';
import Owner from './components/Owner';
import Signup from './components/Signup';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home.js';

const App=()=> {
   return (
   <>
    <Navbar/>
     <div className='container'>
      <Routes>
      <Route path='/aqi' element={<AQI/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/owner' element={<Owner/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
        </div>
    </>
  );
}

export default App;
