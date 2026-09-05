"use client"
import { Navbar } from "@/components/Navbar"
import { BusinessDropZone } from "@/components/BusinessDropZone"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Github, Sparkles } from "lucide-react"
import Link from "next/link"

export default function BusinessPage() {
  const [dropped, setDropped] = useState<any>(null)

  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      <div className="mx-auto max-w-[800px] px-6 py-12 md:px-8 md:py-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 shadow-sm">
            <FileText size={12} />
            <span className="text-[11px] font-medium tracking-widest">BUSINESS DROP ZONE • CUSTOM REPO READY</span>
          </div>
          <h1 className="mt-6 font-display text-[40px] leading-[0.9] tracking-[-0.04em] md:text-[56px]">
            Drop your business info.
            <br />
            <span className="italic font-light">We’ll forge the rest.</span>
          </h1>
          <p className="mt-4 max-w-[520px] text-[16px] leading-[1.6] text-[#575551]">
            Repo is active: <code className="rounded bg-[#F5F3EF] px-1.5 py-0.5 font-mono text-[12px]">github.com/arenaai815-wq/webforge-ai</code>. Paste anything — website copy, brief, Notion, even a voice memo transcript. WebForge parses vibe, audience, story and forges a Fable 5 site with its own custom repository.
          </p>
        </motion.div>

        <div className="mt-10">
          <BusinessDropZone
            onParsed={(d) => {
              setDropped(d)
              localStorage.setItem("webforge-prompt", d.raw || d.description)
            }}
          />

          {dropped && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-[20px] border border-[#E8E6E1] bg-white p-6 shadow-paper">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Sparkles size={14} />
                </div>
                <p className="font-medium">Parsed: {dropped.name}</p>
                <span className="rounded-full bg-[#F5F3EF] px-2 py-1 text-[10px] font-mono">{dropped.vibe}</span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.5] text-[#575551] line-clamp-3">{dropped.description}</p>
              <Link href="/forge" className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-[#141413] px-6 text-[14px] text-white">
                Continue to Forge <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[20px] border border-[#E8E6E1] bg-[#FAF9F5] p-6">
            <p className="text-[12px] font-medium tracking-wide text-[#787672]">TEMPLATE FILE</p>
            <p className="mt-2 font-mono text-[13px]">BUSINESS_TEMPLATE.md</p>
            <p className="mt-2 text-[13px] leading-[1.5] text-[#575551]">Fill the markdown template in repo root. Then run <code className="bg-white px-1 rounded border">node scripts/forge-cli.js</code> or paste into /forge.</p>
            <a href="https://github.com/arenaai815-wq/webforge-ai/blob/arena/01a07223-webforge-ai/BUSINESS_TEMPLATE.md" target="_blank" className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium hover:underline">
              View template <Github size={14} />
            </a>
          </div>
          <div className="rounded-[20px] bg-[#141413] p-6 text-white">
            <p className="font-mono text-[11px] tracking-widest text-white/40">NEXT STEPS AFTER DROP</p>
            <div className="mt-3 space-y-2 font-mono text-[12px] leading-[1.6] text-white/60">
              <div>1. Parsed → vibe, palette, typography</div>
              <div>2. Forge → sites/{`{slug}`}/forge.json</div>
              <div>3. Preview → /sites/{`{slug}`}</div>
              <div>4. Vault → /projects</div>
              <div className="text-[#D97757]">5. Deploy → Vercel / Netlify</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
