import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTask from './component/CreateTask';

import TaskList from './component/TaskList';
import Login from './component/Login';
import SignUp from './component/feature/SignUp';
import ProductList from './component/ProductList';
import ViewProduct from './component/ViewProduct';
import Cart from './component/Cart';
import Home from './component/Home';

import './index.css'
import About from './component/About';
import Login1 from './component/Login1';
import SignIn1 from './component/SignIn1';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       
        <Route path="/" element={<CreateTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/list" element={<ProductList />} />
        <Route path="/view" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/SignIn1" element={<SignIn1 />} />
        
        
        
        
        
        
     
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
