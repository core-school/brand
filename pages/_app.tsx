import { AppProps } from "next/app"
import { Layout } from "../components/base/Layout"
import { GlobalStyles } from "../styles/GlobalStyles"
import { OpenGraphMetadata } from "../components/base/OpenGraphMetadata"
import { Title } from "../components/base/Title"
import { Description } from "../components/base/Description"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <OpenGraphMetadata />
    <Title>Brand Book</Title>
    <Description>
      Bring code closer to people and make it easier to understand. This is our
      Brand Book and DNA.
    </Description>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App
