import GlobalStyle from '../styles/shared'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
