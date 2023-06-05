import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import Script from "next/script"
import React from "react"

import { gtagUrl, renderSnippet } from "@/lib/analytics"

import CssBaseline from "../styles/css-baseline"

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html itemType="http://schema.org/WebPage" lang="en">
        <Head>
          <Script async src={gtagUrl} />
          <Script
            dangerouslySetInnerHTML={{ __html: renderSnippet() as string }}
          />

          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
