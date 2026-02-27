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

      {/* Foreground Content */}
      <div className="content-container">
        <h1 className="construction-title">En Construcción</h1>
        <p className="construction-subtitle">Estamos cocinando algo increíble.</p>
        <div className="loading-bar-container">
          <div className="loading-progress"></div>
        </div>
      </div>
    </main>
  )
}

export default App
