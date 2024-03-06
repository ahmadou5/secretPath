import { RiTokenSwapLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { GlobalContext } from "@/context/context";
import { Chainlist2 } from "./Chainlist2";
export const ChainselectO = () => {
    const {isBridgeIn, setIsBridgeIn, inSenderChain, OutReceiverChain,setOutReceiverChain, chainId,  setIsList} = GlobalContext()

    const getChainImg = (id) => {
      if(id === 84531 ) {
        return 'https://beta-2w11.vercel.app/base.svg'
      }
      if(id === 420 ) {
        return 'https://beta-2w11.vercel.app/op.svg'
      }
      if(id === 11155111 ) {
        return 'https://sepolia.etherscan.io/images/svg/brands/ethereum-original.svg'
      }
      if(id === 97 ) {
        return 'https://beta-2w11.vercel.app/bnb.svg'
      }
      if(id === 5611 ) {
        return 'https://beta-2w11.vercel.app/bnb.svg'
      }
      if(id === 80001 ) {
        return 'https://beta-2w11.vercel.app/matic.svg'
      }
      if(id === 1442 ) {
        return 'https://beta-2w11.vercel.app/matic.svg'
      }
  
    }
    return(
    <div className="w-[100%] h-[100%] py-4 px-4 bg-transparent rounded-2xl">
        <div className="flex w-full text-center ml-auto mr-auto">
            <div className="ml-auto h-[125px] rounded-3xl items-start w-[40%] mr-auto">
               <div className="h-[105px] mb-3 ml-auto mr-auto py-1 px-1  w-[125px]">
                <img className="w-[90%] ml-auto mr-auto h-[90%]" src="https://faucet.pulsar.scrttestnet.com/_nuxt/img/secret-logo.ca02fc2.png" alt="hhhh"/>
               </div>
               <div className="h-[38px] flex py-1 px-1 bg-black/70 rounded-3xl mt-6  mb-3 ml-auto mr-auto w-[40px">
                 <p className="ml-auto mr-auto mt-0.5 text-xl">Secret</p>
               
               </div>
            </div>
            <div className="ml-auto  h-[125px] rounded-3xl w-[20%] mr-auto">
                <RiTokenSwapLine onClick={() => setIsBridgeIn(!isBridgeIn)} className="ml-auto mr-auto text-5xl mt-8 cursor-pointer" />
            </div>
            <div className="ml-auto h-[125px] rounded-3xl items-start w-[40%] mr-auto">
               <div className="h-[105px] mb-3 ml-auto py-1 px-1 rounded-full mr-auto w-[125px]">
                <img className="w-[90%] ml-auto mr-auto h-[90%]" src={getChainImg(chainId)} alt="hhhh"/>
               </div>
               <div onClick={() => setIsList(true)} className="h-[38px] cursor-pointer flex py-1 px-2 bg-black/70 rounded-3xl mt-6  mb-3 ml-auto mr-auto w-auto">
                 <p className="ml-auto mr-auto mt-0.5 text-xl">{inSenderChain}</p>
                 <IoMdArrowDropdown className="ml-auto mr-4 mt-1.5" />
               </div>
            </div>
        </div>
    </div>
    )
}