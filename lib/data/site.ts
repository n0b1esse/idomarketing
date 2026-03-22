import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const FOOTER_LINKS = NAV_LINKS;

export const MESSENGER_LINKS = {
  whatsapp: "https://wa.me/996555002730",
  telegram: "https://t.me/idomarketing",
};

export const CONTACT = {
  email: "hello@idomarketing.io",
  phones: ["+996 555 002 730", "+996 312 961 999"],
  address: "ул. Юнусалиева 173/2, Кыргызстан",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
] as const;

export const CLIENT_LOGOS = [
  { name: "Alpine Bank", src: "https://placehold.co/160x48/1a1a1a/737373?text=Alpine" },
  { name: "Nova Retail", src: "https://placehold.co/160x48/1a1a1a/737373?text=Nova" },
  { name: "Pulse Med", src: "https://placehold.co/160x48/1a1a1a/737373?text=Pulse" },
  { name: "Vertex Auto", src: "https://placehold.co/160x48/1a1a1a/737373?text=Vertex" },
  { name: "Bright Edu", src: "https://placehold.co/160x48/1a1a1a/737373?text=Bright" },
  { name: "Atlas Foods", src: "https://placehold.co/160x48/1a1a1a/737373?text=Atlas" },
];

export const HERO_STATS = [
  { value: 120, suffix: "+", label: "запущенных кампаний" },
  { value: 48, suffix: "", label: "брендов на сопровождении" },
  { value: 3.2, suffix: "x", label: "средний рост заявок" },
];

export const STATS_MAIN = [
  { value: 8, suffix: "+", label: "лет на рынке" },
  { value: 2.4, suffix: "M$", label: "оборот клиентов" },
  { value: 94, suffix: "%", label: "клиентов продлевают контракт" },
  { value: 72, suffix: "ч", label: "среднее время ответа" },
];

export type ServiceCategory = "ads" | "seo" | "smm" | "design";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: [string, string, string];
  category: ServiceCategory;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "perf-ads",
    title: "Performance‑реклама",
    description: "Таргет и контекст с прозрачной воронкой и сквозной аналитикой.",
    icon: Target,
    bullets: ["Медиаплан под KPI", "Креативы и A/B", "Отчёты без воды"],
    category: "ads",
  },
  {
    id: "brand-launch",
    title: "Запуск бренда",
    description: "Позиционирование, офферы и посылы, которые конвертируют.",
    icon: Megaphone,
    bullets: ["Исследование ЦА", "УТП и месседжи", "Гайдлайны под каналы"],
    category: "ads",
  },
  {
    id: "seo-growth",
    title: "SEO‑рост",
    description: "Структура сайта, семантика и контент, которые дают стабильный трафик.",
    icon: Search,
    bullets: ["Технический аудит", "Кластеры запросов", "Ссылочный план"],
    category: "seo",
  },
  {
    id: "local-seo",
    title: "Локальное SEO",
    description: "Карты, отзывы и локальные сигналы для офлайн‑точек.",
    icon: BarChart3,
    bullets: ["Google / 2GIS", "Сниппеты", "Репутация"],
    category: "seo",
  },
  {
    id: "smm-system",
    title: "SMM‑система",
    description: "Контент‑стратегия, продакшн и комьюнити под ваши цели.",
    icon: Share2,
    bullets: ["Контент‑план", "Сторителлинг", "Модерация и CRM"],
    category: "smm",
  },
  {
    id: "influencer",
    title: "Инфлюенс",
    description: "Подбор лиц, брифы и контроль качества интеграций.",
    icon: Sparkles,
    bullets: ["Подбор блогеров", "Договоры", "Отчёт по охватам"],
    category: "smm",
  },
  {
    id: "visual-id",
    title: "Визуальная айдентика",
    description: "Логотип, палитра и система носителей для узнаваемости.",
    icon: Palette,
    bullets: ["Брендбук", "UI‑кит", "Шаблоны для соцсетей"],
    category: "design",
  },
  {
    id: "landing-ui",
    title: "Лендинги и UI",
    description: "Продающие интерфейсы и прототипы с фокусом на конверсию.",
    icon: PenLine,
    bullets: ["UX‑потоки", "Дизайн в Figma", "Передача в разработку"],
    category: "design",
  },
];

export const SERVICE_TABS: { id: ServiceCategory; label: string }[] = [
  { id: "ads", label: "Реклама" },
  { id: "seo", label: "SEO" },
  { id: "smm", label: "SMM" },
  { id: "design", label: "Дизайн" },
];

export type CaseFilter =
  | "all"
  | "target"
  | "seo"
  | "smm"
  | "content"
  | "design";

