
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Subscribe } from "./components/Subscribe"
import { Secret } from "./components/secret"

export const Home2 = () => {
    return(
    <div className="w-[100%]">
        <div className="relative mt-[290px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <Hero/>
        <Secret />
       
    </div>
    )
}