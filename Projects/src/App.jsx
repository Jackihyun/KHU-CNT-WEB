import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArchivePage from "./pages/ArchivePage";
import DesignerPage from "./pages/DesignerPage";
import PhotoPage from "./pages/PhotoPage";
import WhiteprojectPage from "./pages/WhiteprojectPage";
import TeamIntro from "./pages/TeamIntroPage";
import Invite from "./pages/InvitationPage";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Analytics } from "@vercel/analytics/react";
import DesignerDetailPage from "./pages/DesignerDetailPage";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div>
        <Header />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={250}
            classNames="fade"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/designer" element={<DesignerPage />} />
              <Route path="/designer/:name" element={<DesignerDetailPage />} />
              <Route path="/photo" element={<PhotoPage />} />
              <Route path="/whiteproj." element={<WhiteprojectPage />} />
              <Route path="/teams/:teamId" element={<TeamIntro />} />
              <Route path="/invite" element={<Invite />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
        <Analytics />
      </div>
    </>
  );
}

export default App;
