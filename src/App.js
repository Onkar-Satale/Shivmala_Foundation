import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import AboutMembers from "./pages/AboutMembers";
import AboutVision from "./pages/AboutVision";
import AboutMission from "./pages/AboutMission";
import Initiatives from "./pages/Initiatives";
import Impact from "./pages/Impact";
import PhotoGallery from "./pages/PhotoGallery";
import VideoGallery from "./pages/VideoGallery";
import Contact from "./pages/Contact";
import Centers from "./pages/Centers";
import CenterDetail from "./pages/CenterDetail";
import Media from "./pages/Media";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/members" element={<AboutMembers />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/mission" element={<AboutMission />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<Navigate to="/gallery/photos/1" replace />} />
          <Route path="/gallery/photos" element={<Navigate to="/gallery/photos/1" replace />} />
          <Route path="/gallery/photos/:page" element={<PhotoGallery />} />
          <Route path="/gallery/videos" element={<Navigate to="/gallery/videos/1" replace />} />
          <Route path="/gallery/videos/:page" element={<VideoGallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/centers/:id" element={<CenterDetail />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
