import './App.css';
import { useState, useEffect } from 'react';

const API_URL='http://localhost:8080/api/v1/demo/fetch'
const App = ()=> {
  const [text, setText]=useState("") 
  
  const getData =()=>{
    fetch(API_URL, {
      headers:{
        'Content-Type':'application/text',
        'Accept':'application/text'
      }
    }).then((res)=>(setText(res)})
  } 

  useEffect(()=>{
    getData()
  },"")
  return (
    <div className="App">
      {text}
    </div>
  );
}

export default App;
