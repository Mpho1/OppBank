/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  require('babel-polyfill')
}

// google analytics
exports.onRouteUpdate = function ({ location }) {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof ga === `function`) {
    if (
      location &&
      typeof window.excludeGAPaths !== `undefined` &&
      window.excludeGAPaths.some(rx => rx.test(location.pathname))
    ) {
      return
    }
    window.ga(
      `set`,
      `page`,
      location ? location.pathname + location.search + location.hash : undefined
    )
    window.ga(`send`, `pageview`)
  }
}
