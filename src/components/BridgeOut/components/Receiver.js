import { GlobalContext } from "@/context/context"
import { formatAddress } from "@/config/format"
export const Receiver = () => {
    const { address, bridgeAmount, bridgeFeeAmount, keplrAddress} = GlobalContext()
    return(
      <div className="w-[100%] h-[100%] py-1 px-1 bg-black/70 rounded-2xl">
      <div className="flex flex-col w-full text-end ml-auto mr-auto">
        
          <div className="w-[98%] flex ml-auto mr-auto h-8 py-1 px-2 mt-1 mb-1">
              <div className="ml-0 flex rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                <div className="ml-0 font-semibold mr-auto">From:</div>
              </div>
              <div type="text" placeholder="Enter Amount"  className="h-7 mr-2 ml-2 outline-none mb-0.5 w-[60%] bg-transparent " >
                {keplrAddress && formatAddress(keplrAddress) }
              </div>
          </div>
          <div className="w-[98%] flex ml-auto mr-auto h-8 py-1 px-2 mt-1 mb-1">
              <div className="ml-0 flex rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                <div className="ml-0 font-semibold mr-auto">To:</div>
              </div>
              <div type="text" placeholder="Enter Amount"  className="h-7 mr-2 ml-2 outline-none mb-0.5 w-[60%] bg-transparent " >
                {address && formatAddress(address)}
              </div>
          </div>
          <div className="w-[98%] flex ml-auto mr-auto h-8 py-1 px-2 mt-1 mb-1">
              <div className="ml-0 flex rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                <div className="ml-0 font-semibold mr-auto">Amount:</div>
              </div>
              <div type="text" placeholder="Enter Amount"  className="h-7 mr-2 ml-2 outline-none mb-0.5 w-[60%] bg-transparent " >
               {bridgeAmount}
              </div>
          </div>
          <div className="w-[98%] flex ml-auto mr-auto h-8 py-1 px-2 mt-1 mb-1">
              <div className="ml-0 flex rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                <div className="ml-0 font-semibold mr-auto">Bridge Route:</div>
              </div>
              <div type="text" placeholder="Enter Amount"  className="h-7 mr-2 ml-2 outline-none mb-0.5 w-[60%] bg-transparent " >
                {'secret > BNB'}
              </div>
          </div>
          <div className="w-[98%] flex ml-auto mr-auto h-8 py-1 px-2 mt-1 mb-1">
              <div className="ml-0 flex rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                <div className="ml-0 font-semibold mr-auto">Bridge Fee:</div>
              </div>
              <div type="text" placeholder="Enter Amount"  className="h-7 outline-none mr-2 ml-2 mb-0.5 w-[60%] bg-transparent " >
                {bridgeFeeAmount}
              </div>
          </div>
      </div>
  </div>
    )
}