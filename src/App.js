import logo from './logo.svg';
import './App.css';
import Quotes  from './Quotes';
import React,{useState,useEffect} from 'react';

function App() {

  const [quotesArr, setArray] = useState([]);
  const [currentQuote, setCurrent] = useState({quote:"",author:""});

  function randomize(){
    return Math.floor(Math.random() * 101);
  }
  function newQuote(){
    setCurrent(quotesArr[randomize()]);
    console.log("hello there")
  }
   
  useEffect(()=>{   
    fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((response)=>response.json()).then((data)=> {setArray(data.quotes);
      setCurrent(data.quotes[randomize()]);
    }).catch(e=>console.log(`Error fetching quotes${e}`));
  },[]);
 
  const toShare=currentQuote.quote+"     :"+currentQuote.author;

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {quotesArr.length===0 && <h2>Loading ....</h2>}
        {quotesArr.length !==0 && <Quotes randQuote={currentQuote}/>}
        <button className="btn btn-secondary" onClick={()=>newQuote()}>enlighten me!!</button>
        <br/>        
        <div>
          nice ? 
        <a class="btn btn-info" href={`https://twitter.com/intent/tweet?text=${toShare}`}rel="noopener">Tweet</a>
        </div>
      </header>
    </div>
  );
}

export default App;
