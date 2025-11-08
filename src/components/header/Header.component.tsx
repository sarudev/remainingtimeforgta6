import { useLocation } from 'react-router-dom'
import type { LayoutMode } from '../../hooks/LayoutMode.hook'
import { HeaderContent, HeaderStyled as HeaderStyled, HeaderLogo, HeaderNav, HeaderNavLink } from './Header.styles'

interface HeaderLink {
  text: string
  path: string
  newTab?: boolean
}

const headerLinks: HeaderLink[] = [
  {
    text: 'countdown',
    path: '/'
  },
  {
    text: 'embed',
    path: '/embed'
  },
  {
    text: 'twitter',
    path: 'https://x.com/topsarudev',
    newTab: true
  },
  {
    text: 'about',
    path: 'https://me.sarudev.com.ar',
    newTab: true
  }
]

interface HeaderProps {
  layoutMode: LayoutMode
}

export default function Header({ layoutMode }: HeaderProps) {
  const location = useLocation()

  return (
    <HeaderStyled layoutmode={layoutMode}>
      <HeaderContent>
        <HeaderLogo to='/'>TimeTill6</HeaderLogo>
        <HeaderNav>
          {headerLinks
            .filter(l => l.path !== location.pathname)
            .map(l => (
              <HeaderNavLink key={l.path} to={l.path} target={l.newTab ? '_blank' : '_self'}>
                {l.text}
              </HeaderNavLink>
            ))}
        </HeaderNav>
      </HeaderContent>
    </HeaderStyled>
  )
}
