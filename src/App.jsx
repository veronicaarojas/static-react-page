import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [ darkMode, setDarkMode] = useState(false);
  

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  document.body.className = darkMode ? 'dark' : "";

  
  

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
    <Header 
    toggleDarkMode={toggleDarkMode} 
    darkMode={darkMode}
    />
    <MainContent darkMode={darkMode}
    />
    <Footer 
    darkMode={darkMode} />
    </div>
  

    
  )
}

export default App
