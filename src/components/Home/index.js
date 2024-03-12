
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Subscribe } from "./components/Subscribe"
import { Secret } from "./components/secret"

export const Home2 = () => {
    return(
    <div className="w-[98%] ml-auto mr-auto">
        <div className="relative mt-[290px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#0141ff] after:via-[#0146ff] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <Hero/>
        <Secret />
       
    </div>
    )
}