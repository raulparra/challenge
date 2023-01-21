import { products } from "../data/products";
import { TYPES } from "../actions/selectActions";

export const inicialState = {
        products,
        summary: {
            totalItems: 0,
            totalM: 0,
            subtotal: 0,
            tax: 0,
            total: 0,
            dueToday: 0 
        }, 
        cart: [],
         
};

//función para actualizar la propiedad 'quan' del producto seleccionado
const updateObjectInArray = (array, action) => {

    return array.map((item, index) => {
        //debugger
      if (index + 1 !== action.index) {
        // Si no es, se deja tal cual
        return item
      }
    
        // Si es, actualiza la propiedad quan del producto seleccionado
      return {
        ...item,
        quan: action.quan
      }
    })
  }
  //Fin de la función


const updateTotalItems = ( array, funcion) => {

    let contador = 1;
    if (funcion === 'ADD' ) {
        for (let value of array) {
            contador = contador + value.quan
        }
        console.log(contador);
        
    }
    return contador
   
 }
 const updateTotalM = ( array, article ) => {
    
    
 }

 const updateSummary = ( summary, array, article ) => {
    
    
 }


export const selectReducer = ( state = inicialState, action ) => {

    switch (action.type) {
        
        case TYPES.ADD:{

            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            let summaryTI = updateTotalItems([...state.cart], 'ADD')
            let summaryM2 = updateTotalM( [...state.cart], newItem )
            
            return itemInCart ?
             {
               ...state,
               cart: state.cart.map(item => item.id === newItem.id ? {...item, quan: item.quan + 1, contador: item.contador + 1, tmc: item.mc * (item.quan + 1)} : item),
               products: state.products.map(item => item.id === newItem.id ? {...item, contador: item.contador + 1 } : item),
               summary: {...state.summary, totalItems: summaryTI,  }
             }: 
            {
                ...state,
                cart: [ ...state.cart, {...newItem, contador: newItem.contador + 1, tmc: newItem.mc * newItem.quan} ],
                summary: {...state.summary, totalItems: summaryTI,  } ,
                products: state.products.map(item => item.id === newItem.id ? {...item, contador: item.contador + 1} : item)
            }   
            
           
            }
        case TYPES.DIM:{

            let itemToDelete = state.cart.find(item => item.id === action.payload);
            let summaryTI = updateTotalItems([...state.cart], 'DIM')
            return itemToDelete.quan > 1 ?{
                ...state,
                cart: state.cart.map(item => item.id === itemToDelete.id ? {...item, quan : item.quan - 1, contador: item.contador - 1, tmc: item.mc * (item.quan - 1)  }: item ),
                products: state.products.map(item => item.id === itemToDelete.id ? {...item, contador: item.contador - 1} : item),
                summary: {...state.summary, totalItems: state.summary.totalItems - summaryTI,  }
            }:{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
                products: state.products.map(item => item.id === itemToDelete.id ? {...item, contador: item.contador - 1} : item),
                summary: {...state.summary, totalItems: state.summary.totalItems - summaryTI }
            }
            
        }
        case TYPES.ADDTOCART:{
           return 
        }
        case TYPES.RESET:{
            return inicialState;
        }
        case TYPES.TAX:{
            
        }
        case TYPES.TOTAL:{

        }
        case TYPES.TOTALM:{

        }
        case TYPES.SUBT:{

        }
        case TYPES.DUE:{
            
        }
            
            
    
        
    }
};