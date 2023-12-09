 
import headerlogo from "../assets/images/header-logo.svg"; 
import hamburger from "../assets/icons/hamburger.svg"; 
import { navLinks } from "../constants";
function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full border-2">
        <nav className="flex justify-center max-lg:justify-between  items-center max-container border-2">
            <a  href="/">
                <img  src={headerlogo}
                alt="logo" width={130} height={29}/>
            </a>
             <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
                 {navLinks.map((link)=> 
                 <>
                 <li><a className="font-montserrat leading-normal text-lg text-slate-gray" href={link.href}> {link.label}</a></li> 
                 </>)}
             </ul>
              <div className="hidden max-lg:block">
                <img src={hamburger}
                alt="hamburger"
                width={25}
                height={25}
                />
              </div>
        </nav>
    </header>
  )
}

export default Navbar