import React,{useState} from "react";
export default function AddProduct() {
 const[product,setProduct]=useState({ })
 const array = []
 const CreateObject = (e)=>{product[e.target.name] = e.target.value}
 const SaveProduct = ()=>{
     setProduct({...product})
     array.push(product)}
 return(
     <div>
         <form action="">
               <h1>PRODUCT NAME:</h1>
                  <input name="fNAME" type="text" onChange={CreateObject}/>
               <h1>PRICE:</h1>
                  <input name="PRICE" type="text" onChange={CreateObject}/>
               <h1>AMOUNT:</h1>
                  <input name="AMOUNT" type="text" onChange={CreateObject}/>
               <h1>IF THE SEASON:</h1>
                  <input name="SEASON" type="text" onChange={CreateObject}/>
         </form>
               <button onClick={SaveProduct}>SEND</button>
         <table>
             <tr>
                 <th>PRODUCT NAME:</th>
                 <th>PRICE:</th>
                 <th>AMOUNT:</th>
                 <th>IF THE SEASON:</th>
             </tr>
             {
                 array.map(item=>
                     <tr>
                         <td>{item.fNAME}</td>
                         <td>{item.PRICE}</td>
                         <td>{item.AMOUNT}</td>
                         <td>{item.SEASON}</td>
                     </tr>
                 )
             }
         </table>
     </div>
 )   
}