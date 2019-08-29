// packages
import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext({
  component: null,
  hideModal: () => {},
  props: {},
  showModal: () => {}
})

export class ModalProvider extends Component {
  state = {
    component: null,
    hideModal: () => {
      this.setState({
        component: null,
        props: {}
      })
    },
    props: {},
    showModal: (component, props = {}) => {
      this.setState({
        component,
        props: {
          onRequestClose: () => {
            this.setState({
              component: null,
              props: {}
            })
          },
          ...props
        }
      })
    }
  }

  render () {
    const {
      props: {
        children
      },
      state
    } = this

    return (
      <ModalContext.Provider value={state}>
        {children}
      </ModalContext.Provider>
    )
  }
}

ModalProvider.propTypes = {
  children: PropTypes.node
}

export const ModalConsumer = ModalContext.Consumer
