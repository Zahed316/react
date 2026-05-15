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
        lead: 'This page shows what each tool does and which one is the best fit for starting React.',
        primaryAction: 'Mark the tools as learned',
        secondaryAction: 'Go to JavaScript',
      },
      summary: {
        intro:
          'Good tools raise speed and quality. We keep only the parts needed for a smooth development flow.',
        points: ['npm and pnpm', 'Vite for the dev server', 'ESLint and Prettier for quality'],
        story: [
          {
            title: 'npm',
            description: 'Simple, familiar, and the easiest starting point for most new projects.',
          },
          {
            title: 'pnpm',
            description: 'A good fit when install speed and lower disk usage matter.',
          },
        ],
      },
      live: {
        eyebrow: 'Tools',
        title: 'What does each tool do?',
        lead: 'Tap each tab to review its role.',
        whyLabel: 'Why it matters',
        noteLabel: 'One-line takeaway',
      },
      tools: {
        npm: {
          title: 'npm',
          badge: 'Default',
          summary:
            'Node’s official package manager for installing dependencies and running scripts.',
          why: 'If you have Node, npm is usually ready already.',
          command: 'npm install',
          note: 'This is the easiest starting point for a new React project.',
        },
        pnpm: {
          title: 'pnpm',
          badge: 'Optional',
          summary: 'Does the same job as npm with a leaner and usually faster storage model.',
          why: 'Great for teams that want faster installs and less disk usage.',
          command: 'pnpm install',
          note: 'Not required in this sandbox, but very useful to know for real projects.',
        },
        vite: {
          title: 'Vite',
          badge: 'dev server',
          summary: 'A fast dev server and build tool for modern React apps.',
          why: 'Provides quick hot module replacement and a smooth dev loop.',
          command: 'npm run dev',
          note: 'We use Vite both to start the project and for production builds.',
        },
        eslint: {
          title: 'ESLint',
          badge: 'lint',
          summary: 'Reads the code and checks for errors, anti-patterns, and team rules.',
          why: 'Warns before a bug reaches the browser.',
          command: 'npm run lint',
          note: 'Great for code quality and teaching good practice.',
        },
        prettier: {
          title: 'Prettier',
          badge: 'format',
          summary: 'Keeps code styling consistent so style debates stay separate from logic.',
          why: 'Saves teams from repetitive spacing and line-break arguments.',
          command: 'npm run format',
          note: 'Prettier decides how code should look, not what it should do.',
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
        'For a new project, npm plus Vite is a simple and reliable combo.',
        'Do not treat ESLint and Prettier as rivals: one catches errors, the other keeps style tidy.',
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
          'Checks code for errors and rules',
          'Makes code style look neat',
          'Installs dependencies',
        ],
        answerIndex: 0,
        explanation: 'ESLint is used for linting and finding errors or anti-patterns.',
        xpReward: 15,
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
