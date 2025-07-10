import React from 'react'
import logo from '../assets/logo.png'
import '../App.css'

const Navbar = () => {

  return (


    <nav className={`list-none flex items-center justify-between font-bold mb-5 h-12 w-full sticky top-0 bg-background md:text-lg text-xs`}>
      <a className='flex flex-row items-center gap-3'><img src={logo} alt='Logo' className='w-7 h-7 rounded-full' />Aayush Laddha</a>
      <a className='navLi' href='#'>Home</a>
      <a className='navLi' href='#language'>Languages</a>
      <a className='navLi' href='#certificate'>Certificate</a>
      <a className='navLi' href='#project'>Projects</a>
      <a className='navLi' href='#contact'>Contact</a>
      <label className="relative inline-flex items-center w-14 h-8 cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    onChange={() => document.documentElement.classList.toggle("dark")}
  />

  <div className="w-full h-full rounded-full bg-gray-300 peer-checked:bg-gray-700 transition-colors duration-300" />

  {/* Light (sun) */}
  <span className="absolute left-1 top-1 text-xl transition-transform duration-300 peer-checked:translate-x-6 peer-checked:opacity-0">
    <img src="https://img.icons8.com/?size=100&id=8EUmYhfLPTCF&format=png&color=000000" width={23} className='rounded-full'/>
  </span>

  {/* Dark (moon) */}
  <span className="absolute left-1 top-1 text-xl transition-transform duration-300 opacity-0 peer-checked:translate-x-6 peer-checked:opacity-100">
    <img src="https://img.icons8.com/?size=100&id=62034&format=png&color=000000" alt="dark-mode" width={25}/>
  </span>
</label>

    </nav>
  )
}

export default Navbar
