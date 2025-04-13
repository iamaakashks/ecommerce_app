import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children})=>{
    const [cartCount, setCartCount] = useState(0);
    const addToCart = ()=> setCartCount(prev => prev+1);
    const removeFromCart = ()=> setCartCount(prev => (prev > 0 ? prev - 1 : 0));

    return(
        <CartContext.Provider value={{cartCount, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};