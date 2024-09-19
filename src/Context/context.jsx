import { createContext, useState } from "react";

export const storeContext = createContext(null);
const storeContextProvider =(props)=>{
  const [shopItems,setShopItems] = useState({});
  const [products,setProducts]=useState([]);
  const addToCart=(itemId)=>{
    if(!shopItems[itemId]){
      setShopItems((prev)=>({...prev, [itemId]:1}));
    }else{
      setShopItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    }
  
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in shopItems) {
      if (shopItems[item]>0) {
        let itemInfo = products.find((product) =>product._id === item);
        totalAmount += itemInfo.price * shopItems[item];
      }
      
    }
    return totalAmount;
  }
  const removeFromCart =(itemId) => {
    setShopItems((prev) => ({ ...prev, [itemId]: prev[itemId]-1 }));}


  const contextValue ={
    products,
    shopItems,
    selectshop,
    setProducts,
    getTotalCartAmount,
    addToCart,
    removeFromCart
  }
  return (<storeContext.Provider value={contextValue}>
  {props.children}
  </storeContext.Provider>
  )
}
export default storeContextProvider