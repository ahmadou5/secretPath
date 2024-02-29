import { GlobalContext } from "@/context/context"
import { useState } from "react"

export const TokenList = () => {
    const {setIsTokenList} = GlobalContext()
    const [search,setSearch] = useState('')

    const tokens = [
        {
            name: 'USDT',
            address: 'fygkrgtdsk',
            type: 'ERC20',

        },
        {
            name: 'BUSD',
            address: 'fygkrgtdsk',
            type: 'ERC20',

        },
        {
            name: 'BNB',
            address: 'fygkrgtdsk',
            type: 'ERC20',

        }
    ]
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="lg:h-[600px] h-auto w-[80%] lg:w-[30%] py-3 px-3 mb-20 mt-16 drop-shadow-glow2 bg-black/65 rounded-3xl ml-auto mr-auto">
            <div className="w-[99%] rounded-2xl mt-3 bg-black/35 h-[98%] ml-auto mr-auto">
                <div className=" ml-auto mr-4 flex py-0.5 px-0.5 w-[98%] h-8">
                    <p className="w-[100px] cursor-pointer mt-5 h-8  text-center ml-4 mr-auto py-1 rounded-full">Select Token</p>
                    <p onClick={() => setIsTokenList(false)} className="w-[100px] cursor-pointer mt-5 h-8 bg-black/75 text-center ml-auto mr-1 py-1 rounded-full">close</p>
                </div>
                <div className=" ml-auto mr-auto w-[98%] mt-[40px] h-20">
                    <div className="h-[60%] mt-auto mb-auto bg-transparent w-[95%] ml-auto mr-auto">
                        <input onChange={(e) => setSearch(e.target.value)} className=" h-[100%] w-[100%] outline-none rounded-xl bg-black/35 py-3 px-3" type="text" placeholder="Search Token"/>
                    </div>
                </div>
                <div className="bg-black/75 py-2 px-2 overflow-y-auto  rounded-lg ml-auto mr-auto w-[95%] mt-1.5 h-[400px]">
                   { tokens && tokens.filter((chain) => {
                    return search.toLowerCase() == '' ?
                    chain : chain.name.toLowerCase().includes(search)
                   }).map((chain,i) => (
                   <>
                   <div key={i}>
                   <div onClick={() => {
                        setOutReceiverChain(chain.name);
                        setIsList(false);
                        alert('sender chain is',chain.name)
                     }} className="drop-shadow-glow2 bg-white/10 py-2 px-2 flex-col flex cursor-pointer mt-0.5 h-20 w-[100%] rounded-xl">
                         <div className="py-1 px-2 flex h-10"> 
                            <div className="ml-2 mr-auto">{chain.name}</div>
                            <div className="ml-auto mr-2">{`${chain.type}`}</div>
                         </div>
                         <div className="ml-2 py-1 px-2 h-10">
                            {'18'}
                         </div>
                     </div>
                   </div>
                   </>
                   ))}
                </div>
            </div>
        </div>
  
    </div>
    )
}