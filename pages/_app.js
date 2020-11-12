import BarraTopo from '../components/BarraTopo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BarraTopo titulo="Hello World"></BarraTopo>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
