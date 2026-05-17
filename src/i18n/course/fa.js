export const courseFa = {
  navigation: {
    home: 'خانه',
    setup: 'شروع',
    tooling: 'ابزارها',
    js: 'JavaScript',
    react: 'JSX و State',
    'events-forms': 'رویدادها و فرم‌ها',
    effects: 'useEffect',
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
        title: 'Draft کوچک task',
        lead: 'در یک draft کنترل‌شده تایپ کن و preview را بدون هیچ persistence‌ای ببین.',
        guidance:
          'این slice اول فقط یک draft object را در state نگه می‌دارد. نه localStorage دارد و نه هنوز به CRUD کامل Task Manager می‌رسد.',
        stateNote:
          'فرم کنترل‌شده است، validation محلی است، submit متوقف می‌شود و reset draft را پاک می‌کند.',
        fields: {
          title: 'عنوان task',
          note: 'یادداشت کوتاه',
          category: 'دسته',
        },
        placeholders: {
          title: 'مثلاً تمرین controlled inputs',
          note: 'یک یادداشت کوتاه برای بعد',
        },
        help: {
          title: 'برای submit لازم است.',
          note: 'یادداشت را کوتاه نگه دار. preview از متن زنده استفاده می‌کند.',
        },
        validation: {
          titleRequired: 'عنوان task لازم است.',
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
          emptySubmitted: 'برای ثبت یک snapshot فرم را submit کن.',
        },
        actions: {
          submit: 'ارسال draft',
          reset: 'پاک کردن draft',
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
        secondaryAction: null,
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
    project: {
      stageLabel: 'گام ۶',
      title: 'Task Manager نهایی',
      hero: {
        eyebrow: 'گام ۶',
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
