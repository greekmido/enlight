import React  from 'react';

function Quotes(props){
  // const [currentQuote, setCurrent] = useState(props.qArr[Math.floor(Math.random() * 101)]);
   
  
   return (<div id="qoute-box">
       <blockquote id="text">
        {props.randQuote.quote}
       </blockquote>
      <p id="author">
          Author: {props.randQuote.author}
      </p>
      <a href="twitter.com/intent/tweet">Tweet</a>
   </div>
   )
   }


export default Quotes;