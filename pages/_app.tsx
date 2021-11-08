import { AppProps } from "next/app"
import { Layout } from "../components/base/Layout"
import { GlobalStyles } from "../styles/GlobalStyles"
import Helmet from "react-helmet"

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Helmet>
      <link
        rel="icon"
        type="image/png"
        href="/consolidated/logo_app.png"
        sizes="16x16"
      />
    </Helmet>

    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)

export default App
