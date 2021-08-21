import * as types from '../Constants/Action'

export const addCartItem = (product, quantity, size) =>{
   return{
        type: types.ADD_CART_ITEM,
        product,quantity, size
   }
}

export const deleteCartItem = (idCartItem) =>{
   return {
      type: types.DELETE_CART_ITEM,
      idCartItem
   }
}

export const updateQuantityCartItem = (value, quantity) =>{
   return{
      type: types.UPDATE_QUANTITY_CART_ITEM,
      value, quantity
   }
}

export const closeMiniCart = () =>{
   return {
      type: types.CLOSE_MINI_CART
   }
}
export const openMiniCart = () =>{
   return {
      type: types.OPEN_MINI_CART
   }
}

export const filterPrice = (price) =>{
   return {
      type: types.FILTER_PRICE_PRODUCT,
      price
   }
}

export const sortProduct = (sort) =>{
   return{
      type :types.SORT_PRODUCT,
      sort
   }
}