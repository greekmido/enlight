import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes';
import React,{useState,useEffect, useCallback} from 'react';

function App() {

  const [quotesArr, setArray] = useState([]);
  const [currentQuote, setCurrent] = useState(null);

  useEffect(()=>{   
    fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((response)=>response.json()).then(data=> setArray(data.quotes)).catch(e=>console.log(`Error fetching quotes${e}`));
  },[]);

  function getQuote(){
        setCurrent(quotesArr[Math.floor(Math.random() * 101)])
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {console.log(quotesArr)}
          <Quotes />
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
