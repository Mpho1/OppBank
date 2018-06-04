import React from 'react'
import ContentsSection from './ContentsSection'
import styles from './PageHeader.module.scss'

const PageHeader = ({title, subtitle, children}) => (
  <ContentsSection
    bgImage={require('../img/search_header.png')}
    title={title}
    subtitle={subtitle}
    customClass={styles.pageHeader}
  >
    {children}
  </ContentsSection>
)

export default PageHeader
