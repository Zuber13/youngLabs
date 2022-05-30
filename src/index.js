import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import Batches from './components/Batches';
import Footer from './components/Footer';
import './App.css'


// add coment

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Content/>
    <Batches/>
    <Footer/>
  </>
);
