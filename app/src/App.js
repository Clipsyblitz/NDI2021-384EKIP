import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import SauveteursPage from "./components/SauveteurPages"
import SortiesPage from "./components/SortiesPage"
import StationsPage from "./components/StationsPage"
import MoyensMaritimesPage from "./components/MoyensMaritimesPage"
import TechniquesPage from "./components/TechniquesPage"
import HistoriquePage from "./components/HistoriquePage"
import ComplementsPage from "./components/ComplementsPage"
import EstaminetPage from "./components/EstaminetPage"
import ServicesPage from "./components/ServicesPage"


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
        {/* <Route path="/qui-sommes-nous" element={<WhoPage />} />
        <Route path="/presse" element={<PressePage />} />
        <Route path="/sites-amis" element={<SitesAmisPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
