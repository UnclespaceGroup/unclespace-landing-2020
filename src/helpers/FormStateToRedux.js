import React from 'react'
import PropTypes from 'prop-types'
// packages
import { connect } from 'react-redux'
import { FormSpy } from 'react-final-form'
// actions
import { updateFormState } from 'actions/finalFormActions'

const FormStateToRedux = ({ form, updateFormState }) => {
  return (
    <FormSpy onChange={state => updateFormState(form, state)} />
  )
}

FormStateToRedux.propTypes = {
  form: PropTypes.string,
  updateFormState: PropTypes.func
}

export default connect(undefined, { updateFormState })(FormStateToRedux)
