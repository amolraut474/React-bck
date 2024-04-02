import React from 'react'
import '../Newsletter-form/Newsletter.css';
export default function Newsletter() {
  return (
    <main class="container-sction">
      <div class="newsletter">


        <div class="txt-holder">
          <p class="txt-primary">Subscribe to our Newsletter</p>
          <p class="txt-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
            perferendis optio eius, autem voluptate blanditiis exercitationem at nulla unde quod nostrum ea
            eaque illum sed odio ullam quasi deleniti?</p>
        </div>
        <form action="#">
          <input type="email" name="email" id="email" placeholder="Your Email" class="form-control" />
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>

      <div className='footer-last'>
      <div className='footer-bottom-se'>
          <p class="copy text-center">COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY <span class="e-f">AMOL</span>
          
          </p>
          <span><button class="btn" type="submit">Back to Top</button></span>
          
        </div>
    </div>
    </main>
    

  )
}
