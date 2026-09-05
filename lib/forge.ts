// WebForge Custom Repository System
// Each business gets its own folder + forge.json + generated site

export type Vibe = "wabi-sabi" | "editorial" | "brutalist" | "soft-modern" | "noir" | "atelier"

export type ForgeMeta = {
  id: string
  slug: string
  businessName: string
  tagline: string
  description: string
  audience: string
  vibe: Vibe
  services: string[]
  contact: string
  repo: string
  createdAt: string
  status: "draft" | "forged" | "deployed"
  palette: {
    paper: string
    ink: string
    accent: string
    stone: string
  }
  typography: {
    display: string
    sans: string
  }
}

export const VIBE_PALETTES: Record<Vibe, ForgeMeta["palette"]> = {
  "wabi-sabi": { paper: "#FAF9F5", ink: "#141413", accent: "#D97757", stone: "#E8E6E1" },
  "editorial": { paper: "#FFFCF5", ink: "#141413", accent: "#A8A6A0", stone: "#F5F3EF" },
  "brutalist": { paper: "#FFFFFF", ink: "#141413", accent: "#FFE4D6", stone: "#141413" },
  "soft-modern": { paper: "#FAF9F5", ink: "#141413", accent: "#F97316", stone: "#D6D3CD" },
  "noir": { paper: "#0A0A0A", ink: "#FFFCF5", accent: "#D97757", stone: "#1A1A18" },
  "atelier": { paper: "#F5F3EF", ink: "#141413", accent: "#7C2D12", stone: "#D97757" },
}

export function slugify(name: string) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function createForgeMeta(input: Partial<ForgeMeta> & { businessName: string }): ForgeMeta {
  const slug = input.slug || slugify(input.businessName)
  const vibe = (input.vibe as Vibe) || "editorial"
  return {
    id: `forge_${Date.now()}`,
    slug,
    businessName: input.businessName,
    tagline: input.tagline || "Woven from words",
    description: input.description || "",
    audience: input.audience || "Curious humans",
    vibe,
    services: input.services || [],
    contact: input.contact || "",
    repo: input.repo || `arenaai815-wq/webforge-ai/sites/${slug}`,
    createdAt: new Date().toISOString(),
    status: "draft",
    palette: VIBE_PALETTES[vibe],
    typography: {
      display: "Instrument Serif",
      sans: "Geist",
    },
  }
}

export function generateSitePrompt(meta: ForgeMeta) {
  return `
Create a website for "${meta.businessName}" — ${meta.tagline}.
Vibe: ${meta.vibe}. Audience: ${meta.audience}.
Story: ${meta.description}
Services: ${meta.services.join(", ")}
Palette: paper ${meta.palette.paper}, ink ${meta.palette.ink}, accent ${meta.palette.accent}
Style: Claude Fable 5 — editorial, calm, paper texture, serif display italic, motion choreography, custom repo.
Structure: Hero with fable chapter, manifesto, services, contact.
Tech: Next.js 14, Tailwind, Framer Motion.
Repo: ${meta.repo}
`.trim()
}
