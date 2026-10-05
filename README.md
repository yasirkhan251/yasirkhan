# 👨‍💻 Yasir Khan — Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Portfolio-yasirkhan.in-5B7CFA?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
</p>

<p align="center">
  <strong>My personal developer portfolio — a single place to explore my skills, services, selected projects, pricing, and contact flow.</strong>
</p>

<p align="center">
  <a href="https://yasirkhan.in/" target="_blank"><strong>🌐 Visit yasirkhan.in</strong></a>
  &nbsp;•&nbsp;
  <a href="https://github.com/yasirkhan251" target="_blank"><strong>💻 GitHub</strong></a>
</p>

---

## 🎯 What This Project Offers

This repository contains my personal portfolio website, **yasirkhan.in**.

The portfolio is designed to do more than display a résumé. It presents my development work as a visual product showcase and gives potential clients a direct path from **discovering my work → understanding my capabilities → reviewing packages → starting a project conversation**.

The site focuses on:

- 👨‍💻 Personal developer branding
- 🧩 Selected project showcase
- 🛠️ Services and technical capabilities
- 💰 Freelance pricing/package presentation
- 📩 Project consultation flow
- 🔗 GitHub and project discovery
- 📱 Responsive presentation across screen sizes

---

## ✨ Highlighted Features

<table>
<tr>
<td width="50%">

### 🎨 Modern Portfolio UI
- Dark/light visual sections
- Gradient typography
- Glass-style cards
- Responsive navigation
- Animated visual elements
- Custom favicon

</td>
<td width="50%">

### 🧑‍💻 Developer Profile
- Introduction and positioning
- Bengaluru-based developer profile
- Core technical stack
- Work/process philosophy
- Freelance availability

</td>
</tr>

<tr>
<td>

### 🚀 Project Showcase
The portfolio highlights major projects such as:

- 🛒 Sanchvi
- 🚕 Cabify
- 🦅 Falcon
- ☁️ StoreDrive
- 🧠 MindRing
- 🏍️ Bikersdream

Each project card includes:
- Project category
- Description
- Technology tags
- GitHub link
- Visual preview

</td>
<td>

### 💼 Service Capabilities
The site communicates practical development services including:

- Business websites
- E-commerce systems
- Booking platforms
- Custom web applications
- Authentication
- Dashboards
- API integrations
- Business workflows

</td>
</tr>

<tr>
<td>

### 💰 Freelance Packages
Two pricing segments are presented:

**Budget Websites**
- ₹1,999
- ₹4,499
- ₹8,999

**Standard Business Packages**
- ₹9,990
- ₹24,990
- ₹59,990
- ₹89,990+

</td>
<td>

### 📩 Consultation Workflow
Package buttons open a consultation modal where a visitor can enter:

- Name
- Business/project
- Preferred contact
- Requirements

The site can prepare a message for:
- 📧 Email
- 💬 WhatsApp

</td>
</tr>
</table>

---

## 🧠 How It Works

The portfolio is intentionally lightweight and runs entirely on the frontend.

```text
Visitor
   │
   ├── Home
   │     ├── Introduction
   │     ├── Capabilities
   │     └── CTA
   │
   ├── Work
   │     ├── Featured Projects
   │     └── GitHub Links
   │
   ├── Process
   │     └── Understand → Structure → Build → Connect → Refine
   │
   ├── Packages
   │     ├── Budget Websites
   │     ├── Business Packages
   │     └── Optional Add-ons
   │
   ├── About
   │     └── Skills & Background
   │
   └── Contact
         └── Project Consultation
```

JavaScript is used for interaction rather than a backend framework.

### Client-side interactions include:

- Mobile navigation toggle
- Scroll reveal animations
- Active navigation section detection
- Consultation modal handling
- Dynamic package data
- Auto-generated consultation message
- Email link generation
- WhatsApp link generation
- Escape-key/modal closing behavior
- Reduced-motion support through CSS

---

## 🛠️ Software & Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic content |
| **CSS3** | Layout, responsive design, animations, visual styling |
| **JavaScript (Vanilla)** | Navigation, scroll interactions and consultation logic |
| **Google Fonts** | DM Sans + Manrope typography |
| **SVG** | Portfolio favicon |
| **GitHub** | Source control and repository hosting |
| **GitHub Pages / static hosting** | Portfolio deployment |
| **Custom Domain** | `yasirkhan.in` |

### 📦 No Framework Dependency

This portfolio does **not** require React, Vue, Angular, Django, Flask, Node.js, or a database.

It is intentionally implemented as a static website.

---

## 💻 System Requirements

### For Visitors

Any modern browser is sufficient:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Mobile browsers

### For Local Development

Recommended:

- Windows / macOS / Linux
- Any modern web browser
- VS Code or another code editor
- Git

