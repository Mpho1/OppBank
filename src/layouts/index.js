import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

import 'normalize.css'
import './index.module.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Content children={children} />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        desciption,
        keywords
      }
    }
  }
`
