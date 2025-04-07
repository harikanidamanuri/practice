import React from 'react';
import {Route, Routes } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/men'element={<Men />} />
        <Route path='/women'element={<Women />} />
        <Route path='/socks'element={<Socks />} />
        <Route path='/sale'element={<Sale />} />
        <Route path='/sustainable'element={<Sustainable />} />
        <Route path='/return'element={<Return />} />
        <Route path='/stores'element={<Store />} />
        <Route path='/api_call'element={<ApiCall />}/>
        <Route path='/api_call/:postid' element={<ApiCall />}/>
        <Route path='/api_call/post_call'element={<PostForm />}/>
      </Routes>
    </div> 
  );
};

export default App;