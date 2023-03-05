import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Header from './components/header';
import Book from './components/book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YouTube from './components/youtube';
import { FlashcardList } from './components/flashcardlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/vocab" element={<FlashcardList />} />
        <Route path="/books" element={<Book />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books" element={<Book />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
