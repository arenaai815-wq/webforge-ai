# Sites Vault — Custom Repositories

Each business forged in WebForge gets its own folder here.

```
sites/
  atelier-no-5/
    forge.json      → business meta, vibe, palette, repo link
    app/page.tsx    → generated site
    components/
    public/
```

- `forge.json` is source of truth for business info
- Generator reads it and creates Next.js page
- Push to GitHub as custom repo or branch
- Deploy anywhere (Vercel, Netlify)

Template in `_template/` — copy for new business.

When user drops business info in `/forge`, we:
1. Create `sites/{slug}/forge.json`
2. Generate `app/page.tsx` with Fable 5 style
3. Link to `github.com/arenaai815-wq/webforge-ai`
