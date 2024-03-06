'use client'
import { IoMdArrowDropdown } from "react-icons/io";
import { GlobalContext } from "@/context/context";
import { useAccount, useBalance } from "wagmi";
import useGetTokenData from "../hooks/useTokenBalance";

export const Tokenselect = () => {
    const {setBridgeAmount, setIsTokenList,tokenName, setTokenBalance , address, tokenAddress,  tokenBalance , tokenType , balanceSCRT} = GlobalContext();
    const { newBalance } = useGetTokenData()
    const { formatted:balance } = useBalance({
        address: address,
        token: tokenAddress,
    })
   
    return(
    <div className="w-[100%] h-[100%] py-3 px-3 bg-black/70 rounded-2xl">
        <div className="flex flex-col w-full text-center ml-auto mr-auto">
            <div className="w-[98%] ml-auto mr-auto h-6 mt-1 mb-1  ">
                <p className="font-extrabold  ml-4 text-xl text-start">Token</p>
            </div>
            <div className="w-[98%] flex ml-auto mr-auto h-12 py-3 px-3 mt-1 mb-1">
                <div onClick={() => setIsTokenList(true)} className="ml-0  bg-white/5 flex rounded-full h-7 py-0.5 px-0.5 w-[150px] mr-auto">
                  <div className="ml-2 mr-auto">{tokenName}</div>
                  <IoMdArrowDropdown className="ml-auto mr-4 mt-1.5" />
                </div>
                <input onChange={(e) => setBridgeAmount(e.target.value) } type="text" placeholder="Enter Amount to Bridge"  className="h-7 outline-none mb-0.5 w-[60%] bg-transparent " />
            </div>
            <div className="w-[98%] mt-1 flex  ml-auto mr-auto h-6 mb-1 ">
                <div className="ml-4 mr-7 font-extrabold text-xl">Balance :</div>
                <div className="mr-5 text-xl">{`${balance} ${tokenName} ($US ${6})`}</div>
            </div>
        </div>
    </div>
    )
}