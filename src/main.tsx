import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import './index.css'*/
import Practice from './Practice.tsx'
import App from './App.tsx'
import "./component/sample.tsx"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <App />*/}
    <Practice />
  
  </StrictMode>,
)
