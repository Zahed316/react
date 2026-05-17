<div dir="rtl">

# React Lab

**React Lab** یک پلتفرم آموزشی دوزبانه برای یادگیری React از طریق تمرین عملی است. مسیر آموزشی پروژه فارسی‌محور طراحی شده، اما محتوای انگلیسی نیز با همان ساختار و هدف آموزشی نگه‌داری می‌شود. برنامه از چیدمان راست‌به‌چپ و چپ‌به‌راست پشتیبانی می‌کند و پیشرفت کاربر را به صورت محلی در `localStorage` ذخیره می‌کند.

## وضعیت انتشار

- نسخه: `1.0.0`
- وضعیت دوره: کامل
- ماژول‌های باقی‌مانده: هیچ‌کدام
- ماژول نهایی: `project`، پروژه عملی Task Manager
- مدل عملکردی: بارگذاری تنبل صفحه‌های درس و بارگذاری محتوای دوره بر اساس زبان در زمان نیاز
- blocker شناخته‌شده: ندارد

## خلاصه محصول

این پروژه یک sandbox پراکنده یا مجموعه‌ای از صفحه‌های جدا از هم نیست. هدف آن یک مسیر آموزشی کامل و قابل دنبال‌کردن برای یادگیری React است. هر درس بخشی از یک جریان مشخص است و در پایان، کاربر با ساخت پروژه Task Manager مفاهیم یادگرفته‌شده را به صورت عملی جمع‌بندی می‌کند.

## امکانات اصلی

- مسیر‌یابی وابسته به زبان برای فارسی و انگلیسی
- پشتیبانی از مسیرهای `/fa` و `/en`
- پشتیبانی از RTL و LTR
- ذخیره پیشرفت یادگیری در `localStorage`
- درس‌های مرحله‌ای با خلاصه، توضیح، تمرین، نکته و آزمون
- تعامل‌های آموزشی قابل استفاده با صفحه‌کلید
- ساختار reusable برای صفحه‌های آموزشی
- پروژه نهایی Task Manager به عنوان capstone
- بارگذاری تنبل صفحه‌های درس برای کاهش حجم bundle اولیه
- بارگذاری محتوای فارسی یا انگلیسی فقط در زمان نیاز

## مسیر فعلی دوره

1. `setup`، آماده‌سازی مرورگر، ویرایشگر، Git، Node، npm و DevTools
2. `tooling`، آشنایی با npm، pnpm، Vite، ESLint و Prettier
3. `js`، مرور JavaScript مورد نیاز برای React
4. `react`، مفاهیم DOM، JSX، render، props و state
5. `events-forms`، رویدادها، فرم‌های کنترل‌شده و اعتبارسنجی
6. `effects`، کار با side effectها، cleanup، APIهای مرورگر و persistence
7. `routing`، مسیر‌یابی، لینک‌ها، redirect، not found و مسیرهای وابسته به زبان
8. `context-state`، Context، prop drilling و state مشترک
9. `project-architecture`، مالکیت فایل‌ها، مرزهای معماری و ساختار repo
10. `testing-accessibility`، تست‌های کاربردی و اصول accessibility
11. `project`، ساخت پروژه نهایی Task Manager

## اجرای محلی پروژه

برای اجرای پروژه در محیط توسعه:

```bash
npm install
npm run dev
```

بعد از اجرای دستور، آدرس نمایش‌داده‌شده توسط Vite را در مرورگر باز کنید.

## بررسی کیفیت

برای اجرای کامل بررسی‌ها:

```bash
npm run qa
```

این دستور مجموعه بررسی‌های قالب‌بندی، route، content، lint، build و تست‌های Playwright را اجرا می‌کند.

برای بررسی سریع‌تر در هنگام توسعه:

```bash
npm run check:fast
```

برای build تولیدی:

```bash
npm run build
```

## ساختار مهم پروژه

```text
src/App.jsx
src/data/courseManifest.js
src/data/course.js
src/i18n/course/fa.js
src/i18n/course/en.js
src/context/LanguageContext.jsx
src/context/LearningProgressContext.jsx
src/pages/
src/features/taskManager/TaskManagerLab.jsx
docs/product/
docs/architecture/
.agents/
```

## نقش فایل‌های کلیدی

