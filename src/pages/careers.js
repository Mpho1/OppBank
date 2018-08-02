import React from 'react'
import graphql from 'graphql'

import PageHeader from '../components/PageHeader'
import DoubleSearchField from '../components/DoubleSearchField'
import ThirdsColumns from '../components/ThirdsColumns'
import CareerApply from '../components/CareerApply'
import NoJob from '../components/NoJob'
import Pagination from '../components/Pagination'
import BackButton from '../components/BackButton'
import style from './careers.module.scss'

class CareerPage extends React.Component {
  constructor () {
    super()
    this.state = {
      todosPerPage: 5,
      filteredItems: []
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
    this.state.filteredItems = filteredCareers

    if (this.state.filteredItems.length < 0) {
      return (
        <div>
          <NoJob
            title="0 Jobs available"
            message="We will email you once a position for this has been opened"
            text="Enter your email"
          />
        </div>
      )
    }
  }

  render () {
    const paginationCareer = this.props
    let todos = paginationCareer.data.allContentfulCareer.edges

    const filteredItems = todos.filter(({ node }) => {
      return node.title.indexOf(this.state.jobTitle) !== -1 || node.location.indexOf(this.state.location) !== -1
    })

    if (filteredItems.length !== 0) {
      todos = filteredItems
    }

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
          {/* <CategoryBlock> */}
          <div className={style.backButton}>
            <BackButton/>
          </div>
          {/* </CategoryBlock> */}
          <div>
            <Pagination
              todos={todos}
              todosPerPage={this.state.todosPerPage}
              contentDisplay={this.renderCareerList()}
              hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
              hide={this.state.hideApplyForm}/>
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
