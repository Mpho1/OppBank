import styles from './index.module.scss'

import HomeSlider from '../components/HomeSlider'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const ClientItem = ({image, title, text}) => (
  <div>
    <div className={styles.imageContainer}>
      <img src={image} />
    </div>
    <h4>
      {title}
    </h4>
    <p>
      {text}
    </p>
  </div>
)

const IndexPage = () => (
  <div>
    <HomeSlider />

    <ContentsSection
      title="Why bank with opportunity"
      subtitle="We at Opportunity Bank strive to help improve the business and lives of our clients. Through continious growth will we be successful."
    >
      <ItemSwiper>
        <div className={styles.clientItem}>
          <ClientItem
            image={require('../img/education.svg')}
            title='Affordable education'
            text='Get school fee loans at competitive interest rates'
          />
        </div>
        <div className={styles.clientItem}>
          <ClientItem
            image={require('../img/business.svg')}
            title='Start up Business'
            text='Get a business loan at competitive interest rates'
          />
        </div>
        <div className={styles.clientItem}>
          <ClientItem
            image={require('../img/bank_accounts.svg')}
            title='Bank accounts'
            text='Choose from a selection of accounts and stay in control of your assets'
          />
        </div>
      </ItemSwiper>
    </ContentsSection>

    <ContentsSection
      bgImage={require('../img/city.png')}
      title="Our products"
      subtitle="We believe that there are many ways to assist our customers to allow financial ease.">
    </ContentsSection>

    <ContentsSection
      title="Opportunity News"
      subtitle="Giving you access to all the latest news within our company."
    >
    </ContentsSection>
  </div>
)

export default IndexPage
