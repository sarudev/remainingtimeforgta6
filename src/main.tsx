import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App.component'
import { StyleSheetManager } from 'styled-components'
import isValidProp from '@emotion/is-prop-valid'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={propName => isValidProp(propName)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleSheetManager>
  </StrictMode>
)
