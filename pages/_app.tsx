import { AppProps } from "next/app"
import { Layout } from "../components/base/Layout"
import { GlobalStyles } from "../styles/GlobalStyles"
import Helmet from "react-helmet"
import { OpenGraphMetadata } from "../components/base/OpenGraphMetadata"

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <OpenGraphMetadata
      metadata={{
        title: "Brand Book",
        description:
          "Our mission, bring code closer to people by making it easier to understand. Who we are, what we do. This is our DNA.",
      }}
    />

    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)

export default App
