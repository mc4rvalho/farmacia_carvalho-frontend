import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/footer/Footer"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./pages/home/Home"

export function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]"></div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}
