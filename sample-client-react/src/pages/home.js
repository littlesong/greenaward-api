import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const logo = "https://prod.mygreenaward.com/ssr/sssm-logo"

function Home() {
  const navigate = useNavigate();

  const onDemo = () => {
    console.log("bbb")
    return navigate("/demo")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GreenAward SDK
        </p>
        <a
          className="App-link"
          href="https://itech4green.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
        <br></br>
        <Button variant="text" onClick={onDemo} size="small" >Demo Store</Button>
        <Button href="/demo" size="large" >Demo Store</Button>
      </header>
    </div>
  );
}

export default Home;
