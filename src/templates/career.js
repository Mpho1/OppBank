import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'

import PageHeader from '../components/PageHeader'

const Job = ({data}) => (
  <div>
    <PageHeader title="Get The Job" subtitle="The job the job the job"/>
    <ThirdsColumns breakOrder="213">
      <CategoryBlock>
        <div>Side Block here</div>
      </CategoryBlock>

      <div>
        <h1>{data.contentfulJob.title}</h1>
        <h1>{data.contentfulJob.description.description}</h1>
        <h1>{data.contentfulJob.workType}</h1>
        <h1>{data.contentfulJob.salary}</h1>
        <h1>{data.contentfulJob.location}</h1>
        Product Info Here!
      </div>

      <div>
        Other side block here!
      </div>
    </ThirdsColumns>
  </div>
)

export default Job

export const pageQuery = graphql`
    query SingleCareerQuery($slug: String!){
        contentfulCareer (slug: {eq: $slug}) {
            workType
            salary
            title
            location
            description {
                description
            }
        }
    }
`
