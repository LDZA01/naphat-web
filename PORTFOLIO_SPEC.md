# Project Specification: Personal Portfolio - Naphat Chartwanchai

## 1. Project Overview
**Goal:** Build a high-performance personal portfolio to showcase Full-stack & AI Engineering skills.
**Target Audience:** Recruiters, Tech Leads (Focus on AI/Data & Software Engineering roles).
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion.
**Deployment:** Vercel.

## 2. Design System & UI
- **Theme:** Clean, Minimalist, Tech-focused.
- **Colors:** Slate/Zinc (Backgrounds) + Indigo/Blue (Primary Accent for AI/Tech vibe).
- **Typography:** Inter or Geist Sans.
- **Dark Mode:** Enabled by default (preferred for dev portfolios).

## 3. Component Architecture (Single Page)

### 3.1 Navbar (`<Navbar />`)
- Logo: Text "NC" or "Naphat.C".
- Links: About, Experience, Projects, Skills, Contact.
- Right side: Dark/Light Toggle, GitHub Icon.

### 3.2 Hero Section (`<Hero />`)
- **Headline:** "Hi, I'm Naphat Chartwanchai."
- **Sub-headline:** "Computer Engineering Student at Chulalongkorn University. Passionate about Software Engineering, Data Science, and AI."
- **Tech badges (fade in):** React, Python, Azure, SQL.
- **CTA Buttons:**
    - Primary: "View Projects" (Scroll to #projects).
    - Secondary: "Download Resume" (Link to PDF).

### 3.3 About Section (`<About />`)
- **Content:**
    - "I am a Computer Engineering student (GPAX 3.31/4.00) based in Nonthaburi, Thailand."
    - "I have hands-on experience in building enterprise-grade applications and AI-powered solutions using modern tech stacks like Next.js, Spring Boot, and Azure."
    - **Interests:** Investing, Artificial Intelligence, Sport.
    - **Languages:** Thai (Native), English (Working Proficiency).

### 3.4 Experience Section (`<Experience />`) - Timeline Layout
*Render these data points strictly:*

1.  **Sales AI Chatbot (Project) - Panel Plus (Mitr Phol Group)**
    - *Sep 2025 - Present*
    - Built an enterprise-grade AI assistant on **Azure** using **OpenAI** and **RAG**.
    - Enabled real-time sales analytics, reducing manual reporting workload by 90%.
    - Engineered Azure/PostgreSQL infrastructure and implemented security guardrails.

2.  **Software Development Intern - Relearn Solution**
    - *May 2025 - July 2025*
    - Developed "SSO850" (Social Security Office) enterprise system.
    - Tech: **Spring Boot**, **ReactJS**, **Oracle PL/SQL**.
    - Resolved 10+ Jira tickets (Full-stack bug fixes & features) in an Agile environment.

3.  **Software Development Intern - Soft Square**
    - *May 2024 - July 2024*
    - Developed 'Internal Data Management Module' using **Angular**, **.NET Core**, and **SQL**.
    - Designed database schemas and managed sprint planning via ClickUp.

### 3.5 Featured Projects (`<Projects />`) - Grid Cards
*Highlight these key projects:*

1.  **Sales AI Chatbot** (Highlight "Enterprise Grade")
    - **Desc:** AI Assistant for sales analytics with RAG technology.
    - **Stack:** Azure, OpenAI, PostgreSQL, RAG.
2.  **FIU (Sandbox Hackathon 2024)** (Honorable Mention)
    - **Desc:** AI-powered career discovery platform. Designed System Flow & UI/UX.
    - **Stack:** AI/ML, UI/UX Design.

### 3.6 Skills Section (`<Skills />`) - Categorized
- **Languages & Web:** C++, Python, Java, JavaScript, React, Angular, ASP.NET Core.
- **Data & AI:** SQL, PostgreSQL, Pandas, Azure, Prefect, FAISS/RAG.
- **DevOps & Tools:** Git, Docker, Kubernetes, GitHub Actions.

### 3.7 Contact Section (`<Contact />`)
- **Email:** nchartwanchai@gmail.com
- **Phone:** +66 61-993-5011
- **Social:** [GitHub: LDZA01](https://github.com/LDZA01)

## 4. Implementation Prompt (For AI Agent)
"Please initialize a Next.js project with TypeScript and Tailwind CSS.
Create a data file `src/data/portfolio.ts` containing all the text and resume data from Section 3 above.
Then, build the `Hero`, `Experience`, and `Projects` components that map over this data.
Ensure the design is responsive and includes a dark mode toggle."