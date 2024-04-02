import Link from "next/link"

const Navbar = () =>{
    return(

        <div className="relative flex items-center justify-between p-8 bg-yellow-50 ">
    
      
      <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center space-x-11 p-16">
      
      <div className="relative z-10 shrink-0 b">
        <a href="/" title="Feather" className="flex bg-white">
          <img
            alt="Logo"
            src=""
            className="block h-8 w-auto"
          ></img>
        </a>
      </div>
      
        <Link
          href=""
          className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
        >
          Features
        </Link>
        <Link
          href=""
          className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
        >
          Pricing
        </Link>
        <Link
          href=""
          className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
        >
          Tutorials
        </Link>
        <Link
          href=""
          className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
        >
          More
        </Link>

       
        

        <div className="relative z-10 flex items-center gap-x-3">
        <div className="hidden sm:block">
          <Link
            href=""
            className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-base font-semibold transition-all duration-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 btn-bg-2"
          >
            Sign in 
          </Link>
        </div>
      </div>
        <div className="relative z-10 flex items-center gap-x-3">
        <div className="hidden sm:block">
          <Link
            href=""
            className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-base font-semibold transition-all duration-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 btn-bg-2"
          >
            Sign up 
          </Link>
        </div>
      </div>

      <select id="fruitSelect" className=" bg-yellow-50">
            <option value="apple">EN</option>
            <option value="banana">TA</option>
            <option value="banana">HINDI</option>
            
        </select>
      </div>
      
    </div>
    )
}

export default Navbar