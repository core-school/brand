import pkg from "../../package.json"

export const Footer = () => {
  return (
    <div tw="bg-gray-200 text-center py-10 mt-32 px-2">
      <p>
        <b>2022, CORE Code School&trade;</b> · v{pkg.version}
      </p>
      <p tw="my-4 text-gray-500 max-w-md mx-auto">
        Want to improve us? Submit a <b>PR</b> and contribute to our company
        mission and values on our{" "}
        <a
          tw="underline"
          href="https://github.com/core-school/brand"
          target="_blank"
        >
          Github repo.
        </a>
      </p>
      <p tw="pt-2">
        <a href="https://www.corecode.school">www.corecode.school</a>
      </p>
    </div>
  )
}
