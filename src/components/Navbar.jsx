import React, { use, useEffect } from 'react'
import { useState } from 'react'
import {cn} from '../lib/utils'
import { Menu ,X  } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
      const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <nav className={cn(
        "fixed  w-full z-40 transition-all duration-300", 
        isScrolled ? "py-5" : "py-5 "
  )}>
    <div className={cn(
        "fixed top-0 w-full z-0 pt-10 transition-all duration-300", 
        isScrolled ? "py-8 bg-primary/5 backdrop-blur-sm" : "py-5 "
  )}></div>

    <div className='container flex items-center justify-between'>

         {/* Logo oder name */}
        <a  href="#hero" className='text-xl font-bold text-primary flex items-center'>
            <span className='relative z-10'>
                <span className='text-glow text-foreground'>Vicrutech</span> Portfolio
            </span>
        </a>

        {/* Navigation Links */}
        <div className='hidden z-50 md:flex space-x-8 inset-0'>
            {navItems.map((item,key) => (
                <a key={key} href={item.href} 
                className='text-foreground/80 hover:text-primary transition-colors duration-300'> 
                {item.name} 
                </a>
            ))}
        </div>

         {/* Theme Toggle */}
        <ThemeToggle></ThemeToggle>  

        {/* Navigation Links Mobile*/}

        <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='md:hidden pt-2 pr-0  text-foreground z-50'
            arial-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        > {isMenuOpen ? <X size ={24} /> : <Menu size={24} />}
        </button>

        <div className={
            cn("fixed inset-0 w-full bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",

            (isMenuOpen) 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
            )
            }>
            <div className='flex flex-col text-xl items-center justify-center space-y-6'>
                {navItems.map((item,key) => (
                    <a 
                    key={key} 
                    href={item.href} 
                    className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    onClick={() => setIsMenuOpen(false)}
                    >
                     {" "}   {item.name}
                     </a>
                ))}
            </div>
        </div>

    </div>
  </nav>
  )
}

export default Navbar