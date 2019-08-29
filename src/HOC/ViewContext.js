// packages
import React from 'react'
// utils
import getComponentDisplayName from 'utils/getComponentDisplayName'

export const ViewContext = React.createContext(false)

export function withViewContext (WrappedComponent) {
  const Component = props => {
    return (
      <ViewContext.Consumer>
        {elasticAdaptiveState => (
          <WrappedComponent {...{ ...elasticAdaptiveState, ...props }} />
        )}
      </ViewContext.Consumer>
    )
  }
  Component.displayName = `ViewContext(${getComponentDisplayName(
    WrappedComponent
  )})`
  return Component
}
