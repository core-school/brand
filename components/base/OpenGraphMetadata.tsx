import React from "react"
import { encode } from "html-entities"
import { Helmet } from "react-helmet"
import { stringify } from "query-string"
import { useRouter } from "next/router"
import * as R from "ramda"

export enum OG_TYPE {
  WEBSITE = "website",
  ARTICLE = "article",
}

interface CoverGeneratorParams {
  cover_title: string | null
  cover_subtitle: string | null
  cover_card: string
}
interface OpenGraphMetadata {
  metadata: {
    title: string
    description: string
    og_type?: OG_TYPE
    og_url?: string
  } & Partial<CoverGeneratorParams>
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

export const OpenGraphMetadata: React.FC<OpenGraphMetadata> = props => {
  const router = useRouter()
  let {
    metadata: { title, description, og_type },
  } = props
  const base_url = "https://brand.corecode.school"
  const url = `${base_url}${router.asPath}`

  const cover = generate_cover({
    cover_title: title,
    ...props.metadata,
  })

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        href="/consolidated/logo_app.png"
        sizes="16x16"
      />
      {/* Opengraph */}
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="image" content={cover} />
      <meta property="og:image" content={cover} />
      <meta property="og:image:alt" content={title} />

      <meta property="article:author" content={base_url} />
      <meta property="article:publisher" content={base_url} />
      <meta property="og:type" content={og_type || OG_TYPE.WEBSITE} />
      <meta property="og:site_name" content="CORE Code School" />
      <meta property="og:url" content={url} />

      {/* twitter card */}
      <meta name="twitter:card" content={cover} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
