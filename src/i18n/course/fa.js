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
        lead: 'این صفحه به تو می‌گوید هر ابزار دقیقاً چه کاری می‌کند و کدام‌یک برای شروع React مناسب‌تر است.',
        primaryAction: 'ثبت یادگیری ابزارها',
        secondaryAction: 'رفتن به JavaScript',
      },
      summary: {
        intro:
          'ابزارهای خوب سرعت و کیفیت را بالا می‌برند. اینجا فقط چیزی را نگه می‌داریم که برای development flow لازم است.',
        points: ['npm و pnpm', 'Vite برای dev server', 'ESLint و Prettier برای کیفیت'],
        story: [
          {
            title: 'npm',
            description: 'برای شروع آموزش و اغلب پروژه‌های تازه، انتخاب ساده و قابل پیش‌بینی است.',
          },
          {
            title: 'pnpm',
            description: 'وقتی سرعت نصب و مصرف کمتر فضا مهم باشد، گزینه‌ی خوبی است.',
          },
        ],
      },
      live: {
        eyebrow: 'ابزارها',
        title: 'هر ابزار چه نقشی دارد؟',
        lead: 'روی هر tab بزن و نقش آن را مرور کن.',
        whyLabel: 'چرا مهم است؟',
        noteLabel: 'یادگیری در یک خط',
      },
      tools: {
        npm: {
          title: 'npm',
          badge: 'پیش‌فرض',
          summary: 'package manager رسمی Node برای install کردن dependencyها و اجرای scriptها.',
          why: 'اگر Node داری، npm هم معمولاً آماده است.',
          command: 'npm install',
          note: 'وقتی می‌خواهی یک پروژه React را سریع راه بیندازی، این بهترین نقطه شروع است.',
        },
        pnpm: {
          title: 'pnpm',
          badge: 'اختیاری',
          summary: 'همان کار npm را با storage بهینه‌تر و معمولاً سریع‌تر انجام می‌دهد.',
          why: 'برای تیم‌هایی که سرعت نصب و فضای کمتر می‌خواهند مناسب است.',
          command: 'pnpm install',
          note: 'در این sandbox لازم نیست، ولی دانستنش برای پروژه‌های واقعی خیلی مفید است.',
        },
        vite: {
          title: 'Vite',
          badge: 'dev server',
          summary: 'ابزار سریع ساخت dev server و build برای appهای مدرن React.',
          why: 'hot module replacement سریع و تجربه‌ی توسعه‌ی روان می‌دهد.',
          command: 'npm run dev',
          note: 'از Vite برای شروع پروژه و برای build تولیدی استفاده می‌کنیم.',
        },
        eslint: {
          title: 'ESLint',
          badge: 'lint',
          summary: 'کد را می‌خواند و خطا، anti-pattern و ruleهای تیم را بررسی می‌کند.',
          why: 'قبل از اینکه bug به browser برسد، هشدار می‌دهد.',
          command: 'npm run lint',
          note: 'برای کیفیت کد و آموزش good practiceها فوق‌العاده است.',
        },
        prettier: {
          title: 'Prettier',
          badge: 'format',
          summary: 'ظاهر کد را یکدست می‌کند تا بحث style از منطق جدا بماند.',
          why: 'تیم را از بحث‌های تکراری درباره‌ی فاصله و line break نجات می‌دهد.',
          command: 'npm run format',
          note: 'Prettier درباره‌ی «چطور نوشته شود» تصمیم می‌گیرد، نه «چه کاری انجام دهد».',
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
        'اگر project تازه است، npm و Vite ترکیب ساده و قابل‌اعتماد هستند.',
        'ESLint و Prettier را رقیب هم نبین؛ یکی خطا را می‌گیرد و دیگری ظاهر را منظم می‌کند.',
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
          'این پروژه تمرکز را از syntax به workflow می‌برد: ساختن، ویرایش کردن، فیلتر کردن و حفظ state در localStorage.',
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
          'کد را از نظر خطا و rule بررسی می‌کند',
          'ظاهر کد را تمیز و یکدست می‌کند',
          'dependency نصب می‌کند',
        ],
        answerIndex: 0,
        explanation: 'ESLint برای linting و پیدا کردن errorها و anti-patternها به کار می‌رود.',
        xpReward: 15,
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