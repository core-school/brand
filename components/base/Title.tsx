import Head from "next/head"

export const Title: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Head>
      <title>{children} · CORE Code School</title>
      <meta property="og:title" content={children} />
      <meta name="title" content={children} />
      <meta name="twitter:title" content={children} />
    </Head>
  )
}
