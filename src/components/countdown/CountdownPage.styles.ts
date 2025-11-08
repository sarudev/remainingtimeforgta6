import styled from 'styled-components'

export const CountdownNavLink = styled.nav`
  color: white;
  text-decoration: none;
  opacity: 0.8;
`

export const CountdownContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
`

export const CountdownTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
`

export const CountdownContainer = styled.div`
  background-color: rgba(92, 93, 206, 0.15);
  border: 1px solid rgba(92, 93, 206, 0.4);
  border-radius: 16px;
  padding: 50px 40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`

export const CountdownGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

export const CountdownTimeUnit = styled.div`
  text-align: center;
`

export const CountdownTimeValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
`

export const CountdownTimeLabel = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const CountdownProgressSection = styled.div`
  margin-bottom: 30px;
`

export const CountdownProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 8px;
`

export const CountdownProgressBarFill = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background: linear-gradient(to right, #e7407e, #ffd5b0);
  transition: width 0.3s ease;
`

export const CountdownProgressLabels = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`

export const CountdownProgressLabel = styled.span`
  opacity: 0.7;
`

export const CountdownTimeline = styled.div`
  font-size: 14px;
  opacity: 0.6;
  line-height: 1.8;
`

export const CountdownTimelineItem = styled.a`
  cursor: pointer;
  transition: opacity 0.2s;
  color: white;
  text-decoration: none;
  display: flex;
  opacity: 0.6;
  align-items: center;
  gap: 0.5rem;
`
