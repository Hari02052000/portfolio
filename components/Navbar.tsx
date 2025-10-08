import Link from "next/link";
import { FaCode } from "react-icons/fa"

function Navbar() {
  const navLinks = [
    {
      id : '1',
      label : 'Home',
      url : ''
    },
    {
      id : '2',
      label : 'Skills',
      url : ''
    },
    {
      id : '3',
      label : 'Works',
      url : ''
    },
    {
      id : '4',
      label : 'About Me',
      url : ''
    },
    {
      id : '5',
      label : 'Contact',
      url : ''
    },
  ]
  return (
    <nav className="flex items-center justify-between h-full">
      {/* logo*/}
      <div className="mt-4 bg-white rounded-full p-6">
        <FaCode/>
      </div>
     {/* links */}
     <div className="hidden lg:flex gap-8 text-white font-semibold">
      {
        navLinks.map((link)=><Link key={link.id} href={link.url} className="hover:text-bg-btn cursor-pointer">{link.label}</Link>)
      }
     </div>
     {/* button */}
    <button className="px-10 py-4 w-[15%] text-white text-lg font-medium bg-bg-btn hover:bg-bg-btn-hover transition-all duration-300 ease-out rounded-2xl cursor-pointer hover:scale-105">Download CV</button>

    </nav>
  )
}

export default Navbar
