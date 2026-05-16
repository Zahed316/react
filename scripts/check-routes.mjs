import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  homeQuestManifest,
  moduleManifest,
  navigationItems,
  supportedLocales,
  taskCategoryIds,
} from '../src/data/courseManifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const errors = [];
const warnings = [];
const notes = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function note(message) {
  notes.push(message);
}

function ensure(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function ensureStringPath(value, label) {
  ensure(typeof value === 'string', `${label} must be a string.`);
  ensure(value !== '', `${label} must not be empty.`);
  ensure(value !== 'undefined', `${label} must not be the string "undefined".`);
  ensure(value !== 'null', `${label} must not be the string "null".`);
}

function isValidLocalizedRoute(target, bareRoutePaths) {
  const localePattern = supportedLocales.join('|');
  const match = target.match(new RegExp(`^/(${localePattern})(/.*)?$`));

  if (!match) {
    return false;
  }

  const suffix = match[2] ?? '';
  const normalizedSuffix = suffix === '' ? '/' : suffix;
  return bareRoutePaths.has(normalizedSuffix);
}

function isValidLinkTarget(target, bareRoutePaths) {
  if (target === '*' || target === '#quests') {
    return true;
  }

  if (target.startsWith('http://') || target.startsWith('https://')) {
    return true;
  }

  if (target.startsWith('/')) {
    return bareRoutePaths.has(target) || isValidLocalizedRoute(target, bareRoutePaths);
  }

  return bareRoutePaths.has(`/${target}`);
}

async function getSourceFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getSourceFiles(fullPath)));
      continue;
    }

    if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const appPath = path.join(repoRoot, 'src', 'App.jsx');
  const routeAuditPath = path.join(repoRoot, 'ROUTE_LINK_AUDIT.md');
  const appSource = await readFile(appPath, 'utf8');
  const routeAudit = await readFile(routeAuditPath, 'utf8');

  const routeMatches = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1]);
  const nestedBareRoutes = routeMatches
    .filter((routePath) => routePath !== '/' && routePath !== '*' && !routePath.startsWith(':'))
    .map((routePath) => `/${routePath}`);
  const bareRoutePaths = new Set(['/', ...nestedBareRoutes]);
  const moduleIds = new Set(moduleManifest.map((module) => module.id));
  const modulePaths = new Set(moduleManifest.map((module) => module.path));

  note(
    `Checked ${moduleManifest.length} module routes and ${navigationItems.length} navigation items.`,
  );

  const seenModuleIds = new Set();
  const seenModulePaths = new Set();
  for (const module of moduleManifest) {
    ensure(
      typeof module.id === 'string' && module.id !== '',
      'moduleManifest entries need a non-empty id.',
    );
    ensure(!seenModuleIds.has(module.id), `Duplicate module id found: "${module.id}".`);
    seenModuleIds.add(module.id);

    ensureStringPath(module.path, `moduleManifest["${module.id}"].path`);
    ensure(module.path.startsWith('/'), `moduleManifest["${module.id}"].path must start with "/".`);
    ensure(!seenModulePaths.has(module.path), `Duplicate module path found: "${module.path}".`);
    seenModulePaths.add(module.path);
    ensure(
      bareRoutePaths.has(module.path),
      `moduleManifest["${module.id}"].path points to a route not defined in App.jsx: "${module.path}".`,
    );

    if (module.nextId !== null) {
      ensure(
        moduleIds.has(module.nextId),
        `moduleManifest["${module.id}"].nextId points to a missing module: "${module.nextId}".`,
      );
    }
  }

  const seenNavIds = new Set();
  for (const item of navigationItems) {
    ensure(
      typeof item.id === 'string' && item.id !== '',
      'navigationItems entries need a non-empty id.',
    );
    ensure(!seenNavIds.has(item.id), `Duplicate navigation id found: "${item.id}".`);
    seenNavIds.add(item.id);

    ensureStringPath(item.path, `navigationItems["${item.id}"].path`);
    ensure(item.path.startsWith('/'), `navigationItems["${item.id}"].path must start with "/".`);
    ensure(
      bareRoutePaths.has(item.path),
      `navigationItems["${item.id}"].path points to a route not defined in App.jsx: "${item.path}".`,
    );

    if (item.id !== 'home') {
      ensure(
        moduleIds.has(item.id),
        `navigationItems contains a non-home id with no module: "${item.id}".`,
      );
      const matchingModule = moduleManifest.find((module) => module.id === item.id);
      ensure(
        matchingModule?.path === item.path,
        `navigationItems["${item.id}"].path does not match moduleManifest: "${item.path}".`,
      );
    }
  }

  for (const quest of homeQuestManifest) {
    ensure(
      moduleIds.has(quest.moduleId),
      `homeQuestManifest["${quest.id}"] points to a missing moduleId: "${quest.moduleId}".`,
    );
  }

  for (const locale of supportedLocales) {
    for (const barePath of bareRoutePaths) {
      const localizedTarget = barePath === '/' ? `/${locale}` : `/${locale}${barePath}`;
      ensure(
        isValidLocalizedRoute(localizedTarget, bareRoutePaths),
        `Localized route generation failed for locale "${locale}" and path "${barePath}".`,
      );
    }
  }

  for (const categoryId of taskCategoryIds) {
    if (moduleIds.has(categoryId)) {
      continue;
    }

    const documentedInAudit =
      routeAudit.includes(`\`${categoryId}\``) &&
      (routeAudit.includes('task category') || routeAudit.includes('module or route'));

    ensure(
      documentedInAudit,
      `taskCategoryIds includes "${categoryId}" but ROUTE_LINK_AUDIT.md does not document it as a non-route concept.`,
    );
    note(`Documented conceptual category (not a route): ${categoryId}`);
  }

  const srcFiles = await getSourceFiles(path.join(repoRoot, 'src'));
  const literalPattern =
    /localizedPath\([^,]+,\s*['"]([^'"]+)['"]\)|<Navigate[^>]*\sto=['"]([^'"]+)['"]|(?:\s|^)to=['"]([^'"]+)['"]|href=['"]([^'"]+)['"]/g;

  for (const filePath of srcFiles) {
    const source = await readFile(filePath, 'utf8');
    let match;

    while ((match = literalPattern.exec(source))) {
      const target = match[1] ?? match[2] ?? match[3] ?? match[4];

      if (!target) {
        continue;
      }

      ensureStringPath(target, `${path.relative(repoRoot, filePath)} navigation target`);
      ensure(
        isValidLinkTarget(target, bareRoutePaths),
        `Invalid route-like target "${target}" found in ${path.relative(repoRoot, filePath)}.`,
      );
    }
  }

  if (warnings.length > 0) {
    console.log('Route check warnings:');
    for (const message of warnings) {
      console.log(`- ${message}`);
    }
    console.log('');
  }

  if (notes.length > 0) {
    console.log('Route check notes:');
    for (const message of notes) {
      console.log(`- ${message}`);
    }
    console.log('');
  }

  if (errors.length > 0) {
    console.error('Route check failed:');
    for (const message of errors) {
      console.error(`- ${message}`);
    }
    process.exit(1);
  }

  console.log('Route check passed.');
}

await main();
