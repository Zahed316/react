export const courseEn = {
  navigation: {
    home: 'Home',
    setup: 'Start',
    tooling: 'Tools',
    js: 'JavaScript',
    react: 'JSX & State',
    'events-forms': 'Events & Forms',
    effects: 'useEffect',
    routing: 'Routing',
    'context-state': 'Context & Shared State',
    'project-architecture': 'Project Architecture',
    project: 'Project',
  },
  home: {
    hero: {
      eyebrow: 'Interactive React coach',
      title: 'Learn React with live practice, quests, and small wins',
      lead: 'This lab is built for hands-on learning: start with setup and tools, then move into JavaScript, JSX, state, useEffect, and finally the project. Every step has a question, a live exercise, and a reward.',
      primaryAction: 'Start from {stage}',
      secondaryAction: 'View quests',
    },
    sessionFlow: [
      {
        title: 'Prereqs and tools',
        description:
          'We prepare the environment first so setup friction does not slow the rest down.',
      },
      {
        title: 'A short question',
        description: 'After each concept, we make a tiny guess so the brain stays engaged.',
      },
      {
        title: 'Live change',
        description: 'We watch React behave in the browser while tweaking controls on the page.',
      },
      {
        title: 'Real usage',
        description: 'At the end, the same idea is used inside a real feature.',
      },
    ],
    quests: {
      setup: {
        title: 'Prepare the environment',
        description: 'Complete the setup checklist and get familiar with the core tools.',
      },
      tooling: {
        title: 'Learn the tools',
        description: 'Review npm, pnpm, Vite, ESLint, and Prettier.',
      },
      quiz: {
        title: 'Solve 2 quick questions',
        description: 'Answer at least two quizzes correctly to build momentum.',
      },
      project: {
        title: 'Finish the final project',
        description: 'Complete the Task Manager and build a small real app.',
      },
    },
    summaryLabels: {
      modules: 'Modules complete',
      quizzes: 'Solved quizzes',
      badges: 'Badges unlocked',
      progress: 'Status',
    },
    moduleIntro: {
      eyebrow: 'Learning path',
      title: 'What does each lesson do?',
      lead: 'Each module is a small milestone that moves you closer to shipping a React app.',
    },
    coachNote: {
      eyebrow: 'Reminder',
      title: 'Do not memorize it, watch it behave',
      body: 'We learn React by watching components, changing state, and following data flow. If something feels fuzzy, we debug it right there.',
      asideTitle: 'Suggested start',
      asideBody: 'If you are new, start with setup and then look at tooling.',
    },
  },
  modules: {
    setup: {
      stageLabel: 'Step 0',
      title: 'Prepare the learning environment',
      hero: {
        eyebrow: 'Step 0',
        title: 'Prepare the learning environment',
        lead: 'Before starting React, let’s set up the environment properly: browser, editor, Git, Node.js, npm, and React Developer Tools.',
        primaryAction: 'Mark readiness and continue',
        secondaryAction: 'Go to tools',
      },
      summary: {
        intro:
          'If these prerequisites are ready, the rest of the path stays focused on learning instead of setup friction.',
        points: ['browser + DevTools', 'editor + lint hints', 'Git + Node + npm'],
      },
      live: {
        eyebrow: 'Live checklist',
        title: 'What do you need to start?',
        lead: 'Tick each item as soon as it is ready.',
        storyTitle: 'Why these matter',
        story: [
          {
            title: 'Browser + DevTools',
            description:
              'You see the result, inspect the DOM and component tree, and debug the UI.',
          },
          {
            title: 'Editor + ESLint/Prettier',
            description:
              'Keeps code readable, predictable, and less error-prone for faster feedback.',
          },
          {
            title: 'Git + Node + npm',
            description:
              'Git gives checkpoints, while Node/npm install React tools and run scripts.',
          },
        ],
        commands: [
          { label: 'Quick start', code: 'npm create vite@latest . -- --template react' },
          { label: 'Install dependencies', code: 'npm install' },
          { label: 'Run the dev server', code: 'npm run dev' },
        ],
      },
      checklist: {
        browser: {
          title: 'Modern browser',
          summary: 'Chrome or Firefox is required for the app and DevTools.',
          hint: 'We will install React Developer Tools on this browser later.',
        },
        editor: {
          title: 'Code editor',
          summary: 'VS Code or a similar editor for writing JSX and seeing lint hints.',
          hint: 'Keep ESLint and Prettier extensions active.',
        },
        git: {
          title: 'Git',
          summary: 'Useful for checkpoints and rolling back to earlier versions.',
          hint: 'You should know `git init`, `git status`, and `git commit`.',
        },
        node: {
          title: 'Node.js',
          summary: 'Runs JavaScript outside the browser and includes npm.',
          hint: 'React tooling depends on Node.',
        },
        npm: {
          title: 'npm',
          summary: 'Node’s default package manager for installing packages and running scripts.',
          hint: 'This is the default path for this lab.',
        },
        devtools: {
          title: 'React Developer Tools',
          summary: 'Used to inspect component tree, props, and state in the browser.',
          hint: 'Debugging React becomes much clearer after installing it.',
        },
      },
      quizTitle: 'Warm-up quizzes',
      tips: [
        'When a tool is unfamiliar, learn its role first and the details second.',
        'At the start, a correctly configured environment matters more than memorizing commands.',
      ],
    },
    tooling: {
      stageLabel: 'Step 0.5',
      title: 'npm, pnpm, Vite, ESLint, and Prettier',
      hero: {
        eyebrow: 'Step 0.5',
        title: 'npm, pnpm, Vite, ESLint, and Prettier',
        lead: 'This lesson goes beyond names and commands: we explain why each tool exists, how it works behind the scenes, and how teams actually use it in React projects.',
        primaryAction: 'Mark the tools as learned',
        secondaryAction: 'Go to JavaScript',
      },
      summary: {
        intro:
          'Good tools reduce friction, surface mistakes earlier, and make collaboration predictable. Here we treat them as part of the product workflow, not just setup trivia.',
        points: ['npm and pnpm', 'Vite for the dev server', 'ESLint and Prettier for quality'],
        story: [
          {
            title: 'npm',
            description:
              'A package manager, script runner, and the default entry point for most JavaScript tutorials and many production apps.',
          },
          {
            title: 'pnpm',
            description:
              'A package manager with the same core job as npm, but with a storage model optimized for speed and disk efficiency.',
          },
          {
            title: 'Vite',
            description:
              'A development server and build pipeline that keeps feedback fast while you are editing React code.',
          },
          {
            title: 'ESLint + Prettier',
            description:
              'One checks code against rules and likely mistakes, while the other keeps formatting consistent across the team.',
          },
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'What each tool is really doing',
        lead: 'Pick one tool and study it in the same structure: definition, purpose, internal mechanics, simulation, example, mistakes, and real usage.',
        chooserLabel: 'Choose a tool to inspect',
        commandEyebrow: 'Command flow',
        commandTitle: 'How the commands fit together',
        commandLead:
          'The commands below are the practical layer. Use them after you understand what each tool is responsible for.',
        comparisonEyebrow: 'Package managers',
        comparisonTitle: 'npm vs pnpm',
        sections: {
          definition: '1. Simple definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works',
          simulation: '5. Step-by-step simulation',
          example: '6. Practical code example',
          beforeAfter: '7. Before/after comparison',
          mistakes: '8. Common beginner mistakes',
          usage: '9. Real project usage',
          practice: '10. Mini practice or quiz',
          summary: '11. Simple summary',
        },
        practiceQuestion: 'Prediction question',
        practiceTask: 'Tiny practice',
        beforeLabel: 'Before',
        afterLabel: 'After',
        simulationIntro: 'Behind the scenes',
      },
      live: {
        eyebrow: 'Tools',
        title: 'What does each tool do?',
        lead: 'Switch tools and commands to connect the theory to the daily workflow.',
        whyLabel: 'Why it matters',
        noteLabel: 'One-line takeaway',
      },
      tools: {
        npm: {
          title: 'npm',
          badge: 'Default',
          accent: '#d97706',
          summary:
            'Node’s official package manager for installing dependencies and running scripts.',
          why: 'If you have Node, npm is already there, so it removes one extra setup decision.',
          command: 'npm install',
          note: 'npm is the front door to packages and scripts in many JavaScript projects.',
          whyExists:
            'JavaScript projects needed a standard way to share code, version dependencies, and run repeatable tasks like build, test, and dev server startup.',
          problem:
            'Without a package manager, teams would manually download libraries, track versions by hand, and remember long commands separately on each machine.',
          howItWorks: [
            '`package.json` lists your project metadata, scripts, and dependencies. npm reads that file to understand what packages and commands the project expects.',
            'When you run `npm install`, npm resolves package versions, downloads them from the registry, and writes a lockfile so the install is repeatable.',
            'When you run `npm run dev`, npm does not invent the command. It looks inside the `scripts` field in `package.json` and executes the matching entry.',
          ],
          simulation: [
            {
              title: 'You clone a React project',
              body: 'At first, the repository only contains source code and metadata like `package.json` and `package-lock.json`. The actual libraries are not installed yet.',
            },
            {
              title: 'You run `npm install`',
              body: 'npm reads dependency names and versions, checks the lockfile, downloads package archives, and places usable package files into `node_modules`.',
            },
            {
              title: 'npm records the result',
              body: 'If dependency resolution changes, npm updates the lockfile so another developer can reproduce the same install later.',
            },
            {
              title: 'You run `npm run dev`',
              body: 'npm looks for the `dev` script in `package.json`, then launches the underlying command, which is usually `vite` in this project.',
            },
          ],
          example: {
            title: 'A minimal package.json workflow',
            code: `{
  "name": "react-learning-sandbox",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint ."
  }
}`,
            explanation:
              'This file tells npm which project scripts exist. npm is the runner; Vite and ESLint are the actual tools behind those script names.',
          },
          comparison: {
            before: `# Before a package manager
download a library zip
copy files into the project
hope the version matches the tutorial
remember custom commands manually`,
            after: `# With npm
npm install
npm run dev
npm run lint
npm run build`,
            takeaway:
              'The improvement is not only speed. It is repeatability. Everyone on the team runs the same commands against the same declared dependencies.',
          },
          mistakes: [
            'Thinking npm is the same thing as Node. Node is the runtime; npm is the package manager and script runner that ships with it.',
            'Thinking `npm run dev` is a built-in universal command. It only works when the project defines a `dev` script in `package.json`.',
            'Editing dependencies manually without reinstalling and then wondering why the project behavior did not change locally.',
          ],
          realUsage: [
            'Installing React libraries such as router, i18n, or test tools.',
            'Running team-standard scripts in local development, CI, and release pipelines.',
            'Pinning dependency versions so a project behaves the same across machines.',
          ],
          practice: {
            question:
              'If `npm run dev` fails with “missing script: dev”, what should you inspect first?',
            task: 'Open `package.json`, find the `scripts` object, and explain which tool actually starts the dev server in this repo.',
          },
          summaryPoints: [
            'npm installs packages and runs named project scripts.',
            '`package.json` is the contract npm reads.',
            'A package manager helps projects stay repeatable across developers and CI.',
          ],
        },
        pnpm: {
          title: 'pnpm',
          badge: 'Optional',
          accent: '#0f766e',
          summary:
            'A package manager that does npm’s core job, but stores packages in a more disk-efficient and often faster way.',
          why: 'Teams choose it when dependency installs are large, repeated often, and disk space matters.',
          command: 'pnpm install',
          note: 'pnpm is not required here, but it becomes attractive as projects and monorepos grow.',
          whyExists:
            'JavaScript teams wanted the convenience of npm-style workflows without repeatedly storing many duplicate package files across projects.',
          problem:
            'Traditional installs can consume a lot of disk space and make large multi-project setups slower or heavier than necessary.',
          howItWorks: [
            'pnpm still reads `package.json` and lockfile data, but it stores packages in a shared content-addressable store instead of copying everything redundantly for every project.',
            'Project-level `node_modules` entries are linked from that shared store, so many projects can reuse the same package content.',
            'From a developer point of view, the commands feel similar to npm, but the storage strategy is the big internal difference.',
          ],
          simulation: [
            {
              title: 'Two projects need the same library',
              body: 'With a basic copy-everything model, each project may keep its own full copy of that package on disk.',
            },
            {
              title: 'pnpm installs the package once in a shared store',
              body: 'The package content is cached centrally, and project folders link to it instead of duplicating it over and over.',
            },
            {
              title: 'A new project installs faster',
              body: 'If the package is already in the store, pnpm can reuse it rather than downloading and copying it again from scratch.',
            },
          ],
          example: {
            title: 'The command surface stays familiar',
            code: `pnpm install
pnpm dev
pnpm lint
pnpm build`,
            explanation:
              'The main difference is not what you ask for, but how pnpm stores and links package content behind the scenes.',
          },
          comparison: {
            before: `# A simpler mental model
project A downloads package X
project B downloads package X again`,
            after: `# A shared-store mental model
shared store keeps package X once
project A and B link to that package`,
            takeaway:
              'pnpm mainly changes storage and reuse strategy, not the high-level purpose of a package manager.',
          },
          mistakes: [
            'Thinking pnpm is “better npm” in every situation. It solves specific workflow and storage problems; it is not required for every beginner project.',
            'Mixing npm and pnpm lockfiles in the same repo without team agreement.',
            'Assuming a different package manager changes React itself. It changes dependency workflow, not component behavior.',
          ],
          realUsage: [
            'Large repos with many packages or apps that share dependencies.',
            'Teams that care about install speed and reducing duplicated disk usage.',
            'Workflows where consistent lockfile behavior matters across many packages.',
          ],
          practice: {
            question:
              'Why might a team with several related JavaScript apps consider pnpm instead of npm?',
            task: 'Compare npm and pnpm in one sentence each: same job, different storage strategy.',
          },
          summaryPoints: [
            'pnpm is another package manager, not a different framework.',
            'Its main advantage is efficient storage and reuse.',
            'For this lab, knowing the concept matters more than switching to it.',
          ],
        },
        vite: {
          title: 'Vite',
          badge: 'dev server',
          accent: '#2563eb',
          summary: 'A fast dev server and build tool for modern React apps.',
          why: 'It keeps feedback fast while you are coding, which makes practice and debugging less frustrating.',
          command: 'npm run dev',
          note: 'Vite powers both the local development loop and the production build pipeline here.',
          whyExists:
            'Older frontend tooling often felt heavy or slow during local development, especially when refreshing or rebuilding after small edits.',
          problem:
            'If every code change takes too long to reflect in the browser, learning and development both become slower and more error-prone.',
          howItWorks: [
            'In development, Vite serves source files quickly and transforms them on demand instead of bundling the whole app up front every time.',
            'When you save a file, Vite updates only the parts that changed, which powers fast feedback through hot updates.',
            'In production mode, Vite switches jobs and creates an optimized build that is ready to deploy efficiently.',
          ],
          simulation: [
            {
              title: 'You run `npm run dev`',
              body: 'npm launches the `vite` command from `package.json`, and Vite starts a local server that watches the project files.',
            },
            {
              title: 'You open the app in the browser',
              body: 'The browser requests modules, and Vite serves transformed files that the browser can execute during development.',
            },
            {
              title: 'You edit a React component',
              body: 'Vite notices the changed file and pushes a fast update so you can see the result without rebuilding everything from zero.',
            },
            {
              title: 'You run `npm run build`',
              body: 'Vite creates a production bundle optimized for deployment rather than for fast editing.',
            },
          ],
          example: {
            title: 'The project scripts that point to Vite',
            code: `"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}`,
            explanation:
              'The `dev` script starts the learning loop, `build` creates deployable files, and `preview` lets you inspect the production build locally.',
          },
          comparison: {
            before: `# Slower feedback loop
edit file
wait for a heavy rebuild
refresh and inspect`,
            after: `# Faster feedback loop with Vite
edit file
receive a quick hot update
inspect the result immediately`,
            takeaway:
              'Vite improves the development loop by reducing the delay between a code change and visible feedback in the browser.',
          },
          mistakes: [
            'Thinking Vite replaces React. It does not. It is the tooling around the React app.',
            'Thinking `npm run dev` creates the final production output. That is `npm run build`.',
            'Assuming hot updates mean the app is always in the exact same state as a fresh reload. A full refresh is still useful when debugging.',
          ],
          realUsage: [
            'Starting local React development servers with fast reload behavior.',
            'Building optimized static assets for deployment.',
            'Supporting team workflows where edit-feedback speed matters every day.',
          ],
          practice: {
            question: 'Why is `npm run dev` better for daily editing than `npm run build`?',
            task: 'Describe what changes when Vite is in development mode versus production build mode.',
          },
          summaryPoints: [
            'Vite is the development server and build tool, not the package manager.',
            'Its main value is a fast edit-feedback loop.',
            'The same tool serves different roles in dev mode and production build mode.',
          ],
        },
        eslint: {
          title: 'ESLint',
          badge: 'lint',
          accent: '#7c3aed',
          summary:
            'A static analysis tool that reads JavaScript and JSX without running it, then checks the code against rules.',
          why: 'It catches many mistakes before you even refresh the browser or open a pull request.',
          command: 'npm run lint',
          note: 'ESLint is both a bug catcher and a teaching tool for team conventions.',
          whyExists:
            'JavaScript projects needed an automated way to scan source code for risky patterns, common mistakes, and team rules before runtime problems reached users.',
          problem:
            'Without linting, many issues are only found late: during manual testing, code review, CI failures, or production debugging.',
          howItWorks: [
            'Linting is static analysis: ESLint reads the source code as text, parses it into an abstract syntax tree, and checks that tree against rules.',
            'A rule can ask questions like: “Is a variable unused?”, “Is a hook being called in the wrong place?”, or “Did the code break a team convention?”',
            'Because ESLint does not run the app, it can warn early in editors and CI, but it cannot prove runtime behavior the way tests or the browser can.',
          ],
          simulation: [
            {
              title: 'You save a file in the editor',
              body: 'The ESLint extension or script reads the file text and parses it into a structured tree of imports, variables, function calls, JSX nodes, and more.',
            },
            {
              title: 'Rules inspect the syntax tree',
              body: 'Each rule checks a small pattern. One may detect an unused variable. Another may check React hook usage or missing dependencies.',
            },
            {
              title: 'Warnings appear before runtime',
              body: 'The editor can underline the problem immediately, or `npm run lint` can report it in the terminal or CI before merge.',
            },
            {
              title: 'You fix or suppress the issue intentionally',
              body: 'If the warning is valid, you change the code. If not, you document the exception carefully instead of ignoring lint entirely.',
            },
          ],
          example: {
            title: 'Linting without running the app',
            code: `function Profile({ user }) {
  const name = user.name;
  const unused = user.id;

  return <h1>{name}</h1>;
}`,
            explanation:
              'The app might still render, but ESLint can flag `unused` immediately because static analysis can see the variable is declared and never read.',
          },
          comparison: {
            before: `function Timer() {
  let count = 0;
  setInterval(() => count++, 1000);
  return <span>{count}</span>;
}`,
            after: `function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((value) => value + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{count}</span>;
}`,
            takeaway:
              'Linting is not magic, but it nudges you toward safer patterns. In React projects, the right plugin rules help catch mistakes around hooks, effects, and stale code.',
          },
          mistakes: [
            'Thinking linting means “just formatting.” Formatting is mostly Prettier; linting is rule-based static analysis.',
            'Thinking ESLint can detect every bug. It catches many structural issues, but it cannot replace tests, the browser, or real user behavior.',
            'Ignoring lint warnings until they become background noise. The tool only helps if the team treats warnings seriously.',
          ],
          realUsage: [
            'Inline editor feedback while writing code.',
            'Pull request and CI checks that block risky patterns before merge.',
            'React-specific rules such as hook rules and dependency checks.',
          ],
          practice: {
            question: 'Why can ESLint warn about some mistakes even though the app was never run?',
            task: 'Explain static analysis in one sentence, then name one thing ESLint can catch and one thing it cannot guarantee.',
          },
          summaryPoints: [
            'ESLint reads source code without executing it.',
            'It uses rules to catch patterns, mistakes, and convention violations.',
            'Linting helps in editors, CI, code review, and long-term maintainability, but it is not a substitute for runtime testing.',
          ],
        },
        prettier: {
          title: 'Prettier',
          badge: 'format',
          accent: '#ec4899',
          summary:
            'An opinionated code formatter that rewrites code into a consistent visual style automatically.',
          why: 'It removes repetitive style arguments so reviews can focus on behavior, clarity, and architecture.',
          command: 'npm run format',
          note: 'Prettier cares about shape and consistency, not logic correctness.',
          whyExists:
            'Teams were spending too much time debating indentation, quotes, line wrapping, and other visual style details that do not change program behavior.',
          problem:
            'Without automatic formatting, codebases drift into inconsistent styles, reviews get noisy, and simple files become harder to scan quickly.',
          howItWorks: [
            'Prettier parses the code, builds an internal representation, and then prints it back out using its own formatting rules.',
            'It does not ask you about every spacing choice. Its value comes from making most style decisions automatically and consistently.',
            'Because its job is formatting rather than bug detection, teams often pair it with ESLint instead of expecting one tool to replace the other.',
          ],
          simulation: [
            {
              title: 'A developer writes messy but valid code',
              body: 'The code may work, but the spacing, wrapping, and punctuation style vary from file to file or person to person.',
            },
            {
              title: 'Prettier reads and reprints the file',
              body: 'Instead of checking whether the logic is right, it rewrites the file into a predictable formatting style.',
            },
            {
              title: 'The team reviews cleaner diffs',
              body: 'Once formatting is automatic, reviewers can focus on logic and maintainability instead of cosmetic cleanup.',
            },
          ],
          example: {
            title: 'Formatting changes the shape, not the meaning',
            code: `const user={name:"Sara",role:"Student"}
const message = user.name + " is learning React"

export function Header(){return <h1>{message}</h1>}`,
            explanation:
              'Prettier can rewrite this into a consistent form, but it will not decide whether the logic itself is the best design.',
          },
          comparison: {
            before: `const user={name:"Sara",role:"Student"}
const message=user.name+" is learning React"
export function Header(){return <h1>{message}</h1>}`,
            after: `const user = { name: 'Sara', role: 'Student' };
const message = \`\${user.name} is learning React\`;

export function Header() {
  return <h1>{message}</h1>;
}`,
            takeaway:
              'The main gain is readability and consistency. Prettier reduces visual noise so teams can think about the code itself.',
          },
          mistakes: [
            'Expecting Prettier to catch logic bugs. Its main job is formatting, not static analysis.',
            'Treating Prettier and ESLint as duplicates. They overlap a little, but their primary purposes are different.',
            'Manually fighting the formatter on every line instead of accepting the shared style contract.',
          ],
          realUsage: [
            'Auto-format on save in editors.',
            'Pre-commit or CI formatting checks.',
            'Reducing review comments about spacing, quotes, and wrapping.',
          ],
          practice: {
            question:
              'What part of the problem does Prettier solve that ESLint usually should not own by itself?',
            task: 'Take one messy snippet in this lesson and describe which changes are formatting-only versus behavior-related.',
          },
          summaryPoints: [
            'Prettier formats code consistently.',
            'It improves readability and collaboration by removing style debates.',
            'It complements ESLint instead of replacing it.',
          ],
        },
      },
      packageManagerComparison: [
        {
          label: 'Default choice',
          npm: 'Yes, for this lab and most beginner tutorials.',
          pnpm: 'Optional, when you or your team already use it.',
        },
        {
          label: 'Main role',
          npm: 'Install packages and run scripts.',
          pnpm: 'The same job as npm, with a different storage model.',
        },
        {
          label: 'Teaching point',
          npm: 'Simple and enough to start React.',
          pnpm: 'Useful to know, but not mandatory on day one.',
        },
      ],
      commandCards: [
        {
          command: 'npm install',
          description: 'Installs dependencies from the registry.',
          result: 'Updates package.json and node_modules.',
        },
        {
          command: 'npm run dev',
          description: 'Starts the dev server with hot reload.',
          result: 'A local URL to view the app in the browser.',
        },
        {
          command: 'npm run lint',
          description: 'Checks the code against ESLint rules.',
          result: 'Shows fixable errors and warnings.',
        },
        {
          command: 'npm run format',
          description: 'Formats the code with Prettier.',
          result: 'Clean line wrapping and indentation.',
        },
        {
          command: 'npm run build',
          description: 'Creates the production build.',
          result: 'Files ready to deploy.',
        },
      ],
      quizTitle: 'Lock in the tooling basics',
      tips: [
        'When a tool feels abstract, ask first: is it installing packages, serving code, checking code, or formatting code?',
        'For beginners, depth beats memorizing commands. Know why the tool exists before optimizing your workflow around it.',
        'Do not treat ESLint and Prettier as rivals: one checks patterns and likely mistakes, the other standardizes formatting.',
      ],
    },
    js: {
      stageLabel: 'Step 1',
      title: 'JavaScript refresher for React',
      hero: {
        eyebrow: 'Step 1',
        title: 'JavaScript refresher for React',
        lead: 'Before going deep into React, we refresh a few core JavaScript tools: functions, array methods, destructuring, and data transformation.',
        primaryAction: 'I practiced this section',
        secondaryAction: 'Go to JSX and Props',
      },
      summary: {
        intro:
          'React sits on top of JavaScript. The easier data transformation feels, the clearer state and props become.',
        points: [
          'map creates a new result',
          'filter shrinks arrays',
          'do not mutate state directly',
        ],
      },
      explorer: {
        eyebrow: 'Live practice',
        title: 'Array explorer',
        lead: 'Change the input and watch what `map` and `filter` produce.',
        itemsLabel: 'Name list',
        rangeLabel: 'Minimum name length',
        mapLabel: 'map',
        filterLabel: 'filter',
        sampleText: 'Alice, Bob, Cathy, Dan',
      },
      cheatSheet: [
        'Use `map` to build a new array.',
        '`filter` shrinks arrays, while `sort` can mutate the array.',
        'In React, data is passed to child components through props.',
      ],
      quizTitle: 'JavaScript quizzes',
      tips: [
        'When you see an array method, first ask whether it returns a new array or works in place.',
        'For React, understanding immutability matters more than memorizing syntax.',
      ],
    },
    react: {
      stageLabel: 'Steps 2-3',
      title: 'DOM, JSX, rendering, props, and state',
      hero: {
        eyebrow: 'Steps 2-3',
        title: 'DOM, JSX, React rendering, props, and state',
        lead: 'This lesson connects the browser world to the React world: HTML becomes a DOM tree, the browser turns that tree into visible pixels, JSX becomes JavaScript, and React helps us manage UI updates without drowning in manual DOM work.',
        primaryAction: 'I practiced this section',
        secondaryAction: 'Go to events and forms',
      },
      summary: {
        intro:
          'To really understand React, we first need the browser story underneath it. React does not replace the DOM or the browser render pipeline. It works with them and gives us a better way to describe and update UI.',
        points: [
          'HTML is source text, the DOM is a live object tree',
          'Rendering means turning structures into visible pixels',
          'JSX is a UI syntax that becomes JavaScript',
          'React coordinates updates so we do less manual DOM work',
        ],
        story: [
          {
            title: 'Browser foundation',
            description:
              'The browser parses HTML into a DOM tree, builds styling information, and decides what should become visible on the page.',
          },
          {
            title: 'Rendering and re-rendering',
            description:
              'Rendering is the first visible paint. Re-rendering means the UI description changes and the browser updates what the user sees.',
          },
          {
            title: 'JSX and React elements',
            description:
              'JSX looks HTML-like, but it is JavaScript syntax that describes React elements, not DOM nodes.',
          },
          {
            title: 'React update flow',
            description:
              'React compares UI descriptions and applies the necessary DOM changes so state-driven screens stay predictable.',
          },
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'How the browser and React cooperate',
        lead: 'Pick a topic and study it through the same structure: definition, purpose, internal mechanics, simulation, code, mistakes, and real usage.',
        chooserLabel: 'Choose a topic to inspect',
        sections: {
          definition: '1. Simple definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works',
          simulation: '5. Step-by-step simulation',
          example: '6. Practical code example',
          beforeAfter: '7. Before/after comparison',
          mistakes: '8. Common beginner mistakes',
          usage: '9. Real project usage',
          practice: '10. Mini practice or quiz',
          summary: '11. Simple summary',
        },
        practiceQuestion: 'Prediction question',
        practiceTask: 'Tiny practice',
        beforeLabel: 'Before',
        afterLabel: 'After',
        simulationIntro: 'Behind the scenes',
      },
      live: {
        eyebrow: 'Render flow',
        title: 'Watch React turn state into visible UI',
        lead: 'Use the live labs below, then read this mental model: events trigger state changes, React re-runs the component, and the browser updates only what changed on screen.',
        story: [
          {
            title: 'A click happens',
            body: 'The browser fires an event. React listens and calls your event handler, such as the button click that updates a counter.',
          },
          {
            title: 'State changes',
            body: 'The setter tells React there is new data. React schedules a fresh render of the affected component tree.',
          },
          {
            title: 'React creates a new UI description',
            body: 'The component function runs again, returns JSX again, and React compares the new result with the previous one.',
          },
          {
            title: 'The browser shows the update',
            body: 'React updates the necessary DOM nodes, then the browser recalculates what is visible so the user sees the new text, count, or style.',
          },
        ],
      },
      propsLab: {
        eyebrow: 'Live component',
        title: 'props + state',
        lead: 'This card gets data through props and re-renders whenever the parent changes.',
        visitsLabel: 'Visits',
        defaults: {
          name: 'Sara',
          role: 'React learner',
        },
        fields: {
          name: 'Name',
          role: 'Role',
          accent: 'Accent color',
        },
        actions: {
          addVisit: 'Add visit',
          resetVisit: 'Reset visits',
        },
      },
      eventLab: {
        eyebrow: 'Event handling',
        title: 'Click and state',
        lead: 'In React, handlers let us change the UI in response to user input.',
        counterLabel: 'Counter',
        actions: {
          increment: '+2',
          decrement: '-1',
          toggleLiked: 'Like / unlike',
        },
      },
      topics: {
        htmlDom: {
          title: 'HTML vs DOM',
          badge: 'browser basics',
          accent: '#2563eb',
          summary:
            'HTML is the text format we write, while the DOM is the live object tree the browser builds from that text so scripts and the browser can work with the page.',
          whyExists:
            'Browsers needed a structured, programmatic representation of a page after parsing raw markup so they could support styling, events, scripts, and updates.',
          problem:
            'If HTML stayed only as text, JavaScript and the browser would have no convenient live structure to inspect, change, or render incrementally.',
          howItWorks: [
            'You write HTML as text with tags such as `<main>`, `<h1>`, and `<button>`.',
            'The browser parser reads that text and creates JavaScript-accessible node objects like `document`, elements, text nodes, and attributes.',
            'The DOM is live. Once the page exists, code can read and update those nodes without rewriting the entire HTML file string.',
          ],
          simulation: [
            {
              title: 'The browser receives HTML text',
              body: 'At first it is only markup characters coming from a file or a server response. Nothing is interactive yet.',
            },
            {
              title: 'The parser recognizes tags and nesting',
              body: 'The browser sees that an `<h1>` is inside a `<main>`, and a text node sits inside the `<h1>`.',
            },
            {
              title: 'A DOM tree is created',
              body: 'The browser turns that nesting into node objects connected as parent and child relationships.',
            },
            {
              title: 'JavaScript can now interact with the page',
              body: 'Code can ask for `document.body`, find an element, change text, or attach an event listener because the DOM now exists as a live structure.',
            },
          ],
          example: {
            title: 'Markup becomes a live structure',
            code: `<main>
  <h1>Hello</h1>
  <button>Save</button>
</main>

// Later in JavaScript
const heading = document.querySelector('h1');
heading.textContent = 'Hello, learner';`,
            explanation:
              'The HTML is the source. The DOM is the live tree that `querySelector` and `textContent` interact with after parsing.',
          },
          comparison: {
            before: `HTML
<h1>Hello</h1>

Think of it as source text waiting to be parsed.`,
            after: `DOM
document
└─ html
   └─ body
      └─ h1
         └─ "Hello"

Think of it as a live object tree.`,
            takeaway:
              'HTML and DOM are related, but they are not the same thing. One is source text; the other is the browser’s live in-memory representation.',
          },
          mistakes: [
            'Saying “HTML and DOM are the same.” They are connected, but HTML is source text while the DOM is the parsed result.',
            'Thinking the DOM only contains element tags. It also contains text nodes, comments, attributes, and the document root structure.',
            'Assuming changing HTML source text after load is the normal way to update UI. In practice, we usually update the live DOM or let React do it.',
          ],
          realUsage: [
            'Debugging the browser Elements panel while inspecting React output.',
            'Reading accessibility structure such as headings, buttons, and form fields.',
            'Understanding why React eventually still talks to real DOM nodes in the browser.',
          ],
          practice: {
            question:
              'If you change `heading.textContent`, are you editing the original HTML file or the live DOM node already built in memory?',
            task: 'Draw a tiny tree for `<ul><li>One</li><li>Two</li></ul>` and label the parent and child nodes.',
          },
          summaryPoints: [
            'HTML is source markup; the DOM is the live tree produced from it.',
            'The DOM exists so the browser and JavaScript can work with a structured page.',
            'React still ends up updating real DOM nodes in the browser.',
          ],
        },
        domTree: {
          title: 'DOM tree, nodes, and parsing',
          badge: 'parsing',
          accent: '#0f766e',
          summary:
            'The DOM is organized as a tree of nodes, and the browser parser builds that tree by reading HTML from top to bottom and nesting children under parents.',
          whyExists:
            'Tree structure matches how web pages are nested, which makes layout, scripting, and event relationships easier to reason about.',
          problem:
            'Without a parent-child tree, the browser would struggle to understand document structure, nesting, order, and how one part of a page relates to another.',
          howItWorks: [
            'The parser reads opening tags, closing tags, text, and attributes in sequence.',
            'As tags open and close, the browser creates element nodes and places them into a parent-child hierarchy.',
            'The result is a document tree where every node has a place: document node, element nodes, text nodes, and sometimes comment nodes.',
          ],
          simulation: [
            {
              title: 'Parsing starts at the top of the document',
              body: 'The browser reads the first tags and creates the initial document structure such as `html`, `head`, and `body`.',
            },
            {
              title: 'Nested tags become child nodes',
              body: 'If a `<p>` contains a `<strong>`, then the `<strong>` node becomes a child of the `<p>` node in the tree.',
            },
            {
              title: 'Text becomes its own node type',
              body: 'The words inside an element are not loose strings floating around. They are text nodes attached to their parent element.',
            },
            {
              title: 'The final tree can be traversed',
              body: 'Browser tools, scripts, accessibility logic, and layout logic can all walk this tree to understand or update the document.',
            },
          ],
          example: {
            title: 'A small nested DOM tree',
            code: `<article>
  <h2>Course update</h2>
  <p>
    Practice the <strong>DOM tree</strong> today.
  </p>
</article>`,
            explanation:
              'The `article` is the parent. `h2` and `p` are children. Inside `p`, the text and the `strong` node become nested children as well.',
          },
          comparison: {
            before: `Without tree thinking
<article><h2>Course update</h2><p>Practice the <strong>DOM tree</strong> today.</p></article>

Everything looks like one long line.`,
            after: `With tree thinking
article
├─ h2
│  └─ "Course update"
└─ p
   ├─ "Practice the "
   ├─ strong
   │  └─ "DOM tree"
   └─ " today."`,
            takeaway:
              'Tree thinking makes structure, nesting, and update targets much easier to understand than reading raw markup as one flat string.',
          },
          mistakes: [
            'Ignoring text nodes and imagining only element boxes exist in the DOM.',
            'Thinking the DOM tree is the same as the final visible layout. It represents document structure, not exact painted pixels.',
            'Forgetting that parsing order matters. The browser discovers the page in sequence, not all at once magically.',
          ],
          realUsage: [
            'Inspecting parent-child relationships in DevTools.',
            'Reasoning about event bubbling through ancestor nodes.',
            'Understanding why component output eventually appears as nested browser nodes.',
          ],
          practice: {
            question:
              'In `<p>Hello <strong>world</strong></p>`, is `world` just part of the `<p>` text, or does the `strong` create its own nested node path?',
            task: 'Take one card layout from the app and describe its main parent-child DOM structure in plain words.',
          },
          summaryPoints: [
            'The DOM is a tree, not a flat list.',
            'Nodes include document, elements, text, and more.',
            'Parsing builds that tree in sequence from the HTML source.',
          ],
        },
        browserRendering: {
          title: 'Browser rendering, CSSOM, and re-rendering',
          badge: 'rendering',
          accent: '#d97706',
          summary:
            'Rendering means the browser takes document structure and style information, decides what should appear on screen, and paints visible pixels. Re-rendering means repeating part of that process after something changes.',
          whyExists:
            'A page is not useful until structure and style become something visible and interactive on the screen.',
          problem:
            'HTML and CSS by themselves are only instructions. The browser needs a pipeline to turn them into layout, paint, and visible UI.',
          howItWorks: [
            'The browser builds the DOM from HTML and a CSS object model from CSS rules.',
            'It combines the relevant DOM nodes and computed styles into a render tree that represents what should actually be drawn.',
            'Then it calculates layout and paints pixels. When content or style changes later, the browser may need to recalculate and update what the user sees.',
          ],
          simulation: [
            {
              title: 'HTML becomes the DOM and CSS becomes the CSSOM',
              body: 'One structure comes from markup, the other from style rules. Both are needed before the browser fully understands the page.',
            },
            {
              title: 'The render tree is assembled',
              body: 'The browser includes only the nodes that should appear visually, together with their computed styles.',
            },
            {
              title: 'Layout decides size and position',
              body: 'The browser figures out how wide, tall, and where each visible piece should be placed.',
            },
            {
              title: 'Paint makes pixels visible',
              body: 'Text, backgrounds, borders, and colors are drawn. If content or style changes later, the browser may need to do another update cycle.',
            },
          ],
          example: {
            title: 'A beginner-friendly render example',
            code: `<button class="cta">Start lesson</button>

.cta {
  color: white;
  background: royalblue;
  padding: 12px 20px;
}`,
            explanation:
              'The DOM knows there is a button. The CSSOM knows the styles. The render tree combines them so the browser can place and paint the visible button.',
          },
          comparison: {
            before: `Before rendering
DOM nodes exist
CSS rules exist
Nothing has been laid out or painted yet`,
            after: `After rendering
the browser knows what is visible
where it sits
and how it should look on screen`,
            takeaway:
              'Rendering is the visible result of several browser steps, not a single magical moment.',
          },
          mistakes: [
            'Using “render” to mean only React behavior. Browsers also have their own rendering pipeline.',
            'Thinking the DOM tree and render tree are identical. Hidden or non-visual nodes can differ.',
            'Assuming every update redraws the whole page from scratch in the same way. Browsers often optimize partial updates.',
          ],
          realUsage: [
            'Understanding why style and layout changes can affect performance.',
            'Explaining why hidden nodes may be in the DOM but not visibly painted.',
            'Debugging why a component exists structurally but still does not appear as expected.',
          ],
          practice: {
            question:
              'If a node exists in the DOM but has `display: none`, can it still disappear from what the browser chooses to paint?',
            task: 'Explain rendering and re-rendering in two short sentences: one for the first paint and one for a later update.',
          },
          summaryPoints: [
            'DOM gives structure, CSSOM gives style information.',
            'The browser uses them to build what should be painted.',
            'Re-rendering means recalculating visible output after a change.',
          ],
        },
        jsx: {
          title: 'JSX and React elements',
          badge: 'JSX',
          accent: '#7c3aed',
          summary:
            'JSX is a JavaScript syntax for describing UI in a component-friendly way. It looks like HTML, but it becomes JavaScript that creates React elements.',
          whyExists:
            'React needed a readable way to express nested UI inside JavaScript without forcing developers to manually write long function calls for every element.',
          problem:
            'Building UI with raw JavaScript function calls is possible, but it becomes noisy and harder to read as the structure grows.',
          howItWorks: [
            'You write JSX such as `<button>{label}</button>` inside a component.',
            'A build tool transforms that syntax into JavaScript function calls that describe React elements.',
            'Those React elements are plain descriptions of what UI React should create, not real DOM nodes themselves.',
          ],
          simulation: [
            {
              title: 'You write a component with JSX',
              body: 'For example, `function Welcome() { return <h1>Hello</h1>; }` is written in a syntax that feels close to HTML.',
            },
            {
              title: 'The build step transforms the JSX',
              body: 'Vite and the React transform turn that JSX into JavaScript that creates a React element description.',
            },
            {
              title: 'React reads the element description',
              body: 'React sees a type such as `h1`, props such as `children`, and a structure that represents the intended UI.',
            },
            {
              title: 'React eventually creates or updates real DOM nodes',
              body: 'Only after React processes the description does the browser receive actual DOM updates and show the heading on screen.',
            },
          ],
          example: {
            title: 'JSX is not HTML source',
            code: `function WelcomeCard() {
  const learner = 'Mina';

  return (
    <section className="card">
      <h2>Hello, {learner}</h2>
      <p>JSX lets JavaScript and UI sit together.</p>
    </section>
  );
}`,
            explanation:
              'This looks HTML-like, but it is JavaScript syntax inside a component. Notice `className` and `{learner}`. Those are clues that JSX is not raw HTML.',
          },
          comparison: {
            before: `Without JSX
return React.createElement(
  'h2',
  null,
  'Hello, learner'
);`,
            after: `With JSX
return <h2>Hello, learner</h2>;`,
            takeaway:
              'JSX mainly improves readability and composability. The underlying concept is still a JavaScript description of UI.',
          },
          mistakes: [
            'Thinking JSX is HTML pasted into JavaScript. It only looks similar; the build step transforms it into JavaScript.',
            'Expecting HTML attribute names everywhere. In JSX, some names differ, such as `className` instead of `class`.',
            'Thinking a JSX tag instantly creates a DOM node. It first creates a React element description.',
          ],
          realUsage: [
            'Writing component layouts in React apps of every size.',
            'Embedding JavaScript expressions directly into UI descriptions.',
            'Composing reusable pieces of interface with readable nested structure.',
          ],
          practice: {
            question:
              'When you write `<Card title="Hi" />`, does React receive an HTML string, or a JavaScript object-like description of a component and props?',
            task: 'Rewrite `React.createElement("button", null, "Save")` as JSX and point out one reason the JSX version is easier to read.',
          },
          summaryPoints: [
            'JSX is a syntax for describing UI inside JavaScript.',
            'JSX is transformed before the browser runs the code.',
            'JSX creates React element descriptions, not DOM nodes directly.',
          ],
        },
        reactRendering: {
          title: 'React rendering and UI updates',
          badge: 'React flow',
          accent: '#059669',
          summary:
            'React rendering means running component logic to produce a new UI description. React then compares old and new descriptions and updates the real DOM where needed.',
          whyExists:
            'As interfaces grow, manually tracking which DOM node should change after every event becomes repetitive, fragile, and difficult to maintain.',
          problem:
            'Direct DOM manipulation spreads UI logic across event handlers, selectors, and manual updates, which makes state-heavy interfaces harder to reason about.',
          howItWorks: [
            'A component renders by running its function and returning JSX, which becomes React element descriptions.',
            'When props or state change, React re-runs that component to create a fresh description of what the UI should now look like.',
            'React compares the previous and next descriptions, then applies the necessary updates to real DOM nodes during the commit step.',
          ],
          simulation: [
            {
              title: 'A simple JSX component is declared',
              body: 'Imagine `function Counter() { const [count, setCount] = useState(0); return <button onClick={() => setCount(count + 1)}>Count: {count}</button>; }`.',
            },
            {
              title: 'The first render creates a React element tree',
              body: 'React runs the component, sees the button element description and the text `Count: 0`, and mounts matching real DOM nodes.',
            },
            {
              title: 'The user clicks the button',
              body: 'The browser dispatches a click event. React calls the event handler, which asks React to update state from `0` to `1`.',
            },
            {
              title: 'React re-renders the component',
              body: 'The component runs again. This time the returned JSX describes `Count: 1` instead of `Count: 0`.',
            },
            {
              title: 'React updates the real DOM',
              body: 'React compares the old and new descriptions, realizes only the text content changed, updates that DOM node, and the browser paints the new label.',
            },
          ],
          example: {
            title: 'A tiny state-driven component',
            code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Count: {count}
    </button>
  );
}`,
            explanation:
              'You describe the next UI from state instead of manually finding the button and setting its text yourself. React coordinates the re-render and DOM update.',
          },
          comparison: {
            before: `// Manual DOM approach
const button = document.querySelector('button');
let count = 0;

button.addEventListener('click', () => {
  count += 1;
  button.textContent = 'Count: ' + count;
});`,
            after: `// React approach
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`,
            takeaway:
              'The React version moves us from “manually patch this node” to “describe the UI from state.” That shift becomes much more valuable as screens get larger.',
          },
          mistakes: [
            'Thinking re-render means React destroys and rebuilds the entire page every time. React usually updates only the parts that changed.',
            'Mixing direct DOM edits with React-managed state without a clear reason, which can create confusing mismatches.',
            'Treating the Virtual DOM as a magical performance guarantee. It is a useful comparison strategy, not a promise that every app is automatically fast.',
          ],
          realUsage: [
            'Forms, counters, filters, dialogs, tabs, and task managers where state changes the interface.',
            'Coordinating many UI updates without manual selectors spread across the codebase.',
            'Building predictable component trees that can be inspected with React DevTools.',
          ],
          practice: {
            question:
              'After `setCount(1)`, what happens first: does the browser text change immediately, or does React first create a new UI description from the component?',
            task: 'Explain in plain words why direct DOM updates become harder when one screen has many related values, conditions, and interactions.',
          },
          summaryPoints: [
            'Rendering in React means producing a UI description from component logic.',
            'Re-rendering happens when props or state change.',
            'React still updates the real DOM, but it helps us describe changes declaratively.',
          ],
        },
      },
      quizTitle: 'Check your DOM and JSX mental model',
      tipsTitle: 'What to remember while practicing',
      tips: [
        'Start every React question by asking which layer you are talking about: HTML source, DOM, browser rendering, JSX, React elements, or real DOM updates.',
        'When a UI changes, follow the chain in order: event, state or props change, re-render, DOM update, visible browser result.',
        'Do not exaggerate the Virtual DOM story. React still ends in real DOM updates; the value is predictable UI description and managed updates.',
      ],
    },
    'events-forms': {
      stageLabel: 'Step 4',
      title: 'Events and controlled forms',
      hero: {
        eyebrow: 'Step 4',
        title: 'Events and controlled forms',
        lead: 'User actions become React state, and controlled inputs keep the preview, validation, and submit flow in sync before we move into effects and the final project.',
        primaryAction: 'I practiced this lesson',
        secondaryAction: 'Go to useEffect',
      },
      summary: {
        intro:
          'This lesson sits between React basics and useEffect. It teaches how event handlers, controlled inputs, and form submission work together so learners can build reliable form-driven UI before persistence and browser synchronization enter the picture.',
        points: [
          'event handlers react to clicks, typing, and submit',
          'controlled inputs keep React state as the source of truth',
          'form state can live in one object when fields belong together',
          'preview, counts, and validation should be derived from state',
        ],
        prerequisites: [
          'JSX, props, state, and render flow',
          'basic JavaScript functions, objects, and arrays',
          'comfort reading a small `useState` example',
        ],
        keyPoints: [
          'React sees events through handler functions, not magic.',
          'A controlled field always reflects state back into the input.',
          'Submit handling belongs on the form and usually calls `event.preventDefault()`.',
          'Task Manager CRUD will reuse the same form-state pattern.',
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'How form events become state and preview',
        lead: 'Pick a topic and study the flow from user action to handler, state update, validation, and derived UI.',
        chooserLabel: 'Choose a topic to inspect',
        sections: {
          definition: '1. Simple definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works',
          example: '5. Practical code example',
          mistakes: '6. Common beginner mistakes',
          usage: '7. Real project usage',
          practice: '8. Practice prompt',
          summary: '9. Short recap',
        },
        practiceQuestion: 'Prediction question',
        practiceTask: 'Tiny practice',
      },
      topics: [
        {
          id: 'event-handlers',
          title: 'Event handlers',
          badge: 'events',
          summary: 'Handlers are functions React calls when the user clicks, types, or submits.',
          definition:
            'An event handler is a function you pass to an event prop so React can run it later.',
          whyExists:
            'User actions happen after render. React needs a clear function to call when the browser reports the action.',
          problem:
            'If you run interaction logic during render, it fires too early and repeats every time the component renders.',
          howItWorks: [
            'React stores the function reference on the element.',
            'The browser reports a click, input, or submit event.',
            'React calls your handler and gives it the event object.',
          ],
          example: {
            title: 'Keep the handler as a reference',
            code: `function SaveButton() {
  function handleSave() {
    console.log('saved');
  }

  return <button onClick={handleSave}>Save</button>;
}`,
            explanation:
              'React keeps the function for later. It does not run the handler during render.',
          },
          mistakes: [
            'Calling `handleSave()` during render instead of passing `handleSave`.',
            'Mixing unrelated logic into render when the action belongs to an event.',
          ],
          realUsage: ['button clicks', 'input changes', 'form submit and reset actions'],
          practice: {
            question: 'Which prop should receive the submit handler on a form?',
            task: 'Pass a handler reference to `onSubmit` and describe what event it receives.',
          },
          summaryPoints: [
            'Handlers wait for a user action.',
            'React calls them with event data.',
            'The function reference matters more than the inline result.',
          ],
        },
        {
          id: 'controlled-inputs',
          title: 'Controlled inputs',
          badge: 'inputs',
          summary:
            'A controlled input shows the value from state and writes changes back into state.',
          definition:
            'A controlled field is an input whose `value` comes from React state and whose `onChange` writes the next value back.',
          whyExists:
            'When state owns the text, preview, validation, and submit logic all look at the same source of truth.',
          problem:
            'If the DOM owns the value alone, the rest of the UI can drift away from what the user just typed.',
          howItWorks: [
            'State starts with the current field value.',
            'Typing fires `onChange` with the new value.',
            'The setter updates state and the input reflects the same text again.',
          ],
          example: {
            title: 'One source of truth',
            code: `function TitleField() {
  const [title, setTitle] = useState('');

  return (
    <input
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
  );
}`,
            explanation:
              'The input mirrors state, and state updates when the user types. That is the controlled pattern.',
          },
          mistakes: [
            'Using `defaultValue` and then expecting React to keep the field synced.',
            'Forgetting `onChange`, which makes the field read-only.',
          ],
          realUsage: ['title fields', 'textareas', 'select menus in real forms'],
          practice: {
            question: 'How does the input know what to display on the next render?',
            task: 'Turn a plain textarea into a controlled field with `value` and `onChange`.',
          },
          summaryPoints: [
            'State drives the field value.',
            '`onChange` keeps state up to date.',
            'Controlled inputs make the rest of the form predictable.',
          ],
        },
        {
          id: 'form-state',
          title: 'Form state',
          badge: 'state',
          summary: 'Related fields often belong in one object so the draft stays coherent.',
          definition:
            'Form state is a single object that stores the values for a related group of fields.',
          whyExists:
            'A draft usually travels together: title, note, and category belong to the same submission.',
          problem:
            'If each field is managed as a separate island, updates and submit handling become harder to keep aligned.',
          howItWorks: [
            'Store one object with all related fields.',
            'Update a single field by copying the previous object and replacing just that key.',
            'Submit the same object shape after trimming or validating what you need.',
          ],
          example: {
            title: 'Update one field without losing the others',
            code: `setFormState((previous) => ({
  ...previous,
  note: event.target.value,
}));`,
            explanation: 'The spread keeps the rest of the draft intact while one field changes.',
          },
          mistakes: [
            'Mutating the object directly instead of returning a new one.',
            'Storing each related field in a separate place when one draft object is clearer.',
          ],
          realUsage: ['task drafts', 'profile forms', 'contact forms'],
          practice: {
            question: 'Which update keeps the old title while changing the note?',
            task: 'Add a second field update and keep the first field intact.',
          },
          summaryPoints: [
            'One draft object keeps related values together.',
            'Update one field immutably at a time.',
            'The submitted data should match the state shape.',
          ],
        },
        {
          id: 'submit-handling',
          title: 'Submit handling',
          badge: 'submit',
          summary:
            'Forms submit on purpose, and React usually needs to stop the browser reload first.',
          definition:
            'Submit handling is the logic that runs when the form is submitted, usually through `onSubmit`.',
          whyExists:
            'Browser forms want to navigate or reload by default, but React lessons usually want to stay on the same page.',
          problem:
            'Without `event.preventDefault()`, the page can reload before you use the form data.',
          howItWorks: [
            'The form receives a submit event.',
            'The handler calls `event.preventDefault()`.',
            'Validation runs, then the accepted draft is stored or previewed.',
          ],
          example: {
            title: 'Keep submit logic on the form',
            code: `function DraftForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('accept the draft');
  }

  return <form onSubmit={handleSubmit}>...</form>;
}`,
            explanation:
              'The form owns the submit flow, so keyboard submit and button submit behave the same way.',
          },
          mistakes: [
            'Putting submit logic only on the button click.',
            'Forgetting `event.preventDefault()` and letting the page reload.',
          ],
          realUsage: ['create task flows', 'save draft flows', 'contact forms'],
          practice: {
            question: 'Which event should own the submission logic?',
            task: 'Write a submit handler that prevents default and accepts the draft.',
          },
          summaryPoints: [
            'Submit belongs on the form.',
            'Prevent the browser reload first.',
            'Then validate and accept the draft.',
          ],
        },
        {
          id: 'validation-derived-ui',
          title: 'Validation and derived UI',
          badge: 'preview',
          summary: 'Validation should be explicit, and preview UI should come from current state.',
          definition:
            'Validation checks whether the current draft is ready, and derived UI is any value you calculate from state instead of storing separately.',
          whyExists:
            'Learners need clear feedback before submit, and the preview should always match the live draft.',
          problem:
            'If you copy preview values into another state variable, the preview can drift away from the real form.',
          howItWorks: [
            'Derive `canSubmit` from the required field state.',
            'Show text feedback next to the field when the value is invalid.',
            'Render preview details and counters from the same current state.',
          ],
          example: {
            title: 'Derive the submit rule',
            code: `const canSubmit = title.trim().length > 0;`,
            explanation:
              'A simple derived boolean can drive the disabled state and the error message.',
          },
          mistakes: [
            'Duplicating preview data in another state variable.',
            'Relying on color alone for validation.',
            'Hiding the reason a field is invalid.',
          ],
          realUsage: ['disabled submit buttons', 'character counts', 'live preview cards'],
          practice: {
            question: 'Which value should be derived instead of stored separately?',
            task: 'Move the character count into derived UI rather than another piece of state.',
          },
          summaryPoints: [
            'Validation should be visible in text.',
            'Derived UI should come from current state.',
            'Do not store a duplicate copy of the preview.',
          ],
        },
      ],
      live: {
        eyebrow: 'Live form',
        title: 'Mini task draft',
        lead: 'Type into one controlled draft and watch the preview change without any persistence.',
        guidance:
          'This first slice keeps one draft object in state. It does not save to localStorage and it does not grow into Task Manager CRUD yet.',
        stateNote:
          'The form is controlled, validation is local, submit is prevented, and reset clears the draft.',
        fields: {
          title: 'Task title',
          note: 'Short note',
          category: 'Category',
        },
        placeholders: {
          title: 'For example: practice controlled inputs',
          note: 'A short note for later',
        },
        help: {
          title: 'Required to submit.',
          note: 'Keep the note short. The preview uses the live text.',
        },
        validation: {
          titleRequired: 'Task title is required.',
        },
        categories: {
          js: 'JS focus',
          react: 'React focus',
          effects: 'Effects focus',
        },
        preview: {
          title: 'Live preview',
          description: 'This is the current draft before submit.',
          noteCountLabel: 'Note characters',
          submittedTitle: 'Last submitted draft',
          emptyTitle: 'Untitled draft',
          emptyNote: 'No note yet',
          emptySubmitted: 'Submit the form to capture a snapshot.',
        },
        actions: {
          submit: 'Submit draft',
          reset: 'Reset draft',
        },
      },
      quizTitle: 'Check your form mental model',
      tipsTitle: 'Form reminders',
      tips: [
        'Keep the input value in React state if the rest of the UI depends on it.',
        'Use `onSubmit` for the form and `event.preventDefault()` to stay on the page.',
        'If a value can be derived from the current draft, do not store a duplicate copy.',
      ],
    },
    effects: {
      stageLabel: 'Step 5',
      title: 'useEffect, side effects, and browser synchronization',
      hero: {
        eyebrow: 'Step 5',
        title: 'useEffect, cleanup, dependencies, and browser APIs',
        lead: 'This lesson explains why effects exist at all, how React separates pure rendering from external synchronization, and how cleanup, dependencies, timers, titles, debounce, and localStorage work together without creating bugs.',
        primaryAction: 'I practiced this section',
        secondaryAction: 'Go to routing',
      },
      summary: {
        intro:
          'A React render should stay pure: given the same props and state, it should describe the same UI. Effects exist because real apps also need to talk to systems outside render, such as timers, the browser title, storage, and subscriptions.',
        points: [
          'Rendering describes UI; effects synchronize with the outside world',
          'Cleanup prevents timers, subscriptions, and stale work from leaking',
          'Dependencies control when an effect must resynchronize',
          'Not every computed value should be turned into an effect',
        ],
        story: [
          {
            title: 'Pure render first',
            description:
              'A component render should calculate UI from props and state, not perform timer setup, storage writes, or browser mutations in the middle of render.',
          },
          {
            title: 'Effects for external systems',
            description:
              'useEffect exists so React can commit the UI first, then safely synchronize with systems outside the render phase.',
          },
          {
            title: 'Cleanup prevents bugs',
            description:
              'When dependencies change or a component unmounts, React can run cleanup so old timers, listeners, and outdated async work do not keep running.',
          },
          {
            title: 'Dependencies define resync rules',
            description:
              'The dependency array tells React whether the effect should rerun after every commit, only on mount/unmount, or when specific values change.',
          },
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'How effects really work',
        lead: 'Choose one effect topic and study it in the same structure: definition, purpose, internals, simulation, example, mistakes, and real usage.',
        chooserLabel: 'Choose an effect topic',
        sections: {
          definition: '1. Simple definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works',
          simulation: '5. Step-by-step simulation',
          example: '6. Practical code example',
          beforeAfter: '7. Before/after comparison',
          mistakes: '8. Common beginner mistakes',
          usage: '9. Real project usage',
          practice: '10. Mini practice or quiz',
          summary: '11. Simple summary',
        },
        practiceQuestion: 'Prediction question',
        practiceTask: 'Tiny practice',
        beforeLabel: 'Before',
        afterLabel: 'After',
        simulationIntro: 'Behind the scenes',
      },
      live: {
        eyebrow: 'Effect flow',
        title: 'Watch effects talk to the browser',
        lead: 'These live examples reuse real effect patterns from the app: an interval, a debounced timeout, and storage persistence.',
        story: [
          {
            title: 'Clock panel',
            body: 'An interval starts after commit, updates state every second, and is cleared in cleanup so it does not keep running after the component leaves.',
          },
          {
            title: 'Debounced search',
            body: 'Each keystroke schedules a timeout. If the user types again first, cleanup clears the old timeout so only the latest value applies.',
          },
          {
            title: 'Note saver',
            body: 'The note is restored from localStorage when state initializes, and later edits keep the browser-stored value in sync with the textarea.',
          },
        ],
      },
      clock: {
        eyebrow: 'useEffect',
        title: 'Live clock and cleanup',
        lead: 'The interval is created after commit, ticks once per second, and is cleared in cleanup so the component does not leave background work behind.',
      },
      debounce: {
        eyebrow: 'Cleanup demo',
        title: 'Debounced search',
        lead: 'Each new keystroke schedules a timeout, and cleanup cancels the previous one so only the latest value becomes the final search term.',
        searchLabel: 'Search',
        placeholder: 'For example: state',
        lastQuery: 'Latest query',
        empty: 'Nothing typed yet.',
      },
      note: {
        eyebrow: 'Persistence',
        title: 'Live note',
        lead: 'This textarea restores the saved note from localStorage and keeps later edits synchronized with browser storage.',
        label: 'Note',
        initial: 'useEffect is used for side effects, timers, and syncing with the outside world.',
      },
      topics: {
        sideEffects: {
          title: 'Side effects and pure rendering',
          badge: 'foundations',
          accent: '#7c3aed',
          summary:
            'A side effect is work that reaches outside React’s pure render calculation, such as changing the document title, starting a timer, talking to storage, or subscribing to something external.',
          whyExists:
            'React wants render to stay predictable. If render both described the UI and performed outside work, components would become harder to reason about, retry, and debug.',
          problem:
            'Real apps still need to synchronize with external systems. Without a separate effect phase, that work would leak into render and create timing bugs, duplicate work, and inconsistent UI behavior.',
          howItWorks: [
            'Render should stay pure: given the same props and state, it should return the same UI description without mutating external systems.',
            'After React commits the rendered UI to the screen, it can run effect setup code to synchronize with things outside render.',
            'Effects are therefore not for “running code after render” in the abstract. They are specifically for syncing with systems React does not control directly.',
          ],
          simulation: [
            {
              title: 'Component renders',
              body: 'The component function calculates JSX from props and state. No timer should start and no storage write should happen inside this pure calculation.',
            },
            {
              title: 'React commits the UI',
              body: 'The visible UI is placed or updated in the DOM first. At this point the render result is on screen.',
            },
            {
              title: 'Effect setup runs',
              body: 'Now React can safely start outside work such as an interval, a title update, a subscription, or a persistence sync.',
            },
            {
              title: 'React keeps render and synchronization separate',
              body: 'This separation makes the UI description predictable while still allowing the app to talk to the browser and other systems.',
            },
          ],
          example: {
            title: 'Render stays pure, effect does the sync',
            code: `import { useEffect } from 'react';

function TitleMirror({ count }) {
  useEffect(() => {
    document.title = 'Count: ' + count;
  }, [count]);

  return <p>Count: {count}</p>;
}`,
            explanation:
              'The paragraph is pure render output. Updating `document.title` is the side effect, so it belongs in `useEffect`, not in the render body.',
          },
          comparison: {
            before: `// Mixing sync work into render
function TitleMirror({ count }) {
  document.title = 'Count: ' + count;
  return <p>Count: {count}</p>;
}`,
            after: `// Keeping render pure
function TitleMirror({ count }) {
  useEffect(() => {
    document.title = 'Count: ' + count;
  }, [count]);
  return <p>Count: {count}</p>;
}`,
            takeaway:
              'The second version makes it clear which part describes UI and which part synchronizes with something outside the React render phase.',
          },
          mistakes: [
            'Treating every line of code after state changes as an effect. If it can be calculated during render from existing data, it often does not need `useEffect`.',
            'Thinking useEffect exists only to “run code later.” Its real job is synchronizing with external systems.',
            'Mutating browser state directly in the component body and then wondering why behavior feels inconsistent in development.',
          ],
          realUsage: [
            'Updating `document.title` after state changes.',
            'Starting or stopping timers, subscriptions, or event listeners.',
            'Keeping browser storage or other external state aligned with React state.',
          ],
          practice: {
            question:
              'If a value can be computed directly from props and state during render, should it usually become an effect or stay a pure calculation?',
            task: 'Name one thing from this app that is pure render output and one thing that is an external synchronization task.',
          },
          summaryPoints: [
            'A side effect is work that reaches outside pure render.',
            'React separates rendering from synchronization on purpose.',
            'useEffect is mainly for external systems, not for arbitrary extra code.',
          ],
        },
        lifecycleCleanup: {
          title: 'Mount, update, unmount, setup, and cleanup',
          badge: 'lifecycle',
          accent: '#2563eb',
          summary:
            'An effect can set something up after commit and clean it up before a rerun or when the component unmounts, which prevents old timers, subscriptions, and stale work from hanging around.',
          whyExists:
            'External work often has a lifetime. If React starts a timer or subscription, it also needs a reliable way to stop or replace that work later.',
          problem:
            'Without cleanup, each update could leave old intervals, event listeners, subscriptions, or scheduled tasks still running, causing duplicated work and confusing bugs.',
          howItWorks: [
            'On the first committed render, React can run effect setup. This often corresponds to mount-time synchronization.',
            'If dependencies change later, React first runs the previous cleanup, then runs the new setup with the latest values.',
            'When the component unmounts, React runs the last cleanup so outside work is released.',
            'In development Strict Mode, React may run setup and cleanup twice on mount to expose effects that are not resilient to being started and stopped cleanly.',
          ],
          simulation: [
            {
              title: 'Render happens',
              body: 'The component calculates its UI from props and state. The interval, listener, or subscription is not started yet.',
            },
            {
              title: 'Commit happens',
              body: 'React places the UI into the DOM. Only after that does effect setup run.',
            },
            {
              title: 'Effect setup starts outside work',
              body: 'For example, an interval begins ticking or a browser listener is attached.',
            },
            {
              title: 'A dependency changes',
              body: 'Before React sets up the new effect, it runs cleanup for the previous one so the old outside work stops first.',
            },
            {
              title: 'New setup runs',
              body: 'The effect starts again with the latest values, so React stays synchronized with current props and state instead of stale ones.',
            },
            {
              title: 'Component unmounts',
              body: 'React runs the final cleanup so no old timer, listener, or subscription remains alive after the UI disappears.',
            },
          ],
          example: {
            title: 'Interval setup and cleanup',
            code: `useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTick(new Date());
  }, 1000);

  return () => window.clearInterval(intervalId);
}, []);`,
            explanation:
              'The setup starts the interval once after the first commit. The cleanup clears it when the component unmounts. In development Strict Mode, this pattern also survives the extra setup-cleanup cycle cleanly.',
          },
          comparison: {
            before: `// Leaky pattern
