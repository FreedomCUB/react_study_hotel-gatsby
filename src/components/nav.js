import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1.5rem;
  margin-right: 1.2rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.pagina-actual{
      border-bottom: 2px solid #fff;
  }
`


const Navegacion = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to={"/nosotros"} activeClassName="pagina-actual">
        Nosotros
      </NavLink>
    </Nav>
  )
}

export default Navegacion
