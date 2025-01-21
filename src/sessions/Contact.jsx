import React from 'react'
import ContactForm from "../components/ContactForm";
import contact_img from "../assets/contact_img.png";

const Contact = () => {
  return (
    <section className="flex flex-col justify-evenly h-screen">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-serif text-rose-400 pb-4">Join With Us</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.</p>
      </div>
      <div className="flex justify-center space-x-20">
        <img src={contact_img} alt="contact img" className="w-96 h-60 rounded-lg"/>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact
