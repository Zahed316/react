export const courseFa = {
  navigation: {
    home: 'خانه',
    setup: 'شروع',
    tooling: 'ابزارها',
    js: 'JavaScript',
    react: 'JSX و State',
    'events-forms': 'رویدادها و فرم‌ها',
    effects: 'useEffect',
    routing: 'مسیریابی',
    'context-state': 'Context و state مشترک',
    'project-architecture': 'معماری پروژه',
    'testing-accessibility': 'تست و دسترس‌پذیری',
    project: 'پروژه',
  },
  home: {
    hero: {
      eyebrow: 'مربی تعاملی React',
      title: 'React را با تمرین زنده، مأموریت و قدم‌های کوچک یاد بگیر',
      lead: 'این محیط برای یادگیری تعاملی ساخته شده: از setup و ابزارها شروع می‌کنی، بعد به JavaScript، JSX، state، useEffect و در نهایت نمونه‌پروژه می‌رسی. هر بخش یک سؤال، یک تمرین و یک پاداش دارد.',
      primaryAction: 'شروع از {stage}',
      secondaryAction: 'دیدن مأموریت‌ها',
    },
    sessionFlow: [
      {
        title: 'پیش‌نیازها و ابزارها',
        description: 'اول محیط را آماده می‌کنیم تا بعداً روی مشکل نصب و تنظیمات گیر نکنیم.',
      },
      {
        title: 'سؤال کوتاه',
        description: 'بعد از هر مفهوم، یک حدس کوچک می‌زنیم تا ذهن فعال بماند.',
      },
      {
        title: 'تغییر زنده',
        description: 'با کنترل‌های صفحه رفتار React را همان لحظه در مرورگر می‌بینیم.',
      },
      {
        title: 'کاربرد واقعی',
        description: 'در پایان، همان ایده را در یک feature واقعی به کار می‌بریم.',
      },
    ],
    quests: {
      setup: {
        title: 'آماده‌سازی محیط',
        description: 'چک‌لیست راه‌اندازی را کامل کن و با ابزارهای اصلی آشنا شو.',
      },
      tooling: {
        title: 'شناخت ابزارها',
        description: 'npm، pnpm، Vite، ESLint و Prettier را مرور کن.',
      },
      quiz: {
        title: 'حل ۲ سؤال کوتاه',
        description: 'حداقل دو quiz را درست جواب بده تا momentum بگیری.',
      },
      project: {
        title: 'پروژه‌ی نهایی',
        description: 'Task Manager را کامل کن و یک mini-app واقعی بساز.',
      },
    },
    summaryLabels: {
      modules: 'ماژول‌های کامل',
      quizzes: 'quizهای حل‌شده',
      badges: 'badgeهای باز',
      progress: 'وضعیت',
    },
    moduleIntro: {
      eyebrow: 'مسیر یادگیری',
      title: 'هر درس چه کمکی می‌کند؟',
      lead: 'هر ماژول یک milestone کوچک است که تو را یک قدم به ساختن React app نزدیک‌تر می‌کند.',
    },
    coachNote: {
      eyebrow: 'یادآوری',
      title: 'چیزی را حفظ نکن، رفتار آن را ببین',
      body: 'React را با تماشا کردن componentها، تغییر state، و دنبال کردن data flow یاد می‌گیریم. اگر جایی گیج شدی، همان‌جا با هم debug می‌کنیم.',
      asideTitle: 'شروع پیشنهادی',
      asideBody: 'اگر تازه می‌آیی، از setup شروع کن و بعد tooling را ببین.',
    },
  },
  modules: {
    setup: {
      stageLabel: 'گام ۰',
      title: 'آماده‌سازی محیط یادگیری',
      hero: {
        eyebrow: 'گام ۰',
        title: 'آماده‌سازی محیط یادگیری',
        lead: 'قبل از شروع React، بیایید محیط را درست بچینیم: مرورگر، ویرایشگر، Git، Node.js، npm و React Developer Tools.',
        primaryAction: 'ثبت آمادگی و ادامه',
        secondaryAction: 'رفتن به ابزارها',
      },
      summary: {
        intro:
          'اگر این پیش‌نیازها را آماده داشته باشی، در بقیه‌ی مسیر کمتر درگیر setup می‌شوی و بیشتر روی یادگیری تمرکز می‌کنی.',
        points: ['browser + DevTools', 'editor + lint hints', 'Git + Node + npm'],
      },
      live: {
        eyebrow: 'چک‌لیست شروع',
        title: 'برای شروع چه چیزهایی لازم است؟',
        lead: 'هر مورد را که آماده شد تیک بزن.',
        storyTitle: 'چرا این‌ها مهم‌اند؟',
        story: [
          {
            title: 'مرورگر + DevTools',
            description:
              'نتیجه را می‌بینی، DOM و component tree را inspect می‌کنی و رفتار UI را debug می‌کنی.',
          },
          {
            title: 'Editor + ESLint/Prettier',
            description: 'کد را خوانا، قابل‌پیش‌بینی و کم‌خطا نگه می‌دارد؛ یعنی feedback سریع‌تر.',
          },
          {
            title: 'Git + Node + npm',
            description:
              'Git checkpoint می‌دهد و Node/npm امکان نصب React tools و اجرای scripts را فراهم می‌کند.',
          },
        ],
        commands: [
          { label: 'راه‌اندازی سریع', code: 'npm create vite@latest . -- --template react' },
          { label: 'نصب وابستگی‌ها', code: 'npm install' },
          { label: 'اجرای محیط', code: 'npm run dev' },
        ],
      },
      checklist: {
        browser: {
          title: 'مرورگر مدرن',
          summary: 'Chrome یا Firefox برای اجرای app و DevTools لازم است.',
          hint: 'بعداً React Developer Tools را روی همین مرورگر نصب می‌کنیم.',
        },
        editor: {
          title: 'ویرایشگر کد',
          summary: 'VS Code یا یک editor مشابه برای نوشتن JSX و دیدن lint hints.',
          hint: 'افزونه‌های ESLint و Prettier را فعال نگه دار.',
        },
        git: {
          title: 'Git',
          summary: 'برای checkpoint گرفتن از یادگیری و برگشتن به نسخه‌های قبلی.',
          hint: '`git init`، `git status` و `git commit` را باید بلد باشی.',
        },
        node: {
          title: 'Node.js',
          summary: 'JavaScript را بیرون از browser اجرا می‌کند و npm را هم همراه دارد.',
          hint: 'برای React tooling به Node نیاز داریم.',
        },
        npm: {
          title: 'npm',
          summary: 'package manager پیش‌فرض Node برای نصب packageها و اجرای scripts.',
          hint: 'در این محیط، مسیر پیش‌فرض ما همین است.',
        },
        devtools: {
          title: 'React Developer Tools',
          summary: 'برای دیدن component tree، props و state داخل browser.',
          hint: 'بعد از نصب، debugging React خیلی شفاف‌تر می‌شود.',
        },
      },
      quizTitle: 'quizهای گرم‌کننده',
      tips: [
        'اگر یک ابزار را نمی‌شناسی، اول نقش آن را بفهم، بعد سراغ جزئیات برو.',
        'در شروع، تنظیم درست محیط از حفظ کردن دستورها مهم‌تر است.',
      ],
    },
    tooling: {
      stageLabel: 'گام ۰.۵',
      title: 'npm، pnpm، Vite، ESLint و Prettier',
      hero: {
        eyebrow: 'گام ۰.۵',
        title: 'npm، pnpm، Vite، ESLint و Prettier',
        lead: 'در این درس فقط اسم ابزارها را حفظ نمی‌کنیم؛ می‌فهمیم چرا به‌وجود آمده‌اند، پشت صحنه چه می‌کنند و در پروژه‌های واقعی React چطور به کار می‌روند.',
        primaryAction: 'ثبت یادگیری ابزارها',
        secondaryAction: 'رفتن به JavaScript',
      },
      summary: {
        intro:
          'ابزارهای خوب اصطکاک را کم می‌کنند، خطاها را زودتر نشان می‌دهند و همکاری تیمی را قابل‌پیش‌بینی‌تر می‌کنند. اینجا با آن‌ها مثل بخشی از workflow محصول رفتار می‌کنیم، نه فقط setup.',
        points: ['npm و pnpm', 'Vite برای dev server', 'ESLint و Prettier برای کیفیت'],
        story: [
          {
            title: 'npm',
            description:
              'یک package manager و script runner که در بیشتر آموزش‌های JavaScript و خیلی از پروژه‌های واقعی نقطه‌ی شروع پیش‌فرض است.',
          },
          {
            title: 'pnpm',
            description:
              'یک package manager با همان نقش اصلی npm، اما با مدل ذخیره‌سازی بهینه‌تر برای سرعت و استفاده‌ی کمتر از فضا.',
          },
          {
            title: 'Vite',
            description:
              'یک dev server و build pipeline که حلقه‌ی بازخورد را هنگام ویرایش کد React سریع و روان نگه می‌دارد.',
          },
          {
            title: 'ESLint + Prettier',
            description:
              'یکی کد را با ruleها و الگوهای خطا بررسی می‌کند و دیگری ظاهر کد را برای کل تیم یکدست نگه می‌دارد.',
          },
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'هر ابزار واقعاً چه کاری انجام می‌دهد؟',
        lead: 'یک ابزار را انتخاب کن و با یک ساختار ثابت جلو برو: تعریف، دلیل وجود، مکانیزم داخلی، شبیه‌سازی، مثال، اشتباه‌ها و کاربرد واقعی.',
        chooserLabel: 'ابزار موردنظر را انتخاب کن',
        commandEyebrow: 'جریان دستورها',
        commandTitle: 'دستورها چطور کنار هم کار می‌کنند؟',
        commandLead:
          'دستورهای پایین لایه‌ی عملی کار هستند. اول بفهم هر ابزار چه مسئولیتی دارد، بعد commandها را حفظ کن.',
        comparisonEyebrow: 'Package managerها',
        comparisonTitle: 'npm در برابر pnpm',
        sections: {
          definition: '۱. تعریف ساده',
          whyExists: '۲. چرا به‌وجود آمد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. چطور کار می‌کند',
          simulation: '۵. شبیه‌سازی مرحله‌به‌مرحله',
          example: '۶. مثال عملی کد',
          beforeAfter: '۷. مقایسه قبل/بعد',
          mistakes: '۸. اشتباه‌های رایج مبتدی‌ها',
          usage: '۹. کاربرد در پروژه‌های واقعی',
          practice: '۱۰. تمرین یا mini-quiz',
          summary: '۱۱. جمع‌بندی ساده',
        },
        practiceQuestion: 'سؤال پیش‌بینی',
        practiceTask: 'تمرین کوچک',
        beforeLabel: 'قبل',
        afterLabel: 'بعد',
        simulationIntro: 'پشت صحنه',
      },
      live: {
        eyebrow: 'ابزارها',
        title: 'هر ابزار چه نقشی دارد؟',
        lead: 'بین ابزارها و commandها جابه‌جا شو تا توضیح نظری به workflow واقعی وصل شود.',
        whyLabel: 'چرا مهم است؟',
        noteLabel: 'یادگیری در یک خط',
      },
      tools: {
        npm: {
          title: 'npm',
          badge: 'پیش‌فرض',
          accent: '#d97706',
          summary: 'package manager رسمی Node برای نصب dependencyها و اجرای scriptهای پروژه.',
          why: 'اگر Node نصب باشد، npm هم از قبل در دسترس است و یک تصمیم اضافی را از اول مسیر حذف می‌کند.',
          command: 'npm install',
          note: 'npm در خیلی از پروژه‌های JavaScript درِ ورودی packageها و scriptها است.',
          whyExists:
            'پروژه‌های JavaScript به یک راه استاندارد برای اشتراک‌گذاری کد، مدیریت version dependencyها و اجرای taskهای تکرارشونده مثل build و dev server نیاز داشتند.',
          problem:
            'بدون package manager، تیم‌ها باید libraryها را دستی دانلود کنند، versionها را با دست دنبال کنند و commandهای طولانی را روی هر سیستم جداگانه نگه دارند.',
          howItWorks: [
            '`package.json` metadata پروژه، scriptها و dependencyها را نگه می‌دارد. npm این فایل را می‌خواند تا بفهمد پروژه چه packageها و commandهایی انتظار دارد.',
            'وقتی `npm install` را اجرا می‌کنی، npm versionها را resolve می‌کند، packageها را از registry می‌گیرد و lockfile می‌نویسد تا نصب دوباره قابل‌تکرار باشد.',
            'وقتی `npm run dev` را اجرا می‌کنی، npm خودش command تازه‌ای اختراع نمی‌کند؛ فقط به `scripts` در `package.json` نگاه می‌کند و همان entry را اجرا می‌کند.',
          ],
          simulation: [
            {
              title: 'repo را clone می‌کنی',
              body: 'در ابتدا مخزن فقط source code و metadataهایی مثل `package.json` و `package-lock.json` را دارد. خود libraryها هنوز نصب نشده‌اند.',
            },
            {
              title: '`npm install` را اجرا می‌کنی',
              body: 'npm نام dependencyها و versionها را می‌خواند، lockfile را بررسی می‌کند، packageها را دانلود می‌کند و فایل‌های قابل‌استفاده را داخل `node_modules` قرار می‌دهد.',
            },
            {
              title: 'npm نتیجه را ثبت می‌کند',
              body: 'اگر dependency resolution تغییر کند، npm lockfile را به‌روز می‌کند تا نفر بعدی هم بتواند همان نصب را تکرار کند.',
            },
            {
              title: '`npm run dev` را اجرا می‌کنی',
              body: 'npm به دنبال scriptی به نام `dev` در `package.json` می‌گردد و command واقعی زیر آن را اجرا می‌کند که در این پروژه معمولاً `vite` است.',
            },
          ],
          example: {
            title: 'یک workflow کوچک با package.json',
            code: `{
  "name": "react-learning-sandbox",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint ."
  }
}`,
            explanation:
              'این فایل به npm می‌گوید چه scriptهایی در پروژه وجود دارد. npm اجراکننده است؛ Vite و ESLint ابزارهای واقعی پشت این نام‌ها هستند.',
          },
          comparison: {
            before: `# قبل از package manager
فایل zip یک library را دانلود کن
فایل‌ها را دستی در پروژه کپی کن
امیدوار باش version با آموزش یکی باشد
commandهای لازم را جداگانه به خاطر بسپار`,
            after: `# با npm
npm install
npm run dev
npm run lint
npm run build`,
            takeaway:
              'بهبود فقط در سرعت نیست؛ در تکرارپذیری است. همه‌ی اعضای تیم همان commandها را روی همان dependencyهای اعلام‌شده اجرا می‌کنند.',
          },
          mistakes: [
            'فکر کردن npm همان Node است. Node runtime است؛ npm package manager و script runnerای است که همراه آن می‌آید.',
            'فکر کردن `npm run dev` یک command جهانی و آماده است. این command فقط وقتی کار می‌کند که پروژه داخل `package.json` scriptی به نام `dev` تعریف کرده باشد.',
            'تغییر دستی dependencyها بدون install دوباره و بعد تعجب از اینکه چرا رفتار پروژه عوض نشده است.',
          ],
          realUsage: [
            'نصب libraryهای React مثل router، i18n یا ابزار تست.',
            'اجرای scriptهای استاندارد تیم در development محلی، CI و release.',
            'قفل کردن version dependencyها تا پروژه روی سیستم‌های مختلف رفتار یکسانی داشته باشد.',
          ],
          practice: {
            question:
              'اگر `npm run dev` با خطای “missing script: dev” شکست بخورد، اول باید چه چیزی را بررسی کنی؟',
            task: '`package.json` را باز کن، object مربوط به `scripts` را پیدا کن و توضیح بده در این repo چه ابزاری واقعاً dev server را روشن می‌کند.',
          },
          summaryPoints: [
            'npm package نصب می‌کند و scriptهای نام‌گذاری‌شده پروژه را اجرا می‌کند.',
            '`package.json` قراردادی است که npm آن را می‌خواند.',
            'Package manager کمک می‌کند پروژه روی سیستم توسعه‌دهنده‌ها و CI تکرارپذیر بماند.',
          ],
        },
        pnpm: {
          title: 'pnpm',
          badge: 'اختیاری',
          accent: '#0f766e',
          summary:
            'یک package manager که کار اصلی npm را انجام می‌دهد، اما packageها را به شکل بهینه‌تر و معمولاً سریع‌تر نگه می‌دارد.',
          why: 'وقتی حجم dependencyها زیاد است و سرعت نصب یا مصرف فضا مهم می‌شود، pnpm جذاب‌تر می‌شود.',
          command: 'pnpm install',
          note: 'در این sandbox لازم نیست، اما با بزرگ‌تر شدن projectها و monorepoها مهم‌تر می‌شود.',
          whyExists:
            'تیم‌های JavaScript می‌خواستند راحتی workflow شبیه npm را داشته باشند، اما بدون اینکه packageهای تکراری را بارها و بارها روی دیسک ذخیره کنند.',
          problem:
            'Installهای سنتی می‌توانند فضای زیادی بگیرند و setup چند پروژه‌ی مرتبط را کندتر یا سنگین‌تر از حد لازم کنند.',
          howItWorks: [
            'pnpm هم مثل npm `package.json` و lockfile را می‌خواند، اما packageها را در یک shared content-addressable store نگه می‌دارد.',
            'Entryهای `node_modules` در سطح پروژه به جای کپی کامل، از آن store مشترک link می‌شوند.',
            'از دید توسعه‌دهنده commandها آشنا هستند، اما تفاوت مهم در استراتژی ذخیره‌سازی و reuse packageها است.',
          ],
          simulation: [
            {
              title: 'دو پروژه به یک package یکسان نیاز دارند',
              body: 'در مدل ساده‌تر، هر پروژه ممکن است نسخه‌ی کامل خودش از همان package را روی دیسک نگه دارد.',
            },
            {
              title: 'pnpm package را یک بار در store مشترک نگه می‌دارد',
              body: 'محتوای package به‌صورت مرکزی cache می‌شود و پروژه‌ها به آن link می‌شوند، نه اینکه هر بار نسخه‌ی کامل را کپی کنند.',
            },
            {
              title: 'پروژه‌ی جدید سریع‌تر install می‌شود',
              body: 'اگر package از قبل در store باشد، pnpm می‌تواند همان را reuse کند و لازم نیست همه‌چیز را از صفر دانلود و کپی کند.',
            },
          ],
          example: {
            title: 'سطح commandها آشنا می‌ماند',
            code: `pnpm install
pnpm dev
pnpm lint
pnpm build`,
            explanation:
              'تفاوت اصلی در چیزی نیست که از ابزار می‌خواهی، بلکه در نحوه‌ی ذخیره و link شدن packageها در پشت صحنه است.',
          },
          comparison: {
            before: `# مدل ساده‌تر
project A package X را دانلود می‌کند
project B دوباره همان package X را دانلود می‌کند`,
            after: `# مدل shared store
store مشترک package X را یک بار نگه می‌دارد
project A و B به همان package link می‌شوند`,
            takeaway:
              'pnpm بیشتر storage و reuse را تغییر می‌دهد، نه هدف سطح بالای package manager را.',
          },
          mistakes: [
            'فکر کردن pnpm در هر شرایطی “بهتر از npm” است. pnpm یک‌سری مشکل مشخص در storage و workflow را حل می‌کند؛ برای هر پروژه‌ی آموزشی لازم نیست.',
            'مخلوط کردن lockfileهای npm و pnpm در یک repo بدون توافق تیمی.',
            'فرض کردن که عوض شدن package manager رفتار React را هم عوض می‌کند. React همان است؛ فقط workflow dependencyها فرق می‌کند.',
          ],
          realUsage: [
            'repoهای بزرگ با چند package یا چند app مرتبط.',
            'تیم‌هایی که به سرعت install و کاهش فضای تکراری اهمیت می‌دهند.',
            'workflowهایی که lockfile پایدار در چند package مهم است.',
          ],
          practice: {
            question:
              'چرا ممکن است یک تیم با چند app مرتبط JavaScript، pnpm را به جای npm انتخاب کند؟',
            task: 'npm و pnpm را هرکدام در یک جمله تعریف کن: شغل یکسان، استراتژی ذخیره‌سازی متفاوت.',
          },
          summaryPoints: [
            'pnpm یک package manager دیگر است، نه یک framework متفاوت.',
            'مزیت اصلی آن در storage بهینه و reuse packageها است.',
            'برای این lab، فهم ایده از تغییر واقعی ابزار مهم‌تر است.',
          ],
        },
        vite: {
          title: 'Vite',
          badge: 'dev server',
          accent: '#2563eb',
          summary: 'ابزار سریع ساخت dev server و build برای appهای مدرن React.',
          why: 'حلقه‌ی بازخورد را هنگام کدنویسی سریع نگه می‌دارد و یادگیری و debug را کم‌اصطکاک‌تر می‌کند.',
          command: 'npm run dev',
          note: 'Vite هم development محلی را راه می‌اندازد و هم build production را می‌سازد.',
          whyExists:
            'ابزارهای قدیمی‌تر frontend در development محلی برای خیلی از پروژه‌ها سنگین یا کند بودند، مخصوصاً وقتی بعد از هر تغییر کوچک باید صبر می‌کردی.',
          problem:
            'اگر هر تغییر کد دیر در browser دیده شود، هم یادگیری کندتر می‌شود و هم توسعه و debug خسته‌کننده‌تر.',
          howItWorks: [
            'در development، Vite فایل‌ها را سریع و on-demand سرو می‌کند و لازم نیست هر بار کل app را از اول bundle کند.',
            'وقتی فایل را save می‌کنی، Vite فقط بخش‌های تغییرکرده را update می‌کند و همین حلقه‌ی بازخورد سریع را می‌سازد.',
            'در حالت production، نقش Vite عوض می‌شود و فایل‌های بهینه‌شده برای deploy می‌سازد.',
          ],
          simulation: [
            {
              title: '`npm run dev` را اجرا می‌کنی',
              body: 'npm command مربوط به `vite` را از `package.json` اجرا می‌کند و Vite یک server محلی می‌سازد که فایل‌های پروژه را زیر نظر می‌گیرد.',
            },
            {
              title: 'app را در browser باز می‌کنی',
              body: 'browser ماژول‌ها را درخواست می‌کند و Vite نسخه‌ی تبدیل‌شده‌ی فایل‌ها را برای development به آن می‌دهد.',
            },
            {
              title: 'یک component React را تغییر می‌دهی',
              body: 'Vite فایل تغییرکرده را تشخیص می‌دهد و update سریع می‌فرستد تا بدون rebuild سنگین نتیجه را ببینی.',
            },
            {
              title: '`npm run build` را اجرا می‌کنی',
              body: 'Vite به جای تمرکز روی سرعت ویرایش، فایل‌های نهایی بهینه برای deploy را تولید می‌کند.',
            },
          ],
          example: {
            title: 'scriptهای پروژه که به Vite اشاره می‌کنند',
            code: `"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}`,
            explanation:
              '`dev` حلقه‌ی یادگیری و development را روشن می‌کند، `build` فایل‌های production را می‌سازد و `preview` همان build را محلی نشان می‌دهد.',
          },
          comparison: {
            before: `# حلقه‌ی بازخورد کندتر
فایل را ویرایش کن
منتظر rebuild سنگین بمان
refresh کن و نتیجه را ببین`,
            after: `# حلقه‌ی بازخورد سریع‌تر با Vite
فایل را ویرایش کن
update سریع بگیر
بلافاصله نتیجه را بررسی کن`,
            takeaway: 'ارزش اصلی Vite کم کردن فاصله‌ی بین تغییر کد و دیدن نتیجه در browser است.',
          },
          mistakes: [
            'فکر کردن Vite جای React را می‌گیرد. Vite ابزار اطراف app React است، نه خود framework.',
            'فکر کردن `npm run dev` همان خروجی production را می‌سازد. برای آن `npm run build` لازم است.',
            'فرض کردن hot update همیشه دقیقاً معادل یک reload کامل است. برای debug بعضی حالت‌ها هنوز reload کامل مفید است.',
          ],
          realUsage: [
            'راه‌اندازی dev serverهای سریع برای appهای React.',
            'ساخت فایل‌های بهینه‌شده برای deploy.',
            'workflowهای تیمی که سرعت edit-feedback در آن‌ها هر روز مهم است.',
          ],
          practice: {
            question: 'چرا برای ویرایش روزمره، `npm run dev` از `npm run build` مناسب‌تر است؟',
            task: 'توضیح بده در حالت development و در حالت build production، نقش Vite چه تفاوتی دارد.',
          },
          summaryPoints: [
            'Vite dev server و build tool است، نه package manager.',
            'ارزش اصلی آن حلقه‌ی سریع edit-feedback است.',
            'یک ابزار می‌تواند در development و production دو نقش متفاوت داشته باشد.',
          ],
        },
        eslint: {
          title: 'ESLint',
          badge: 'lint',
          accent: '#7c3aed',
          summary:
            'ابزار static analysis برای JavaScript و JSX که بدون اجرای app، کد را با مجموعه‌ای از ruleها بررسی می‌کند.',
          why: 'خیلی از خطاها را قبل از refresh، قبل از code review و قبل از CI failure به تو نشان می‌دهد.',
          command: 'npm run lint',
          note: 'ESLint هم bug catcher است و هم مربی عادت‌های کدنویسی تیم.',
          whyExists:
            'پروژه‌های JavaScript به یک راه خودکار نیاز داشتند تا قبل از runtime، patternهای خطرناک، اشتباه‌های رایج و ruleهای تیم را روی source code بررسی کنند.',
          problem:
            'بدون linting، خیلی از مشکلات دیر پیدا می‌شوند: هنگام تست دستی، code review، CI یا حتی بعد از deploy.',
          howItWorks: [
            'Linting یک نوع static analysis است: ESLint source code را به‌عنوان متن می‌خواند، آن را به یک abstract syntax tree تبدیل می‌کند و آن tree را با ruleها بررسی می‌کند.',
            'یک rule می‌تواند سؤال‌هایی مثل این بپرسد: “آیا یک متغیر unused است؟”، “آیا hook در جای اشتباه صدا زده شده؟”، “آیا یک convention تیمی شکسته شده؟”',
            'چون ESLint app را اجرا نمی‌کند، خیلی زود در editor و CI هشدار می‌دهد؛ اما نمی‌تواند همه‌ی رفتار runtime را مثل test یا browser تضمین کند.',
          ],
          simulation: [
            {
              title: 'فایل را در editor ذخیره می‌کنی',
              body: 'افزونه ESLint یا command مربوطه متن فایل را می‌خواند و آن را به tree ساختاریافته‌ای از importها، variableها، function callها و JSX تبدیل می‌کند.',
            },
            {
              title: 'ruleها tree را بررسی می‌کنند',
              body: 'هر rule یک pattern کوچک را می‌سنجد. یکی ممکن است متغیر unused را پیدا کند. دیگری محل صدا زدن hook یا dependencyهای effect را بررسی کند.',
            },
            {
              title: 'هشدار قبل از runtime ظاهر می‌شود',
              body: 'editor می‌تواند همان لحظه زیر خط بکشد، یا `npm run lint` همان مشکل را در terminal و CI گزارش کند.',
            },
            {
              title: 'هشدار را رفع یا با دلیل مستند می‌کنی',
              body: 'اگر هشدار درست باشد، کد را اصلاح می‌کنی. اگر نه، استثنا را آگاهانه و محدود مستند می‌کنی، نه اینکه کل lint را نادیده بگیری.',
            },
          ],
          example: {
            title: 'بررسی کد بدون اجرای app',
            code: `function Profile({ user }) {
  const name = user.name;
  const unused = user.id;

  return <h1>{name}</h1>;
}`,
            explanation:
              'ممکن است app هنوز render شود، اما ESLint می‌تواند همان لحظه بگوید `unused` تعریف شده و هیچ‌جا استفاده نشده است، چون static analysis ساختار کد را می‌بیند.',
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
              'Linting جادو نیست، اما تو را به سمت patternهای امن‌تر هل می‌دهد. در پروژه‌های React، ruleهای hook و effect جلوی خیلی از اشتباه‌های رایج را می‌گیرند.',
          },
          mistakes: [
            'فکر کردن linting یعنی “فقط مرتب کردن ظاهر کد”. مرتب‌سازی بیشتر کار Prettier است؛ linting بیشتر static analysis و rule checking است.',
            'فکر کردن ESLint همه‌ی bugها را می‌فهمد. ESLint خیلی از مشکل‌های ساختاری را می‌گیرد، اما جای test، browser و رفتار واقعی کاربر را نمی‌گیرد.',
            'نادیده گرفتن هشدارهای lint تا به نویز پس‌زمینه تبدیل شوند. این ابزار فقط وقتی کمک می‌کند که تیم هشدارها را جدی بگیرد.',
          ],
          realUsage: [
            'بازخورد مستقیم داخل editor هنگام نوشتن کد.',
            'Checkهای PR و CI که قبل از merge جلوی patternهای خطرناک را می‌گیرند.',
            'ruleهای مخصوص React مثل hook rules و dependency checks.',
          ],
          practice: {
            question:
              'چرا ESLint می‌تواند بعضی اشتباه‌ها را پیدا کند، درحالی‌که app اصلاً اجرا نشده است؟',
            task: 'static analysis را در یک جمله تعریف کن، بعد یک موردی را نام ببر که ESLint می‌تواند بگیرد و یک موردی را که نمی‌تواند به‌تنهایی تضمین کند.',
          },
          summaryPoints: [
            'ESLint source code را بدون اجرا شدن app می‌خواند.',
            'با ruleها patternها، اشتباه‌ها و شکستن conventionها را پیدا می‌کند.',
            'Linting در editor، CI، code review و نگه‌داری بلندمدت کمک می‌کند، اما جای runtime testing را نمی‌گیرد.',
          ],
        },
        prettier: {
          title: 'Prettier',
          badge: 'format',
          accent: '#ec4899',
          summary:
            'یک formatter opinionated که کد را به‌صورت خودکار با یک style یکدست بازنویسی می‌کند.',
          why: 'بحث‌های تکراری درباره‌ی ظاهر کد را حذف می‌کند تا review روی رفتار و طراحی متمرکز بماند.',
          command: 'npm run format',
          note: 'Prettier به شکل و یکدستی کد اهمیت می‌دهد، نه به درست بودن منطق.',
          whyExists:
            'تیم‌ها زمان زیادی را صرف بحث درباره‌ی indentation، quote، line wrapping و جزئیات ظاهری می‌کردند؛ چیزهایی که معمولاً رفتار برنامه را عوض نمی‌کنند.',
          problem:
            'بدون formatting خودکار، style فایل‌ها به‌مرور ناهماهنگ می‌شود، reviewها شلوغ می‌شوند و خواندن سریع کد سخت‌تر می‌شود.',
          howItWorks: [
            'Prettier کد را parse می‌کند، یک نمایش داخلی از آن می‌سازد و سپس با ruleهای خودش دوباره آن را چاپ می‌کند.',
            'قرار نیست برای هر فاصله یا line break از تو سؤال بپرسد. ارزش آن در این است که بیشتر تصمیم‌های ظاهری را خودکار و ثابت می‌کند.',
            'چون کارش formatting است، نه bug detection، معمولاً کنار ESLint استفاده می‌شود نه به‌جای آن.',
          ],
          simulation: [
            {
              title: 'توسعه‌دهنده کد نامرتب ولی معتبر می‌نویسد',
              body: 'کد ممکن است کار کند، اما spacing، wrapping و punctuation آن بین فایل‌ها یا بین افراد مختلف ناسازگار باشد.',
            },
            {
              title: 'Prettier فایل را دوباره چاپ می‌کند',
              body: 'به‌جای اینکه منطق را بسنجد، فایل را در یک style قابل‌پیش‌بینی بازنویسی می‌کند.',
            },
            {
              title: 'diffها و reviewها تمیزتر می‌شوند',
              body: 'وقتی formatting خودکار باشد، reviewerها می‌توانند به‌جای اصلاحات ظاهری روی منطق و maintainability تمرکز کنند.',
            },
          ],
          example: {
            title: 'Formatting شکل را عوض می‌کند، نه معنی را',
            code: `const user={name:"Sara",role:"Student"}
const message = user.name + " is learning React"

export function Header(){return <h1>{message}</h1>}`,
            explanation:
              'Prettier می‌تواند این کد را به شکل یکدست بازنویسی کند، اما تصمیم نمی‌گیرد آیا منطق آن بهترین طراحی ممکن است یا نه.',
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
              'دستاورد اصلی خوانایی و یکدستی است. Prettier نویز بصری را کم می‌کند تا تیم روی خود کد فکر کند.',
          },
          mistakes: [
            'انتظار داشتن از Prettier برای پیدا کردن bug منطقی. نقش اصلی آن formatting است، نه static analysis.',
            'در نظر گرفتن Prettier و ESLint به‌عنوان ابزارهای کاملاً تکراری. کمی overlap دارند، اما هدف اصلی‌شان متفاوت است.',
            'جنگیدن دستی با formatter در هر خط به‌جای پذیرفتن قرارداد مشترک style تیم.',
          ],
          realUsage: [
            'format خودکار هنگام save در editor.',
            'checkهای pre-commit یا CI برای formatting.',
            'کم کردن commentهای review درباره‌ی spacing، quote و wrapping.',
          ],
          practice: {
            question:
              'Prettier کدام بخش از مشکل را حل می‌کند که معمولاً ESLint نباید به‌تنهایی مالک آن باشد؟',
            task: 'یک snippet نامرتب از همین درس را بردار و بگو کدام تغییرها فقط formatting هستند و کدام‌ها رفتار را تغییر می‌دهند.',
          },
          summaryPoints: [
            'Prettier کد را به‌صورت یکدست format می‌کند.',
            'با حذف بحث‌های ظاهری، خوانایی و همکاری تیمی را بهتر می‌کند.',
            'Prettier مکمل ESLint است، نه جایگزین آن.',
          ],
        },
      },
      packageManagerComparison: [
        {
          label: 'انتخاب پیش‌فرض',
          npm: 'بله، برای این محیط و بیشتر آموزش‌ها.',
          pnpm: 'اختیاری، وقتی خودت یا تیم از قبل از آن استفاده می‌کنید.',
        },
        {
          label: 'نقش اصلی',
          npm: 'نصب packageها و اجرای scriptها.',
          pnpm: 'همان نقش npm، با ساختار ذخیره‌سازی متفاوت.',
        },
        {
          label: 'پیام آموزشی',
          npm: 'برای شروع React کافی و ساده است.',
          pnpm: 'دانستنش مفید است، اما لازم نیست از روز اول سراغش بروی.',
        },
      ],
      commandCards: [
        {
          command: 'npm install',
          description: 'dependencyها را از registry نصب می‌کند.',
          result: 'package.json و node_modules را به‌روز می‌کند.',
        },
        {
          command: 'npm run dev',
          description: 'dev server را با hot reload روشن می‌کند.',
          result: 'آدرس local برای دیدن app در browser.',
        },
        {
          command: 'npm run lint',
          description: 'کد را با قوانین ESLint بررسی می‌کند.',
          result: 'خطاها و هشدارهای قابل اصلاح را نشان می‌دهد.',
        },
        {
          command: 'npm run format',
          description: 'کد را با Prettier یکدست می‌کند.',
          result: 'line wrapping و indentation تمیز.',
        },
        {
          command: 'npm run build',
          description: 'نسخه‌ی production را می‌سازد.',
          result: 'فایل‌های آماده برای deploy.',
        },
      ],
      quizTitle: 'تثبیت مفاهیم ابزارها',
      tips: [
        'وقتی یک ابزار مبهم به نظر می‌رسد، اول از خودت بپرس: package نصب می‌کند، کد را سرو می‌کند، کد را بررسی می‌کند یا فقط ظاهر آن را یکدست می‌کند؟',
        'برای شروع، عمق فهم از حفظ کردن command مهم‌تر است. اول دلیل وجود ابزار را بفهم، بعد workflow را بهینه کن.',
        'ESLint و Prettier را رقیب هم نبین؛ یکی patternها و اشتباه‌های محتمل را می‌گیرد و دیگری formatting را یکدست می‌کند.',
      ],
    },
    js: {
      stageLabel: 'گام ۱',
      title: 'مرور JavaScript برای React',
      hero: {
        eyebrow: 'گام ۱',
        title: 'مرور JavaScript برای React',
        lead: 'قبل از ورود عمیق به React، چند ابزار اصلی JavaScript را سریع مرور می‌کنیم: functions، array methods، destructuring و data transformation.',
        primaryAction: 'این بخش را تمرین کردم',
        secondaryAction: 'رفتن به JSX و Props',
      },
      summary: {
        intro:
          'React روی JavaScript سوار است. هرچه data transformation را راحت‌تر ببینی، state و props هم روشن‌تر می‌شوند.',
        points: ['map نتیجه‌ی جدید می‌سازد', 'filter آرایه را کوچک می‌کند', 'state را mutate نکن'],
      },
      explorer: {
        eyebrow: 'تمرین زنده',
        title: 'کاوشگر آرایه',
        lead: 'ورودی را تغییر بده و ببین `map` و `filter` چه خروجی‌ای می‌سازند.',
        itemsLabel: 'فهرست اسم‌ها',
        rangeLabel: 'حداقل طول اسم',
        mapLabel: 'map',
        filterLabel: 'filter',
        sampleText: 'آراد، سارا، نیکی، دانیال',
      },
      cheatSheet: [
        'از `map` برای ساخت آرایه جدید استفاده کن.',
        '`filter` آرایه را کوچک می‌کند، ولی `sort` می‌تواند آرایه را تغییر دهد.',
        'در React، داده را به componentهای فرزند با props می‌فرستیم.',
      ],
      quizTitle: 'quizهای جاوااسکریپت',
      tips: [
        'اگر یک method آرایه را می‌بینی، اول از خودت بپرس: خروجی جدید می‌سازد یا روی همان آرایه کار می‌کند؟',
        'برای React، درک immutability از حفظ کردن syntax مهم‌تر است.',
      ],
    },
    react: {
      stageLabel: 'گام ۲-۳',
      title: 'DOM، JSX، rendering، props و state',
      hero: {
        eyebrow: 'گام ۲-۳',
        title: 'DOM، JSX، React rendering، props و state',
        lead: 'این درس دنیای browser را به دنیای React وصل می‌کند: HTML به DOM tree تبدیل می‌شود، browser آن را به UI قابل‌دیدن تبدیل می‌کند، JSX به JavaScript تبدیل می‌شود و React کمک می‌کند updateهای UI را بدون غرق شدن در DOM manipulation دستی مدیریت کنیم.',
        primaryAction: 'این بخش را تمرین کردم',
        secondaryAction: 'رفتن به رویدادها و فرم‌ها',
      },
      summary: {
        intro:
          'برای فهم واقعی React، اول باید داستان زیرین browser را بفهمیم. React نه DOM را حذف می‌کند و نه pipeline رندر browser را. با آن‌ها کار می‌کند و راه بهتری برای توصیف و update کردن UI می‌دهد.',
        points: [
          'HTML متن منبع است و DOM یک tree زنده',
          'rendering یعنی تبدیل ساختارها به pixelهای قابل‌دیدن',
          'JSX یک syntax برای UI است که به JavaScript تبدیل می‌شود',
          'React updateها را مدیریت می‌کند تا DOM manipulation دستی کمتر شود',
        ],
        story: [
          {
            title: 'پایه‌ی browser',
            description:
              'browser، HTML را به DOM tree تبدیل می‌کند، اطلاعات style را می‌سازد و تصمیم می‌گیرد چه چیزی روی صفحه قابل‌دیدن شود.',
          },
          {
            title: 'rendering و re-rendering',
            description:
              'rendering یعنی اولین نمایش قابل‌دیدن. re-rendering یعنی توصیف UI عوض شود و browser بخش لازم را دوباره به‌روزرسانی کند.',
          },
          {
            title: 'JSX و React element',
            description:
              'JSX ظاهری شبیه HTML دارد، اما syntax جاوااسکریپتی است که React element می‌سازد، نه DOM node واقعی.',
          },
          {
            title: 'جریان update در React',
            description:
              'React توصیف‌های UI را با هم مقایسه می‌کند و فقط تغییرات لازم را روی DOM واقعی اعمال می‌کند تا state-driven UI قابل‌پیش‌بینی بماند.',
          },
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'browser و React چطور با هم کار می‌کنند',
        lead: 'یک موضوع را انتخاب کن و با همان ساختار جلو برو: تعریف، دلیل وجود، مکانیزم داخلی، شبیه‌سازی، کد، اشتباه‌ها و کاربرد واقعی.',
        chooserLabel: 'موضوع موردنظر را انتخاب کن',
        sections: {
          definition: '۱. تعریف ساده',
          whyExists: '۲. چرا به‌وجود آمد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. چطور کار می‌کند',
          simulation: '۵. شبیه‌سازی مرحله‌به‌مرحله',
          example: '۶. مثال عملی کد',
          beforeAfter: '۷. مقایسه قبل/بعد',
          mistakes: '۸. اشتباه‌های رایج مبتدی‌ها',
          usage: '۹. کاربرد در پروژه‌های واقعی',
          practice: '۱۰. تمرین یا mini-quiz',
          summary: '۱۱. جمع‌بندی ساده',
        },
        practiceQuestion: 'سؤال پیش‌بینی',
        practiceTask: 'تمرین کوچک',
        beforeLabel: 'قبل',
        afterLabel: 'بعد',
        simulationIntro: 'پشت صحنه',
      },
      live: {
        eyebrow: 'جریان رندر',
        title: 'ببین React چطور state را به UI قابل‌دیدن تبدیل می‌کند',
        lead: 'از تمرین‌های زنده‌ی پایین استفاده کن و این مدل ذهنی را نگه دار: event رخ می‌دهد، state عوض می‌شود، React component را دوباره اجرا می‌کند و browser فقط بخش لازم را روی صفحه به‌روز می‌کند.',
        story: [
          {
            title: 'یک click اتفاق می‌افتد',
            body: 'browser یک event تولید می‌کند. React آن را می‌گیرد و handler تو را صدا می‌زند؛ مثلاً click روی دکمه‌ای که شمارنده را عوض می‌کند.',
          },
          {
            title: 'state عوض می‌شود',
            body: 'setter به React می‌گوید data جدیدی وجود دارد. React یک render تازه برای بخش درگیر برنامه‌ریزی می‌کند.',
          },
          {
            title: 'React یک توصیف جدید از UI می‌سازد',
            body: 'تابع component دوباره اجرا می‌شود، دوباره JSX برمی‌گرداند و React نتیجه‌ی جدید را با قبلی مقایسه می‌کند.',
          },
          {
            title: 'browser update را نشان می‌دهد',
            body: 'React فقط DOM nodeهای لازم را به‌روز می‌کند و بعد browser دوباره محاسبه می‌کند چه چیزی دیده شود تا کاربر متن، count یا style جدید را ببیند.',
          },
        ],
      },
      propsLab: {
        eyebrow: 'کامپوننت زنده',
        title: 'props + state',
        lead: 'این card از طریق props داده می‌گیرد و با هر تغییر parent دوباره رندر می‌شود.',
        visitsLabel: 'بازدید',
        defaults: {
          name: 'سارا',
          role: 'هنرجوی React',
        },
        fields: {
          name: 'نام',
          role: 'نقش',
          accent: 'رنگ accent',
        },
        actions: {
          addVisit: 'اضافه کردن بازدید',
          resetVisit: 'ریست بازدید',
        },
      },
      eventLab: {
        eyebrow: 'مدیریت رویداد',
        title: 'کلیک و state',
        lead: 'در React، handlerها به ما اجازه می‌دهند UI را بر اساس ورودی کاربر تغییر بدهیم.',
        counterLabel: 'شمارنده',
        actions: {
          increment: '+2',
          decrement: '-1',
          toggleLiked: 'پسندیدم / نپسندیدم',
        },
      },
      topics: {
        htmlDom: {
          title: 'HTML در برابر DOM',
          badge: 'پایه‌ی browser',
          accent: '#2563eb',
          summary:
            'HTML متن و markupی است که می‌نویسیم، اما DOM tree زنده‌ای است که browser از روی آن می‌سازد تا خودش و JavaScript بتوانند با صفحه کار کنند.',
          whyExists:
            'browserها بعد از parse کردن markup به یک نمایش ساختاریافته و قابل‌برنامه‌نویسی از صفحه نیاز داشتند تا style، event، script و update را پشتیبانی کنند.',
          problem:
            'اگر HTML فقط به شکل متن باقی می‌ماند، JavaScript و browser راه راحتی برای دیدن، تغییر دادن یا update تدریجی صفحه نداشتند.',
          howItWorks: [
            'تو HTML را به‌صورت متن با tagهایی مثل `<main>`، `<h1>` و `<button>` می‌نویسی.',
            'parser browser آن متن را می‌خواند و nodeهای قابل‌دسترسی از طریق JavaScript مثل `document`، elementها، text nodeها و attributeها را می‌سازد.',
            'DOM زنده است. بعد از ساخته شدن صفحه، code می‌تواند این nodeها را بخواند یا تغییر بدهد بدون اینکه کل فایل HTML را از نو به‌صورت string بنویسد.',
          ],
          simulation: [
            {
              title: 'browser متن HTML را دریافت می‌کند',
              body: 'در ابتدا فقط characterهای markup از فایل یا پاسخ server آمده‌اند. هنوز چیزی interactive نیست.',
            },
            {
              title: 'parser tagها و nesting را تشخیص می‌دهد',
              body: 'browser می‌فهمد که یک `<h1>` داخل `<main>` است و یک text node داخل همان `<h1>` قرار دارد.',
            },
            {
              title: 'یک DOM tree ساخته می‌شود',
              body: 'browser این nesting را به objectهایی با رابطه‌ی parent و child تبدیل می‌کند.',
            },
            {
              title: 'JavaScript حالا می‌تواند با صفحه کار کند',
              body: 'کد می‌تواند `document.body` را بخواند، elementی را پیدا کند، متن را عوض کند یا event listener اضافه کند چون DOM حالا به‌صورت زنده در حافظه وجود دارد.',
            },
          ],
          example: {
            title: 'markup به ساختار زنده تبدیل می‌شود',
            code: `<main>
  <h1>سلام</h1>
  <button>ذخیره</button>
</main>

// بعداً در JavaScript
const heading = document.querySelector('h1');
heading.textContent = 'سلام، هنرجو';`,
            explanation:
              'HTML منبع است. DOM همان tree زنده‌ای است که `querySelector` و `textContent` بعد از parse شدن با آن کار می‌کنند.',
          },
          comparison: {
            before: `HTML
<h1>Hello</h1>

به آن مثل متن منبعی نگاه کن که منتظر parse شدن است.`,
            after: `DOM
document
└─ html
   └─ body
      └─ h1
         └─ "Hello"

به آن مثل یک object tree زنده نگاه کن.`,
            takeaway:
              'HTML و DOM به هم مربوط‌اند، اما یکی نیستند. یکی متن منبع است و دیگری نمایش زنده‌ی درون حافظه‌ی browser.',
          },
          mistakes: [
            'گفتن اینکه HTML و DOM دقیقاً یکی هستند. آن‌ها مرتبط‌اند، اما HTML متن منبع است و DOM نتیجه‌ی parse شدن.',
            'فکر کردن DOM فقط از tagهای element تشکیل شده است. text node، comment، attribute و ساختار document هم بخشی از آن هستند.',
            'فرض کردن برای update UI باید متن HTML اولیه را دوباره عوض کنیم. در عمل معمولاً DOM زنده را تغییر می‌دهیم یا این کار را به React می‌سپاریم.',
          ],
          realUsage: [
            'دیدن خروجی React در پنل Elements browser.',
            'فهم ساختار accessibility مثل headingها، buttonها و fieldهای فرم.',
            'درک اینکه React در نهایت باز هم با DOM واقعی browser کار می‌کند.',
          ],
          practice: {
            question:
              'اگر `heading.textContent` را عوض کنی، فایل HTML اولیه را تغییر می‌دهی یا DOM node زنده‌ای را که در حافظه ساخته شده؟',
            task: 'برای `<ul><li>One</li><li>Two</li></ul>` یک tree خیلی کوچک بکش و parent و childها را نام‌گذاری کن.',
          },
          summaryPoints: [
            'HTML markup منبع است؛ DOM tree زنده‌ای است که از آن ساخته می‌شود.',
            'DOM وجود دارد تا browser و JavaScript با یک صفحه‌ی ساختاریافته کار کنند.',
            'React هم در نهایت DOM واقعی browser را update می‌کند.',
          ],
        },
        domTree: {
          title: 'DOM tree، nodeها و parsing',
          badge: 'parsing',
          accent: '#0f766e',
          summary:
            'DOM به شکل یک tree از nodeها سازمان‌دهی می‌شود و parser browser با خواندن HTML از بالا به پایین این tree را می‌سازد و childها را زیر parentها قرار می‌دهد.',
          whyExists:
            'ساختار tree با nesting طبیعی صفحات وب هماهنگ است و فهم layout، script و رابطه‌ی بخش‌های مختلف صفحه را ساده‌تر می‌کند.',
          problem:
            'بدون یک tree از parent و childها، browser سخت‌تر می‌توانست ساختار document، ترتیب، nesting و ارتباط بخش‌های صفحه را تشخیص بدهد.',
          howItWorks: [
            'parser به‌ترتیب opening tag، closing tag، text و attributeها را می‌خواند.',
            'هم‌زمان با باز و بسته شدن tagها، browser element nodeها را می‌سازد و در یک hierarchy از parent و child قرار می‌دهد.',
            'نتیجه یک document tree است که در آن هر node جای مشخصی دارد: document node، element node، text node و گاهی comment node.',
          ],
          simulation: [
            {
              title: 'parse از بالای document شروع می‌شود',
              body: 'browser tagهای اول را می‌خواند و ساختار پایه‌ای مثل `html`، `head` و `body` را می‌سازد.',
            },
            {
              title: 'tagهای تو در تو به child node تبدیل می‌شوند',
              body: 'اگر یک `<p>` شامل `<strong>` باشد، node مربوط به `<strong>` به child همان `<p>` در tree تبدیل می‌شود.',
            },
            {
              title: 'متن هم node مخصوص خودش را دارد',
              body: 'کلمات داخل element فقط string رهاشده نیستند؛ آن‌ها text nodeهایی هستند که به parent خود وصل شده‌اند.',
            },
            {
              title: 'tree نهایی قابل‌پیمایش است',
              body: 'ابزارهای browser، scriptها، accessibility و منطق layout همگی می‌توانند این tree را بگردند تا document را بفهمند یا update کنند.',
            },
          ],
          example: {
            title: 'یک DOM tree کوچک و تو در تو',
            code: `<article>
  <h2>Course update</h2>
  <p>
    Practice the <strong>DOM tree</strong> today.
  </p>
</article>`,
            explanation:
              '`article` parent است. `h2` و `p` child هستند. داخل `p` هم متن و node مربوط به `strong` childهای nested دیگری می‌سازند.',
          },
          comparison: {
            before: `بدون نگاه treeمحور
<article><h2>Course update</h2><p>Practice the <strong>DOM tree</strong> today.</p></article>

همه‌چیز شبیه یک خط طولانی دیده می‌شود.`,
            after: `با نگاه treeمحور
article
├─ h2
│  └─ "Course update"
└─ p
   ├─ "Practice the "
   ├─ strong
   │  └─ "DOM tree"
   └─ " today."`,
            takeaway:
              'فکر کردن به‌صورت tree، فهم ساختار، nesting و targetهای update را بسیار ساده‌تر از دیدن یک string طولانی می‌کند.',
          },
          mistakes: [
            'نادیده گرفتن text nodeها و تصور اینکه DOM فقط boxهای elementی است.',
            'فکر کردن DOM tree همان layout نهایی روی صفحه است. DOM ساختار document را نشان می‌دهد، نه pixelهای دقیق.',
            'فراموش کردن اینکه ترتیب parse مهم است. browser صفحه را قدم‌به‌قدم کشف می‌کند، نه به‌شکل جادویی در یک لحظه.',
          ],
          realUsage: [
            'دیدن رابطه‌ی parent-child در DevTools.',
            'فهم event bubbling از میان ancestor nodeها.',
            'درک اینکه خروجی componentها در نهایت به browser nodeهای nested تبدیل می‌شود.',
          ],
          practice: {
            question:
              'در `<p>Hello <strong>world</strong></p>` آیا `world` فقط ادامه‌ی متن `<p>` است یا `strong` یک مسیر node جداگانه در tree می‌سازد؟',
            task: 'یکی از cardهای این app را انتخاب کن و ساختار اصلی parent-child آن را با زبان ساده توضیح بده.',
          },
          summaryPoints: [
            'DOM یک tree است، نه یک لیست صاف.',
            'Nodeها شامل document، element، text و انواع دیگر هستند.',
            'Parsing این tree را به‌ترتیب از روی HTML می‌سازد.',
          ],
        },
        browserRendering: {
          title: 'Browser rendering، CSSOM و re-rendering',
          badge: 'rendering',
          accent: '#d97706',
          summary:
            'rendering یعنی browser ساختار document و اطلاعات style را می‌گیرد، تصمیم می‌گیرد چه چیزی باید روی صفحه دیده شود و آن را به pixelهای قابل‌دیدن تبدیل می‌کند. re-rendering یعنی بعد از تغییر، بخشی از این فرایند دوباره انجام شود.',
          whyExists:
            'تا وقتی ساختار و style به چیزی قابل‌دیدن و interactive روی صفحه تبدیل نشوند، صفحه وب برای کاربر مفید نیست.',
          problem:
            'HTML و CSS فقط دستور هستند. browser به یک pipeline نیاز دارد تا آن‌ها را به layout، paint و UI قابل‌دیدن تبدیل کند.',
          howItWorks: [
            'browser از HTML، DOM و از CSS، CSSOM می‌سازد.',
            'سپس nodeهای relevant و styleهای محاسبه‌شده را در یک render tree کنار هم می‌گذارد تا بداند چه چیزی واقعاً باید کشیده شود.',
            'بعد layout را محاسبه و pixelها را paint می‌کند. اگر بعداً محتوا یا style عوض شود، browser ممکن است بخشی از این فرایند را دوباره انجام دهد.',
          ],
          simulation: [
            {
              title: 'HTML به DOM و CSS به CSSOM تبدیل می‌شود',
              body: 'یک ساختار از markup می‌آید و ساختار دیگر از ruleهای style. browser قبل از نمایش کامل صفحه به هر دو نیاز دارد.',
            },
            {
              title: 'render tree ساخته می‌شود',
              body: 'browser فقط nodeهایی را که باید به‌صورت بصری دیده شوند همراه با style محاسبه‌شده‌شان در نظر می‌گیرد.',
            },
            {
              title: 'layout اندازه و جای هر بخش را تعیین می‌کند',
              body: 'browser حساب می‌کند هر بخش چقدر فضا بگیرد و در چه موقعیتی قرار بگیرد.',
            },
            {
              title: 'paint pixelها را قابل‌دیدن می‌کند',
              body: 'متن، پس‌زمینه، border و رنگ‌ها کشیده می‌شوند. اگر بعداً content یا style عوض شود، browser دوباره چرخه‌ی update لازم را انجام می‌دهد.',
            },
          ],
          example: {
            title: 'یک مثال ساده از rendering',
            code: `<button class="cta">Start lesson</button>

.cta {
  color: white;
  background: royalblue;
  padding: 12px 20px;
}`,
            explanation:
              'DOM می‌داند button وجود دارد. CSSOM styleها را می‌داند. render tree آن‌ها را کنار هم می‌گذارد تا browser button قابل‌دیدن را جای‌گذاری و paint کند.',
          },
          comparison: {
            before: `قبل از rendering
DOM nodeها وجود دارند
ruleهای CSS وجود دارند
اما هنوز چیزی layout یا paint نشده است`,
            after: `بعد از rendering
browser می‌داند چه چیزی دیده می‌شود
کجا قرار می‌گیرد
و چه ظاهری باید داشته باشد`,
            takeaway:
              'rendering یک لحظه‌ی جادویی واحد نیست؛ نتیجه‌ی چند مرحله‌ی browser است که در نهایت به نمایش روی صفحه می‌رسد.',
          },
          mistakes: [
            'استفاده از واژه‌ی render فقط برای React. browser هم pipeline رندر خودش را دارد.',
            'فکر کردن DOM tree و render tree همیشه یکسان‌اند. nodeهای مخفی یا غیرنمایشی می‌توانند تفاوت ایجاد کنند.',
            'فرض کردن هر update کل صفحه را دقیقاً از صفر redraw می‌کند. browserها معمولاً بخش‌هایی را بهینه‌تر update می‌کنند.',
          ],
          realUsage: [
            'فهم اینکه تغییرهای style و layout چرا می‌توانند روی performance اثر بگذارند.',
            'توضیح اینکه چرا یک node ممکن است در DOM باشد اما هنوز روی صفحه دیده نشود.',
            'debug کردن وضعیت‌هایی که ساختار وجود دارد اما خروجی بصری مطابق انتظار نیست.',
          ],
          practice: {
            question:
              'اگر یک node در DOM باشد ولی `display: none` داشته باشد، آیا ممکن است از چیزی که browser paint می‌کند حذف شود؟',
            task: 'rendering و re-rendering را هرکدام در یک جمله توضیح بده: یکی برای نمایش اول و یکی برای update بعدی.',
          },
          summaryPoints: [
            'DOM ساختار را می‌دهد و CSSOM اطلاعات style را.',
            'browser از آن‌ها چیزی را که باید paint شود می‌سازد.',
            're-rendering یعنی بعد از تغییر، خروجی قابل‌دیدن دوباره محاسبه شود.',
          ],
        },
        jsx: {
          title: 'JSX و React elementها',
          badge: 'JSX',
          accent: '#7c3aed',
          summary:
            'JSX یک syntax جاوااسکریپتی برای توصیف UI به شکلی component-friendly است. ظاهرش شبیه HTML است، اما در نهایت به JavaScript تبدیل می‌شود که React element می‌سازد.',
          whyExists:
            'React به یک روش خوانا برای توصیف UIهای nested درون JavaScript نیاز داشت تا توسعه‌دهنده مجبور نباشد برای هر element فقط function callهای طولانی بنویسد.',
          problem:
            'ساختن UI با function callهای خام جاوااسکریپت ممکن است، اما با بزرگ شدن ساختار، خواندن و نگهداری آن سخت‌تر و شلوغ‌تر می‌شود.',
          howItWorks: [
            'تو JSXی مثل `<button>{label}</button>` را داخل component می‌نویسی.',
            'ابزار build این syntax را به JavaScript function callهایی تبدیل می‌کند که React elementها را توصیف می‌کنند.',
            'این React elementها فقط description هستند، نه DOM nodeهای واقعی.',
          ],
          simulation: [
            {
              title: 'یک component با JSX می‌نویسی',
              body: 'مثلاً `function Welcome() { return <h1>Hello</h1>; }` را در syntaxی می‌نویسی که به HTML نزدیک به نظر می‌رسد.',
            },
            {
              title: 'مرحله‌ی build، JSX را تبدیل می‌کند',
              body: 'Vite و React transform این JSX را به JavaScript تبدیل می‌کنند تا browser بتواند آن را اجرا کند.',
            },
            {
              title: 'React description را می‌خواند',
              body: 'React نوعی مثل `h1`، propsی مثل `children` و ساختاری را می‌بیند که UI موردنظر را توصیف می‌کند.',
            },
            {
              title: 'React در نهایت DOM واقعی را می‌سازد یا update می‌کند',
              body: 'فقط بعد از پردازش این description است که browser DOM update واقعی را می‌گیرد و heading روی صفحه دیده می‌شود.',
            },
          ],
          example: {
            title: 'JSX، HTML خام نیست',
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
              'این ظاهر HTMLمانند دارد، اما syntax جاوااسکریپتی داخل component است. `className` و `{learner}` نشانه‌اند که JSX همان HTML خام نیست.',
          },
          comparison: {
            before: `بدون JSX
return React.createElement(
  'h2',
  null,
  'Hello, learner'
);`,
            after: `با JSX
return <h2>Hello, learner</h2>;`,
            takeaway:
              'JSX در اصل خوانایی و composability را بهتر می‌کند. مفهوم زیرین همچنان یک توصیف جاوااسکریپتی از UI است.',
          },
          mistakes: [
            'فکر کردن JSX همان HTML چسبانده‌شده به JavaScript است. JSX فقط شبیه HTML است و قبل از اجرا به JavaScript تبدیل می‌شود.',
            'انتظار داشتن نام attributeهای HTML در همه‌جا. در JSX بعضی نام‌ها فرق می‌کنند، مثل `className` به‌جای `class`.',
            'فکر کردن یک tag در JSX همان لحظه یک DOM node واقعی می‌سازد. ابتدا React element description ساخته می‌شود.',
          ],
          realUsage: [
            'نوشتن layout componentها در appهای React کوچک و بزرگ.',
            'قرار دادن expressionهای JavaScript مستقیم داخل توصیف UI.',
            'ساختن بخش‌های reusable رابط کاربری با ساختار nested و خوانا.',
          ],
          practice: {
            question:
              'وقتی می‌نویسی `<Card title="Hi" />`، React یک string HTML می‌گیرد یا descriptionی شبیه object از component و props؟',
            task: '`React.createElement("button", null, "Save")` را به JSX تبدیل کن و یک دلیل بیاور که چرا نسخه‌ی JSX خواناتر است.',
          },
          summaryPoints: [
            'JSX syntaxی برای توصیف UI داخل JavaScript است.',
            'JSX قبل از اجرا transform می‌شود.',
            'JSX React element description می‌سازد، نه DOM node مستقیم.',
          ],
        },
        reactRendering: {
          title: 'React rendering و updateهای UI',
          badge: 'React flow',
          accent: '#059669',
          summary:
            'rendering در React یعنی اجرای logic component برای ساختن یک توصیف جدید از UI. بعد React توصیف قبلی و جدید را مقایسه می‌کند و در صورت نیاز DOM واقعی را update می‌کند.',
          whyExists:
            'هرچه interface بزرگ‌تر شود، دنبال کردن دستی اینکه بعد از هر event کدام DOM node باید عوض شود تکراری، شکننده و نگهداری‌اش سخت‌تر می‌شود.',
          problem:
            'DOM manipulation مستقیم باعث می‌شود منطق UI بین selectorها، handlerها و updateهای دستی پخش شود و interfaceهای state-heavy سخت‌تر قابل‌فهم شوند.',
          howItWorks: [
            'یک component با اجرای تابعش render می‌شود و JSX برمی‌گرداند؛ این JSX به React element description تبدیل می‌شود.',
            'وقتی props یا state عوض شوند، React همان component را دوباره اجرا می‌کند تا یک توصیف تازه از UI فعلی بسازد.',
            'React توصیف قبلی و جدید را مقایسه می‌کند و در مرحله‌ی commit فقط updateهای لازم را روی DOM واقعی اعمال می‌کند.',
          ],
          simulation: [
            {
              title: 'یک component ساده‌ی JSX تعریف می‌شود',
              body: 'فرض کن `function Counter() { const [count, setCount] = useState(0); return <button onClick={() => setCount(count + 1)}>Count: {count}</button>; }` را داریم.',
            },
            {
              title: 'render اول یک React element tree می‌سازد',
              body: 'React component را اجرا می‌کند، description مربوط به button و متن `Count: 0` را می‌بیند و DOM nodeهای واقعی متناظر را mount می‌کند.',
            },
            {
              title: 'کاربر روی button click می‌کند',
              body: 'browser event click را dispatch می‌کند. React handler را صدا می‌زند و handler از React می‌خواهد state را از `0` به `1` تغییر دهد.',
            },
            {
              title: 'React component را دوباره render می‌کند',
              body: 'تابع component دوباره اجرا می‌شود. این بار JSX برگشتی `Count: 1` را به‌جای `Count: 0` توصیف می‌کند.',
            },
            {
              title: 'React DOM واقعی را update می‌کند',
              body: 'React توصیف قدیمی و جدید را مقایسه می‌کند، می‌فهمد فقط text تغییر کرده، همان DOM node را update می‌کند و browser label جدید را paint می‌کند.',
            },
          ],
          example: {
            title: 'یک component خیلی کوچک و state-driven',
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
              'به‌جای اینکه button را دستی پیدا کنی و متنش را عوض کنی، UI بعدی را از روی state توصیف می‌کنی. React re-render و DOM update را هماهنگ می‌کند.',
          },
          comparison: {
            before: `// روش دستی با DOM
const button = document.querySelector('button');
let count = 0;

button.addEventListener('click', () => {
  count += 1;
  button.textContent = 'Count: ' + count;
});`,
            after: `// روش React
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`,
            takeaway:
              'نسخه‌ی React تو را از «این node را دستی patch کن» به «UI را از روی state توصیف کن» می‌برد. این تغییر با بزرگ‌تر شدن صفحه‌ها ارزش بسیار بیشتری پیدا می‌کند.',
          },
          mistakes: [
            'فکر کردن re-render یعنی React هر بار کل صفحه را نابود و از نو می‌سازد. معمولاً فقط بخش‌های لازم update می‌شوند.',
            'مخلوط کردن DOM manipulation مستقیم با stateای که React مدیریت می‌کند، بدون دلیل روشن؛ این کار mismatchهای گیج‌کننده می‌سازد.',
            'برخورد با Virtual DOM مثل یک ضمانت جادویی performance. Virtual DOM یک strategy برای مقایسه‌ی UI description است، نه وعده‌ی خودکار سریع بودن همه‌چیز.',
          ],
          realUsage: [
            'formها، counterها، filterها، dialogها، tabها و task managerهایی که state UI را عوض می‌کند.',
            'هماهنگ کردن تعداد زیادی update UI بدون selectorهای دستی پخش‌شده در codebase.',
            'ساخت treeهای قابل‌پیش‌بینی از componentها که با React DevTools قابل‌بررسی باشند.',
          ],
          practice: {
            question:
              'بعد از `setCount(1)` چه چیزی اول رخ می‌دهد: متن browser فوراً عوض می‌شود یا React اول یک UI description جدید از component می‌سازد؟',
            task: 'با زبان ساده توضیح بده چرا DOM update مستقیم وقتی یک صفحه چند مقدار، چند شرط و چند interaction مرتبط دارد سخت‌تر می‌شود.',
          },
          summaryPoints: [
            'rendering در React یعنی ساختن UI description از روی logic component.',
            're-rendering وقتی اتفاق می‌افتد که props یا state عوض شوند.',
            'React همچنان DOM واقعی را update می‌کند، اما این کار را declarative و قابل‌مدیریت‌تر می‌کند.',
          ],
        },
      },
      quizTitle: 'مدل ذهنی DOM و JSX را محک بزن',
      tipsTitle: 'هنگام تمرین چه چیزهایی را یادت بماند',
      tips: [
        'هر سؤال React را با این شروع کن که درباره‌ی کدام لایه حرف می‌زنی: HTML source، DOM، browser rendering، JSX، React element یا DOM update واقعی.',
        'وقتی UI عوض می‌شود، زنجیره را به‌ترتیب دنبال کن: event، تغییر props یا state، re-render، DOM update، نتیجه‌ی قابل‌دیدن در browser.',
        'داستان Virtual DOM را اغراق نکن. React در نهایت همچنان DOM واقعی را update می‌کند؛ ارزش اصلی در توصیف قابل‌پیش‌بینی UI و مدیریت updateها است.',
      ],
    },
    'events-forms': {
      stageLabel: 'گام ۴',
      title: 'رویدادها و فرم‌های کنترل‌شده',
      hero: {
        eyebrow: 'گام ۴',
        title: 'رویدادها و فرم‌های کنترل‌شده',
        lead: 'ورودی کاربر به state React تبدیل می‌شود و input کنترل‌شده preview، validation و submit را هم‌زمان نگه می‌دارد تا قبل از useEffect و پروژه‌ی نهایی، یک فرم قابل‌اعتماد بسازیم.',
        primaryAction: 'این درس را تمرین کردم',
        secondaryAction: 'رفتن به useEffect',
      },
      summary: {
        intro:
          'این درس بین مبانی React و useEffect قرار می‌گیرد. اینجا یاد می‌گیریم handlerهای رویداد، inputهای کنترل‌شده و submit فرم چطور با هم کار می‌کنند تا قبل از persistence و sync با browser، یک UI فرم‌محور قابل‌اعتماد بسازیم.',
        points: [
          'handler رویدادها به click، تایپ و submit واکنش می‌دهد',
          'input کنترل‌شده، state React را منبع اصلی داده نگه می‌دارد',
          'form state می‌تواند در یک object واحد نگه‌داری شود',
          'preview، شمارش و validation باید از state مشتق شوند',
        ],
        prerequisites: [
          'JSX، props، state و جریان render',
          'تابع، object و array در JavaScript',
          'آشنایی با یک مثال ساده‌ی `useState`',
        ],
        keyPoints: [
          'React رویدادها را با تابع handler می‌بیند، نه با جادو.',
          'فیلد کنترل‌شده همیشه مقدار state را به input برمی‌گرداند.',
          'submit باید روی form باشد و معمولاً `event.preventDefault()` را صدا بزند.',
          'CRUD پروژه‌ی Task Manager همین pattern فرم را دوباره استفاده می‌کند.',
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'چطور رویدادهای فرم به state و preview تبدیل می‌شوند',
        lead: 'یک topic را انتخاب کن و مسیر رویداد کاربر تا handler، state، validation و UI مشتق‌شده را دنبال کن.',
        chooserLabel: 'یک topic را انتخاب کن',
        sections: {
          definition: '۱. تعریف ساده',
          whyExists: '۲. چرا وجود دارد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. چطور کار می‌کند',
          example: '۵. مثال عملی کد',
          mistakes: '۶. اشتباه‌های رایج',
          usage: '۷. کاربرد در پروژه واقعی',
          practice: '۸. تمرین',
          summary: '۹. جمع‌بندی کوتاه',
        },
        practiceQuestion: 'سؤال پیش‌بینی',
        practiceTask: 'تمرین کوچک',
      },
      topics: [
        {
          id: 'event-handlers',
          title: 'handlerهای رویداد',
          badge: 'events',
          summary: 'handlerها تابع‌هایی هستند که React هنگام click، تایپ یا submit صدا می‌زند.',
          definition:
            'handler رویداد تابعی است که آن را به prop رویداد می‌دهی تا React بعداً اجرا کند.',
          whyExists:
            'رویدادهای کاربر بعد از render رخ می‌دهند. React به یک تابع روشن نیاز دارد تا وقتی browser رویداد را گزارش کرد، آن را صدا بزند.',
          problem:
            'اگر منطق تعامل را وسط render اجرا کنی، خیلی زود اجرا می‌شود و با هر re-render تکرار می‌شود.',
          howItWorks: [
            'React ارجاع تابع را روی element نگه می‌دارد.',
            'browser یک click، input یا submit را گزارش می‌کند.',
            'React handler تو را با event object صدا می‌زند.',
          ],
          example: {
            title: 'handler را به‌صورت ارجاع بده',
            code: `function SaveButton() {
  function handleSave() {
    console.log('saved');
  }

  return <button onClick={handleSave}>Save</button>;
}`,
            explanation: 'React تابع را برای بعد نگه می‌دارد و آن را هنگام render اجرا نمی‌کند.',
          },
          mistakes: [
            'صدا زدن `handleSave()` در زمان render به‌جای فرستادن خود تابع.',
            'مخلوط کردن منطق تعامل با render وقتی کار باید از طریق رویداد انجام شود.',
          ],
          realUsage: ['کلیک روی button', 'تغییر input', 'submit و reset فرم'],
          practice: {
            question: 'handler submit باید به کدام prop برسد؟',
            task: 'یک ارجاع تابع را به `onSubmit` بده و بگو چه eventی دریافت می‌کند.',
          },
          summaryPoints: [
            'handlerها منتظر رویداد می‌مانند.',
            'React آن‌ها را با data رویداد صدا می‌زند.',
            'ارزش اصلی با ارجاع تابع است، نه نتیجه‌ی inline.',
          ],
        },
        {
          id: 'controlled-inputs',
          title: 'inputهای کنترل‌شده',
          badge: 'inputs',
          summary: 'input کنترل‌شده مقدارش را از state می‌گیرد و تغییرها را به state برمی‌گرداند.',
          definition:
            'input کنترل‌شده فیلدی است که `value` آن از state می‌آید و `onChange` مقدار بعدی را دوباره در state می‌نویسد.',
          whyExists:
            'وقتی state مالک متن باشد، preview، validation و submit همگی همان منبع واحد را می‌بینند.',
          problem:
            'اگر فقط DOM مالک مقدار باشد، بقیه‌ی UI می‌توانند از چیزی که کاربر تازه تایپ کرده جدا شوند.',
          howItWorks: [
            'state با مقدار فعلی فیلد شروع می‌شود.',
            'تایپ کردن `onChange` را با مقدار تازه صدا می‌زند.',
            'setter state را عوض می‌کند و input همان متن را دوباره نشان می‌دهد.',
          ],
          example: {
            title: 'یک منبع اصلی',
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
              'input آینه‌ی state است و state هم با تایپ کاربر به‌روزرسانی می‌شود. این الگوی controlled است.',
          },
          mistakes: [
            'استفاده از `defaultValue` و بعد انتظار sync مداوم از React.',
            'فراموش کردن `onChange` که input را read-only می‌کند.',
          ],
          realUsage: ['فیلد عنوان', 'textarea', 'select menu در فرم‌های واقعی'],
          practice: {
            question: 'input در render بعدی از کجا می‌فهمد چه چیزی را نمایش دهد؟',
            task: 'یک textarea ساده را با `value` و `onChange` به فیلد کنترل‌شده تبدیل کن.',
          },
          summaryPoints: [
            'state مقدار فیلد را کنترل می‌کند.',
            '`onChange` state را به‌روز نگه می‌دارد.',
            'input کنترل‌شده فرم را قابل‌پیش‌بینی می‌کند.',
          ],
        },
        {
          id: 'form-state',
          title: 'state فرم',
          badge: 'state',
          summary: 'فیلدهای مرتبط بهتر است در یک object کنار هم بمانند تا draft منسجم بماند.',
          definition: 'state فرم یک object واحد است که مقدارهای یک گروه فیلد مرتبط را نگه می‌دارد.',
          whyExists:
            'یک draft معمولاً با هم حرکت می‌کند: title، note و category همگی به یک submit مربوط‌اند.',
          problem:
            'اگر هر فیلد جزیره‌ای جدا باشد، update و submit کردن فرم سخت‌تر و نامنظم‌تر می‌شود.',
          howItWorks: [
            'همه‌ی فیلدهای مرتبط را در یک object نگه دار.',
            'یک فیلد را با کپی کردن object قبلی و جایگزین کردن همان key به‌روز کن.',
            'هنگام submit همان shape را بعد از trim یا validation استفاده کن.',
          ],
          example: {
            title: 'یک فیلد را عوض کن و بقیه را نگه دار',
            code: `setFormState((previous) => ({
  ...previous,
  note: event.target.value,
}));`,
            explanation: 'spread بقیه‌ی draft را نگه می‌دارد و فقط همان فیلد را عوض می‌کند.',
          },
          mistakes: [
            'mutate کردن مستقیم object به‌جای برگرداندن object جدید.',
            'نگه داشتن هر فیلد در یک state جدا وقتی یک draft object واضح‌تر است.',
          ],
          realUsage: ['task draft', 'profile form', 'contact form'],
          practice: {
            question: 'کدام update عنوان قبلی را نگه می‌دارد و فقط note را عوض می‌کند؟',
            task: 'یک update فیلد دوم اضافه کن و فیلد اول را دست‌نخورده نگه دار.',
          },
          summaryPoints: [
            'یک draft object، valueهای مرتبط را کنار هم نگه می‌دارد.',
            'هر بار فقط یک فیلد را immutable تغییر بده.',
            'داده‌ی submit باید با شکل state هماهنگ باشد.',
          ],
        },
        {
          id: 'submit-handling',
          title: 'submit handling',
          badge: 'submit',
          summary:
            'فرم‌ها باید با قصد submit شوند و React معمولاً اول جلوی reload browser را می‌گیرد.',
          definition:
            'submit handling منطقی است که هنگام submit فرم اجرا می‌شود و معمولاً از `onSubmit` می‌آید.',
          whyExists:
            'Browser به‌طور پیش‌فرض دوست دارد page را reload یا navigate کند، اما درس‌های React معمولاً می‌خواهند روی همان صفحه بمانند.',
          problem:
            'بدون `event.preventDefault()` ممکن است قبل از استفاده از داده‌های فرم، صفحه reload شود.',
          howItWorks: [
            'form یک submit event دریافت می‌کند.',
            'handler `event.preventDefault()` را صدا می‌زند.',
            'validation اجرا می‌شود و draft پذیرفته یا preview می‌شود.',
          ],
          example: {
            title: 'منطق submit روی form بماند',
            code: `function DraftForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('accept the draft');
  }

  return <form onSubmit={handleSubmit}>...</form>;
}`,
            explanation:
              'فرم مالک submit flow است، پس submit با keyboard و submit با button رفتار یکسانی دارند.',
          },
          mistakes: [
            'گذاشتن منطق submit فقط روی click دکمه.',
            'فراموش کردن `event.preventDefault()` و اجازه دادن به reload.',
          ],
          realUsage: ['create task flow', 'save draft flow', 'contact form'],
          practice: {
            question: 'منطق submit باید مالک کدام event باشد؟',
            task: 'یک handler برای submit بنویس که default browser را متوقف کند و draft را بپذیرد.',
          },
          summaryPoints: [
            'submit باید روی form باشد.',
            'اول reload browser را متوقف کن.',
            'بعد validation و پذیرش draft را انجام بده.',
          ],
        },
        {
          id: 'validation-derived-ui',
          title: 'validation و UI مشتق‌شده',
          badge: 'preview',
          summary: 'validation باید واضح باشد و preview UI باید از state فعلی ساخته شود.',
          definition:
            'validation بررسی می‌کند آیا draft فعلی آماده است یا نه، و UI مشتق‌شده هر چیزی است که به‌جای ذخیره‌ی جداگانه از state حساب می‌کنی.',
          whyExists:
            'هنرجو قبل از submit به feedback روشن نیاز دارد و preview باید همیشه با draft زنده هماهنگ بماند.',
          problem: 'اگر preview را در یک state دیگر کپی کنی، ممکن است از فرم واقعی جدا شود.',
          howItWorks: [
            'canSubmit را از state فیلد required مشتق کن.',
            'وقتی value نامعتبر است، feedback متنی نشان بده.',
            'preview و counter را از همان state فعلی render کن.',
          ],
          example: {
            title: 'قانون submit را مشتق کن',
            code: `const canSubmit = title.trim().length > 0;`,
            explanation:
              'یک boolean مشتق‌شده می‌تواند disabled state و error message را کنترل کند.',
          },
          mistakes: [
            'کپی کردن data preview در یک state دیگر.',
            'وابسته شدن به رنگ به‌تنهایی برای validation.',
            'پنهان کردن دلیل نامعتبر بودن فیلد.',
          ],
          realUsage: ['disabled submit button', 'character count', 'live preview card'],
          practice: {
            question: 'کدام value بهتر است مشتق شود و جداگانه ذخیره نشود؟',
            task: 'شمارنده‌ی کاراکتر را به UI مشتق‌شده تبدیل کن و state جدا برای آن نساز.',
          },
          summaryPoints: [
            'validation باید متنی و قابل‌دیدن باشد.',
            'UI مشتق‌شده باید از state فعلی بیاید.',
            'کپی دوم از preview را ذخیره نکن.',
          ],
        },
      ],
      live: {
        eyebrow: 'فرم زنده',
        title: 'پیش‌نویس کوچک تسک',
        lead: 'در یک پیش‌نویس کنترل‌شده تایپ کن و preview را بدون هیچ persistence‌ای ببین.',
        guidance:
          'این slice اول فقط یک object پیش‌نویس را در state نگه می‌دارد. نه localStorage دارد و نه هنوز به CRUD کامل Task Manager می‌رسد.',
        stateNote:
          'فرم کنترل‌شده است، validation محلی است، submit متوقف می‌شود و reset پیش‌نویس را پاک می‌کند.',
        fields: {
          title: 'عنوان تسک',
          note: 'یادداشت کوتاه',
          category: 'دسته',
        },
        placeholders: {
          title: 'مثلاً تمرین controlled inputs',
          note: 'یک یادداشت کوتاه برای بعد',
        },
        help: {
          title: 'برای ارسال لازم است.',
          note: 'یادداشت را کوتاه نگه دار. preview از متن زنده استفاده می‌کند.',
        },
        validation: {
          titleRequired: 'عنوان تسک لازم است.',
        },
        categories: {
          js: 'تمرکز JS',
          react: 'تمرکز React',
          effects: 'تمرکز effects',
        },
        preview: {
          title: 'پیش‌نمایش زنده',
          description: 'این پیش‌نویس فعلی قبل از ارسال است.',
          noteCountLabel: 'تعداد کاراکتر یادداشت',
          submittedTitle: 'آخرین پیش‌نویس ثبت‌شده',
          emptyTitle: 'پیش‌نویس بدون عنوان',
          emptyNote: 'هنوز یادداشتی وارد نشده است',
          emptySubmitted: 'برای ثبت یک snapshot، فرم را ارسال کن.',
        },
        actions: {
          submit: 'ارسال پیش‌نویس',
          reset: 'پاک کردن پیش‌نویس',
        },
      },
      quizTitle: 'مدل ذهنی فرم را محک بزن',
      tipsTitle: 'یادآوری‌های فرم',
      tips: [
        'اگر بقیه‌ی UI به مقدار input وابسته است، مقدار را در state React نگه دار.',
        'submit را روی `onSubmit` بگذار و برای ماندن روی صفحه `event.preventDefault()` را صدا بزن.',
        'اگر یک value را می‌توانی از state فعلی مشتق کنی، کپی جداگانه از آن نساز.',
      ],
    },
    effects: {
      stageLabel: 'گام ۵',
      title: 'useEffect، side effect و sync با browser',
      hero: {
        eyebrow: 'گام ۵',
        title: 'useEffect، cleanup، dependency و APIهای browser',
        lead: 'این درس توضیح می‌دهد چرا effect اصلاً وجود دارد، React چطور rendering خالص را از sync با دنیای بیرون جدا می‌کند، و cleanup، dependency، timer، title، debounce و localStorage چطور بدون ایجاد bug با هم کار می‌کنند.',
        primaryAction: 'این بخش را تمرین کردم',
        secondaryAction: 'رفتن به مسیریابی',
      },
      summary: {
        intro:
          'render در React باید تا جای ممکن خالص بماند: با همان props و state، همان UI را توصیف کند. effectها وجود دارند چون app واقعی باید با چیزهایی بیرون از render هم حرف بزند؛ مثل timer، title مرورگر، storage و subscription.',
        points: [
          'render فقط UI را توصیف می‌کند؛ effect با بیرون sync می‌کند',
          'cleanup از نشت timerها، listenerها و کارهای قدیمی جلوگیری می‌کند',
          'dependencyها تعیین می‌کنند effect چه زمانی باید دوباره sync شود',
          'هر مقدار محاسبه‌شدنی نباید به effect تبدیل شود',
        ],
        story: [
          {
            title: 'اول render خالص',
            description:
              'render component باید UI را از روی props و state حساب کند، نه اینکه وسط آن timer راه بیندازد یا browser را تغییر بدهد.',
          },
          {
            title: 'effect برای سیستم‌های بیرونی',
            description:
              'useEffect وجود دارد تا React اول UI را commit کند و بعد با چیزهایی بیرون از render مثل timer، title یا storage sync شود.',
          },
          {
            title: 'cleanup جلوی bug را می‌گیرد',
            description:
              'وقتی dependencyها عوض شوند یا component از بین برود، cleanup کمک می‌کند timerها، listenerها و کارهای قدیمی ادامه پیدا نکنند.',
          },
          {
            title: 'dependencyها قانون sync را می‌گویند',
            description:
              'آرایه‌ی dependency به React می‌گوید effect بعد از هر commit، فقط یک بار، یا فقط هنگام تغییر چند مقدار خاص دوباره اجرا شود.',
          },
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'effectها واقعاً چطور کار می‌کنند',
        lead: 'یک موضوع را انتخاب کن و با همان ساختار همیشگی جلو برو: تعریف، دلیل وجود، مکانیزم داخلی، شبیه‌سازی، مثال، اشتباه‌ها و کاربرد واقعی.',
        chooserLabel: 'موضوع effect را انتخاب کن',
        sections: {
          definition: '۱. تعریف ساده',
          whyExists: '۲. چرا به‌وجود آمد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. چطور کار می‌کند',
          simulation: '۵. شبیه‌سازی مرحله‌به‌مرحله',
          example: '۶. مثال عملی کد',
          beforeAfter: '۷. مقایسه قبل/بعد',
          mistakes: '۸. اشتباه‌های رایج مبتدی‌ها',
          usage: '۹. کاربرد در پروژه‌های واقعی',
          practice: '۱۰. تمرین یا mini-quiz',
          summary: '۱۱. جمع‌بندی ساده',
        },
        practiceQuestion: 'سؤال پیش‌بینی',
        practiceTask: 'تمرین کوچک',
        beforeLabel: 'قبل',
        afterLabel: 'بعد',
        simulationIntro: 'پشت صحنه',
      },
      live: {
        eyebrow: 'سیستم‌های زنده',
        title: 'سه الگوی effect که همین حالا اینجا اجرا می‌شوند',
        lead: 'این مثال‌های زنده سه کار رایج effect را نشان می‌دهند: interval، delay کنترل‌شده، و persistence.',
        story: [
          {
            title: 'Clock panel',
            body: 'بعد از commit یک interval شروع می‌شود، هر ثانیه state را عوض می‌کند، و در cleanup پاک می‌شود تا بعد از خروج component در پس‌زمینه نماند.',
          },
          {
            title: 'Debounced search',
            body: 'هر تایپ یک timeout می‌سازد. اگر کاربر دوباره تایپ کند، cleanup timeout قبلی را پاک می‌کند تا فقط آخرین مقدار اعمال شود.',
          },
          {
            title: 'Note saver',
            body: 'یادداشت از localStorage برگردانده می‌شود و بعد تغییرهای بعدی، storage مرورگر را با state textarea هماهنگ نگه می‌دارند.',
          },
        ],
      },
      clock: {
        eyebrow: 'useEffect',
        title: 'ساعت زنده و cleanup',
        lead: 'interval بعد از commit ساخته می‌شود، هر ثانیه tick می‌زند و در cleanup پاک می‌شود تا component کار پس‌زمینه‌ی رهاشده نداشته باشد.',
      },
      debounce: {
        eyebrow: 'cleanup demo',
        title: 'جست‌وجوی debounce',
        lead: 'با هر تایپ یک timeout ساخته می‌شود و cleanup timeout قبلی را پاک می‌کند تا فقط آخرین ورودی بعد از کمی مکث به جست‌وجوی نهایی تبدیل شود.',
        searchLabel: 'جست‌وجو',
        placeholder: 'مثلاً state',
        lastQuery: 'آخرین query',
        empty: 'هنوز چیزی وارد نشده است.',
      },
      note: {
        eyebrow: 'persistence',
        title: 'یادداشت زنده',
        lead: 'این textarea مقدار ذخیره‌شده را از localStorage برمی‌گرداند و بعد تغییرهای جدید را با storage مرورگر sync می‌کند.',
        label: 'یادداشت',
        initial: 'useEffect برای side effect، timer و sync بیرونی به کار می‌رود.',
      },
      topics: {
        sideEffects: {
          title: 'side effect و render خالص',
          badge: 'پایه‌ها',
          accent: '#7c3aed',
          summary:
            'side effect کاری است که از محاسبه‌ی خالص render بیرون می‌زند؛ مثل عوض کردن title مرورگر، راه انداختن timer، حرف زدن با storage یا subscribe شدن به چیزی بیرونی.',
          whyExists:
            'React می‌خواهد render قابل‌پیش‌بینی بماند. اگر render هم‌زمان هم UI را توصیف کند و هم با بیرون کار کند، فهم، تکرار و debug کردن componentها سخت‌تر می‌شود.',
          problem:
            'app واقعی باز هم باید با سیستم‌های بیرونی sync شود. بدون یک فاز جدا برای effect، این کار داخل render نشت می‌کند و bugهای زمانی، کار تکراری و رفتار نامنظم می‌سازد.',
          howItWorks: [
            'render باید خالص بماند: با همان props و state، همان UI description را برگرداند و وسط کار سیستم بیرونی را mutate نکند.',
            'بعد از اینکه React UI را commit کرد، می‌تواند setup مربوط به effect را اجرا کند تا با چیزهایی بیرون از render sync شود.',
            'پس effect فقط برای «اجرای کد بعد از render» نیست؛ مشخصاً برای sync با سیستم‌هایی است که React مستقیماً کنترلشان نمی‌کند.',
          ],
          simulation: [
            {
              title: 'component render می‌شود',
              body: 'تابع component از روی props و state، JSX را حساب می‌کند. هنوز نباید timerی شروع شود یا چیزی داخل storage نوشته شود.',
            },
            {
              title: 'React UI را commit می‌کند',
              body: 'UI قابل‌دیدن اول وارد DOM می‌شود. در این لحظه نتیجه‌ی render روی صفحه قرار گرفته است.',
            },
            {
              title: 'setup مربوط به effect اجرا می‌شود',
              body: 'حالا React می‌تواند کار بیرونی مثل interval، title، subscription یا persistence را با خیال راحت شروع کند.',
            },
            {
              title: 'render و sync از هم جدا می‌مانند',
              body: 'این جداسازی باعث می‌شود توصیف UI قابل‌پیش‌بینی بماند و در عین حال app بتواند با browser و سیستم‌های بیرونی کار کند.',
            },
          ],
          example: {
            title: 'render خالص می‌ماند و effect کار sync را انجام می‌دهد',
            code: `import { useEffect } from 'react';

function TitleMirror({ count }) {
  useEffect(() => {
    document.title = 'Count: ' + count;
  }, [count]);

  return <p>Count: {count}</p>;
}`,
            explanation:
              'پاراگراف خروجی خالص render است. update کردن `document.title` یک side effect است، پس جایش در `useEffect` است نه در بدنه‌ی render.',
          },
          comparison: {
            before: `// مخلوط کردن sync با render
function TitleMirror({ count }) {
  document.title = 'Count: ' + count;
  return <p>Count: {count}</p>;
}`,
            after: `// خالص نگه داشتن render
function TitleMirror({ count }) {
  useEffect(() => {
    document.title = 'Count: ' + count;
  }, [count]);
  return <p>Count: {count}</p>;
}`,
            takeaway:
              'نسخه‌ی دوم دقیقاً روشن می‌کند کدام بخش UI را توصیف می‌کند و کدام بخش با چیزی بیرون از فاز render sync می‌شود.',
          },
          mistakes: [
            'فکر کردن هر خط کدی که بعد از تغییر state لازم می‌شود یک effect است. اگر چیزی فقط از داده‌های فعلی قابل‌محاسبه باشد، معمولاً effect لازم ندارد.',
            'فکر کردن useEffect فقط برای «بعداً یک کد اجرا کردن» است. وظیفه‌ی اصلی آن sync با سیستم‌های بیرونی است.',
            'تغییر مستقیم state مرورگر در بدنه‌ی component و بعد تعجب از اینکه رفتار در development ناپایدار می‌شود.',
          ],
          realUsage: [
            'هماهنگ کردن `document.title` با state.',
            'راه انداختن یا متوقف کردن timer، subscription یا listener.',
            'هماهنگ نگه داشتن storage مرورگر یا سیستم‌های بیرونی دیگر با state.',
          ],
          practice: {
            question:
              'اگر یک مقدار را بتوان مستقیم در render از روی props و state حساب کرد، معمولاً باید effect شود یا همان محاسبه‌ی خالص بماند؟',
            task: 'یک نمونه از این app نام ببر که خروجی render خالص است و یک نمونه که کار sync با سیستم بیرونی محسوب می‌شود.',
          },
          summaryPoints: [
            'side effect کاری است که از render خالص بیرون می‌رود.',
            'React عمداً rendering را از synchronization جدا می‌کند.',
            'useEffect بیشتر برای سیستم‌های بیرونی است، نه برای هر کدی که خواستی بعداً اجرا شود.',
          ],
        },
        lifecycleCleanup: {
          title: 'mount، update، unmount، setup و cleanup',
          badge: 'lifecycle',
          accent: '#2563eb',
          summary:
            'یک effect می‌تواند بعد از commit چیزی را setup کند و قبل از rerun یا هنگام unmount آن را cleanup کند؛ همین کار جلوی ماندن timerها، subscriptionها و کارهای قدیمی را می‌گیرد.',
          whyExists:
            'کار بیرونی معمولاً عمر دارد. اگر React timer یا subscription را شروع می‌کند، باید راه قابل‌اعتمادی برای متوقف یا جایگزین کردن آن هم داشته باشد.',
          problem:
            'بدون cleanup، هر update می‌تواند intervalها، listenerها، subscriptionها یا taskهای قدیمی را همچنان زنده نگه دارد و باعث کار تکراری و bug شود.',
          howItWorks: [
            'بعد از اولین render commit‌شده، React می‌تواند setup مربوط به effect را اجرا کند. این بخش اغلب معادل sync اولیه در mount است.',
            'اگر dependencyها بعداً تغییر کنند، React اول cleanup قبلی را اجرا می‌کند و بعد setup جدید را با مقادیر تازه اجرا می‌کند.',
            'وقتی component unmount شود، React آخرین cleanup را اجرا می‌کند تا کار بیرونی آزاد شود.',
            'در Strict Mode توسعه، React ممکن است setup و cleanup را در mount دوبار اجرا کند تا effectهای شکننده را زودتر آشکار کند.',
          ],
          simulation: [
            {
              title: 'render اتفاق می‌افتد',
              body: 'component UI را از روی props و state حساب می‌کند. هنوز interval، listener یا subscription شروع نشده است.',
            },
            {
              title: 'commit اتفاق می‌افتد',
              body: 'React UI را داخل DOM قرار می‌دهد. فقط بعد از آن است که setup مربوط به effect اجرا می‌شود.',
            },
            {
              title: 'setup کار بیرونی را شروع می‌کند',
              body: 'مثلاً یک interval شروع می‌شود یا یک listener مرورگر attach می‌شود.',
            },
            {
              title: 'یک dependency عوض می‌شود',
              body: 'قبل از اینکه React setup جدید را اجرا کند، cleanup قبلی را اجرا می‌کند تا کار بیرونی قدیمی اول متوقف شود.',
            },
            {
              title: 'setup جدید اجرا می‌شود',
              body: 'effect با مقادیر تازه دوباره شروع می‌شود تا sync با props و state جدید باقی بماند و از stale value دور بماند.',
            },
            {
              title: 'component unmount می‌شود',
              body: 'React cleanup نهایی را اجرا می‌کند تا timer، listener یا subscription بعد از ناپدید شدن UI هم‌چنان زنده نماند.',
            },
          ],
          example: {
            title: 'setup و cleanup برای interval',
            code: `useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTick(new Date());
  }, 1000);

  return () => window.clearInterval(intervalId);
}, []);`,
            explanation:
              'setup، interval را یک بار بعد از commit اول شروع می‌کند و cleanup هنگام unmount آن را پاک می‌کند. همین الگو در Strict Mode توسعه هم سالم می‌ماند.',
          },
          comparison: {
            before: `// الگوی نشتی‌دار
useEffect(() => {
  window.setInterval(() => {
    setTick(new Date());
  }, 1000);
}, []);`,
            after: `// الگوی امن
useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTick(new Date());
  }, 1000);

  return () => window.clearInterval(intervalId);
}, []);`,
            takeaway:
              'cleanup یک گزینه‌ی اضافه نیست. دقیقاً راهی است که به React می‌گویی کار بیرونی را چه زمانی متوقف یا جایگزین کند.',
          },
          mistakes: [
            'فکر کردن cleanup فقط در unmount اجرا می‌شود. قبل از rerun effect هم اجرا می‌شود.',
            'ترسیدن از دوبار اجرا شدن در Strict Mode و فرض کردن اینکه production هم همیشه دقیقاً همان‌طور رفتار می‌کند. آن چرخه‌ی اضافه برای پیدا کردن effectهای شکننده است.',
            'ساختن interval یا listener بدون برگرداندن cleanup.',
          ],
          realUsage: [
            'interval برای clock، autosave یا polling.',
            'listenerهای window یا document که بعداً باید detach شوند.',
            'subscriptionها یا integrationهایی که با update یا unmount باید متوقف شوند.',
          ],
          practice: {
            question:
              'اگر effect به `query` وابسته باشد و `query` عوض شود، اول چه رخ می‌دهد: setup جدید یا cleanup قبلی؟',
            task: 'در یک جمله توضیح بده چرا Strict Mode با setup-cleanup اضافی می‌تواند bugهای effect را زودتر پیدا کند.',
          },
          summaryPoints: [
            'setup بعد از commit کار بیرونی را شروع می‌کند.',
            'cleanup قبل از rerun و هنگام unmount اجرا می‌شود.',
            'Strict Mode کمک می‌کند effectهای ناسالم زودتر آشکار شوند.',
          ],
        },
        dependencies: {
          title: 'dependency array، stale value و rerun',
          badge: 'dependency',
          accent: '#d97706',
          summary:
            'آرایه‌ی dependency به React می‌گوید effect چه زمانی باید دوباره sync شود: بعد از هر commit، فقط یک بار، یا هنگام تغییر چند مقدار خاص.',
          whyExists:
            'React به یک راه declarative نیاز دارد تا component مشخص کند effect به کدام مقدارها وابسته است و چه زمانی لازم است دوباره sync شود.',
          problem:
            'بدون dependency tracking، effect یا بیش از حد اجرا می‌شود، یا update لازم را از دست می‌دهد، یا stale valueهایی از render قبلی را نگه می‌دارد.',
          howItWorks: [
            'نبودن dependency array یعنی effect بعد از هر render commit‌شده اجرا می‌شود، چون React قانون محدودتری در اختیار ندارد.',
            'آرایه‌ی خالی یعنی React فرض می‌کند effect به هیچ مقدار متغیری از render وابسته نیست، پس یک بار setup و در unmount cleanup می‌کند.',
            'آرایه‌ی dependency مشخص یعنی React این مقدارها را بین renderها مقایسه می‌کند و فقط هنگام تغییر یکی از آن‌ها effect را دوباره اجرا می‌کند.',
            'اگر داخل effect از مقدار متغیری استفاده کنی ولی آن را در dependency نیاوری، ممکن است effect با stale value کار کند.',
          ],
          simulation: [
            {
              title: 'بدون dependency array',
              body: 'React component را commit می‌کند، effect را اجرا می‌کند، و بعد در هر render commit‌شده‌ی بعدی دوباره effect را اجرا می‌کند.',
            },
            {
              title: 'با آرایه‌ی خالی',
              body: 'React component را commit می‌کند، effect را یک بار اجرا می‌کند و بعد فقط هنگام unmount cleanup را اجرا می‌کند.',
            },
            {
              title: 'با dependencyهای مشخص',
              body: 'React component را commit می‌کند، effect را اجرا می‌کند، و بعد فقط وقتی یکی از مقدارهای لیست‌شده عوض شود cleanup و setup جدید را انجام می‌دهد.',
            },
            {
              title: 'bug مربوط به stale value',
              body: 'effect هنوز `query` یا `count` قدیمی را می‌بیند چون dependency list آن کامل نبوده و React دلیل کافی برای resync با مقدار تازه نداشته است.',
            },
          ],
          example: {
            title: 'dependency مشخص برای sync کردن title',
            code: `useEffect(() => {
  document.title = 'Search: ' + query;
}, [query]);`,
            explanation:
              'effect فقط وقتی `query` عوض شود دوباره اجرا می‌شود، چون title باید دقیقاً با همان مقدار sync بماند.',
          },
          comparison: {
            before: `// بیش از حد گسترده
useEffect(() => {
  document.title = 'Search: ' + query;
});`,
            after: `// dependency آگاهانه
useEffect(() => {
  document.title = 'Search: ' + query;
}, [query]);`,
            takeaway:
              'نسخه‌ی دوم قانون sync را واضح می‌گوید: فقط وقتی `query` تغییر کرد دوباره اجرا شو.',
          },
          mistakes: [
            'استفاده از `[]` فقط برای ساکت کردن rerunها، حتی وقتی effect واقعاً به مقدارهای متغیر وابسته است.',
            'فکر کردن نداشتن dependency array و آرایه‌ی خالی یک معنی دارند. ندارند.',
            'نادیده گرفتن stale value و بعد تعجب از اینکه effect هنوز از state یا props قدیمی استفاده می‌کند.',
          ],
          realUsage: [
            'هماهنگ کردن title مرورگر با یک مقدار مشخص.',
            'اجرا کردن دوباره‌ی effect هنگام تغییر search term، id یا filter.',
            'جلوگیری از syncهای اضافی وقتی renderهای نامرتبط اتفاق می‌افتند.',
          ],
          practice: {
            question:
              'کدام گزینه یعنی «بعد از هر render commit‌شده اجرا شو»: بدون dependency array، `[]` یا `[query]`؟',
            task: 'برای هر حالت یک جمله بنویس: بدون array، array خالی، و dependencyهای مشخص.',
          },
          summaryPoints: [
            'نبودن array یعنی بعد از هر commit.',
            'آرایه‌ی خالی یعنی یک بار بعد از mount و cleanup هنگام unmount.',
            'dependencyهای مشخص باعث می‌شوند effect فقط هنگام تغییر همان مقدارها دوباره sync شود و stale value کمتر شود.',
          ],
        },
        browserSync: {
          title: 'timer، debounce، document.title و localStorage',
          badge: 'APIهای browser',
          accent: '#059669',
          summary:
            'خیلی از effectها برای sync کردن state React با APIهای browser مثل timerها، title صفحه و localStorage وجود دارند.',
          whyExists:
            'state React به‌تنهایی نمی‌تواند زمان‌بندی کند، title تب browser را عوض کند، یا داده را بین refreshها نگه دارد. این کارها متعلق به APIهای بیرونی browser هستند.',
          problem:
            'اگر تغییرهای state با timer، title یا storage به‌درستی sync نشوند، UI و browser از هم فاصله می‌گیرند و کارهای زمان‌بندی‌شده‌ی قدیمی می‌توانند ادامه پیدا کنند.',
          howItWorks: [
            'effectهای timer با `setInterval` یا `setTimeout` در setup کار می‌کنند و با `clearInterval` یا `clearTimeout` در cleanup متوقف می‌شوند.',
            'debounce یک الگوی delay کنترل‌شده است: هر تغییر، کاری برای آینده زمان‌بندی می‌کند و cleanup اگر ورودی جدید برسد، زمان‌بندی قبلی را لغو می‌کند.',
            'sync کردن title با `document.title` بعد از commit انجام می‌شود تا تب browser با state فعلی UI هماهنگ بماند.',
            'sync کردن storage مقدار اولیه را از `localStorage` می‌خواند و بعد مقدارهای تازه را می‌نویسد تا state بعد از reload هم برگردد.',
          ],
          simulation: [
            {
              title: 'کاربر تایپ می‌کند',
              body: 'state مربوط به input فوراً عوض می‌شود، اما debounced value هنوز نباید اعمال شود چون React یک timeout برای بعد زمان‌بندی می‌کند.',
            },
            {
              title: 'یک timeout زمان‌بندی می‌شود',
              body: 'setup مربوط به effect یک timeout می‌سازد که بعد از کمی مکث، `query` نهایی را ثبت کند.',
            },
            {
              title: 'کاربر دوباره تایپ می‌کند',
              body: 'React effect را دوباره اجرا می‌کند، اما قبل از آن cleanup timeout قبلی را پاک می‌کند تا کار زمان‌بندی‌شده‌ی قدیمی برنده نشود.',
            },
            {
              title: 'فقط timeout آخر اعمال می‌شود',
              body: 'بعد از اینکه تایپ آرام شد، آخرین timeout تمام می‌شود و debounced value با متن نهایی به‌روز می‌شود.',
            },
            {
              title: 'state در localStorage ذخیره می‌شود',
              body: 'بعد از تغییر note، storage مرورگر هم به‌روز می‌شود تا آخرین مقدار بیرون از render فعلی قابل‌دسترسی بماند.',
            },
            {
              title: 'بعد از reload مقدار برگردانده می‌شود',
              body: 'در بار بعدی صفحه، مقدار ذخیره‌شده دوباره به state اولیه تبدیل می‌شود و کاربر note قبلی خود را از دست نمی‌دهد.',
            },
          ],
          example: {
            title: 'پاک کردن timeout برای debounce',
            code: `useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    setDebouncedQuery(query.trim().toLowerCase());
  }, 350);

  return () => window.clearTimeout(timeoutId);
}, [query]);`,
            explanation:
              'هر `query` جدید یک timeout تازه می‌سازد. cleanup timeout قبلی را پاک می‌کند تا debounced value فقط متن نهایی را نشان بدهد.',
          },
          comparison: {
            before: `// بدون cleanup
useEffect(() => {
  window.setTimeout(() => {
    setDebouncedQuery(query);
  }, 350);
}, [query]);`,
            after: `// با cleanup
useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    setDebouncedQuery(query);
  }, 350);

  return () => window.clearTimeout(timeoutId);
}, [query]);`,
            takeaway:
              'cleanup حتی برای APIهای کوتاه‌مدت مثل timeout هم مهم است. بدون آن، کار زمان‌بندی‌شده‌ی قدیمی می‌تواند با مقدار stale اجرا شود.',
          },
          mistakes: [
            'استفاده از timeout یا interval بدون پاک کردن آن.',
            'فکر کردن debounce یک feature جداگانه‌ی React است. در واقع یک الگوی زمان‌بندی با APIهای browser و cleanup است.',
            'نوشتن داخل localStorage یا `document.title` در render به‌جای فاز sync.',
          ],
          realUsage: [
            'جست‌وجوهایی که باید قبل از اعمال کمی صبر کنند.',
            'tab titleهایی که باید شمارنده، عنوان یا وضعیت فعلی را نشان دهند.',
            'ذخیره‌ی draft، note یا stateهای کوچک بین refreshها.',
          ],
          practice: {
            question:
              'اگر کاربر قبل از تمام شدن timeout مربوط به debounce دوباره تایپ کند، با timeout قدیمی چه باید کرد؟',
            task: 'توضیح بده چرا `document.title` و `localStorage` سیستم‌های بیرونی محسوب می‌شوند، نه خروجی خالص render.',
          },
          summaryPoints: [
            'timer، title و storage APIهای browser و بیرون از render هستند.',
            'cleanup جلوی اعمال شدن کار زمان‌بندی‌شده‌ی قدیمی را می‌گیرد.',
            'sync یعنی state React و state browser با هم هماهنگ بمانند.',
          ],
        },
        avoidEffects: {
          title: 'چه زمانی نباید از useEffect استفاده کرد',
          badge: 'جلوگیری از سوءاستفاده',
          accent: '#0f766e',
          summary:
            'هر تغییر مقداری به effect نیاز ندارد. اگر نتیجه را بتوان مستقیم در render از روی props و state محاسبه کرد، اضافه کردن effect معمولاً کد را پیچیده‌تر می‌کند.',
          whyExists:
            'خیلی از مبتدی‌ها از `useEffect` بیش از حد استفاده می‌کنند، چون آن را ابزار عمومی «بعد از render یک کاری بکن» می‌بینند؛ اما این عادت state اضافه و rerender اضافه می‌سازد.',
          problem:
            'استفاده از effect برای valueهای مشتق‌شده یا محاسبه‌های داخلی، state را تکراری می‌کند، rerender اضافه می‌سازد و منطق ساده را پشت sync زمانی پنهان می‌کند.',
          howItWorks: [
            'derived state مقداری است که می‌توانی مستقیم در render از روی props یا state موجود حساب کنی؛ مثل فیلتر کردن لیست یا ساختن یک full name.',
            'effect-based synchronization برای سیستم‌های بیرونی است، نه برای محاسبه‌ی valueهایی که کامل داخل data flow خود React هستند.',
            'سؤال خوب این است: «دارم با چیزی بیرون از React sync می‌شوم، یا فقط دارم یک مقدار را برای UI حساب می‌کنم؟» اگر فقط محاسبه است، render معمولاً کافی است.',
          ],
          simulation: [
            {
              title: 'یک prop عوض می‌شود',
              body: 'component در هر صورت دوباره render می‌شود، چون React همین حالا داده‌ی جدید را برای render بعدی دارد.',
            },
            {
              title: 'یک مقدار مشتق‌شده می‌تواند همان‌جا حساب شود',
              body: 'مثلاً filtered items یا full name را می‌توان مستقیم از روی props و state فعلی به دست آورد.',
            },
            {
              title: 'نسخه‌ی غیرضروریِ effect، state اضافه می‌سازد',
              body: 'component یک بار render می‌شود، بعد effect اجرا می‌شود، بعد setter یک render دیگر راه می‌اندازد فقط برای ذخیره‌ی مقداری که از اول قابل‌محاسبه بود.',
            },
            {
              title: 'نسخه‌ی ساده‌ی render-only از آن چرخه‌ی اضافه دوری می‌کند',
              body: 'UI خواناتر می‌ماند چون effect اضافی، state اضافه و sync زمانی غیرضروری وجود ندارد.',
            },
          ],
          example: {
            title: 'derived state باید مشتق‌شده بماند',
            code: `function Greeting({ firstName, lastName }) {
  const fullName = firstName + ' ' + lastName;
  return <p>Hello, {fullName}</p>;
}`,
            explanation:
              'اینجا effect لازم نیست. `fullName` یک derived value خالص از props است و render می‌تواند هر بار خودش آن را حساب کند.',
          },
          comparison: {
            before: `// effect غیرضروری
const [fullName, setFullName] = useState('');

useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);`,
            after: `// مشتق‌سازی خالص
const fullName = firstName + ' ' + lastName;`,
            takeaway:
              'نسخه‌ی دوم state تکراری و یک چرخه‌ی render اضافه را حذف می‌کند. effect باید با سیستم بیرونی sync کند، نه اینکه جای محاسبه‌ی ساده را بگیرد.',
          },
          mistakes: [
            'استفاده از `useEffect` برای mirror کردن props در state وقتی یک محاسبه‌ی ساده‌ی render کافی است.',
            'بردن منطق مربوط به click یا input به effect، در حالی که جای طبیعی آن همان event handler است.',
            'فرض کردن هر چیزی که «بعد از render» اتفاق می‌افتد حتماً باید effect باشد.',
          ],
          realUsage: [
            'استفاده از render خالص برای labelها و filtered listها.',
            'نگه داشتن منطق event-specific داخل handlerها.',
            'کم کردن state اضافی و rerenderهای غیرلازم در treeهای بزرگ component.',
          ],
          practice: {
            question:
              'اگر بتوانی یک آرایه‌ی فیلترشده را مستقیم از `items` و `searchTerm` در render حساب کنی، آیا معمولاً به state اضافه و effect نیاز داری؟',
            task: 'یک نمونه از value مشتق‌شده در render و یک نمونه از کاری که واقعاً باید داخل effect باشد بنویس.',
          },
          summaryPoints: [
            'اگر value در render قابل‌محاسبه است، معمولاً سراغ `useEffect` نرو.',
            'effect برای sync با بیرون است، نه برای هر محاسبه‌ی داخلی.',
            'state کمتر و sync کمتر معمولاً یعنی component ساده‌تر و امن‌تر.',
          ],
        },
      },
      routingNotes: [
        'اول از خودت بپرس: این کار sync با سیستم بیرونی است یا فقط محاسبه‌ای است که render خودش می‌تواند انجام دهد؟',
        'cleanup قبل از rerun و در unmount اجرا می‌شود تا کار بیرونی قدیمی جلو نیاید.',
        'dependency array قانون sync است، نه یک دکمه‌ی جادویی برای performance.',
      ],
      quizTitle: 'مدل ذهنی effect را محک بزن',
      tipsTitle: 'یادآوری‌های effect',
      tips: [
        'هر effect باید یک هدف sync روشن در بیرون از React داشته باشد.',
        'اگر یک مقدار را می‌توانی در render مشتق کنی، آن را به state و effect تبدیل نکن.',
        'برای debug کردن effect، setup، cleanup، dependencyها و بیرونی بودنِ واقعیِ کار را جداگانه بررسی کن.',
      ],
    },
    routing: {
      stageLabel: 'گام ۵.۵',
      title: 'مسیریابی، لینک‌ها و مسیرهای جایگزین',
      hero: {
        eyebrow: 'گام ۵.۵',
        title: 'مسیریابی، لینک‌ها و مسیرهای جایگزین',
        lead: 'این درس نشان می‌دهد یک React app چطور مسیرهای URL را به page componentها map می‌کند، نسخه‌های فارسی و انگلیسی را هم‌راستا نگه می‌دارد، و از locale پشتیبانی‌نشده یا صفحه‌ی پیدا نشده به‌خوبی recover می‌کند.',
        primaryAction: 'این بخش را تمرین کردم',
        secondaryAction: 'رفتن به Context و state مشترک',
      },
      summary: {
        intro:
          'client-side routing به app اجازه می‌دهد بدون reload کامل document بین صفحه‌ها جابه‌جا شود. URL هنوز مهم است، اما React Router تصمیم می‌گیرد کدام page component render شود و shell برنامه همان‌جا می‌ماند.',
        points: [
          'مسیرهای URL به page componentها map می‌شوند',
          'لینک‌های داخلی باید با Link یا NavLink ساخته شوند',
          'پیشوند locale نسخه‌های فارسی و انگلیسی را هم‌راستا نگه می‌دارد',
          'fallback routeها برای locale پشتیبانی‌نشده و صفحه‌ی پیدا نشده به کار می‌روند',
        ],
        prerequisites: [
          'React componentها، props، state و جریان render',
          'رویدادها و form state کنترل‌شده',
          'useEffect و sync با browser',
          'آشنایی با پیشوندهای /fa و /en',
        ],
        keyPoints: [
          'Route path خودش page نیست',
          'Link location را بدون reload کامل عوض می‌کند',
          '`/:locale` ساختار app را محافظت می‌کند',
          'Not found routeها typo را به recovery تبدیل می‌کنند',
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'مسیریابی چطور URL را به صفحه map می‌کند',
        lead: 'یک موضوع را انتخاب کن و از مسیر تا component، لینک، guard، redirect یا fallback دنبال کن.',
        chooserLabel: 'یک topic مسیریابی را انتخاب کن',
        sections: {
          definition: '۱. تعریف ساده',
          whyExists: '۲. چرا وجود دارد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. چطور کار می‌کند',
          simulation: '۵. شبیه‌سازی مرحله‌به‌مرحله',
          example: '۶. مثال عملی کد',
          beforeAfter: '۷. مقایسه قبل/بعد',
          mistakes: '۸. اشتباه‌های رایج مبتدی‌ها',
          usage: '۹. کاربرد در پروژه واقعی',
          practice: '۱۰. تمرین یا mini-quiz',
          summary: '۱۱. جمع‌بندی ساده',
        },
        practiceQuestion: 'سؤال پیش‌بینی',
        practiceTask: 'تمرین کوچک',
        beforeLabel: 'قبل',
        afterLabel: 'بعد',
        simulationIntro: 'پشت صحنه',
      },
      live: {
        eyebrow: 'تمرین زنده',
        title: 'Route Explorer',
        lead: 'یک مسیر نمونه را انتخاب کن یا مسیر خودت را تایپ کن تا ببینی این app locale، page و recovery را چطور می‌خواند.',
        guidance:
          'از کنترل‌های پایین برای بررسی مسیرها استفاده کن. این lab روی همین صفحه می‌ماند و app را navigate نمی‌کند.',
        stateNote:
          'تعامل‌های اینجا فقط local state را عوض می‌کنند. نه persistence داریم، نه XP، و نه navigation واقعی.',
        labels: {
          sampleLabel: 'مسیرهای نمونه',
          selectLabel: 'یک مسیر نمونه انتخاب کن',
          inputLabel: 'یک مسیر دلخواه بنویس',
          customOption: 'مسیر دلخواه',
          selectedPath: 'مسیر انتخاب‌شده',
          localeSegment: 'بخش locale',
          pageSegment: 'بخش page',
          matchStatus: 'وضعیت تطبیق',
          matchedPage: 'برچسب page تطبیق‌داده‌شده',
          safeRedirect: 'نمونه‌ی redirect امن',
          activePreview: 'پیش‌نمایش active-link',
          previewEmpty: 'هیچ chip نمونه‌ای با این مسیر دلخواه match نمی‌شود.',
          recovery: 'Recovery برای not-found',
        },
        status: {
          valid: 'معتبر',
          unsupportedLocale: 'locale پشتیبانی‌نشده',
          notFound: 'پیدا نشد',
        },
        statusDescriptions: {
          valid: 'این مسیر به یک صفحه در locale فعلی می‌رسد.',
          unsupportedLocale: 'بخش locale پشتیبانی نمی‌شود، پس این app به /fa برمی‌گردد.',
          notFound:
            'locale درست است، اما هیچ صفحه‌ای با این مسیر match نمی‌شود. صفحه‌ی not-found و یک لینک خانه نشان بده.',
        },
      },
      quizTitle: 'مدل ذهنی routing را محک بزن',
      tipsTitle: 'یادآوری‌های routing',
      tipsIntro:
        'یادآوری‌های کوتاه، یک تمرین سریع، و مهم‌ترین اشتباه‌هایی که باید حواست به آن‌ها باشد.',
      tips: [
        'برای navigation داخلی از Link یا NavLink استفاده کن تا app state را نگه دارد.',
        'لینک‌های محلی‌سازی‌شده را با localizedPath(language, "/routing") بساز، نه با hardcode کردن /fa یا /en در همه‌جا.',
        'recovery برای locale پشتیبانی‌نشده و مسیر not-found را دو مسئله‌ی جدا بدان.',
      ],
      mistakes: [
        'استفاده از anchor معمولی برای navigation داخلی و مجبور کردن app به reload کامل.',
        'فراموش کردن اضافه کردن route جدید به App.jsx و manifest مسیرها با هم.',
        'قاتی کردن recovery برای locale پشتیبانی‌نشده با recovery برای not-found.',
      ],
      practicePrompts: [
        {
          id: 'routing-practice-react',
          title: 'ردیابی مسیر',
          prompt: 'مشخص کن برای /fa/effects چه چیزی render می‌شود.',
          hint: 'از /:locale شروع کن و بعد route تو در تویی را دنبال کن که page segment را match می‌کند.',
          expectedOutcome: 'EffectsPage داخل shell فارسی render می‌شود.',
        },
        {
          id: 'routing-practice-fallback',
          title: 'Recovery امن',
          prompt: 'توضیح بده app باید از /de/react چطور recover کند.',
          hint: 'locale پشتیبانی نمی‌شود، پس guard باید به locale پیش‌فرض redirect کند.',
          expectedOutcome: 'app به /fa برمی‌گردد.',
        },
      ],
      topics: {
        'client-routing': {
          title: 'مسیریابی سمت کاربر',
          badge: 'مسیر browser',
          accent: '#2563eb',
          summary:
            'client-side routing باعث می‌شود یک React app روی صفحه بماند و فقط path عوض شود تا browser برای هر حرکت، document تازه‌ای نخواهد.',
          definition:
            'مسیریابی سمت کاربر یعنی URL فعلی را در browser بخوانیم و بعد decide کنیم کدام page component باید render شود.',
          whyExists:
            'این کار app را سریع‌تر نگه می‌دارد، UI دارای state را حفظ می‌کند، و history browser را بدون reload کامل به کار می‌اندازد.',
          problem:
            'بدون client-side routing، هر تغییر path state فعلی app را از بین می‌برد و کل document دوباره load می‌شود.',
          howItWorks: [
            'router location و history browser را دنبال می‌کند.',
            'route table path فعلی را با page component درست match می‌کند.',
            'React page match‌شده را render می‌کند و shell برنامه همچنان mounted می‌ماند.',
          ],
          simulation: [
            {
              title: 'هنرجو روی لینک داخلی کلیک می‌کند',
              body: 'browser location را داخل app عوض می‌کند و به‌جای document تازه، همان app را ادامه می‌دهد.',
            },
            {
              title: 'React Router مسیر جدید را می‌خواند',
              body: 'route table با locale فعلی و page segment بررسی می‌شود.',
            },
            {
              title: 'page component match‌شده render می‌شود',
              body: 'فقط body صفحه عوض می‌شود و navigation و state shell همان‌جا می‌ماند.',
            },
            {
              title: 'history browser هنوز کار می‌کند',
              body: 'دکمه‌های back و forward همان stack معمول browser را استفاده می‌کنند.',
            },
          ],
          example: {
            title: 'یک route صفحه در App.jsx',
            code: `<Routes>
  <Route path=":locale" element={<LocaleRouteGuard />}>
    <Route element={<AppShell />}>
      <Route path="effects" element={<EffectsPage />} />
      <Route path="routing" element={<RoutingPage />} />
    </Route>
  </Route>
</Routes>`,
            explanation:
              'URL component را انتخاب می‌کند. خود component کل رفتار صفحه را hardcode نمی‌کند.',
          },
          comparison: {
            before: `// ذهنیت reload کامل
window.location.href = '/effects';
// browser یک document تازه درخواست می‌کند.`,
            after: `// مسیریابی سمت کاربر
<Link to={localizedPath(language, '/effects')}>Effects</Link>
// React صفحه را بدون reload document عوض می‌کند.`,
            takeaway:
              'routing باعث می‌شود app شبیه یک برنامه‌ی واحد دیده شود، نه زنجیره‌ای از documentهای جدا.',
          },
          mistakes: [
            'فکر کردن هر تغییر URL یعنی reload کامل.',
            'قاتی کردن انتخاب route با UI مخصوص همان صفحه.',
            'فراموش کردن اینکه history browser هنوز وجود دارد و باید کار کند.',
          ],
          realUsage: [
            'navigation بین درس‌های course.',
            'جابجایی بین نسخه‌های فارسی و انگلیسی.',
            'حفظ state app در حالی که هنرجو جابه‌جا می‌شود.',
          ],
          practice: {
            question: 'اگر path به /fa/effects برسد، router باید چه کند؟',
            task: 'از :locale تا page component match‌شده، route tree را دنبال کن.',
          },
          summaryPoints: [
            'router location را می‌خواند و page component مناسب را انتخاب می‌کند.',
            'client-side routing shell فعلی app را زنده نگه می‌دارد.',
            'تغییر history نیاز به درخواست document تازه ندارد.',
          ],
        },
        'routes-pages': {
          title: 'مسیرها و صفحه‌ها',
          badge: 'map',
          accent: '#7c3aed',
          summary:
            'یک Route یک بخش از path را به یک page component وصل می‌کند. همین map ساده است که URL را به صفحه تبدیل می‌کند.',
          definition:
            'Route قانونی است که می‌گوید وقتی یک path مشخص match شد، کدام component باید render شود.',
          whyExists:
            'route tableها انتخاب صفحه را در یک جا نگه می‌دارند تا منطق صفحه در shell برنامه پخش نشود.',
          problem:
            'اگر انتخاب route در شرط‌های پراکنده پنهان شود، app سخت‌تر خوانده و نگه‌داری می‌شود.',
          howItWorks: [
            'Routes قوانین match را کنار هم قرار می‌دهد.',
            'هر Route یک path و element برای render تعریف می‌کند.',
            'route تو در تو به shell locale و pageهای درس اجازه می‌دهد یک ساختار مشترک داشته باشند.',
          ],
          simulation: [
            {
              title: 'browser به /fa/routing می‌رود',
              body: 'اول بخش locale بررسی می‌شود، بعد بخش page با lesson routeهای تو در تو match می‌شود.',
            },
            {
              title: 'Route مناسب برنده می‌شود',
              body: 'router entry مربوط به routing را پیدا می‌کند و همان page component را render می‌کند.',
            },
            {
              title: 'یک layout بدون path هم می‌تواند صفحه را wrap کند',
              body: 'App shell بالای درس‌ها می‌ماند بدون اینکه خودش URL جداگانه‌ای داشته باشد.',
            },
            {
              title: 'route not-found بقیه را می‌گیرد',
              body: 'اگر هیچ path درسی match نشود، app هنوز می‌تواند با صفحه‌ی fallback recover کند.',
            },
          ],
          example: {
            title: 'entryهای route باید صریح بمانند',
            code: `<Route path="routing" element={<RoutingPage />} />
<Route path="project" element={<ProjectPage />} />
<Route path="*" element={<NotFoundPage />} />`,
            explanation:
              'table مسیرها خوانا می‌ماند چون هر path مستقیم به صفحه‌ای که باید render شود وصل است.',
          },
          comparison: {
            before: `// route checkهای پراکنده
if (path === '/routing') {
  return <RoutingPage />;
}
if (path === '/project') {
  return <ProjectPage />;
}`,
            after: `// route table مرکزی
<Route path="routing" element={<RoutingPage />} />
<Route path="project" element={<ProjectPage />} />`,
            takeaway: 'route table انتخاب صفحه را declarative و قابل گسترش نگه می‌دارد.',
          },
          mistakes: [
            'قاتی کردن path string با خود component صفحه.',
            'پنهان کردن route logic در شرط‌های پراکنده.',
            'اضافه کردن صفحه‌ی جدید بدون اضافه کردن entry مربوط به route.',
          ],
          realUsage: [
            'صفحه‌های درس و layout اصلی app.',
            'route پروژه‌ی نهایی.',
            'fallback routeها برای مسیرهای ناشناخته.',
          ],
          practice: {
            question: 'برای /fa/events-forms کدام component باید render شود؟',
            task: 'یک path را به یک page component وصل کن و pair آن‌ها را به شکل Route بنویس.',
          },
          summaryPoints: [
            'Route path و component را به هم وصل می‌کند.',
            'route table باید صریح و خوانا باشد.',
            'routeهای تو در تو layout و انتخاب صفحه را از هم جدا می‌کنند.',
          ],
        },
        'links-navigation': {
          title: 'Link و ناوبری',
          badge: 'navigation',
          accent: '#0ea5e9',
          summary:
            'برای navigation داخلی از Link یا NavLink استفاده کن تا app location را عوض کند بدون اینکه state را دور بریزد یا document را دوباره load کند.',
          definition:
            'Link جایگزین router-aware برای anchor داخلی است و NavLink وقتی active styling لازم باشد آن را هم اضافه می‌کند.',
          whyExists:
            'کاربر باید بتواند در app جابه‌جا شود بدون اینکه state درس فعلی را از دست بدهد یا منتظر reload کامل بماند.',
          problem:
            'anchor معمولی برای سایت بیرونی خوب است، اما برای navigation داخلی یک load کامل document می‌سازد و React app را reset می‌کند.',
          howItWorks: [
            'Link location router را داخل app عوض می‌کند.',
            'NavLink می‌تواند فعال بودن target را بررسی کند و style خودش را بر آن اساس تغییر دهد.',
            'browser هنوز history، back و forward را مدیریت می‌کند.',
          ],
          simulation: [
            {
              title: 'هنرجو یک لینک درس را انتخاب می‌کند',
              body: 'app از /fa/react به /fa/routing می‌رود بدون اینکه document را از نو بسازد.',
            },
            {
              title: 'router state را همان‌جا نگه می‌دارد',
              body: 'کنترل‌های باز، tabها و دیگر UIهای stateful لازم نیست از اول شروع شوند.',
            },
            {
              title: 'active styling می‌تواند مسیر فعلی را دنبال کند',
              body: 'NavLink می‌تواند وقتی target با location فعلی match شد، style وضعیت فعلی را اضافه کند.',
            },
            {
              title: 'لینک‌های بیرونی هنوز anchor معمولی هستند',
              body: 'Router link برای navigation داخلی app است، نه برای هر URL روی internet.',
            },
          ],
          example: {
            title: 'navigation داخلی باید router-aware بماند',
            code: `<Link to={localizedPath(language, '/routing')}>Routing</Link>
<NavLink to={localizedPath(language, '/effects')}>Effects</NavLink>`,
            explanation:
              'router حرکت را مدیریت می‌کند و NavLink می‌تواند وقتی target فعلی است active styling اضافه کند.',
          },
          comparison: {
            before: `// reload کامل
<a href="/project">Project</a>`,
            after: `// navigation داخلی
<Link to={localizedPath(language, '/project')}>Project</Link>`,
            takeaway:
              'router linkها app را stateful و سریع نگه می‌دارند و active linkها مسیر فعلی را روشن می‌کنند.',
          },
          mistakes: [
            'استفاده از href برای navigation داخلی درس‌ها.',
            'استفاده از Link برای سایت‌های بیرونی.',
            'زور زدن برای active state با کد custom وقتی NavLink خودش آن را دارد.',
          ],
          realUsage: [
            'navigation اصلی درس‌ها.',
            'CTAهای completion بین درس‌ها.',
            'active styling برای درس یا tab فعلی.',
          ],
          practice: {
            question: 'چه زمانی NavLink بهتر از Link است؟',
            task: 'یک anchor داخلی را طوری بازنویسی کن که از router-aware link استفاده کند.',
          },
          summaryPoints: [
            'Link برای navigation داخلی است.',
            'NavLink برای navigation داخلی همراه با active styling است.',
            'anchorها هنوز برای URLهای بیرونی هستند.',
          ],
        },
        'localized-routes': {
          title: 'مسیرهای محلی‌سازی‌شده',
          badge: 'locale',
          accent: '#059669',
          summary:
            'بخش :locale نسخه‌های /fa و /en را هم‌راستا نگه می‌دارد تا این app بتواند فارسی و انگلیسی را بدون duplicate کردن دستی route tree سرو کند.',
          definition:
            'Localized routing یعنی locale داخل path URL قرار می‌گیرد و pageهای درس را زیر خودش scope می‌کند.',
          whyExists:
            'یک route tree می‌تواند دو زبان را سرو کند و در عین حال ترتیب و ساختار درس‌ها را یکسان نگه دارد.',
          problem:
            'pathهای hardcodeشده‌ی locale خیلی زود از هم جدا می‌شوند و نگه‌داری دو زبانه را سخت‌تر می‌کنند.',
          howItWorks: [
            'بخش route `:locale` scope زبانی فعلی را capture می‌کند.',
            'locale guard بررسی می‌کند که این segment پشتیبانی می‌شود یا نه.',
            '`localizedPath(language, path)` پیشوند درست locale را برای linkهای داخلی می‌سازد.',
          ],
          simulation: [
            {
              title: 'app مسیر /fa/routing را دریافت می‌کند',
              body: 'locale برابر fa است، پس نسخه‌ی فارسی درخت درس‌ها در scope می‌ماند.',
            },
            {
              title: 'همان شکل route برای /en/routing هم کار می‌کند',
              body: 'نسخه‌ی انگلیسی همان ساختار route را با پیشوند locale متفاوت استفاده می‌کند.',
            },
            {
              title: 'linkهای داخلی با helper locale ساخته می‌شوند',
              body: 'درس می‌تواند از `localizedPath(language, "/project")` استفاده کند و /fa یا /en را hardcode نکند.',
            },
            {
              title: 'locale بد نباید درخت app را بشکند',
              body: 'locale پشتیبانی‌نشده باید از طریق guard recover شود، نه اینکه app را در وضعیت خراب رها کند.',
            },
          ],
          example: {
            title: 'ساخت linkهای آگاه از locale',
            code: `const projectPath = localizedPath(language, '/project');

<Route path=":locale" element={<LocaleRouteGuard />}>
  <Route element={<AppShell />}>
    <Route path="routing" element={<RoutingPage />} />
  </Route>
</Route>`,
            explanation:
              'helper لینک‌های درس را در هر زبان هماهنگ نگه می‌دارد و route locale ساختار app را یکسان می‌کند.',
          },
          comparison: {
            before: `// hardcode شده و شکننده
<Link to="/fa/routing">Routing</Link>
<Link to="/en/routing">Routing</Link>`,
            after: `// آگاه از locale و هماهنگ
<Link to={localizedPath(language, '/routing')}>Routing</Link>`,
            takeaway:
              'helper locale از تکرار link logic جلوگیری می‌کند و هر دو زبان را هم‌زمان نگه می‌دارد.',
          },
          mistakes: [
            'Hardcode کردن یک locale در linkهای داخلی.',
            'Duplicate کردن کل route tree برای هر زبان.',
            'فراموش کردن scope کردن lesson routeها زیر `:locale`.',
          ],
          realUsage: [
            'برچسب‌های navigation سراسری app.',
            'CTAهای completion درس‌ها.',
            'رفتار switch زبان و route guardها.',
          ],
          practice: {
            question: 'چرا /fa/routing و /en/routing باید parallel بمانند؟',
            task: 'یک جایی را نام ببر که localizedPath باید در این app استفاده شود.',
          },
          summaryPoints: [
            'locale داخل path زندگی می‌کند.',
            'یک route tree می‌تواند هر دو زبان را سرو کند.',
            'localizedPath لینک‌های داخلی را هماهنگ نگه می‌دارد.',
          ],
        },
        'fallback-routes': {
          title: 'مسیرهای جایگزین',
          badge: 'recovery',
          accent: '#d97706',
          summary:
            'fallback routeها با redirect کردن locale پشتیبانی‌نشده و نشان دادن صفحه‌ی not-found برای صفحه‌های ناشناخته، URLهای بد را قابل recovery نگه می‌دارند.',
          definition:
            'fallback route راه امنی است برای مدیریت مسیری که با صفحه‌ی عادی درس match نمی‌شود.',
          whyExists:
            'هنرجوها URL را اشتباه تایپ می‌کنند، bookmark قدیمی را باز می‌کنند، یا وارد locale پشتیبانی‌نشده می‌شوند. app باید هنوز راهی برای ادامه بدهد.',
          problem:
            'بدون fallback، یک URL بد به جای اینکه قابل recovery باشد به یک dead end تبدیل می‌شود.',
          howItWorks: [
            'locale guard پیشوندهای زبانی پشتیبانی‌نشده را می‌گیرد.',
            'route همگانی `path="*"` صفحه‌های درس ناشناخته را هندل می‌کند.',
            'صفحه‌ی not-found به هنرجو یک لینک برگشت به مسیر آشنا می‌دهد.',
          ],
          simulation: [
            {
              title: 'هنرجو /de/react را باز می‌کند',
              body: 'locale پشتیبانی نمی‌شود، پس app به ریشه‌ی locale پیش‌فرض redirect می‌شود.',
            },
            {
              title: 'هنرجو /fa/unknown را باز می‌کند',
              body: 'locale معتبر است، اما page segment با هیچ route درسی match نمی‌شود.',
            },
            {
              title: 'route همگانی NotFoundPage را render می‌کند',
              body: 'به‌جای صفحه‌ی خالی، app صفحه‌ی recovery را با راه برگشت نشان می‌دهد.',
            },
            {
              title: 'هنرجو می‌تواند از آنجا ادامه بدهد',
              body: 'fallback پایان راه نیست؛ یک نقطه‌ی امن برای برگشت است.',
            },
          ],
          example: {
            title: 'recovery باید صریح بماند',
            code: `<Route path="*" element={<NotFoundPage />} />

if (!supportedLocales.includes(locale)) {
  return <Navigate to="/fa" replace />;
}`,
            explanation:
              'app می‌تواند locale پشتیبانی‌نشده را redirect کند و در عین حال برای pathهای ناشناخته صفحه‌ی not-found مفیدی نشان بدهد.',
          },
          comparison: {
            before: `// dead end
<Route path="*" element={<div>404</div>} />`,
            after: `// مسیر recovery
<Route path="*" element={<NotFoundPage />} />
<Link to={localizedPath(language, '/')}>Home</Link>`,
            takeaway:
              'fallback route باید هنرجو را recover کند، نه اینکه روی صفحه‌ی خالی رهایش کند.',
          },
          mistakes: [
            'قاتی کردن locale پشتیبانی‌نشده با route not-found.',
            'پنهان کردن لینک recovery در صفحه‌ی not-found.',
            'اجازه دادن به URL بد برای تبدیل شدن به صفحه‌ی خالی.',
          ],
          realUsage: [
            'recovery برای typo.',
            'bookmarkها و لینک‌های قدیمی.',
            'ورودی‌های locale پشتیبانی‌نشده.',
          ],
          practice: {
            question: 'برای /fa/unknown چه اتفاقی باید بیفتد؟',
            task: 'تفاوت recovery برای locale پشتیبانی‌نشده و recovery برای not-found را توضیح بده.',
          },
          summaryPoints: [
            'fallback routeها URLهای بد را قابل recovery نگه می‌دارند.',
            'locale پشتیبانی‌نشده و not-found دو case متفاوت‌اند.',
            'صفحه‌ی recovery خوب همیشه هنرجو را به جایی مفید می‌فرستد.',
          ],
        },
      },
    },
    'context-state': {
      stageLabel: 'گام ۸',
      title: 'Context و state مشترک',
      hero: {
        eyebrow: 'گام ۸',
        title: 'Context و state مشترک',
        lead: 'این درس نشان می‌دهد چه زمانی state محلی کافی است، چه زمانی باید state را به نزدیک‌ترین parent منتقل کرد، و چه زمانی Context به بخش‌های مختلف app کمک می‌کند یک value مشترک را از مرز provider بخوانند.',
        primaryAction: 'این درس را تمرین کردم',
        secondaryAction: 'رفتن به معماری پروژه',
      },
      summary: {
        intro:
          'بعضی stateها به یک component تعلق دارند، بعضی به نزدیک‌ترین parent مشترک، و بعضی به یک provider boundary که چندین بخش app به آن نیاز دارند. این درس این مرزها را قابل‌دیدن می‌کند.',
        points: [
          'prop drilling',
          'state placement',
          'provider boundary',
          'custom context hooks',
          'LanguageContext و LearningProgressContext',
          'وقتی Context ابزار درستی نیست',
        ],
        prerequisites: [
          'React componentها، props، state و جریان render',
          'رویدادها و formهای کنترل‌شده',
          'useEffect و آشنایی با routeها',
          'آشنایی با shell فعلی app و پیشوندهای locale',
        ],
        keyPoints: [
          'state محلی هنوز پیش‌فرض UIهای ایزوله است',
          'وقتی siblingهای نزدیک یک value مشترک می‌خواهند، state را بالا ببر',
          'وقتی بسیاری از componentهای دور به یک value نیاز دارند، Context مناسب است',
          'custom hookها جزئیات خام Context را پنهان می‌کنند و استفاده از provider را امن‌تر می‌کنند',
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'state مشترک چگونه در app حرکت می‌کند',
        lead: 'یک topic را انتخاب کن و value را از prop drilling تا provider boundary و custom hookها دنبال کن.',
        chooserLabel: 'یک topic را انتخاب کن',
        sections: {
          definition: '۱. تعریف ساده',
          whyExists: '۲. چرا وجود دارد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. چطور کار می‌کند',
          simulation: '۵. شبیه‌سازی مرحله‌به‌مرحله',
          example: '۶. مثال عملی کد',
          beforeAfter: '۷. مقایسه قبل/بعد',
          mistakes: '۸. اشتباه‌های رایج مبتدی‌ها',
          usage: '۹. کاربرد در پروژه واقعی',
          practice: '۱۰. تمرین یا mini-quiz',
          summary: '۱۱. جمع‌بندی ساده',
        },
        practiceQuestion: 'سؤال پیش‌بینی',
        practiceTask: 'تمرین کوتاه',
        beforeLabel: 'قبل',
        afterLabel: 'بعد',
        simulationIntro: 'پشت صحنه',
      },
      live: {
        eyebrow: 'تمرین زنده',
        title: 'Shared State Simulator',
        lead: 'state محلی، state بالا کشیده‌شده و state مشترک شبیه Context را با یک badge ساده مقایسه کن.',
        guidance: 'حالت‌ها را عوض کن و ببین پیش‌نمایش siblingها چگونه تغییر می‌کند.',
        stateNote:
          'این simulator فقط متعلق به همین صفحه است. از contextهای واقعی زبان یا پیشرفت استفاده نمی‌کند، چیزی را ذخیره نمی‌کند و XP هم نمی‌دهد.',
        modeLabel: 'چینش state',
        valueLabel: 'badge نمایشی',
        valueControlLabel: 'مقدار مشترک',
        localValueControlLabel: 'مقدار محلی',
        localValueHint: 'در این حالت هر sibling کپی خودش را نگه می‌دارد.',
        siblingLabels: {
          left: 'Sibling A',
          right: 'Sibling B',
        },
        localLabels: {
          leftControl: 'مقدار sibling چپ',
          rightControl: 'مقدار sibling راست',
          leftNote: 'این sibling کپی خودش را دارد.',
          rightNote: 'این sibling کپی خودش را دارد.',
        },
        modes: {
          local: {
            label: 'state محلی',
            summary: 'هر sibling کپی خودش را دارد.',
            valueControlLabel: 'برچسب badge',
            valueHint:
              'در اینجا می‌توانی مقدار دو sibling را از هم جدا کنی تا استقلال آن‌ها دیده شود.',
            panelNote: 'کپی مستقل',
            fits: 'وقتی یک بخش کوچک UI مالک value است، state محلی بهترین انتخاب است.',
            tradeoff: 'چون parent مشترکی وجود ندارد، پیش‌نمایش siblingها ممکن است از هم جدا شوند.',
            boundaryNote: 'اینجا provider boundary وجود ندارد.',
          },
          lifted: {
            label: 'state بالا کشیده‌شده',
            summary: 'نزدیک‌ترین parent مشترک یک value برای هر دو sibling را مالک می‌شود.',
            valueControlLabel: 'مقدار parent',
            valueHint: 'اکنون parent نزدیک مالک badge هر دو پیش‌نمایش sibling است.',
            panelNote: 'از نزدیک‌ترین parent مشترک می‌خواند.',
            fits: 'وقتی siblingهای نزدیک یک value یکسان می‌خواهند و parent نزدیک مالک درست است، state را بالا ببر.',
            tradeoff:
              'این value هنوز در همان parent متوقف می‌شود، پس componentهای دورتر به wiring بیشتری نیاز دارند.',
            boundaryNote: 'parent مشترک بالای هر دو sibling قرار دارد.',
          },
          context: {
            label: 'state مشترک شبیه Context',
            summary:
              'یک provider boundary بدون prop drilling همان value را به هر دو sibling می‌دهد.',
            valueControlLabel: 'مقدار provider',
            valueHint: 'اکنون provider boundary badge را به هر دو sibling می‌دهد.',
            panelNote: 'از provider boundary می‌خواند.',
            fits: 'وقتی بسیاری از componentهای دور به یک value از طریق یک provider boundary نیاز دارند، Context مناسب است.',
            tradeoff: 'Context برای هر keystroke یا تعامل کوچک محلی مناسب نیست.',
            boundaryNote: 'provider، consumerهایی را که به value مشترک نیاز دارند، wrap می‌کند.',
          },
        },
        boundary: {
          title: 'پیش‌نمایش provider boundary',
          outside: 'بیرون provider',
          provider: 'Provider',
          consumerA: 'Consumer A',
          consumerB: 'Consumer B',
          explanation: 'Provider، subtreeای را مشخص می‌کند که می‌تواند value مشترک را بخواند.',
          localNote: 'state محلی از provider boundary عبور نمی‌کند چون اصلاً providerی وجود ندارد.',
          currentValue: 'مقدار فعلی',
          noValue: 'هنوز هیچ value مشترکی انتخاب نشده است',
        },
        modeFitLabel: 'چرا این حالت مناسب است',
        modeTradeoffLabel: 'چرا این حالت شاید مناسب نباشد',
        valueOptions: [
          { value: 'starter', label: 'شروع' },
          { value: 'steady', label: 'پایدار' },
          { value: 'ready', label: 'آماده' },
        ],
      },
      quizTitle: 'مدل ذهنی state مشترک را محک بزن',
      tipsTitle: 'یادآوری‌های state مشترک',
      tipsIntro:
        'یادآوری‌های کوتاه، یک تمرین سریع، و مهم‌ترین اشتباه‌هایی که باید حواست به آن‌ها باشد.',
      tips: [
        'فقط به‌خاطر اینکه prop drilling آزاردهنده است، state را وارد Context نکن.',
        'وقتی فقط یک صفحه به draft موقت نیاز دارد، state را محلی نگه دار.',
        'از custom hookهایی مثل useLanguage و useLearningProgress استفاده کن تا مصرف‌کننده‌ها داخل provider بمانند.',
      ],
      mistakes: [
        'گذاشتن هر keystroke فرم در Context سراسری app.',
        'فراموش کردن اینکه consumer باید داخل provider boundary باشد.',
        'پخش کردن raw context objectها به‌جای یک API کوچک hook.',
      ],
      practicePrompts: [
        {
          id: 'context-practice-placement',
          title: 'خانه‌ی درست را پیدا کن',
          prompt:
            'تصمیم بگیر draft یک comment باید محلی بماند، بالا کشیده شود یا وارد Context شود.',
          hint: 'فقط وقتی state را دورتر ببر که واقعاً بخش بیشتری از tree به همان value نیاز داشته باشد.',
          expectedOutcome:
            'پاسخ خوب توضیح می‌دهد که owner نزدیک‌تر local یا lifted است مگر اینکه چند consumer دور به همان value نیاز داشته باشند.',
        },
        {
          id: 'context-practice-boundary',
          title: 'مرز را رسم کن',
          prompt: 'ردیابی کن که language چگونه به یک لینک ناوبری در این app می‌رسد.',
          hint: 'به useLanguage، localizedPath و app shell آگاه از locale فکر کن.',
          expectedOutcome:
            'لینک language را از Context می‌خواند و یک path محلی‌سازی‌شده داخل provider boundary می‌سازد.',
        },
      ],
      topics: {
        'prop-drilling': {
          title: 'Prop drilling',
          badge: 'tree',
          accent: '#2563eb',
          summary:
            'Prop drilling وقتی رخ می‌دهد که یک value از componentهایی عبور کند که از آن استفاده نمی‌کنند تا در نهایت یک child عمیق آن را بخواند.',
          definition:
            'Prop drilling یعنی همان prop را از لایه‌های componentهایی عبور دهیم که فقط آن را forward می‌کنند.',
          whyExists: 'این الگو نشان می‌دهد value در جای مناسبی برای شکل فعلی tree قرار نگرفته است.',
          problem:
            'componentهای میانی تبدیل به pass-throughهای شلوغ می‌شوند، در حالی که اصلاً به آن value نیاز ندارند.',
          howItWorks: [
            'یک parent value را مالک می‌شود.',
            'هر component میانی prop را forward می‌کند.',
            'در نهایت leaf component از آن استفاده می‌کند.',
          ],
          simulation: [
            {
              title: 'parent برچسب badge را مالک است',
              body: 'برچسب از بالای tree شروع می‌شود چون leaf به آن نیاز دارد.',
            },
            {
              title: 'componentهای میانی آن را بدون تغییر forward می‌کنند',
              body: 'این componentها از prop استفاده نمی‌کنند، اما مجبورند آن را بپذیرند و جلو بفرستند.',
            },
            {
              title: 'leaf در نهایت value را می‌خواند',
              body: 'component نهایی بعد از همه‌ی forwardingها از prop استفاده می‌کند.',
            },
          ],
          example: {
            title: 'Propی که زیادی سفر می‌کند',
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
              'Shell فقط value را forward می‌کند. اگر لایه‌های بیشتری همین‌طور رفتار کنند، prop drilling سخت‌خوان می‌شود.',
          },
          comparison: {
            before: `function Shell({ badgeLabel }) {
  return <Sidebar badgeLabel={badgeLabel} />;
}`,
            after: `const BadgeContext = createContext(null);`,
            takeaway:
              'Prop drilling معمولاً نشانه‌ای است که value باید جای دیگری در tree مالک داشته باشد.',
          },
          mistakes: [
            'فکر کردن هر propی که forward می‌شود بی‌ضرر است.',
            'اضافه کردن لایه‌های pass-through بیشتر به‌جای بازنگری در ownership.',
            'استفاده از Context وقتی فقط یک یا دو component نزدیک به value نیاز دارند.',
          ],
          realUsage: [
            'treeهای کوچک که فقط یک child به داده نیاز دارد.',
            'مثال‌های موقت برای توضیح data flow.',
            'نشانه‌ای که state باید به owner واقعی نزدیک‌تر شود.',
          ],
          practice: {
            question: 'Prop drilling معمولاً درباره‌ی state placement چه چیزی به تو می‌گوید؟',
            task: 'یک prop را در یک tree کوچک ردیابی کن و تصمیم بگیر owner باید جابه‌جا شود یا نه.',
          },
          summaryPoints: [
            'Prop drilling یک prop را از componentهایی عبور می‌دهد که از آن استفاده نمی‌کنند.',
            'اغلب یعنی value در بهترین جای tree مالکیت ندارد.',
            'وقتی زنجیره طولانی شد و consumerهای زیادی لازم داشتند، Context می‌تواند کمک کند.',
          ],
        },
        'state-placement': {
          title: 'State placement',
          badge: 'ownership',
          accent: '#0ea5e9',
          summary:
            'State placement یعنی تصمیم بگیریم یک value محلی بماند، به parent نزدیک منتقل شود، یا در provider زندگی کند.',
          definition: 'State placement انتخاب محل زندگی state در tree componentها است.',
          whyExists: 'جای‌گذاری خوب tree را ساده نگه می‌دارد و data flow را واضح می‌کند.',
          problem:
            'جای‌گذاری بد یا wiring اضافی می‌سازد یا هماهنگ نگه داشتن componentهای دور را سخت می‌کند.',
          howItWorks: [
            'به‌طور پیش‌فرض از local شروع کن.',
            'وقتی siblingهای نزدیک به value یکسان نیاز دارند، state را بالا ببر.',
            'فقط وقتی shared boundary وسیع‌تر لازم است از Context استفاده کن.',
          ],
          simulation: [
            {
              title: 'یک component draft فرم را مالک می‌شود',
              body: 'اگر فقط یک input از value استفاده کند، state محلی کافی است.',
            },
            {
              title: 'دو sibling به همان value نیاز دارند',
              body: 'نزدیک‌ترین parent مشترک مالک می‌شود و value را پایین می‌فرستد.',
            },
            {
              title: 'بسیاری از consumerهای دور یک value را می‌خواهند',
              body: 'provider boundary جای عملی‌تری برای مالکیت آن value می‌شود.',
            },
          ],
          example: {
            title: 'نزدیک‌ترین owner مفید را انتخاب کن',
            code: `function SearchBox() {
  const [query, setQuery] = useState('');
}

function Toolbar() {
  const [query, setQuery] = useState('');
  return <SearchBox query={query} onChange={setQuery} />;
}`,
            explanation:
              'Owner درست به این بستگی دارد که چند component به value نیاز دارند و چقدر در tree از هم دورند.',
          },
          comparison: {
            before: `// خیلی محلی
function Badge() {
  const [value, setValue] = useState('Ready');
}`,
            after: `// نزدیک‌ترین owner مفید
function Page() {
  const [value, setValue] = useState('Ready');
  return <Badge value={value} />;
}`,
            takeaway:
              'اول local شروع کن، فقط در صورت نیاز بالا ببر، و Context را برای shared boundaryهای بزرگ‌تر نگه دار.',
          },
          mistakes: [
            'بردن هر value به بیرون قبل از اینکه ثابت شود component دیگری به آن نیاز دارد.',
            'نگه داشتن state در جایی که siblingها باید همگام بمانند.',
            'پریدن مستقیم به Context سراسری به‌جای نزدیک‌ترین parent.',
          ],
          realUsage: [
            'draftهای form که متعلق به یک صفحه هستند.',
            'filterهای مشترک بین siblingهای نزدیک.',
            'state سراسری زبان یا پیشرفت.',
          ],
          practice: {
            question: 'چه زمانی state باید به parent برود به‌جای اینکه محلی بماند؟',
            task: 'یک feature کوچک انتخاب کن و بگو نزدیک‌ترین componentی که باید owner باشد کدام است.',
          },
          summaryPoints: [
            'state محلی پیش‌فرض است.',
            'وقتی siblingهای نزدیک value مشترک می‌خواهند، state را بالا ببر.',
            'وقتی scope اشتراک گسترده شد، Context را در نظر بگیر.',
          ],
        },
        'provider-consumer': {
          title: 'Provider و consumer',
          badge: 'boundary',
          accent: '#7c3aed',
          summary:
            'Provider یک value را به subtree می‌دهد و consumerها فقط وقتی داخل boundary هستند آن value را می‌خوانند.',
          definition:
            'Provider componentی است که Context value را برای descendants در دسترس قرار می‌دهد.',
          whyExists:
            'این الگو به بسیاری از descendants یک منبع حقیقت مشترک می‌دهد بدون اینکه props از هر لایه عبور کنند.',
          problem:
            'بدون provider، consumer چیزی برای خواندن ندارد و value مشترک نمی‌تواند امن جابه‌جا شود.',
          howItWorks: [
            'Provider subtreeای را که به value نیاز دارد wrap می‌کند.',
            'Descendantها consumer hook یا خود Context را می‌خوانند.',
            'بیرون provider، value به‌طور عمدی در دسترس نیست.',
          ],
          simulation: [
            {
              title: 'provider مقدار مشترک را تنظیم می‌کند',
              body: 'یک component source value را مالک می‌شود و آن را پایین در دسترس می‌گذارد.',
            },
            {
              title: 'descendantها value را می‌خوانند',
              body: 'consumerهای داخل boundary همان data مشترک را دریافت می‌کنند.',
            },
            {
              title: 'بیرون boundary هیچ چیزی shared نیست',
              body: 'componentی که بالا یا کنار provider است نمی‌تواند آن Context value را بخواند.',
            },
          ],
          example: {
            title: 'یک provider boundary ساده',
            code: `<ThemeContext.Provider value={theme}>
  <Sidebar />
  <Content />
</ThemeContext.Provider>`,
            explanation:
              'Provider boundary را مشخص می‌کند. هر چیزی پایین‌تر از آن می‌تواند value مشترک را بخواند اگر consumer یا hook درست را استفاده کند.',
          },
          comparison: {
            before: `// بدون boundary
<Sidebar theme={theme} />
<Content theme={theme} />`,
            after: `// boundary مشترک
<ThemeContext.Provider value={theme}>
  <Sidebar />
  <Content />
</ThemeContext.Provider>`,
            takeaway: 'Provider یک value مشترک را به مرز subtree تمیز تبدیل می‌کند.',
          },
          mistakes: [
            'فرض کردن اینکه هر componentی در هر جایی می‌تواند Context را بخواند.',
            'فراموش کردن اینکه consumer باید داخل provider متناظر باشد.',
            'قرار دادن provider آن‌قدر بالا که rerenderهای خیلی گسترده ایجاد کند.',
          ],
          realUsage: [
            'state تم، زبان و احراز هویت.',
            'state سراسری پیشرفت یا layout.',
            'هر داده‌ی مشترکی که بسیاری از descendants می‌خوانند.',
          ],
          practice: {
            question: 'Provider دقیقاً چه چیزی فراهم می‌کند؟',
            task: 'یک provider boundary دور دو siblingی که به همان value نیاز دارند بکش.',
          },
          summaryPoints: [
            'Provider مالک boundary مشترک است.',
            'consumerها فقط داخل همان boundary کار می‌کنند.',
            'این الگو وقتی مفید است که بسیاری از descendants به همان value نیاز دارند.',
          ],
        },
        'custom-context-hooks': {
          title: 'Custom context hooks',
          badge: 'hook',
          accent: '#d97706',
          summary:
            'یک custom hook دسترسی به Context خام را wrap می‌کند تا consumerها API کوچک‌تر و امن‌تری بگیرند و اگر provider نبود خطای واضح‌تری ببینند.',
          definition:
            'Custom context hook تابع کوچکی مثل useLanguage یا useLearningProgress است که Context را برای تو می‌خواند.',
          whyExists:
            'این کار کد component را تمیز نگه می‌دارد و از تکرار provider check در همه‌جا جلوگیری می‌کند.',
          problem:
            'استفاده‌ی مستقیم از Context خام API را شلوغ‌تر و سوءاستفاده از آن را آسان‌تر می‌کند.',
          howItWorks: [
            'hook درون خودش useContext را صدا می‌زند.',
            'اگر provider وجود نداشته باشد، خطای مفید و واضحی می‌اندازد.',
            'component فقط API باریک و عمدی را می‌بیند.',
          ],
          simulation: [
            {
              title: 'یک component داده‌ی مشترک را درخواست می‌کند',
              body: 'component به‌جای دست‌زدن به Context خام، یک hook را صدا می‌زند.',
            },
            {
              title: 'hook مرز provider را بررسی می‌کند',
              body: 'اگر provider وجود نداشته باشد، hook می‌تواند با یک پیام روشن fail fast کند.',
            },
            {
              title: 'component یک API متمرکز می‌گیرد',
              body: 'فقط valueها و actionهایی که مهم‌اند به صفحه داده می‌شوند.',
            },
          ],
          example: {
            title: 'app همین حالا از hookهای سفارشی استفاده می‌کند',
            code: `const { language, localizedPath } = useLanguage();
const { completedSet, markModuleComplete } = useLearningProgress();`,
            explanation:
              'این hookها جزئیات خام Context را پنهان می‌کنند و به page یک API کوچک‌تر، خواناتر و امن‌تر می‌دهند.',
          },
          comparison: {
            before: `// دسترسی خام به Context همه‌جا
const language = useContext(LanguageContext);`,
            after: `// hook سفارشی متمرکز
const { language, localizedPath } = useLanguage();`,
            takeaway: 'hook سفارشی استفاده از Context را ساده‌تر و قابل‌guardتر می‌کند.',
          },
          mistakes: [
            'صادرات دوباره‌ی Context خام به همه‌جا.',
            'حذف provider check و fail کردن دیرهنگام با خطای گیج‌کننده.',
            'اجازه دادن به hook برای برگرداندن چیزهای بیش از حد وقتی component فقط بخش کوچکی را نیاز دارد.',
          ],
          realUsage: [
            'hookهای زبان و پیشرفت در همین app.',
            'هر Context سراسری که باید شبیه یک utility کوچک احساس شود.',
            'APIهای امن‌تر وابسته به provider.',
          ],
          practice: {
            question: 'چرا دسترسی به Context را در یک custom hook wrap می‌کنیم؟',
            task: 'یک جمله بنویس که ارزش useLanguage یا useLearningProgress را توضیح دهد.',
          },
          summaryPoints: [
            'custom hookها جزئیات خام Context را پنهان می‌کنند.',
            'آن‌ها می‌توانند با خطای مفید provider را بررسی کنند.',
            'کد component را کوتاه‌تر و خواناتر می‌کنند.',
          ],
        },
        'language-progress-contexts': {
          title: 'Contextهای زبان و پیشرفت',
          badge: 'سراسری',
          accent: '#059669',
          summary:
            'این app برای زبان و پیشرفت یادگیری از Context استفاده می‌کند چون بسیاری از routeها و componentها به همان valueها نیاز دارند.',
          definition:
            'LanguageContext و LearningProgressContext لایه‌های state مشترک سراسری هستند که در چند صفحه استفاده می‌شوند.',
          whyExists:
            'زبان، پیشوند routeها، direction متن، linkهای محلی‌سازی‌شده و copy ترجمه‌شده را کنترل می‌کند. پیشرفت هم ماژول‌های کامل‌شده، XP، وضعیت quiz، badgeها و reset را نگه می‌دارد.',
          problem:
            'اگر این valueها فقط در یک صفحه زندگی کنند، بقیه app هر بار که هنرجو جابه‌جا شود از sync خارج می‌شوند.',
          howItWorks: [
            'useLanguage زبان فعلی و helper مربوط به localizedPath را می‌خواند.',
            'useLearningProgress وضعیت completion، XP، badgeها و quiz را می‌خواند.',
            'هر دو hook رفتار shared را در سراسر مرز routeها در دسترس نگه می‌دارند.',
          ],
          simulation: [
            {
              title: 'یک درس زبان را از Context می‌خواند',
              body: 'page از language برای ساختن linkهای محلی‌سازی‌شده و هم‌راستا نگه داشتن shell با locale فعلی استفاده می‌کند.',
            },
            {
              title: 'همان app پیشرفت را هم از Context می‌خواند',
              body: 'completion، XP، badgeها و quizهای حل‌شده حتی وقتی هنرجو صفحه را عوض می‌کند در دسترس می‌مانند.',
            },
            {
              title: 'provider boundary بالای app shell قرار دارد',
              body: 'چون providerها بالای درس‌ها قرار دارند، بسیاری از routeها می‌توانند همان valueها را بخوانند.',
            },
          ],
          example: {
            title: 'این app همین حالا از هر دو hook استفاده می‌کند',
            code: `const { language, localizedPath } = useLanguage();
const { completedSet, markModuleComplete } = useLearningProgress();`,
            explanation:
              'صفحه‌های درس از این hookها استفاده می‌کنند تا رفتار زبان و پیشرفت در کل app هماهنگ بماند.',
          },
          comparison: {
            before: `// فقط محلی برای یک صفحه
const language = 'fa';`,
            after: `// مشترک در سراسر app
const { language, localizedPath } = useLanguage();`,
            takeaway: 'زبان و پیشرفت concernهای cross-route هستند، پس جای آن‌ها در Context است.',
          },
          mistakes: [
            'تغییر رفتار واقعی زبان یا پیشرفت در simulator.',
            'فرض کردن اینکه یک صفحه باید valueهایی را مالک شود که چند route به آن نیاز دارند.',
            'دیدن Context به‌عنوان storage layer به‌جای مرز state مشترک.',
          ],
          realUsage: [
            'پیشوندهای route و linkهای محلی‌سازی‌شده.',
            'completion، XP، badgeها و وضعیت quiz.',
            'رفتار reset و switch زبان در app shell.',
          ],
          practice: {
            question: 'چرا language و progress در این app نامزدهای خوبی برای Context هستند؟',
            task: 'یک جای route-level و یک جای app-shell-level را نام ببر که این valueها در آن استفاده می‌شوند.',
          },
          summaryPoints: [
            'language و progress چندین route را در بر می‌گیرند.',
            'Context آن‌ها را در سراسر app shell در دسترس نگه می‌دارد.',
            'simulator این درس از providerهای واقعی استفاده نمی‌کند.',
          ],
        },
        'context-tradeoffs': {
          title: 'Tradeoffهای Context',
          badge: 'limits',
          accent: '#db2777',
          summary:
            'Context مشکل sharing را حل می‌کند، اما جایگزین هر value local یا هر مسیر render نیست.',
          definition:
            'Tradeoffهای Context دلیل‌هایی هستند برای اینکه stateهای کوچک، موقت یا فقط موردنیاز یک نقطه‌ی کوچک را داخل Context نگذاریم.',
          whyExists:
            'providerهای بزرگ می‌توانند rerender گسترده ایجاد کنند و ownership را پنهان کنند، در حالی که local state ساده‌تر است.',
          problem:
            'اگر Context مالک هر keystroke یا هر draft مخصوص یک صفحه باشد، app سخت‌تر فهمیده و بهینه می‌شود.',
          howItWorks: [
            'UIهای ایزوله را local نگه دار.',
            'state را فقط تا نزدیک‌ترین owner واقعی بالا ببر.',
            'وقتی boundary shared وسیع و پایدار است از Context استفاده کن.',
          ],
          simulation: [
            {
              title: 'یک draft کوچک local شروع می‌شود',
              body: 'یک field فرم می‌تواند داخل یک component بماند و لازم نیست به state سراسری تبدیل شود.',
            },
            {
              title: 'یک value shared در نزدیک‌ترین owner متوقف می‌شود',
              body: 'siblingهای نزدیک می‌توانند یک parent مشترک داشته باشند بدون اینکه کل app rerender شود.',
            },
            {
              title: 'فقط concernهای shared وسیع وارد Context می‌شوند',
              body: 'language، progress یا دیگر valueهای cross-route دلیل خوبی برای provider boundary هستند.',
            },
          ],
          example: {
            title: 'هر valueی جای Context نیست',
            code: `const [draft, setDraft] = useState('');
const [selectedTab, setSelectedTab] = useState('summary');`,
            explanation:
              'اگر فقط یک صفحه یا یک کنترل به value نیاز دارد، state محلی ساده‌تر و قابل‌فهم‌تر است.',
          },
          comparison: {
            before: `// Context برای همه‌چیز
<DraftContext.Provider value={draft}>`,
            after: `// اول state محلی
const [draft, setDraft] = useState('');`,
            takeaway:
              'Context مفید است، اما فقط وقتی boundary و نیاز به sharing واقعاً آن را توجیه کنند.',
          },
          mistakes: [
            'تبدیل Context به پاسخ پیش‌فرض فقط از روی راحتی.',
            'گذاشتن جزئیات موقتی UI در یک provider گسترده.',
            'فراموش کردن اینکه valueهای provider می‌توانند descendants زیادی را rerender کنند.',
          ],
          realUsage: [
            'تعامل‌های موقت live lab محلی می‌مانند.',
            'فقط valueهای cross-route وارد Context می‌شوند.',
            'کار معماری آینده می‌تواند جای providerهای بزرگ‌تر را مشخص کند.',
          ],
          practice: {
            question: 'Context چه زمانی ابزار درستی نیست؟',
            task: 'یک نوع state را نام ببر که معمولاً باید local بماند.',
          },
          summaryPoints: [
            'Context sharing را حل می‌کند، نه هر مشکل state را.',
            'state محلی هنوز پیش‌فرض UIهای کوچک و ایزوله است.',
            'فقط وقتی boundary و نیاز به sharing گسترده باشد از Context استفاده کن.',
          ],
        },
      },
    },
    'project-architecture': {
      stageLabel: 'گام ۹',
      title: 'معماری پروژه',
      hero: {
        eyebrow: 'گام ۹',
        title: 'معماری پروژه',
        lead: 'این درس repo فعلی را به مرزهای ownership تبدیل می‌کند تا ببینی routeها را چه لایه‌ای کنترل می‌کند، lesson composition کجا زندگی می‌کند، و چرا feature مربوط به Task Manager باید داخل دامنه‌ی خودش بماند.',
        primaryAction: 'این برش معماری را فهمیدم',
        secondaryAction: 'رفتن به تست و دسترس‌پذیری',
      },
      summary: {
        intro:
          'اینجا معماری بیشتر از هرچیز درباره‌ی ownership است. route tree، pageهای درس، panelهای reusable، کد feature، hookها، داده‌های manifest و محتوای محلی‌سازی‌شده هرکدام مسئله‌ی متفاوتی را حل می‌کنند و باید مرز خودشان را نگه دارند.',
        points: [
          'App routes مشخص می‌کنند کدام page render شود',
          'pageها behavior مخصوص lesson را compose می‌کنند',
          'TaskManagerLab باید در مالکیت feature بماند',
          'hookها و contextها الگوهای دسترسی سراسری را می‌دهند',
          'manifest و محتوای محلی‌سازی‌شده باید هماهنگ بمانند',
          'reuse فقط وقتی درست است که behavior واقعاً generic باشد',
        ],
        prerequisites: [
          'آشنایی با pageهای درسی در سطح route',
          'پایه‌های Context، custom hook و state مشترک',
          'شناخت capstone فعلی Task Manager',
          'آشنایی با فایل‌های محتوای محلی‌سازی‌شده‌ی course',
        ],
        keyPoints: [
          'route، manifest، محتوای محلی‌سازی‌شده و جریان CTA باید با هم تغییر کنند',
          'state صفحه تا وقتی لایه‌ی دیگری واقعاً به آن نیاز ندارد باید روی همان page بماند',
          'shared componentها باید thin و generic بمانند',
          'کد feature مالک CRUD، persistence و reward behavior مخصوص خودش است',
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'repo را مثل معماری بخوان',
        lead: 'یک مرز را انتخاب کن و ببین چه چیزی را مالک است، چرا وجود دارد، و وقتی ownership مبهم می‌شود معمولاً چه مشکلی پیش می‌آید.',
        chooserLabel: 'یک موضوع معماری را انتخاب کن',
        sections: {
          definition: '۱. تعریف',
          whyExists: '۲. چرا وجود دارد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. در این repo چطور کار می‌کند',
          example: '۵. مثال عملی',
          mistakes: '۶. اشتباه‌های رایج',
          usage: '۷. کاربرد در app واقعی',
          practice: '۸. تمرین',
          summary: '۹. نکته‌های خلاصه',
        },
        practicePromptTitle: 'تمرین مرزبندی',
        summaryTitle: 'چه چیزی را نگه داریم',
      },
      live: {
        eyebrow: 'اکسپلورر معماری',
        title: 'نقشه‌خوان معماری',
        lead: 'یک لایه را انتخاب کن و بدون تغییر دادن state واقعی app، مرز ownership آن را بررسی کن.',
        guidance:
          'از این نقشه به‌عنوان راهنمای read-only ownership استفاده کن. اینجا می‌بینی هر لایه چه چیزی را باید مالک باشد و چه چیزی باید بیرون بماند.',
        stateNote:
          'این اکسپلورر در مالکیت page است، فقط خواندنی است، چیزی را ماندگار نمی‌کند و XP هم نمی‌دهد. هیچ تغییری در app واقعی ایجاد نمی‌کند.',
        selectorLabel: 'یک لایه را انتخاب کن',
        selectedLabel: 'لایه‌ی انتخاب‌شده',
        readOnlyNote:
          'این اکسپلورر فایل‌ها را ویرایش نمی‌کند، کدی را جابه‌جا نمی‌کند و رفتار Task Manager را تغییر نمی‌دهد. فقط یک نقشه‌ی مرزبندی است.',
        sections: {
          examples: 'فایل‌های نمونه',
          owns: 'این لایه چه چیزی را مالک است',
          avoids: 'این لایه چه چیزی را نباید مالک باشد',
        },
        layers: {
          'app-routes': {
            label: 'routeهای app',
            decisionLabel: 'مرز route/page',
            responsibility:
              'route tree برنامه تعیین می‌کند برای هر path کدام page render شود، locale guard کجا قرار بگیرد و recovery مربوط به not-found چطور انجام شود.',
            owns: [
              'route tree سطح بالا در `src/App.jsx`',
              'جای locale guard زیر `/:locale`',
              'مرز routeهای pageهای درس',
              'wiring مربوط به fallback و not-found',
            ],
            doesNotOwn: ['lesson copy', 'Task Manager CRUD', 'داده‌ی جواب quiz'],
            exampleFiles: ['src/App.jsx'],
            whyBoundaryMatters:
              'اگر ownership route وارد pageها یا کد feature شود، فهم navigation سخت‌تر می‌شود و behavior آگاه از locale از هم می‌پاشد.',
          },
          pages: {
            label: 'pageها',
            decisionLabel: 'مالکیت صفحه',
            responsibility:
              'pageها تجربه‌ی route-level هر lesson را compose می‌کنند، state مخصوص صفحه را نگه می‌دارند و completion CTA را به ماژول درست وصل می‌کنند.',
            owns: [
              'lesson composition با `LessonTemplate`',
              'state مربوط به topic انتخاب‌شده',
              'state مربوط به explorer فقط خواندنی',
              'جریان CTA به lesson بعدی',
            ],
            doesNotOwn: [
              'behavior generic panelها',
              'Task Manager CRUD داخلی',
              'قواعد global language provider',
            ],
            exampleFiles: ['src/pages/ProjectArchitecturePage.jsx', 'src/pages/ProjectPage.jsx'],
            whyBoundaryMatters:
              'اگر pageها دیگر behavior مخصوص خودشان را مالک نباشند، shared componentها تبدیل به mega-component می‌شوند و منطق feature به بالا نشت می‌کند.',
          },
          'reusable-components': {
            label: 'componentهای قابل‌استفاده‌مجدد',
            decisionLabel: 'قابل‌استفاده‌مجدد',
            responsibility:
              'componentهای reusable سطح‌های generic برای layout و surface behavior می‌دهند تا pageهای مختلف بتوانند آن‌ها را compose کنند بدون اینکه lesson-specific logic را مالک شوند.',
            owns: [
              'سطح‌های generic برای summary، quiz، lab و tips',
              'behavior مربوط به shell ترکیب',
              'قاب‌بندی ثابت sectionها بین lessonها',
            ],
            doesNotOwn: [
              'state explorer مخصوص page',
              'storage migrationهای feature',
              'ruleهای CRUD مربوط به feature',
            ],
            exampleFiles: [
              'src/components/LessonTemplate.jsx',
              'src/components/LiveLabFrame.jsx',
              'src/components/QuizPanel.jsx',
              'src/components/TipsPanel.jsx',
            ],
            whyBoundaryMatters:
              'reuse فقط وقتی امن است که behavior generic بماند. وقتی shared component منطق page را مالک شود، نگه‌داری همه‌ی lessonها سخت‌تر می‌شود.',
          },
          'task-manager-feature': {
            label: 'قابلیت Task Manager',
            decisionLabel: 'مالکیت قابلیت',
            responsibility:
              'feature مربوط به Task Manager مالک منطق دامنه‌ی خودش است: CRUD تسک‌ها، filter، search، state فرم، persistence و XP behavior مخصوص تسک‌ها.',
            owns: [
              'جریان CRUD و ویرایش تسک',
              'behavior مربوط به filter و search',
              'state فرم تسک',
              'persistence مربوط به feature و actionهای XP مخصوص تسک',
            ],
            doesNotOwn: [
              'تصمیم‌های route tree',
              'layout مربوط به lesson template',
              'behavior سراسری language provider',
            ],
            exampleFiles: ['src/features/taskManager/TaskManagerLab.jsx'],
            whyBoundaryMatters:
              'اگر منطق feature وارد shared componentهای درس یا pageها شود، capstone سخت‌تر تست می‌شود و تغییر دادن امن آن سخت‌تر خواهد شد.',
          },
          'context-providers': {
            label: 'providerهای Context',
            decisionLabel: 'زمینه‌ی سراسری',
            responsibility:
              'providerهای Context مالک APIهای سراسری زبان و progress هستند که routeهای زیادی باید آن‌ها را به‌صورت هماهنگ بخوانند.',
            owns: [
              'state و helperهای language provider',
              'state مربوط به progress، completion، XP و badgeها',
              'APIهای provider برای نیازهای سراسری',
            ],
            doesNotOwn: [
              'ruleهای محلی feature مربوط به Task Manager',
              'state موقت explorer',
              'state شبیه‌ساز مخصوص lesson',
            ],
            exampleFiles: [
              'src/context/LanguageContext.jsx',
              'src/context/LearningProgressContext.jsx',
            ],
            whyBoundaryMatters:
              'Context باید روی concernهای مشترکِ وسیع متمرکز بماند. وقتی جزئیات UI محلی وارد آن شود، ownership مبهم می‌شود و دامنه‌ی updateها بی‌دلیل بزرگ می‌شود.',
          },
          hooks: {
            label: 'hookها',
            decisionLabel: 'قابل‌استفاده‌مجدد',
            responsibility:
              'hookها الگوهای دسترسی تکراری را بیرون می‌کشند تا pageها مجبور نباشند wiring سطح پایین را دوباره بنویسند.',
            owns: [
              'الگوهای reusable مثل `useCourseContent`',
              'APIهای متمرکز برای خواندن داده‌های مشترک',
              'helperهای سبک برای pageها و componentها',
            ],
            doesNotOwn: [
              'ساختار routeها',
              'ruleهای CRUD مربوط به feature',
              'تألیف محتوای محلی‌سازی‌شده',
            ],
            exampleFiles: ['src/hooks/useCourseContent.js'],
            whyBoundaryMatters:
              'hookها باید الگوهای دسترسی تکراری را پنهان کنند، نه اینکه خانه‌ی جایگزین برای state صفحه یا محتوای محصول شوند.',
          },
          'course-manifest': {
            label: 'manifest دوره',
            decisionLabel: 'لایه‌ی محتوا و داده',
            responsibility:
              'course manifest ترتیب ماژول‌ها، path، accent، XP reward و nextId را تعریف می‌کند تا navigation و progress هماهنگ بمانند.',
            owns: [
              'ترتیب ماژول‌ها',
              'metadata مربوط به path',
              'metadata مربوط به accent و XP reward',
              'رابطه‌ی بین next moduleها',
            ],
            doesNotOwn: ['page rendering', 'lesson copy محلی‌سازی‌شده', 'منطق feature'],
            exampleFiles: ['src/data/courseManifest.js'],
            whyBoundaryMatters:
              'اگر metadata ماژول بین pageها پخش شود، جریان route و behavior مربوط به progress خیلی زود از sync خارج می‌شود.',
          },
          'localized-course-content': {
            label: 'محتوای محلی‌سازی‌شده‌ی دوره',
            decisionLabel: 'لایه‌ی محتوا و داده',
            responsibility:
              'فایل‌های محتوای محلی‌سازی‌شده مالک copy ترجمه‌شده‌ی lesson، exampleها، داده‌ی quizها، tipها و labelهای فارسی و انگلیسی هستند.',
            owns: [
              'hero و summary محلی‌سازی‌شده‌ی lesson',
              'توضیح‌ها و exampleهای topicها',
              'promptها و answerهای quiz',
              'tipها، mistakeها و practice promptها',
            ],
            doesNotOwn: [
              'state مربوط به page',
              'منطق storage مربوط به feature',
              'تصمیم‌های routing',
            ],
            exampleFiles: ['src/i18n/course/fa.js', 'src/i18n/course/en.js'],
            whyBoundaryMatters:
              'وقتی route، manifest و محتوای محلی‌سازی‌شده با هم تغییر نکنند، یکی از localeها عقب می‌افتد و جریان lesson خراب می‌شود.',
          },
        },
      },
      quizTitle: 'مرزهای معماری را محک بزن',
      tipsTitle: 'یادآوری‌های معماری',
      tipsIntro:
        'از این یادآوری‌ها استفاده کن تا هنگام ساختن lessonها و featureهای بعدی، مرز ownership را واضح نگه داری.',
      tips: [
        'معماری بیشتر از هرچیز ownership است، نه مرتب بودن پوشه‌ها.',
        'هر UI تکراری نیاز به shared component ندارد.',
        'هر stateی هم نباید وارد Context شود.',
        'TaskManagerLab یک feature است، نه یک widget عمومیِ lesson.',
        '`LessonTemplate` باید thin و compositional بماند.',
        'تغییرهای route، content، manifest و CTA باید با هم هماهنگ بمانند.',
      ],
      mistakes: [
        'بردن state explorer مخصوص page به shared componentها.',
        'برخورد کردن با منطق CRUD feature مثل زیرساخت reusable برای lessonها.',
        'اضافه کردن Context سراسری برای interactionهای خیلی کوچک و محلی.',
        'به‌روزرسانی یک locale یا یک route بدون هماهنگ کردن manifest و content.',
      ],
      practicePrompts: [
        {
          id: 'project-architecture-boundary-owner',
          title: 'owner را نام ببر',
          prompt:
            'یک behavior در این repo انتخاب کن و توضیح بده در مالکیت page است، در مالکیت feature است، در مرز state سراسری است یا رفتار مربوط به shared component است.',
          hint: 'می‌توانی route tree، ProjectPage، TaskManagerLab یا useCourseContent را مثال بزنی.',
          expectedOutcome:
            'پاسخ خوب لایه‌ی owner را نام می‌برد و توضیح می‌دهد لایه‌های نزدیک‌تر چرا نباید این مسئولیت را جذب کنند.',
        },
        {
          id: 'project-architecture-alignment',
          title: 'یک تغییر هماهنگ را ردیابی کن',
          prompt:
            'فرض کن یک lesson route جدید اضافه می‌کنی. بگو کدام فایل‌ها باید هماهنگ بمانند تا navigation، content و progress درست کار کنند.',
          hint: 'از route tree، manifest، محتوای محلی‌سازی‌شده و CTA صفحه‌ی قبلی شروع کن.',
          expectedOutcome:
            'پاسخ خوب route، manifest، localized content و CTA را کنار هم نام می‌برد، نه اینکه فقط یک page file بسازد.',
        },
      ],
      topics: {
        'app-map-routes': {
          title: 'نقشه‌ی برنامه و routeها',
          badge: 'مسیرها',
          summary:
            'route tree داخل `src/App.jsx` نقشه‌ی سطح بالای محصول آموزشی است. این لایه تصمیم می‌گیرد کدام page دیده شود و مرزهای locale-aware از کجا شروع شوند.',
          definition:
            'نقشه‌ی app همان route treeای است که pathهای URL را به page componentها زیر ساختار localeهای پشتیبانی‌شده وصل می‌کند.',
          whyExists:
            'یک owner واحد برای routeها باعث می‌شود `/fa/...` و `/en/...` هماهنگ بمانند و behavior مربوط به recovery قابل‌پیش‌بینی شود.',
          problem:
            'بدون owner شفاف برای routeها، localeهای پشتیبانی‌نشده، URLهای lesson و not-found خیلی سریع از هم فاصله می‌گیرند.',
          howItWorks: [
            {
              title: '`src/App.jsx` مالک route tree است',
              body: 'همه‌ی routeهای lesson در یک جا ثبت می‌شوند تا محصول یک نقشه‌ی سطح بالای خوانا داشته باشد.',
            },
            {
              title: 'locale guard بالای routeهای lesson می‌نشیند',
              body: 'segment مربوط به `:locale` و guard آن، قبل از render شدن pageهای درس از مرز localeهای پشتیبانی‌شده محافظت می‌کنند.',
            },
            {
              title: 'fallback routeها pathهای بد را recover می‌کنند',
              body: 'pathهای ناشناخته به behavior مربوط به not-found می‌رسند و کاربر را روی صفحه‌ی خالی رها نمی‌کنند.',
            },
          ],
          example: {
            title: 'یک route tree، چندین lesson page',
            code: `<Route path=":locale" element={<LocaleRouteGuard />}>
  <Route element={<AppShell />}>
    <Route path="context-state" element={<ContextSharedStatePage />} />
    <Route path="project-architecture" element={<ProjectArchitecturePage />} />
    <Route path="testing-accessibility" element={<TestingAccessibilityPage />} />
    <Route path="project" element={<ProjectPage />} />
  </Route>
</Route>`,
            explanation:
              'route tree مشخص می‌کند کدام lesson page render شود. خود pageها نباید نقشه‌ی سراسری routeها را مالک شوند.',
          },
          mistakes: [
            'اینکه pageها هرکدام برای خودشان route structure بسازند.',
            'قاتی کردن locale پشتیبانی‌نشده با handling مربوط به not-found.',
            'فراموش کردن این نکته که lesson جدید باید زیر shell آگاه از locale قرار بگیرد.',
          ],
          realUsage: [
            'اضافه کردن path مربوط به lesson جدید.',
            'محافظت از `/fa` و `/en` به‌عنوان localeهای پشتیبانی‌شده.',
            'یکدست نگه داشتن behavior مربوط به not-found بین lessonها.',
          ],
          practice: {
            prompt:
              'اگر یک lesson page جدید اضافه کنی، `src/App.jsx` قبل از render شدن آن page باید چه چیزی را مالک باشد؟',
          },
          summaryPoints: [
            '`src/App.jsx` owner مربوط به routeها است.',
            'locale guard باید بالای routeهای lesson قرار بگیرد.',
            'مرز routeها تعیین می‌کند برای یک URL مشخص کدام page render شود.',
          ],
        },
        'pages-components': {
          title: 'Pageها و componentهای reusable',
          badge: 'ترکیب',
          summary:
            'pageها composition و state مخصوص lesson را مالک هستند، در حالی که componentهای reusable فقط سطح‌های generic می‌دهند و نباید behavior صفحه را جذب کنند.',
          definition:
            'page یک owner در سطح route است که lesson را compose می‌کند. reusable component یک سطح generic است که بین pageهای زیادی استفاده می‌شود.',
          whyExists:
            'جدا کردن ownership مربوط به page از reusable surfaceها باعث می‌شود lessonها flexible بمانند و shared code تبدیل به controller بزرگ نشود.',
          problem:
            'اگر panel مشترک شروع به مالک شدن منطق page کند، هم page سخت‌خوان می‌شود و هم shared component حجیم و مبهم می‌شود.',
          howItWorks: [
            {
              title: 'pageها lesson را compose می‌کنند',
              body: 'یک page انتخاب می‌کند کدام panelها نمایش داده شوند، چه داده‌ای بگیرند و کدام state محلی تجربه‌ی lesson را جلو ببرد.',
            },
            {
              title: '`LessonTemplate` باید thin بماند',
              body: 'template فقط layout تب‌ها و hero wiring را می‌دهد، نه state explorer، نه انتخاب topic و نه ruleهای feature را.',
            },
            {
              title: 'panelها generic می‌مانند',
              body: 'componentهایی مثل `SummaryPanel`، `LiveLabFrame`، `QuizPanel` و `TipsPanel` فقط سطح reusable می‌دهند و content را از بیرون می‌گیرند.',
            },
          ],
          example: {
            title: 'state صفحه با panelهای generic',
            code: `const [selectedTopicId, setSelectedTopicId] = useState('app-map-routes');

<LessonTemplate
  summary={{ ... }}
  renderLive={() => (
    <div className="stack">
      <LiveLabFrame>{/* explorer در مالکیت page */}</LiveLabFrame>
      <DeepDivePanel activeId={selectedTopicId} onSelect={setSelectedTopicId} />
    </div>
  )}
/>`,
            explanation:
              'page مالک state است و content را به surfaceهای generic می‌دهد. shared componentها لازم نیست بدانند این state چرا وجود دارد.',
          },
          mistakes: [
            'بردن state صفحه به `LessonTemplate` فقط چون چند page تب دارند.',
            'دیدن panelهای shared به‌عنوان owner منطق lesson.',
            'ساختن یک lesson component غول‌آسا به‌جای compose کردن surfaceهای متمرکز.',
          ],
          realUsage: [
            'ProjectArchitecturePage مالک explorer و topic selection است.',
            'ProjectPage صفحه‌ی capstone را با panelهای generic compose می‌کند.',
            'panelهای shared بین lessonهای مختلف reusable باقی می‌مانند.',
          ],
          practice: {
            prompt:
              'توضیح بده چرا `LessonTemplate` نباید لایه‌ی معماری انتخاب‌شده در این lesson را مالک باشد.',
          },
          summaryPoints: [
            'pageها behavior در سطح route را مالک هستند.',
            'componentهای reusable باید generic بمانند.',
            '`LessonTemplate` یک composition shell است، نه controller مخصوص page.',
          ],
        },
        'features-state': {
          title: 'قابلیت‌ها و state در مالکیت feature',
          badge: 'دامنه',
          summary:
            'capstone مربوط به Task Manager یک دامنه‌ی feature است با ruleهای خودش؛ نه یک fragment عمومیِ lesson که باید وارد زیرساخت shared course شود.',
          definition:
            'state در مالکیت feature یعنی منطقی که متعلق به یک دامنه‌ی محصول است و باید کنار همان پیاده‌سازی feature بماند.',
          whyExists:
            'Task Manager ruleهای CRUD، persistence، filter، search و XP behavior خودش را دارد و این‌ها به pageهای عمومی lesson تعلق ندارند.',
          problem:
            'اگر منطق feature وارد کد shared lesson شود، نگه‌داری خود feature سخت‌تر می‌شود و lessonهای نامرتبط complexity اضافه می‌گیرند.',
          howItWorks: [
            {
              title: '`features/taskManager` مالک دامنه است',
              body: 'پوشه‌ی feature جریان تسک، behavior مربوط به storage و ruleهای UX را نزدیک به کدی نگه می‌دارد که از آن‌ها استفاده می‌کند.',
            },
            {
              title: '`ProjectPage` compose می‌کند اما جذب نمی‌کند',
              body: 'lesson مربوط به project، `TaskManagerLab` را render می‌کند اما state داخلی feature را دوباره مالک نمی‌شود.',
            },
            {
              title: 'shared componentهای lesson بیرون دامنه می‌مانند',
              body: 'panelهای generic می‌توانند feature را wrap کنند، اما نباید owner مربوط به CRUD یا storage logic شوند.',
            },
          ],
          example: {
            title: 'composition بدون انتقال ownership',
            code: `<LiveLabFrame
  label={content.modules.project.live.eyebrow}
  title={content.modules.project.live.title}
>
  <TaskManagerLab />
</LiveLabFrame>`,
            explanation:
              'page فقط feature را داخل یک سطح lesson compose می‌کند. خود feature همچنان owner رفتار داخلی خودش است.',
          },
          mistakes: [
            'بردن helperهای CRUD تسک به shared componentها فقط چون UI داخل lesson دیده می‌شود.',
            'برخورد کردن با persistence مربوط به Task Manager مثل state متعلق به page.',
            'refactor کردن feature فقط برای اینکه ظاهر pageهای lesson یکنواخت‌تر شود.',
          ],
          realUsage: [
            'CRUD و جریان ویرایش تسک.',
            'behavior مربوط به search، filter و storage.',
            'actionهای XP مخصوص تسک در capstone.',
          ],
          practice: {
            prompt:
              'چرا `TaskManagerLab` باید در مالکیت feature بماند با اینکه `ProjectPage` آن را render می‌کند؟',
          },
          summaryPoints: [
            'منطق feature کنار feature می‌ماند.',
            'pageهای project فقط feature را compose می‌کنند و دوباره مالک آن نمی‌شوند.',
            'TaskManagerLab نباید وارد زیرساخت shared lesson شود.',
          ],
        },
        'hooks-contexts': {
          title: 'Hookها و contextها',
          badge: 'دسترسی مشترک',
          summary:
            'hookها و contextها درباره‌ی الگوهای دسترسی تکراری و مرزهای state سراسری app هستند، نه اینکه هر جزئیات محلی را در repo جذب کنند.',
          definition:
            'hookها الگوهای دسترسی تکراری را بیرون می‌کشند و contextها مرز state مشترک سراسری را برای valueهایی می‌سازند که routeهای زیادی به آن‌ها نیاز دارند.',
          whyExists:
            'این کار pageها را از wiring سطح پایین نجات می‌دهد و concernهای مشترک وسیع مثل زبان و progress را در سراسر routeها در دسترس نگه می‌دارد.',
          problem:
            'وقتی hookها یا contextها شروع به مالک شدن جزئیات route، ruleهای feature یا interactionهای بسیار کوچک محلی کنند، معماری خیلی سریع مبهم می‌شود.',
          howItWorks: [
            {
              title: '`useCourseContent` محتوای course را می‌دهد',
              body: 'pageها یک hook را صدا می‌زنند تا محتوای محلی‌سازی‌شده را بگیرند، نه اینکه هر بار خودشان داده‌ی localeها را انتخاب کنند.',
            },
            {
              title: '`useLanguage` و `useLearningProgress` state سراسری app را می‌دهند',
              body: 'pageها زبان، localized path، completion، XP و badgeها را از طریق APIهای کوچک می‌گیرند.',
            },
            {
              title: 'جزئیات محلی هنوز محلی می‌مانند',
              body: 'state موقت explorer و interactionهای مخصوص تب‌ها روی همان page می‌مانند و وارد providerها نمی‌شوند.',
            },
          ],
          example: {
            title: 'hookهای متمرکز به‌جای wiring سطح پایین',
            code: `const content = useCourseContent();
const { language, localizedPath } = useLanguage();
const { markModuleComplete } = useLearningProgress();`,
            explanation:
              'page یک API کوچک و خوانا می‌گیرد و لازم نیست بداند contextها یا localizations چگونه درونشان wiring شده‌اند.',
          },
          mistakes: [
            'استفاده از Context به‌عنوان خانه‌ی پیش‌فرض برای stateهای محلی UI.',
            'تبدیل hookها به owner جایگزین برای route structure یا ruleهای feature.',
            'دور زدن APIهای متمرکز hook و پخش کردن دسترسی سطح پایین در همه‌جا.',
          ],
          realUsage: [
            'خواندن محتوای محلی‌سازی‌شده‌ی course.',
            'ساختن CTAهای locale-aware.',
            'behavior مربوط به completion ماژول و progress.',
          ],
          practice: {
            prompt:
              'یک چیزی را نام ببر که `useCourseContent` باید مالک باشد و یک چیزی را که قطعاً نباید مالک باشد.',
          },
          summaryPoints: [
            'hookها الگوهای دسترسی تکراری را می‌دهند.',
            'contextها مرز state مشترک سراسری را تعریف می‌کنند.',
            'هر جزئیات محلی لازم نیست وارد hook یا provider شود.',
          ],
        },
        'data-i18n-manifest': {
          title: 'Manifest، data و localization',
          badge: 'هماهنگی',
          summary:
            'manifest و فایل‌های محتوای محلی‌سازی‌شده یک data layer هستند. این لایه باید با routeها و CTAهای page هماهنگ بماند تا جریان یادگیری در هر دو locale درست کار کند.',
          definition:
            'manifest منبع metadata ماژول‌ها است و فایل‌های محتوای محلی‌سازی‌شده منبع copy ترجمه‌شده‌ی lesson، exampleها، quizها و tipها هستند.',
          whyExists:
            'جدا کردن metadata و محتوای محلی‌سازی‌شده از کد page باعث می‌شود جریان lesson صریح‌تر و قابل‌نگه‌داری‌تر شود.',
          problem:
            'وقتی به‌روزرسانی route، manifest و محتوای محلی‌سازی‌شده جدا از هم انجام شود، جریان محصول می‌شکند یا یکی از localeها عقب می‌ماند.',
          howItWorks: [
            {
              title: '`courseManifest` مالک metadata ماژول است',
              body: 'ترتیب، path، accent، XP reward و nextId در یک فایل داده نگه داشته می‌شوند تا navigation و progress از یک منبع مشترک بخوانند.',
            },
            {
              title: 'فایل‌های محتوای محلی‌سازی‌شده مالک copy lesson هستند',
              body: 'هر locale متن hero، topicهای deep-dive، quiz data و tipها را با idهای هماهنگ تعریف می‌کند.',
            },
            {
              title: 'page داده‌های هماهنگ را کنار هم می‌گذارد',
              body: 'page محتوای ماژول خودش را می‌خواند و از جریان route پشتیبانی‌شده توسط manifest برای navigation درست استفاده می‌کند.',
            },
          ],
          example: {
            title: 'manifest و copy محلی‌سازی‌شده باید همدیگر را بشناسند',
            code: `{
  id: 'project-architecture',
  path: '/project-architecture',
  nextId: 'testing-accessibility'
}

content.modules['project-architecture']
content.quizzes['project-architecture']`,
            explanation:
              'module id باید بین manifest، محتوای ماژول، quizها و CTAهایی که به lesson می‌رسند یا از آن خارج می‌شوند یکسان باشد.',
          },
          mistakes: [
            'اضافه کردن route صفحه بدون اضافه کردن manifest data.',
            'به‌روزرسانی فقط یک locale و فراموش کردن locale دیگر.',
            'عوض کردن module id در یک جا و نگه داشتن id قدیمی در quizها یا CTAها.',
          ],
          realUsage: [
            'ترتیب ماژول‌ها در مسیر یادگیری.',
            'محتوای lesson در فارسی و انگلیسی.',
            'navigation درست به ماژول بعدی.',
          ],
          practice: {
            prompt:
              'وقتی یک lesson route محلی‌سازی‌شده با next CTA درست اضافه می‌کنی، چه فایل‌هایی را باید تغییر دهی؟',
          },
          summaryPoints: [
            '`courseManifest` مالک metadata ماژول است.',
            'فایل‌های course محلی‌سازی‌شده مالک lesson copy و quiz data هستند.',
            'تغییرهای route، content، manifest و CTA باید هماهنگ بمانند.',
          ],
        },
        'reuse-boundaries': {
          title: 'مرزهای reuse',
          badge: 'مرزها',
          summary:
            'معماری خوب یعنی نه اینکه همه‌چیز shared شود، بلکه اینکه تشخیص دهی چه چیزی واقعاً generic است، چه چیزی در مالکیت page است و چه چیزی باید در مالکیت feature بماند.',
          definition:
            'مرزهای reuse همان ruleهای ownership هستند که تعیین می‌کنند کد باید محلی بماند، shared UI شود یا داخل feature بماند.',
          whyExists:
            'تیم‌ها معمولاً خیلی زود کد را shared می‌کنند و در نتیجه ownership پنهان می‌شود و abstractionهای بزرگ‌تری می‌سازند که تغییرشان سخت‌تر است.',
          problem:
            'وقتی componentهای reusable behavior مربوط به page یا feature را جذب کنند، repo در ابتدا مرتب به‌نظر می‌رسد اما بعداً فهم آن سخت‌تر می‌شود.',
          howItWorks: [
            {
              title: 'behavior generic را می‌شود دوباره استفاده کرد',
              body: 'layout shellهای ثابت و panelهای generic نامزدهای خوبی برای shared شدن هستند چون lesson-specific logic نمی‌خواهند.',
            },
            {
              title: 'behavior مربوط به page روی همان page می‌ماند',
              body: 'state مربوط به explorer، انتخاب topic و wiring مربوط به CTA به همان page در سطح route تعلق دارد.',
            },
            {
              title: 'behavior مربوط به feature داخل feature می‌ماند',
              body: 'CRUD تسک، storage مربوط به تسک و XP logic مربوط به feature نباید وارد زیرساخت shared lesson شوند.',
            },
          ],
          example: {
            title: 'template thin، ownerها روشن',
            code: `// Shared
<LessonTemplate />

// Page-owned
const [selectedLayerId, setSelectedLayerId] = useState('app-routes');

// Feature-owned
<TaskManagerLab />`,
            explanation:
              'هر لایه کار خودش را نگه می‌دارد. معماری خوانا می‌ماند چون ownership صریح است و همه‌چیز بی‌دلیل flatten نشده است.',
          },
          mistakes: [
            'ساختن mega-component فقط چون دو page شبیه هم هستند.',
            'بردن state صفحه به Context فقط برای اینکه یک بار prop ندهی.',
            'refactor کردن feature به shared UI بدون اینکه behavior واقعاً generic باشد.',
          ],
          realUsage: [
            'generic نگه داشتن `LessonTemplate`.',
            'در مالکیت page نگه داشتن architecture explorer.',
            'در مالکیت feature نگه داشتن behavior مربوط به Task Manager.',
          ],
          practice: {
            prompt:
              'یک الگوی تکراری در این repo را نام ببر که بهتر است محلی بماند و shared component جدید نشود.',
          },
          summaryPoints: [
            'reuse وقتی امن است که behavior generic باشد.',
            'behavior در مالکیت page روی page می‌ماند.',
            'shared componentها نباید mega-component شوند.',
          ],
        },
      },
    },
    'testing-accessibility': {
      stageLabel: 'گام ۱۰',
      title: 'تست و دسترس‌پذیری',
      hero: {
        eyebrow: 'گام ۱۰',
        title: 'تست و دسترس‌پذیری',
        lead: 'این درس لایه‌ی کیفیت را به معماری دوره اضافه می‌کند: چطور رفتار را از زاویه‌ی کاربر تست کنی و چطور رابطی بسازی که قابل‌رسیدن، خوانا و قابل‌پیش‌بینی بماند.',
        primaryAction: 'این برش مربوط به تست و دسترس‌پذیری را فهمیدم',
        secondaryAction: 'رفتن به پروژه',
      },
      summary: {
        intro:
          'تست و دسترس‌پذیری وقتی بهتر کار می‌کنند که همدیگر را تقویت کنند. تست خوب سراغ کاری می‌رود که کاربر واقعاً می‌تواند انجام دهد و رابط دسترس‌پذیر هم برچسب، focus، معناشناسی و بازخورد پایدارتری برای همان کاربر فراهم می‌کند.',
        points: [
          'تفاوت unit test و integration test را در کار واقعی React بفهم',
          'به‌جای جزئیات پیاده‌سازی، assertionهای کاربرمحور بنویس',
          'قبل از ARIA از labelهای درست و HTML معنایی استفاده کن',
          'ناوبری با کیبورد، مدیریت focus و contrast را بخشی از کیفیت قابلیت ببین',
          'تست و دسترس‌پذیری را عادت روزمره‌ی توسعه بدان، نه polish دقیقه‌ی آخر',
        ],
        prerequisites: [
          'آشنایی با JSX، state و صفحه‌های درسی در سطح route',
          'شناخت ساختار lessonهای فعلی و قابلیت موجود Task Manager',
          'درک پایه از رفتار formها، buttonها و listها در مرورگر',
          'آمادگی برای نگاه کردن به UI از دید کاربر، نه فقط از روی کد',
        ],
        keyPoints: [
          'unit test رفتار کوچک و متمرکز را بررسی می‌کند',
          'integration test بررسی می‌کند چند بخش با هم چطور یک flow را کامل می‌کنند',
          'ذهنیت کتابخانه‌ی تست از چیزی شروع می‌شود که کاربر بتواند پیدا کند، بخواند و روی آن interaction انجام دهد',
          'دسترس‌پذیری از label، معناشناسی، ترتیب focus و feedback خوانا شروع می‌شود',
          'ARIA فقط وقتی لازم است که HTML بومی نتواند intent را به‌خوبی منتقل کند',
        ],
      },
      deepDive: {
        eyebrow: 'درس عمیق',
        title: 'کیفیت را از زاویه‌ی رفتار کاربر بخوان',
        lead: 'یک موضوع را انتخاب کن و ببین چیست، چرا مهم است و در این repo و سبک آموزشی فعلی چطور خودش را نشان می‌دهد.',
        chooserLabel: 'یک موضوع تست یا دسترس‌پذیری را انتخاب کن',
        sections: {
          definition: '۱. تعریف',
          whyExists: '۲. چرا وجود دارد',
          problem: '۳. چه مشکلی را حل می‌کند',
          howItWorks: '۴. در عمل چطور کار می‌کند',
          example: '۵. مثال عملی',
          mistakes: '۶. اشتباه‌های رایج',
          usage: '۷. کاربرد در app واقعی',
          practice: '۸. تمرین',
          summary: '۹. نکته‌های خلاصه',
        },
        practicePromptTitle: 'تمرین کیفیت',
        summaryTitle: 'چه چیزی را نگه داریم',
      },
      live: {
        eyebrow: 'اکسپلورر تست و دسترس‌پذیری',
        title: 'نقشه‌خوان تست و دسترس‌پذیری',
        lead: 'یک زاویه‌ی کیفیت را انتخاب کن و ببین باید به چه چیزهایی دقت کنی، از چه چیزهایی دوری کنی و چطور بدون تغییر دادن app واقعی به آن فکر کنی.',
        guidance:
          'از این نقشه‌خوان به‌عنوان یک سطح آموزشیِ فقط خواندنی استفاده کن. ایده‌های تست و دسترس‌پذیری را به رابط‌هایی وصل می‌کند که همین دوره از قبل به تو یاد داده است.',
        stateNote:
          'این نقشه‌خوان در مالکیت همین صفحه است، فقط خواندنی است، چیزی را ماندگار نمی‌کند و XP هم نمی‌دهد. نه اجراکننده‌ی تستی را راه می‌اندازد و نه Task Manager را تغییر می‌دهد.',
        selectorLabel: 'یک زاویه‌ی کیفیت را انتخاب کن',
        selectedLabel: 'زاویه‌ی انتخاب‌شده',
        readOnlyNote:
          'این نقشه‌خوان تستی اجرا نمی‌کند و رابط را دست‌کاری نمی‌کند. فقط توضیح می‌دهد behavior و مرزهای دسترس‌پذیری را چطور بررسی کنی.',
        sections: {
          examples: 'نمونه‌ی بررسی‌ها',
          lookFor: 'به چه چیزهایی دقت کنی',
          avoid: 'از چه چیزهایی دوری کنی',
        },
        items: {
          'unit-tests': {
            label: 'تست واحد',
            decisionLabel: 'دامنه‌ی کوچک',
            definition:
              'unit test یک رفتار کوچک و متمرکز را در isolation بررسی می‌کند؛ مثلاً اینکه label یک button عوض می‌شود یا یک helper خروجی درست می‌دهد.',
            whyItMatters:
              'testهای کوچک نزدیکِ محل bug می‌شکنند و قبل از اینکه چند رفتار را کنار هم بگذاری، به تو اطمینان می‌دهند که جزئیات کوچک درست کار می‌کنند.',
            examples: [
              'render کردن یک component کوچک و بررسی text آن',
              'assert کردن اینکه شمارنده‌ی badge بعد از یک click بیشتر می‌شود',
              'تست کردن یک helper مربوط به format بدون mount کردن کل page',
            ],
            lookFor: [
              'یک expectation روشن برای هر رفتار',
              'setup کمینه دور همان چیزی که می‌خواهی تست کنی',
              'نام‌هایی که نتیجه‌ی قابل‌دیدن را توضیح دهند',
            ],
            avoid: [
              'بازسازی کل app برای یک رفتار بسیار کوچک',
              'assert کردن اسم متغیرهای state داخلی',
              'دادن چند نتیجه‌ی نامرتبط به یک test',
            ],
          },
          'integration-tests': {
            label: 'تست یکپارچه',
            decisionLabel: 'جریان قابلیت',
            definition:
              'integration test بررسی می‌کند چند بخش با هم چطور کار می‌کنند؛ مثلاً input فرم، submit، به‌روزرسانی list و feedback قابل‌دیدن.',
            whyItMatters:
              'قابلیت‌ها معمولاً در مرز بین componentها، handlerها و رفتار مرورگر می‌شکنند، پس integration coverage failureهای واقعی‌تری را می‌گیرد.',
            examples: [
              'typing در یک فرم، submit کردن و بررسی ظاهر شدن item جدید',
              'عوض کردن filter و چک کردن list قابل‌مشاهده',
              'باز کردن dialog و تأیید اینکه focus روی field درست می‌افتد',
            ],
            lookFor: [
              'یک user flow که از چند سطح UI عبور می‌کند',
              'نتیجه‌ی قابل‌دیدن بعد از هر interaction',
              'assertionهایی که با چیزی که مرورگر نشان می‌دهد هماهنگ باشند',
            ],
            avoid: [
              'mock کردن کل feature تا جایی که behavior واقعی باقی نماند',
              'بررسی جزئیات پیاده‌سازی به‌جای outcome',
              'گذاشتن چند جریان نامرتبط در یک test غول‌آسا',
            ],
          },
          'user-centric-testing': {
            label: 'تست کاربرمحور',
            decisionLabel: 'رویکرد کتابخانه‌ی تست',
            definition:
              'تست کاربرمحور می‌پرسد کاربر چه چیزی را می‌تواند پیدا کند، بخواند، تایپ کند، کلیک کند یا بشنود؛ نه اینکه component از داخل چطور wiring شده است.',
            whyItMatters:
              'وقتی testها از accessible name و outcomeهای قابل‌دیدن پیروی کنند، در refactorها پایدارتر می‌مانند.',
            examples: [
              'query بر اساس role و accessible name',
              'trigger کردن click شبیه کاری که کاربر انجام می‌دهد',
              'assert کردن visible شدن feedback اعتبارسنجی بعد از submit',
            ],
            lookFor: [
              'queryهای دسترس‌پذیر مثل role، label text و text قابل‌دیدن',
              'interactionهایی شبیه استفاده‌ی واقعی',
              'assertion روی feedback renderشده و UI تغییرکرده',
            ],
            avoid: [
              'شروع کردن با CSS selectorهای تصادفی',
              'تست کردن internals مربوط به React به‌جای تجربه‌ی renderشده',
              'نوشتن assertionهای شکننده که با refactorهای بی‌خطر می‌شکنند',
            ],
          },
          'accessible-labels': {
            label: 'برچسب‌های دسترس‌پذیر',
            decisionLabel: 'شفافیت input',
            definition:
              'labelهای دسترس‌پذیر به inputها، buttonها و controlها یک نام روشن می‌دهند که هم کاربر و هم ابزار کمکی بتوانند آن را بفهمند.',
            whyItMatters:
              'اگر control نام دسترس‌پذیر پایداری نداشته باشد، استفاده از آن سخت می‌شود و testهای کاربرمحور هم دشوارتر نوشته می‌شوند.',
            examples: [
              '<label htmlFor="task-title">Task title</label>',
              '<button>Save task</button>',
              'متن خطا که به field مربوط وصل می‌شود',
            ],
            lookFor: [
              'label قابل‌دیدن یا accessible name روشن',
              'buttonهایی که متنشان action را توضیح دهد',
              'متن راهنما و خطا که به زمینه‌ی همان control مرتبط باشد',
            ],
            avoid: [
              'inputهایی که فقط placeholder دارند',
              'buttonهایی با متن مبهم مثل "اینجا کلیک کن"',
              'فراموش کردن اتصال label و control',
            ],
          },
          'keyboard-navigation': {
            label: 'ناوبری با کیبورد',
            decisionLabel: 'دسترسی به تعامل',
            definition:
              'ناوبری با کیبورد یعنی یادگیرنده بتواند با Tab، Shift+Tab، Enter، Space و در صورت نیاز کلیدهای جهت‌دار به controlها برسد و با آن‌ها کار کند.',
            whyItMatters:
              'اگر actionهای مهم فقط برای کاربر ماوس کار کنند یا ترتیب focus گیج‌کننده شود، صفحه عملاً قابل‌استفاده نیست.',
            examples: [
              'tab زدن بین CTAهای lesson و controlهای lab',
              'فعال کردن یک button با Enter یا Space',
              'حرکت در یک dialog بدون اینکه focus بیرون آن سرگردان شود',
            ],
            lookFor: [
              'interactive elementهای قابل‌دسترسی با کیبورد',
              'ترتیب focus قابل‌پیش‌بینی و همسو با جریان دیداری',
              'focus indicator قابل‌دیدن هنگام حرکت',
            ],
            avoid: [
              'divهای clickable بدون behavior کیبورد',
              'حذف کردن focus outline بدون جایگزین دسترس‌پذیر',
              'پرتاب کردن focus به جاهای غیرمنتظره بعد از interaction',
            ],
          },
          'semantic-html': {
            label: 'HTML معنایی',
            decisionLabel: 'اول HTML معنایی بومی',
            definition:
              'HTML معنایی از elementهای بومی مثل button، form، label، nav، main و list استفاده می‌کند تا مرورگر و ابزارهای کمکی ساختار را خودشان بفهمند.',
            whyItMatters:
              'معناشناسی بومی کار اضافه را کم می‌کند، دسترس‌پذیری را بهتر می‌کند و roleهای پایدارتری برای query دادن در testها می‌سازد.',
            examples: [
              '<button type="submit">Add task</button>',
              '<nav aria-label="Lesson tabs">...</nav>',
              '<ul><li>Tip</li></ul>',
            ],
            lookFor: [
              'استفاده از element واقعیِ مناسب قبل از افزودن ARIA',
              'headingها و sectionهایی که ساختار محتوا را نشان دهند',
              'list و form markupی که با معنی واقعی هماهنگ باشند',
            ],
            avoid: [
              'استفاده از div وقتی button یا list element مناسب وجود دارد',
              'افزودن roleهای ARIA که behavior بومی را تکرار می‌کنند',
              'flatten کردن ساختار تا جایی که page landmarkهایش را از دست بدهد',
            ],
          },
          'focus-management': {
            label: 'مدیریت focus',
            decisionLabel: 'کیفیت transition',
            definition:
              'focus management یعنی عمداً تعیین کنی بعد از یک تغییر مهم UI مثل باز شدن dialog، ظاهر شدن خطا یا رسیدن به محتوای جدید، focus کجا باید فرود بیاید.',
            whyItMatters:
              'بدون جابه‌جایی آگاهانه‌ی focus، کاربر کیبورد یا screen reader در updateهای پویا‌ی React context خود را از دست می‌دهد.',
            examples: [
              'فرستادن focus به داخل modal تازه بازشده',
              'برگرداندن focus به trigger بعد از بستن',
              'بردن focus روی اولین خطای validation بعد از submit',
            ],
            lookFor: [
              'یک target روشن برای focus بعد از transition مهم UI',
              'بازگشت focus وقتی UI موقت بسته می‌شود',
              'feedbackی که بدون شکار کردن در دسترس باشد',
            ],
            avoid: [
              'رها کردن focus روی elementی که حذف شده است',
              'باز کردن UI لایه‌ای بدون برنامه برای focus',
              'نمایش خطاهای مهم دور از control فعال',
            ],
          },
          'contrast-and-aria': {
            label: 'contrast و ARIA',
            decisionLabel: 'حافظ کیفیت',
            definition:
              'contrast متن و stateها را خوانا نگه می‌دارد و ARIA فقط وقتی معنی اضافه می‌کند که HTML بومی به‌تنهایی نتواند آن interaction را بیان کند.',
            whyItMatters:
              'contrast خوانا به یادگیرنده‌های بیشتری کمک می‌کند و استفاده‌ی محدود از ARIA جلوی معناشناسی تکراری یا نادرست را می‌گیرد.',
            examples: [
              'بررسی textهای کم‌رنگ و chipهای وضعیت روی پس‌زمینه',
              'استفاده از `aria-live` فقط برای feedback مهم و پویا',
              'ترجیح دادن معناشناسی مربوط به button و label قبل از roleهای سفارشی',
            ],
            lookFor: [
              'متن خوانا روی پس‌زمینه‌ی خودش',
              'feedback وضعیتی که فقط به رنگ وابسته نباشد',
              'ARIAای که برای یک شکاف معنایی واقعی اضافه شده باشد، نه از روی عادت',
            ],
            avoid: [
              'وابسته شدن به hint text کم‌contrast',
              'استفاده از رنگ به‌عنوان تنها سیگنال خطا یا وضعیت',
              'پاشیدن ARIA در همه‌جا بدون فهم element بومی',
            ],
          },
        },
      },
      quizTitle: 'مدل ذهنی تست و دسترس‌پذیری را محک بزن',
      tipsTitle: 'یادآوری‌های تست و دسترس‌پذیری',
      tipsIntro:
        'از این یادآوری‌ها استفاده کن تا بررسی کیفیت را عملی، کاربرمحور و هماهنگ با معماری فعلی دوره نگه داری.',
      tips: [
        'از رفتار قابل‌دیدن برای کاربر شروع کن، نه از جزئیات داخلی پیاده‌سازی.',
        'قبل از ARIA، HTML معنایی بومی را ترجیح بده.',
        'برچسب ناقص هم به دسترس‌پذیری آسیب می‌زند و هم به testability.',
        'قابلیت استفاده با کیبورد بخشی از کامل شدن قابلیت است، نه یک polish اختیاری.',
        'testهای کوچک و متمرکز معمولاً قابل‌اعتمادتر از testهای غول‌آسا هستند.',
        'بازخورد دسترس‌پذیر باید بدون اتکا به رنگ تنها هم خوانا و روشن باشد.',
      ],
      mistakes: [
        'تست کردن CSS classها یا internals مربوط به component به‌جای outcomeهای قابل‌دیدن برای کاربر.',
        'استفاده از placeholder به‌عنوان تنها label input.',
        'افزودن roleهای ARIA که elementهای بومی را تکرار یا با آن‌ها conflict می‌کنند.',
        'نادیده گرفتن ترتیب focus بعد از dialog، خطای validation یا updateهای پویا.',
      ],
      practicePrompts: [
        {
          id: 'testing-accessibility-query',
          title: 'یک assertion را بازنویسی کن',
          prompt:
            'یک test فرضی را در نظر بگیر که با CSS class query می‌زند. آن را به یک query کاربرمحور بر پایه‌ی role، label یا text قابل‌دیدن بازنویسی کن.',
          hint: 'فکر کن کاربر واقعی یا ابزار کمکی چه چیزی را واقعاً می‌تواند تشخیص دهد.',
          expectedOutcome:
            'پاسخ خوب یک query دسترس‌پذیر انتخاب می‌کند و توضیح می‌دهد کدام behavior قابل‌دیدن را ثابت می‌کند.',
        },
        {
          id: 'testing-accessibility-focus',
          title: 'برنامه‌ی focus را ردیابی کن',
          prompt:
            'توضیح بده وقتی modal باز می‌شود، وقتی بسته می‌شود و وقتی submit فرم یک خطای validation نشان می‌دهد، focus باید کجا برود.',
          hint: 'پاسخ را بر پایه‌ی behavior قابل‌پیش‌بینی کیبورد نگه دار.',
          expectedOutcome:
            'پاسخ قوی focus را وارد UI تازه می‌کند، بعد از بستن آن را به trigger برمی‌گرداند و در صورت نیاز آن را به feedback مهم validation هدایت می‌کند.',
        },
      ],
      topics: {
        'test-levels': {
          title: 'unit test و integration test',
          badge: 'سطح‌های تست',
          summary:
            'unit test و integration test به دو سؤال متفاوت جواب می‌دهند. test کوچک یک رفتار را isolate می‌کند و test بزرگ‌تر ثابت می‌کند وقتی چند بخش با هم کار می‌کنند flow هنوز سالم است.',
          definition:
            'unit test روی یک رفتار کوچک در isolation تمرکز می‌کند. integration test بررسی می‌کند چند بخش UI و logic با هم چطور یک flow را کامل می‌کنند.',
          whyExists:
            'هم به feedback سریع برای جزئیات کوچک نیاز داری و هم به feedback واقعی برای جریان قابلیت. هیچ‌کدام به‌تنهایی کافی نیست.',
          problem:
            'تیم‌ها یا جزئیات کوچک را با setup عظیم تست می‌کنند یا flowهایی را که در برخورد state فرم، render و event می‌شکنند اصلاً درست پوشش نمی‌دهند.',
          howItWorks: [
            {
              title: 'از کوچک‌ترین رفتار معنادار شروع کن',
              body: 'unit test معمولاً باید به یک سؤال روشن جواب بدهد؛ مثلاً اینکه button disable می‌شود یا helper خروجی درست می‌دهد.',
            },
            {
              title: 'برای flow واقعی از integration test استفاده کن',
              body: 'وقتی کاربر typing می‌کند، submit می‌کند، filter را عوض می‌کند یا state route تغییر می‌کند، به testی نیاز داری که از چند مرز عبور کند.',
            },
            {
              title: 'اجازه بده هر سطح تست صادق بماند',
              body: 'unit test را مجبور نکن کل قابلیت را شبیه‌سازی کند و از یک integration test عظیم هم انتظار پوشش هر rule کوچک را نداشته باش.',
            },
          ],
          example: {
            title: 'اول یک check کوچک، بعد یک flow',
            code: `expect(screen.getByRole('button', { name: /save task/i })).toBeEnabled();

await user.type(screen.getByLabelText(/task title/i), 'Review PR');
await user.click(screen.getByRole('button', { name: /add task/i }));
expect(screen.getByText(/review pr/i)).toBeInTheDocument();`,
            explanation:
              'assertion اول یک behavior کوچک و قابل‌دیدن است. گروه دوم بیشتر شبیه integration flow است که input، button و list rendering را کنار هم بررسی می‌کند.',
          },
          mistakes: [
            'صدا زدن هر test با نام integration test حتی وقتی یک جزئیات کوچک را می‌سنجد.',
            'mount کردن UI بیش از حد وقتی یک helper یا component کوچک کافی بود.',
            'فرض کردن یک مسیر end-to-end موفق همه‌ی ruleهای کوچک را ثابت می‌کند.',
          ],
          realUsage: [
            'تست کردن label یا disabled state مربوط به CTA یک lesson.',
            'تست کردن اینکه submit فرم UI قابل‌دیدن را به‌روز می‌کند.',
            'تست کردن flowهایی مثل add، filter یا validate.',
          ],
          practice: {
            prompt:
              'یک behavior از این دوره را نام ببر که مناسب unit test باشد و یکی را که مناسب integration test باشد.',
          },
          summaryPoints: [
            'unit test یک رفتار را isolate می‌کند.',
            'integration test کار کردن چند بخش با هم را بررسی می‌کند.',
            'برای هر سؤال، کوچک‌ترین test واقع‌بینانه را انتخاب کن.',
          ],
        },
        'user-centric-testing': {
          title: 'تست کاربرمحور',
          badge: 'دید کاربر',
          summary:
            'یک test مفید در React از چیزی پیروی می‌کند که کاربر می‌بیند و انجام می‌دهد: labelها، roleها، feedback قابل‌دیدن و interactionهایی شبیه استفاده‌ی واقعی.',
          definition:
            'تست کاربرمحور رفتار renderشده را از طریق queryهای دسترس‌پذیر و interactionهای واقعی‌تر بررسی می‌کند، نه از طریق جزئیات خصوصی component.',
          whyExists:
            'وقتی testها قرارداد واقعیِ رابط را دنبال می‌کنند، در refactorها پایدارتر می‌مانند.',
          problem:
            'testهای وابسته به implementation detail ممکن است پاس شوند در حالی که UI شکسته است، یا با refactor بی‌خطر بی‌جهت fail شوند.',
          howItWorks: [
            {
              title: 'مثل کاربر UI را پیدا کن',
              body: 'قبل از selectorهای سطح پایین، به role، label text و text قابل‌دیدن فکر کن.',
            },
            {
              title: 'از actionهای واقعی استفاده کن',
              body: 'click، typing و submit باید شبیه کاری باشند که یادگیرنده در مرورگر انجام می‌دهد.',
            },
            {
              title: 'outcome را assert کن، نه wiring را',
              body: 'بررسی کن content قابل‌دیدن، feedback stateful یا navigation عوض شده است؛ نه اینکه جزئیات داخلی چه بوده‌اند.',
            },
          ],
          example: {
            title: 'یک query با رویکرد کاربرمحور',
            code: `await user.type(screen.getByLabelText(/task title/i), 'Write recap');
await user.click(screen.getByRole('button', { name: /add task/i }));

expect(screen.getByText(/write recap/i)).toBeInTheDocument();`,
            explanation:
              'این test مثل یک flow برای یادگیرنده خوانده می‌شود و کاری به این ندارد که کدام state setter یا class name باعث دیده شدن item شده است.',
          },
          mistakes: [
            'شروع کردن با `.submit-button` به‌جای queryهای بر پایه‌ی role یا label.',
            'سرک کشیدن به state مربوط به component به‌جای چک کردن خروجی render.',
            'نوشتن testهایی که فقط مدل ذهنی داخلی توسعه‌دهنده را بازتاب می‌دهند.',
          ],
          realUsage: [
            'اعتبارسنجی feedback قابل‌دیدن فرم.',
            'چک کردن وجود و خوانا بودن یک button ناوبری.',
            'تأیید ظاهر شدن یک list item بعد از interaction واقعی.',
          ],
          practice: {
            prompt:
              'اگر button فقط از طریق CSS class در test پیدا می‌شود، این درباره‌ی test و شاید خود UI چه چیزی را نشان می‌دهد؟',
          },
          summaryPoints: [
            'با accessible name و role query بزن.',
            'تجربه را تست کن، نه internals را.',
            'test پایدار معمولاً از behavior پایدار و قابل‌دیدن پیروی می‌کند.',
          ],
        },
        'accessible-labels-semantics': {
          title: 'برچسب‌های دسترس‌پذیر و HTML معنایی',
          badge: 'معناشناسی',
          summary:
            'labelهای روشن و elementهای semantic به کاربر کمک می‌کنند UI را بفهمد و به testها هم queryهای معنادار و قوی می‌دهند.',
          definition:
            'label دسترس‌پذیر نام control را روشن می‌کند و HTML معنایی از element درست استفاده می‌کند تا مرورگر و ابزار کمکی ساختار را بفهمند.',
          whyExists:
            'اگر label یا معناشناسی ناقص باشد، هم usability و هم testability افت می‌کنند، چون رابط قرارداد عمومی پایداری ندارد.',
          problem:
            'inputهای فقط-placeholder، divهای clickable و متن‌های مبهم روی buttonها هم کاربر را گیج می‌کنند و هم testها را شکننده.',
          howItWorks: [
            {
              title: 'label را به control وصل کن',
              body: 'input باید label قابل‌دیدن یا accessible name هم‌ارز داشته باشد که مقدار مورد انتظار را توضیح بدهد.',
            },
            {
              title: 'اول element بومی مناسب را انتخاب کن',
              body: 'button، list، heading، form و navigation landmarkها بدون repair اضافه معنی را منتقل می‌کنند.',
            },
            {
              title: 'معناشناسی testها را قوی‌تر می‌کند',
              body: 'هرچه markup معنادارتر باشد، query زدن با role و accessible name راحت‌تر و پایدارتر می‌شود.',
            },
          ],
          example: {
            title: 'markup بومی که خوانا می‌ماند',
            code: `<label htmlFor="task-title">Task title</label>
<input id="task-title" name="taskTitle" />

<button type="submit">Add task</button>`,
            explanation:
              'input و button حالا accessible name روشن دارند. این هم usability واقعی را بهتر می‌کند و هم queryهای test را ساده‌تر.',
          },
          mistakes: [
            'استفاده از placeholder به‌عنوان تنها label field.',
            'جایگزین کردن button با div بدون دلیل semantic.',
            'انتخاب متن‌های مبهم مثل "ارسال" وقتی action می‌تواند روشن‌تر باشد.',
          ],
          realUsage: [
            'buttonهای CTA درس با متن روشن.',
            'formهای تسک با label واقعی.',
            'headingهایی که page را برای scan و navigation ساده‌تر می‌کنند.',
          ],
          practice: {
            prompt:
              'یک control در فرم React را انتخاب کن و بهترین label قابل‌دیدن و native element برای آن را توضیح بده.',
          },
          summaryPoints: [
            'label و معناشناسی هم به دسترس‌پذیری کمک می‌کنند و هم به testها.',
            'HTML بومی اولین ابزار دسترس‌پذیری است.',
            'نام روشن، قرارداد عمومی پایدارتری می‌سازد.',
          ],
        },
        'keyboard-focus': {
          title: 'ناوبری با کیبورد و مدیریت focus',
          badge: 'focus',
          summary:
            'UI دسترس‌پذیر React فقط درباره‌ی label نیست. کاربر قبل، حین و بعد از updateهای پویا هم به مسیر focus قابل‌پیش‌بینی نیاز دارد.',
          definition:
            'ناوبری با کیبورد یعنی رسیدن به controlها بدون ماوس و مدیریت focus یعنی تعیین آگاهانه‌ی محل فرود focus بعد از تغییر مهم UI.',
          whyExists:
            'React بعد از submit، route change و باز شدن modal زیاد DOM را update می‌کند. بدون برنامه‌ی focus، کاربر context را از دست می‌دهد.',
          problem:
            'ممکن است یک قابلیت از نظر دیداری خوب به‌نظر برسد اما اگر ترتیب focus بپرد، گم شود یا به control مهم نرسد، استفاده از آن سخت می‌شود.',
          howItWorks: [
            {
              title: 'اول باید قابل‌رسیدن باشد',
              body: 'buttonها، inputها، linkها و tabها باید با کیبورد و با ترتیبی هماهنگ با جریان خواندن قابل‌دسترسی باشند.',
            },
            {
              title: 'UI پویا به target مربوط به focus نیاز دارد',
              body: 'باز کردن dialog، نشان دادن feedback اعتبارسنجی یا render شدن محتوای جدید معمولاً به تصمیم آگاهانه برای focus نیاز دارد.',
            },
            {
              title: 'focus قابل‌دیدن مهم است',
              body: 'کاربر باید هنگام tab زدن بداند کجاست.',
            },
          ],
          example: {
            title: 'focus بعد از validation',
            code: `if (!taskTitle.trim()) {
  setError('Task title is required');
  titleInputRef.current?.focus();
  return;
}`,
            explanation:
              'بعد از submit ناموفق، focus روی fieldی می‌رود که نیاز به توجه دارد و یادگیرنده مجبور نیست دنبال مشکل بگردد.',
          },
          mistakes: [
            'رها کردن focus روی elementی که حذف یا پنهان شده است.',
            'خاموش کردن focus outline بدون جایگزین قابل‌دسترسی.',
            'باز کردن overlayها بدون برنامه برای محل فرود کاربر کیبورد.',
          ],
          realUsage: [
            'feedback اعتبارسنجی در زمان submit.',
            'interactionهای modal یا drawer.',
            'tab زدن بین actionهای lesson و controlهای lab.',
          ],
          practice: {
            prompt:
              'توضیح بده وقتی modal باز می‌شود و وقتی دوباره بسته می‌شود، focus باید کجا برود.',
          },
          summaryPoints: [
            'قابلیت استفاده با کیبورد بخشی از behavior feature است.',
            'UI پویا به برنامه‌ی focus نیاز دارد.',
            'focus قابل‌دیدن به کاربر کمک می‌کند جهتش را حفظ کند.',
          ],
        },
        'contrast-feedback': {
          title: 'کنتراست رنگ و feedback خوانا',
          badge: 'خوانایی',
          summary:
            'متن خوانا، stateهای قابل‌دیدن و feedback چندسیگناله کمک می‌کنند یادگیرنده بدون اتکا به دید کامل یا تشخیص رنگ، تغییرات را بفهمد.',
          definition:
            'آگاهی از contrast یعنی بررسی کنی text، status chipها، noteهای راهنما و stateهای خطا روی پس‌زمینه‌ی خودشان خوانا می‌مانند یا نه.',
          whyExists:
            'ممکن است UI polished باشد اما اگر contrast ضعیف باشد یا رنگ تنها سیگنال باشد، معنی پنهان می‌شود.',
          problem:
            'hint textهای کم‌رنگ، badgeهای کم‌کنتراست و messageهای فقط رنگی استفاده از محصول را سخت‌تر و کم‌اعتمادتر می‌کنند.',
          howItWorks: [
            {
              title: 'text را روی surface خودش چک کن',
              body: 'text ثانویه و hintها معمولاً زودتر از بقیه دچار مشکل می‌شوند چون عمداً subtle طراحی می‌شوند.',
            },
            {
              title: 'با چیزی بیشتر از رنگ معنا بده',
              body: 'label، icon، موقعیت و text توضیحی وقتی color کافی نیست، معنی را تقویت می‌کنند.',
            },
            {
              title: 'feedback را در هر دو locale ببین',
              body: 'طول متفاوت متن فارسی و انگلیسی می‌تواند wrap و خوانایی را تغییر دهد، پس feedback باید در هر دو جهت بررسی شود.',
            },
          ],
          example: {
            title: 'feedback خوانا بهتر از feedback فقط رنگی است',
            code: `<p role="alert">
  Task title is required.
</p>`,
            explanation:
              'message صریح است و می‌تواند به‌عنوان feedback اعلام شود. یادگیرنده مجبور نیست فقط از روی border قرمز خطا را حدس بزند.',
          },
          mistakes: [
            'استفاده از helper text خاکستریِ خیلی کم‌رنگ روی پس‌زمینه‌ی روشن.',
            'نمایش وضعیت خطا فقط با رنگ.',
            'رد کردن بررسی دیداری فقط چون کد از نظر معناشناسی خوب به‌نظر می‌رسد.',
          ],
          realUsage: [
            'feedback خطا و موفقیت در formها.',
            'status chipها یا badgeهای completion.',
            'متن راهنمای کم‌رنگ در panelهای آموزشی.',
          ],
          practice: {
            prompt:
              'یک state از UI این دوره را نام ببر که باید با text یا structure هم معنا بدهد، نه فقط با رنگ.',
          },
          summaryPoints: [
            'feedback خوانا به contrast و شفافیت نیاز دارد.',
            'رنگ باید معنا را پشتیبانی کند، نه اینکه تنها حامل آن باشد.',
            'دسترس‌پذیری فقط مخصوص screen reader نیست؛ خوانایی دیداری را هم شامل می‌شود.',
          ],
        },
        'aria-when-needed': {
          title: 'ARIA فقط وقتی لازم است',
          badge: 'خویشتن‌داری',
          summary:
            'ARIA ابزار ترمیم است، نه تزئین پیش‌فرض. مسیر بهتر این است که اول معناشناسی بومی را به کار بگیری و فقط برای gapهای واقعی از ARIA کمک بگیری.',
          definition:
            'ARIA وقتی به interactionهای سفارشی metadata دسترس‌پذیری اضافه می‌کند که HTML بومی به‌تنهایی نتواند معنی یا status لازم را بیان کند.',
          whyExists:
            'گاهی widgetهای سفارشی یا statusهای پویای مهم به معناشناسی اضافه نیاز دارند، اما ARIA اضافی می‌تواند announcementهای تکراری یا اشتباه بسازد.',
          problem:
            'توسعه‌دهنده‌ها گاهی "محض احتیاط" همه‌جا ARIA اضافه می‌کنند و این کار با معناشناسی داخلی مرورگر conflict پیدا می‌کند.',
          howItWorks: [
            {
              title: 'از element بومی شروع کن',
              body: 'اگر button، input، label، list یا heading واقعی مسئله را حل می‌کند، همان باید انتخاب اول باشد.',
            },
            {
              title: 'برای gap معنایی واقعی ARIA اضافه کن',
              body: 'مثلاً live region برای feedback پویای مهم یا توضیح یک رابطه‌ی سفارشی که markup بومی به‌تنهایی آن را منتقل نمی‌کند.',
            },
            {
              title: 'نتیجه را از دید کاربر تست کن',
              body: 'اگر ARIA اضافه شد، بررسی کن name، role و announcement حالا کمک‌کننده شده‌اند، نه اینکه نویز تکراری ساخته باشند.',
            },
          ],
          example: {
            title: 'یک live region متمرکز',
            code: `<div aria-live="polite">
  {saveState === 'saved' ? 'Task saved successfully.' : null}
</div>`,
            explanation:
              'live region برای feedback پویای مهم استفاده شده است، نه اینکه به‌صورت پیش‌فرض روی هر containerی پاشیده شود.',
          },
          mistakes: [
            'گذاشتن `role="button"` روی `<button>` واقعی.',
            'گذاشتن `aria-live` روی containerهای بزرگ که noise زیادی اعلام می‌کنند.',
            'پنهان کردن ضعف معناشناسی پشت ARIA به‌جای درست کردن markup.',
          ],
          realUsage: [
            'اعلام feedback مهم و asynchronous.',
            'پشتیبانی از interactionهای سفارشی وقتی HTML بومی کافی نیست.',
            'هماهنگ نگه داشتن testها با roleها و nameهای دسترس‌پذیر.',
          ],
          practice: {
            prompt:
              'یک مثال بزن که HTML بومی به‌تنهایی کافی است و یک مثال که شاید یک ARIA کوچک در آن توجیه داشته باشد.',
          },
          summaryPoints: [
            'اول معناشناسی بومی.',
            'ARIA باید gap معنایی واقعی را حل کند.',
            'ARIA غیرضروری معمولاً دسترس‌پذیری را بدتر می‌کند، نه بهتر.',
          ],
        },
      },
    },
    project: {
      stageLabel: 'گام ۱۱',
      title: 'Task Manager نهایی',
      hero: {
        eyebrow: 'گام ۱۱',
        title: 'Task Manager نهایی',
        lead: 'این نمونه‌پروژه همه چیز را به هم وصل می‌کند: state، forms، list rendering، CRUD، filter و ذخیره‌سازی محلی.',
        primaryAction: 'این پروژه را کامل کردم',
        secondaryAction: null,
      },
      summary: {
        intro:
          'این پروژه تمرکز را از syntax به workflow می‌برد: ساختن، ویرایش، فیلتر کردن و حفظ state در localStorage.',
        points: ['form-driven UI', 'filtering', 'local persistence'],
      },
      live: {
        eyebrow: 'نمونه‌پروژه',
        title: 'مدیریت تسک‌ها',
        lead: 'اضافه کردن، ویرایش، حذف، تغییر وضعیت و فیلتر کردن همه در یک صفحه.',
      },
      quizTitle: 'جمع‌بندی پروژه',
      tips: [
        'پروژه را کوچک نگه دار: ابتدا CRUD، بعد filter، بعد persistence.',
        'اگر بخش بزرگی گیج‌کننده شد، آن را به چند component کوچک‌تر بشکن.',
      ],
    },
  },
  badges: {
    'first-step': {
      title: 'اولین قدم',
      description: 'یک ماژول را کامل کردی.',
    },
    prepared: {
      title: 'آماده‌ی شروع',
      description: 'setup و tooling را کامل کردی.',
    },
    'quiz-solver': {
      title: 'حل‌گر سؤال‌ها',
      description: 'سه quiz را درست جواب دادی.',
    },
    builder: {
      title: 'سازنده',
      description: 'سه ماژول یا بیشتر را کامل کردی.',
    },
    'streak-3': {
      title: 'پیگیر',
      description: 'سه روز پشت سر هم فعال بوده‌ای.',
    },
    'ship-it': {
      title: 'ارسال شد',
      description: 'همه‌ی ماژول‌ها را کامل کردی.',
    },
  },
  coach: {
    start: {
      title: 'شروع خوب، دقیق و سبک',
      body: 'هرچیزی را لازم نیست همین الان بفهمی؛ فقط از اولین کارت عبور کن.',
      microGoal: 'فقط یک درس را باز کن و سه دقیقه روی آن بمان.',
      cta: 'شروع از {title}',
    },
    momentum: {
      title: 'ریتمت خوب افتاده',
      body: 'وقتی چند روز پشت سر هم جلو می‌روی، مغز خیلی سریع‌تر patternها را می‌سازد.',
      microGoal: 'یک quiz دیگر حل کن یا یک تب را کامل ببند.',
      cta: 'ادامه با {title}',
    },
    stuck: {
      title: 'گیر کردن بخشی از فرایند است',
      body: 'اگر یک صفحه سنگین شد، کار را به یک قدم خیلی کوچک‌تر بشکن.',
      microGoal: 'فقط یک tab دیگر را باز کن و همان را انجام بده.',
      cta: 'فقط {title} را باز کن',
    },
    celebration: {
      title: 'عالی پیش رفتی',
      body: 'تقریباً همه‌ی مسیر را طی کرده‌ای و حالا وقت جمع‌بندی است.',
      microGoal: 'یک مرور سریع از خانه انجام بده و بعد هرجا خواستی برگرد.',
      cta: 'برگشت به خانه',
    },
    comeback: {
      title: 'خوش برگشتی',
      body: 'برگشتن بعد از وقفه از ادامه دادن مهم‌تر است؛ همین امروز یک قدم کوچک کافی است.',
      microGoal: 'فقط یک درس کوتاه را دوباره باز کن.',
      cta: 'از {title} شروع کن',
    },
  },
  taskManager: {
    header: {
      eyebrow: 'نمونه‌پروژه',
      title: 'مدیریت تسک‌ها',
      lead: 'اضافه کردن، ویرایش، حذف، تغییر وضعیت و فیلتر کردن همه در یک صفحه.',
    },
    stats: {
      all: 'همه',
      active: 'باز',
      done: 'تمام‌شده',
    },
    form: {
      newLabel: 'تسک جدید',
      editLabel: 'ویرایش تسک',
      newHeading: 'یک تسک جدید بساز',
      editHeading: 'ویرایش مورد انتخاب‌شده',
      title: 'عنوان',
      note: 'یادداشت',
      category: 'دسته',
      titlePlaceholder: 'مثلاً تمرین props',
      notePlaceholder: 'توضیح کوتاه',
      submitNew: 'افزودن تسک',
      submitEdit: 'ذخیره تغییرات',
      reset: 'پاک کردن فرم',
    },
    filters: {
      all: 'همه',
      active: 'باز',
      done: 'تکمیل‌شده',
      search: 'جست‌وجو',
    },
    emptyState: {
      title: 'چیزی پیدا نشد',
      body: 'فیلتر یا جست‌وجو را تغییر بده، یا یک تسک جدید بساز.',
    },
    actions: {
      edit: 'ویرایش',
      delete: 'حذف',
      toggle: 'تغییر وضعیت تسک',
      clearCompleted: 'پاک کردن تکمیل‌شده‌ها',
      doneLabel: 'بدون یادداشت',
    },
    categories: {
      js: 'JS',
      react: 'React',
      effects: 'Effects',
      routing: 'مفاهیم Routing',
    },
    seedTasks: [
      {
        id: 'task-1',
        title: 'مرور array methods',
        note: 'map/filter/reduce را با مثال تمرین کن.',
        category: 'js',
        done: false,
      },
      {
        id: 'task-2',
        title: 'ساخت یک component کوچک',
        note: 'یک card ساده با props بساز.',
        category: 'react',
        done: true,
      },
      {
        id: 'task-3',
        title: 'تمرین useEffect',
        note: 'یک timer یا autosave پیاده کن.',
        category: 'effects',
        done: false,
      },
    ],
  },
  quizzes: {
    setup: [
      {
        id: 'setup-node',
        title: 'Node چه کاری می‌کند؟',
        prompt: 'کدام توضیح درست‌تر است؟',
        options: [
          'فقط فایل‌های CSS را render می‌کند',
          'JavaScript را بیرون از browser اجرا می‌کند',
          'فقط برای طراحی UI است',
        ],
        answerIndex: 1,
        explanation:
          'Node runtime جاوااسکریپت را خارج از browser اجرا می‌کند و ابزارهای React به آن تکیه می‌کنند.',
        xpReward: 15,
      },
      {
        id: 'setup-devtools',
        title: 'React Developer Tools برای چیست؟',
        prompt: 'بهترین گزینه را انتخاب کن.',
        options: ['دیدن component tree، props و state', 'ساخت image با canvas', 'ساخت API server'],
        answerIndex: 0,
        explanation: 'React DevTools برای debug و مشاهده‌ی ساختار componentها استفاده می‌شود.',
        xpReward: 15,
      },
    ],
    tooling: [
      {
        id: 'tool-npm-script',
        title: '`npm run dev` واقعاً چه می‌کند؟',
        prompt: 'دقیق‌ترین توضیح را انتخاب کن.',
        options: [
          'npm خودش به‌تنهایی React را مستقیم اجرا می‌کند',
          'npm script مربوط به `dev` را از `package.json` پیدا می‌کند و همان command را اجرا می‌کند',
          'npm فقط کد را format می‌کند و browser را refresh می‌کند',
        ],
        answerIndex: 1,
        explanation:
          'اینجا npm نقش script runner دارد. entry مربوط به `dev` را از `package.json` می‌خواند و ابزار واقعی پشت آن script را اجرا می‌کند که در این repo همان Vite است.',
        xpReward: 20,
      },
      {
        id: 'tool-vite',
        title: 'Vite بیشتر برای چه چیزی است؟',
        prompt: 'کدام گزینه دقیق‌تر است؟',
        options: ['package manager', 'dev server و build tool', 'code formatter'],
        answerIndex: 1,
        explanation: 'Vite dev server سریع و ابزار build برای پروژه‌های مدرن است.',
        xpReward: 20,
      },
      {
        id: 'tool-eslint',
        title: 'ESLint چه می‌کند؟',
        prompt: 'انتخاب درست کدام است؟',
        options: [
          'کد را بدون اجرا شدن app می‌خواند و با ruleها بررسی می‌کند',
          'فقط فاصله‌ها و quoteها را مرتب می‌کند',
          'packageها را از npm registry دانلود می‌کند',
        ],
        answerIndex: 0,
        explanation:
          'ESLint یک ابزار static analysis است. source code را parse می‌کند، ruleها را اعمال می‌کند و قبل از runtime اشتباه‌های محتمل یا شکستن conventionها را گزارش می‌دهد.',
        xpReward: 20,
      },
      {
        id: 'tool-prettier',
        title: 'Prettier چه کاری انجام می‌دهد؟',
        prompt: 'کدام جواب بهتر است؟',
        options: ['کد را format می‌کند', 'package نصب می‌کند', 'component tree را نمایش می‌دهد'],
        answerIndex: 0,
        explanation: 'Prettier درباره‌ی style و formatting تصمیم‌های سازگار می‌گیرد.',
        xpReward: 15,
      },
      {
        id: 'tool-pnpm',
        title: 'pnpm چه مزیتی دارد؟',
        prompt: 'بهترین برداشت کدام است؟',
        options: [
          'فقط برای CSS است',
          'همان نقش npm را با ذخیره‌سازی بهینه‌تر انجام می‌دهد',
          'جایگزین browser است',
        ],
        answerIndex: 1,
        explanation:
          'pnpm یک package manager مشابه npm است که معمولاً سریع‌تر و کم‌حجم‌تر عمل می‌کند.',
        xpReward: 15,
      },
    ],
    js: [
      {
        id: 'js-array-map',
        title: 'کدام روش آرایه جدید می‌سازد؟',
        prompt: 'حدس بزن کدام option معمولاً آرایه تازه برمی‌گرداند.',
        options: ['map', 'forEach', 'sort'],
        answerIndex: 0,
        explanation:
          '`map` برای هر item یک value جدید تولید می‌کند. `forEach` بیشتر برای side effect است.',
        xpReward: 15,
      },
      {
        id: 'js-state-setter',
        title: 'کدام عبارت درست‌تر است؟',
        prompt: 'در React برای تغییر state باید چه کار کنیم؟',
        options: ['state را مستقیم mutate کنیم', 'از setter استفاده کنیم', 'فقط props را عوض کنیم'],
        answerIndex: 1,
        explanation:
          'State باید با setter به‌روزرسانی شود تا React رندر جدید را تشخیص بدهد و UI sync بماند.',
        xpReward: 15,
      },
    ],
    react: [
      {
        id: 'react-html-dom',
        title: 'HTML یا DOM؟',
        prompt: 'کدام عبارت دقیق‌تر است؟',
        options: [
          'HTML و DOM دقیقاً یک چیز هستند',
          'HTML markup منبع است و DOM tree زنده‌ای است که browser از آن می‌سازد',
          'DOM فقط داخل React وجود دارد',
        ],
        answerIndex: 1,
        explanation:
          'HTML متن منبع است. DOM ساختار زنده‌ای است که browser از آن می‌سازد تا خودش و JavaScript بتوانند با صفحه کار کنند.',
        xpReward: 20,
      },
      {
        id: 'react-jsx-transform',
        title: 'با JSX چه اتفاقی می‌افتد؟',
        prompt: 'بهترین توضیح را انتخاب کن.',
        options: [
          'browser، JSX را مستقیم مثل HTML خام می‌خواند',
          'JSX به JavaScript تبدیل می‌شود که React element description می‌سازد',
          'JSX از JavaScript عبور می‌کند و مستقیم به CSS تبدیل می‌شود',
        ],
        answerIndex: 1,
        explanation:
          'JSX syntax راحت‌تری برای توسعه‌دهنده است. مرحله‌ی build آن را قبل از اجرا به JavaScript تبدیل می‌کند.',
        xpReward: 20,
      },
      {
        id: 'react-rendering-flow',
        title: 'بعد از تغییر state چه می‌شود؟',
        prompt: 'کدام ترتیب دقیق‌تر است؟',
        options: [
          'state عوض می‌شود، React component را دوباره اجرا می‌کند، UI descriptionها را مقایسه می‌کند و بعد DOM را update می‌کند',
          'state عوض می‌شود، browser فایل HTML اصلی را ویرایش می‌کند و بعداً React متوجه می‌شود',
          'state عوض می‌شود و React همیشه کل صفحه را از صفر می‌سازد',
        ],
        answerIndex: 0,
        explanation:
          'React بعد از تغییر state دوباره render می‌کند، توصیف قبلی و جدید را مقایسه می‌کند و فقط updateهای لازم را روی DOM واقعی اعمال می‌کند.',
        xpReward: 20,
      },
      {
        id: 'react-vdom',
        title: 'Real DOM در برابر Virtual DOM',
        prompt: 'کدام جواب دقیق و محتاطانه است؟',
        options: [
          'Virtual DOM یعنی React هرگز از DOM واقعی استفاده نمی‌کند',
          'Virtual DOM strategy داخلی React برای نگه داشتن و مقایسه‌ی UI description قبل از update کردن DOM واقعی است',
          'Virtual DOM یک browser engine سریع‌تر است که داخل React ساخته شده',
        ],
        answerIndex: 1,
        explanation:
          'React همچنان DOM واقعی را update می‌کند. ایده‌ی Virtual DOM بیشتر درباره‌ی نمایش و مقایسه‌ی UI descriptionها قبل از commit است.',
        xpReward: 20,
      },
      {
        id: 'react-props-state',
        title: 'props یا state؟',
        prompt: 'ورودی که از parent می‌آید و component خودش آن را نگه نمی‌دارد چیست؟',
        options: ['props', 'state', 'effect'],
        answerIndex: 0,
        explanation: 'props از بیرون می‌آیند. state داده‌ای است که component خودش کنترل می‌کند.',
        xpReward: 20,
      },
    ],
    'events-forms': [
      {
        id: 'events-handler-reference',
        title: 'handler را چطور می‌دهی؟',
        prompt: 'کدام نسخه React را صاحب handler می‌کند تا بعداً آن را صدا بزند؟',
        options: ['onClick={handleSave}', 'onClick={handleSave()}', 'onClick={saveNow()}'],
        answerIndex: 0,
        explanation:
          'اگر خود تابع را بدهی، React آن را بعداً هنگام رخ دادن event صدا می‌زند. صدا زدن آن در render خیلی زود اجرا می‌شود.',
        xpReward: 20,
      },
      {
        id: 'events-controlled-input',
        title: 'input کنترل‌شده چیست؟',
        prompt: 'بهترین توصیف را انتخاب کن.',
        options: [
          'مقدار از state React می‌آید و `onChange` همان state را به‌روز می‌کند',
          'browser مقدار را نگه می‌دارد و React هیچ‌وقت آن را نمی‌خواند',
          'input فقط وقتی کار می‌کند که `defaultValue` داشته باشد',
        ],
        answerIndex: 0,
        explanation:
          'input کنترل‌شده state React را منبع اصلی نگه می‌دارد تا preview و validation هماهنگ بمانند.',
        xpReward: 20,
      },
      {
        id: 'events-prevent-default',
        title: 'چرا preventDefault؟',
        prompt: 'دلیل اصلی صدا زدن آن در submit فرم چیست؟',
        options: [
          'تا browser متن فیلدها را فراموش کند',
          'تا reload یا navigation پیش‌فرض browser متوقف شود',
          'تا فرم به input کنترل‌شده تبدیل شود',
        ],
        answerIndex: 1,
        explanation:
          'در درس‌های React معمولاً می‌خواهیم روی همان صفحه بمانیم و draft را validate و قبول کنیم.',
        xpReward: 20,
      },
      {
        id: 'events-form-state-update',
        title: 'یک فیلد را چطور به‌روز می‌کنی؟',
        prompt: 'کدام update بقیه‌ی object را دست‌نخورده نگه می‌دارد؟',
        options: [
          'setFormState({ note: event.target.value })',
          'setFormState((previous) => ({ ...previous, note: event.target.value }))',
          'setFormState(previous.note = event.target.value)',
        ],
        answerIndex: 1,
        explanation: 'spread object قبلی را کپی می‌کند و فقط همان key را با مقدار تازه عوض می‌کند.',
        xpReward: 20,
      },
      {
        id: 'events-derived-ui',
        title: 'چه چیزی باید مشتق شود؟',
        prompt: 'کدام UI بهتر است از state فعلی حساب شود و جدا ذخیره نشود؟',
        options: ['شمار کاراکتر و preview card', 'خود فیلد عنوان', 'submit event'],
        answerIndex: 0,
        explanation: 'preview و counter باید از draft فعلی بیایند تا از مقدار فیلدها جدا نشوند.',
        xpReward: 20,
      },
    ],
    effects: [
      {
        id: 'effects-purpose',
        title: 'چرا useEffect وجود دارد؟',
        prompt: 'کدام جواب دقیق‌تر است؟',
        options: [
          'برای هر محاسبه‌ای بعد از هر render، حتی اگر بیرونی نباشد',
          'برای sync کردن React با سیستم‌های بیرون از render مثل timer، title یا storage',
          'برای جایگزین کردن همه‌ی event handlerها و setterها',
        ],
        answerIndex: 1,
        explanation:
          'useEffect بیشتر برای sync با سیستم‌های بیرونی است. محاسبه‌های خالص بهتر است داخل render بمانند.',
        xpReward: 20,
      },
      {
        id: 'effects-cleanup-sequence',
        title: 'با تغییر dependency چه می‌شود؟',
        prompt: 'ترتیب درست را انتخاب کن.',
        options: [
          'اول setup جدید اجرا می‌شود و بعد cleanup قبلی',
          'اول cleanup قبلی اجرا می‌شود و بعد setup جدید با مقدارهای تازه',
          'React تا unmount شدن component cleanup را اجرا نمی‌کند',
        ],
        answerIndex: 1,
        explanation:
          'وقتی effect به خاطر dependencyهای جدید rerun می‌شود، React اول sync قبلی را جمع می‌کند و بعد setup جدید را اجرا می‌کند.',
        xpReward: 20,
      },
      {
        id: 'effects-dependencies',
        title: 'معنی dependency array چیست؟',
        prompt: 'کدام گزینه درست است؟',
        options: [
          'نبودن dependency array یعنی فقط یک بار اجرا شو',
          'آرایه‌ی خالی و نداشتن array یک معنی دارند',
          'نبودن array یعنی بعد از هر commit و `[]` یعنی یک بار setup و cleanup در unmount',
        ],
        answerIndex: 2,
        explanation:
          'نبودن dependency array یعنی بعد از هر render commit‌شده اجرا شو. `[]` یعنی یک بار setup بعد از commit اول و cleanup در unmount.',
        xpReward: 20,
      },
      {
        id: 'effects-debounce',
        title: 'چرا debounce به cleanup نیاز دارد؟',
        prompt: 'وقتی کاربر قبل از تمام شدن timeout دوباره تایپ می‌کند چه باید بشود؟',
        options: [
          'timeout قبلی باید بماند تا هر دو مقدار اعمال شوند',
          'timeout قبلی باید پاک شود تا فقط آخرین ورودی برنده شود',
          'React بدون cleanup به‌طور خودکار timeoutهای قدیمی را نادیده می‌گیرد',
        ],
        answerIndex: 1,
        explanation:
          'debounce یعنی لغو کردن کار زمان‌بندی‌شده‌ی قدیمی. cleanup timeout قبلی را پاک می‌کند تا فقط آخرین ورودی اعمال شود.',
        xpReward: 20,
      },
      {
        id: 'effects-localstorage',
        title: 'sync با localStorage اینجا چه کاری می‌کند؟',
        prompt: 'کدام توضیح بهتر است؟',
        options: [
          'JSX را در render دوباره محاسبه می‌کند',
          'داده‌ی مرورگر را هماهنگ نگه می‌دارد تا note بعد از refresh باقی بماند',
          'state را کاملاً حذف می‌کند تا دیگر rerenderی وجود نداشته باشد',
        ],
        answerIndex: 1,
        explanation:
          'localStorage یک سیستم بیرونی در browser است. sync با آن باعث می‌شود note بعد از refresh برگردد، در حالی که React state هنوز UI را کنترل می‌کند.',
        xpReward: 20,
      },
      {
        id: 'effects-avoid',
        title: 'چه زمانی بهتر است از useEffect استفاده نکنی؟',
        prompt: 'کدام مورد معمولاً effect نمی‌خواهد؟',
        options: [
          'محاسبه‌ی یک label از روی props داخل render',
          'شروع کردن interval و پاک کردن آن بعداً',
          'sync کردن `document.title` با یک مقدار متغیر',
        ],
        answerIndex: 0,
        explanation:
          'value مشتق‌شده‌ی خالص معمولاً باید در render بماند. effect بیشتر برای sync با سیستم‌های بیرونی مناسب است.',
        xpReward: 20,
      },
    ],
    routing: [
      {
        id: 'routing-client-routing',
        title: 'چرا client-side routing؟',
        prompt: 'کدام توضیح دقیق‌تر است؟',
        options: [
          'app را روی یک document نگه می‌دارد و فقط page componentها را عوض می‌کند',
          'هر بار که path عوض می‌شود reload کامل می‌کند',
          'فقط برای style دادن به دکمه‌ها است',
        ],
        answerIndex: 0,
        explanation:
          'client-side routing shell برنامه را mounted نگه می‌دارد و به React اجازه می‌دهد page component را بدون درخواست document تازه عوض کند.',
        xpReward: 20,
      },
      {
        id: 'routing-route-page',
        title: 'Route چه چیزهایی را وصل می‌کند؟',
        prompt: 'بهترین پاسخ را انتخاب کن.',
        options: [
          'یک path segment و یک page component',
          'یک button و یک handler submit',
          'یک effect و cleanup آن',
        ],
        answerIndex: 0,
        explanation:
          'Route همان map بین path URL و page componentی است که باید برای آن path render شود.',
        xpReward: 20,
      },
      {
        id: 'routing-link-navlink',
        title: 'چه زمانی از Link یا NavLink استفاده کنیم؟',
        prompt: 'برای navigation داخلی کدام گزینه بهتر است؟',
        options: [
          'برای همه‌ی مسیرهای داخلی از anchor معمولی استفاده کنیم',
          'از Link یا NavLink استفاده کنیم تا app بدون reload کامل جابه‌جا شود',
          'از window.location برای رفتن بین درس‌ها استفاده کنیم',
        ],
        answerIndex: 1,
        explanation:
          'Link و NavLink navigation را داخل app نگه می‌دارند. NavLink وقتی route فعلی باید active دیده شود مفید است.',
        xpReward: 20,
      },
      {
        id: 'routing-locale-segment',
        title: 'چرا زیر :locale می‌رویم؟',
        prompt: 'دلیل اصلی استفاده از segment locale در این app چیست؟',
        options: [
          'برای اینکه tree دو زبانه بماند و /fa و /en هماهنگ باشند',
          'برای اینکه component صفحه دیده نشود',
          'برای اینکه دیگر نیازی به درس‌ها نباشد',
        ],
        answerIndex: 0,
        explanation:
          'segment locale نسخه‌های فارسی و انگلیسی course را از نظر ساختار هم‌راستا نگه می‌دارد و در عین حال linkهای محلی‌سازی‌شده را ممکن می‌کند.',
        xpReward: 20,
      },
      {
        id: 'routing-fallback-recovery',
        title: 'fallback route چه کار می‌کند؟',
        prompt: 'کدام رفتار مفیدتر است؟',
        options: [
          'کاربر را روی صفحه‌ی خالی رها کند',
          'با not-found page یا redirect امن recovery کند',
          'ادعا کند path اشتباه هم معتبر است',
        ],
        answerIndex: 1,
        explanation:
          'fallback routeها typo و locale پشتیبانی‌نشده را به حالت recovery تبدیل می‌کنند تا هنرجو هنوز راهی برای ادامه داشته باشد.',
        xpReward: 20,
      },
    ],
    'context-state': [
      {
        id: 'context-prop-drilling',
        title: 'prop drilling چیست؟',
        prompt: 'بهترین توضیح را انتخاب کن.',
        options: [
          'عبور دادن یک value از چند component که فقط آن را forward می‌کنند',
          'نگه داشتن همه‌ی valueها داخل Context به‌صورت پیش‌فرض',
          'یک ویژگی routing برای URLهای تو در تو',
        ],
        answerIndex: 0,
        explanation:
          'prop drilling یعنی یک value از componentهایی عبور می‌کند که از آن استفاده نمی‌کنند تا در نهایت یک child عمیق آن را بخواند.',
        xpReward: 20,
      },
      {
        id: 'context-lifted-state',
        title: 'چه زمانی state بالا کشیده‌شده از Context بهتر است؟',
        prompt: 'کدام حالت برای lifted state بهتر است؟',
        options: [
          'دو sibling نزدیک به همان value نیاز دارند',
          'بسیاری از routeهای دور به همان value نیاز دارند',
          'هیچ component دیگری به value نیاز ندارد',
        ],
        answerIndex: 0,
        explanation:
          'وقتی نزدیک‌ترین parent مشترک owner درستِ value برای دو sibling نزدیک است، state را بالا ببر.',
        xpReward: 20,
      },
      {
        id: 'context-provider',
        title: 'Provider چه کاری انجام می‌دهد؟',
        prompt: 'دقیق‌ترین جواب را انتخاب کن.',
        options: [
          'یک Context value را در اختیار subtree می‌گذارد',
          'valueها را برای همیشه در localStorage ذخیره می‌کند',
          'جای router را می‌گیرد',
        ],
        answerIndex: 0,
        explanation:
          'Provider مرزی تعریف می‌کند که descendants داخل آن به یک Context value مشترک دسترسی دارند.',
        xpReward: 20,
      },
      {
        id: 'context-custom-hook',
        title: 'چرا Context را در custom hook wrap می‌کنیم؟',
        prompt: 'کدام جواب بهتر است؟',
        options: [
          'جزئیات خام context را پنهان می‌کند و استفاده از provider را guard می‌کند',
          'Context را بیرون از provider هم در دسترس می‌کند',
          'همه‌ی rerenderها را از app حذف می‌کند',
        ],
        answerIndex: 0,
        explanation:
          'Custom hook API را کوچک‌تر، خواناتر و امن‌تر می‌کند چون جزئیات خام context را پنهان می‌کند.',
        xpReward: 20,
      },
      {
        id: 'context-appwide-values',
        title: 'کدام valueها در این app نامزدهای خوبی برای Context هستند؟',
        prompt: 'بهترین pair را انتخاب کن.',
        options: ['زبان و پیشرفت', 'یک draft input و hover یک button', 'counter محلی یک component'],
        answerIndex: 0,
        explanation:
          'زبان و پیشرفت از چندین route عبور می‌کنند، پس نامزدهای خوبی برای state مشترک سراسری هستند.',
        xpReward: 20,
      },
      {
        id: 'context-tradeoff',
        title: 'Context چه زمانی انتخاب خوبی نیست؟',
        prompt: 'بهترین مثال را انتخاب کن.',
        options: [
          'یک draft کوچک و یک‌باره که فقط یک component به آن نیاز دارد',
          'زبان در سراسر app shell',
          'پیشرفت در همه‌ی routeها',
        ],
        answerIndex: 0,
        explanation:
          'Draftهای کوچک محلی معمولاً ساده‌ترند اگر در state محلی بمانند تا اینکه به provider وسیع منتقل شوند.',
        xpReward: 20,
      },
    ],
    'project-architecture': [
      {
        id: 'project-architecture-routes',
        title: 'route tree را چه کسی مالک است؟',
        prompt: 'بهترین owner برای مرز routeهای lesson را انتخاب کن.',
        options: ['`src/App.jsx`', '`TaskManagerLab`', '`QuizPanel`'],
        answerIndex: 0,
        explanation:
          '`src/App.jsx` مالک route tree، جای locale guard و این است که برای هر path کدام page render شود.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-page-vs-shared',
        title: 'کدام state باید در مالکیت page بماند؟',
        prompt: 'بهترین مثال از state متعلق به page در این lesson کدام است؟',
        options: [
          'لایه‌ی معماری انتخاب‌شده در ProjectArchitecturePage',
          'منطق عمومی تب‌ها در LessonTemplate',
          'ruleهای storage مربوط به Task Manager',
        ],
        answerIndex: 0,
        explanation:
          'لایه‌ی انتخاب‌شده در explorer یک state محلیِ همین lesson page است و نباید وارد shared componentها یا providerهای سراسری شود.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-feature-owner',
        title: 'چه چیزی به Task Manager feature تعلق دارد؟',
        prompt: 'دقیق‌ترین پاسخ را انتخاب کن.',
        options: [
          'CRUD تسک، filter، search، state فرم، storage و XP behavior مخصوص تسک',
          'locale route guard و صفحه‌ی not-found',
          'lesson copy محلی‌سازی‌شده برای هر دو زبان',
        ],
        answerIndex: 0,
        explanation:
          'این behaviorها بخشی از دامنه‌ی Task Manager هستند و باید داخل `features/taskManager` در مالکیت feature بمانند.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-manifest',
        title: '`courseManifest` چه چیزی را مالک است؟',
        prompt: 'بهترین مجموعه‌ی مسئولیت را انتخاب کن.',
        options: [
          'ترتیب ماژول‌ها، path، accent، XP reward و nextId',
          'state مربوط به live lab هر page',
          'منطق filter مربوط به Task Manager و localStorage fallback',
        ],
        answerIndex: 0,
        explanation:
          '`courseManifest` metadata مربوط به جریان ماژول و navigation را نگه می‌دارد، نه behavior مربوط به page یا feature را.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-i18n',
        title: 'چه چیزی داخل فایل‌های محتوای محلی‌سازی‌شده قرار می‌گیرد؟',
        prompt: 'بهترین پاسخ را انتخاب کن.',
        options: [
          'lesson copy ترجمه‌شده، exampleها، quizها، labelها و tipها',
          'route tree و پیاده‌سازی locale guard',
          'قوانین persistence مربوط به explorer state',
        ],
        answerIndex: 0,
        explanation:
          'فایل‌های محتوای محلی‌سازی‌شده مالک داده‌ی ترجمه‌شده‌ی lesson هستند. routing و page state به لایه‌های دیگری تعلق دارند.',
        xpReward: 20,
      },
      {
        id: 'project-architecture-mega-component',
        title: 'ریسک mega-component چیست؟',
        prompt: 'کدام تغییر این ریسک را واضح‌تر ایجاد می‌کند؟',
        options: [
          'آموزش دادن به یک shared component برای مالک شدن labهای مخصوص page و ruleهای feature',
          'generic نگه داشتن `LiveLabFrame` و دادن children متعلق به page',
          'نگه داشتن ترتیب ماژول‌ها در `courseManifest`',
        ],
        answerIndex: 0,
        explanation:
          'mega-component وقتی شکل می‌گیرد که UI مشترک شروع به مالک شدن behavior مخصوص page یا feature کند؛ behaviorی که باید در لایه‌های دیگر بماند.',
        xpReward: 20,
      },
    ],
    'testing-accessibility': [
      {
        id: 'testing-accessibility-unit-vs-integration',
        title: 'کدام سطح تست برای flow مربوط به feature مناسب‌تر است؟',
        prompt:
          'بهترین گزینه را برای اضافه کردن یک task از طریق UI و بررسی نتیجه در list انتخاب کن.',
        options: [
          'integration test، چون input، submit و list rendering با هم کار می‌کنند',
          'unit test، چون هر click به‌صورت خودکار isolate است',
          'اگر JSX درست به‌نظر برسد دیگر test لازم نیست',
        ],
        answerIndex: 0,
        explanation:
          'این یک integration flow است. چند بخش UI و interaction کنار هم نتیجه‌ی قابل‌دیدن را می‌سازند.',
        xpReward: 20,
      },
      {
        id: 'testing-accessibility-user-centric',
        title: 'کدام query کاربرمحورتر است؟',
        prompt: 'سبک queryای را انتخاب کن که بیشتر با رویکرد کتابخانه‌ی تست هماهنگ است.',
        options: [
          'پیدا کردن control با role و accessible name',
          'query گرفتن از اولین element با یک class مربوط به style',
          'خواندن مستقیم یک متغیر state مربوط به React',
        ],
        answerIndex: 0,
        explanation:
          'query بر پایه‌ی role و accessible name به شیوه‌ی پیدا کردن UI توسط کاربر و ابزار کمکی نزدیک‌تر است.',
        xpReward: 20,
      },
      {
        id: 'testing-accessibility-labels',
        title: 'چرا labelهای دسترس‌پذیر مهم هستند؟',
        prompt: 'قوی‌ترین پاسخ را انتخاب کن.',
        options: [
          'هم به کاربران واقعی کمک می‌کنند controlها را بفهمند و هم testها را با queryهای پایدارتر ساده‌تر می‌کنند',
          'فقط برای screen reader مفید هستند و روی testها اثری ندارند',
          'نیاز به متن قابل‌دیدن روی button را از بین می‌برند',
        ],
        answerIndex: 0,
        explanation:
          'label دسترس‌پذیر هم usability و هم testability را قوی‌تر می‌کند، چون control یک نام عمومی و پایدار پیدا می‌کند.',
        xpReward: 20,
      },
      {
        id: 'testing-accessibility-keyboard-focus',
        title: 'بعد از خطای validation چه باید اتفاقی بیفتد؟',
        prompt: 'بهترین رفتار مربوط به keyboard و focus را انتخاب کن.',
        options: [
          'focus به field یا feedbackی برود که کاربر باید بعد از آن ببیند',
          'focus هر جا بماند چون border قرمز کافی است',
          'message پنهان بماند تا کاربر با ماوس روی چیزی کلیک کند',
        ],
        answerIndex: 0,
        explanation:
          'بعد از یک خطای مهم، focus باید به کاربر کمک کند سریع‌تر recover کند؛ نه اینکه او را وادار به جست‌وجو کند.',
        xpReward: 20,
      },
      {
        id: 'testing-accessibility-semantics',
        title: 'چه زمانی باید ARIA اضافه شود؟',
        prompt: 'بهترین rule را انتخاب کن.',
        options: [
          'بعد از اینکه بررسی شود HTML بومی از قبل معناشناسی لازم را می‌دهد یا نه',
          'روی هر element تعاملی، محض احتیاط',
          'فقط برای بهتر شدن style دیداری',
        ],
        answerIndex: 0,
        explanation:
          'اول معناشناسی بومی را بررسی می‌کنیم. ARIA برای gapهای واقعی است که HTML به‌تنهایی نمی‌پوشاند.',
        xpReward: 20,
      },
      {
        id: 'testing-accessibility-contrast',
        title: 'درس مربوط به contrast و feedback چیست؟',
        prompt: 'بهترین یادآوری مربوط به کیفیت را انتخاب کن.',
        options: [
          'نباید فقط به رنگ تکیه کرد؛ feedback باید خوانا و صریح بماند',
          'hint text کم‌contrast اگر layout تمیز باشد مشکلی ندارد',
          'وقتی page label دارد، دسترس‌پذیری کامل شده است',
        ],
        answerIndex: 0,
        explanation: 'feedback خوانا به contrast کافی نیاز دارد و نباید فقط با رنگ معنا منتقل کند.',
        xpReward: 20,
      },
    ],
    project: [
      {
        id: 'project-crud',
        title: 'اولویت اصلی Task Manager چیست؟',
        prompt: 'کدام هدف به ساختار پروژه نزدیک‌تر است؟',
        options: ['فقط ظاهر زیبا', 'CRUD و state flow', 'ساخت animation پیچیده'],
        answerIndex: 1,
        explanation: 'این پروژه برای تمرین workflow کامل ساخت، ویرایش و حذف تسک‌ها طراحی شده است.',
        xpReward: 20,
      },
      {
        id: 'project-storage',
        title: 'localStorage چه نقشی دارد؟',
        prompt: 'بهترین توضیح کدام است؟',
        options: ['فقط برای theme', 'پایداری داده بین refreshها', 'برای render مستقیم DOM'],
        answerIndex: 1,
        explanation:
          'localStorage باعث می‌شود داده‌های کاربر بعد از refresh هم باقی بمانند و پروژه کاربردی‌تر شود.',
        xpReward: 15,
      },
    ],
  },
};