No Python runtime or Node.js installation is required for the current static version.

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yasirkhan251/yasirkhan.git
cd yasirkhan
```

### 2️⃣ Open the Project

The project contains only static frontend files:

```text
yasirkhan/
├── CNAME
├── favicon.svg
├── index.html
├── script.js
└── styles.css
```

---

## ⚙️ Configuration

Before publishing or changing the consultation workflow, review the contact configuration in:

```text
script.js
```

The current source contains placeholder values for:

```javascript
const CONSULT_EMAIL = 'your-email@example.com';
const WHATSAPP_NUMBER = '91XXXXXXXXXX';
```

These should be replaced with the intended production contact details.

### 🌐 Custom Domain

The repository includes:

```text
CNAME
```

which is used for the custom portfolio domain:

**https://yasirkhan.in/**

---

## ▶️ How to Run

Because the portfolio is static, there are several simple options.

### Option 1 — Open Directly

Open:

```text
index.html
```

in a browser.

### Option 2 — VS Code Live Server

Open the project in VS Code and run it with **Live Server**.

### Option 3 — Static Hosting

Deploy the repository to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard static hosting provider

---

## 🎮 How to Use

### 🏠 Home

The homepage introduces the developer, positioning, services, and primary calls-to-action.

### 💼 Work

The **Work** section showcases selected GitHub projects with categories, descriptions, technology tags, and repository links.

### 🧭 Process

The site explains the development process as:

```text
01 Understand
02 Structure
03 Build
04 Connect
05 Refine
```

### 💰 Packages

Visitors can inspect budget and business-level packages and review included features.

### 📩 Consultation

A package can be selected to open the consultation modal and generate a prepared contact message.

---

## 📚 Portfolio Project Index

The portfolio website is only the **front door**.

The real story is the collection of projects behind it.

### 🟢 Major / Substantial Projects

| Project | Category | Main Technology | Status |
|---|---|---|---|
| **Sanchvi** | E-commerce | Django, Python, Payments | 🟢 Substantial |
| **StoreDrive** | Media / Storage Platform | Django, Python | 🟢 Substantial |
| **MindRing** | Productivity / Wellbeing Web App | Flask, Python | 🟢 Substantial |
| **Falcon7.1** | Services + Booking Platform | Django, Python | 🟢 Substantial |
| **Bikersdream** | Bike Rental Platform | Flask, Python | 🟢 Substantial Prototype |
| **Cabify** | Taxi / Ride Booking Platform | Flask, Python | 🟢 Full-featured Prototype |
| **Almontech** | Technology Company Website | HTML, CSS, JavaScript | 🟢 Completed Website |

### 🟡 Foundations / Experiments / Ongoing Work

| Project | Category | Main Technology | Status |
|---|---|---|---|
| **SpeedForce** | Service Website Foundation | Django, HTML, CSS | 🟡 Foundation |
| **Hudl Tagging Tools** | AI / Computer Vision Automation | Python, YOLO, OCR, Vosk | 🟡 Experimental / Active |
| **Project-Tube** | Local Video Platform | Flask, SQLite, JavaScript | 🟡 Prototype / Foundation |
| **PythonAuthSystem** | Authentication Foundation | Python, JSON, SMTP | 🟡 Learning / Foundation |

> **Note:** “Substantial” or “full-featured prototype” describes the scope of the implementation, not a claim that every project is production-ready.

---

## 🌟 Highlighted Portfolio Themes

My projects cover multiple real-world application categories:

### 🛒 E-commerce
- Product catalogues
- Cart and checkout workflows
- Pricing
- Orders
- Payments
- Customer accounts

### 🚕 Booking & Mobility
- Taxi booking
- Bike rental
- Availability flows
- Driver/rental management
- Booking status

### 🏢 Business Platforms
- Service catalogues
- Booking systems
- Admin dashboards
- Authentication
- Customer management
- Business workflows

### ☁️ Web Applications
- Media/file management
- Productivity tools
- Video platforms
- User accounts
- Dashboards

### 🤖 AI / Computer Vision
- Hudl tagging automation
- Object detection experimentation
- OCR workflows
- Video analysis concepts
- Automation tooling

### 🎨 Frontend & Static Websites
- Responsive business websites
- Product presentation
- Portfolio interfaces
- Service pages
- Interactive UI

---

## 🏗️ Project Portfolio Architecture

```text
yasirkhan.in
│
├── 👤 Personal Brand
│
├── 💼 Featured Projects
│   ├── Sanchvi
│   ├── Cabify
│   ├── Falcon7.1
│   ├── StoreDrive
│   ├── MindRing
│   └── Bikersdream
│
├── 🛠️ Other Builds
│   ├── Almontech
│   ├── SpeedForce
│   ├── Project-Tube
│   └── PythonAuthSystem
│
└── 🤖 Experimental / AI Work
    └── Hudl Tagging Tools
