import tw, { theme } from "twin.macro"
import { range } from "lodash"
import { shade, tint } from "polished"
import { useCopyToClipboard } from "react-use"

const Color = ({ color, name }) => {
  const [state, copyToClipboard] = useCopyToClipboard()
  return (
    <div tw="flex-grow-0" onClick={() => copyToClipboard(color.toUpperCase())}>
      <div tw="h-8 w-20 rounded" style={{ backgroundColor: color }} />
      <p tw="text-gray-400 text-xs mt-1">{color.toUpperCase()}</p>
      <p tw="text-xs">{name}</p>
      {state.error ? (
        <p tw="text-xs text-gray-400">
          Unable to copy value: {state.error.message}
        </p>
      ) : (
        state.value && <p tw="text-xs text-core-400">Copied!</p>
      )}
    </div>
  )
}

const to_key = (number, color) => ({
  color,
  name: `${Math.floor(number * 1000)}`,
})

const base_colors = [
  {
    name: "CORE Base",
    color: theme`colors.core`,
    palette: [
      ...range(0.1, 0.5, 0.1).map(e =>
        to_key(e, tint(1 - e * 2, theme`colors.core`)),
      ),
      to_key(0.5, theme`colors.core`),
      ...range(0.1, 0.5, 0.1).map(e =>
        to_key(0.5 + e, shade(e, theme`colors.core`)),
      ),
    ],
  },
]

const Palette = ({ name, palette, color }) => {
  return (
    <div>
      <div tw="flex gap-1 flex-wrap">
        <div>
          <p tw="pt-1 font-black">{name}</p>
          <Color name="Principal" color={color} />
        </div>
        <div tw="lg:ml-4">
          <div tw="pt-1">Shades:</div>
          <div tw="flex gap-1 flex-wrap">
            {palette.map((p, i) => (
              <Color key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ColorsSection = () => {
  return (
    <div>
      {base_colors.map(p => (
        <Palette {...p} />
      ))}
    </div>
  )
}
