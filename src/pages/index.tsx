import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { Logo } from "../components/logo"
import '../styles/main.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main">
      <Logo />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Rehookify</title>
