import { Children } from "react"
import tw, { theme } from "twin.macro"

import { ColorsSection } from "../components/colors/ColorsSection"
import { Section } from "../components/base/Section"
import { LogosSection } from "../components/logos/LogosSection"
import { Helmet } from "react-helmet"
import { ProductSampleSection } from "../components/product/ProductSampleSection"

const IndexPage = () => {
  return (
    <>
      <Helmet
        title="Brand Book | CORE Code School"
        meta={[{ property: "og:title", content: "Brand Book" }]}
      />
      <Section title="00. Corporative Identity">
        <div tw="py-4">
          <p tw="mb-2 font-bold">01. Our mission.</p>
          <p>Bring code closer to people by making it easy to understand.</p>
        </div>

        <div tw="py-4">
          <p tw="mb-2 font-bold">02. What we do.</p>
          <p>
            Learn to code from scratch and become a PRO in 10 weeks. Land on
            your dream job in tech industry.
          </p>
        </div>

        <div tw="py-4">
          <p tw="mb-2 font-bold">03. Value proposal.</p>
          <ul>
            <li>Cloud First</li>
            <li>Microservice oriented</li>
            <li>Software design patterns</li>
            <li>State of the art curriculum</li>
          </ul>
        </div>
        <div tw="py-4">
          <p tw="mb-2 font-bold">About CORE. Naming conventions.</p>
          <pre tw="bg-gray-500 text-white rounded inline-block p-2">
            CORE Code School
          </pre>
          <p tw="mt-2">
            Prefer using entire name <b>"CORE Code School"</b> when possible,
            use <b>"CORE"</b> as a shorter brand name. Name should always be
            written with <b>"CORE"</b> brand name in uppercase letters and if
            complete name is used, make sure it's capitalized{" "}
            <b>"Code School"</b>. Avoid use capitalization for entire name.{" "}
          </p>
        </div>
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
