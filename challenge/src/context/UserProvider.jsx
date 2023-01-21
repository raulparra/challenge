import { UserContext } from "./UserContext";
import { products } from "../data/products";
import { TYPES } from '../actions/selectActions';
import { inicialState, selectReducer } from "./selectReducer";
import { useReducer } from "react";


export const UserProvider = ( props ) => {
  
  const iState = {
    inicialState
  }

  const [globalState, dispatch] = useReducer(selectReducer, inicialState);

  const { products, cart } =  globalState;
 
   const addArticle = ( id ) => {
    const action = {
      type: TYPES.ADD, 
      payload: id
    }
    dispatch( action )
  }

  const dimArticle = ( id ) => {
    const action = {
      type: TYPES.DIM, 
      payload: id
    }
    dispatch( action )
  }
  
  const reset = () =>{
    dispatch( { type: TYPES.RESET } )
  }
  const addToCart = ( id ) => {
    const action = {
      type: TYPES.ADDTOCART,
      payload: id
    }
  }
  const precioTotal = () => {
    dispatch( { type: TYPES.TOTAL } )
  }
  const subTotal = () => {
    dispatch( { type: TYPES.SUBT } )
  }
  const taX = () => {
    dispatch( { type: TYPES.TAX } )
  }
  const totalM = () => {
    dispatch( { type: TYPES.TOTALM } )
  }
  const dueOff = () => {
    dispatch( { type: TYPES.DUE })
  }
  
const summaryUpdate = ( {summary}) => {
  const action = {
    type: TYPES.CTOTALITEMS,
    payload: summary
  }    
} 

  return (
    <UserContext.Provider 
      value = {  
             {globalState, addArticle, dimArticle, reset, addToCart, precioTotal, subTotal, taX, totalM, dueOff, summaryUpdate}
        } >

        { props.children }

    </UserContext.Provider>
  )
}
