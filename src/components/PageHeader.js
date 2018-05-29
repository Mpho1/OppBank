import React from 'react'
import ContentsSection from './ContentsSection'
import styles from './pageHeader.module.scss'

const PageHeader = ({title, children}) => (
  <ContentsSection
    bgImage={require('../img/search_header.png')}
    title={title}
    customClass={styles.pageHeader}
  >
    {children}
  </ContentsSection>
)

export default PageHeader
