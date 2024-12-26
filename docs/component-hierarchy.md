# Component Hierarchy

## Core Layout Components

### `<App />`
- Primary container component
- Handles routing
- Manages global state
- Contains layout structure

### `<Layout />`
- `<Navigation />`
  - `<NavBar />`
  - `<MobileMenu />`
  - `<NavLink />`
- `<Footer />`
  - `<SocialLinks />`
  - `<QuickLinks />`
  - `<Copyright />`

## Shared Components

### UI Elements
- `<Button />`
  - variants: primary, secondary, outline, text
- `<Card />`
  - variants: project, blog, timeline
- `<Modal />`
- `<LoadingSpinner />`
- `<ErrorBoundary />`
- `<Toast />`
- `<Icon />`

### Form Components
- `<Input />`
- `<TextArea />`
- `<Select />`
- `<Checkbox />`
- `<FormErrorMessage />`
- `<FormGroup />`

## Page-Specific Components

### Landing Page
- `<HomePage />`
  - `<HeroSection />`
    - `<TypewriterEffect />`
  - `<IntroSection />`
  - `<PortfolioTeaser />`
    - `<ProjectCard />` (simplified)
  - `<BlogTeaser />`
    - `<BlogPostCard />` (simplified)
  - `<CVTeaser />`

### Portfolio Section
- `<PortfolioPage />`
  - `<ProjectFilter />`
    - `<FilterButton />`
    - `<SearchInput />`
  - `<ProjectGrid />`
    - `<ProjectCard />`
      - `<ProjectImage />`
      - `<ProjectInfo />`
  - `<ProjectModal />`
    - `<ProjectGallery />`
    - `<ProjectDetails />`
    - `<TechStack />`

### Blog Section
- `<BlogPage />`
  - `<BlogList />`
    - `<BlogPostCard />`
  - `<BlogPost />`
    - `<MarkdownRenderer />`
    - `<TableOfContents />`
    - `<ShareButtons />`
  - `<BlogSidebar />`
    - `<CategoryList />`
    - `<RecentPosts />`

### CV Page
- `<CVPage />`
  - `<Timeline />`
    - `<TimelineItem />`
  - `<SkillsSection />`
    - `<SkillCard />`
  - `<ExperienceSection />`
    - `<ExperienceCard />`
  - `<EducationSection />`
    - `<EducationCard />`
  - `<PDFDownloadButton />`

### Contact Section
- `<ContactPage />`
  - `<ContactForm />`
    - `<FormInput />`
    - `<FormTextArea />`
    - `<SubmitButton />`
  - `<ContactInfo />`
    - `<SocialLinks />`

## Utility Components

### Data Fetching
- `<DataFetcher />`
- `<ErrorBoundary />`
- `<LoadingState />`

### Animation Components
- `<FadeIn />`
- `<SlideIn />`
- `<AnimatedCounter />`

### SEO Components
- `<SEOHead />`
- `<MetaTags />`

## Context Providers

### Global State
- `<ThemeProvider />`
- `<LanguageProvider />`
- `<AuthProvider />`
- `<ToastProvider />`

## Component Properties & Patterns

### Shared Properties
- All components follow consistent prop patterns:
  - `className`: für custom styling
  - `children`: für nested content
  - `variant`: für verschiedene Darstellungsvarianten
  - `isLoading`: für loading states
  - `error`: für error handling

### Composition Patterns
- Verwendung von Compound Components wo sinnvoll
- Higher Order Components für geteilte Funktionalität
- Custom Hooks für wiederverwendbare Logik

### Styling Approach
- Tailwind CSS für Basis-Styling
- CSS Module für komplexere Komponenten
- CSS-in-JS für dynamische Styles

### State Management
- React Context für globalen State
- Local State für Komponenten-spezifische Daten
- Custom Hooks für komplexe State-Logik

Diese Hierarchie ist modular aufgebaut und ermöglicht:
- Einfache Wartbarkeit
- Wiederverwendbarkeit
- Klare Separation of Concerns
- Skalierbarkeit für zukünftige Erweiterungen 