import { useEffect, useState } from 'react'
import { useCountdownStore } from '../../hooks/TimeRemaining.hook'
import {
  EmbedButton,
  EmbedCheckboxContainer,
  EmbedCheckbox,
  EmbedCode,
  EmbedContainer,
  EmbedInputGroup,
  EmbedInputs,
  EmbedInput,
  EmbedInstructionsList,
  EmbedInstructions,
  EmbedInstructionsTitle,
  EmbedLabel,
  EmbedPreview,
  EmbedPreviewText,
  EmbedSection,
  EmbedSectionTitle,
  EmbedTitle
} from './EmbedPage.styles'
import { useSearchParams } from 'react-router-dom'
import { useLayoutStore } from '../../hooks/LayoutMode.hook'

export default function EmbedPage() {
  const [searchParams] = useSearchParams()
  const isEmbedMode = searchParams.has('showBackground')
  const hasTransparentBg = searchParams.get('showBackground') === 'true'
  const timings = useCountdownStore(s => s.timings)
  const layoutMode = useLayoutStore(s => s.layoutMode)
  const [width, setWidth] = useState(250)
  const [height, setHeight] = useState(150)
  const [showBg, setShowBg] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const id = setTimeout(() => setCopied(false), 3000)
    return () => clearTimeout(id)
  }, [copied])

  const generateEmbedCode = (): string => {
    return `<iframe src="${window.location.origin}/embed?showBackground=${showBg}" width="${width}" height="${height}" frameborder="0"></iframe>`
  }

  const copyEmbedCode = (): void => {
    navigator.clipboard.writeText(generateEmbedCode())
    setCopied(true)
  }

  const formatTimeForEmbed = (): string => {
    return timings.map(([unit, value]) => `${value}${unit.charAt(0)}`).join(' ')
  }

  useEffect(() => {
    console.log({ height, width })
  }, [height, width])

  if (isEmbedMode) {
    return (
      <>
        <title>Embed GTA 6 Countdown - For Streamers & OBS</title>
        <meta name='description' content='Embed GTA 6 countdown timer on your stream or website. Transparent background support for OBS overlays.' />
        <meta name='robots' content='index, follow' />

        <EmbedPreview showbackground={hasTransparentBg}>
          <EmbedPreviewText>{formatTimeForEmbed()}</EmbedPreviewText>
        </EmbedPreview>
      </>
    )
  }

  return (
    <EmbedContainer layoutmode={layoutMode}>
      <EmbedTitle>Embed Timer Configuration</EmbedTitle>

      <EmbedSection>
        <EmbedSectionTitle>Preview</EmbedSectionTitle>
        <EmbedPreview width={width} height={height} showbackground={showBg}>
          <EmbedPreviewText>{formatTimeForEmbed()}</EmbedPreviewText>
        </EmbedPreview>

        <EmbedInputs>
          <EmbedInputGroup>
            <EmbedLabel htmlFor='width'>Width (pixels)</EmbedLabel>
            <EmbedInput name='width' type='number' value={width} onChange={e => setWidth(+e.target.value)} />
          </EmbedInputGroup>
          <EmbedInputGroup>
            <EmbedLabel htmlFor='height'>Height (pixels)</EmbedLabel>
            <EmbedInput name='height' type='number' value={height} onChange={e => setHeight(+e.target.value)} />
          </EmbedInputGroup>
        </EmbedInputs>

        <EmbedCheckboxContainer>
          <EmbedCheckbox type='checkbox' id='showBackground' checked={showBg} onChange={e => setShowBg(e.target.checked)} />
          <EmbedLabel htmlFor='showBackground'>Show Background (for OBS overlays)</EmbedLabel>
        </EmbedCheckboxContainer>
      </EmbedSection>

      <EmbedSection>
        <EmbedSectionTitle>Embed Code</EmbedSectionTitle>
        <EmbedCode>{generateEmbedCode()}</EmbedCode>
        <EmbedButton onClick={copyEmbedCode}>{copied ? 'Copied' : 'Copy Embed Code'}</EmbedButton>
      </EmbedSection>

      <EmbedInstructions>
        <EmbedInstructionsTitle>Instructions for Streamers</EmbedInstructionsTitle>
        <EmbedInstructionsList>
          <li>Copy the embed code above</li>
          <li>In OBS, add a Browser Source</li>
          <li>Set the URL to the iframe src value</li>
          <li>Set width and height to match your settings</li>
          <li>Enable "Shutdown source when not visible" for performance</li>
        </EmbedInstructionsList>
      </EmbedInstructions>
    </EmbedContainer>
  )
}
