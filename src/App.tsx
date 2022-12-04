import './App.css'
import { CharacterIndex } from './components/CharacterIndex';
import { Routes, Route } from 'react-router-dom';
import { Character } from './components/Character';
import Home from './components/Home';
import { FetchAxios } from './components/CountriesFetch.tsx';
import { AxiosData } from './components/LanguagesAxios';

export default function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<Character />} />
        <Route path="/characters" element={<CharacterIndex />} />
        <Route path="/useaxios" element={<AxiosData />} />
        <Route path="/usefetch" element={<FetchAxios />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
