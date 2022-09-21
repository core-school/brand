export const Header = () => {
  return (
    <div tw="bg-core text-white mb-10">
      <div tw="container px-4 mx-auto">
        <div tw="py-10">
          <div tw="bg-white inline-block p-4 rounded-full">
            <img
              src="/logos/logo_ball.svg"
              width={60}
              alt="CORE Code School Logo"
            />
          </div>
          <h1 tw="text-6xl my-4 font-extrabold">Brand Book</h1>
          <p tw="text-xl text-core-200">CORE Code Schol</p>
        </div>
      </div>
    </div>
  )
}
