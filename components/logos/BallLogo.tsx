import tw from "twin.macro"

export const BallLogo = () => {
  return (
    <>
      <div tw="flex gap-2 pb-3">
        <a href="/logos/logo_ball.svg" download="core-logo-wide.svg">
          <div tw="bg-black rounded p-4 inline-block">
            <img src="/logos/logo_ball.svg" alt="core ball logo" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
        <a href="/logos/logo_ball.svg" download="core-logo-wide.svg">
          <div tw="bg-gray-200 rounded p-4 inline-block">
            <img src="/logos/logo_ball.svg" alt="core ball logo" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
        <a href="/logos/logo_ball.svg" download="core-logo-wide.svg">
          <div tw="bg-white border border-solid border-gray-300 rounded p-4 inline-block">
            <img src="/logos/logo_ball.svg" alt="core ball logo" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
      </div>
      <p tw="font-bold">121. Ball Logo Alt</p>
      <div tw="flex gap-2 pb-3">
        <a href="/logos/logo_ball_alt.svg" download="core-logo-wide.svg">
          <div tw="bg-black rounded p-4 inline-block">
            <img src="/logos/logo_ball_alt.svg" alt="core ball logo" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
        <a href="/logos/logo_ball_alt.svg" download="core-logo-wide.svg">
          <div tw="bg-gray-200 rounded p-4 inline-block">
            <img src="/logos/logo_ball_alt.svg" alt="core ball logo" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
      </div>
    </>
  )
}
