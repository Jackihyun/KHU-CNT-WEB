import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import DesignerPage from './pages/DesignerPage';
import PhotoPage from './pages/PhotoPage';
import WhiteprojectPage from './pages/WhiteprojectPage';
import AboutMenuStage from './components/AboutMenuStage';
import AboutMenuThanks from './components/AboutMenuThanks';
import AboutMenuPartner from './components/AboutMenuPartner';
import TeamIntro from './pages/TeamIntroPage';
import Invite from './pages/InvitationPage';
import ScrollToTop from './components/ScrollToTop';
// import PageTransition from './components/PageTransition';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<AboutPage />}>
          <Route path="/about/stage" element={<AboutMenuStage />} />
          <Route path="/about/thanksto" element={<AboutMenuThanks />} />
          <Route path="/about/partner" element={<AboutMenuPartner />} />
        </Route>

        <Route path="/archive" element={<ArchivePage />} />
        <Route path='/designer' element={<DesignerPage />} />
        <Route path='/photo' element={<PhotoPage />} />
        <Route path='/whiteproj.' element={<WhiteprojectPage />} />
        <Route path='/teams/:teamId' element={<TeamIntro />} />
        <Route path='/invite/' element={<Invite />} />
      </Routes>
    </Router >
  );
}

export default App;

