import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'swiper/dist/css/swiper.css'
import './index.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/button'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />
    <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
    <meta content="utf-8" httpEquiv="encoding" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    <Button text="VIEW" />
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
        description,
        keywords
      }
    }
  }
`
