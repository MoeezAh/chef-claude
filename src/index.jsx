import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'

// Ensure compatibility with Vite's environment variables
const huggingFaceToken = import.meta.env.VITE_HUGGING_FACE_TOKEN;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

console.log(huggingFaceToken); // Example usage of the token
