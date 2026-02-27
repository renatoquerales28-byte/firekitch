import './App.css'

function App() {
  return (
    <main className="app-container">
      <div className="background-glow"></div>

      {/* Background Logo */}
      <div className="logo-background">
        <img
          src="/Firekitch-Logo.svg"
          alt="Firekitch Background"
          className="firekitch-logo-bg"
        />
      </div>

      {/* Foreground Content (Full Screen Modal) */}
      <div className="content-container">
        {/* Empty top to keep space clear for the logo */}
        <div className="top-section"></div>

        <div className="bottom-section">
          <p className="construction-subtitle">Estamos cocinando algo increíble.</p>
          <div className="loading-bar-container">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
