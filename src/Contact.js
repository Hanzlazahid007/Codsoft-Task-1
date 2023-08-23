import React, { useState } from 'react'
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";
import {SiGmail} from "react-icons/si"


const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [msg,setMsg] = useState('');
    const handleSubmit = (e)=>{
        e.prevend.default();
    }

  return (
    <>

      <h1 id='contact' className='about-heading '>Contact</h1>
    <section className='contacts'>
       <div className='contact-info'>
        <h3 className='contact-heading pa'>Lets start Working together</h3>
        <div className='contact-links pa'>
                <FaFacebook className='contact-link' />
                <FaLinkedin className='contact-link' />
                <FaInstagram className='contact-link' />
                <SiGmail className="contact-link" />

        </div>
       </div>
       <div className='form'>
       <h4 className='form-head'>Fill The Contact To me</h4>
        <form onSubmit={handleSubmit}>
            <p className='form-name'>Name</p>
            <input className='form-input' type='text' onChange={(e) =>setName(e.target.value)} value={name} />
            
            <p className='form-name'>Email</p>
            <input className='form-input' type='email' onChange={(e) =>setEmail(e.target.vaue)} value={email} />
            
            <p className='form-name'>Message</p>
            <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} rows='7' cols='25' ></textarea>
            {/* <input className='form-input' type='textarea' onChange={(e) =>setMsg(e.target.value)} value={msg} /> */}

            <hr className='row'></hr>
            <button className='submit' type='submit'>Submit</button>
        </form>
       </div>
    </section>
    </>
  )
}

export default Contact