'use client'
import { navbarData, copyRightIcon,  } from "../assets"


export const Navbar = ({id}) => {
        
  return (
    <div className="w-20 h-full fixed left-0 xl:py-6 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-25">
        <a href="/#home">
            <span className=" text-3xl font-semibold text-red-400">N</span>
            .<span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white transition-colors">Brown</span>
        </a>
        <div className="flex flex-col gap-y-3 max-sm:gap-y-2">
            {navbarData.map((item, i) => (
            <a key={i} href={`/#${item.id}`} className="group flex flex-col items-center gap-y-2">
                <span className={`text-2xl group-hover:scale-125 transition-all ${
                    item.id === id ? "text-red-500 scale-110" : "text-yellow-600 scale-100"
                }`}>{item.icon}</span> 
                <span className="text-[10px] tracking-wide -translate-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white transition-colors">{item.name}</span>

            </a>
            ))}
        </div>
        <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6 dark:tewh">
            <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-white transition-colors">{copyRightIcon} 2019 - {new Date().getFullYear()}</span>
        </p>
    </div>
  )
}
export default Navbar