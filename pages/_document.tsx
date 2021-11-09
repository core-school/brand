import Document, { Html, Head, Main, NextScript } from "next/document"
import { Helmet } from "react-helmet"
import React from "react"
import { extractCritical } from "@emotion/server"

// should render on <html>
const helmetHtmlAttrComponents = helmet => {
  return helmet.htmlAttributes.toComponent()
}

// should render on <body>
const helmetBodyAttrComponents = helmet => {
  return helmet.bodyAttributes.toComponent()
}

// should render on <head>
const helmetHeadComponents = helmet => {
  return Object.keys(helmet)
    .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
    .map(el => helmet[el].toComponent())
}

export default class MyDocument extends Document<{ helmet: any }> {
  static async getInitialProps(ctx): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(" ")}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    )

    const helmet = Helmet.renderStatic()

    return { ...initialProps, helmet }
  }

  render() {
    return (
      <Html {...helmetHtmlAttrComponents(this.props.helmet)}>
        <Head>{helmetHeadComponents(this.props.helmet)}</Head>
        <body {...helmetBodyAttrComponents(this.props.helmet)}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
