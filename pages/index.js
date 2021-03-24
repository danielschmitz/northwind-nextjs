import PageApp from "../components/app/Page";

const env = process.env.NODE_ENV || "development"

export default function Home() {

  console.log("Env selected: ", env)

  return <PageApp title="Home">
    This is home
  </PageApp>
}