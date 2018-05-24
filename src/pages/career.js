import React from 'react'
import styles from './career.module.scss'

import ContentsSection from '../components/ContentsSection'
import SearchField from '../components/SearchField'

const CareerPage = () => (
  <div>
    <div className={styles.contentSection}>
      <ContentsSection
        bgImage={require('../img/search_header.png')}
        title="Providing Opportunity">
        <SearchField
          areaPlaceholder="Area"
          textPlaceholder="Clinic, Hospitals, Doctors"
        />
      </ContentsSection>
    </div>
  </div>
)

export default CareerPage
