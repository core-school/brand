import Head from "next/head"

export const Description: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Head>
      <meta name="description" content={children} />
      <meta property="og:description" content={children} />
      <meta name="twitter:description" content={children} />
    </Head>
  )
}