useEffect(() => {
  window.setInterval(() => {
    setTick(new Date());
  }, 1000);
}, []);`,
            after: `// Safe pattern
useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTick(new Date());
  }, 1000);

  return () => window.clearInterval(intervalId);
}, []);`,
            takeaway:
              'Cleanup is not an optional extra. It is how you tell React how to stop or replace outside work when the component lifecycle changes.',
          },
          mistakes: [
            'Thinking cleanup runs only on unmount. It also runs before the effect reruns with changed dependencies.',
            'Getting alarmed by Strict Mode double-run in development and assuming production will always behave the same way. The development extra cycle is there to catch fragile effects.',
            'Starting intervals or listeners without returning a cleanup function.',
          ],
          realUsage: [
            'Intervals for clocks, autosave, or polling.',
            'Window or document event listeners that must be detached later.',
            'Subscriptions or integrations that need teardown when the component updates or disappears.',
          ],
          practice: {
            question:
              'If an effect depends on `query` and `query` changes, what happens first: the new setup or the old cleanup?',
            task: 'Explain in one sentence why Strict Mode’s extra setup-cleanup cycle can expose buggy effects during development.',
          },
          summaryPoints: [
            'Setup starts outside work after commit.',
            'Cleanup runs before reruns and on unmount.',
            'Strict Mode helps reveal effects that are not safe to start and stop cleanly.',
          ],
        },
        dependencies: {
          title: 'Dependency arrays, stale values, and reruns',
          badge: 'dependencies',
          accent: '#d97706',
          summary:
            'The dependency array tells React when an effect must resynchronize: after every commit, only on mount/unmount, or when specific values change.',
          whyExists:
            'React needs a declarative way for components to say which values an effect depends on so synchronization happens when necessary, but not when unnecessary.',
          problem:
            'Without dependency tracking, effects either rerun too often, miss needed updates, or keep reading stale values captured from an older render.',
          howItWorks: [
            'No dependency array means the effect runs after every committed render, because React has no narrower resynchronization rule.',
            'An empty array means React treats the effect as depending on nothing from changing render values, so it sets up once and cleans up on unmount.',
            'A specific dependency list means React compares those values between renders and reruns the effect only when one of them changes.',
            'If you use changing values inside an effect but omit them from dependencies, the effect may keep stale values from an earlier render.',
          ],
          simulation: [
            {
              title: 'No dependency array',
              body: 'React commits the component, runs the effect, commits again later after any state change, and runs the effect again every time.',
            },
            {
              title: 'Empty dependency array',
              body: 'React commits the component, runs the effect once, and later only runs cleanup when the component unmounts.',
            },
            {
              title: 'Specific dependencies',
              body: 'React commits the component, runs the effect, then compares listed values on later renders and reruns the effect only when one of those values changes.',
            },
            {
              title: 'Stale value bug',
              body: 'An effect closes over an older `query` or `count` value because the dependency list did not include it, so the outside synchronization no longer matches the latest state.',
            },
          ],
          example: {
            title: 'Specific dependencies for title sync',
            code: `useEffect(() => {
  document.title = 'Search: ' + query;
}, [query]);`,
            explanation:
              'The effect reruns when `query` changes because the title must stay synchronized with that specific value. Leaving `query` out would risk stale title updates.',
          },
          comparison: {
            before: `// Too broad
