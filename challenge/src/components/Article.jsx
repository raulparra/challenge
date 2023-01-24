

export const Article = ( { data, addArticle, dimArticle } ) => {
  const { id, name, quan, contador } = data;
  
  const minimoPermitido = ( contador )=> {
    let p = true
    contador > 0? p = false : p
    return p
  }

 
  return (

      
       <>
            {/* Inicio contenedor de imagen y nombre */}  

          <div className='shadow-xl h-[230px] grid content-center'>
            <div className='flex justify-center'>
            <img src={`../src/images/${ name }.png`} alt="Artículo"/>
            </div>
            <p className='text-center mt-4 text-[21px] leading-8'>{ data.name }</p>
          </div>

          {/* Fin contenedor de imagen y nombre */}

          {/* Inicio contenedor para seleccionar cantidades */}

          <div className='flex mt-6 shadow-lg'>
            <button disabled =  { minimoPermitido( contador )}
              className='btn-restar w-8 h-9 bg-[#E2E2E2]' 
              onClick={ () => dimArticle( id ) }
            >
              -
            </button>
            
            <div className=' flex-grow justify-center border-[#E2E2E2] border-[1px] grid content-center'>
              <p>{ contador }</p>
            </div>
            
            <button 
              className='btn-sumar w-8 h-9 bg-[#E2E2E2]'
              onClick={ () => addArticle( id )}
              >
                +
            </button>
          </div>
            
          {/* Fin contenedor para seleccionar cantidades */}
       </>          

                  
      
  )
};
