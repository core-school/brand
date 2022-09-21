import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

interface OpenGraphMetadata {}

export const OpenGraphMetadata: React.FC<OpenGraphMetadata> = props => {
  const router = useRouter()

  const base_url = "https://brand.corecode.school"
  const url = `${base_url}${router.asPath}`

  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="/consolidated/logo_app.png"
        sizes="16x16"
      />
      <link rel="canonical" href={base_url} />
      {/* Opengraph */}

      <meta property="article:author" content={base_url} />
      <meta property="article:publisher" content={base_url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CORE · Brand Book" />
      <meta property="og:url" content={url} />
    </Head>
  )
}
