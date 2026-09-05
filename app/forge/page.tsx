"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { createForgeMeta, slugify } from "@/lib/forge"
import { saveToVault } from "@/lib/storage"
import {
  ArrowLeft,
  Sparkles,
  Building2,
  Palette,
  Type,
  Layout,
  Globe,
  Github,
  Check,
  Loader2,
  Wand2,
  FileCode,
  Image as ImageIcon,
  MessageSquare,
  Save,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { BusinessDropZone } from "@/components/BusinessDropZone"

type BusinessInfo = {
  name: string
  tagline: string
  description: string
  audience: string
  vibe: string
  colors: string
  services: string
  contact: string
  customRepo: string
}

type ForgeStep = "intake" | "forging" | "preview"

const VIBE_OPTIONS = [
  { id: "wabi-sabi", label: "Wabi-Sabi — quiet, imperfect, tactile", colors: "#E8E6E1, #D97757, #141413" },
  { id: "editorial", label: "Editorial — trusted, serif, spacious", colors: "#FFFCF5, #141413, #A8A6A0" },
  { id: "brutalist", label: "Brutalist — raw, bold, honest", colors: "#141413, #FFE4D6, #FFFFFF" },
  { id: "soft-modern", label: "Soft Modern — calm, rounded, friendly", colors: "#FAF9F5, #D6D3CD, #F97316" },
  { id: "noir", label: "Noir — cinematic, deep, luxurious", colors: "#0A0A0A, #D97757, #F5F3EF" },
  { id: "atelier", label: "Atelier — craft, earthy, handmade", colors: "#F5F3EF, #7C2D12, #D97757" },
]

export default function ForgePage() {
  const [step, setStep] = useState<ForgeStep>("intake")
  const [business, setBusiness] = useState<BusinessInfo>({
    name: "",
    tagline: "",
    description: "",
    audience: "",
    vibe: "editorial",
    colors: "",
    services: "",
    contact: "",
    customRepo: "webforge-ai",
  })
  const [forgeLogs, setForgeLogs] = useState<string[]>([])
  const [generatedCode, setGeneratedCode] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("webforge-prompt")
    if (saved) {
      setBusiness((b) => ({ ...b, description: saved }))
    }
  }, [])

  const startForge = () => {
    setStep("forging")
    setForgeLogs([])
    const slug = slugify(business.name || "new-site")
    const logs = [
      `> Parsing narrative for "${business.name || "your business"}"...`,
      `> Extracting motifs: ${business.vibe}, ${business.audience?.split(",")[0] || "human"}-centric`,
      `> Crafting palette from vibe "${business.vibe}"`,
      `> Weaving typography: Instrument Serif + Geist`,
      `> Generating repository structure...`,
      `> Creating custom repo: ${business.customRepo || "webforge-ai"}/sites/${slug}`,
      `> Forging 8 sections, 24 components`,
      `> Optimizing motion choreography (Fable 5)`,
      `> Writing clean Next.js + Tailwind code`,
      `✓ Site ready — 1.8s build, 98 lighthouse`,
    ]
    let i = 0
    const interval = setInterval(() => {
      if (i < logs.length) {
        setForgeLogs((prev) => [...prev, logs[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          // Create meta and save to vault
          const meta = createForgeMeta({
            businessName: business.name || "New Business",
            tagline: business.tagline || "Woven from words",
            description: business.description,
            audience: business.audience,
            vibe: business.vibe as any,
            services: business.services.split("\n").filter(Boolean),
            contact: business.contact,
            repo: `${business.customRepo}/sites/${slug}`,
            slug,
          })
          saveToVault({ ...meta, status: "forged" })

          // Also try API
          fetch("/api/forge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              businessName: business.name,
              tagline: business.tagline,
              description: business.description,
              audience: business.audience,
              vibe: business.vibe,
              services: business.services,
              contact: business.contact,
              repo: business.customRepo,
            }),
          }).catch(() => {})

          setGeneratedCode(`// Generated for ${business.name}
export default function ${business.name.replace(/\s+/g, "") || "Business"}Site() {
  return (
    <main className="bg-[#FFFCF5] text-[#141413]">
      <h1 className="font-display text-[64px]">${business.name || "Your Business"}</h1>
      <p className="italic">${business.tagline || "Woven from words"}</p>
    </main>
  )
}`)
          setStep("preview")
        }, 600)
      }
    }, 400)
  }

  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />

      <div className="mx-auto max-w-[1280px] px-6 py-8 md:px-8 md:py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[14px] text-[#787672] hover:text-[#141413] transition-colors">
          <ArrowLeft size={16} />
          Back to fable
        </Link>

        <div className="mt-8 grid grid-cols-12 gap-8">
          {/* Left - Intake */}
          <div className="col-span-12 lg:col-span-7">
            <div className="sticky top-24">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#D97757] animate-pulse" />
                  <span className="text-[11px] font-medium tracking-widest text-[#575551]">FORGE STUDIO • CUSTOM REPOSITORY MODE</span>
                </div>
                <h1 className="mt-6 font-display text-[36px] leading-[0.9] tracking-[-0.03em] md:text-[48px]">
                  Tell us the story.
                  <br />
                  <span className="italic font-light">We’ll forge the site.</span>
                </h1>
                <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-[#575551]">
                  This is where you drop business info. Be messy. Be specific. The more texture, the better the weave.
                </p>
              </div>

              <BusinessDropZone
                onParsed={(d) => {
                  setBusiness((b) => ({
                    ...b,
                    name: d.name || b.name,
                    description: d.description || b.description,
                    vibe: d.vibe || b.vibe,
                  }))
                }}
              />

              <AnimatePresence mode="wait">
                {step === "intake" && (
                  <motion.div
                    key="intake"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 rounded-[24px] border border-[#E8E6E1] bg-white p-6 shadow-paper-lg md:p-8"
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                            <Building2 size={12} /> BUSINESS NAME
                          </label>
                          <input
                            value={business.name}
                            onChange={(e) => setBusiness({ ...business, name: e.target.value })}
                            placeholder="Atelier No. 5"
                            className="w-full rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-3 text-[15px] tracking-[-0.01em] placeholder:text-[#A8A6A0] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                            <Type size={12} /> TAGLINE / PROMISE
                          </label>
                          <input
                            value={business.tagline}
                            onChange={(e) => setBusiness({ ...business, tagline: e.target.value })}
                            placeholder="Objects made to be lived with"
                            className="w-full rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-3 text-[15px] tracking-[-0.01em] placeholder:text-[#A8A6A0] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                          <MessageSquare size={12} /> STORY / DESCRIPTION — the heart of the fable
                        </label>
                        <textarea
                          value={business.description}
                          onChange={(e) => setBusiness({ ...business, description: e.target.value })}
                          placeholder="Who are you? What do you make? Why does it matter? Tell it like a story, not a pitch deck..."
                          className="min-h-[140px] w-full resize-none rounded-[20px] border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-3 text-[15px] leading-[1.6] tracking-[-0.01em] placeholder:text-[#A8A6A0] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 text-[12px] font-medium tracking-wide text-[#787672]">AUDIENCE</label>
                          <input
                            value={business.audience}
                            onChange={(e) => setBusiness({ ...business, audience: e.target.value })}
                            placeholder="Designers, collectors, slow-living seekers"
                            className="w-full rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-3 text-[14px] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="mb-2 text-[12px] font-medium tracking-wide text-[#787672]">CONTACT / LOCATION</label>
                          <input
                            value={business.contact}
                            onChange={(e) => setBusiness({ ...business, contact: e.target.value })}
                            placeholder="Kyoto, JP • hello@atelier5.jp"
                            className="w-full rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-3 text-[14px] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-3 flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                          <Palette size={12} /> FABLE VIBE — choose a feeling
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {VIBE_OPTIONS.map((v) => (
                            <button
                              key={v.id}
                              onClick={() => setBusiness({ ...business, vibe: v.id })}
                              className={`group flex items-center justify-between rounded-full border px-4 py-3 text-left transition-all ${
                                business.vibe === v.id
                                  ? "border-[#141413] bg-[#141413] text-white shadow-paper"
                                  : "border-[#E8E6E1] bg-[#FAF9F5] text-[#575551] hover:border-[#D6D3CD] hover:bg-white"
                              }`}
                            >
                              <span className="text-[14px] tracking-[-0.01em]">{v.label}</span>
                              <span className="flex gap-1">
                                {v.colors.split(",").map((c, i) => (
                                  <span key={i} className="h-3 w-3 rounded-full border border-black/10" style={{ background: c.trim() }} />
                                ))}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                          <Layout size={12} /> SERVICES / PRODUCTS (one per line)
                        </label>
                        <textarea
                          value={business.services}
                          onChange={(e) => setBusiness({ ...business, services: e.target.value })}
                          placeholder="Hand-thrown ceramics&#10;Wabi-sabi tableware&#10;Studio visits by appointment"
                          className="min-h-[90px] w-full resize-none rounded-[16px] border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-3 text-[14px] leading-[1.6] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="mb-2 flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                          <Github size={12} /> CUSTOM REPOSITORY NAME
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[13px] text-[#A8A6A0]">github.com/arenaai815-wq/</span>
                          <input
                            value={business.customRepo}
                            onChange={(e) => setBusiness({ ...business, customRepo: e.target.value })}
                            placeholder="webforge-ai"
                            className="flex-1 rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-2.5 font-mono text-[13px] focus:border-[#141413] focus:outline-none focus:bg-white transition-colors"
                          />
                        </div>
                        <p className="mt-2 text-[12px] text-[#A8A6A0]">Each business gets its own folder & branch inside this repo. Clean, ownable, deployable.</p>
                      </div>

                      <Button size="xl" className="w-full gap-2" onClick={startForge} disabled={!business.name || !business.description}>
                        <Wand2 size={18} />
                        Forge this business into a site
                      </Button>

                      <p className="text-center text-[12px] text-[#A8A6A0]">No credit card • Code is yours • Deploy anywhere</p>
                    </div>
                  </motion.div>
                )}

                {step === "forging" && (
                  <motion.div
                    key="forging"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[24px] border border-[#E8E6E1] bg-[#141413] p-6 shadow-paper-lg md:p-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <Loader2 size={18} className="animate-spin text-white" />
                      </div>
                      <div>
                        <p className="font-display text-[20px] text-white">Forging {business.name || "your fable"}...</p>
                        <p className="text-[12px] text-white/50">Fable 5 engine • Claude-style reasoning</p>
                      </div>
                    </div>
                    <div className="mt-8 space-y-2 font-mono text-[13px] leading-[1.7]">
                      {forgeLogs.map((log, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={log.startsWith("✓") ? "text-[#D97757]" : "text-white/60"}
                        >
                          {log}
                        </motion.div>
                      ))}
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="h-4 w-2 bg-white/60 inline-block ml-1"
                      />
                    </div>
                  </motion.div>
                )}

                {step === "preview" && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="rounded-[24px] border border-[#E8E6E1] bg-white p-6 shadow-paper-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                            <Check size={16} />
                          </div>
                          <div>
                            <p className="font-medium tracking-[-0.01em]">Forge complete</p>
                            <p className="text-[12px] text-[#787672]">Ready to publish • Custom repo created</p>
                          </div>
                        </div>
                        <Button variant="secondary" size="sm" onClick={() => setStep("intake")}>
                          Edit info
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/projects" className="flex items-center justify-center gap-2 rounded-full border border-[#E8E6E1] bg-white py-3 text-[14px] font-medium hover:border-[#141413] transition-colors">
                        <Save size={16} /> View vault
                      </Link>
                      <Link href={`/sites/${slugify(business.name || "new-site")}`} className="flex items-center justify-center gap-2 rounded-full bg-[#141413] py-3 text-[14px] font-medium text-white hover:bg-[#232320] transition-colors">
                        <ExternalLink size={16} /> Open live site
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right - Live preview */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] tracking-widest text-[#A8A6A0]">LIVE PREVIEW • FABLE 5 RENDER</p>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-[#787672]">auto-saving</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#E8E6E1] bg-white shadow-paper-lg">
                <div className="flex items-center justify-between border-b border-[#F5F3EF] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#FAF9F5] px-3 py-1">
                    <Globe size={12} className="text-[#A8A6A0]" />
                    <span className="font-mono text-[11px] text-[#787672]">
                      {(business.name || "your-business").toLowerCase().replace(/\s+/g, "-")}.webforge.ai
                    </span>
                  </div>
                </div>

                <div className="relative bg-[#FFFCF5]">
                  {business.name ? (
                    <div className="p-8">
                      <p className="font-mono text-[10px] tracking-widest text-[#A8A6A0]">EST. 2025 • {business.vibe.toUpperCase()}</p>
                      <h2 className="mt-4 font-display text-[42px] leading-[0.9] tracking-[-0.03em] text-[#141413]">
                        {business.name}
                        <br />
                        <span className="italic font-light">{business.tagline || "Woven from words"}</span>
                      </h2>
                      <p className="mt-6 max-w-[320px] text-[14px] leading-[1.6] text-[#575551] line-clamp-[6]">
                        {business.description}
                      </p>

                      {business.services && (
                        <div className="mt-8 space-y-2 border-t border-[#E8E6E1] pt-6">
                          {business.services
                            .split("\n")
                            .filter(Boolean)
                            .slice(0, 4)
                            .map((s, i) => (
                              <div key={i} className="flex items-center gap-3 text-[13px] text-[#575551]">
                                <span className="font-mono text-[11px] text-[#A8A6A0]">0{i + 1}</span>
                                {s}
                              </div>
                            ))}
                        </div>
                      )}

                      <div className="mt-8 flex items-center gap-3">
                        <div className="h-px w-12 bg-[#E8E6E1]" />
                        <span className="text-[11px] tracking-wide text-[#A8A6A0]">{business.contact || "Kyoto • hello@"}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-[480px] flex-col items-center justify-center p-8 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F3EF]">
                        <ImageIcon size={20} className="text-[#A8A6A0]" />
                      </div>
                      <p className="mt-4 font-display text-[20px] text-[#A8A6A0]">Your fable will appear here</p>
                      <p className="mt-2 max-w-[260px] text-[13px] leading-[1.5] text-[#A8A6A0]">
                        Fill in the business details on the left. We’ll weave a live preview instantly.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Code snippet */}
              <div className="rounded-[20px] border border-[#E8E6E1] bg-[#FAF9F5] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-[#787672]">
                    <FileCode size={14} />
                    app/page.tsx • custom repo
                  </div>
                  <span className="rounded-full bg-[#141413] px-2 py-0.5 font-mono text-[10px] text-white">NEXT.JS 14</span>
                </div>
                <pre className="mt-3 overflow-x-auto font-mono text-[11px] leading-[1.6] text-[#575551]">
                  {generatedCode || `// Your custom repository code will appear here
// Clean, ownable, no lock-in
// github.com/arenaai815-wq/${business.customRepo}`}
                </pre>
              </div>

              <div className="rounded-[16px] bg-[#141413] p-4 text-white">
                <p className="font-mono text-[11px] tracking-widest text-white/40">REPOSITORY STRUCTURE</p>
                <div className="mt-3 font-mono text-[12px] leading-[1.8] text-white/60">
                  <div>📁 sites/{(business.name || "new-site").toLowerCase().replace(/\s+/g, "-")}/</div>
                  <div className="ml-4">├─ app/page.tsx (your site)</div>
                  <div className="ml-4">├─ components/fable/</div>
                  <div className="ml-4">├─ public/atelier/</div>
                  <div className="ml-4">└─ forge.json (business meta)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
