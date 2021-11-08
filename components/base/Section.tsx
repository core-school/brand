import tw from "twin.macro"

export const Section: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <section tw="py-2">
      <h2 tw="font-bold text-gray-700">{title}</h2>
      <div tw="h-0.5 bg-gray-300 mb-3 mt-1" />
      {children}
    </section>
  )
}
