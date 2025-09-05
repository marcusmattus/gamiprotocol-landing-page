import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

// Now restore the full app with proper error handling
console.log('Restoring full app with Privy error handling...')

// Add error boundary for Privy issues
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error Boundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif'
        }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔧 Gami Protocol</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
              Privy Integration Error
            </h2>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)', 
              padding: '20px', 
              borderRadius: '10px',
              marginBottom: '20px',
              textAlign: 'left'
            }}>
              <strong>Error:</strong> {this.state.error?.message}
            </div>
            <button 
              onClick={() => window.location.reload()} 
              style={{
                padding: '12px 24px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Reload App
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

try {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ErrorBoundary>
        <Toaster position="top-right" />
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
  console.log('Full app render successful')
} catch (error) {
  console.error('Full app render failed:', error)
} 