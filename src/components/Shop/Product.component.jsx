import React from "react";
export default function Product(props) {
return(
      <div id="div">
          <h1>PRODUCT NAME:{props.name}</h1>
          <h1>PRICE:{props.price}</h1>
          <h1>AMOUNT:{props.amount}</h1>
          <h1>IF THE SEASON:{ props.seaon}</h1>
      </div>
  )
}