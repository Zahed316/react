import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { HomePage } from './pages/HomePage';
import { SetupPage } from './pages/SetupPage';
import { ToolingPage } from './pages/ToolingPage';
import { JsWarmupPage } from './pages/JsWarmupPage';
import { ReactBasicsPage } from './pages/ReactBasicsPage';
import { EffectsPage } from './pages/EffectsPage';
import { ProjectPage } from './pages/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { supportedLocales } from './data/courseManifest';

function LocaleRouteGuard() {
  const { locale } = useParams();

  if (!supportedLocales.includes(locale)) {
    return <Navigate to="/fa" replace />;
  }

  return <Outlet />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/fa" replace />} />
      <Route path=":locale" element={<LocaleRouteGuard />}>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="setup" element={<SetupPage />} />
          <Route path="tooling" element={<ToolingPage />} />
          <Route path="js" element={<JsWarmupPage />} />
          <Route path="react" element={<ReactBasicsPage />} />
          <Route path="effects" element={<EffectsPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="start" element={<Navigate to="setup" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/fa" replace />} />
    </Routes>
  );
}