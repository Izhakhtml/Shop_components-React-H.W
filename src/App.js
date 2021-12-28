// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Products from './components/Shop/Products.component'
import AddProduct from './components/Shop/AddProduct.component'
function App() {
  const[matag,setMatag]=useState(0)
  // function Change() {
  //   setMatag(!matag)
    
  // }
  
  return (
    <div className="App">
    {
     matag%2==0?<Products/>:<AddProduct/>
    }
        <button onClick={()=>{setMatag(matag+1)}}>CHANGE</button>
    </div>
  );
}

export default App;
