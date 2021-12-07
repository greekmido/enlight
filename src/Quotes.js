import React,{useState}  from 'react';

function Quotes(props){
   const [currentQuote, setCurrent] = useState(props.qArr[Math.floor(Math.random() * 101)]);
    
   return (<div>
       <blockquote>
        {currentQuote.quote}
       </blockquote>
      <p>
          Author: {currentQuote.author}
      </p>
   </div>
   )
   }


export default Quotes;