import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { supportedLocales } from './data/courseManifest';

const lazyNamedPage = (loader, exportName) =>
  lazy(() => loader().then((module) => ({ default: module[exportName] })));

const HomePage = lazyNamedPage(() => import('./pages/HomePage'), 'HomePage');
const SetupPage = lazyNamedPage(() => import('./pages/SetupPage'), 'SetupPage');
const ToolingPage = lazyNamedPage(() => import('./pages/ToolingPage'), 'ToolingPage');
const JsWarmupPage = lazyNamedPage(() => import('./pages/JsWarmupPage'), 'JsWarmupPage');
const ReactBasicsPage = lazyNamedPage(() => import('./pages/ReactBasicsPage'), 'ReactBasicsPage');
const EventsFormsPage = lazyNamedPage(() => import('./pages/EventsFormsPage'), 'EventsFormsPage');
const EffectsPage = lazyNamedPage(() => import('./pages/EffectsPage'), 'EffectsPage');
const RoutingPage = lazyNamedPage(() => import('./pages/RoutingPage'), 'RoutingPage');
const ContextSharedStatePage = lazyNamedPage(
  () => import('./pages/ContextSharedStatePage'),
  'ContextSharedStatePage',
);
const ProjectArchitecturePage = lazyNamedPage(
  () => import('./pages/ProjectArchitecturePage'),
  'ProjectArchitecturePage',
);
const TestingAccessibilityPage = lazyNamedPage(
  () => import('./pages/TestingAccessibilityPage'),
  'TestingAccessibilityPage',
);
const ProjectPage = lazyNamedPage(() => import('./pages/ProjectPage'), 'ProjectPage');
const NotFoundPage = lazyNamedPage(() => import('./pages/NotFoundPage'), 'NotFoundPage');

function PageLoadingFallback() {
  const { locale } = useParams();

  const message = locale === 'fa' ? 'در حال بارگذاری صفحه…' : 'Loading page…';

  return (
    <section
      aria-live="polite"
      aria-busy="true"
      role="status"
      style={{
        display: 'grid',
        minHeight: '40vh',
        placeItems: 'center',
        padding: '2rem',
      }}
    >
      <p style={{ margin: 0 }}>{message}</p>
    </section>
  );
}

function withPageSuspense(element) {
  return <Suspense fallback={<PageLoadingFallback />}>{element}</Suspense>;
}

function withShellSuspense(element) {
  return <Suspense fallback={<PageLoadingFallback />}>{element}</Suspense>;
}

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
        <Route element={withShellSuspense(<AppShell />)}>
          <Route index element={withPageSuspense(<HomePage />)} />
          <Route path="setup" element={withPageSuspense(<SetupPage />)} />
          <Route path="tooling" element={withPageSuspense(<ToolingPage />)} />
          <Route path="js" element={withPageSuspense(<JsWarmupPage />)} />
          <Route path="react" element={withPageSuspense(<ReactBasicsPage />)} />
          <Route path="events-forms" element={withPageSuspense(<EventsFormsPage />)} />
          <Route path="effects" element={withPageSuspense(<EffectsPage />)} />
          <Route path="routing" element={withPageSuspense(<RoutingPage />)} />
          <Route path="context-state" element={withPageSuspense(<ContextSharedStatePage />)} />
          <Route
            path="project-architecture"
            element={withPageSuspense(<ProjectArchitecturePage />)}
          />
          <Route
            path="testing-accessibility"
            element={withPageSuspense(<TestingAccessibilityPage />)}
          />
          <Route path="project" element={withPageSuspense(<ProjectPage />)} />
          <Route path="start" element={<Navigate to="setup" replace />} />
          <Route path="*" element={withPageSuspense(<NotFoundPage />)} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/fa" replace />} />
    </Routes>
  );
}
