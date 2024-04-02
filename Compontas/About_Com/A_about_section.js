import React from 'react'
import './Img_text.css';
export default function Aboutsection() {
  return (
    <div className='image_with_text_section'>
    <div className='image-with-text-row'>
      <div className='image-with-text-col-1'>
          <div>
          <div class="about-image fl-wrap">
            <img src='https://trion.kwst.net/dark/images/about.jpg' alt='name'/>
            <div class="ab_cirle-dec" ></div>
            </div>
          </div>
      </div>
      <div className='image-with-text-col-2'>
     
      <div class="txt-holder">
          <p class="txt-primary">Welcome To My Studio</p>
          <p class="txt-secondary">The first line of Lorem Ipsum,   comes from a line in section. </p>
          <p class="txt-secondary port-last-text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedIt uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc anything . There are many variations of passages of Lorem Ipsum available therefore always. </p>
          <div class="line-dec fl-wrap"></div>
          <button class="btn" type="submit">View Project</button>
          <div class="pattern-bg right-pos"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