```

---

## 📸 Screenshots

### 🖥️ Portfolio Hero

<p align="center">
  <img src="docs/images/portfolio-home.png" alt="Yasir Khan Portfolio Home" width="900">
</p>

> 📌 Add your real screenshot at `docs/images/portfolio-home.png`.

### 💼 Work Section

<p align="center">
  <img src="docs/images/portfolio-work.png" alt="Portfolio Work Section" width="900">
</p>

> 📌 Add your real screenshot at `docs/images/portfolio-work.png`.

### 💰 Pricing Section

<p align="center">
  <img src="docs/images/portfolio-pricing.png" alt="Portfolio Pricing Section" width="900">
</p>

> 📌 Add your real screenshot at `docs/images/portfolio-pricing.png`.

### 📩 Consultation Modal

<p align="center">
  <img src="docs/images/portfolio-consultation.png" alt="Consultation Modal" width="700">
</p>

> 📌 Add your real screenshot at `docs/images/portfolio-consultation.png`.

---

## 🎞️ GIF Demonstrations

### Responsive Navigation

<p align="center">
  <img src="docs/demo/mobile-navigation.gif" alt="Responsive navigation demo" width="420">
</p>

### Project Showcase

<p align="center">
  <img src="docs/demo/project-showcase.gif" alt="Project showcase demo" width="800">
</p>

### Consultation Flow

<p align="center">
  <img src="docs/demo/consultation-flow.gif" alt="Consultation flow demo" width="800">
</p>

> 📌 These are README placeholders. Add the real GIF files under `docs/demo/`.

---

## 🎥 Video Demonstration

<p align="center">
  <a href="https://yasirkhan.in/" target="_blank">
    <img src="https://img.shields.io/badge/▶%20Watch%20Portfolio-Demo-111827?style=for-the-badge" alt="Watch portfolio demo">
  </a>
</p>

A future walkthrough video can demonstrate:

1. Homepage
2. Selected work
3. Project repository links
4. Development process
5. Pricing packages
6. Consultation modal
7. Responsive/mobile behavior

---

## ⚠️ Limitations

This portfolio is intentionally lightweight, but there are a few things to be aware of:

- It is currently a **static frontend application**.
- There is no backend/database.
- Package consultation relies on client-side generated links.
- Email/WhatsApp values in `script.js` currently require production configuration.
- External Google Fonts are loaded from Google.
- Some project showcase images come from external URLs.
- GitHub Pages/static hosting does not provide server-side form processing.
- Pricing is presented as starting/reference pricing and final scope may differ.

---

## 🔮 Future Improvements / Roadmap

### Portfolio Improvements

- [ ] Add dedicated project detail pages
- [ ] Add project filters by category
- [ ] Add richer case studies
- [ ] Add real screenshots for every featured project
- [ ] Add project demo videos
- [ ] Add downloadable résumé
- [ ] Add blog / technical articles
- [ ] Add testimonials
- [ ] Add stronger SEO metadata
- [ ] Add Open Graph/social preview metadata

### Technical Improvements

- [ ] Replace placeholder consultation credentials
- [ ] Add analytics
- [ ] Add form/backend integration
- [ ] Add automated contact storage
- [ ] Improve image hosting and optimization
- [ ] Add structured data/schema markup
- [ ] Add automated deployment workflow

### Portfolio Content Improvements

- [ ] Add more project case studies
- [ ] Add AI/ML project section
- [ ] Add GitHub repository statistics
- [ ] Add development timeline
- [ ] Add technology skill matrix
- [ ] Add “What I learned” sections for major projects

---

## 🧠 Why This Portfolio Matters

This website is intentionally more than a digital résumé.

It acts as a **gateway to my complete development portfolio**, connecting my personal identity with the actual software projects I have built.

The projects represent different stages of my journey:

```text
Learning
   ↓
Frontend Projects
   ↓
Backend Applications
   ↓
Full-Stack Systems
   ↓
Business Platforms
   ↓
Automation & AI Experiments
   ↓
Professional Portfolio
```

That progression is the part I want the portfolio to communicate.

---

## 👨‍💻 Author

### Yasir Khan

**Web Developer • Python Developer • Django / Flask Developer**

I build practical websites and web applications for businesses, products, and real-world workflows.

### 🔗 Connect

- 🌐 Portfolio: **https://yasirkhan.in/**
- 💻 GitHub: **https://github.com/yasirkhan251**
- 📂 Portfolio Repository: **https://github.com/yasirkhan251/yasirkhan**

---

<p align="center">
  <strong>Built with HTML, CSS & JavaScript ❤️</strong>
</p>

<p align="center">
  <sub>© Yasir Khan — Personal Portfolio</sub>
</p>
