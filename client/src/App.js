import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
import Home from './pages/Home'
import HM from './pages/HM'
import 'rsuite/dist/rsuite.min.css';
import Navigation from './components/Navigation';

function App() {
  const [active, setActive] = useState('home')
  return (
    <div className="App">
      <Navigation appearance="subtle" active={active} onSelect={setActive}/>
      <BrowserRouter>
        <Routes>
          <Route path="/hm" element={<Home />} />
          <Route path="/" element={<HM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
