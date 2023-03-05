import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Header from './components/header';
import Book from './components/book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YouTube from './components/youtube';
import { FlashcardList } from './components/flashcardlist';
import Grammar from './components/grammar/nouns';
import Nouns from './components/grammar/nouns';
import Articles from './components/grammar/articles';
import { TravelList } from './components/GroupVocab/travelList';
import { FoodList } from './components/GroupVocab/foodList';
import { ConversationList } from './components/GroupVocab/conversationList';
import Adjectives from './components/grammar/adjectives';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/vocab" element={<FlashcardList />} />
          <Route path="/books" element={<Book />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/nouns" element={<Nouns/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/travel" element={<TravelList/>} />
          <Route path="/food" element={<FoodList/>} />
          <Route path="/conversation" element={<ConversationList/>} />
          <Route path="/adjectives" element={<Adjectives/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
