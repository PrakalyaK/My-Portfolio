# Prakalya K - Professional Developer Portfolio

A production-ready, dark-minimalist developer portfolio website engineered with **React.js**, **Vite**, modern **CSS3**, and **EmailJS**.

Designed for software engineering internship and full-time role applications at top tech firms, showcasing full-stack capabilities, architecture deep-dives, algorithmic problem solving (350+ LeetCode), and direct functional email messaging.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in terminal).

### 3. Production Build
```bash
npm run build
```
The optimized static bundle will be built into the `dist/` directory.

---

## 📁 Project Architecture & Folder Structure

```text
My-Portfolio/
├── public/
│   ├── favicon.svg                  # Custom PK monogram SVG favicon
│   ├── Prakalya_K_Resume.pdf        # Downloadable Resume PDF
│   └── profile-photo.jpg            # Profile photo (optional)
├── src/
│   ├── assets/                      # Static media and icons
│   ├── components/
│   │   ├── Navbar.jsx               # Responsive sticky navbar with active scroll spy & mobile drawer
│   │   ├── Footer.jsx               # Social links, copyright, and scroll-to-top trigger
│   │   ├── ProjectModal.jsx         # Architecture deep-dive modal for featured projects
│   │   └── ScrollToTop.jsx          # Smooth floating back-to-top button
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all portfolio content
│   ├── sections/
│   │   ├── Hero.jsx                 # Hero section with primary CTAs and quick metrics
│   │   ├── About.jsx                # Engineering journey, core competencies & SKCET background
│   │   ├── Skills.jsx               # Categorized skills without fake percentages
│   │   ├── Projects.jsx             # Project showcase with architecture details & live links
│   │   ├── ProblemSolving.jsx       # LeetCode 350+ stats, topic distribution & GitHub activity
│   │   ├── Experience.jsx           # Hackathons (SIH), Open Source & leadership highlights
│   │   ├── Education.jsx            # SKCET B.Tech IT, 9.04 CGPA & coursework
│   │   └── Contact.jsx              # Functional contact form with validation & EmailJS integration
│   ├── App.jsx                      # Main app composition
│   ├── index.css                    # Unified dark-minimalist CSS design system tokens
│   └── main.jsx                     # Application entry point
├── .env.example                     # Environment template for EmailJS keys
├── index.html                       # SEO-optimized HTML5 shell with semantic meta tags
├── package.json                     # Dependency manifests (React 18, Vite, Lucide, EmailJS)
├── vite.config.js                   # Vite configuration
└── README.md                        # Documentation & setup guide
```

---

## 📧 EmailJS Setup Guide (Real Email Delivery)

The contact form is wired to send real emails directly to your inbox via **EmailJS**. Follow these steps to activate email sending:

### Step 1: Create an EmailJS Account
1. Visit [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.
2. In your EmailJS dashboard, note down your **Public Key** (found under **Account > API Keys**).

### Step 2: Connect Your Email Service
1. Go to the **Email Services** tab.
2. Click **Add New Service** and select **Gmail** (or your preferred email provider).
3. Connect your email address (`prakalyakr2020@gmail.com`) and grant permission.
4. Note your **Service ID** (e.g. `service_xxxxxxx`).

### Step 3: Create an Email Template
1. Go to the **Email Templates** tab.
2. Click **Create New Template**.
3. Set Subject to: `New Portfolio Message: {{subject}} from {{from_name}}`
4. Set Content to:
   ```text
   You received a new message from your portfolio website:

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
5. Set **Reply To** to `{{reply_to}}` or `{{from_email}}`.
6. Save and note your **Template ID** (e.g. `template_xxxxxxx`).

### Step 4: Configure Environment Variables
Create a file named `.env` in the root of your project:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
*Note: Vite requires the `VITE_` prefix to expose variables to the browser safely.*

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub (`https://github.com/PrakalyaK/My-Portfolio`).
2. Log into [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Select your repository.
4. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**.

### Deploy to Netlify
1. Log into [Netlify](https://www.netlify.com/) and click **Add new site > Import an existing project**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add your environment variables under **Site configuration > Environment variables**.
6. Click **Deploy Site**.

---

## 📝 Modifying Content
All portfolio text, links, stats, and project details are cleanly organized in one file:
`src/data/portfolioData.js`
Edit that file at any time to update your bio, CGPA, solved problem count, or projects.
