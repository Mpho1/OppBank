import React from 'react'

import PageHeader from '../components/PageHeader'
import DoubleSearchField from '../components/DoubleSearchField'

const CareerPage = () => (
  <div>
    <PageHeader title="Providing Opportunity">
      <DoubleSearchField
        areaPlaceholder="Area"
        textPlaceholder="Clinic, Hospitals, Doctors"
        onCustomSubmit={function () {
          console.log('Brree')
        }}
      />
    </PageHeader>
  </div>
)

export default CareerPage
