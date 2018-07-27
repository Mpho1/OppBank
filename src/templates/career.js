import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import CareerApply from '../components/CareerApply'
import graphql from 'graphql'
import FullJobDetails from '../components/FullJobDetails'
import BackButton from '../components/BackButton'

import PageHeader from '../components/PageHeader'

class Job extends React.Component {
  componentWillMount () {
    this.setState(() => {
      return {
        hideApplyForm: true
      }
    })
  }

  hideUnhideApplyForm (hide) {
    this.setState(() => {
      return {
        hideApplyForm: hide
      }
    })
  }

  render () {
    return (
      <div>
        <PageHeader title="Get The Job" subtitle="You are halfway through"/>
        <ThirdsColumns breakOrder="213">
          <CategoryBlock>
            <BackButton/>
          </CategoryBlock>
          <div>
            <FullJobDetails
              jobTitle={this.props.data.contentfulCareer.title}
              hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
              date={this.props.data.contentfulCareer.postedAt}
              city={this.props.data.contentfulCareer.location}
              calendar={this.props.data.contentfulCareer.workType}
              description={this.props.data.contentfulCareer.description.description}
              workType={this.props.data.contentfulCareer.workType}
              salary={this.props.data.contentfulCareer.salary}
              qualifications={this.props.data.contentfulCareer.qualificationAndExperience.qualificationAndExperience}
              skills={this.props.data.contentfulCareer.skillsAndAbility.skillsAndAbility}
              competencies={this.props.data.contentfulCareer.competencies.competencies}
              notice="Kindly note only applicants who meet the minimum requirements will be contacted. All positions will be filled in accordance with our Employment Equity plan. We also encourage people with disabilities to apply."
            />
          </div>

          <div>
            <CareerApply
              name="name"
              contactNumber="Contact Number"
              email="Email"
              attachment="No Attachment"
              hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
              hide={this.state.hideApplyForm}
            />
          </div>
        </ThirdsColumns>
      </div>
    )
  }
}

export default Job

export const pageQuery = graphql`
  query SingleCareerQuery($slug: String!){
    contentfulCareer (slug: {eq: $slug}) {
      workType
      salary
      title
      location
      postedAt (formatString: "MMMM DD, YYYY")
      description {
          description
      }
      qualificationAndExperience {
        id
        qualificationAndExperience
        childMarkdownRemark {
          html
        }
      }
      competencies {
        id
        competencies
        childMarkdownRemark {
          html
        }
      }
      skillsAndAbility {
        id
        skillsAndAbility
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
