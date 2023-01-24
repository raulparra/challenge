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

 const updateSummary = ( array, article, funcion ) => {
    let contador = 0;
    let newSummary ={}
    let sumOfM2 = 0;
    let newArray = [];
    if (funcion === 'ADD' ) {
               
        if (array.find(item => item.id === article.id) === undefined) {
            newArray = [...array, article]
            contador = newArray.reduce((acc, cur) => acc + cur.quan, 0);
        }else{
            newArray = array.map(item => item.id === article.id ? {...item, quan: item.quan + 1,  tmc: item.mc * (item.quan + 1)}: item)
            contador = newArray.reduce((acc, cur) => acc + cur.quan, 0);   
        }
        
    }else{
        newArray = array.map(item => item.id === article.id ? {...item, quan: item.quan - 1,  tmc: item.mc * (item.quan - 1)}: item)
        contador = newArray.reduce((acc, cur) => acc + cur.quan, 0);
        
    }
        
        sumOfM2 = newArray.reduce((acc, cur) => acc + cur.tmc, 0);
        let sumOfsubtotal = sumOfM2 * 200
        sumOfsubtotal.toFixed(2)
        let sumTax = sumOfsubtotal * .16
        sumTax.toFixed(2)
        let sumTotal = sumOfsubtotal + sumTax
        sumTotal.toFixed(2)
        let descuento = sumTotal/2
        descuento.toFixed(2);
    
        newSummary = {
            totalItems: contador,
            totalM: sumOfM2,
            subtotal: sumOfsubtotal,
            tax: sumTax,
            total: sumTotal,
            dueToday: descuento
        }
        

    return newSummary 

 }


export const selectReducer = ( state = inicialState, action ) => {

    switch (action.type) {
        
        case TYPES.ADD:{

            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            let summaryUpdate = updateSummary (state.cart, newItem, 'ADD')
           
            
            return itemInCart ?
             {
               ...state,
               cart: state.cart.map(item => item.id === newItem.id ? {...item, quan: item.quan + 1, tmc: item.mc * (item.quan + 1)} : item),
               products: state.products.map(item => item.id === newItem.id ? {...item, contador: item.contador + 1 } : item),
               summary: summaryUpdate
             }: 
            {
                ...state,
                cart: [ ...state.cart, {...newItem, tmc: newItem.mc * newItem.quan} ],
                products: state.products.map(item => item.id === newItem.id ? {...item, contador: item.contador + 1} : item),
                summary: summaryUpdate
            }   
            
           
            }
        case TYPES.DIM:{

            let itemToDelete = state.cart.find(item => item.id === action.payload);
            let summaryUpdate = updateSummary (state.cart, itemToDelete, 'DIM')
            return itemToDelete.quan > 1 ?{
                ...state,
                cart: state.cart.map(item => item.id === itemToDelete.id ? {...item, quan : item.quan - 1, tmc: item.mc * (item.quan - 1)  }: item ),
                products: state.products.map(item => item.id === itemToDelete.id ? {...item, contador: item.contador - 1} : item),
                summary: summaryUpdate
            }:{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
                products: state.products.map(item => item.id === itemToDelete.id ? {...item, contador: item.contador - 1} : item),
                summary: summaryUpdate
            }
            
        }
        case TYPES.RESET:{
            return inicialState;
        }    
        
    }
};