import { stringify } from "query-string"
import * as R from "ramda"
import Head from "next/head"

interface CoverGeneratorParams {
  cover_title: string | null
  cover_subtitle: string | null
  cover_card: string
}

const generate_cover = (overrides: Partial<CoverGeneratorParams>) => {
  const params: CoverGeneratorParams = {
    cover_title: overrides.cover_title || null,
    cover_subtitle: overrides.cover_subtitle || null,
    cover_card: overrides.cover_card || "base",
  }

  // Process cover data
  let data = {
    title: params.cover_title,
    subtitle: params.cover_subtitle,
  }

  //MARC: Remove empty or null values from query passed to stringify to generate a correct URL
  data = R.reject(R.equals(null))(data)
  const cover_url = {
    url: `https://core-brand-cards.app.faable.com/card/${
      params.cover_card
    }?${stringify(data)}`,
  }

  const screenshot_cover_url = `https://api-cabled.app.faable.com/screenshot?${stringify(
    cover_url,
  )}`
  return screenshot_cover_url
}

export const CoverImage: React.FC<{ title: string }> = ({ title }) => {
  const cover = generate_cover({
    cover_title: title,
  })

  return (
    <Head>
      <meta name="image" content={cover} />
      <meta property="og:image" content={cover} />
      <meta name="twitter:card" content={cover} />
      <meta property="og:image:alt" content={title} />
    </Head>
  )
}
