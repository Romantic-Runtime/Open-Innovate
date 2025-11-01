## Deploying frontend to Vercel (monorepo)

This repository contains two top-level projects: `frontend/` (Vite + React) and `backend/` (Express). By default Vercel will try to detect a build at the repository root — that can lead to the backend being deployed as the site root. The `vercel.json` file added here forces Vercel to run the static build for the `frontend` folder and serve it as the site root.

What I added
- `vercel.json` — tells Vercel to run `@vercel/static-build` using `frontend/package.json` and serve the `dist` output.

Steps to redeploy on Vercel
1. Push these changes to GitHub/GitLab (if not already pushed):

```powershell
cd "C:\Users\Mohnish\OneDrive\Desktop\HACKWITHUP\Open-Innovate"
git add vercel.json DEPLOYMENT.md
git commit -m "Add vercel.json to build frontend from /frontend"
git push
```

2. In the Vercel dashboard find the project for this repo and trigger a redeploy (Deployments -> Redeploy). Vercel will detect `vercel.json` and run the frontend static-build.

3. Confirm the site: after deployment the site root should serve the frontend (the React app). API endpoints will not automatically be served unless the backend is adapted to Vercel serverless functions or hosted separately.

Notes and recommendations
- If you want the backend running as API under the same domain, either:
  - Convert the Express routes to Vercel Serverless Functions under an `/api` folder (more work), or
  - Host the backend as a separate project (Render, Railway, Heroku, a separate Vercel project) and update the frontend to call that backend URL. You can then create rewrites in `vercel.json` to proxy `/api/*` to the external backend URL.
- Example rewrite (if your backend runs at `https://api.example.com`):

```json
// inside vercel.json "routes": [ ... ]
{
  "src": "/api/(.*)",
  "dest": "https://api.example.com/api/$1"
}
```

If you'd like, I can:
- Add a proxy rewrite if you share the backend's public URL, or
- Help convert selected Express endpoints into Vercel serverless functions.
