import './App.css'
import { useFetch } from './hooks/useQraphQlFetch';
import React from 'react';
import { CharacterIndex } from './components/CharacterIndex';
import { Routes, Route } from 'react-router-dom';
import { Character } from './components/Character';

export default function App() {


  return (
    <div className="App">
      <Routes>

        <Route path="/:id" element={<Character />} />
        <Route path="/" element={<CharacterIndex />} />
      </Routes>
    </div>
  )
}
