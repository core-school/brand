import { LogoGithubIcon, MarkGithubIcon } from "@primer/octicons-react"
import tw from "twin.macro"
import pkg from "../../package.json"

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div tw="container px-4 mx-auto">
        <div tw="py-5">
          <img
            src="/logos/logo_ball.svg"
            width={60}
            alt="CORE Code School Logo"
          />
          <h1 tw="text-2xl my-4 font-bold">
            The Brand Book of CORE Code School
          </h1>
          {children}
        </div>
      </div>
      <div tw="bg-gray-200 text-center py-5 mt-10 px-2">
        <p>2022, CORE Code School&trade;. Madrid Spain. v{pkg.version}</p>
        <p tw="mt-2 text-gray-600">
          Want to improve us? Submit a <b>PR</b> and contribute to our company
          mission and values via{" "}
          <a tw="underline" href="https://github.com/core-school/brand">
            <MarkGithubIcon /> Github
          </a>
        </p>
      </div>
    </div>
  )
}
