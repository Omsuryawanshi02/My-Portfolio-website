# Om Suryawanshi — AI Engineer & Full-Stack Developer Portfolio

A production-grade, highly responsive personal portfolio website for **Om Suryawanshi**, designed with the visual elegance and interactive finesse inspired by modern tech portfolios.

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Features

- **Personal Brand Integration**: Custom-tailored for Om Suryawanshi (AI & Data Science Student, Aspiring AI Engineer, Full-Stack Developer).
- **Accurate Visual Hierarchy**: Styled with Google Fonts (`Outfit` for sans-serif UI and `Ovo` for headings), matching the reference layout.
- **Hero Section**: Floating profile avatar, greeting with waving animation, headline, supporting bio, and quick-action CTAs.
- **About Me**: Visual portrait card, personal narrative, 3 structured info cards (Languages & Tech, Education, Projects & Interests), and interactive tool cards with tooltips.
- **Areas of Expertise / Services**: 4 cards highlighting AI & Machine Learning, AI Agent Development, Full-Stack Web Applications, and Data Analytics.
- **Categorized Technical Arsenal**: Filterable skill cards across Programming, AI & ML, AI Engineering, Web Development, and Developer Tools.
- **Featured Projects**: 6 curated projects with rich gradient canvases, technology tags, and floating cards with lime-accent hover transitions.
- **Community & Engagement**: Bento grid featuring the **2nd Prize at International UAi HAWK-ATHON**, technical perspectives on Model Context Protocol (MCP) & AI Agents, and open-source engineering.
- **Functional Contact Section**: Responsive contact form with client-side validation, loading feedback, native email composer fallback (`mailto:`), and copy-to-clipboard functionality.
- **Responsive & Accessible**: Seamlessly adapted for mobile phones (with slide-in drawer menu), tablets, laptops, and ultra-wide displays.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 📁 Project Architecture

```
d:/portfolio2/
├── public/
│   ├── favicon.svg               # SVG monogram favicon
│   ├── images/
│   │   └── profile.jpg           # Om's verified portrait photo
│   └── resume/
│       └── Om_Suryawanshi_Resume.pdf  # Verified resume PDF
├── src/
│   ├── components/
│   │   ├── About.tsx             # About section with narrative & info cards
│   │   ├── BackgroundDecor.tsx   # Ambient pastel lighting & gradient meshes
│   │   ├── Community.tsx         # Bento grid with hackathons & articles
│   │   ├── Contact.tsx           # Contact form and direct communication channels
│   │   ├── Footer.tsx            # Footer with quick links and copyright
│   │   ├── Hero.tsx              # Hero section with headline and CTAs
│   │   ├── Navbar.tsx            # Floating pill menu and mobile drawer
│   │   ├── ProjectCard.tsx       # Interactive project card with hover pop
│   │   ├── Projects.tsx          # Featured work showcase
│   │   ├── SectionHeading.tsx    # Reusable section heading with eyebrow
│   │   ├── Services.tsx          # 4 expertise areas
│   │   └── TechStack.tsx         # Filterable categorized technical arsenal
│   ├── data/
│   │   ├── community.ts          # Hackathons, LinkedIn posts & discussions
│   │   ├── profile.ts            # Personal brand, bio, education, & contacts
│   │   ├── projects.ts           # 6 core projects data & gradients
│   │   ├── services.ts           # Expertise areas data
│   │   └── technologies.ts       # Categorized skills & frequent tools
│   ├── styles/
│   │   └── index.css             # Tailwind base, utilities & custom glow classes
│   ├── App.tsx                   # Main layout orchestration
│   └── main.tsx                  # React entry point
├── index.html                    # SEO tags, Open Graph metadata, & Google Fonts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Compile TypeScript and bundle optimized static assets:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### 4. Preview Production Build
Preview the built site locally:
```bash
npm run preview
```

---

## ✏️ How to Customize

All content is cleanly separated from presentation logic:

1. **Personal Information & Bio**:
   Edit `src/data/profile.ts` to update your name, headline, bio paragraphs, education history, or contact channels.
2. **Projects**:
   Edit `src/data/projects.ts` to add, edit, or reorder projects, GitHub repositories, and live demo links.
3. **Skills & Tools**:
   Edit `src/data/technologies.ts` to adjust categorized skills and the "Tools I Frequently Use" icons.
4. **Community & Hackathons**:
   Edit `src/data/community.ts` to update awards, hackathon highlights, or published articles.
5. **Profile Photo & Resume**:
   - Replace `public/images/profile.jpg` with a new portrait image.
   - Replace `public/resume/Om_Suryawanshi_Resume.pdf` with your updated resume file.

---

## 🌐 Deploying to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Om Suryawanshi AI Engineer Portfolio"
   git branch -M main
   git remote add origin https://github.com/Omsuryawanshi02/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain within seconds.
