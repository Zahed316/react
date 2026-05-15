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
        lead:
          'This lesson goes beyond names and commands: we explain why each tool exists, how it works behind the scenes, and how teams actually use it in React projects.',
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
        lead:
          'Pick one tool and study it in the same structure: definition, purpose, internal mechanics, simulation, example, mistakes, and real usage.',
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
              body:
                'At first, the repository only contains source code and metadata like `package.json` and `package-lock.json`. The actual libraries are not installed yet.',
            },
            {
              title: 'You run `npm install`',
              body:
                'npm reads dependency names and versions, checks the lockfile, downloads package archives, and places usable package files into `node_modules`.',
            },
            {
              title: 'npm records the result',
              body:
                'If dependency resolution changes, npm updates the lockfile so another developer can reproduce the same install later.',
            },
            {
              title: 'You run `npm run dev`',
              body:
                'npm looks for the `dev` script in `package.json`, then launches the underlying command, which is usually `vite` in this project.',
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
            task:
              'Open `package.json`, find the `scripts` object, and explain which tool actually starts the dev server in this repo.',
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
              body:
                'With a basic copy-everything model, each project may keep its own full copy of that package on disk.',
            },
            {
              title: 'pnpm installs the package once in a shared store',
              body:
                'The package content is cached centrally, and project folders link to it instead of duplicating it over and over.',
            },
            {
              title: 'A new project installs faster',
              body:
                'If the package is already in the store, pnpm can reuse it rather than downloading and copying it again from scratch.',
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
            task:
              'Compare npm and pnpm in one sentence each: same job, different storage strategy.',
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
              body:
                'npm launches the `vite` command from `package.json`, and Vite starts a local server that watches the project files.',
            },
            {
              title: 'You open the app in the browser',
              body:
                'The browser requests modules, and Vite serves transformed files that the browser can execute during development.',
            },
            {
              title: 'You edit a React component',
              body:
                'Vite notices the changed file and pushes a fast update so you can see the result without rebuilding everything from zero.',
            },
            {
              title: 'You run `npm run build`',
              body:
                'Vite creates a production bundle optimized for deployment rather than for fast editing.',
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
            question:
              'Why is `npm run dev` better for daily editing than `npm run build`?',
            task:
              'Describe what changes when Vite is in development mode versus production build mode.',
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
              body:
                'The ESLint extension or script reads the file text and parses it into a structured tree of imports, variables, function calls, JSX nodes, and more.',
            },
            {
              title: 'Rules inspect the syntax tree',
              body:
                'Each rule checks a small pattern. One may detect an unused variable. Another may check React hook usage or missing dependencies.',
            },
            {
              title: 'Warnings appear before runtime',
              body:
                'The editor can underline the problem immediately, or `npm run lint` can report it in the terminal or CI before merge.',
            },
            {
              title: 'You fix or suppress the issue intentionally',
              body:
                'If the warning is valid, you change the code. If not, you document the exception carefully instead of ignoring lint entirely.',
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
            question:
              'Why can ESLint warn about some mistakes even though the app was never run?',
            task:
              'Explain static analysis in one sentence, then name one thing ESLint can catch and one thing it cannot guarantee.',
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
              body:
                'The code may work, but the spacing, wrapping, and punctuation style vary from file to file or person to person.',
            },
            {
              title: 'Prettier reads and reprints the file',
              body:
                'Instead of checking whether the logic is right, it rewrites the file into a predictable formatting style.',
            },
            {
              title: 'The team reviews cleaner diffs',
              body:
                'Once formatting is automatic, reviewers can focus on logic and maintainability instead of cosmetic cleanup.',
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
            task:
              'Take one messy snippet in this lesson and describe which changes are formatting-only versus behavior-related.',
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
      title: 'Components, JSX, props, and state',
      hero: {
        eyebrow: 'Steps 2-3',
        title: 'JSX, component, props, and state',
        lead: 'Now we step into React: how JSX describes UI, how props move data from parent to child, and how state keeps interactions alive.',
        primaryAction: 'I practiced this section',
        secondaryAction: null,
      },
      summary: {
        intro:
          'In React, a component is smaller than it looks: each piece owns one responsibility and receives its data from the outside.',
        points: ['JSX = UI description', 'props = data from parent', 'state = internal memory'],
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
      quizTitle: 'Props or state?',
      tips: [
        'When data comes from the parent, it is usually props; when the component keeps it, it is state.',
        'If the UI responds to input, look at the handler and the state together.',
      ],
    },
    effects: {
      stageLabel: 'Step 4',
      title: 'useEffect and side effects',
      hero: {
        eyebrow: 'Step 4',
        title: 'useEffect, side effects, and data sync',
        lead: 'Here we learn when to use an effect, what cleanup does, and how to sync with the outside world, like timers and localStorage.',
        primaryAction: 'I practiced this section',
        secondaryAction: null,
      },
      summary: {
        intro:
          'useEffect is where React talks to the outside world: timers, titles, subscriptions, and persistence.',
        points: [
          'cleanup matters',
          'debounce is controlled delay',
          'sync state with external systems',
        ],
      },
      clock: {
        eyebrow: 'useEffect',
        title: 'Live clock and cleanup',
        lead: 'The interval is created inside useEffect and cleaned up in the return function.',
      },
      debounce: {
        eyebrow: 'Cleanup demo',
        title: 'Debounced search',
        lead: 'Each new keystroke clears the previous effect so only the latest value applies after a short pause.',
        searchLabel: 'Search',
        placeholder: 'For example: state',
        lastQuery: 'Latest query',
        empty: 'Nothing typed yet.',
      },
      note: {
        eyebrow: 'Persistence',
        title: 'Live note',
        lead: 'This textarea syncs with localStorage so you can see the side effect in action.',
        label: 'Note',
        initial: 'useEffect is used for side effects, timers, and syncing with the outside world.',
      },
      routingNotes: [
        'Use `Link` and `NavLink` for navigation without reloads.',
        'Each page gets its own route so the app structure stays clean.',
        'In a real app, routes make the codebase easier to grow.',
      ],
      quizTitle: 'Test cleanup knowledge',
      tips: [
        'Every effect should have a clear reason: syncing with something outside React.',
        'Do not skip cleanup; many bugs come from timers or listeners left behind.',
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
      routing: 'Routing',
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
        id: 'effects-cleanup',
        title: 'When is cleanup important?',
        prompt: 'Which case needs cleanup the most?',
        options: ['intervals and event listeners', 'button text', 'route path'],
        answerIndex: 0,
        explanation:
          'When a side effect creates external resources like timers or listeners, cleanup is needed to release them.',
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
