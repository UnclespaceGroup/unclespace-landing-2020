import { fromJS } from 'immutable'

export const SET_CURRENT_FONT_SIZE = 'SET_CURRENT_FONT_SIZE'

const initialState = fromJS({
  config: {
    desktop: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_DESKTOP,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_DESKTOP
    },
    mobile: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_MOBILE,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_MOBILE
    },
    tablet: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_TABLET,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_TABLET
    }
  },
  curFontSize: 10
})

export default function ElasticAdaptive (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_FONT_SIZE:
      return state.set('curFontSize', action.payload.curFontSize)

    default:
      return state
  }
}
