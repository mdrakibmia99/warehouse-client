import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Reset from './Pages/Login/Reset/Reset';

function App() {
  return (
    <div className="App">
      <Header></Header>
         <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/reset' element={<Reset></Reset>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
         <Footer></Footer>
         <ToastContainer />
    </div>
  );
}

export default App;
