import { Children } from "react"
import tw, { theme } from "twin.macro"

import { ColorsSection } from "../components/colors/ColorsSection"
import { Section } from "../components/base/Section"
import { LogosSection } from "../components/logos/LogosSection"
import { Helmet } from "react-helmet"
import { ProductSampleSection } from "../components/product/ProductSampleSection"
import { CorporateValues } from "../components/corporate/Values"

const IndexPage = () => {
  return (
    <>
      <Helmet
        title="Brand Book | CORE Code School"
        meta={[{ property: "og:title", content: "Brand Book" }]}
      />
      <Section title="00. Corporative Identity">
        <CorporateValues />
      </Section>
      <p tw="text-gray-500 text-xl mt-10">Brand Book</p>
      <Section title="10. Logos">
        <LogosSection />
      </Section>
      <Section title="11. Color Palette">
        <ColorsSection />
      </Section>
      <Section title="12. Product">
        <ProductSampleSection />
      </Section>
    </>
  )
}

export default IndexPage