- `src/App.jsx` مسیرهای اصلی، locale guard و lazy loading صفحه‌ها را مدیریت می‌کند.
- `src/data/courseManifest.js` ترتیب ماژول‌ها، شناسه‌ها، مسیرها، XP و next module را نگه می‌دارد.
- `src/data/course.js` محتوای آموزشی را بر اساس زبان به صورت on-demand آماده می‌کند.
- `src/i18n/course/fa.js` و `src/i18n/course/en.js` محتوای آموزشی فارسی و انگلیسی را نگه می‌دارند.
- `LanguageContext.jsx` وضعیت زبان و جهت صفحه را مدیریت می‌کند.
- `LearningProgressContext.jsx` پیشرفت، quiz، badge و completion را مدیریت می‌کند.
- `TaskManagerLab.jsx` پروژه عملی نهایی را پیاده‌سازی می‌کند و باید به عنوان capstone حفظ شود.

## معماری و رفتار آموزشی

پروژه تلاش می‌کند بین یادگیری، سادگی و نگه‌داری‌پذیری تعادل برقرار کند. هر صفحه درسی باید فقط state محلی خودش را نگه دارد، مگر اینکه واقعاً نیاز به progress عمومی وجود داشته باشد. stateهای کلی مثل زبان و پیشرفت یادگیری از contextهای موجود عبور می‌کنند.

قواعد اصلی معماری:

- مسیر درس‌ها باید با `courseManifest` هماهنگ بماند.
- شناسه ماژول‌ها نباید بدون دلیل تغییر کند.
- completion هر درس باید با همان module id درست ثبت شود.
- stateهای demo و explorer باید page-owned بمانند.
- `TaskManagerLab.jsx` نباید بدون دلیل تغییر کند.
- context providerها نباید برای نیازهای محلی page تغییر داده شوند.
- محتوای فارسی و انگلیسی باید از نظر مفهوم هم‌ارز بمانند.

## پشتیبانی زبان و جهت نوشتار

پروژه فارسی‌محور است، اما نسخه انگلیسی نیز باید از نظر ساختار آموزشی هم‌سطح باقی بماند. محتوای فارسی باید طبیعی، آموزشی و مناسب RTL باشد. با این حال، code، command، file path و نام‌های فنی باید به شکل LTR-safe نمایش داده شوند تا خوانایی آن‌ها حفظ شود.

## عملکرد و lazy loading

در نسخه v1.0، دو بهینه‌سازی اصلی وجود دارد:

1. صفحه‌های درس به صورت route-level lazy-loaded بارگذاری می‌شوند.
2. محتوای دوره بر اساس زبان کاربر، فقط در زمان نیاز بارگذاری می‌شود.

این ساختار باعث می‌شود shared entry bundle کوچک‌تر بماند و warning قبلی مربوط به chunk-size حذف شود.

## مستندات مرتبط

- `docs/product/RELEASE_NOTES_v1.0.md` خلاصه انتشار نسخه v1.0 را نگه می‌دارد.
- `docs/product/CURRICULUM_ROADMAP.md` وضعیت دوره و ترتیب درس‌ها را توضیح می‌دهد.
- `docs/architecture/MIGRATION_STATUS.md` وضعیت مهاجرت صفحه‌ها به سیستم reusable lesson را نگه می‌دارد.
- `.agents/AGENTS.md` قرارداد کلی فرایند همکاری نقش‌ها را مشخص می‌کند.
- فایل‌های `.agents/*.agent.md` قراردادهای تخصصی هر نقش را توضیح می‌دهند.

## قواعد نگه‌داری بعد از v1.0

- بدون تصمیم محصولی روشن، ماژول جدید اضافه نکنید.
- مسیرهای `/fa` و `/en` باید حفظ شوند.
- رفتار RTL/LTR نباید شکسته شود.
- progress و localStorage نباید بدون یادداشت migration تغییر کند.
- محتوای فارسی و انگلیسی باید هم‌ارز بمانند.
- تغییرات بزرگ باید به عنوان release track جدید تعریف شوند.
- تغییرات کوچک مستنداتی یا bugfixها می‌توانند در مسیر patch release انجام شوند.

## وضعیت نهایی نسخه v1.0

```text
Release: v1.0.0
Package version: 1.0.0
Curriculum: Complete
Missing Modules: None
Final module: project / Task Manager capstone
Known blockers: None
```

</div>
