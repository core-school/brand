import { useEffect, useRef, useState } from "react"
import tw from "twin.macro"
import { get_gameprops, start_loop, update_props } from "./GameLoop"
import download from "downloadjs"

export const ProfilePicture = () => {
  const canvas_ref = useRef<HTMLCanvasElement>()
  const [zoom, setZoom] = useState(0)

  useEffect(() => {
    start_loop(canvas_ref.current)
  }, [])

  useEffect(() => {
    update_props({
      selected_image_zoom: zoom || 0,
    })
  }, [zoom])

  useEffect(() => {
    const element = canvas_ref.current
    let pos
    let initial_offset
    element.addEventListener("mousedown", e => {
      pos = { x: e.clientX, y: e.clientY }
      initial_offset = get_gameprops().offset
      console.log(get_gameprops())
    })
    element.addEventListener("mousemove", e => {
      if (pos && initial_offset) {
        let delta = { x: e.clientX - pos.x, y: e.clientY - pos.y }

        update_props({
          offset: {
            x: initial_offset.x + delta.x * 5,
            y: initial_offset.y + delta.y * 5,
          },
        })
      }
    })
    element.addEventListener("mouseout", () => {
      pos = null
    })
    element.addEventListener("mouseup", () => {
      pos = null
    })
  }, [])

  return (
    <div>
      <div tw="py-4">
        <p tw="mb-2 font-bold">03.1. Profile Picture</p>
        <div tw="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={e => {
              const pic = e.target.files[0]
              const fr = new FileReader()
              fr.readAsDataURL(pic)
              fr.onload = function () {
                const img_pic = new Image()
                img_pic.src = fr.result as string
                img_pic.addEventListener("load", () => {
                  update_props({ selected_image: img_pic })
                })
              }
            }}
          />
          <div>
            <div tw="inline-block">
              <div tw="text-center">
                <input
                  type="range"
                  min="-50"
                  max="100"
                  value={zoom}
                  onChange={e => {
                    setZoom(parseInt(e.target.value))
                  }}
                />
                <p tw="text-xs text-center text-gray-500 select-none">
                  Drag the face to center
                </p>
              </div>
              <canvas
                ref={canvas_ref}
                tw="bg-white border border-solid border-gray-300 rounded inline-block cursor-pointer"
                style={{ width: 200, height: 200 }}
                width={1024}
                height={1024}
              />
              <div tw="text-center">
                <p
                  tw="text-center text-gray-500 cursor-pointer mt-2"
                  onClick={() => {
                    download(
                      canvas_ref.current.toDataURL("image/png"),
                      "corecodeschool-profilepic.png",
                      "image/png",
                    )
                  }}
                >
                  Click here to download
                  <br />
                  <span tw="text-xs">(square 1024px x 1024px)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
