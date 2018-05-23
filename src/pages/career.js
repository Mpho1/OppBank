import React from 'react'
import styles from './career.module.scss'

import ContentsSection from '../components/ContentsSection'
import TextField from '../components/TextField'

const CareerPage = () => (
  <div>
    <div className={styles.contentSection}>
      <ContentsSection
        bgImage={require('../img/search_header.png')}
        title="Providing Opportunity">
        <div className={styles.textField}>
          <TextField
            mapPlaceholder="Area"
            searchPlaceholder="Clinics, Hospitals, Doctors etc"
          />
        </div>
      </ContentsSection>
    </div>
  </div>
)

export default CareerPage
