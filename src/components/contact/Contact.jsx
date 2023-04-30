import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // validationform(formvalue);
    setMessage(true);
    emailjs
      .sendForm(
        'service_8ll93ii',
        'template_go0jz2s',
        formRef.current,
        'kzivRay5IPvy4cyFq'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  // const validationform=(value)=>{
  //   const errors={};
  //   const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(!emailPattern.test(value.email)){
  //     errors.email="Enter Valid Email";
  //   }
  //   return errors;
  // }
  ;
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        Drop me a message. I will get back to you.
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sowjanyakulal2293@gmail.com</h5>
            <a href="mailto:sowjanyakulal2293@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkdIn</h4>
            <h5>sowjanya kumari</h5>
            <a href="https://www.linkedin.com/in/sowjanya-kulal-741911223/">Send a Connection</a>
          </article>
        </div>
        <form className="contactform"ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            // value="formvalue"
            required
          />
          <textarea
            placeholder="Your message"
            rows="6"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
