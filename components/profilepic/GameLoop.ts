const load_image = (src): Promise<HTMLImageElement> => {
  const img_pic = new Image()
  img_pic.src = src
  return new Promise(resolve => {
    img_pic.addEventListener("load", () => {
      resolve(img_pic)
    })
  })
}

const initialize = async () => {
  return {
    selected_image: await load_image("/sample/obama.jpg"),
    image_logo: await load_image("/logos/logo_ball.svg"),
  }
}

interface GameProps {
  size: { width: number; height: number }
  image_logo: HTMLImageElement
  selected_image: HTMLImageElement
  offset: { x: number; y: number }
  selected_image_zoom: number
}

const loop = (ctx: CanvasRenderingContext2D, props: GameProps) => {
  const { width, height } = props.size
  //ctx.clearRect(0, 0, width, height)

  // Logo Mask
  ctx.drawImage(props.image_logo, 0, 0, width, height)

  // Male
  ctx.globalCompositeOperation = "source-in"
  const ratio = props.selected_image.width / props.selected_image.height
  ctx.save()
  const scale = props.selected_image_zoom / 100 + 1
  ctx.translate(width / 2, height / 2)
  ctx.scale(scale, scale)
  ctx.drawImage(
    props.selected_image,
    -(width * ratio) / 2 + props.offset.x,
    -height / 2 + props.offset.y,
    width * ratio,
    height,
  )
  ctx.restore()

  // Overlay
  ctx.globalCompositeOperation = "multiply"
  ctx.drawImage(props.image_logo, 0, 0, width, height)
}

let gameprops: Partial<GameProps> = {}
export const get_gameprops = () => {
  return gameprops
}
export const update_props = (props: Partial<GameProps>) => {
  gameprops = {
    ...gameprops,
    ...props,
  }
}

export const start_loop = async (
  canvas: HTMLCanvasElement,
  partialprops?: Partial<GameProps>,
) => {
  let initial_props: GameProps = {
    size: { width: canvas.width, height: canvas.height },
    offset: { x: 0, y: 0 },
    selected_image_zoom: 0,
    ...(await initialize()),
    ...partialprops,
  }
  update_props(initial_props)

  const ctx = canvas.getContext("2d")
  const game = () => {
    loop(ctx, { ...initial_props, ...gameprops })
    window.requestAnimationFrame(game)
  }
  window.requestAnimationFrame(game)
}
