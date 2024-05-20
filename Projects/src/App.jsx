import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import DesignerPage from './pages/DesignerPage';
import PhotoPage from './pages/PhotoPage';
import WhiteprojectPage from './pages/WhiteprojectPage';
import TeamIntro from './pages/TeamIntroPage';
import Invite from './pages/InvitationPage';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function App() {
  const location = useLocation();

  const routesData = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/archive',
      element: <ArchivePage />,
    },
    {
      path: '/designer',
      element: <DesignerPage />,
    },
    {
      path: '/photo',
      element: <PhotoPage />,
    },
    {
      path: '/whiteproj.',
      element: <WhiteprojectPage />,
    },
    {
      path: '/teams/:teamId',
      element: <TeamIntro />,
    },
    {
      path: '/invite',
      element: <Invite />,
    },
  ]

  const statefulRoutes = useRoutes(routesData)

  return (
    <>
      <ScrollToTop />
      <div>
        <Header />
        <SwitchTransition >
          <CSSTransition
            key={location.pathname}
            timeout={250}
            classNames="fade"
          >
            {statefulRoutes}
          </CSSTransition>
        </SwitchTransition>

      </div>
    </>
  );
}

export default App;