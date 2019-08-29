export const isBrowser = typeof window !== 'undefined'
export const isServer = !isBrowser
export const isSSR = process.env.REACT_APP_SSR === 'true'
export const isDevelopment = process.env.NODE_ENV === 'development'
