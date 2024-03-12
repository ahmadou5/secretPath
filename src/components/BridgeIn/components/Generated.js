import { GlobalContext } from "@/context/context"
import { formatEther } from "viem"
import { TailSpin, Watch } from "react-loader-spinner"
import { useChains } from "wagmi"
import { config } from "@/provider"
import { useState } from "react"
import { formatEthAddress,  handleCopy  } from "@/config/format"
import { IoIosCopy} from "react-icons/io"
import Link from "next/link"

export const Generated = () => {
    
    const {genratedAddress, bridgeFeeAmount, setGeneratedAddress,bridgeAmount, tokenName, isGenerated, setIsGenerated } = GlobalContext()
    
   
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="lg:h-[420px] h-auto w-[80%] lg:w-[50%] py-3 px-3 mb-20 mt-16 lg:mt-[200px] drop-shadow-glow2 bg-black/65 rounded-3xl ml-auto mr-auto">
            <div className="w-[99%] rounded-2xl mt-3 bg-black/35 h-[98%] ml-auto mr-auto">
                <div className=" ml-auto mr-4 flex py-0.5 px-0.5 w-[98%] h-8">
                    <p className="w-[140px] cursor-pointer mt-5 h-8  text-center ml-4 mr-auto py-1 rounded-full">Deposit Address</p>
                    <p onClick={() => setIsGenerated(false)} className="w-[100px] cursor-pointer mt-5 h-8 bg-black/75 text-center ml-auto mr-1 py-1 rounded-full">close</p>
                </div>
                {
                    genratedAddress === '' ?
                    <div className="w-[90%] flex mt-[65px] bg-black/75 py-12 px-2 rounded-lg  h-[130px] lg:text-2xl ml-auto mr-auto">
                     <div className='ml-auto mr-2'>{'Generating Deposit Address'}</div>
                     <div  className='ml-4 mr-auto'>
                     <TailSpin
                    
  visible={true}
  height="35"
  width="35"
  color="#0141ff"
  ariaLabel="tail-spin-loading"
  radius="2"
  wrapperStyle={{}}
  wrapperClass=""
  />
                     </div>

                    </div>
                      : 
                    <div className="w-[80%] mt-[65px] text-center flex lg:text-2xl  bg-black/75 py-4 px-2 rounded-lg  h-[60px] ml-auto mr-auto">
                      <p  className="ml-auto mr-2">{formatEthAddress(genratedAddress)}</p>
                      <IoIosCopy className="ml-4 text-white/70 mr-auto" onClick={() => handleCopy(genratedAddress)} />
                   </div>
                }
                <div>
                    {
                        genratedAddress && 
                        <>
                        <div className="w-[80%] mt-[18px] text-center flex flex-col  lg:text-xl  bg-transparent py-2 px-2 rounded-lg  h-[70px] ml-auto mr-auto">
                           <p>{`Send ${bridgeAmount} of ${tokenName} to this address to bridge, include ${bridgeFeeAmount}-gwei of ${tokenName} as Fee!`}</p>
                            <div className="ml-auto mt-2 mr-auto flex flex-col">
                            <Link href={`https://testnet.axelarscan.io/account/${genratedAddress}` } className="flex">
                            <p>view on Axeler Explorer</p>
                            </Link>
                            </div>
                        </div>
                        <div className="w-[95%] ml-auto  flex rounded-2xl mr-auto mt-[50px] drop-shadow-lg h-[215px]">
                      <button className="w-[370px] text-xl ml-auto mr-auto bg-blue-600/50 h-10 drop-shadow-glow2  rounded-3xl">or Send with Metamask</button>
                    </div>
                        </>
                    }
                </div>
            </div>
        </div>
  
    </div>
    )
}