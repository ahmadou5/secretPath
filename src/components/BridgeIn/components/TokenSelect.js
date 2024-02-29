import { GlobalContext } from "@/context/context";
import { IoMdArrowDropdown } from "react-icons/io";
export const Tokenselect = () => {
    const { bridgeAmount,setIsTokenList ,setBridgeAmount, balanceSCRT} = GlobalContext()
    return(
    <div className="w-[100%] h-[100%] py-3 px-3 bg-black/70 rounded-2xl">
        <div className="flex flex-col w-full text-center ml-auto mr-auto">
            <div className="w-[98%] ml-auto mr-auto h-6 mt-1 mb-1  ">
                <p className="font-extrabold  ml-4 text-xl text-start">Token</p>
            </div>
            <div className="w-[98%] flex ml-auto mr-auto h-12 py-3 px-3 mt-1 mb-1">
                <div  onClick={() => setIsTokenList(true)} className="ml-0  bg-white/5 flex cursor-pointer rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                  <div className="ml-2 mr-auto">SCRT</div>
                  <IoMdArrowDropdown className="ml-auto mr-4 mt-1.5" />
                </div>
                <input onChange={(e) => setBridgeAmount(e.target.value)} type="text" placeholder="Enter Amount to Bridge"  className="h-7 outline-none mb-0.5 w-[60%] bg-transparent " />
            </div>
            <div className="w-[98%] mt-1 flex  ml-auto mr-auto h-6 mb-1 ">
                <div className="ml-4 mr-7 font-extrabold text-xl">Balance :</div>
                <div className="mr-5 text-xl">{`${balanceSCRT} SCRT ($US ${6})`}</div>
            </div>
        </div>
    </div>
    )
}