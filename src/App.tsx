import './App.css'
import { useFetch } from './hooks/useQraphQlFetch';
import React from 'react';
import { CharacterIndex } from './components/CharacterIndex';
import { Routes, Route } from 'react-router-dom';
import { Character } from './components/Character';
import { CalculateRectangle } from './components/TypeDeclarations';

export default function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/x" element={<CalculateRectangle length={4} breath={5} characterstics={{ characterData: 'It s a closed geometric figure!' }} />} />
        <Route path="/:id" element={<Character />} />
        <Route path="/" element={<CharacterIndex />} />
      </Routes>
    </div>
  )
}
