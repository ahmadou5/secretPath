'use client'
import TypewriterComponent from "typewriter-effect"
import { Secret } from "./secret"
import Link from "next/link"
export const Hero = () => {
    return(
    <div className="w-[50%] ml-auto h-auto  mb-4 mr-auto">
        <div>
            <div className="lg:text-7xl text-4xl mb-6 font-bold w-[100%]"><p>Explore the <span className="text-white/40"><TypewriterComponent
                  className="font-extrabold text-blue-500"
                  options={{
                    strings: ['Secret','Secure'],
                    autoStart: true,
                    loop: true,
                  }}></TypewriterComponent></span> Path.</p>
            </div>
            <div className="lg:text-4xl text-xl mb-9 mt-4 w-[100%]">
                <p>Send Tokens From Secret Network to </p>
                <p>EVM Chains and Vice Versa.</p>
            </div>
            
            <div className=" w-[100%] flex mt-[180px] ml-auto mr-auto">
                <Link className="w-[370px] text-xl ml-auto mr-auto bg-blue-600/50 h-12 drop-shadow-glow  rounded-3xl" href={'/bridge'}>
                <button className="w-[370px] text-xl ml-auto mr-auto bg-transparent h-12 drop-shadow-glow  rounded-3xl">Launch Bridge</button>
                </Link>
            </div>
        </div>
        
        
    </div>
    )
}