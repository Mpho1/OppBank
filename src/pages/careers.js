import React from 'react'
import graphql from 'graphql'

import PageHeader from '../components/PageHeader'
import DoubleSearchField from '../components/DoubleSearchField'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import CareerApply from '../components/CareerApply'
import CareerList from '../components/CareerList'
import SideNews from '../components/SideNews'
import NoJob from '../components/NoJob'
import Pagination from '../components/Pagination'

class CareerPage extends React.Component {
  constructor () {
    super()
    this.state = {
      todosPerPage: 2
    }
  }

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

  renderCareerList = () => {
    const { location, jobTitle } = this.state
    const careers = this.props.data.allContentfulCareer.edges

    const filteredCareers = careers.filter(({ node }) => {
      return node.title.indexOf(jobTitle) !== -1 || node.location.indexOf(location) !== -1
    })

    if (filteredCareers.length > 0) {
      return filteredCareers.map(({ node }) => {
        return (
          <CareerList
            key={`${node.title} ${node.postedAt}`}
            hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
            jobTitle={node.title}
            date={node.postedAt}
            city={node.location}
            jobDescription={node.description.description}
            workType={node.workType}
            salary={node.salary}
          />
        )
      })
    } else if (filteredCareers.length === -1) {
      return (
        <NoJob
          title="0 Jobs available for this search"
          message="We will email you once a position for this has been opened"
          text="Enter your email"
        />
      )
    } else {
      return (
        <div>
          {this.props.data.allContentfulCareer.edges.map(({node}) => {
            return (
              <CareerList
                key={`${node.title} ${node.postedAt}`}
                hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
                todosPerPage={this.state.todosPerPage}
                jobTitle={node.title}
                date={node.postedAt}
                city={node.location}
                jobDescription={node.description.description}
                workType={node.workType}
                salary={node.salary}
                link={`/careers/${node.slug}`}
              />
            )
          })}
        </div>
      )
    }
  }

  render () {
    const paginationCareer = this.props
    const todos = paginationCareer.data.allContentfulCareer.edges

    return (
      <div>
        <PageHeader
          title="Providing Opportunity">
          <DoubleSearchField
            areaPlaceholder="Area"
            textPlaceholder="Clinic, Hospitals, Doctors"
            onCustomSubmit={(location, jobTitle) =>
              this.setState({ location, jobTitle })}
          />
        </PageHeader>
        <ThirdsColumns>
          <CategoryBlock>
            <SideNews/>
          </CategoryBlock>
          <div>
            <div>

            </div>
            <Pagination
              todos={todos}
              todosPerPage={this.state.todosPerPage}
              contentDisplay={this.renderCareerList()}/>
          </div>
          <div>
            <CareerApply
              name="name"
              contactNumber="Contact Number"
              email="Email"
              attachment="No Attachment"
              hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
              hide={this.state.hideApplyForm}/>
          </div>
        </ThirdsColumns>
      </div>
    )
  }
}

export default CareerPage

export const careerQuery = graphql`
  query careerContentQuery {
    allContentfulCareer {
      edges {
        node {
          title
          description {
            id
            description
          }
          workType
          salary
          postedAt (formatString: "MMMM DD, YYYY")
          location
          slug
        }
      }
    }
  }
`
