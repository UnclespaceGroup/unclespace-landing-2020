import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const ContainerHelmet = ({ title, description }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
    </Helmet>
  </div>
)
ContainerHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
export default React.memo(ContainerHelmet)
