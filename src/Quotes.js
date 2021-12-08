import React  from 'react';

function Quotes(props){
  // const [currentQuote, setCurrent] = useState(props.qArr[Math.floor(Math.random() * 101)]);
   
  
   return (<div>
       <blockquote>
        {props.randQuote.quote}
       </blockquote>
      <p>
          Author: {props.randQuote.author}
      </p>
   </div>
   )
   }


export default Quotes;