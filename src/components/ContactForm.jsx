import React from 'react'

const ContactForm = () => {
  return (
      <form action="" className="flex flex-col justify-evenly">
        <input type="text" placeholder='Email' className="bg-rose-100 w-80 h-9 text-black pl-4" />
        <input type="text" placeholder='Password' className="bg-rose-100 w-80 h-9 text-black pl-4" />
        <button className="w-40 h-10 rounded-lg bg-rose-300 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Sign Up</button>
      </form>
  )
}

export default ContactForm
