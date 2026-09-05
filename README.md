# WebForge AI — Claude Fable 5 Style

> Websites woven from words. Not code.

WebForge AI is a **Claude-inspired, Fable 5 motion** website builder that forges a **custom repository per business**. No templates. No drag. Just story → code.

**Repo:** `github.com/arenaai815-wq/webforge-ai`  
**Branch:** `arena/01a07223-webforge-ai`  
**Style:** Claude (warm paper, serif editorial, calm) + Fable 5 (story chapters, parallax, paper reveals)

---

### ✨ What is Claude Fable 5 Style?

- **Claude:** Warm off-white `#FFFCF5`, charcoal ink `#141413`, terracotta clay `#D97757`, serif display (Instrument Serif / Newsreader), soft paper shadows, calm chat-like prompts.
- **Fable 5:** Editorial storytelling, Chapter I/II/III structure, motion as meaning (stagger, float, paper texture), fable ornaments, vault logs.
- **WebForge twist:** Every business gets its own GitHub repo/folder — ownable, deployable, no lock-in.

### 🧱 Stack

- Next.js 14 App Router
- TypeScript, Tailwind CSS 3.4
- Framer Motion 11
- Lucide Icons
- Geist + Instrument Serif + Newsreader fonts

### 📁 Structure

```
app/
  page.tsx          → Landing (Claude Fable 5)
  forge/page.tsx    → Forge Studio (business intake → live preview → repo)
  globals.css       → Paper texture, serif display
  layout.tsx
components/
  Navbar.tsx        → Sticky, paper blur
  Hero.tsx          → Claude prompt + Fable preview cards
  FableManifesto.tsx→ Chapter I II III
  ForgeFeatures.tsx → Features + Vault repo manager
  ui/button.tsx
lib/
  utils.ts
  forge.ts          → Custom repo helpers
sites/
  _template/        → Example generated site structure
  README.md
public/
```

### 🚀 Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

### 🛠️ Forge Flow (Custom Repository)

1. User lands on `/` — sees Claude-style prompt: "Tell me about your business..."
2. Clicks **Forge site** → `/forge`
3. Fills business info:
   - Name, tagline, story, audience, vibe (wabi-sabi, editorial, brutalist, soft-modern, noir, atelier), services, contact, custom repo name
4. Live preview updates instantly (right side)
5. Click **Forge** → simulated logs → preview + code snippet
6. Repo structure: `sites/{business-slug}/` with `forge.json`, `app/page.tsx`, components
7. Future: push to GitHub via API, deploy to Vercel.

### 📦 Custom Repository Concept

Each forge creates:

```
sites/my-coffee-shop/
  forge.json       → Business meta, vibe, audience, repo link
  app/page.tsx     → Generated Next.js page
  components/      → Fable components
  public/          → Images
```

Linked to `github.com/arenaai815-wq/webforge-ai` as vault. One business = one branch/folder. Ownable.

### 🎨 Design Tokens

- Paper: `#FFFCF5`
- Ink: `#141413`
- Clay: `#D97757`
- Stone 50: `#FAF9F5`, 200: `#E8E6E1`
- Font Display: `Instrument Serif` italic light for fable moments
- Radius: `28px` for prompt, `24px` for cards
- Shadow: `paper`, `paper-lg`, `glow`

### 📝 Business Info Drop Zone

Once repo is active, drop business details in `/forge`:

- Business name, tagline
- Story (who, what, why)
- Audience
- Vibe choice
- Services list
- Contact
- Custom repo name (default: webforge-ai)

WebForge will instantly render Fable 5 style preview.

### 🔗 Links

- Live Preview: run `npm run dev` → localhost:3000
- GitHub: https://github.com/arenaai815-wq/webforge-ai
- Forge Studio: `/forge`

### 🧪 Build

```bash
npm run build
npm start
```

### License

MIT — your fables, your repos.

— end of fable five, beginning of yours —