useEffect(() => {
  document.title = 'Search: ' + query;
});`,
            after: `// Intentional dependency
useEffect(() => {
  document.title = 'Search: ' + query;
}, [query]);`,
            takeaway:
              'The second version communicates the synchronization rule directly: rerun only when `query` changes.',
          },
          mistakes: [
            'Using `[]` just to silence reruns, even when the effect actually depends on changing values.',
            'Assuming no dependency array and an empty array mean the same thing. They do not.',
            'Ignoring stale values and then being surprised when an effect uses old state or props.',
          ],
          realUsage: [
            'Synchronizing browser title to a specific value.',
            'Refiring an effect when a search term, id, or filter changes.',
            'Preventing unnecessary resynchronization when unrelated renders happen.',
          ],
          practice: {
            question:
              'Which choice describes “run after every committed render”: no dependency array, `[]`, or `[query]`?',
            task: 'Write one sentence for each dependency mode: no array, empty array, and specific dependencies.',
          },
          summaryPoints: [
            'No array means after every commit.',
            'An empty array means once on mount, then cleanup on unmount.',
            'Specific dependencies mean rerun when those values change, which helps avoid stale synchronization.',
          ],
        },
        browserSync: {
          title: 'Timers, debounce, document.title, and localStorage',
          badge: 'browser APIs',
          accent: '#059669',
          summary:
            'Many effects exist to synchronize React state with browser APIs such as timers, the page title, and localStorage.',
          whyExists:
            'React state alone cannot schedule time, update the browser tab title, or persist data between reloads. Those jobs belong to external browser APIs.',
          problem:
            'If state changes are not synchronized to timers, titles, or storage carefully, the UI and the browser can drift apart, and old scheduled work can keep running.',
          howItWorks: [
            'Timer effects use `setInterval` or `setTimeout` in setup and `clearInterval` or `clearTimeout` in cleanup.',
            'Debounce is a controlled delay pattern: each change schedules future work, and cleanup cancels the older scheduled work if a new change arrives first.',
            'Title synchronization writes to `document.title` after commit so the browser tab reflects the current UI state.',
            'Storage synchronization reads an initial value from `localStorage`, then later writes updated values so state survives refreshes.',
          ],
          simulation: [
            {
              title: 'User types',
              body: 'The component state updates immediately, but the debounced value should not apply yet because React schedules a timeout for later.',
            },
            {
              title: 'A timeout is scheduled',
              body: 'The effect setup starts a timeout that will copy the latest query after a short delay.',
            },
            {
              title: 'The user types again before the delay ends',
              body: 'React reruns the effect, but first cleanup clears the old timeout so outdated scheduled work cannot win.',
            },
            {
              title: 'Only the final timeout applies',
              body: 'After typing settles, the last timeout completes and the debounced value is updated with the final text.',
            },
            {
              title: 'State is saved to localStorage',
              body: 'After the note changes, browser storage is updated so the latest note is available later outside the current render cycle.',
            },
            {
              title: 'The page reloads and state is restored',
              body: 'On the next load, the stored browser value becomes the starting state again, so the learner sees the saved note instead of losing it.',
            },
          ],
          example: {
            title: 'Timeout cleanup for debounce',
            code: `useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    setDebouncedQuery(query.trim().toLowerCase());
  }, 350);

  return () => window.clearTimeout(timeoutId);
}, [query]);`,
            explanation:
              'Each new `query` schedules a timeout. Cleanup clears the previous timeout, so the debounced value only reflects the final settled input.',
          },
          comparison: {
            before: `// Without cleanup
