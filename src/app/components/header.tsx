import Link from "next/link"
import Button from "./Button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
  return (

    <header className="text-[#f2f2f2] font-mono fixed z-50 w-full ">
      {/* parent */}
      <div className="flex justify-around lg:gap-0 lg:justify-around bg-slate-800 items-center gap-20 sm:gap-0">
        {/* child 01 logo */}
        <div className="">
          <h2 className="text-4xl text-yellow-300">RIAZ</h2>
        </div>

        {/* child02 navabr */}
        <nav className="hidden sm:hidden lg:block max-w-screen-xl">
         
            <ul className="flex gap-44 text-2xl items-center ">
              <li className="hover:underline hover:text-blue-200 "><Link href={"/"}>Home</Link></li>
              <li className="hover:underline hover:text-blue-200 "><Link href={"/about"}>About</Link></li>
              <li className="hover:underline hover:text-blue-200 "><Link href={"/contact"}>Contact</Link></li>
              <Link href={"https://www.linkdin.com/in/riaz-ahmed-zaur-a668832b6?utm_source=share&utm-campaign=share_via&utm_content=profile&utm_medium=android_app"}><Button text='Hire me' className="text-black"/></Link>
            </ul>

      </nav>

      <Sheet>
  <SheetTrigger className="lg:hidden md:hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></SheetTrigger>
  <SheetContent >
    <SheetHeader >
    <nav>
         <ul className="text-left flex flex-col justify-around h-80">
           <li className="hover:underline hover:text-blue-200 "><Link href={"/"}>Home</Link></li>
           <li className="hover:underline hover:text-blue-200 "><Link href={"/about"}>About</Link></li>
           <li className="hover:underline hover:text-blue-200 "><Link href={"/contact"}>Contact</Link></li>
           <Link className="hidden" href={"https://www.linkdin.com/in/riaz-ahmed-zaur-a668832b6?utm_source=share&utm-campaign=share_via&utm_content=profile&utm_medium=android_app"}><Button text='Hire me' className="text-black"/></Link>
         </ul>

   </nav>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>

 

    </header>
  )
}

export default Header