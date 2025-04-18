import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Socks from './pages/Socks';
import Sale from './pages/Sale';
import Sustainable from './pages/Sustainable';
import Return from './pages/Return';
import Store from './pages/Store';
import ApiCall from './pages/ApiCall';
import PostForm from './pages/PostForm';
import Usertable from './pages/Usertable';
import Shopmen from './components/reusable/shopmen';
import Shopwomen from './components/reusable/shopwomen';
import Login from './pages/login';
import ProductPage from './components/reusable/productdetails';
import LoadingScreen from './components/loadingscreen'; // Import the loading screen component

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/socks' element={<Socks />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/sustainable' element={<Sustainable />} />
          <Route path='/return' element={<Return />} />
          <Route path='/stores' element={<Store />} />
          <Route path='/api_call' element={<ApiCall />} />
          <Route path='/api_call/:postid' element={<ApiCall />} />
          <Route path='/api_call/post_call' element={<PostForm />} />
          <Route path='/api_call/table' element={<Usertable />} />
          <Route path='/shopmen' element={<Shopmen />} />
          <Route path='/shopwomen' element={<Shopwomen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productdetail' element={<ProductPage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