useEffect(() => {
  window.setTimeout(() => {
    setDebouncedQuery(query);
  }, 350);
}, [query]);`,
            after: `// With cleanup
useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    setDebouncedQuery(query);
  }, 350);

  return () => window.clearTimeout(timeoutId);
}, [query]);`,
            takeaway:
              'Cleanup matters even for short-lived browser APIs like timeouts. Without it, old scheduled work can apply stale values.',
          },
          mistakes: [
            'Using a timeout or interval without clearing it later.',
            'Thinking debounce is a different React feature. It is just a timed synchronization pattern built from browser APIs and cleanup.',
            'Writing to localStorage or `document.title` during render instead of during synchronization.',
          ],
          realUsage: [
            'Search boxes that should wait briefly before applying expensive work.',
            'Page titles that reflect the current item, count, or mode.',
            'Draft saving, note persistence, and restoring UI state across refreshes.',
          ],
          practice: {
            question:
              'If the user types again before a debounce timeout finishes, what should happen to the older timeout?',
            task: 'Explain why `document.title` and `localStorage` count as external systems rather than pure render output.',
          },
          summaryPoints: [
            'Timers, titles, and storage are browser APIs outside React render.',
            'Cleanup prevents outdated scheduled work from applying later.',
            'Synchronization keeps browser state aligned with React state.',
          ],
        },
        avoidEffects: {
          title: 'When not to use useEffect',
          badge: 'avoid misuse',
          accent: '#0f766e',
          summary:
            'Not every value change needs an effect. If a result can be derived directly during render from props and state, adding an effect often makes the code more complicated than necessary.',
          whyExists:
            'Many beginners overuse `useEffect` because it feels like a general “do something after render” tool, but that habit creates extra state, extra rerenders, and more moving parts.',
          problem:
            'Using effects for derived values or internal calculations can duplicate state, trigger unnecessary rerenders, and hide simple logic behind timing-based synchronization code.',
          howItWorks: [
            'Derived state is a value you can calculate directly from existing props or state during render, such as filtering an array or combining first and last name into one label.',
            'Effect-based synchronization is for external systems, not for recomputing values that already live fully inside React data flow.',
            'A good question is: “Am I syncing with something outside React, or am I just calculating a value for UI?” If it is only calculation, render is usually enough.',
          ],
          simulation: [
            {
              title: 'A prop changes',
              body: 'The component rerenders anyway because React already has new data for that render pass.',
            },
            {
              title: 'A derived value could be calculated immediately',
              body: 'For example, filtered items or a full name can be recomputed directly in render from the latest props and state.',
            },
            {
              title: 'An unnecessary effect version adds extra state',
              body: 'The component renders once, then the effect runs, then a setter triggers another render just to store a value that could have been calculated in the first render.',
            },
            {
              title: 'The simpler render-only version avoids the extra cycle',
              body: 'The UI stays easier to read because there is no unnecessary effect, no extra state, and no delayed synchronization logic.',
            },
          ],
          example: {
            title: 'Derived state should stay derived',
            code: `function Greeting({ firstName, lastName }) {
  const fullName = firstName + ' ' + lastName;
  return <p>Hello, {fullName}</p>;
}`,
            explanation:
              'There is no need for an effect here. `fullName` is a pure derived value from props, so render can compute it directly every time.',
          },
          comparison: {
            before: `// Unnecessary effect
const [fullName, setFullName] = useState('');

useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);`,
            after: `// Pure derivation
const fullName = firstName + ' ' + lastName;`,
            takeaway:
              'The second version removes duplicated state and an extra render cycle. Effects should synchronize with external systems, not replace simple calculations.',
          },
          mistakes: [
            'Using `useEffect` to mirror props into state when a direct render calculation would do.',
            'Using effects to perform ordinary event-driven logic that belongs directly in a click or input handler.',
            'Assuming “after render” automatically means “should be in useEffect.”',
          ],
          realUsage: [
            'Choosing plain derived render values for filtered lists or labels.',
            'Keeping event-specific logic inside handlers instead of pushing it into effects.',
            'Reducing unnecessary state and rerenders in large component trees.',
          ],
          practice: {
            question:
              'If you can compute a filtered array directly from `items` and `searchTerm` during render, do you usually need extra state plus an effect?',
            task: 'Give one example of a value that should stay derived in render and one example of work that truly belongs in an effect.',
          },
          summaryPoints: [
            'Do not reach for `useEffect` when a value can be derived during render.',
            'Effects are for external synchronization, not for every internal calculation.',
            'Less duplicated state usually means simpler, safer components.',
          ],
        },
      },
      routingNotes: [
        'Ask first: is this synchronizing with an external system, or is it just a calculation that render can already do?',
        'Cleanup runs before reruns and on unmount, so old outside work does not keep leaking forward.',
        'Dependency arrays are synchronization rules, not magic performance flags.',
      ],
      quizTitle: 'Check your effect mental model',
      tipsTitle: 'Effect reminders',
      tips: [
        'Every effect should have a clear synchronization target outside React.',
        'If you can derive a value during render, prefer that over effect-driven mirror state.',
        'When debugging an effect, inspect setup, cleanup, dependency choice, and whether the work is really external at all.',
      ],
    },
    routing: {
      stageLabel: 'Step 5.5',
      title: 'Routing, links, and fallback routes',
      hero: {
        eyebrow: 'Step 5.5',
        title: 'Routing, links, and fallback routes',
        lead: 'This lesson shows how one React app maps URL paths to page components, keeps English and Persian routes in sync, and recovers cleanly from unsupported locales and not-found pages.',
        primaryAction: 'I practiced this section',
        secondaryAction: 'Go to Context & Shared State',
      },
      summary: {
        intro:
          'Client-side routing lets this app change pages without a full document reload. The browser URL still matters, but React Router decides which page component to render and the app shell stays mounted.',
        points: [
          'URL paths map to page components',
          'Internal links should use Link or NavLink',
          'Locale prefixes keep Persian and English routes aligned',
          'Fallback routes handle unsupported locales and not-found pages',
        ],
        prerequisites: [
          'React components, props, state, and render flow',
          'events and controlled form state',
          'effects and browser synchronization basics',
          'awareness of the /fa and /en route prefixes',
        ],
        keyPoints: [
          'Route paths are not pages themselves',
          'Link changes location without a full reload',
          '/:locale protects the app structure',
          'Not-found routes turn typos into recovery',
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'How routing maps URLs to pages',
        lead: 'Pick one topic and follow it from path to component, link, locale guard, redirect, or fallback.',
        chooserLabel: 'Choose a routing topic',
        sections: {
          definition: '1. Simple definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works',
          simulation: '5. Step-by-step simulation',
          example: '6. Practical code example',
          beforeAfter: '7. Before/after comparison',
          mistakes: '8. Common beginner mistakes',
          usage: '9. Real project usage',
          practice: '10. Mini practice or quiz',
          summary: '11. Simple summary',
        },
        practiceQuestion: 'Prediction question',
        practiceTask: 'Tiny practice',
        beforeLabel: 'Before',
        afterLabel: 'After',
        simulationIntro: 'Behind the scenes',
      },
      live: {
        eyebrow: 'Live lab',
        title: 'Route Explorer',
        lead: 'Choose a sample path or type one of your own to see how this app reads locale, page, and recovery behavior.',
        guidance:
          'Use the controls below to inspect paths. The lab stays on this page and does not navigate the app.',
        stateNote:
          'Routing interactions here only update local state. No persistence, no XP, and no real navigation.',
        labels: {
          sampleLabel: 'Sample paths',
          selectLabel: 'Choose a sample path',
          inputLabel: 'Type a custom path',
          customOption: 'Custom path',
          selectedPath: 'Selected path',
          localeSegment: 'Locale segment',
          pageSegment: 'Page segment',
          matchStatus: 'Match status',
          matchedPage: 'Matched page label',
          safeRedirect: 'Safe redirect example',
          activePreview: 'Active-link style preview',
          previewEmpty: 'No sample chip matches this custom path.',
          recovery: 'Not-found recovery',
        },
        status: {
          valid: 'Valid',
          unsupportedLocale: 'Unsupported locale',
          notFound: 'Not found',
        },
        statusDescriptions: {
          valid: 'The path resolves to a page in the current locale.',
          unsupportedLocale: 'The locale segment is not supported, so this app falls back to /fa.',
          notFound:
            'The locale is supported, but no page matches the path. Show the not-found page and a home link.',
        },
      },
      quizTitle: 'Check your routing mental model',
      tipsTitle: 'Routing reminders',
      tipsIntro: 'Short reminders, a quick practice prompt, and the most common mistakes to avoid.',
      tips: [
        'Use Link or NavLink for internal navigation so the app keeps its state.',
        'Build localized links with localizedPath(language, "/routing") instead of hardcoding /fa or /en everywhere.',
        'Treat unsupported locales and not-found paths as different problems.',
      ],
      mistakes: [
        'Using raw anchors for internal navigation and forcing a full reload.',
        'Forgetting to add the new route to App.jsx and the navigation manifest together.',
        'Mixing unsupported locale recovery with not-found recovery.',
      ],
      practicePrompts: [
        {
          id: 'routing-practice-react',
          title: 'Trace a path',
          prompt: 'Trace what renders for /fa/effects.',
          hint: 'Start at /:locale, then follow the nested route that matches the page segment.',
          expectedOutcome: 'EffectsPage renders inside the Persian route shell.',
        },
        {
          id: 'routing-practice-fallback',
          title: 'Recover safely',
          prompt: 'Explain how the app should recover from /de/react.',
          hint: 'The locale is not supported, so the guard should redirect to the default locale.',
          expectedOutcome: 'The app falls back to /fa.',
        },
      ],
      topics: {
        'client-routing': {
          title: 'Client-side routing',
          badge: 'browser path',
          accent: '#2563eb',
          summary:
            'Client-side routing keeps one React app on screen while the path changes, so the browser can move between pages without asking for a brand-new document every time.',
          definition:
            'Client-side routing is the pattern of reading the current URL in the browser and choosing which React page component should render.',
          whyExists:
            'It keeps the app fast, preserves stateful UI, and lets the browser history work without a full reload.',
          problem:
            'Without client-side routing, every page change would throw away the current app state and reload the entire document.',
          howItWorks: [
            'The router watches the browser location and history.',
            'A route table matches the current path to the right page component.',
            'React renders the matched page while the app shell stays mounted.',
          ],
          simulation: [
            {
              title: 'A learner clicks an internal link',
              body: 'The browser changes location inside the app instead of requesting a new HTML document from the server.',
            },
            {
              title: 'React Router reads the new path',
              body: 'The route table is checked against the current locale and page segment.',
            },
            {
              title: 'The matching page component renders',
              body: 'Only the page body changes. Navigation and shell state stay in place.',
            },
            {
              title: 'The browser history still works',
              body: 'Back and forward buttons keep using the normal browser history stack.',
            },
          ],
          example: {
            title: 'A page route in App.jsx',
            code: `<Routes>
  <Route path=":locale" element={<LocaleRouteGuard />}>
    <Route element={<AppShell />}>
      <Route path="effects" element={<EffectsPage />} />
      <Route path="routing" element={<RoutingPage />} />
    </Route>
  </Route>
