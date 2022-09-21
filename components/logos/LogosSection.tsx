import tw from "twin.macro"
import { BallLogo, BallLogoAlt } from "./BallLogo"
import { CustomizableWide } from "./CustomizableWide"
import { WideLogo } from "./WideLogo"

export const LogosSection = () => (
  <div>
    <p tw="font-bold">02.1. Wide Logo</p>
    <WideLogo />
    <p tw="font-bold">02.2. Ball Logo</p>
    <BallLogo />
    <p tw="font-bold">02.3. Ball Logo Alt</p>
    <BallLogoAlt />
    <p tw="font-bold">02.4. Custom Wide Logo</p>
    <CustomizableWide />
  </div>
)
