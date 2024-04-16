import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <section className="footer">
        <hr className="footer-separator" />
        <section className="footer-social-media">
          <a href="">Instagram</a>
          <br />
          <a href="">TikTok</a>
        </section>
        <section className="footer-info">
          <section className="footer-info-left">
            <section className="footer-info__name">
              Anis don demina
            </section>
            <section className="footer-info__returns">
              Returns Policy
              <br />
              Delivery
            </section>
          </section>
          <section className="footer-info-center">
            <section className="footer-info__email">
                support@valydwear.se
            </section>
            <section className="footer-info__terms">
                Terms & Conditions
                <br />
                Copyright
                </section>         
          </section>
          <section className="footer-info-right">
            <section className="footer-info__number">
                010 555 88 16
            </section>
            <section className="footer-info__contact">
                Our Story
                <br />
                Contact Us
            </section>
          </section>
        </section>
        <hr className="footer-separator" />
      </section>
    )
  }
  
  export default Footer
  