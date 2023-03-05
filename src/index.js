import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Header from './components/header';
import Book from './components/book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
