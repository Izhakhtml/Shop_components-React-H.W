import React,{useState,useEffect} from "react";
import Product from './Product.component'
export default function Create() {

const allProducts =
[
    {
         name:"comcumber",
         price:10.9,
         amount:5,
         ifSeason:true,
    },
    {
        name:"tomato",
        price:13.9,
        amount:3,
        ifSeason:false,
    },
    {
        name:"carrot",
        price:15.9,
        amount:7,
        ifSeason:true,
    },
]
const massage = useEffect(()=>{alert("wellcome")},[])
return(
<div>
 {
  allProducts.map((item)=>{
  return <Product name = {item.name} price ={item.price} amount={item.amount} ifSeason ={item.ifSeason}/>
  })
 }     
</div>
)
}