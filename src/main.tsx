import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import CommandPalette from '@/components/CommandPalette'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider>
      <BrowserRouter>
        <CommandPalette>
          <App />
        </CommandPalette>
      </BrowserRouter>
    </MDXProvider>
  </StrictMode>,
)
