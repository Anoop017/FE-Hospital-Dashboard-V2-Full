# Hospital Dashboard — Demo Selector Portal

A sleek, modern, mobile-friendly landing page created to help recruiters and reviewers easily select and test the live demos for:
1. **Patient Dashboard** (`https://hospital-dashboard-v2.netlify.app/login`)
2. **Admin Dashboard** (`https://admin-hospital-dashboard.netlify.app/login`)

---

## 🚀 How to Deploy on Netlify

### Option 1: Drag & Drop (Fastest — 30 seconds)
1. Log in to [Netlify](https://app.netlify.com/).
2. Go to **Sites** and drag & drop this entire project folder (`Hospital-Dashboard-FE-Full`) into the Netlify drop zone.
3. Your site will be live instantly!

### Option 2: Connect via GitHub
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: recruiter demo portal"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. In Netlify, click **Add new site** > **Import an existing project** > **GitHub**.
3. Select your repository. Build settings are already configured via `netlify.toml` (Publish directory: `.`).
4. Click **Deploy Site**.

---

## 🛠️ Project Structure
```text
├── index.html       # Semantic HTML5 landing page
├── style.css        # Responsive, modern MedTech CSS design system
├── script.js        # Interactive ripple and card micro-interactions
├── favicon.svg      # Custom medical cross favicon
├── netlify.toml     # Netlify caching & security header configuration
└── README.md        # Deployment instructions
```
