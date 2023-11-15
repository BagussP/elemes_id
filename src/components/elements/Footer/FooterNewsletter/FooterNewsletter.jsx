import Image from 'next/image';
import React from 'react'

const FooterNewsletter = () => {
  return (
    <div className="footer__newsletter">
      <h1 className="footer__newsletter-title">Newsletter</h1>
      <div className="footer__newsletter-content">
        <p className="footer__newsletter-text">
          Get now free 50% discount for alll products on your first order
        </p>
        <div className="footer__input-container">
          <input
            className="footer__newsletter-input"
            placeholder="Your email address"
            type="email"
          />
          <button className="footer__newsletter-button">SEND</button>
        </div>
        <div className="footer__newsletter-contact">
          <Image src={"/images/mail.png"} width={20} height={20} alt="mail" />
          <p>elemesid@gmail.com</p>
        </div>
        <div className="footer__newsletter-contact">
          <Image
            src={"/images/telephone.png"}
            width={20}
            height={20}
            alt="telephone"
          />
          <p>0888 1111 2222</p>
        </div>
      </div>
    </div>
  );
}

export default FooterNewsletter