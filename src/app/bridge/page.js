'use client'
import { BridgeIn } from "@/components/BridgeIn";
import { BridgeOut } from "@/components/BridgeOut";
import { Home2 } from "@/components/Home";
import { Navbar } from "@/components/Navbar";
import { GlobalContext } from "@/context/context";

export default function bridge () {
  const {isBridgeIn, setIsBridgeIn} = GlobalContext()
    const bridger = true
    return(
    <div className="flex min-h-screen text-white/65 flex-col items-center ">
          <Navbar />
          <div className="mt-28 w-[100%]">
          {
            isBridgeIn ?
            <BridgeIn /> : <BridgeOut />
          }
          </div>
          
          
    </div>
    )
}