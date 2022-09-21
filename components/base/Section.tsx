export const Section: React.FC<{ title?: string; number?: string }> = ({
  title,
  number,
  children,
}) => {
  return (
    <section tw="py-2">
      <div tw="bg-core-200 mb-10 mt-20 py-20">
        <div tw="container px-4 mx-auto">
          <p tw="text-gray-400 text-2xl font-mono">{number}</p>
          <h2 tw="font-bold text-core text-5xl uppercase">{title}</h2>
        </div>
      </div>
      <div tw="container px-4 mx-auto">{children}</div>
    </section>
  )
}
