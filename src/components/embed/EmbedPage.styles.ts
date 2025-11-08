import styled, { css } from 'styled-components'
import type { LayoutMode } from '../../hooks/LayoutMode.hook'

export const EmbedContainer = styled.div<{ layoutmode: LayoutMode }>`
  max-width: 600px;
  padding: 0 0 ${({ layoutmode }) => (layoutmode !== 'desktop' ? 80 : 0)}px 0;
  width: 100%;
`

export const EmbedTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 0;
  text-align: center;
`

export const EmbedSection = styled.div`
  background-color: #ffffff0d;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`

export const EmbedSectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  opacity: 0.8;
`

interface EmbedPreviewNotSizeProps {
  width?: never
  height?: never
}

interface EmbedPreviewSizeProps {
  width: string | number
  height: string | number
}

type EmbedPreviewProps = (EmbedPreviewNotSizeProps | EmbedPreviewSizeProps) & {
  showbackground?: boolean
}

export const EmbedPreview = styled.div<EmbedPreviewProps>`
  background-color: ${({ showbackground = true }) => (showbackground ? 'rgba(92, 93, 206, 0.15)' : 'transparent')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 1rem;

  ${({ width, height }) =>
    width && height
      ? css`
          width: ${typeof width === 'number' ? `${width}px` : width};
          height: ${typeof height === 'number' ? `${height}px` : height};
          margin-bottom: 30px;
        `
      : css`
          width: 100%;
          height: 100%;
        `}
`

export const EmbedPreviewText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
`

export const EmbedInputs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

export const EmbedInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`

export const EmbedLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  opacity: 0.8;
`

export const EmbedInput = styled.input`
  background-color: #00004d30;
  border: 1px solid #ffffff1a;
  border-radius: 6px;
  padding: 10px 15px;
  color: white;
  font-size: 16px;
  outline: none;
`

export const EmbedCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

export const EmbedCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

export const EmbedCode = styled.div`
  background-color: #00000066;
  border: 1px solid #ffffff1a;
  border-radius: 8px;
  padding: 15px;
  font-family: monospace;
  font-size: 13px;
  color: #4ade80;
  overflow-x: auto;
  white-space: pre;
  margin-bottom: 15px;
`

export const EmbedButton = styled.button`
  background-color: #5c5dce;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

export const EmbedInstructions = styled.div`
  background-color: #ffc1071a;
  border: 1px solid #ffc1074d;
  border-radius: 12px;
  padding: 20px;
`

export const EmbedInstructionsTitle = styled.div`
  color: #ffc107;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`

export const EmbedInstructionsList = styled.ul`
  font-size: 14px;
  line-height: 1.8;
  opacity: 0.9;
  padding-left: 20px;
`
