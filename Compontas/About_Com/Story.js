import React from 'react';
import { Link } from 'react-router-dom';
import './Story.css';
export default function Story() {
    return (
        <div className='Story-section'>
        <div className='contact-form-section'>
            <div class="sec-dec"></div>
            {/* <div class="pattern-bg right-pos"></div> */}
            <div className="contact-container">
                <h2 className='form-heading'>MY <span>AWESOME STORY</span></h2>
                <p class="txt-secondary">Internet tend to repeat predefined chunks look even slightly believable If you are going to use a passage of Lorem Ipsum.</p>

            </div>

            <div className='Story-container'>
                <div className='Story-row'>
                    <div className='story-part-1'>
                        <div class="Custom_Card"><div><h2 class="card-icon-c"><i class="bi bi-backpack2-fill"></i></h2></div><div class="card-title-box"><h2 class="card-title">Passage of Lorem Ipsum</h2><p class="card-desciption">2012-2017</p></div></div>
                    </div>
                    <div className='story-part-2'>
                    <div className='Custom_Card-story-part-2'>
                    <div className='story-part-2-div'>
                    <h4>Passage of Lorem Ipsum</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    <Link class="cus-inner-head-link color-bg">Details + </Link>
                    </div>
                    </div>
                        
                    </div>
                </div>
                <div className='Story-row'>
                    <div className='story-part-1'>
                        <div class="Custom_Card"><div><h2 class="card-icon-c"><i class="bi bi-backpack4"></i></h2></div><div class="card-title-box"><h2 class="card-title">Passage of Lorem Ipsum</h2><p class="card-desciption">2012-2017</p></div></div>
                    </div>
                    <div className='story-part-2'>
                    <div className='Custom_Card-story-part-2'>
                    <div className='story-part-2-div'>
                    <h4>Passage of Lorem Ipsum</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    <Link class="cus-inner-head-link color-bg">Details + </Link>
                    </div>
                    </div>
                        
                    </div>
                </div>
                <div className='Story-row'>
                    <div className='story-part-1'>
                        <div class="Custom_Card"><div><h2 class="card-icon-c"><i class="bi bi-award"></i></h2></div><div class="card-title-box"><h2 class="card-title">Passage of Lorem Ipsum</h2><p class="card-desciption">2012-2017</p></div></div>
                    </div>
                    <div className='story-part-2'>
                    <div className='Custom_Card-story-part-2'>
                    <div className='story-part-2-div'>
                    <h4>Passage of Lorem Ipsum</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    <Link class="cus-inner-head-link color-bg">Details + </Link>
                    </div>
                    </div>
                        
                    </div>
                </div>
                <div className='download-button'>
                <Link class="cus-inner-head-link color-bg">Download Brochure </Link>
                </div>
            </div>
        </div>
        </div>
    )
}
