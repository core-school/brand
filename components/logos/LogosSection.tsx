import tw from "twin.macro"
import { BallLogo } from "./BallLogo"
import { CustomizableWide } from "./CustomizableWide"
import { WideLogo } from "./WideLogo"

export const LogosSection = () => (
  <div>
    <p tw="font-bold">11. Wide Logo</p>
    <WideLogo />
    <p tw="font-bold">12. Ball Logo</p>
    <BallLogo />
    <p tw="font-bold">13. Custom Wide Logo</p>
    <CustomizableWide />
  </div>
)
