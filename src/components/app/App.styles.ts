import styled from 'styled-components'
import type { LayoutMode } from '../../hooks/LayoutMode.hook'

export const AppContainer = styled.div<{ layoutmode: LayoutMode }>`
  background: linear-gradient(135deg, rgba(54, 96, 205, 0.1), rgba(156, 58, 192, 0.1));
  min-height: 100vh;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

export const AppMainContent = styled.div<{ layoutmode: LayoutMode }>`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  margin-right: ${({ layoutmode }) => (layoutmode === 'tablet' ? 160 : 0)}px;
`
