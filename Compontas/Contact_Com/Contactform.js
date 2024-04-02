import React, { useState } from 'react';
import './Contact.css';
const Contactform = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      // You can add your form submission logic here
      console.log('Form submitted:', formData);
      // Reset form fields after submission
      setFormData({
         name: '',
         email: '',
         message: ''
      });
   };
   return (
      <div className='contact-form-section'>
         <div class="sec-dec"></div>
         <div class="pattern-bg right-pos"></div>
      <div className="contact-container">
      <h2 className='form-heading'>Get in Touch <span> With My Studio</span></h2>
         <p class="txt-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora vel perferendis optio eius, autem voluptate blanditiis exercitationem at nulla unde quod nostrum ea eaque illum.</p>
         <form className="contact-form" onSubmit={handleSubmit}>


            <div className='contact-form-fild'><span><i class="bi bi-person-plus-fill"></i></span><input
               type="text"
               id="name"
               name="name"
               placeholder="Name"
               value={formData.name}
               onChange={handleChange}
            />

            </div>
            <div className='contact-form-fild'>
            <span><i class="bi bi-envelope-fill"></i></span>
            <input
               type="email"
               id="email"
               name="email"
               placeholder=" Email"
               value={formData.email}
               onChange={handleChange}
            />
            </div>
            <div className='contact-form-fild'>
            <textarea
               id="message"
               name="message"
               rows="4"
               placeholder="message"
               value={formData.message}
               onChange={handleChange}
            />
            </div>
            <button type="submit">Send Message </button>
         </form>
      </div>
      </div>
   );
};
export default Contactform;