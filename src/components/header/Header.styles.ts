import styled from 'styled-components'
import type { LayoutMode } from '../../hooks/LayoutMode.hook'
import { Link } from 'react-router-dom'

export const HeaderStyled = styled.div<{ layoutmode: LayoutMode }>`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-right: ${({ layoutmode }) => (layoutmode === 'tablet' ? 160 : 0)}px;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
`

export const HeaderNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`
