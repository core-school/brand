import tw from "twin.macro"
import { useEffect, useMemo, useRef, useState } from "react"
import { TwitterPicker as ColorPicker } from "react-color"
import { saveAs } from "file-saver"
import { forwardRef } from "react"

const SVGCustom = forwardRef<any, { text: string; color: string }>(
  ({ text, color = "#FB6942" }, ref) => {
    const text_ref = useRef<SVGTextElement>()
    const [text_width, setTextWidth] = useState(0)
    useEffect(() => {
      const size = text_ref.current.getComputedTextLength()
      setTextWidth(size + 10)
    }, [text])
    return (
      <svg
        ref={ref}
        viewBox={`0 0 ${text_width + 50} 32`}
        version="1.1"
        width={text_width + 200}
        height={50}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: `@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@700");`,
            }}
          ></style>
        </defs>
        <title>CustomizableLogo</title>
        <g
          id="LogoWeb"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="text" transform="translate(20,4)">
            <rect
              id="Rectangle"
              fill={color}
              width={text_width}
              height="23"
            ></rect>
            <text
              id="CORE-CODE-SCHOOL"
              fillOpacity="0.8"
              fill="#FFFFFF"
              fillRule="nonzero"
              fontFamily="Rubik-Bold, Rubik"
              fontSize="24"
              fontWeight="bold"
              ref={text_ref}
            >
              <tspan x={5} y="2" textAnchor="start" dominantBaseline="hanging">
                {text.toUpperCase()}
              </tspan>
            </text>
          </g>
        </g>
        <g id="CORELOGO" transform="translate(-2.000000, 0)">
          <g id="_">
            <path
              d="M14.68,23.28a.45.45,0,0,1-.18,0l-.22-.12L5.8,17.35a2.28,2.28,0,0,1-.5-.46.85.85,0,0,1-.18-.55v-.73A.89.89,0,0,1,5.3,15a2.28,2.28,0,0,1,.5-.46L14.28,8.8l.22-.09a.49.49,0,0,1,.18-.05.48.48,0,0,1,.35.13.42.42,0,0,1,.14.34v2.54a.75.75,0,0,1-.21.58,2.05,2.05,0,0,1-.45.34L9.38,16l5.13,3.39a2.89,2.89,0,0,1,.45.33.74.74,0,0,1,.21.57v2.54a.48.48,0,0,1-.49.49Z"
              fill={color}
            />
          </g>
          <g id="_2" transform={`translate(${text_width + 27} 5.7)`}>
            <path
              d="M.52,20.48a.51.51,0,0,1-.37-.15A.46.46,0,0,1,0,20a.39.39,0,0,1,.07-.23L8,.57A1.38,1.38,0,0,1,8.31.19.77.77,0,0,1,8.88,0H11a.47.47,0,0,1,.35.15.53.53,0,0,1,.14.34.79.79,0,0,1-.05.24l-8,19.19a1.48,1.48,0,0,1-.27.37.81.81,0,0,1-.58.19Z"
              fill={color}
            />
            <path
              d="M13.92,17.57a.43.43,0,0,1-.33-.15.45.45,0,0,1-.15-.35V14.53a.74.74,0,0,1,.22-.57,4.59,4.59,0,0,1,.44-.33l5.11-3.39L14.1,6.88a2.81,2.81,0,0,1-.44-.35A.74.74,0,0,1,13.44,6V3.41a.43.43,0,0,1,.15-.34.49.49,0,0,1,.33-.13.58.58,0,0,1,.2.05l.2.09,8.5,5.77a2.15,2.15,0,0,1,.51.46,1,1,0,0,1,.17.58v.73a.9.9,0,0,1-.17.55,2,2,0,0,1-.51.46l-8.5,5.77a1.06,1.06,0,0,1-.2.12A.58.58,0,0,1,13.92,17.57Z"
              fill={color}
            />
          </g>
        </g>
      </svg>
    )
  },
)

export const CustomizableWide = () => {
  const [text, setText] = useState("CORE ROCKS 🥳")
  const [color, setColor] = useState("#FB6942")
  const logo_ref = useRef<SVGElement>()
  const handleDownload = () => {
    const svg = logo_ref.current.outerHTML
    const blob_obj = window.URL.createObjectURL(
      new Blob([svg], { type: "image/svg" }),
    )
    saveAs(blob_obj, "core_custom_wide_logo.svg")
  }

  return (
    <div>
      <input
        tw="border border-gray-300 text-lg p-2 my-2"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div tw="py-2">
        <ColorPicker
          color={color}
          onChange={e => setColor(e.hex)}
          colors={[
            "#FB6942",
            "#F9D423",
            "#FA2A00",
            "#0B486B",
            "#EB76D0",
            "#9E3AAE",
          ]}
        />
      </div>
      <div tw="flex flex-col gap-2 items-start overflow-scroll">
        <div tw="bg-white border border-solid border-gray-300 rounded p-4 inline-block">
          <SVGCustom text={text} color={color} ref={logo_ref} />
        </div>
        <p
          tw="text-gray-500 cursor-pointer text-xs text-center"
          onClick={handleDownload}
        >
          Download "{text}" as SVG file.
        </p>
      </div>
    </div>
  )
}
