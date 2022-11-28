
import { products } from '../data/products';



export const Home = () => {

  
 
  return (
    <div className='mt-24 mb-24'>
      <div className="w-[80%] m-auto flex justify-center">
        <ul className='w-full'>
          <div className='grid grid-cols-5 gap-7'>
            {
              products.map(article => (
      
                  <li key={ article.id } className=' grid content-center h-60 mb-8 mt-6'>

                     {/* Inicio contenedor de imagen y nombre */}  

                    <div className='shadow-xl h-[230px] grid content-center'>
                      <div className='flex justify-center'>
                      <img src={`./src/images/${ article.name }.png`} alt="Artículo"/>
                      </div>
                      <p className='text-center mt-4 text-[21px] leading-8'>{ article.name }</p>
                    </div>

                    {/* Fin contenedor de imagen y nombre */}

                    {/* Inicio contenedor para seleccionar cantidades */}

                    <div className='flex mt-6 shadow-lg'>
                      <button className='w-8 h-9 bg-[#E2E2E2]'>-</button>
                      <div className=' flex-grow justify-center border-[#E2E2E2] border-[1px] grid content-center'>
                        <p>0</p>
                      </div>
                      <button className='w-8 h-9 bg-[#E2E2E2]'>+</button>
                    </div>
                      
                    {/* Fin contenedor para seleccionar cantidades */}
                  </li>
      
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}

