import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModel from '../components/ContactModel'
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast'
import { Element } from 'react-scroll'
const Contact = ({windowSize}) => {

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  //service_12s1q1s

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      await emailjs.send('service_0dwb8io' , 'template_66qig4f' , {
        from_name: form.name,
        to_name: "Janmejay",
        from_email: form.email,
        to_email: "JayRathore.1010@gmail.com",
        message: form.message
      } , 'N5Gigm8iUUbOrVpCe')

      toast.success("Email sent successfully")
    }catch(error){
      console.log(error)
      toast.error("Error occurred. Please try again later.")
    }
  }

  return (
    <Element id="CONTACT" name='CONTACT' className='w-full  bg-[var(--background)] pb-16'>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="    bg-gradient-to-br from-slate-300 to-slate-500 pt-16 pb-8  sm:py-16 bg-clip-text text-center text-4xl font-medium tracking-tight text-[var(--MyProjects)] md:text-6xl ">
        How about we connect ?
        <p className=' text-xl'> ( Don't be shy, maybe I won't bite )</p>
      </motion.h1>

      <section className='flex flex-col items-center  justify-center xl:flex-row  xl:h-[40rem] xl:justify-between  xl:ml-32   '>
      
      <div className=' w-[80%] sm:w-[70%]  md:w-[60%] order-2 xl:order-none h-[38rem] lg:w-[40%] xl:ml-10'>
      <form className='  flex h-full flex-col justify-center items-center gap-y-7   border-[3px] border-[var(--textBody)]  bg-gray-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10   ' onSubmit={handleSubmit}>


      <label className="space-y-3 flex flex-col">
              <span className=" text-sm sm:text-lg text-[var(--text)]">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className=" w-48 sm:w-96 bg-[var(--inputBg)] px-5 py-2 min-h-12  rounded-lg placeholder:text-[var(--MyProjects)] placeholder:opacity-50 text-sm sm:text-lg text-[var(--textBody)] shadow-black-200 shadow-2xl border-2 border-transparent placeholder:text-[11px] sm:placeholder:text-lg  focus:border-[var(--textBody)] focus:outline-none "
                placeholder="ex., Yuri Tarded"
              />
            </label>

            <label className="space-y-3 flex flex-col">
              <span className="text-sm sm:text-lg text-[var(--text)]">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className=" w-48 sm:w-96 bg-[var(--inputBg)] px-5 py-2 min-h-12  rounded-lg placeholder:text-[var(--MyProjects)] placeholder:opacity-50 text-sm sm:text-lg text-[var(--textBody)] shadow-black-200 shadow-2xl border-2 border-transparent placeholder:text-[11px] sm:placeholder:text-lg  focus:border-[var(--textBody)] focus:outline-none"
                placeholder="ex., YuriTarded@gmail.com"
              />
            </label>

            <label className="space-y-3 flex flex-col">
              <span className="text-sm sm:text-lg text-[var(--text)]">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className=" w-48 sm:w-96 bg-[var(--inputBg)] px-5 py-2 min-h-12  rounded-lg placeholder:text-[var(--MyProjects)] placeholder:opacity-50 text-sm sm:text-lg text-[var(--textBody)] shadow-black-200 shadow-2xl border-2 border-transparent placeholder:text-[11px] sm:placeholder:text-lg  focus:border-[var(--textBody)] focus:outline-none"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className=" w-48 sm:w-96 bg-[var(--msgBtn)] px-5 py-2 min-h-12  rounded-lg  text-sm sm:text-lg text-[var(--background)] font-medium shadow-black-200 shadow-2xl border-2 border-transparent  hover:bg-[var(--msgBtnHover)] transition-colors duration-300 ease-in-out " type="submit" >
              Send Message
            </button>
        </form>
      </div>
      <div className='order-first xl:order-none mb-8 sm:mb-16 h-48 w-48  sm:h-96 sm:w-96  xl:h-full border-2 border-red-500 xl:mb-0  xl:w-[60%]'><ContactModel windowSize={windowSize}/></div>

      </section>
      </Element>
  )
}

export default Contact