import React  from 'react';

function Quotes(props){
   
   return (<div id="qoute-box">
       <blockquote id="text">
        {props.randQuote.quote}
       </blockquote>
      <p id="author">
          Author: {props.randQuote.author}
      </p>     
               </div>
   )
   }


export default Quotes;