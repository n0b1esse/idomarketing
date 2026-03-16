# I DO MARKETING

Премиальный лендинг цифрового агентства на Next.js 14+, Tailwind CSS, Framer Motion и Lenis.

## Стек

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Framer Motion** — анимации и переходы между страницами
- **Lenis** — плавный скролл
- **Lucide React** — иконки

## Локальный запуск

```bash
npm install
npm run dev
```

По умолчанию проект доступен по адресу [http://localhost:3000](http://localhost:3000).

## Сборка (статический экспорт)

```bash
npm run build
```

Готовый статический билд попадает в директорию `out/` и используется для GitHub Pages.

## GitHub Pages

Сайт публикуется по адресу: **https://n0b1esse.github.io/idomarketing/**.

Деплой запускается автоматически при пуше в ветку `main` через workflow  
[GitHub Actions](.github/workflows/deploy-pages.yml).

Чтобы включить Pages в репозитории:

1. Зайти в **Settings → Pages**.  
2. В блоке **Build and deployment / Source** выбрать **GitHub Actions**.
