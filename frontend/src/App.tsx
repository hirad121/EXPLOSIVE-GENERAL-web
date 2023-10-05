import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
document.querySelector(“.sidebar”)?.classList.add(“open”);
}

const openMenu = () => {
document.querySelector(“.sidebar”)?.classList.remove(“open”);
}

  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button className="sidebar-close-button" onClick={closeMenu}>
                <a href="index.html">Explosive General</a>
        </div>
  );
}

export default App;
