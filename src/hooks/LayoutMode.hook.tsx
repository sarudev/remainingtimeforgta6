import { useEffect } from 'react'
import { create } from 'zustand'

export type LayoutMode = 'desktop' | 'tablet' | 'mobile'

interface LayoutState {
  layoutMode: LayoutMode
  checkWidth: () => void
}

export function useLayoutEffect() {
  const checkWidth = useLayoutStore(state => state.checkWidth)

  useEffect(() => {
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [checkWidth])
}

export const useLayoutStore = create<LayoutState>(set => ({
  layoutMode: 'desktop',
  checkWidth: () => {
    const adSpaceWidth = 160
    const contentWidth = 800
    const padding = 20
    const desktopMin = adSpaceWidth * 2 + contentWidth + padding * 2
    const tabletMin = adSpaceWidth + contentWidth + padding * 2
    const width = window.innerWidth

    let layoutMode: LayoutMode
    if (width >= desktopMin) layoutMode = 'desktop'
    else if (width >= tabletMin) layoutMode = 'tablet'
    else layoutMode = 'mobile'

    set({ layoutMode })
  }
}))
