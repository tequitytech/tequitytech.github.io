import React, { useEffect } from 'react';
import './Testimonials.css';
const Testimonials = () => {
  // Grab all blocks

  useEffect(() => {
    let testimonials = document.getElementsByClassName('testimonials__block');

    // Dynamically add class "active" to central testimonial on desktop
    var mq = window.matchMedia('(min-width: 48em)');
    if (mq.matches) {
      testimonials[1].classList.add('testimonials__block--active');
    } else {
      for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.add('testimonials__block--active');
      }
    }

    var toogleBlock = function () {
      var active = document.getElementsByClassName(
        'testimonials__block--active'
      );
      active[0].classList.remove('testimonials__block--active');
      this.classList.add('testimonials__block--active');
    };

    // Bind event listeners
    for (let i = 0; i < testimonials.length; i++) {
      testimonials[i].addEventListener('click', toogleBlock, false);
    }
  }, [document.getElementsByClassName('testimonials__block')]);

  return (
    <div id="testimonials" className="w-full py-[32px]">
      <p className="text-[24px] sm:text-[32px] font-[600] text-[#ffffff] text-center">
        We love building products, and we are really good at it. Seriously. Ask
        any of our clients
      </p>
      <section class="testimonials__section">
        <div class="testimonials__block">
          <p class="testimonials__message">
            <span class="testimonials__message--dotter">
              Fantastic job by the team! Not only did they build our product,
            </span>
            <span class="testimonials__message--hider">
              "Fantastic job by the team! Not only did they build our product,
              they educated us on how to build products, which was an incredible
              learning for us.
            </span>
          </p>
          <img
            class="testimonials__picture"
            src="http://exercisebliss.com/wp-content/themes/bliss-blank3/img/profile-square.jpg"
            alt="profile picture"
          />
          <p class="testimonials__name">Asif Junaid</p>
          <p class="testimonials__position">Founder, Commuvest (UAE)</p>
        </div>
        <div class="testimonials__block">
          <p class="testimonials__message">
            <span class="testimonials__message--dotter">
              "The team had experts in every field of technology interacting
            </span>
            <span class="testimonials__message--hider">
              "The team had experts in every field of technology interacting
              with us and has been doing a wonderful job in creating and
              deploying technology solutions."
            </span>
          </p>
          <img
            class="testimonials__picture"
            src="http://static1.squarespace.com/static/5102d016e4b0a0147cc59362/t/51f91ae3e4b0a2a178e430d2/1434046213777/Profile+Pic+Square.jpg"
            alt="profile picture"
          />
          <p class="testimonials__name">Saurabh Odhyan</p>
          <p class="testimonials__position">Head of Technology, Fresh2Home</p>
        </div>
        <div class="testimonials__block">
          <p class="testimonials__message">
            <span class="testimonials__message--dotter">
              "The team is super quick and responsive. Extremely professional
            </span>
            <span class="testimonials__message--hider">
              "The team is super quick and responsive. Extremely professional
              all throughout. We love the output we have received! Would
              strongly recommend them"
            </span>
          </p>
          <img
            class="testimonials__picture"
            src="https://media.creativemornings.com/uploads/user/avatar/222365/Square_Profile_250px.png"
            alt="profile picture"
          />
          <p class="testimonials__name">Wisnu Nugrahadi</p>
          <p class="testimonials__position">Industrial Production Manager</p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
