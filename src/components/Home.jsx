import { Article } from './Article';
import { Summary } from './Summary';
import { useContext, useReducer } from 'react';
import { UserContext } from '../context/UserContext';
import { Button } from './Button';




export const Home = () => {
  
  const ctx = useContext(UserContext);
  const { products, summary, cart } = ctx.globalState;
  

  return (
    <>
      <div className='mt-24 mb-10'>
        <div className="w-[80%] m-auto flex justify-center">
          <ul className='w-full'>
            <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5'>
              {
                ctx.globalState.products.map( product => (
        
                    <li key={ product.id } className=' grid content-center h-60 mb-8 mt-6'>
                      <Article data = { product } addArticle = { ctx.addArticle } dimArticle = { ctx.dimArticle} />
                      
                    </li>
        
              ))}
            </div>
          </ul>
        </div>
      </div>
      <Button reset = { ctx.reset }/>
      <Summary summary = { summary }  />
    </>
  )
}

