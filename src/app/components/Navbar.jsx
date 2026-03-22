'use client'
import { navbarData, copyRightIcon,  } from "../assets"
import { useState,useRef,useEffect } from "react"
import { arrowIcons } from "../assets"


export const Navbar = ({id}) => {
    const [open, setOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const timeoutRef = useRef(null)
    useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 640)
  check()

  window.addEventListener("resize", check)
  return () => window.removeEventListener("resize", check)
}, [])
    useEffect(() => {
    const isMobile = window.innerWidth < 640

    if (isMobile && open) {
        const timeout = setTimeout(() => {
        setOpen(false)
        }, 3000)

        return () => clearTimeout(timeout)
    }
    }, [open])
    
  return (
    <>
    <div className={`w-20 h-full fixed top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-25 transition-all duration-300
  ${open ? "left-0" : "-left-20"}
 bg-white dark:bg-black sm:bg-transparent sm:dark:bg-transparent
  sm:left-0
`}>
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
            <span className="absolute left-1/2 w-max max-sm:bottom-0 sm:bottom-0 flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-white transition-colors">{copyRightIcon} 2019 - {new Date().getFullYear()}</span>
        </p>
    </div>

{isMobile && (
  <button
    onClick={() => setOpen(!open)}
    className={`fixed top-1/2 -translate-y-1/2 z-30 bg-yellow-600 text-white px-2 py-1 rounded-r-md transition-all
      ${open ? "left-20" : "left-0"}
    `}
  >
    {open ? arrowIcons[0] : arrowIcons[1]}
  </button>
)}
    </>
  )
}
export default Navbar