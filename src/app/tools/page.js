import { BridgeIn } from "@/components/BridgeIn";
import { BridgeOut } from "@/components/BridgeOut";
import { Home2 } from "@/components/Home";
import { Navbar } from "@/components/Navbar";

export default function Tools () {
    const bridger = true
    return(
    <div className="flex min-h-screen flex-col items-center ">
          <Navbar />
          <div className="mt-28 w-[100%]">
            Tools
          {
            bridger ?
            <BridgeIn /> : <BridgeOut />
          }
          </div>
          
          
    </div>
    )
}