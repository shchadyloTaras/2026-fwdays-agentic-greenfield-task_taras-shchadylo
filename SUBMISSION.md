## Автор

Taras Shchadylo

## Проєкт

**GitWarden** — крос-платформений десктоп Git GUI (Electron + TypeScript strict + React/Vite) для безпечної роботи з кількома GitHub-акаунтами: блокує коміт/push із неправильним профілем, ім'ям, email чи SSH-ключем. Кожне репо прив'язане до одного профілю (Personal/Work/Client), і застосунок показує безпеку ідентичності перед кожним push.

Код: https://github.com/shchadyloTaras/gitwarden

**Лендинг:** https://gitwarden.vercel.app/ — маркетинговий сайт продукту на Astro, зібраний тим самим агентним процесом (окрема feature-track «Landing»). Скриншоти на сайті — справжні захоплення з Electron-застосунку через `astro:assets`, а не мокапи; деплой на Vercel (preview на кожен PR).

**Презентація:** https://shchadylotaras.github.io/gitwarden/ — слайд-дек, що розповідає про продукт і про те, як його збудовано агентно. Зроблений на власному легкому HTML/JS-движку (без фреймворків: scale-to-fit, фрагменти, overview, навігація з клавіатури), задеплоєний на GitHub Pages.

## Відео-демо (1–2 хв)

Video: `<ВСТАВ ЛІНК — YouTube (unlisted) / Loom / Drive>`

## Які практики Agentic Engineering застосовано

**Контекст-інженерія.** `AGENTS.md` — єдине джерело істини для агентів (Claude вантажить його через `@AGENTS.md` у `CLAUDE.md`). Зафіксовані тверді інваріанти: `src/core/` чистий (без `fs`/`electron`/`child_process`), весь git іде через єдиний `GitRunner`, IPC валідовано Zod. Статичний контекст = AGENTS.md + плани; динамічний = per-phase промпти (`docs/prompts/`) і `docs/progress-log.md`, що повертається в контекст щосесії. Phase Checklist — authoritative, решта статусів — derived views.

**Цикли (loop engineering).** Фази проганяються циклом, а не покроковим промптингом: власні скіли `new-phase → implement → verify-phase → review → log-phase → commit-phase`, зібрані в `run-track`. Фаза закрита лише коли зелені exit-критерії; хід — у `docs/progress-log.md`. Phase-коміти захищає хук, що вимагає оновлення progress-log.

**Maker ≠ checker.** Два виділені суб-агенти-рев'юери: `.claude/agents/core-purity-reviewer.md` (чистота core) і `.claude/agents/safety-reviewer.md` (SECURITY.md + межа «AI лише дорадчий»). Зовні — CodeRabbit рев'юить реальні PR. Приклад живої ітерації: https://github.com/shchadyloTaras/gitwarden/pull/1 — CodeRabbit позначив «🔴 Critical» про відсутній docs-frontmatter; я звірив із `landing/src/content.config.ts` (колекція глобить лише `landing/src/content/docs/**`), переконався, що це false positive, і аргументовано закрив тред. Рев'юер дав сигнал — рішення лишилось за інженером.

**Верифікація.** 645 unit/integration-тестів (Vitest, зелені), окремі evals на AI-частину (`tests/evals/` з фікстурами), 29 Playwright e2e проти справжніх git-репо + локального bare-remote, повністю офлайн. Logic-first: core + safety зелені до будь-якого UI.

**Специфікації наперед (SDD).** Плани в `docs/plans/`, per-phase промпти в `docs/prompts/`, рішення як MADR-ADR (`docs/adr/`), модель загроз `SECURITY.md`, діаграма архітектури (`docs/architecture/`). Оглядовий документ процесу: `docs/agentic-engineering.md`.

**Інструменти.** Claude Code (Opus) з кастомними скілами (`.claude/skills/`) та суб-агентами (`.claude/agents/`); GitHub CLI (`gh`) для гілок і PR; CodeRabbit як зовнішнє AI-рев'ю на pull request.

**Що вирішував я / що агент.** Я: архітектурні інваріанти, межі безпеки/UX, обсяг кожної фази, що шипиться, і фінальні рішення на рев'ю (приклад вище). Агент: реалізація в цих рамках, тести-перші, самостійне рев'ю через суб-агентів. Гейт на merge — мій, лише на зелених тестах і пройденому рев'ю.

## (Опційно) Посилання на код

https://github.com/shchadyloTaras/gitwarden

---

### Чекліст

- [x] Вказано справжнє ім'я
- [ ] Додано посилання на відео-демо (1–2 хв) ← постав `[x]`, коли вставиш лінк
- [x] Описано застосовані практики Agentic Engineering
- [x] Результат робочий і доведений до кінця
