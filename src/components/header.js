import React from "react"
import Navegacion from "../components/nav"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
        padding: 1rem;
        box-shadow: 2px 2px 10px #333;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <EnlaceHome to="/">
          <h1>Hotel Gatsby</h1>
        </EnlaceHome>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
