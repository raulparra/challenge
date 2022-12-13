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

const updateTotalItems = ( objet, funcion, cart ) => {
    let totalI = cart.length
    if (funcion === 'add') {
        totalI ++
        return {
            ...objet,
            totalItems: totalI
        } 
        
    }
        totalI --
        return {
            ...objet,
            totalItems: totalI
        } 
 }



export const selectReducer = ( state = inicialState, action ) => {

    switch (action.type) {
        
        case TYPES.ADD:{
            const inmCart = [ ...state.cart ]
            const inmSummary = { ...state.summary }
            //variable que almacena una copia del state
            const inmutating = {...state}; 
             //variable que almacena el producto con el id
            let selectedProduct = {...inmutating.products.find(( product ) => product.id === action.payload)};
            // variable que almacena el valor de la propiedad quan
            let contador = selectedProduct.quan 
            // propiedad quan igual a contador más 1
            selectedProduct.quan = contador ++  
            //variable que almacena el valor de la función actualizarObjetoEnArray
            const productsModify = updateObjectInArray(inmutating.products, {index: parseInt(selectedProduct.id), quan: contador })
            
            let totalImodify = updateTotalItems( inmSummary, 'add', inmCart )

            return{
                ...state,
                
                cart: [...inmutating.cart, action.payload ],                
                summary: totalImodify,
                products: productsModify,

                }
            }
        case TYPES.DIM:{
            //variable que almacena una copia del state
            const inmutating = {...state}; 
             //variable que almacena el producto con el id
            let selectedProduct = {...inmutating.products.find(( product ) => product.id === action.payload)};
            // variable que almacena el valor de la propiedad quan
            let contador = selectedProduct.quan 
            // propiedad quan igual a contador menos 1
            selectedProduct.quan = contador --  
            //variable que almacena el valor de la función actualizarObjetoEnArray
            const productsModify = updateObjectInArray(inmutating.products, {index: parseInt(selectedProduct.id), quan: contador })

            return{
                ...state,
                
                cart: [...inmutating.cart, action.payload ],
                
                products: productsModify,
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