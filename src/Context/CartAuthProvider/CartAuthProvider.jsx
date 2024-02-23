import React, { createContext, useEffect, useState } from 'react'
export const cartAuthContext = createContext()

export default function CartAuthProvider({children}) {

  function addToCart(id) {
    const productId=id;
    console.log(productId);
    let newCounter=cartCounter+1;
    setCartCounter(newCounter);
    localStorage.setItem("cart",newCounter);
  }
  function addToFavorite(id){
    const productId=id;
    console.log(productId);
    let newCounter=cartCounter+1;
    setCartCounter(newCounter);
    localStorage.setItem("cart",newCounter);
  }

  useEffect(function(){
  let cart=localStorage.getItem("cart");
  if(cart!=null){
    setCartCounter(Number(cart));
  }else if(cart==null){
    setCartCounter(Number(0))
  }
    // console.log(cart);
  },[])
  const [cartCounter, setCartCounter] = useState(0)

  return <cartAuthContext.Provider value={{cartCounter , setCartCounter,addToFavorite,addToCart}}>
    {children}
  </cartAuthContext.Provider>
}
