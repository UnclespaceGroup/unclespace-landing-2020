/* eslint-disable indent */
import template from '../public/index.hbs'

const PROD = process.env.NODE_ENV === 'production'

export default ({ appHTML, helmet, reduxState, scripts, styles, cssHash } = {}) => {
  return template({
    appHTML,
    helmet,
    initialState: JSON.stringify(reduxState).replace(/</g, '\\u003c'),
    scripts,
    styles,
    stylesHash: cssHash,
    production: PROD
  })
}
