import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sauveteurs" element={<SauveteursPage />} />
        <Route path="/sorties" element={<SortiesPage />} />
        <Route path="/stations" element={<StationsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/moyens-maritimes" element={<MoyensMaritimesPage />} />
        <Route path="/techniques" element={<TechniquesPage />} />
        <Route path="/historique" element={<HistoriquePage />} />
        <Route path="/complements" element={<ComplementsPage />} />
        <Route path="/estaminet" element={<EstaminetPage />} />
        <Route path="/qui-sommes-nous" element={<WhoPage />} />
        <Route path="/presse" element={<PressePage />} />
        <Route path="/sites-amis" element={<SitesAmisPage />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App;
