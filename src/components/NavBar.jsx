import React from 'react';
import HeaderLogo from '../assets/HeaderLogo.png';
import {NavLinks} from '../constants/index';

const NavBar = () => {
  return (
    <header className="px-4 py-6 z-10 fixed w-full bg-white">
        <nav className="flex justify-between items-center max-container">
            <a href="#"><img src={HeaderLogo} alt="nouha" width={140} height={20}/></a>
            <ul className="flex gap-8 justify-center items-center max-lg:hidden">
                {
                    NavLinks.map((item) => (
                        <li key={item.label} className="hover:border-b hover:border-rose-300 hover:text-rose-300 pb-1">
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    )) }
                <li>
                  <button className="h-10 w-28 flex justify-center gap-4 items-center border-solid border-2 border-rose-300 rounded-lg font-sans text-rose-300 hover:text-white hover:bg-rose-300">
                     Log in
                  </button>
                </li>
            </ul>
            <div className="hidden max-lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>


            
        </nav> 
    </header>
  )
}

export default NavBar
