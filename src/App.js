import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

function App() {
  return (<>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
  </>
  );
}

export default App;
