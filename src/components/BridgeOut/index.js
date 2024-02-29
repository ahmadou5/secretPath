'use client'
import { GlobalContext } from "@/context/context"
import { ChainselectO } from "./components/ChainSelectO"
import { Receiver } from "./components/Receiver"
import { Tokenselect } from "./components/TokenSelect"

import { FiArrowUpRight } from "react-icons/fi";
import { formatAddress } from "@/config/format"
import { Chainlist2 } from "./components/Chainlist2"
import { TokenList } from "./components/TokenList"
export const BridgeOut = () => {
    
    const {isBridgeIn, isList,isTokenList, setIsBridgeIn, address, bridgeAmount, bridgeFeeAmount, keplrAddress} = GlobalContext()
    return(
    <div>
        <div className=" w-full flex items-center flex-col h-16">
        { keplrAddress !== '' && <div className="w-[207px] flex text-xl ml-auto mr-auto py-1.5 px-6 text-center bg-blue-600/50 h-10 drop-shadow-glow  rounded-3xl">
            <div
                      className="w-auto h-auto py-1 px-1.5 mt-1.5 xl:w-7 xl:h-7"
                        style={{
                          background: '#ffffff',
                          width: 32,
                          height: 16,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      ></div>
            {
                keplrAddress !== '' && <p className="ml-auto mr-auto">{formatAddress(keplrAddress)}</p>
            }
          
            </div>}
        <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
       
           
        </div>
        <div className=" w-[100%] h-auto">
            <div>
                <div className="h-[900px] w-[80%] lg:w-[50%] py-3 px-3 mb-20 mt-20 drop-shadow-glow2 bg-black/90 rounded-3xl ml-auto mr-auto">
                    <div className="py-2 px-2 w-[80%] mt-4 ml-auto mr-auto flex">
                       <p className="ml-auto mr-1 text-xl font-bold">Bridge out</p>
                       <FiArrowUpRight className="ml-2 mr-auto text-xl font-bold mt-1" />
                    </div>
                    <div className="w-[95%] ml-auto rounded-2xl mr-auto mt-[40px] drop-shadow-lg h-[155px]">
                       <ChainselectO />
                    </div>
                    <div className="w-[95%] ml-auto rounded-2xl mr-auto mt-[80px] drop-shadow-lg h-[155px]">
                       <Tokenselect />
                    </div>
                    <div className="w-[95%] ml-auto rounded-2xl mr-auto mt-[30px] drop-shadow-lg h-[215px]">
                       <Receiver />
                    </div>
                    <div className="w-[95%] ml-auto  flex rounded-2xl mr-auto mt-[60px] drop-shadow-lg h-[215px]">
                      <button className="w-[370px] text-xl ml-auto mr-auto bg-blue-600/50 h-10 drop-shadow-glow2  rounded-3xl">Bridge</button>
                    </div>
                </div>
            </div>
            <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        </div>
        {isList && <Chainlist2/>}
        {isTokenList && <TokenList/>}
    </div>
    )
}