import { createContext, useState } from "react";

export const storeContext = createContext(null);
const storeContextProvider =(props)=>{
  const [shopItems,setShopItems] = useState({});
  const [products,setProducts]=useState([]);
  const selectshop=(itemImage)=>{
    if(!shopItems[itemImage]){
      setShopItems((prev)=>({...prev, [itemImage]:itemImage}));
    }else{
      setShopItems((prev)=>({...prev, [itemImage]:prev[itemImage]}));
    }
  
  }
  const contextValue ={
    products,
    shopItems,
    selectshop,
    setProducts
  }
  return (<storeContext.Provider value={contextValue}>
  {props.children}
  </storeContext.Provider>
  )
}
export default storeContextProvider