import tw, { theme } from "twin.macro"

import { ColorsSection } from "../components/colors/ColorsSection"
import { Section } from "../components/base/Section"
import { LogosSection } from "../components/logos/LogosSection"
import { ProductSampleSection } from "../components/product/ProductSampleSection"
import { CorporateValues } from "../components/corporate/Values"
import { ProfilePicture } from "../components/profilepic/ProfilePicture"
import { MainValue } from "../components/corporate/MainValue"
import { CoverImage } from "../components/base/Cover"

const IndexPage = () => {
  return (
    <>
      <CoverImage title="Brand Book" />
      <MainValue />
      <Section number="01." title="Corporate Identity">
        <CorporateValues />
      </Section>
      <Section number="02." title="Logos">
        <LogosSection />
      </Section>
      <Section number="03." title="Staff">
        <ProfilePicture />
      </Section>
      <Section number="04." title="Colors">
        <ColorsSection />
      </Section>
      <Section number="05." title="Product">
        <ProductSampleSection />
      </Section>
    </>
  )
}

export default IndexPage
