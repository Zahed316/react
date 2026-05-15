export const courseFa = {
  navigation: {
    home: 'خانه',
    setup: 'شروع',
    tooling: 'ابزارها',
    js: 'JavaScript',
    react: 'JSX و State',
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
        lead:
          'در این درس فقط اسم ابزارها را حفظ نمی‌کنیم؛ می‌فهمیم چرا به‌وجود آمده‌اند، پشت صحنه چه می‌کنند و در پروژه‌های واقعی React چطور به کار می‌روند.',
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
        lead:
          'یک ابزار را انتخاب کن و با یک ساختار ثابت جلو برو: تعریف، دلیل وجود، مکانیزم داخلی، شبیه‌سازی، مثال، اشتباه‌ها و کاربرد واقعی.',
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
              body:
                'در ابتدا مخزن فقط source code و metadataهایی مثل `package.json` و `package-lock.json` را دارد. خود libraryها هنوز نصب نشده‌اند.',
            },
            {
              title: '`npm install` را اجرا می‌کنی',
              body:
                'npm نام dependencyها و versionها را می‌خواند، lockfile را بررسی می‌کند، packageها را دانلود می‌کند و فایل‌های قابل‌استفاده را داخل `node_modules` قرار می‌دهد.',
            },
            {
              title: 'npm نتیجه را ثبت می‌کند',
              body:
                'اگر dependency resolution تغییر کند، npm lockfile را به‌روز می‌کند تا نفر بعدی هم بتواند همان نصب را تکرار کند.',
            },
            {
              title: '`npm run dev` را اجرا می‌کنی',
              body:
                'npm به دنبال scriptی به نام `dev` در `package.json` می‌گردد و command واقعی زیر آن را اجرا می‌کند که در این پروژه معمولاً `vite` است.',
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
            task:
              '`package.json` را باز کن، object مربوط به `scripts` را پیدا کن و توضیح بده در این repo چه ابزاری واقعاً dev server را روشن می‌کند.',
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
              body:
                'در مدل ساده‌تر، هر پروژه ممکن است نسخه‌ی کامل خودش از همان package را روی دیسک نگه دارد.',
            },
            {
              title: 'pnpm package را یک بار در store مشترک نگه می‌دارد',
              body:
                'محتوای package به‌صورت مرکزی cache می‌شود و پروژه‌ها به آن link می‌شوند، نه اینکه هر بار نسخه‌ی کامل را کپی کنند.',
            },
            {
              title: 'پروژه‌ی جدید سریع‌تر install می‌شود',
              body:
                'اگر package از قبل در store باشد، pnpm می‌تواند همان را reuse کند و لازم نیست همه‌چیز را از صفر دانلود و کپی کند.',
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
            task:
              'npm و pnpm را هرکدام در یک جمله تعریف کن: شغل یکسان، استراتژی ذخیره‌سازی متفاوت.',
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
              body:
                'npm command مربوط به `vite` را از `package.json` اجرا می‌کند و Vite یک server محلی می‌سازد که فایل‌های پروژه را زیر نظر می‌گیرد.',
            },
            {
              title: 'app را در browser باز می‌کنی',
              body:
                'browser ماژول‌ها را درخواست می‌کند و Vite نسخه‌ی تبدیل‌شده‌ی فایل‌ها را برای development به آن می‌دهد.',
            },
            {
              title: 'یک component React را تغییر می‌دهی',
              body:
                'Vite فایل تغییرکرده را تشخیص می‌دهد و update سریع می‌فرستد تا بدون rebuild سنگین نتیجه را ببینی.',
            },
            {
              title: '`npm run build` را اجرا می‌کنی',
              body:
                'Vite به جای تمرکز روی سرعت ویرایش، فایل‌های نهایی بهینه برای deploy را تولید می‌کند.',
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
            takeaway:
              'ارزش اصلی Vite کم کردن فاصله‌ی بین تغییر کد و دیدن نتیجه در browser است.',
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
            question:
              'چرا برای ویرایش روزمره، `npm run dev` از `npm run build` مناسب‌تر است؟',
            task:
              'توضیح بده در حالت development و در حالت build production، نقش Vite چه تفاوتی دارد.',
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
              body:
                'افزونه ESLint یا command مربوطه متن فایل را می‌خواند و آن را به tree ساختاریافته‌ای از importها، variableها، function callها و JSX تبدیل می‌کند.',
            },
            {
              title: 'ruleها tree را بررسی می‌کنند',
              body:
                'هر rule یک pattern کوچک را می‌سنجد. یکی ممکن است متغیر unused را پیدا کند. دیگری محل صدا زدن hook یا dependencyهای effect را بررسی کند.',
            },
            {
              title: 'هشدار قبل از runtime ظاهر می‌شود',
              body:
                'editor می‌تواند همان لحظه زیر خط بکشد، یا `npm run lint` همان مشکل را در terminal و CI گزارش کند.',
            },
            {
              title: 'هشدار را رفع یا با دلیل مستند می‌کنی',
              body:
                'اگر هشدار درست باشد، کد را اصلاح می‌کنی. اگر نه، استثنا را آگاهانه و محدود مستند می‌کنی، نه اینکه کل lint را نادیده بگیری.',
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
            task:
              'static analysis را در یک جمله تعریف کن، بعد یک موردی را نام ببر که ESLint می‌تواند بگیرد و یک موردی را که نمی‌تواند به‌تنهایی تضمین کند.',
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
              body:
                'کد ممکن است کار کند، اما spacing، wrapping و punctuation آن بین فایل‌ها یا بین افراد مختلف ناسازگار باشد.',
            },
            {
              title: 'Prettier فایل را دوباره چاپ می‌کند',
              body:
                'به‌جای اینکه منطق را بسنجد، فایل را در یک style قابل‌پیش‌بینی بازنویسی می‌کند.',
            },
            {
              title: 'diffها و reviewها تمیزتر می‌شوند',
              body:
                'وقتی formatting خودکار باشد، reviewerها می‌توانند به‌جای اصلاحات ظاهری روی منطق و maintainability تمرکز کنند.',
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
            task:
              'یک snippet نامرتب از همین درس را بردار و بگو کدام تغییرها فقط formatting هستند و کدام‌ها رفتار را تغییر می‌دهند.',
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
      title: 'کامپوننت، JSX، props و state',
      hero: {
        eyebrow: 'گام ۲-۳',
        title: 'JSX، component، props و state',
        lead: 'حالا وارد دنیای React می‌شویم: JSX چگونه UI را توصیف می‌کند، props چطور داده را از parent به child می‌فرستند، و state چگونه تعامل را زنده نگه می‌دارد.',
        primaryAction: 'این بخش را تمرین کردم',
        secondaryAction: null,
      },
      summary: {
        intro:
          'در React، component کوچک‌تر از آن است که به نظر می‌رسد: هر بخش فقط یک مسئولیت را نگه می‌دارد و از بیرون data می‌گیرد.',
        points: ['JSX = UI description', 'props = data from parent', 'state = internal memory'],
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
      quizTitle: 'props یا state؟',
      tips: [
        'وقتی data از parent می‌آید، معمولاً props است؛ وقتی component خودش نگهش می‌دارد، state است.',
        'اگر UI به event پاسخ می‌دهد، handler و state را با هم ببین.',
      ],
    },
    effects: {
      stageLabel: 'گام ۴',
      title: 'useEffect و side effectها',
      hero: {
        eyebrow: 'گام ۴',
        title: 'useEffect، side effect و data sync',
        lead: 'در این بخش یاد می‌گیریم چه زمانی از effect استفاده کنیم، cleanup چه می‌کند و چطور با دنیای بیرون مثل timer و localStorage sync شویم.',
        primaryAction: 'این بخش را تمرین کردم',
        secondaryAction: null,
      },
      summary: {
        intro:
          'useEffect جایی است که React با دنیای بیرون گفتگو می‌کند: timer، title، subscription و persistence.',
        points: ['cleanup مهم است', 'debounce = delay کنترل‌شده', 'state را با بیرون sync کن'],
      },
      clock: {
        eyebrow: 'useEffect',
        title: 'ساعت زنده و cleanup',
        lead: 'interval در useEffect ساخته و در cleanup پاک می‌شود.',
      },
      debounce: {
        eyebrow: 'cleanup demo',
        title: 'جست‌وجوی debounce',
        lead: 'با هر تایپ، effect قبلی پاک می‌شود و فقط آخرین مقدار بعد از کمی مکث اعمال می‌شود.',
        searchLabel: 'جست‌وجو',
        placeholder: 'مثلاً state',
        lastQuery: 'آخرین query',
        empty: 'هنوز چیزی وارد نشده است.',
      },
      note: {
        eyebrow: 'persistence',
        title: 'یادداشت زنده',
        lead: 'این textarea با localStorage sync می‌شود تا اثر side effect را ببینی.',
        label: 'یادداشت',
        initial: 'useEffect برای side effect، timer و sync بیرونی به کار می‌رود.',
      },
      routingNotes: [
        'از `Link` و `NavLink` برای جابه‌جایی بدون reload استفاده می‌کنیم.',
        'هر صفحه یک route جدا دارد تا ساختار app تمیز بماند.',
        'در پروژه واقعی، routeها کمک می‌کنند codebase قابل‌گسترش‌تر شود.',
      ],
      quizTitle: 'cleanup را محک بزن',
      tips: [
        'هر effect باید دلیل روشن داشته باشد: sync با بیرون، نه صرفاً عادت.',
        'cleanup را فراموش نکن؛ خیلی از bugها از timer یا listenerهای رهاشده می‌آیند.',
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
      routing: 'Routing',
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
        id: 'react-props-state',
        title: 'props یا state؟',
        prompt: 'ورودی که از parent می‌آید و component خودش آن را نگه نمی‌دارد چیست؟',
        options: ['props', 'state', 'effect'],
        answerIndex: 0,
        explanation: 'props از بیرون می‌آیند. state داده‌ای است که component خودش کنترل می‌کند.',
        xpReward: 20,
      },
    ],
    effects: [
      {
        id: 'effects-cleanup',
        title: 'cleanup چه زمانی مهم است؟',
        prompt: 'کدام موقعیت بیشتر به cleanup نیاز دارد؟',
        options: ['interval و event listener', 'متن دکمه', 'آدرس route'],
        answerIndex: 0,
        explanation:
          'وقتی side effect منابع بیرونی مثل timer یا listener می‌سازد، cleanup برای پاک‌سازی لازم است.',
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
