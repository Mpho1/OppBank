import React from 'react'
import Logo from './Logo'
import Link from 'gatsby-link'

import styles from './Footer.module.scss'

function getDateYear () {
  const date = new Date()
  return date.getFullYear()
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
            customerservice@opportunitybank.co.ug
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
          <Link to={'/products'}>
            <h6>PRODUCTS</h6>
          </Link>
          <ul>
            <Link to={'/savings'}>
              <li>Savings accounts</li>
            </Link>
            <Link to={'/loans'}>
              <li>Loans</li>
            </Link>
            <Link to={'/mobile-banking'}>
              <li>Mobile Banking</li>
            </Link>
            <Link to={'/value-added-services'}>
              <li>Value Added Services</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerLinkCol}>
          <Link to={'/contact-us'}>
            <h6>CONTACT US</h6>
          </Link>
          <ul>
            <Link to={'/contact-us'}>
              <li>Contact us</li>
            </Link>
            <Link to={'/find-us'}>
              <li>Find us</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerLinkCol}>
          <Link to={'/careers'}>
            <h6>CAREERS</h6>
          </Link>

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
