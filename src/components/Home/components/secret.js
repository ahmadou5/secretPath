'use client'
import TypewriterComponent from "typewriter-effect"
import { Scroller } from "./Scroller"
import { Subscribe } from "./Subscribe";
import { Footer } from "./Footer";
export const Secret = () => {

    const images = [
        "https://faucet.pulsar.scrttestnet.com/_nuxt/img/secret-logo.ca02fc2.png",
        "https://sepolia.etherscan.io/images/svg/brands/ethereum-original.svg",
        "https://beta-2w11.vercel.app/matic.svg",
        "https://beta-2w11.vercel.app/op.svg",
        "https://beta-2w11.vercel.app/base.svg",
        "https://beta-2w11.vercel.app/bnb.svg",
        "https://beta-2w11.vercel.app/base.svg",
        
       ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));
    return(
    <div className="w-[100%] h-[180px] mt-[202px] bg-transparent">
        <div className="w-[76%] ml-auto flex mr-auto">
            <div className=" group">
                <div className=" -inset-1.5  rounded-2xl  opacity-75 group-hover:opacity-100 transition duration-1000">
                    <div className="relative px-1 h-[140px] w-[140px] py-11 bg-transparent rounded full leading-none flex items-center ">
                       <img className="w-[120px] h-[120px]" src="https://faucet.pulsar.scrttestnet.com/_nuxt/img/secret-logo.ca02fc2.png" alt="img" />
                    </div>
                </div>
            </div>
            <p className=" ml-auto mt-[170px] mb-8 text-4xl lg:text-7xl font-extrabold lg:mt-7">Native Secret Network Bridge</p>
        </div>
        <div className="mt-[230px]  h-[400px] py-1 px-1 w-[100%] ">
            <div className="w-[300px] h-[300px] bg-transparent/40  drop-shadow-glow2 mt-2 rounded-full ml-auto mr-auto">
             
            </div>
          
        </div>
        <p className="  mt-[0px] mb-[190px] text-4xl text-center lg:text-5xl font-extrabold ml-auto mr-auto lg:mt-7">Buidl for HackSecret Africa Hackerthon</p>
        <div className="mt-[60px] mb-[230px] py-6 px-6   h-[120px] w-[80%] ml-auto mr-auto ">
        <p className=" ml-auto mt-[320px] mb-[190px] text-2xl text-center lg:text-5xl font-extrabold lg:mt-7">Supported Networks</p>
           <Scroller images={images} speed={12000} />
        </div>
        <div className="mt-[170px] mb-28">
            <Subscribe />
        </div>
        <Footer />
    </div>
    )
}