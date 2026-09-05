"use client"
import { useEffect, useState } from "react"
import { getFromVault } from "@/lib/storage"
import { ForgeMeta, VIBE_PALETTES } from "@/lib/forge"
import { motion } from "framer-motion"
import { ArrowLeft, Github, Globe, Sparkles } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SitePreviewPage() {
  const params = useParams()
  const slug = params.slug as string
  const [meta, setMeta] = useState<ForgeMeta | null>(null)

  useEffect(() => {
    const m = getFromVault(slug)
    if (m) setMeta(m)
    else {
      // try fetch from API
      fetch("/api/forge")
        .then((r) => r.json())
        .then((d) => {
          const found = d.sites?.find((s: ForgeMeta) => s.slug === slug)
          if (found) setMeta(found)
        })
    }
  }, [slug])

  if (!meta) {
    return (
      <main className="min-h-screen bg-[#FFFCF5] flex items-center justify-center p-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-[#F5F3EF] animate-pulse" />
          <p className="mt-4 font-display text-[20px] text-[#A8A6A0]">Loading fable {slug}...</p>
          <Link href="/projects" className="mt-4 inline-flex text-[14px] text-[#787672] hover:text-[#141413]">
            ← Back to vault
          </Link>
        </div>
      </main>
    )
  }

  const palette = (VIBE_PALETTES as any)[meta.vibe] || VIBE_PALETTES.editorial

  return (
    <main className="min-h-screen" style={{ background: palette.paper, color: palette.ink }}>
      {/* Site nav - generated */}
      <nav className="sticky top-0 z-10 border-b border-black/5 backdrop-blur-xl" style={{ background: `${palette.paper}CC` }}>
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141413] text-white font-display">
              {meta.businessName[0]}
            </div>
            <span className="font-display text-[20px] tracking-tight">{meta.businessName}</span>
            <span className="ml-2 rounded-full border border-black/10 px-2.5 py-1 text-[10px] tracking-widest opacity-60">FABLE • {meta.vibe.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-[13px] opacity-60 hover:opacity-100">
              <ArrowLeft size={14} /> Vault
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#141413] text-white px-4 py-2 text-[13px]">
              <Globe size={14} /> {meta.contact || "Contact"}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero - Fable style */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-[11px] tracking-widest opacity-50">EST. 2025 • {meta.audience?.toUpperCase()}</p>
            <h1 className="mt-6 max-w-[800px] font-display text-[48px] leading-[0.9] tracking-[-0.04em] md:text-[84px]">
              {meta.businessName}
              <br />
              <span className="italic font-light opacity-70">{meta.tagline}</span>
            </h1>
            <p className="mt-8 max-w-[520px] text-[18px] leading-[1.6] opacity-70">{meta.description}</p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-current opacity-20" />
              <span className="font-display italic text-[16px] opacity-50">hand-bound, digitally</span>
            </div>
          </motion.div>

          {/* Services as chapters */}
          {meta.services?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10 md:grid-cols-3"
            >
              {meta.services.map((s, i) => (
                <div key={i} className="bg-white/80 p-8 backdrop-blur" style={{ background: `${palette.paper}F2` }}>
                  <span className="font-mono text-[11px] opacity-40">CHAPTER 0{i + 1}</span>
                  <p className="mt-3 font-display text-[20px] leading-[1.2]">{s}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Decorative orb */}
        <div className="pointer-events-none absolute right-[-20%] top-[20%] h-[600px] w-[600px] rounded-full blur-[120px]" style={{ background: `${palette.accent}30` }} />
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 text-[12px] opacity-50 md:px-8">
          <span className="flex items-center gap-2">
            <Sparkles size={12} /> Forged by WebForge AI • {meta.repo}
          </span>
          <span>Claude Fable 5 • Custom Repository</span>
        </div>
      </footer>
    </main>
  )
}
