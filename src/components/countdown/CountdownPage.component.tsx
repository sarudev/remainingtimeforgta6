import { ExternalLink } from 'react-feather'
import { useCountdownStore } from '../../hooks/TimeRemaining.hook'
import {
  CountdownContainer,
  CountdownContentWrapper,
  CountdownGrid,
  CountdownProgressBarContainer,
  CountdownProgressBarFill,
  CountdownProgressLabels,
  CountdownProgressSection,
  CountdownTimeLabel,
  CountdownTimeline,
  CountdownTimelineItem,
  CountdownTimeUnit,
  CountdownTimeValue,
  CountdownTitle
} from './CountdownPage.styles'
import { CountdownSEO } from './CountdownSEO.component'

interface News {
  text: string
  link: string
}

const news: News[] = [
  { text: '🏁 Current release date November 19, 2026', link: 'https://x.com/RockstarGames/status/1986540361011880167' },
  { text: '⚠️ Original release date May 26, 2026', link: 'https://x.com/RockstarGames/status/1731813331244085531' },
  { text: '▶️ Second trailer May 6, 2025', link: 'https://www.youtube.com/watch?v=VQRLujxTm3c' },
  { text: '📢 First trailer and announcement December 4, 2023', link: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }
]

export default function CountdownPage() {
  const { progress, timings } = useCountdownStore()

  return (
    <>
      <CountdownSEO />

      <CountdownContentWrapper>
        <CountdownTitle>Remaining time for GTA VI</CountdownTitle>

        <CountdownContainer>
          <CountdownGrid>
            {timings.map(([unit, value]) => (
              <CountdownTimeUnit key={unit}>
                <CountdownTimeValue>{value}</CountdownTimeValue>
                <CountdownTimeLabel>{unit}</CountdownTimeLabel>
              </CountdownTimeUnit>
            ))}
          </CountdownGrid>
        </CountdownContainer>

        <CountdownProgressSection>
          <CountdownProgressBarContainer>
            <CountdownProgressBarFill progress={progress} />
          </CountdownProgressBarContainer>
          <CountdownProgressLabels>
            <CountdownProgressLabels>Progress since 1st trailer</CountdownProgressLabels>
            <CountdownProgressLabels>{progress.toFixed(2)}%</CountdownProgressLabels>
          </CountdownProgressLabels>
        </CountdownProgressSection>

        <CountdownTimeline>
          {news.map(n => (
            <CountdownTimelineItem
              key={n.link}
              href={n.link}
              target='_blank'
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              {n.text} <ExternalLink style={{ width: 12, height: 12 }} />
            </CountdownTimelineItem>
          ))}
        </CountdownTimeline>
      </CountdownContentWrapper>
    </>
  )
}
