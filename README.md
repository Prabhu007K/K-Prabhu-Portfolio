# K Prabhu — Interactive Portfolio

A single-page interactive portfolio with **Web Developer** and **Cyber Security** modes. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, ready to deploy on **Vercel**.

## Features

- Dual mode: **Web Developer** and **Cyber Security**
- Animated hero with typewriter roles
- About, skills, education timeline, projects, experience, certifications
- Mode-specific resume PDF download
- Contact form via [Web3Forms](https://web3forms.com)
- Particle-style background, scroll-to-top button, responsive mobile menu

## License

This project uses the **[MIT License](./LICENSE)** — free to use, modify, and share with attribution.

## Upload to GitHub (drag and drop)

Create a **new empty repository** on GitHub, then upload **only** these files and folders from `k-prabhu-portfolio`:

### Include

| Item | What it is |
|------|------------|
| `src/` | All source code (components, data, styles) |
| `public/` | Images, resumes, certificate PDFs and thumbnails |
| `package.json` | Project dependencies |
| `package-lock.json` | Locked dependency versions |
| `tsconfig.json` | TypeScript config |
| `next.config.ts` | Next.js config |
| `postcss.config.mjs` | PostCSS / Tailwind config |
| `eslint.config.mjs` | ESLint config |
| `.gitignore` | Tells Git what to ignore |
| `.env.example` | Example env vars (no secrets) |
| `README.md` | This file |
| `DEPLOY.md` | Vercel deploy steps |
| `LICENSE` | MIT license |

### Do not upload

| Item | Why |
|------|-----|
| `node_modules/` | Reinstalled with `npm install` on Vercel |
| `.next/` | Build output — recreated on deploy |
| `.env.local` | Contains your private Web3Forms key |
| `.vercel/` | Local Vercel CLI data |
| `.git/` | Only if you are uploading via the website (not using Git on your PC) |

After upload, import the repo on [Vercel](https://vercel.com). Vercel runs `npm install` and `npm run build` automatically.

## Customize your content

Edit **`src/data/portfolio-developer.ts`** and **`src/data/portfolio-security.ts`**. Shared info lives in **`src/data/shared.ts`**.

## Contact form (email delivery)

1. Sign up at [web3forms.com](https://web3forms.com) with **prabhuku004@gmail.com**.
2. Add to `.env.local` locally:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. On Vercel, add the same variable under **Project → Settings → Environment Variables**.
4. Restrict the key to your `*.vercel.app` domain in the Web3Forms dashboard.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

See **[DEPLOY.md](./DEPLOY.md)** — import on Vercel, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Your site will live at **`your-project.vercel.app`**.

## Resumes

Included in `public/`:

- `K_Prabhu_RESUME_Web_Developer.pdf`
- `K_Prabhu_RESUME_Cyber_Security.pdf`

Source generator: `D:\MyPortfolio\generate_resume.py` (local, not required on Vercel).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
