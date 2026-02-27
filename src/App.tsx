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
        <div className="top-section">
          <h1 className="construction-title">En Construcción</h1>
          <p className="construction-subtitle">Estamos cocinando algo increíble.</p>
        </div>

        <div className="bottom-section">
          <div className="loading-bar-container">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
