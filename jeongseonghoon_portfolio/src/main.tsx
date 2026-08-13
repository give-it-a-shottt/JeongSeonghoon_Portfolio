import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter로 감싸야 App.tsx 안에서 Routes/Link 등 라우팅 기능을 쓸 수 있다 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
