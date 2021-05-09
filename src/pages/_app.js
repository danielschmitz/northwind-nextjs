import TopBar from '../components/topBar'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar titulo="Northwind App"></TopBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
