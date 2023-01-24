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
    const action = {
      type: TYPES.RESET,
      
    }
    dispatch( action )
  }
 

  return (
    <UserContext.Provider 
      value = {  
             {globalState, addArticle, dimArticle, reset}
        } >

        { props.children }

    </UserContext.Provider>
  )
}
