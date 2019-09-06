import React from 'react'
import CartItem from './CartItem';

export default ({value}) => {
    
const { cart } =value
console.log(value, cart);
  return (
      <div className = "container-fluid">
        {/* hello from cartlist */}
        {cart.map((item) => {
            return (
                <CartItem key={item.id} item = {item } value = {value}/>
            )
        })}
         
    </div>
  )
}
