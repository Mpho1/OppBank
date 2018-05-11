import React from 'react'

import Logo from './Logo'

import styles from './Footer.module.scss'

function getDateYear() {
  const date = new Date();
  return date.getFullYear();
}

const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.footerLayout}>
      <div className={styles.footerContact}>
        <div>
          <h4>
            <img src={require('../img/headoffice_green.svg')} />
            Head office
          </h4>
          <p>
            Plot 1259 Old Kiira road <br></br>
            (Acacia Avenue) <br></br>
            P.O. Box 33513, Kampala
          </p>
        </div>
        <div>
          <h4>
            <img src={require('../img/contact_green.svg')} />
            Contact
          </h4>
          <p>
            0414 236 724 / 342 726
          </p>
        </div>
        <div>
          <h4>
            <img src={require('../img/email_green.svg')} />
            Email
          </h4>
          <p>
            info@opportunity.co.ug
          </p>
        </div>
        <div>
          <h4>Find us on social media</h4>
          <p>
            <img src={require('../img/facebook.svg')} className={styles.socialIcon} />
            <img src={require('../img/twitter.svg')} className={styles.socialIcon} />
            <img src={require('../img/whatsapp.svg')} className={styles.socialIcon} />
          </p>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinkCol}>
          <h6>PRODUCTS</h6>
          <ul>
            <li>Savings accounts</li>
            <li>Loans</li>
            <li>Mobile Banking</li>
            <li>Other services</li>
          </ul>
        </div>
        <div className={styles.footerLinkCol}>
          <h6>CONTACT US</h6>
          <ul>
            <li>Contact us</li>
            <li>Find us</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className={styles.footerLinkCol}>
          <h6>CAREERS</h6>
        </div>
        <div className={styles.footerLinkCol}>
          <h6>LEGAL</h6>
          <ul>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLogo}>
        <Logo />
        <p className={styles.copyRight}>
          { `Copyright © ${getDateYear()} OPPORTUNITY BANK UGANDA`}
        </p>
      </div>
    </div>
  </div>
)

export default Footer
