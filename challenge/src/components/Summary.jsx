


export const Summary = () => {
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
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p className="font-bold">a</p>
              <p className="font-bold">a</p>
            </div>
          </div>
      </div>
    </div>
  )
}
