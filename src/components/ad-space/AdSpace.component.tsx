import { useEffect, useRef } from 'react'
import { AdSpaceBottom, AdSpaceLeft, AdSpaceRight } from './AdSpace.styles'

interface AdSpaceProps {
  side: 'left' | 'right' | 'bottom'
  show: boolean
}

export default function AdSpaceComponent({ side, show }: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (show) {
      try {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [show])

  if (!show) return null

  const Wrapper = side === 'left' ? AdSpaceLeft : side === 'right' ? AdSpaceRight : AdSpaceBottom

  const adSlots = {
    left: '1111111111',
    right: '2222222222',
    bottom: '3333333333'
  }

  const adFormat = side === 'bottom' ? 'horizontal' : 'vertical'

  return (
    <Wrapper ref={adRef}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-1704513678032607'
        data-ad-slot={adSlots[side]}
        data-ad-format={adFormat}
        data-full-width-responsive='true'
      />
    </Wrapper>
  )
}
