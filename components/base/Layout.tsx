import tw from "twin.macro"

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div tw="container px-4 mx-auto">
        <div tw="py-5">
          <h1 tw="text-2xl mb-4 font-bold">CORE Code School</h1>
          {children}
        </div>
      </div>
      <div tw="bg-gray-200 text-center py-5 mt-10">
        Our Brand - CORE Code School SLU. Madrid Spain.
      </div>
    </div>
  )
}
