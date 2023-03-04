
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

const App = () => {
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('info');
  const Darkmode = () => {
    if (mode === 'info') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('info');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <Router>
        <Navbar Darkmode={Darkmode} mode={mode}/>
        <LoadingBar
          color='blue'
          height={5}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="top" country="in" category="top" />}></Route>
          <Route path="/buisness" element={<News setProgress={setProgress} key="business" country="in"  category="business" />}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route path="/food" element={<News setProgress={setProgress} key="food"  country="in" category="food" />}></Route>
          <Route path="/politics" element={<News setProgress={setProgress} key="politics" country="in" category="politics" />}></Route>
          <Route path="/health" element={<News setProgress={setProgress} key="health"  country="in" category="health" />}></Route>
          <Route path="/science" element={<News setProgress={setProgress} key="science"  country="in"  category="science" />}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} key="sports"  country="in"  category="sports" />}></Route>
          <Route path="/technology" element={<News setProgress={setProgress} key="technology"  country="in"  category="technology" />}></Route>
</Routes>
        <Footer />
      </Router>
    </div>
  )
}
export default App;

