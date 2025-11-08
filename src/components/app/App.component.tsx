import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { useLayoutEffect, useLayoutStore } from '../../hooks/LayoutMode.hook'
import { useCountdownEffect } from '../../hooks/TimeRemaining.hook'
import AdSpaceComponent from '../ad-space/AdSpace.component'
import CountdownPage from '../countdown/CountdownPage.component'
import EmbedPage from '../embed/EmbedPage.component'
import Header from '../header/Header.component'
import { AppContainer, AppMainContent } from './App.styles'
import { useEffect } from 'react'

export default function App() {
  useLayoutEffect()
  useCountdownEffect({
    startDate: '2023-12-04T15:00:00',
    endDate: '2026-11-19T15:00:00'
  })
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const layoutMode = useLayoutStore(s => s.layoutMode)
  const isEmbedMode = location.pathname === '/embed' && searchParams.has('showBackground')

  useEffect(() => {
    if (!isEmbedMode) document.body.style.backgroundColor = '#242424'
  }, [isEmbedMode])

  if (isEmbedMode) {
    return <EmbedPage />
  }

  return (
    <AppContainer layoutmode={layoutMode}>
      <Header layoutMode={layoutMode} />

      <AppMainContent layoutmode={layoutMode}>
        <AdSpaceComponent show={layoutMode === 'desktop'} side='left' />

        <Routes>
          <Route path='/' element={<CountdownPage />} />
          <Route path='/embed' element={<EmbedPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

        <AdSpaceComponent show={layoutMode === 'desktop' || layoutMode === 'tablet'} side='right' />
      </AppMainContent>

      <AdSpaceComponent show={layoutMode !== 'desktop'} side='bottom' />
    </AppContainer>
  )
}
