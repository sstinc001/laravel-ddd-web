// import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Regist from './pages/Regist'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/auth'  element={<Auth />} />
          <Route path='/regist'  element={<Regist />} />
        </Routes>
      </BrowserRouter>
  );
}

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
