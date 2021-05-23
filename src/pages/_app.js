import TopBar from "../components/topbar"
import "../../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar titulo="Northwind App"></TopBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
