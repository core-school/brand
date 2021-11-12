import tw from "twin.macro"

export const WideLogo = () => {
  return (
    <>
      <div tw="flex flex-wrap gap-2">
        <a href="/logos/logo_core_wide.svg" download="core-logo-wide.svg">
          <div tw="bg-black rounded p-4 inline-block">
            <img src="/logos/logo_core_wide.svg" alt="logo web" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
        <a href="/logos/logo_core_wide.svg" download="core-logo-wide.svg">
          <div tw="bg-gray-200 rounded p-4 inline-block">
            <img src="/logos/logo_core_wide.svg" alt="logo web" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
        <a href="/logos/logo_core_wide.svg" download="core-logo-wide.svg">
          <div tw="bg-white border border-solid border-gray-300 rounded p-4 inline-block">
            <img src="/logos/logo_core_wide.svg" alt="logo web" />
          </div>
          <p tw="text-xs text-center text-gray-500">Click to download</p>
        </a>
      </div>
    </>
  )
}
