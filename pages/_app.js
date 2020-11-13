import { Paper } from '@material-ui/core'
import TopBarApp from '../components/app/TopBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBarApp titulo="Northwind App"></TopBarApp>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
