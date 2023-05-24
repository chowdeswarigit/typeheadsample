import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const array = ["chow" ,"prasanna","puji","archana" ,"shushma","praveen","sriram"]
  const [value,setValue] = useState()
  let suggenstions = []

  const[list,setList]  = useState()

  const setInputValue = (e,x) =>{
    setValue(x)
  }

  const  autocomplete = (event)=>{
    setValue(event.target.value)
    
    array.map(x=>{
      if(x.substring(0,event.target.value.length).toUpperCase() === event.target.value.toUpperCase()){
        suggenstions.push(x)
        setList(suggenstions.map((x,index)=>{ 
          return <p key={index} onClick={(e) =>setInputValue(e,x)}>{x}</p>

        }))

      } 
      if(event.target.value.length === 0){
        setList("")
      }
    })

  }
  return (
    <div className="App">
      <input type='text' className='autocomplete' onChange={(e) =>autocomplete(e)} value={value}/>
      
      <div>
        {list}
      </div>
    </div>
  );
}

export default App;
