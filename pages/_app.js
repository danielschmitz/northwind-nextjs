import { Paper } from '@material-ui/core'
import BarraTopo from '../components/BarraTopo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BarraTopo titulo="Northwind App"></BarraTopo>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
