import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.sass"

const Contact = () => {
    let [successState, changeSuccessState] = useState("")
    let [errorState, changeErrorState] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ocr1n7e', 'template_h3bkbn5', form.current, 'xijPFAZ_5hI7hMlKZ')
        .then((result) => {
            changeSuccessState("Email sent!")
        }, (error) => {
            changeErrorState("Something went wrong. Try in a few minutes.")
        });
    };

    return(
        <section className="contact" id="contact">
            <div className="contact-container">
                <h1>Get in touch with me!</h1>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <label>Name:</label>
                    <input type="text" name="user_name" placeholder='Your Name'/>
                    <label>Email:</label>
                    <input type="email" name="user_email" placeholder='Your Email'/>
                    <label>Message:</label>
                    <textarea name="message"/>
                    <input type="submit" value="Send" className='submit-button'/>
                </form>
                <h2>{successState}</h2>
                <h2>{errorState}</h2>
            </div>
        </section>
    )
}

export default Contact;