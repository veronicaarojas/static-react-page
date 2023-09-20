import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [ darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(prev) {
    setDarkMode(prev => !prev)
  }
  

  return (
    <>
    <Header 
    toggleDarkMode={toggleDarkMode} 
    darkMode={darkMode}
    />
    <MainContent darkMode={darkMode}
    />
    <Footer 
    darkMode={darkMode}
    /> 
    

   
    
    </>
  )
}

export default App
