import { useEffect, useRef, useState } from "react"
import tw from "twin.macro"

/**
 * By Ken Fyrstenberg Nilsen
 *
 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
 *
 * If image and context are only arguments rectangle will equal canvas
 */
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
  if (arguments.length === 2) {
    x = y = 0
    w = ctx.canvas.width
    h = ctx.canvas.height
  }

  // default offset is center
  offsetX = typeof offsetX === "number" ? offsetX : 0.5
  offsetY = typeof offsetY === "number" ? offsetY : 0.5

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0
  if (offsetY < 0) offsetY = 0
  if (offsetX > 1) offsetX = 1
  if (offsetY > 1) offsetY = 1

  var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r, // new prop. width
    nh = ih * r, // new prop. height
    cx,
    cy,
    cw,
    ch,
    ar = 1

  // decide which gap to fill
  if (nw < w) ar = w / nw
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh // updated
  nw *= ar
  nh *= ar

  // calc source rectangle
  cw = iw / (nw / w)
  ch = ih / (nh / h)

  cx = (iw - cw) * offsetX
  cy = (ih - ch) * offsetY

  // make sure source rectangle is valid
  if (cx < 0) cx = 0
  if (cy < 0) cy = 0
  if (cw > iw) cw = iw
  if (ch > ih) ch = ih

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h)
}

export const ProfilePicture = () => {
  const canvas_ref = useRef<HTMLCanvasElement>()
  const [selected_image, setSelectedImage] = useState<HTMLImageElement>()
  const [image_logo, setImageLogo] = useState<HTMLImageElement>()
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()

  const load_image = (src): Promise<HTMLImageElement> => {
    const img_pic = new Image()
    img_pic.src = src
    return new Promise(resolve => {
      img_pic.addEventListener("load", () => {
        resolve(img_pic)
      })
    })
  }
  useEffect(() => {
    const ctx = canvas_ref.current.getContext("2d")
    setCtx(ctx)
    load_image("/sample/male.jpg").then(img => setSelectedImage(img))
    load_image("/logos/logo_ball.svg").then(img => setImageLogo(img))

    //someElement.addEventListener("touchstart", process_touchstart, false)
    const element = canvas_ref.current
    let pos

    element.addEventListener("mousedown", e => {
      console.log(e)
      pos = { x: e.clientX, y: e.clientY }
    })
    element.addEventListener("mousemove", e => {
      if (pos) {
        let delta = { x: e.clientX - pos.x, y: e.clientY - pos.y }
        console.log(delta)
        setOffset({ x: delta.x, y: delta.y })
      }
    })
    element.addEventListener("mouseup", () => {
      pos = null
    })

    // someElement.addEventListener("touchcancel", process_touchcancel, false)
    // someElement.addEventListener("touchend", process_touchend, false)
  }, [])

  const [down_link, setDownLink] = useState<string>()
  useEffect(() => {
    let frame_id
    const draw = () => {
      if (!ctx || !selected_image) return
      const { width, height } = canvas_ref.current
      //ctx.clearRect(0, 0, width, height)

      // Logo Mask
      ctx.drawImage(image_logo, 0, 0, width, height)

      // Male
      ctx.globalCompositeOperation = "source-in"
      drawImageProp(
        ctx,
        selected_image,
        offset.x,
        offset.y,
        width,
        height,
        0,
        0,
      )

      // Overlay
      ctx.globalCompositeOperation = "multiply"
      ctx.drawImage(image_logo, 0, 0, width, height)
      setDownLink(canvas_ref.current.toDataURL("image/png"))
      frame_id = window.requestAnimationFrame(draw)
    }
    frame_id = window.requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame_id)
    }
  }, [offset])

  return (
    <div>
      <div tw="py-4">
        <p tw="mb-2 font-bold">111. Profile Picture</p>
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
                  setSelectedImage(img_pic)
                })
              }
            }}
          />
          <div>
            <div tw="inline-block">
              <canvas
                ref={canvas_ref}
                tw="bg-white border border-solid border-gray-300 rounded p-4 inline-block"
                style={{ width: 200, height: 200 }}
                width={1024}
                height={1024}
              />
              <a href={down_link} download="core-profile-512.png">
                <p tw="text-xs text-center text-gray-500">
                  Click to download (512px x 512px)
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
