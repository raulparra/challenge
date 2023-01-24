


export const Summary = ( summary ) => {

 const { totalItems, totalM, subtotal, tax, total, dueToday } = summary;
 
 const sTotalItems = ( {summary}) => {
      return summary.totalItems;
      
 }
 const sTotalM = ( {summary}) => {
      return summary.totalM;
      
 }
 const sSubtotal = ( {summary}) => {
      return summary.subtotal;
      
 }
 const sTax = ( {summary}) => {
      return summary.tax;
      
 }
 const sTotal = ( {summary}) => {
      return summary.total;
      
 }
 const sDueToday = ( {summary}) => {
      return summary.dueToday;
      
 }

  return (
    <div className="flex justify-center mb-10">
      <div className="grid grid-cols-1 w-80 bg-[#F9F9F9]">
          <div className="flex justify-center mb-7"><p className="font-pop text-[36px]">Summary</p></div>
          <div className="grid grid-cols-2 pl-4">
            <div className="flex flex-col gap-[24px] font-normal">
              <p>Total Items</p>
              <p>Total M²</p>
              <p>Subtotal</p>
              <p>Tax</p>
              <p className="font-bold">Total</p>
              <p className="font-bold">Due Today 50%</p>
            </div>
            <div className="pl-16 flex flex-col gap-[24px]">
              <p>{ sTotalItems( summary ) }</p>
              <p>{ sTotalM( summary ) }</p>
              <p>{ sSubtotal( summary) }</p>
              <p>{ sTax( summary) }</p>
              <p className="font-bold">{ sTotal( summary ) }</p>
              <p className="font-bold">{ sDueToday( summary) }</p>
            </div>
          </div>
      </div>
    </div>
  )
}
