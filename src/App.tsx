import './App.css'
import { useFetch } from './hooks/useQraphQlFetch';
import React from 'react';
import { FetchAxios } from './components/FetchAxios';
import { UseCharacter } from './components/UseCharacter';


export default function App() {


  return (
    <div className="App">
      <FetchAxios />
      <UseCharacter />
    </div>
  )
}
