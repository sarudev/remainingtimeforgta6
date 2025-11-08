import styled from 'styled-components'

const base = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0.3;
`

const baseHorizontal = styled(base)`
  width: 160px;
  height: 600px;
  top: 50%;
  transform: translateY(-50%);
`

export const AdSpaceLeft = styled(baseHorizontal)`
  left: 0;
`

export const AdSpaceRight = styled(baseHorizontal)`
  right: 0;
`

export const AdSpaceBottom = styled(base)`
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`
