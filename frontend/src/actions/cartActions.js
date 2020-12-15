import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

// using thunk so need to pass in dispatch
// saving cart to localstorage - getState allows us to get entire state tree (product list, details, cartitems etc)
export const addToCart = (id, qty) => async (dispatch, getState) => {

  try {

  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    
  } catch (error) {
      console.log("error with cart Actions")
  }


  
}
// can only save strings in localstorage -once we take it back out we will need to parse it

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}