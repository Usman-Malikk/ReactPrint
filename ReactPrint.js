import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Print from './Pirnt';


const App = () => {
    let componentRef = useRef();
  return (
    <>
    <div>
      {/* button to trigger printing of target component */}
      <ReactToPrint
        trigger={() => <button onClick={()=>{console.log('hello world')}}>Print this out!</button>}
        content={() => componentRef}
      />

      {/* component to be printed */}
      <div  ref={(el) => (componentRef = el)} >
      <Print/>    
      </div> 
       <p>Usman is here</p>
       <p>Usman is here</p>
      <p>Usman is here</p>
    </div>
  </>
  );
};


export default App
