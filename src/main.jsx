import { StrictMode } from 'react' // it mean Bring strict mode from the react library
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'//Bring my App components

createRoot(document.getElementById('root')).render(  // firts js found it document.getElementById("root") - it connect to index.html at div part 'root' and createRoot() - react creats a connection
  <StrictMode>
    <App />
  </StrictMode>,
)
