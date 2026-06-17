# Deploy K Prabhu Portfolio to Vercel

Your site will use the default Vercel URL, e.g. `https://k-prabhu-portfolio.vercel.app`.

## 1. Push to GitHub

```bash
cd d:\MyPortfolio\k-prabhu-portfolio
git add .
git commit -m "Initial portfolio deploy"
```

Create a new repo on GitHub (e.g. `k-prabhu-portfolio`), then:

```bash
git remote add origin https://github.com/Prabhu007K/k-prabhu-portfolio.git
git branch -M main
git push -u origin main
```

## 2. Import on Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import `k-prabhu-portfolio`.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variable:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your Web3Forms key
5. Click **Deploy**.

Your site will be live at **`https://<project-name>.vercel.app`** (e.g. `k-prabhu-portfolio.vercel.app`).

## 3. Web3Forms domain

In [Web3Forms](https://web3forms.com), add your Vercel URL to allowed domains for the contact form key, e.g.:

- `k-prabhu-portfolio.vercel.app`

## 4. Verify after deploy

- Home page loads on desktop and mobile
- Web Developer ↔ Cyber Security toggle works
- **RESUME** opens the correct PDF per mode
- **Get in Touch** form sends email to `prabhuku004@gmail.com`
- Certifications **View Certificate** links open PDFs

## 5. Redeploy after changes

Push to `main` on GitHub — Vercel redeploys automatically.

---

<details>
<summary>Optional: custom domain later</summary>

If you buy a domain later, go to **Project → Settings → Domains → Add** in Vercel and follow the DNS instructions shown there.

</details>