export interface PortfolioCase {
  id: string;
  client: string;
  service: string;
  title: string;
  resultValue: string;
  resultLabel: string;
  image: string;
  filters: Exclude<CaseFilter, "all">[];
}

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: "case-1",
    client: "Nova Retail",
    service: "Таргет + креатив",
    title: "Рост заявок в e‑commerce",
    resultValue: "+186%",
    resultLabel: "заявки за 90 дней",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    filters: ["target", "content"],
  },
  {
    id: "case-2",
    client: "Pulse Med",
    service: "SEO + контент",
    title: "Органический трафик клиники",
    resultValue: "+2.4x",
    resultLabel: "органика за год",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    filters: ["seo", "content"],
  },
  {
    id: "case-3",
    client: "Vertex Auto",
    service: "SMM + лидоген",
    title: "Лиды для дилерской сети",
    resultValue: "−32%",
    resultLabel: "стоимость лида",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
    filters: ["smm", "target"],
  },
  {
    id: "case-4",
    client: "Bright Edu",
    service: "Дизайн + воронка",
    title: "Конверсия лендинга курса",
    resultValue: "+58%",
    resultLabel: "конверсия в заявку",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",
    filters: ["design", "content"],
  },
  {
    id: "case-5",
    client: "Atlas Foods",
    service: "Контент + SMM",
    title: "Охваты нового продукта",
    resultValue: "4.1M",
    resultLabel: "охватов за запуск",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    filters: ["smm", "content"],
  },
  {
    id: "case-6",
    client: "Alpine Bank",
    service: "Таргет + дизайн",
    title: "Снижение CPA кредитной воронки",
    resultValue: "−41%",
    resultLabel: "CPA в рекламе",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
    filters: ["target", "design"],
  },
  {
    id: "case-7",
    client: "Craft Studio",
    service: "SEO + дизайн",
    title: "Позиции в нише мебели",
    resultValue: "Top‑3",
    resultLabel: "по ключевым запросам",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    filters: ["seo", "design"],
  },
  {
    id: "case-8",
    client: "Urban Gym",
    service: "SMM + таргет",
    title: "Продажи абонементов",
    resultValue: "+126%",
    resultLabel: "оплат онлайн",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    filters: ["smm", "target"],
  },
];

export const CASE_FILTERS: { id: CaseFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "target", label: "Таргет" },
  { id: "seo", label: "SEO" },
  { id: "smm", label: "SMM" },
  { id: "content", label: "Контент" },
  { id: "design", label: "Дизайн" },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  source: string;
  photo: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Алина Ким",
    role: "CMO",
    company: "Nova Retail",
    text: "Команда выстроила понятную воронку и отчётность — наконец-то видим, откуда приходят лиды.",
    rating: 5,
    source: "Google",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "t2",
    name: "Данияр Омуров",
    role: "Основатель",
    company: "Vertex Auto",
    text: "Сильный креатив и дисциплина в медиапланировании. CPA снизился заметно уже в первом квартале.",
    rating: 5,
    source: "Telegram",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "t3",
    name: "Мээрим Асылова",
    role: "Директор клиники",
    company: "Pulse Med",
    text: "SEO и контент дали стабильный поток записей без постоянного залива в рекламу.",
    rating: 5,
    source: "2GIS",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export interface LetterItem {
  id: string;
  title: string;
  preview: string;
  fullImage: string;
}

export const THANK_YOU_LETTERS: LetterItem[] = [
  {
    id: "l1",
    title: "Благодарность от Nova Retail",
    preview: "https://placehold.co/400x560/141414/a3a3a3?text=Letter+1",
    fullImage: "https://placehold.co/900x1200/141414/a3a3a3?text=Letter+1+full",
  },
  {
    id: "l2",
    title: "Письмо Vertex Auto",
    preview: "https://placehold.co/400x560/141414/a3a3a3?text=Letter+2",
    fullImage: "https://placehold.co/900x1200/141414/a3a3a3?text=Letter+2+full",
  },
];

export interface CertificateItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "c1",
    category: "Партнёрства",
    title: "Meta Business Partner",
    image: "https://placehold.co/480x320/141414/737373?text=Meta",
  },
  {
    id: "c2",
    category: "Партнёрства",
    title: "Google Ads",
    image: "https://placehold.co/480x320/141414/737373?text=Google+Ads",
  },
  {
    id: "c3",
    category: "Обучение",
    title: "Performance Marketing Pro",
    image: "https://placehold.co/480x320/141414/737373?text=Course",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Бриф и аудит",
    text: "Собираем цели, аудиторию и точки роста. Даём честную оценку возможностей.",
  },
  {
    title: "Стратегия",
    text: "Связываем каналы, бюджеты и креативы в единый план с KPI.",
  },
  {
    title: "Запуск",
    text: "Настраиваем трекинг, тестируем гипотезы и масштабируем победителей.",
  },
  {
    title: "Рост",
    text: "Еженедельные отчёты, оптимизация и прозрачная экономика кампаний.",
  },
];
