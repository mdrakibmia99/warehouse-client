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
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import Blog from './Pages/Blog/Blog';
import Inventory from './Pages/Inventory/Inventory';


function App() {
  return (
    <div >
      <Header></Header>
         <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/blog' element={<Blog></Blog>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/reset' element={<Reset></Reset>}></Route>
                <Route path='/manageitems' element={
                  <RequireAuth>
                     <ManageItem></ManageItem>
                  </RequireAuth>
                }></Route>
                <Route path='/inventory/:id' element={
                  <RequireAuth>
                     <Inventory></Inventory>
                  </RequireAuth>
                }></Route>

                <Route path='/myitems' element={
                  <RequireAuth>
                    <MyItems></MyItems>
                  </RequireAuth>
                }></Route>

                <Route path='/additems' element={
                  <RequireAuth>
                     <AddItem></AddItem>
                  </RequireAuth>
                }></Route>

                <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
         <Footer></Footer>
         <ToastContainer />
    </div>
  );
}

export default App;
