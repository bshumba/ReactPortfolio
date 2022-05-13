import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zyw3stc', 'template_nwg8zp2', form.current, 'user_2fErGQDwI1iNRZj6Bhn2v')
      .then((result) => {
          alert("Your email has been send successfully!");
      }, (error) => {
          alert("Something went wrong")
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touchh</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>EMail</h4>
            <h5>brianshumba9@gmail.com</h5>
            <a href="mailto:brianshumba9@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+263 77 660 6749</h5>
            <a href="https://api.whatsapp.com/send?phone=+263776606749" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>brianshumba</h5>
            <a href="https://m.me/brianstyles.shumba/" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message..." required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact