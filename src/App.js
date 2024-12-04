import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

function App() {
  return (<React.Fragment>
    <div id="root">
      <Header />
      <Navbar />
      <Footer />
    </div>
  </React.Fragment>
  );
}

export default App;
