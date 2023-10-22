import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { redirect } from "react-router-dom";
import Button from '@mui/material/Button';
//import logo from './logo.svg';
import './App.css';
import Demo from './pages/demo'
import Home from './pages/home'

const logo = "https://prod.mygreenaward.com/ssr/sssm-logo"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/demo"
          element={<Demo />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
