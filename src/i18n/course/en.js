export const courseEn = {
  navigation: {
    home: 'Home',
    setup: 'Start',
    tooling: 'Tools',
    js: 'JavaScript',
    react: 'JSX & State',
    effects: 'useEffect',
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
        secondaryAction: null,
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
    effects: {
      stageLabel: 'Step 4',
      title: 'useEffect, side effects, and browser synchronization',
      hero: {
        eyebrow: 'Step 4',
        title: 'useEffect, cleanup, dependencies, and browser APIs',
        lead: 'This lesson explains why effects exist at all, how React separates pure rendering from external synchronization, and how cleanup, dependencies, timers, titles, debounce, and localStorage work together without creating bugs.',
        primaryAction: 'I practiced this section',
        secondaryAction: null,
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
    project: {
      stageLabel: 'Step 6',
      title: 'Final Task Manager',
      hero: {
        eyebrow: 'Step 6',
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