</Routes>`,
            explanation:
              'The URL chooses the component. The component does not hardcode the whole page behavior.',
          },
          comparison: {
            before: `// Full reload mindset
window.location.href = '/effects';
// The browser requests a brand-new document.`,
            after: `// Client-side routing
<Link to={localizedPath(language, '/effects')}>Effects</Link>
// React swaps the page without reloading the document.`,
            takeaway:
              'Routing keeps the app feeling like one application instead of a chain of separate documents.',
          },
          mistakes: [
            'Thinking every URL change means a full reload.',
            'Mixing route selection with page-specific UI code.',
            'Forgetting that the browser history still exists and should keep working.',
          ],
          realUsage: [
            'Course navigation between lessons.',
            'Locale-aware page switching.',
            'Preserving app state while the learner moves around.',
          ],
          practice: {
            question: 'If the path becomes /fa/effects, what should the router do?',
            task: 'Trace the route tree from :locale to the matching page component.',
          },
          summaryPoints: [
            'The router reads location and picks a page component.',
            'Client-side routing keeps the current app shell alive.',
            'History changes do not need a brand-new document request.',
          ],
        },
        'routes-pages': {
          title: 'Routes and pages',
          badge: 'mapping',
          accent: '#7c3aed',
          summary:
            'A Route connects a path segment to a page component. That simple mapping is what turns a URL into a screen.',
          definition:
            'A route is a rule that says which component should render when a specific path matches the current location.',
          whyExists:
            'Route tables keep path selection in one place instead of spreading page logic across the app shell.',
          problem:
            'If route selection is hidden inside many conditionals, the app becomes harder to scan and maintain.',
          howItWorks: [
            'Routes groups the matching rules.',
            'Each Route declares a path and the element to render.',
            'Nested routes let the locale shell and the lesson pages share one structure.',
          ],
          simulation: [
            {
              title: 'The browser visits /fa/routing',
              body: 'The locale segment is checked first, then the page segment is matched against the nested lesson routes.',
            },
            {
              title: 'The matching Route wins',
              body: 'The router finds the routing page entry and renders that page component.',
            },
            {
              title: 'A pathless layout can still wrap the page',
              body: 'The app shell sits above the lesson pages without needing a URL of its own.',
            },
            {
              title: 'A not-found route catches the rest',
              body: 'If no lesson path matches, the app can still recover with a fallback page.',
            },
          ],
          example: {
            title: 'Route entries should stay explicit',
            code: `<Route path="routing" element={<RoutingPage />} />
<Route path="project" element={<ProjectPage />} />
<Route path="*" element={<NotFoundPage />} />`,
            explanation:
              'The route table is easy to scan because each path maps directly to the page it should render.',
          },
          comparison: {
            before: `// Scattered route checks
if (path === '/routing') {
  return <RoutingPage />;
}
if (path === '/project') {
  return <ProjectPage />;
}`,
            after: `// Central route table
<Route path="routing" element={<RoutingPage />} />
<Route path="project" element={<ProjectPage />} />`,
            takeaway: 'The route table keeps page selection declarative and easy to extend.',
          },
          mistakes: [
            'Confusing a path string with the page component itself.',
            'Hiding route logic in random conditional branches.',
            'Adding a new page without adding its route entry.',
          ],
          realUsage: [
            'Lesson pages and app shell layout.',
            'The project capstone route.',
            'Fallback routes for unknown paths.',
          ],
          practice: {
            question: 'Which component should render for /fa/events-forms?',
            task: 'Match one path to one page component and write the pair as a Route entry.',
          },
          summaryPoints: [
            'A Route connects path and component.',
            'Route tables should be explicit and easy to scan.',
            'Nested routes keep layout and page selection separate.',
          ],
        },
        'links-navigation': {
          title: 'Links and navigation',
          badge: 'navigation',
          accent: '#0ea5e9',
          summary:
            'Use Link or NavLink for internal navigation so the app changes location without throwing away state or reloading the document.',
          definition:
            'Link is the router-aware replacement for internal anchors, and NavLink adds route-aware active styling when you need it.',
          whyExists:
            'Users should move around the app without losing the current lesson state or waiting for a full reload.',
          problem:
            'Plain anchors are fine for external sites, but they trigger a full document load for internal navigation and can reset the React app.',
          howItWorks: [
            'Link updates the router location inside the app.',
            'NavLink can inspect whether its target is active and style itself accordingly.',
            'The browser still handles history, back, and forward buttons.',
          ],
          simulation: [
            {
              title: 'A learner chooses a lesson link',
              body: 'The app changes location from /fa/react to /fa/routing without rebuilding the document.',
            },
            {
              title: 'The router keeps state in place',
              body: 'Open controls, tabs, and other stateful UI do not need to restart from scratch.',
            },
            {
              title: 'Active styling can follow the current path',
              body: 'NavLink can add a current-state style when the target path matches the active location.',
            },
            {
              title: 'External links still use normal anchors',
              body: 'Router links are for internal app navigation, not for every URL on the internet.',
            },
          ],
          example: {
            title: 'Internal navigation should stay router-aware',
            code: `<Link to={localizedPath(language, '/routing')}>Routing</Link>
<NavLink to={localizedPath(language, '/effects')}>Effects</NavLink>`,
            explanation:
              'The router handles the move, and NavLink can add active styling when a target is current.',
          },
          comparison: {
            before: `// Full reload
<a href="/project">Project</a>`,
            after: `// Internal navigation
<Link to={localizedPath(language, '/project')}>Project</Link>`,
            takeaway:
              'Router links keep the app stateful and fast, while active links make the current route clear.',
          },
          mistakes: [
            'Using href for internal lesson navigation.',
            'Using Link for external sites.',
            'Forcing active state with custom code when NavLink already covers it.',
          ],
          realUsage: [
            'Top-level lesson navigation.',
            'Completion CTAs between lessons.',
            'Active lesson or tab styling.',
          ],
          practice: {
            question: 'When should NavLink be preferred over Link?',
            task: 'Rewrite one internal anchor so it uses a router-aware link.',
          },
          summaryPoints: [
            'Link is for internal navigation.',
            'NavLink is for internal navigation that also needs active styling.',
            'Anchors are still for external URLs.',
          ],
        },
        'localized-routes': {
          title: 'Localized routes',
          badge: 'locale',
          accent: '#059669',
          summary:
            'The :locale segment keeps /fa and /en versions aligned so this app can serve Persian and English without duplicating the route tree by hand.',
          definition:
            'Localized routing means the locale sits in the URL path and scopes the lesson pages beneath it.',
          whyExists:
            'One route tree can serve two languages while keeping the lesson order and structure the same.',
          problem:
            'Hardcoded locale paths drift apart quickly and make bilingual maintenance harder.',
          howItWorks: [
            'The :locale route segment captures the current language scope.',
            'The locale guard checks whether the segment is supported.',
            'localizedPath(language, path) inserts the right locale prefix for internal links.',
          ],
          simulation: [
            {
              title: 'The app receives /fa/routing',
              body: 'The locale segment is fa, so the Persian version of the lesson tree stays in scope.',
            },
            {
              title: 'The same route shape also works for /en/routing',
              body: 'The English version uses the same route structure with a different locale prefix.',
            },
            {
              title: 'Internal links are built from the locale helper',
              body: 'The lesson can point to localizedPath(language, "/project") without hardcoding /fa or /en.',
            },
            {
              title: 'A bad locale should not break the app tree',
              body: 'An unsupported locale should recover through the guard instead of leaving the app in a broken state.',
            },
          ],
          example: {
            title: 'Build locale-aware lesson links',
            code: `const projectPath = localizedPath(language, '/project');

<Route path=":locale" element={<LocaleRouteGuard />}>
  <Route element={<AppShell />}>
    <Route path="routing" element={<RoutingPage />} />
  </Route>
</Route>`,
            explanation:
              'The helper keeps lesson links aligned across languages, and the locale route keeps the app structure consistent.',
          },
          comparison: {
            before: `// Hardcoded and fragile
<Link to="/fa/routing">Routing</Link>
<Link to="/en/routing">Routing</Link>`,
            after: `// Locale-aware and aligned
<Link to={localizedPath(language, '/routing')}>Routing</Link>`,
            takeaway:
              'A locale helper prevents duplicated link logic and keeps both languages in sync.',
          },
          mistakes: [
            'Hardcoding one locale into internal links.',
            'Duplicating the entire route tree for each language.',
            'Forgetting to scope the lesson routes under :locale.',
          ],
          realUsage: [
            'App-wide navigation labels.',
            'Lesson completion CTAs.',
            'Language switch behavior and route guards.',
          ],
          practice: {
            question: 'Why do /fa/routing and /en/routing need to stay parallel?',
            task: 'Name one place where localizedPath should be used in this app.',
          },
          summaryPoints: [
            'The locale lives in the path.',
            'One route tree can serve both languages.',
            'localizedPath keeps internal links aligned.',
          ],
        },
        'fallback-routes': {
          title: 'Fallback routes',
          badge: 'recovery',
          accent: '#d97706',
          summary:
            'Fallback routes keep bad URLs recoverable by redirecting unsupported locales and showing a not-found page for unknown pages.',
          definition:
            'A fallback route is a safe way to handle a path that does not match a normal lesson page.',
          whyExists:
            'Learners mistype URLs, follow old bookmarks, and land on unsupported locales. The app should still give them a way forward.',
          problem:
            'Without a fallback, a bad URL becomes a dead end instead of a recoverable state.',
          howItWorks: [
            'The locale guard catches unsupported language prefixes.',
            'The catch-all route path="*" handles unknown lesson pages.',
            'The not-found page gives the learner a link back to a known route.',
          ],
          simulation: [
            {
              title: 'A learner visits /de/react',
              body: 'The locale is not supported, so the app redirects to the default locale root.',
            },
            {
              title: 'A learner visits /fa/unknown',
              body: 'The locale is valid, but the page segment does not match a lesson route.',
            },
            {
              title: 'The catch-all route renders NotFoundPage',
              body: 'Instead of a blank screen, the app shows a recovery page with a way home.',
            },
            {
              title: 'The learner can continue from there',
              body: 'A fallback is not the end of the journey; it is a safe return point.',
            },
          ],
          example: {
            title: 'Recovery should stay explicit',
            code: `<Route path="*" element={<NotFoundPage />} />

if (!supportedLocales.includes(locale)) {
  return <Navigate to="/fa" replace />;
}`,
            explanation:
              'The app can redirect unsupported locales and still show a useful not-found page for unknown lesson paths.',
          },
          comparison: {
            before: `// Dead end
<Route path="*" element={<div>404</div>} />`,
            after: `// Recovery path
<Route path="*" element={<NotFoundPage />} />
<Link to={localizedPath(language, '/')}>Home</Link>`,
            takeaway:
              'A fallback route should recover the learner, not strand them on a blank page.',
          },
          mistakes: [
            'Treating unsupported locales and not-found routes as the same problem.',
            'Hiding the recovery link on the not-found page.',
            'Letting a bad URL become a blank screen.',
          ],
          realUsage: [
            'Typo recovery.',
            'Old bookmarks and shared links.',
            'Unsupported locale entry points.',
          ],
          practice: {
            question: 'What should happen for /fa/unknown?',
            task: 'Describe the difference between unsupported locale recovery and not-found recovery.',
          },
          summaryPoints: [
            'Fallback routes keep bad URLs recoverable.',
            'Unsupported locale and not-found are different cases.',
            'A good recovery page always points the learner somewhere useful.',
          ],
        },
      },
    },
    'context-state': {
      stageLabel: 'Step 8',
      title: 'Context and shared state',
      hero: {
        eyebrow: 'Step 8',
        title: 'Context and shared state',
        lead: 'This lesson shows when local state is enough, when to lift state to the nearest parent, and when Context helps many parts of the app share one value across a provider boundary.',
        primaryAction: 'I practiced this lesson',
        secondaryAction: 'Go to project architecture',
      },
      summary: {
        intro:
          'Some state belongs to one component, some belongs to the nearest shared parent, and some belongs to a provider boundary that many parts of the app need. This lesson keeps those boundaries visible.',
        points: [
          'prop drilling',
          'state placement',
          'provider boundaries',
          'custom context hooks',
          'LanguageContext and LearningProgressContext',
          'when Context is the wrong tool',
        ],
        prerequisites: [
          'React components, props, state, and render flow',
          'Events and controlled forms',
          'Effects and route awareness',
          'Familiarity with the current app shell and locale prefixes',
        ],
        keyPoints: [
          'Local state is still the default for isolated UI',
          'Lift state when nearby siblings need the same value',
          'Use Context when many distant components need the same value',
          'Custom hooks hide raw context details and guard provider usage',
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'How shared state moves through the app',
        lead: 'Pick a topic and follow the value from prop drilling to provider boundaries and custom hooks.',
        chooserLabel: 'Choose a shared-state topic',
        sections: {
          definition: '1. Simple definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works',
          simulation: '5. Step-by-step simulation',
          example: '6. Practical code example',
          beforeAfter: '7. Before/after comparison',
          mistakes: '8. Common beginner mistakes',
          usage: '9. Real project usage',
          practice: '10. Mini practice or quiz',
          summary: '11. Simple summary',
        },
        practiceQuestion: 'Prediction question',
        practiceTask: 'Tiny practice',
        beforeLabel: 'Before',
        afterLabel: 'After',
        simulationIntro: 'Behind the scenes',
      },
      live: {
        eyebrow: 'Live lab',
        title: 'Shared State Simulator',
        lead: 'Compare local state, lifted state, and Context-like shared state with one small badge value.',
        guidance: 'Change the mode and watch how the sibling previews react.',
        stateNote:
          'This simulator stays page-owned. It does not use the real language or progress contexts, does not persist anything, and does not award XP.',
        modeLabel: 'State layout',
        valueLabel: 'Demo badge',
        valueControlLabel: 'Shared value',
        localValueControlLabel: 'Local value',
        localValueHint: 'Each sibling keeps its own copy in this mode.',
        siblingLabels: {
          left: 'Sibling A',
          right: 'Sibling B',
        },
        localLabels: {
          leftControl: 'Left sibling value',
          rightControl: 'Right sibling value',
          leftNote: 'This sibling owns its own copy.',
          rightNote: 'This sibling owns its own copy.',
        },
        modes: {
          local: {
            label: 'Local state',
            summary: 'Each sibling owns its own copy.',
            valueControlLabel: 'Badge label',
            valueHint: 'You can split the two sibling values here to show independence.',
            panelNote: 'Independent copy',
            fits: 'Use local state when one small UI area owns the value.',
            tradeoff: 'The sibling previews can drift apart because no shared parent exists.',
            boundaryNote: 'There is no provider boundary here.',
          },
          lifted: {
            label: 'Lifted state',
            summary: 'The nearest shared parent owns one value for both siblings.',
            valueControlLabel: 'Parent value',
            valueHint: 'The nearest parent now owns the badge for both sibling previews.',
            panelNote: 'Reads from the nearest shared parent.',
            fits: 'Use lifted state when nearby siblings need the same value and the nearest parent is the right owner.',
            tradeoff:
              'The value still stops at that parent, so distant components would need more plumbing.',
            boundaryNote: 'The shared parent sits above both siblings.',
          },
          context: {
            label: 'Context-like shared state',
            summary:
              'A provider boundary gives both siblings the same value without prop drilling.',
            valueControlLabel: 'Provider value',
            valueHint: 'The provider boundary now supplies the badge to both sibling previews.',
            panelNote: 'Reads from a provider boundary.',
            fits: 'Use Context when many distant components need the same value through one provider boundary.',
            tradeoff: 'Context is not for every keystroke or tiny local interaction.',
            boundaryNote: 'The provider wraps the consumers that need the shared value.',
          },
        },
        boundary: {
          title: 'Provider boundary preview',
          outside: 'Outside provider',
          provider: 'Provider',
          consumerA: 'Consumer A',
          consumerB: 'Consumer B',
          explanation: 'A provider defines the subtree that can read the shared value.',
          localNote: 'Local state does not cross a provider boundary because there is no provider.',
          currentValue: 'Current value',
          noValue: 'No shared value selected',
        },
        modeFitLabel: 'Why this mode fits',
        modeTradeoffLabel: 'Why this mode may not fit',
        valueOptions: [
          { value: 'starter', label: 'Starter' },
          { value: 'steady', label: 'Steady' },
          { value: 'ready', label: 'Ready' },
        ],
      },
      quizTitle: 'Check your shared-state mental model',
      tipsTitle: 'Shared state reminders',
      tipsIntro: 'Short reminders, a quick practice prompt, and the most common mistakes to avoid.',
      tips: [
        'Do not move state into Context just because passing one prop feels annoying.',
        'Keep temporary drafts local when only one screen needs them.',
        'Use custom hooks like useLanguage and useLearningProgress so consumers stay inside the provider.',
      ],
      mistakes: [
        'Putting every form keystroke into app-wide Context.',
        'Forgetting that consumers must live inside the provider boundary.',
        'Exposing raw context objects everywhere instead of one small hook API.',
      ],
      practicePrompts: [
        {
          id: 'context-practice-placement',
          title: 'Pick the right home',
          prompt:
            'Decide whether a draft comment should stay local, be lifted, or move into Context.',
          hint: 'Only move state farther out when more of the tree really needs the same value.',
          expectedOutcome:
            'A good answer explains why the nearest owner is local or lifted unless many distant consumers need it.',
        },
        {
          id: 'context-practice-boundary',
          title: 'Draw the boundary',
          prompt: 'Trace how language reaches a navigation link in this app.',
          hint: 'Think about useLanguage, localizedPath, and the locale-aware app shell.',
          expectedOutcome:
            'The link reads language from Context and builds a localized path inside the provider boundary.',
        },
      ],
      topics: {
        'prop-drilling': {
          title: 'Prop drilling',
          badge: 'tree',
          accent: '#2563eb',
          summary:
            'Prop drilling happens when a value passes through components that do not use it so a deeper child can finally read it.',
          definition:
            'Prop drilling is passing the same prop through layers of components that only forward it.',
          whyExists: 'It exposes when a value is in the wrong place for the current tree shape.',
          problem:
            'The middle components become noisy pass-throughs, even though they do not care about the value.',
          howItWorks: [
            'A parent owns the value.',
            'Each middle component forwards the prop.',
            'The leaf component finally uses it.',
          ],
          simulation: [
            {
              title: 'The parent owns the badge label',
              body: 'The label starts at the top of the tree because the leaf needs it.',
            },
            {
              title: 'Intermediate components forward it unchanged',
              body: 'These components do not use the prop, but they still have to accept and pass it along.',
            },
            {
              title: 'The leaf finally reads the value',
              body: 'The final component uses the prop after all the forwarding work.',
            },
          ],
          example: {
            title: 'A prop that travels too far',
            code: `function App() {
  return <Shell badgeLabel="Ready" />;
}

function Shell({ badgeLabel }) {
  return <Sidebar badgeLabel={badgeLabel} />;
}

function Sidebar({ badgeLabel }) {
  return <Badge badgeLabel={badgeLabel} />;
}`,
            explanation:
              'The Shell component only forwards the value. If more layers behave like that, prop drilling becomes hard to read.',
          },
          comparison: {
            before: `function Shell({ badgeLabel }) {
  return <Sidebar badgeLabel={badgeLabel} />;
}`,
            after: `const BadgeContext = createContext(null);`,
            takeaway:
              'Prop drilling is often the sign that the value belongs somewhere else in the tree.',
          },
          mistakes: [
            'Thinking every forwarded prop is harmless.',
            'Adding more pass-through components instead of rethinking ownership.',
            'Using Context when only one or two nearby components need the value.',
          ],
          realUsage: [
            'Small trees where only one child needs the data.',
            'Temporary examples that help explain data flow.',
            'Signals that the state should move closer to the real owner.',
          ],
          practice: {
            question: 'What does prop drilling usually tell you about state placement?',
            task: 'Trace one prop through a small tree and decide whether the owner should move.',
          },
          summaryPoints: [
            'Prop drilling forwards a prop through components that do not use it.',
            'It often means the value is not owned in the best place yet.',
            'Context can help when the drill is long and many consumers need the value.',
          ],
        },
        'state-placement': {
          title: 'State placement',
          badge: 'ownership',
          accent: '#0ea5e9',
          summary:
            'State placement is deciding whether a value should stay local, move to a nearby parent, or live in a provider.',
          definition:
            'State placement is the choice of where state should live in the component tree.',
          whyExists: 'Good placement keeps the tree simple and the data flow obvious.',
          problem:
            'Bad placement creates too much wiring or makes distant components impossible to keep in sync.',
          howItWorks: [
            'Start local by default.',
            'Lift state when nearby siblings need the same value.',
            'Use Context only when the shared value needs a wider subtree.',
          ],
          simulation: [
            {
              title: 'One component owns a form draft',
              body: 'If only one input uses the value, local state is enough.',
            },
            {
              title: 'Two siblings need the same value',
              body: 'The nearest shared parent becomes the owner and passes the value down.',
            },
            {
              title: 'Many distant consumers need one value',
              body: 'A provider boundary becomes the practical place to own it.',
            },
          ],
          example: {
            title: 'Choose the nearest useful owner',
            code: `function SearchBox() {
  const [query, setQuery] = useState('');
}

function Toolbar() {
  const [query, setQuery] = useState('');
  return <SearchBox query={query} onChange={setQuery} />;
}`,
            explanation:
              'The right owner depends on how many components need the value and how far apart they are in the tree.',
          },
          comparison: {
            before: `// Too local
function Badge() {
  const [value, setValue] = useState('Ready');
}`,
            after: `// Nearest useful owner
function Page() {
  const [value, setValue] = useState('Ready');
  return <Badge value={value} />;
}`,
            takeaway:
              'Start local, lift only when needed, and reserve Context for larger sharing boundaries.',
          },
          mistakes: [
            'Moving every value outward before proving that another component needs it.',
            'Keeping state too low when siblings need to stay in sync.',
            'Skipping the nearest parent and jumping straight to app-wide Context.',
          ],
          realUsage: [
            'Form drafts that belong to one screen.',
            'Shared filters that control nearby siblings.',
            'App-wide language or progress state.',
          ],
          practice: {
            question: 'When should state move up to a parent instead of staying local?',
            task: 'Pick a small feature and name the nearest component that should own the value.',
          },
          summaryPoints: [
            'Local state is the default.',
            'Lift state when nearby siblings need the same value.',
            'Move to Context only when the shared scope becomes broad enough to justify it.',
          ],
        },
        'provider-consumer': {
          title: 'Provider and consumer',
          badge: 'boundary',
          accent: '#7c3aed',
          summary:
            'A provider supplies a value to a subtree, and consumers read that value only when they are inside the boundary.',
          definition:
            'A provider is the component that makes a Context value available to its descendants.',
          whyExists:
            'It gives many descendants one shared source of truth without threading props through every layer.',
          problem:
            'Without a provider, consumers have nothing to read and the shared value cannot travel safely.',
          howItWorks: [
            'The provider wraps the subtree that needs the value.',
            'Descendants call a consumer hook or read the context.',
            'Outside the provider, the value is unavailable by design.',
          ],
          simulation: [
            {
              title: 'The provider sets the shared value',
              body: 'One component owns the source value and makes it available below.',
            },
            {
              title: 'Descendants read the value',
              body: 'Consumers inside the boundary receive the same shared data.',
            },
            {
              title: 'Outside the boundary nothing is shared',
              body: 'A component above or beside the provider cannot read that Context value.',
            },
          ],
          example: {
            title: 'A simple provider boundary',
            code: `<ThemeContext.Provider value={theme}>
  <Sidebar />
  <Content />
</ThemeContext.Provider>`,
            explanation:
              'The provider defines the boundary. Everything below it can read the shared value if it uses the matching consumer or hook.',
          },
          comparison: {
            before: `// No boundary
<Sidebar theme={theme} />
<Content theme={theme} />`,
            after: `// Shared boundary
<ThemeContext.Provider value={theme}>
  <Sidebar />
  <Content />
</ThemeContext.Provider>`,
            takeaway: 'The provider turns one shared value into a clean subtree boundary.',
          },
          mistakes: [
            'Assuming any component can read Context anywhere.',
            'Forgetting that the consumer must be inside the matching provider.',
            'Using providers so high that they rerender far more of the app than needed.',
          ],
          realUsage: [
            'Theme, language, and authentication state.',
            'App-wide progress or layout settings.',
            'Any shared data read by many descendants.',
          ],
          practice: {
            question: 'What does a provider actually provide?',
            task: 'Draw a provider boundary around two siblings that need the same value.',
          },
          summaryPoints: [
            'The provider owns the shared boundary.',
            'Consumers only work inside that boundary.',
            'This pattern avoids prop drilling when many descendants need the same value.',
          ],
        },
        'custom-context-hooks': {
          title: 'Custom context hooks',
          badge: 'hook',
          accent: '#d97706',
          summary:
            'A custom hook wraps raw Context access so consumers get a smaller, safer API and a clearer error if the provider is missing.',
          definition:
            'A custom context hook is a small function like useLanguage or useLearningProgress that reads a Context for you.',
          whyExists:
            'It keeps component code tidy and avoids repeating provider checks everywhere.',
          problem: 'Using raw Context objects directly makes the API noisy and easier to misuse.',
          howItWorks: [
            'The hook calls useContext internally.',
            'It throws a helpful error when no provider exists.',
            'The component only sees the narrow, intentional API.',
          ],
          simulation: [
            {
              title: 'A component asks for shared data',
              body: 'The component calls a hook instead of touching the raw Context object.',
            },
            {
              title: 'The hook checks the provider boundary',
              body: 'If the provider is missing, the hook can fail fast with a clear message.',
            },
            {
              title: 'The component gets a focused API',
              body: 'Only the values and actions that matter are exposed to the page.',
            },
          ],
          example: {
            title: 'The app already uses custom hooks',
            code: `const { language, localizedPath } = useLanguage();
const { completedSet, markModuleComplete } = useLearningProgress();`,
            explanation:
              'These hooks hide the raw Context details and give the page a small API that is easier to read and safer to use.',
          },
          comparison: {
            before: `// Raw Context access everywhere
const language = useContext(LanguageContext);`,
            after: `// Focused custom hook
const { language, localizedPath } = useLanguage();`,
            takeaway: 'A custom hook makes Context easier to use and easier to guard.',
          },
          mistakes: [
            'Re-exporting the raw context everywhere.',
            'Skipping the provider check and failing later with a confusing error.',
            'Letting the hook expose too much when the component only needs a small part.',
          ],
          realUsage: [
            'Language and progress hooks in this app.',
            'Any app-wide context that should feel like a small utility.',
            'Safer provider-dependent APIs.',
          ],
          practice: {
            question: 'Why wrap Context access in a custom hook?',
            task: 'Write one sentence that explains the value of useLanguage or useLearningProgress.',
          },
          summaryPoints: [
            'Custom hooks hide raw Context details.',
            'They can guard provider usage with helpful errors.',
            'They keep component code compact and easier to scan.',
          ],
        },
        'language-progress-contexts': {
          title: 'Language and progress contexts',
          badge: 'app-wide',
          accent: '#059669',
          summary:
            'This app uses Context for language and learning progress because many routes and many components need the same values.',
          definition:
            'LanguageContext and LearningProgressContext are app-wide shared state layers used across multiple pages.',
          whyExists:
            'Language drives route prefixes, text direction, localized links, and translated copy. Progress drives completed modules, XP, quiz state, badges, and reset behavior.',
          problem:
            'If these values lived only in one page, the rest of the app would lose sync every time the learner moved.',
          howItWorks: [
            'useLanguage reads the current language and localizedPath helper.',
            'useLearningProgress reads completion, XP, badges, and quiz state.',
            'Both hooks keep shared behavior available across route boundaries.',
          ],
          simulation: [
            {
              title: 'A lesson reads language from Context',
              body: 'The page uses language to build localized links and keep the shell aligned with the current locale.',
            },
            {
              title: 'The same app reads progress from Context',
              body: 'Completion, XP, badges, and solved quizzes stay available even when the learner changes pages.',
            },
            {
              title: 'The provider boundary spans the app shell',
              body: 'Many routes can read the same values because the providers sit above the lessons.',
            },
          ],
          example: {
            title: 'The real app already uses both hooks',
            code: `const { language, localizedPath } = useLanguage();
const { completedSet, markModuleComplete } = useLearningProgress();`,
            explanation:
              'The lesson pages use these hooks to keep language and progress behavior aligned across the whole app.',
          },
          comparison: {
            before: `// Page-local only
const language = 'fa';`,
            after: `// Shared across the app
const { language, localizedPath } = useLanguage();`,
            takeaway:
              'Language and progress are cross-route concerns, so they belong in shared Context.',
          },
          mistakes: [
            'Changing real language or progress behavior in the simulator.',
            'Assuming one lesson page should own values that multiple routes need.',
            'Treating Context like a storage layer instead of a shared state boundary.',
          ],
          realUsage: [
            'Route prefixes and localized links.',
            'Completion, XP, badges, and quiz state.',
            'Reset and language switch behavior in the app shell.',
          ],
          practice: {
            question: 'Why are language and progress good candidates for Context in this app?',
            task: 'Name one route-level and one app-shell-level place where these values are used.',
          },
          summaryPoints: [
            'Language and progress span many routes.',
            'Context keeps them available across the app shell.',
            'The simulator in this lesson does not touch the real providers.',
          ],
        },
        'context-tradeoffs': {
          title: 'Context tradeoffs',
          badge: 'limits',
          accent: '#db2777',
          summary:
            'Context solves sharing problems, but it is not a replacement for every local state value or every render path.',
          definition:
            'Context tradeoffs are the reasons to avoid using it for state that is tiny, temporary, or only needed in one small place.',
          whyExists:
            'Big provider values can cause broad rerenders and hide ownership when local state would be simpler.',
          problem:
            'If Context owns every keystroke or every screen-specific draft, the app becomes harder to understand and optimize.',
          howItWorks: [
            'Keep isolated UI local.',
            'Lift state only as far as the nearest real shared owner.',
            'Use Context when the shared boundary is broad and stable.',
          ],
          simulation: [
            {
              title: 'A small draft starts local',
              body: 'One form field can stay in one component instead of becoming app-wide state.',
            },
            {
              title: 'A shared value stops at the nearest useful owner',
              body: 'Nearby siblings can share a parent without making the whole app rerender.',
            },
            {
              title: 'Only broad shared concerns move into Context',
              body: 'Language, progress, or other cross-route values justify the provider boundary.',
            },
          ],
          example: {
            title: 'Not every value belongs in Context',
            code: `const [draft, setDraft] = useState('');
const [selectedTab, setSelectedTab] = useState('summary');`,
            explanation:
              'If only one page or one control needs the value, local state is simpler and easier to reason about.',
          },
          comparison: {
            before: `// Context for everything
<DraftContext.Provider value={draft}>`,
            after: `// Local state first
const [draft, setDraft] = useState('');`,
            takeaway: 'Context is useful, but only when the sharing boundary really justifies it.',
          },
          mistakes: [
            'Turning Context into a default answer for convenience.',
            'Putting one-off UI details into a broad provider.',
            'Forgetting that provider values can rerender many descendants.',
          ],
          realUsage: [
            'Temporary live lab interactions stay local.',
            'Only cross-route values move into Context.',
            'Future architecture work can decide where broader providers should live.',
          ],
          practice: {
            question: 'When is Context the wrong tool?',
            task: 'Name one kind of state that should usually stay local.',
          },
          summaryPoints: [
            'Context solves sharing, not every state problem.',
            'Local state is still the default for small isolated UI.',
            'Use Context only when the boundary and the sharing need are broad enough.',
          ],
        },
      },
    },
    'project-architecture': {
      stageLabel: 'Step 9',
      title: 'Project architecture',
      hero: {
        eyebrow: 'Step 9',
        title: 'Project architecture',
        lead: 'This lesson maps the current repo into ownership boundaries so you can see which layer owns routes, which layer owns lesson composition, and why the Task Manager feature should stay inside its own domain.',
        primaryAction: 'I understand this architecture slice',
        secondaryAction: 'Go to project',
      },
      summary: {
        intro:
          'Architecture here is mostly an ownership question. The route tree, lesson pages, reusable panels, feature code, hooks, manifest data, and localized content all solve different problems and should keep their own boundaries.',
        points: [
          'App routes define which page renders',
          'Pages compose lesson-specific behavior',
          'TaskManagerLab stays feature-owned',
          'Hooks and contexts expose app-wide access patterns',
          'Manifest and localized content must stay aligned',
          'Reuse works only when behavior is truly generic',
        ],
        prerequisites: [
          'Comfort with route-level lesson pages',
          'Context, custom hooks, and shared state basics',
          'Awareness of the current Task Manager capstone',
          'Familiarity with localized course content files',
        ],
        keyPoints: [
          'Route, manifest, localized content, and CTA flow must change together',
          'Page-owned state should stay on the page unless another layer truly needs it',
          'Shared components should stay thin and generic',
          'Feature code owns its own CRUD, persistence, and task-specific reward behavior',
        ],
      },
      deepDive: {
        eyebrow: 'Deep lesson',
        title: 'Read the repo as architecture',
        lead: 'Pick one boundary and study what it owns, why it exists, and what usually goes wrong when ownership gets blurry.',
        chooserLabel: 'Choose an architecture topic',
        sections: {
          definition: '1. Definition',
          whyExists: '2. Why it exists',
          problem: '3. Problem it solves',
          howItWorks: '4. How it works in this repo',
          example: '5. Practical example',
          mistakes: '6. Common mistakes',
          usage: '7. Real app usage',
          practice: '8. Practice prompt',
          summary: '9. Summary points',
        },
        practicePromptTitle: 'Boundary practice',
        summaryTitle: 'What to keep',
      },
      live: {
        eyebrow: 'Architecture explorer',
        title: 'Architecture Map Explorer',
        lead: 'Select one layer and inspect its ownership boundary without changing any real app state.',
        guidance:
          'Use this map as a read-only ownership guide. It explains what belongs to each layer and what should stay out.',
        stateNote:
          'This explorer is page-owned, read-only, non-persistent, and awards no XP. It does not modify the real app.',
        selectorLabel: 'Choose a layer',
        selectedLabel: 'Selected layer',
        readOnlyNote:
          'This explorer does not edit files, move code, or change Task Manager behavior. It is only a boundary map.',
        sections: {
          examples: 'Example files',
          owns: 'What this layer owns',
          avoids: 'What this layer must not own',
        },
        layers: {
          'app-routes': {
            label: 'App routes',
            decisionLabel: 'page-owned boundary',
            responsibility:
              'The app route tree decides which page renders for each path, where the locale guard lives, and how not-found recovery is reached.',
            owns: [
              'Top-level route tree in `src/App.jsx`',
              'Locale guard placement under `/:locale`',
              'Route boundaries for lesson pages',
              'Fallback and not-found route wiring',
            ],
            doesNotOwn: ['Lesson copy', 'Task Manager CRUD', 'Quiz answer data'],
            exampleFiles: ['src/App.jsx'],
            whyBoundaryMatters:
              'If route ownership leaks into pages or feature code, navigation becomes harder to reason about and locale-aware behavior drifts.',
          },
          pages: {
            label: 'Pages',
            decisionLabel: 'page-owned',
            responsibility:
              'Pages compose route-level lesson experiences, keep page-specific UI state, and wire the completion CTA to the correct module.',
            owns: [
              'Lesson composition with `LessonTemplate`',
              'Selected topic state',
              'Read-only explorer state',
              'CTA flow to the next lesson',
            ],
            doesNotOwn: [
              'Generic panel behavior',
              'Task Manager internal CRUD',
              'Global language provider rules',
            ],
            exampleFiles: ['src/pages/ProjectArchitecturePage.jsx', 'src/pages/ProjectPage.jsx'],
            whyBoundaryMatters:
              'If pages stop owning page-specific behavior, shared components turn into mega-components and feature logic starts leaking upward.',
          },
          'reusable-components': {
            label: 'Reusable components',
            decisionLabel: 'safe to reuse',
            responsibility:
              'Reusable components provide generic layout and surface behavior that many lesson pages can compose without owning lesson-specific logic.',
            owns: [
              'Generic summary, quiz, lab, and tips surfaces',
              'Composition shell behavior',
              'Stable section framing across lessons',
            ],
            doesNotOwn: [
              'Page-specific explorer state',
              'Task storage migrations',
              'Feature CRUD rules',
            ],
            exampleFiles: [
              'src/components/LessonTemplate.jsx',
              'src/components/LiveLabFrame.jsx',
              'src/components/QuizPanel.jsx',
              'src/components/TipsPanel.jsx',
            ],
            whyBoundaryMatters:
              'Reuse is only safe when behavior is generic. Once a shared component starts owning page logic, every lesson becomes harder to maintain.',
          },
          'task-manager-feature': {
            label: 'Task Manager feature',
            decisionLabel: 'feature-owned',
            responsibility:
              'The Task Manager feature owns its domain logic: task CRUD, filters, search, form state, persistence, and task-specific XP behavior.',
            owns: [
              'Task CRUD and editing flow',
              'Filter and search behavior',
              'Task form state',
              'Feature persistence and task-specific XP actions',
            ],
            doesNotOwn: [
              'Route tree decisions',
              'Lesson template layout',
              'App-wide language provider behavior',
            ],
            exampleFiles: ['src/features/taskManager/TaskManagerLab.jsx'],
            whyBoundaryMatters:
              'If feature logic leaks into shared lesson components or pages, the capstone becomes harder to test, reuse, and evolve safely.',
          },
          'context-providers': {
            label: 'Context providers',
            decisionLabel: 'app-wide context',
            responsibility:
              'Context providers own app-wide language and learning progress APIs that many routes need to read consistently.',
            owns: [
              'Language provider state and helpers',
              'Learning progress state, completion, XP, and badges',
              'Provider APIs for app-wide concerns',
            ],
            doesNotOwn: [
              'Task Manager local feature rules',
              'Temporary explorer state',
              'Lesson-specific simulation state',
            ],
            exampleFiles: [
              'src/context/LanguageContext.jsx',
              'src/context/LearningProgressContext.jsx',
            ],
            whyBoundaryMatters:
              'Context should stay focused on broad shared concerns. Once local UI details move here, ownership becomes muddy and updates become wider than necessary.',
          },
          hooks: {
            label: 'Hooks',
            decisionLabel: 'safe to reuse',
            responsibility:
              'Hooks expose repeated access patterns so pages can consume content or shared state without repeating low-level wiring.',
            owns: [
              'Reusable access patterns like `useCourseContent`',
              'Focused APIs for reading shared data',
              'Thin consumption helpers for pages and components',
            ],
            doesNotOwn: ['Route structure', 'Feature CRUD rules', 'Localized content authoring'],
            exampleFiles: ['src/hooks/useCourseContent.js'],
            whyBoundaryMatters:
              'Hooks should hide repetitive access patterns, not become alternate homes for page state or product content.',
          },
          'course-manifest': {
            label: 'Course manifest',
            decisionLabel: 'content/data layer',
            responsibility:
              'The course manifest defines module order, path, accent, XP reward, and nextId so navigation and progress can stay aligned.',
            owns: [
              'Module order',
              'Route path metadata',
              'Accent and XP reward metadata',
              'Next-module relationships',
            ],
            doesNotOwn: ['Page rendering', 'Localized lesson copy', 'Feature logic'],
            exampleFiles: ['src/data/courseManifest.js'],
            whyBoundaryMatters:
              'If module metadata is scattered across pages, route flow and progress behavior drift out of sync quickly.',
          },
          'localized-course-content': {
            label: 'Localized course content',
            decisionLabel: 'content/data layer',
            responsibility:
              'Localized course content files own translated lesson copy, examples, quiz data, tips, and labels for both Persian and English.',
            owns: [
              'Localized lesson hero and summary copy',
              'Topic explanations and examples',
              'Quiz prompts and answers',
              'Tips, mistakes, and practice prompts',
            ],
            doesNotOwn: ['Page state', 'Feature storage logic', 'Routing decisions'],
            exampleFiles: ['src/i18n/course/fa.js', 'src/i18n/course/en.js'],
            whyBoundaryMatters:
              'When route, manifest, and localized content changes do not move together, one locale falls behind and the lesson flow breaks.',
          },
        },
      },
      quizTitle: 'Check the architecture boundaries',
      tipsTitle: 'Architecture reminders',
      tipsIntro:
        'Use these notes to keep ownership boundaries clear while you build later lessons and features.',
      tips: [
        'Architecture is mostly ownership, not folder prettiness.',
        'Not every repeated UI needs a shared component.',
        'Not every piece of state belongs in Context.',
        'TaskManagerLab is a feature, not a generic lesson widget.',
        'LessonTemplate should stay a thin composition shell.',
        'Route, content, manifest, and CTA changes must stay aligned.',
      ],
      mistakes: [
        'Moving page-specific explorer state into shared components.',
        'Treating feature CRUD logic as reusable lesson infrastructure.',
        'Adding app-wide Context for tiny local interactions.',
        'Updating one locale or one route without aligning manifest and content.',
      ],
      practicePrompts: [
        {
          id: 'project-architecture-boundary-owner',
          title: 'Name the owner',
          prompt:
            'Pick one behavior in this repo and explain whether it is page-owned, feature-owned, app-wide context, or shared component behavior.',
          hint: 'Use the route tree, ProjectPage, TaskManagerLab, or useCourseContent as your example.',
          expectedOutcome:
            'A strong answer names the owning layer and explains which nearby layers should not absorb that responsibility.',
        },
        {
          id: 'project-architecture-alignment',
          title: 'Trace an aligned change',
          prompt:
            'Imagine you add a new lesson route. List which files must stay aligned so navigation, content, and progress still work.',
          hint: 'Start with the route tree, manifest, localized module content, and the previous page CTA.',
          expectedOutcome:
            'A good answer includes route, manifest, localized content, and CTA updates instead of only creating one page file.',
        },
      ],
      topics: {
        'app-map-routes': {
          title: 'App map and routes',
          badge: 'routes',
          summary:
            'The route tree in `src/App.jsx` is the top-level map of the learning product. It decides which page appears and where locale-aware boundaries start.',
          definition:
            'The app map is the route tree that connects URL paths to page components under the supported locale structure.',
          whyExists:
            'A single route owner keeps `/fa/...` and `/en/...` aligned and makes recovery behavior predictable.',
          problem:
            'Without a clear route owner, unsupported locales, lesson URLs, and not-found handling drift apart quickly.',
          howItWorks: [
            {
              title: '`src/App.jsx` owns the route tree',
              body: 'All lesson routes are registered in one place, so the product has a readable top-level map.',
            },
            {
              title: 'The locale guard sits above lesson routes',
              body: 'The `:locale` segment and guard protect the supported locale boundary before the lesson pages render.',
            },
            {
              title: 'Fallback routes recover bad paths',
              body: 'Unknown paths resolve through not-found behavior instead of leaving blank screens.',
            },
          ],
          example: {
            title: 'One route tree, many lesson pages',
            code: `<Route path=":locale" element={<LocaleRouteGuard />}>
  <Route element={<AppShell />}>
    <Route path="context-state" element={<ContextSharedStatePage />} />
    <Route path="project-architecture" element={<ProjectArchitecturePage />} />
    <Route path="project" element={<ProjectPage />} />
  </Route>
</Route>`,
            explanation:
              'The route tree decides which lesson page renders. The pages do not decide the global route map for themselves.',
          },
          mistakes: [
            'Letting pages invent route structure independently.',
            'Mixing unsupported locale handling with not-found handling.',
            'Forgetting to keep new lesson routes under the locale-aware shell.',
          ],
          realUsage: [
            'Adding a new lesson path.',
            'Protecting `/fa` and `/en` as the only supported locales.',
            'Keeping not-found behavior consistent across lessons.',
          ],
          practice: {
            prompt:
              'If you add a new lesson page, what does `src/App.jsx` need to own before that page can ever render?',
          },
          summaryPoints: [
            '`src/App.jsx` is the route owner.',
            'The locale guard belongs above the lesson routes.',
            'Route boundaries decide which page renders for a given URL.',
          ],
        },
        'pages-components': {
          title: 'Pages and reusable components',
          badge: 'composition',
          summary:
            'Pages own lesson-specific composition and state, while reusable components provide generic surfaces that should not absorb page behavior.',
          definition:
            'A page is a route-level owner that composes a lesson. A reusable component is a generic surface reused across many pages.',
          whyExists:
            'Separating page ownership from reusable surfaces keeps lessons flexible without turning shared code into a giant controller.',
          problem:
            'If a shared panel starts owning page logic, the page becomes harder to read and the shared component becomes bloated.',
          howItWorks: [
            {
              title: 'Pages compose the lesson',
              body: 'A page chooses which panels appear, what data they receive, and which local state powers the lesson experience.',
            },
            {
              title: '`LessonTemplate` stays thin',
              body: 'The template provides tab layout and hero wiring, but it does not own explorer state, topic choice, or feature rules.',
            },
            {
              title: 'Panels stay generic',
              body: 'Components like `SummaryPanel`, `LiveLabFrame`, `QuizPanel`, and `TipsPanel` render generic surfaces with supplied content.',
            },
          ],
          example: {
            title: 'Page-owned state with generic panels',
            code: `const [selectedTopicId, setSelectedTopicId] = useState('app-map-routes');

<LessonTemplate
  summary={{ ... }}
  renderLive={() => (
    <div className="stack">
      <LiveLabFrame>{/* page-owned explorer */}</LiveLabFrame>
      <DeepDivePanel activeId={selectedTopicId} onSelect={setSelectedTopicId} />
    </div>
  )}
/>`,
            explanation:
              'The page owns the state and passes content into generic surfaces. The shared components do not need to know why that state exists.',
          },
          mistakes: [
            'Pushing page state into `LessonTemplate` because more than one page uses tabs.',
            'Treating shared panels as owners of lesson-specific logic.',
            'Building one giant lesson component instead of composing focused surfaces.',
          ],
          realUsage: [
            'ProjectArchitecturePage owns the explorer and topic selection.',
            'ProjectPage composes the capstone page with generic panels.',
            'Shared panels stay reusable across many lesson pages.',
          ],
          practice: {
            prompt:
              'Explain why `LessonTemplate` should not own the selected architecture layer for this lesson.',
          },
          summaryPoints: [
            'Pages own route-level lesson behavior.',
            'Reusable components stay generic.',
            '`LessonTemplate` is a composition shell, not a page-specific controller.',
          ],
        },
        'features-state': {
          title: 'Features and feature-owned state',
          badge: 'feature',
          summary:
            'The Task Manager capstone is a feature domain with its own rules, not a generic lesson fragment that should be lifted into shared course infrastructure.',
          definition:
            'Feature-owned state is logic that belongs to one product domain and should stay with that feature implementation.',
          whyExists:
            'The Task Manager has its own CRUD rules, persistence behavior, filters, search, and XP behavior that do not belong to generic lesson pages.',
          problem:
            'If feature logic moves into shared lesson code, the feature becomes harder to maintain and unrelated lessons inherit accidental complexity.',
          howItWorks: [
            {
              title: '`features/taskManager` owns the domain',
              body: 'The feature folder keeps the task flow, storage behavior, and UX rules close to the code that uses them.',
            },
            {
              title: '`ProjectPage` composes but does not absorb',
              body: 'The project lesson embeds `TaskManagerLab`, but it does not re-own internal feature state.',
            },
            {
              title: 'Shared lesson components stay outside the domain',
              body: 'Generic panels can wrap the feature, but they should not become owners of task CRUD or storage logic.',
            },
          ],
          example: {
            title: 'Composition without ownership transfer',
            code: `<LiveLabFrame
  label={content.modules.project.live.eyebrow}
  title={content.modules.project.live.title}
>
  <TaskManagerLab />
</LiveLabFrame>`,
            explanation:
              'The page composes the feature inside a lesson surface. The feature still owns its internal behavior.',
          },
          mistakes: [
            'Moving task CRUD helpers into shared components because the UI is inside a lesson.',
            'Treating Task Manager persistence as page-owned state.',
            'Refactoring feature code just to make lesson pages look more uniform.',
          ],
          realUsage: [
            'Task CRUD and edit flow.',
            'Search, filters, and storage behavior.',
            'Task-specific XP actions inside the capstone.',
          ],
          practice: {
            prompt:
              'Why should `TaskManagerLab` stay feature-owned even though `ProjectPage` renders it?',
          },
          summaryPoints: [
            'Feature logic belongs with the feature.',
            'Project pages compose features without re-owning them.',
            'TaskManagerLab should not be moved into shared lesson infrastructure.',
          ],
        },
        'hooks-contexts': {
          title: 'Hooks and contexts',
          badge: 'shared access',
          summary:
            'Hooks and contexts are about repeated access patterns and app-wide state boundaries, not about absorbing every local detail in the repo.',
          definition:
            'Hooks expose repeated access patterns, and contexts provide app-wide shared state boundaries for values many routes need.',
          whyExists:
            'They keep pages from repeating low-level wiring and keep broad shared concerns like language and progress available across routes.',
          problem:
            'When hooks or contexts start owning route details, feature rules, or tiny local interactions, architecture loses clarity quickly.',
          howItWorks: [
            {
              title: '`useCourseContent` exposes course copy',
              body: 'Pages call one hook to get localized lesson content instead of manually selecting locale-specific data every time.',
            },
            {
              title: '`useLanguage` and `useLearningProgress` expose app-wide state',
              body: 'Pages consume language, localized paths, completion, XP, and badges through focused APIs.',
            },
            {
              title: 'Local detail still stays local',
              body: 'Temporary explorer state and tab-specific interactions remain page-owned instead of moving into providers.',
            },
          ],
          example: {
            title: 'Focused hooks instead of low-level wiring',
            code: `const content = useCourseContent();
const { language, localizedPath } = useLanguage();
const { markModuleComplete } = useLearningProgress();`,
            explanation:
              'The page gets a small, readable API. It does not need to know how the contexts or localization internals are wired.',
          },
          mistakes: [
            'Using Context as a default home for local UI state.',
            'Turning hooks into alternate owners of route structure or feature rules.',
            'Bypassing the focused hook APIs and scattering low-level access everywhere.',
          ],
          realUsage: [
            'Localized course content loading.',
            'Locale-aware CTA links.',
            'Module completion and progress behavior.',
          ],
          practice: {
            prompt:
              'Name one thing `useCourseContent` should own and one thing it should definitely not own.',
          },
          summaryPoints: [
            'Hooks expose repeated access patterns.',
            'Contexts define app-wide shared state boundaries.',
            'Not every local detail belongs in a hook or provider.',
          ],
        },
        'data-i18n-manifest': {
          title: 'Manifest, data, and localization',
          badge: 'alignment',
          summary:
            'The manifest and localized course files are a data layer. They must stay aligned with routes and page CTAs so the learning flow works in both locales.',
          definition:
            'The manifest is the module metadata source, and the localized course files are the source of translated lesson copy, examples, quizzes, and tips.',
          whyExists:
            'Separating metadata and localized content from page code keeps lesson flow explicit and maintainable.',
          problem:
            'When route, manifest, and localized content updates happen separately, the product flow breaks or one locale falls behind.',
          howItWorks: [
            {
              title: '`courseManifest` owns module metadata',
              body: 'Order, path, accent, XP reward, and nextId live in one data file so navigation and progress can read the same source.',
            },
            {
              title: 'Localized course files own lesson content',
              body: 'Each locale provides hero text, deep-dive topics, quiz data, and tips with matching ids.',
            },
            {
              title: 'Pages pull the aligned data together',
              body: 'The page reads its module content and uses the manifest-backed route flow to keep navigation coherent.',
            },
          ],
          example: {
            title: 'Manifest + localized copy must agree',
            code: `{
  id: 'project-architecture',
  path: '/project-architecture',
  nextId: 'project'
}

content.modules['project-architecture']
content.quizzes['project-architecture']`,
            explanation:
              'The module id must match across manifest entries, module content, quizzes, and any CTA flow that points into or out of the lesson.',
          },
          mistakes: [
            'Adding a page route without adding manifest data.',
            'Updating one locale but not the other.',
            'Changing a module id in one place and leaving the old id in quizzes or CTAs.',
          ],
          realUsage: [
            'Module ordering on the learning path.',
            'Localized lesson content in Persian and English.',
            'Correct next-module navigation.',
          ],
          practice: {
            prompt:
              'List the files you must touch when you add a new localized lesson route with a working next CTA.',
          },
          summaryPoints: [
            '`courseManifest` owns module metadata.',
            'Localized course files own lesson copy and quiz data.',
            'Route, content, manifest, and CTA changes must stay aligned.',
          ],
        },
        'reuse-boundaries': {
          title: 'Reuse boundaries',
          badge: 'boundaries',
          summary:
            'Good architecture is not “make everything shared.” It is deciding what is truly generic, what is page-owned, and what must stay feature-owned.',
          definition:
            'Reuse boundaries are the ownership rules that decide whether code should stay local, become shared UI, or remain inside a feature.',
          whyExists:
            'Teams often over-share code too early, which hides ownership and creates giant abstractions that are harder to change.',
          problem:
            'When reusable components absorb page or feature behavior, the repo looks neat at first but becomes harder to reason about later.',
          howItWorks: [
            {
              title: 'Generic behavior is safe to reuse',
              body: 'Stable layout shells and generic panels are good shared candidates because they do not need lesson-specific logic.',
            },
            {
              title: 'Page behavior stays on the page',
              body: 'Explorer state, topic selection, and CTA wiring belong to the route-level page that owns the learning interaction.',
            },
            {
              title: 'Feature behavior stays in the feature',
              body: 'Task CRUD, task storage, and feature XP logic should not leak into shared lesson infrastructure.',
            },
          ],
          example: {
            title: 'Thin template, clear owners',
            code: `// Shared
<LessonTemplate />

// Page-owned
const [selectedLayerId, setSelectedLayerId] = useState('app-routes');

// Feature-owned
<TaskManagerLab />`,
            explanation:
              'Each layer keeps its own job. The architecture stays readable because ownership is explicit instead of flattened.',
          },
          mistakes: [
            'Creating a mega-component because two pages look similar.',
            'Moving page state into Context just to avoid passing props once.',
            'Refactoring feature code into shared UI without a generic behavior reason.',
          ],
          realUsage: [
            'Keeping `LessonTemplate` generic.',
            'Keeping the architecture explorer page-owned.',
            'Keeping Task Manager behavior feature-owned.',
          ],
          practice: {
            prompt:
              'Describe one repeated pattern in this repo that should stay local instead of becoming a new shared component.',
          },
          summaryPoints: [
            'Reuse is safe when behavior is generic.',
            'Page-owned behavior stays on pages.',
            'Shared components must not become mega-components.',
          ],
        },
      },
    },
    project: {
      stageLabel: 'Step 10',
      title: 'Final Task Manager',
      hero: {
        eyebrow: 'Step 10',
        title: 'Final Task Manager',
        lead: 'This project ties everything together: state, forms, list rendering, CRUD, filtering, and local persistence.',
        primaryAction: 'I completed this project',
        secondaryAction: null,
      },
      summary: {
        intro:
          'This project shifts focus from syntax to workflow: creating, editing, filtering, and keeping state in localStorage.',
        points: ['form-driven UI', 'filtering', 'local persistence'],
      },
      live: {
        eyebrow: 'Project',
        title: 'Task management',
        lead: 'Add, edit, delete, toggle, and filter everything on one page.',
      },
      quizTitle: 'Project wrap-up',
      tips: [
        'Keep the project small at first: CRUD, then filtering, then persistence.',
        'If a big section feels overwhelming, break it into smaller components.',
      ],
    },
  },
  badges: {
    'first-step': {
      title: 'First step',
      description: 'You completed one module.',
    },
    prepared: {
      title: 'Ready to go',
      description: 'You completed setup and tooling.',
    },
    'quiz-solver': {
      title: 'Quiz solver',
      description: 'You answered three quizzes correctly.',
    },
    builder: {
      title: 'Builder',
      description: 'You completed three or more modules.',
    },
    'streak-3': {
      title: 'Consistent',
      description: 'You stayed active for three days in a row.',
    },
    'ship-it': {
      title: 'Shipped',
      description: 'You completed every module.',
    },
  },
  coach: {
    start: {
      title: 'A good start is light and focused',
      body: 'You do not need to understand everything right now. Just move through the first card.',
      microGoal: 'Open one lesson and stay with it for three minutes.',
      cta: 'Start from {title}',
    },
    momentum: {
      title: 'You have a good rhythm now',
      body: 'When you move forward on consecutive days, your brain builds patterns much faster.',
      microGoal: 'Solve one more quiz or finish one more tab.',
      cta: 'Continue with {title}',
    },
    stuck: {
      title: 'Getting stuck is part of the process',
      body: 'If one page feels heavy, shrink the task into a much smaller step.',
      microGoal: 'Open one more tab and do only that.',
      cta: 'Just open {title}',
    },
    celebration: {
      title: 'You are doing great',
      body: 'You have almost finished the path, and now it is time to review.',
      microGoal: 'Take a quick look at home, then return whenever you want.',
      cta: 'Back home',
    },
    comeback: {
      title: 'Welcome back',
      body: 'Returning after a pause matters more than continuing perfectly. A small step today is enough.',
      microGoal: 'Reopen just one short lesson.',
      cta: 'Start with {title}',
    },
  },
  taskManager: {
    header: {
      eyebrow: 'Project',
      title: 'Task management',
      lead: 'Add, edit, delete, toggle, and filter everything on one page.',
    },
    stats: {
      all: 'All',
      active: 'Active',
      done: 'Done',
    },
    form: {
      newLabel: 'New task',
      editLabel: 'Edit task',
      newHeading: 'Create a new task',
      editHeading: 'Edit the selected item',
      title: 'Title',
      note: 'Note',
      category: 'Category',
      titlePlaceholder: 'For example: practice props',
      notePlaceholder: 'Short description',
      submitNew: 'Add task',
      submitEdit: 'Save changes',
      reset: 'Clear form',
    },
    filters: {
      all: 'All',
      active: 'Active',
      done: 'Completed',
      search: 'Search',
    },
    emptyState: {
      title: 'Nothing found',
      body: 'Change the filter or search, or create a new task.',
    },
    actions: {
      edit: 'Edit',
      delete: 'Delete',
      toggle: 'Toggle task status',
      clearCompleted: 'Clear completed',
      doneLabel: 'No note',
    },
    categories: {
      js: 'JS',
      react: 'React',
      effects: 'Effects',
      routing: 'Routing concepts',
    },
    seedTasks: [
      {
        id: 'task-1',
        title: 'Review array methods',
        note: 'Practice map/filter/reduce with examples.',
        category: 'js',
        done: false,
      },
      {
        id: 'task-2',
        title: 'Build a small component',
        note: 'Create a simple card with props.',
        category: 'react',
        done: true,
      },
      {
        id: 'task-3',
        title: 'Practice useEffect',
        note: 'Build a timer or autosave flow.',
        category: 'effects',
        done: false,
      },
    ],
  },
  quizzes: {
    setup: [
      {
        id: 'setup-node',
        title: 'What does Node do?',
        prompt: 'Which description is most accurate?',
        options: [
          'Renders only CSS files',
          'Runs JavaScript outside the browser',
          'Is only for UI design',
        ],
        answerIndex: 1,
        explanation:
          'Node runs JavaScript outside the browser, and React tools rely on that runtime.',
        xpReward: 15,
      },
      {
        id: 'setup-devtools',
        title: 'What are React Developer Tools for?',
        prompt: 'Choose the best option.',
        options: [
          'Viewing component tree, props, and state',
          'Building images with canvas',
          'Creating API servers',
        ],
        answerIndex: 0,
        explanation: 'React DevTools are used to debug and inspect React components.',
        xpReward: 15,
      },
    ],
    tooling: [
      {
        id: 'tool-npm-script',
        title: 'What does `npm run dev` really do?',
        prompt: 'Choose the most accurate explanation.',
        options: [
          'npm starts React directly by itself',
          'npm looks up the `dev` script in `package.json` and runs that command',
          'npm only formats the code and refreshes the browser',
        ],
        answerIndex: 1,
        explanation:
          'npm is the script runner here. It reads the `dev` entry in `package.json` and then launches the real tool behind that script, which is Vite in this repo.',
        xpReward: 20,
      },
      {
        id: 'tool-vite',
        title: 'What is Vite mainly for?',
        prompt: 'Which option is more accurate?',
        options: ['package manager', 'dev server and build tool', 'code formatter'],
        answerIndex: 1,
        explanation: 'Vite is a fast dev server and build tool for modern projects.',
        xpReward: 20,
      },
      {
        id: 'tool-eslint',
        title: 'What does ESLint do?',
        prompt: 'Choose the correct answer.',
        options: [
          'Reads code without running it and checks it against rules',
          'Only makes code spacing and quotes look neat',
          'Downloads packages from the npm registry',
        ],
        answerIndex: 0,
        explanation:
          'ESLint is a static analysis tool. It parses source code, applies rules, and reports likely mistakes or convention violations before runtime.',
        xpReward: 20,
      },
      {
        id: 'tool-prettier',
        title: 'What does Prettier do?',
        prompt: 'Which answer is better?',
        options: ['Formats code', 'Installs packages', 'Shows component tree'],
        answerIndex: 0,
        explanation: 'Prettier makes style decisions consistently.',
        xpReward: 15,
      },
      {
        id: 'tool-pnpm',
        title: 'What is one pnpm advantage?',
        prompt: 'Choose the best interpretation.',
        options: [
          'It is only for CSS',
          'It does npm’s job with a leaner storage model',
          'It replaces the browser',
        ],
        answerIndex: 1,
        explanation: 'pnpm is similar to npm but often faster and lighter.',
        xpReward: 15,
      },
    ],
    js: [
      {
        id: 'js-array-map',
        title: 'Which array method usually returns a new array?',
        prompt: 'Guess which option typically returns a fresh array.',
        options: ['map', 'forEach', 'sort'],
        answerIndex: 0,
        explanation:
          '`map` produces a new value for each item. `forEach` is mostly for side effects.',
        xpReward: 15,
      },
      {
        id: 'js-state-setter',
        title: 'Which statement is more correct?',
        prompt: 'What should you do when changing state in React?',
        options: ['Mutate state directly', 'Use the setter', 'Only change props'],
        answerIndex: 1,
        explanation:
          'State should be updated with the setter so React can detect a new render and keep the UI in sync.',
        xpReward: 15,
      },
    ],
    react: [
      {
        id: 'react-html-dom',
        title: 'HTML or DOM?',
        prompt: 'Which statement is more accurate?',
        options: [
          'HTML and DOM are exactly the same thing',
          'HTML is source markup, and the DOM is the live parsed tree the browser builds',
          'The DOM only exists inside React',
        ],
        answerIndex: 1,
        explanation:
          'HTML is the source text. The DOM is the live structure built from it so the browser and JavaScript can work with the page.',
        xpReward: 20,
      },
      {
        id: 'react-jsx-transform',
        title: 'What happens to JSX?',
        prompt: 'Choose the best explanation.',
        options: [
          'The browser reads JSX directly as raw HTML',
          'JSX is transformed into JavaScript that creates React element descriptions',
          'JSX skips JavaScript and becomes CSS rules',
        ],
        answerIndex: 1,
        explanation:
          'JSX is a developer-friendly syntax. The build step transforms it into JavaScript before the browser runs the app.',
        xpReward: 20,
      },
      {
        id: 'react-rendering-flow',
        title: 'What happens after state changes?',
        prompt: 'Which sequence is most accurate?',
        options: [
          'State changes, React re-runs the component, compares UI descriptions, then updates the DOM',
          'State changes, the browser edits the original HTML file, then React notices later',
          'State changes, React always rebuilds the whole page from scratch',
        ],
        answerIndex: 0,
        explanation:
          'React responds to state changes by rendering again, comparing the previous and next UI descriptions, and then committing the needed DOM updates.',
        xpReward: 20,
      },
      {
        id: 'react-vdom',
        title: 'Real DOM vs Virtual DOM',
        prompt: 'Which answer is careful and accurate?',
        options: [
          'The Virtual DOM means React never uses the real DOM',
          'The Virtual DOM is React’s internal UI description/comparison strategy before it updates the real DOM',
          'The Virtual DOM is a faster browser engine built into React',
        ],
        answerIndex: 1,
        explanation:
          'React still updates the real DOM. The Virtual DOM idea is about how React represents and compares UI descriptions before committing changes.',
        xpReward: 20,
      },
      {
        id: 'react-props-state',
        title: 'Props or state?',
        prompt:
          'What do you call input that comes from the parent and is not owned by the component?',
        options: ['props', 'state', 'effect'],
        answerIndex: 0,
        explanation: 'Props come from outside. State is data the component owns.',
        xpReward: 20,
      },
    ],
    'events-forms': [
      {
        id: 'events-handler-reference',
        title: 'How do you pass a handler?',
        prompt: 'Which version gives React a handler to call later?',
        options: ['onClick={handleSave}', 'onClick={handleSave()}', 'onClick={saveNow()}'],
        answerIndex: 0,
        explanation:
          'Passing the function reference lets React call it when the event happens. Calling it during render runs it too early.',
        xpReward: 20,
      },
      {
        id: 'events-controlled-input',
        title: 'What is a controlled input?',
        prompt: 'Choose the best description.',
        options: [
          'The value comes from React state and `onChange` updates that state',
          'The browser owns the value and React never reads it',
          'The input only works when `defaultValue` is used',
        ],
        answerIndex: 0,
        explanation:
          'Controlled inputs keep React state as the source of truth, so preview and validation stay in sync.',
        xpReward: 20,
      },
      {
        id: 'events-prevent-default',
        title: 'Why use preventDefault?',
        prompt: 'What is the main reason to call it in a form submit handler?',
        options: [
          'To make the browser forget the text fields',
          'To stop the reload or navigation that the browser would normally do',
          'To convert the form into a controlled input',
        ],
        answerIndex: 1,
        explanation:
          'React lessons usually want to keep the user on the page while we validate and accept the draft.',
        xpReward: 20,
      },
      {
        id: 'events-form-state-update',
        title: 'How do you update one field?',
        prompt: 'Which update keeps the rest of the draft object intact?',
        options: [
          'setFormState({ note: event.target.value })',
          'setFormState((previous) => ({ ...previous, note: event.target.value }))',
          'setFormState(previous.note = event.target.value)',
        ],
        answerIndex: 1,
        explanation:
          'The spread copies the old object and then replaces only the field that changed.',
        xpReward: 20,
      },
      {
        id: 'events-derived-ui',
        title: 'What should be derived?',
        prompt: 'Which UI is better to calculate from current state instead of storing separately?',
        options: [
          'character count and preview card',
          'the task title text field',
          'the form submit event itself',
        ],
        answerIndex: 0,
        explanation:
          'Preview values and counters should come from the current draft so they never drift away from the field values.',
        xpReward: 20,
      },
    ],
    effects: [
      {
        id: 'effects-purpose',
        title: 'Why does useEffect exist?',
        prompt: 'Which answer is most accurate?',
        options: [
          'To do any calculation after every render whether it is external or not',
          'To synchronize React with systems outside pure render, like timers, titles, or storage',
          'To replace all event handlers and state setters',
        ],
        answerIndex: 1,
        explanation:
          'useEffect is mainly for synchronization with external systems. Pure calculations should usually stay in render instead of moving into an effect.',
        xpReward: 20,
      },
      {
        id: 'effects-cleanup-sequence',
        title: 'What happens when dependencies change?',
        prompt: 'Choose the correct sequence.',
        options: [
          'New setup runs first, then old cleanup runs later',
          'Old cleanup runs first, then new setup runs with the latest values',
          'React skips cleanup unless the component fully unmounts',
        ],
        answerIndex: 1,
        explanation:
          'When an effect reruns because dependencies changed, React first cleans up the previous synchronization work and then starts the new setup.',
        xpReward: 20,
      },
      {
        id: 'effects-dependencies',
        title: 'Dependency array meanings',
        prompt: 'Which option is correct?',
        options: [
          'No dependency array means “run once only”',
          'An empty array and no array are the same thing',
          'No array means after every commit, `[]` means once on mount and cleanup on unmount',
        ],
        answerIndex: 2,
        explanation:
          'No dependency array reruns after every committed render. An empty array sets up once after the first commit and cleans up on unmount.',
        xpReward: 20,
      },
      {
        id: 'effects-debounce',
        title: 'Why does debounce need cleanup?',
        prompt: 'What should happen when the user types again before the timeout finishes?',
        options: [
          'The old timeout should keep running so both values apply',
          'The old timeout should be cleared so only the latest input wins',
          'React automatically ignores older timeouts without cleanup',
        ],
        answerIndex: 1,
        explanation:
          'Debounce works by cancelling older scheduled work. Cleanup clears the old timeout so only the latest settled input becomes the final debounced value.',
        xpReward: 20,
      },
      {
        id: 'effects-localstorage',
        title: 'What does localStorage synchronization do here?',
        prompt: 'Which explanation fits best?',
        options: [
          'It recalculates JSX inside render',
          'It keeps browser-stored data aligned so the note can survive refreshes',
          'It replaces state entirely so the component no longer rerenders',
        ],
        answerIndex: 1,
        explanation:
          'localStorage is an external browser system. Synchronizing with it lets the note survive refreshes while React state still controls the visible UI.',
        xpReward: 20,
      },
      {
        id: 'effects-avoid',
        title: 'When should you avoid useEffect?',
        prompt: 'Which case usually does not need an effect?',
        options: [
          'Computing a label directly from props during render',
          'Starting an interval and clearing it later',
          'Synchronizing `document.title` with a changing value',
        ],
        answerIndex: 0,
        explanation:
          'A pure derived value usually belongs in render. Effects are more appropriate when you must synchronize with systems outside React.',
        xpReward: 20,
      },
    ],
    routing: [
      {
        id: 'routing-client-routing',
        title: 'Why use client-side routing?',
        prompt: 'Which explanation is most accurate?',
        options: [
          'It keeps the app on one document while React swaps page components',
          'It forces a full reload every time the path changes',
          'It only exists to style buttons',
        ],
        answerIndex: 0,
        explanation:
          'Client-side routing keeps the app shell mounted and lets React switch page components without requesting a brand-new document on every move.',
        xpReward: 20,
      },
      {
        id: 'routing-route-page',
        title: 'What does a Route connect?',
        prompt: 'Choose the best answer.',
        options: [
          'A path segment and a page component',
          'A button and a form submit handler',
          'An effect and its cleanup function',
        ],
        answerIndex: 0,
        explanation:
          'A Route is the mapping from a URL path to the page component that should render for that path.',
        xpReward: 20,
      },
      {
        id: 'routing-link-navlink',
        title: 'When should you use Link or NavLink?',
        prompt: 'Which option is best for internal navigation?',
        options: [
          'Use raw anchors for every internal route',
          'Use Link or NavLink so the app changes location without a full reload',
          'Use window.location for lesson-to-lesson navigation',
        ],
        answerIndex: 1,
        explanation:
          'Link and NavLink keep the navigation inside the app. NavLink is useful when the current route should also show active styling.',
        xpReward: 20,
      },
      {
        id: 'routing-locale-segment',
        title: 'Why nest under :locale?',
        prompt: 'What is the main reason this app uses the locale segment?',
        options: [
          'To make the route tree bilingual and keep /fa and /en aligned',
          'To hide the page component from React',
          'To replace the need for lessons',
        ],
        answerIndex: 0,
        explanation:
          'The locale segment keeps the Persian and English versions of the course structurally aligned while still allowing localized links and content.',
        xpReward: 20,
      },
      {
        id: 'routing-fallback-recovery',
        title: 'What should a fallback route do?',
        prompt: 'Which behavior is most helpful?',
        options: [
          'Leave the user on a blank page',
          'Recover with a not-found page or safe redirect',
          'Pretend the bad path is valid',
        ],
        answerIndex: 1,
        explanation:
          'Fallback routes turn typos and unsupported locales into recovery states so the learner still has a way forward.',
        xpReward: 20,
      },
    ],
    'context-state': [
      {
        id: 'context-prop-drilling',
        title: 'What is prop drilling?',
        prompt: 'Choose the best description.',
        options: [
          'Passing a value through many components that only forward it',
          'Keeping every value in Context by default',
          'A router feature for nested URLs',
        ],
        answerIndex: 0,
        explanation:
          'Prop drilling is when a value passes through components that do not use it so a deeper child can finally read it.',
        xpReward: 20,
      },
      {
        id: 'context-lifted-state',
        title: 'When is lifted state better than Context?',
        prompt: 'Which case fits lifted state best?',
        options: [
          'Nearby siblings need the same value',
          'Many distant routes need the same value',
          'No one else needs the value',
        ],
        answerIndex: 0,
        explanation:
          'Lift state when the nearest shared parent is the right owner for a value that nearby siblings both need.',
        xpReward: 20,
      },
      {
        id: 'context-provider',
        title: 'What does a provider do?',
        prompt: 'Choose the most accurate answer.',
        options: [
          'Supplies a Context value to a subtree',
          'Stores values permanently in localStorage',
          'Replaces the router',
        ],
        answerIndex: 0,
        explanation:
          'A provider defines the boundary that gives descendants access to one shared Context value.',
        xpReward: 20,
      },
      {
        id: 'context-custom-hook',
        title: 'Why wrap Context in a custom hook?',
        prompt: 'Which answer is best?',
        options: [
          'It hides raw context details and can guard provider usage',
          'It makes Context available outside the provider',
          'It removes all rerenders from the app',
        ],
        answerIndex: 0,
        explanation:
          'A custom hook keeps the API smaller, clearer, and safer by hiding the raw context details.',
        xpReward: 20,
      },
      {
        id: 'context-appwide-values',
        title: 'Which values in this app are good Context candidates?',
        prompt: 'Pick the best pair.',
        options: [
          'Language and progress',
          'One input draft and one button hover',
          'A single component local counter',
        ],
        answerIndex: 0,
        explanation:
          'Language and progress cross many routes, so they are good app-wide shared state candidates.',
        xpReward: 20,
      },
      {
        id: 'context-tradeoff',
        title: 'When is Context a poor choice?',
        prompt: 'Choose the best example.',
        options: [
          'A tiny one-off draft needed by one component',
          'Language across the app shell',
          'Progress across routes',
        ],
        answerIndex: 0,
        explanation:
          'Tiny local drafts are usually easier to keep in local state than to move into a broad provider.',
        xpReward: 20,
      },
    ],
    'project-architecture': [
      {
        id: 'project-architecture-routes',
        title: 'Who owns the route tree?',
        prompt: 'Choose the best owner for lesson route boundaries.',
        options: ['`src/App.jsx`', '`TaskManagerLab`', '`QuizPanel`'],
        answerIndex: 0,
        explanation:
          '`src/App.jsx` owns the route tree, the locale guard placement, and which page renders for a given path.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-page-vs-shared',
        title: 'Which state should stay page-owned?',
        prompt: 'Pick the best example of page-owned state in this lesson.',
        options: [
          'The selected architecture layer in ProjectArchitecturePage',
          'The reusable tab shell logic in LessonTemplate',
          'The Task Manager storage rules',
        ],
        answerIndex: 0,
        explanation:
          'The selected explorer layer is local to this lesson page. It should not move into shared components or app-wide providers.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-feature-owner',
        title: 'What belongs to the Task Manager feature?',
        prompt: 'Choose the most accurate answer.',
        options: [
          'Task CRUD, filters, search, form state, storage, and task-specific XP behavior',
          'The locale route guard and not-found page',
          'Localized lesson copy for both languages',
        ],
        answerIndex: 0,
        explanation:
          'Those behaviors are part of the Task Manager domain and should stay feature-owned inside `features/taskManager`.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-manifest',
        title: 'What does `courseManifest` own?',
        prompt: 'Pick the best responsibility set.',
        options: [
          'Module order, path, accent, XP reward, and nextId',
          'Page-specific live lab state',
          'Task Manager filter logic and localStorage fallback',
        ],
        answerIndex: 0,
        explanation:
          '`courseManifest` is metadata for module flow and navigation, not a home for page or feature behavior.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-i18n',
        title: 'What belongs in localized course content files?',
        prompt: 'Choose the best answer.',
        options: [
          'Translated lesson copy, examples, quizzes, labels, and tips',
          'The route tree and locale guard implementation',
          'Explorer state persistence rules',
        ],
        answerIndex: 0,
        explanation:
          'The localized course files own translated lesson data. Routing and page state belong elsewhere.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-mega-component',
        title: 'What is the mega-component risk?',
        prompt: 'Which change most clearly creates that risk?',
        options: [
          'Teaching one shared component to own many page-specific labs and feature rules',
          'Keeping a generic `LiveLabFrame` and supplying page-owned children',
          'Storing module order in `courseManifest`',
        ],
        answerIndex: 0,
        explanation:
          'A mega-component grows when shared UI starts owning page-specific or feature-specific behavior that should stay elsewhere.',
        xpReward: 20,
      },
    ],
    project: [
      {
        id: 'project-crud',
        title: 'What is the main priority of the Task Manager?',
        prompt: 'Which goal fits the project best?',
        options: ['Only a pretty UI', 'CRUD and state flow', 'A complex animation system'],
        answerIndex: 1,
        explanation: 'This project is designed to practice the full create/edit/delete workflow.',
        xpReward: 20,
      },
      {
        id: 'project-storage',
        title: 'What does localStorage do here?',
        prompt: 'Which explanation is the best fit?',
        options: [
          'Only for theme toggles',
          'Keeps data across refreshes',
          'Renders the DOM directly',
        ],
        answerIndex: 1,
        explanation:
          'localStorage keeps user data after refresh so the project feels like a real app.',
        xpReward: 15,
      },
    ],
  },
};
