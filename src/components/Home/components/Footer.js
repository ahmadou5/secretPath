export const Footer = () => {
    const link = [
        {name: 'github', url: './discord.svg'},
        {name: 'github', url: './tiktok.svg'},
        {name: 'github', url: './twitter.svg'}
      ]
      const Socials = [
      
        { name: "X", icon: "./twitter.svg" },
        { name: "Telegram", icon: "./tg.svg" },
        { name: "Discord", icon: "./discord.svg" },
       
      ];
      const products = [
        { name: "Bridge" },
        { name: "Tools" },
        { name: "Exchange" },
      ];
    
      const others = [
        { name: "Careers" },
        { name: "Blog" },
        { name: "Contact-Us" },
       
      ];
    return (
        <div>
        <div className="w-[100%] ml-auto mr-auto "> 
        <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        </div>
        <div className="w-full py-7 bg-transparent px-7 ml-auto mr-auto h-68 lg:ml-14 lg:mr-16 flex items-center">
          <div
            className="w-[90%] h-64 ml-5 "
            
          >
            <div className="font-semibold mb-4 text-blue-500">Socials</div>
            {Socials.map((social, index) => (
              <div key={index}>{social.name}</div>
            ))}
          </div>
          <div
            className="w-[90%] h-64  "
            
          >
            <div className="font-semibold mb-4 text-blue-500">Products</div>
            {products.map((product, index) => (
              <div key={index}>{product.name}</div>
            ))}
          </div>
          
          <div
            className="w-[90%] h-64 mr-2 "
           
          >
            <div className="font-semibold mb-4 text-blue-500">Secret</div>
            {others.map((product, index) => (
              <div key={index}>{product.name}</div>
            ))}
          </div>
        </div>
        <div className="mb-[100px] lg:mb-3 ml-6 flex flex-row font-semibold">
          <p className="w-[45%] ">
            © {new Date().getFullYear()} SecretPath
          </p>
          <div  className="w-[15%] ml-auto mr-16 flex flex-row">
          {link.map((links, i) => (
            <img key={i}  className="w-6 h-6 ml-1 mr-1" src={`./${links.url}`} />
          ))
          }
          </div>
          
        </div> 
      </div>
    )
}