import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import DesignerPage from './pages/DesignerPage';
import PhotoPage from './pages/PhotoPage';
import WhiteprojectPage from './pages/WhiteprojectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/archive" element={<ArchivePage />} />

        <Route path='/designer' element={<DesignerPage />} />

        <Route path='/photo' element={<PhotoPage />} />

        <Route path='/whiteproj.' element={<WhiteprojectPage />} />
      </Routes>
    </Router >
  );
}

export default App;