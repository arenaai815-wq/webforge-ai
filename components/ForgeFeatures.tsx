"use client"
import { motion } from "framer-motion"
import { GitBranch, Palette, Type, Box, Zap, Shield, Code2, Sparkles } from "lucide-react"

const FEATURES = [
  {
    icon: GitBranch,
    title: "Custom repo per site",
    desc: "Every forge creates its own GitHub repository in your account. Clean history, your ownership, deploy anywhere.",
    accent: "bg-[#FFE4D6]",
  },
  {
    icon: Palette,
    title: "Editorial palettes",
    desc: "Not random colors. We extract mood from your words — wabi-sabi, brutalist, soft-modern, noir.",
    accent: "bg-[#E8E6E1]",
  },
  {
    icon: Type,
    title: "Typography that breathes",
    desc: "Instrument Serif, Newsreader, Geist. Pairings chosen for your story, not from a dropdown.",
    accent: "bg-[#FAF9F5]",
  },
  {
    icon: Box,
    title: "Motion as meaning",
    desc: "Fable-style choreography: stagger, parallax, paper reveals. Motion that guides, never distracts.",
    accent: "bg-[#FFFCF5]",
  },
  {
    icon: Zap,
    title: "Instant deploy",
    desc: "Push to Vercel, Netlify, or Cloudflare with one click. Or keep it local. Your forge, your rules.",
    accent: "bg-[#F5F3EF]",
  },
  {
    icon: Shield,
    title: "Own your fable",
    desc: "No watermark, no lock-in. Export full Next.js 14 code. Edit by hand or keep talking to Forge.",
    accent: "bg-[#FFF7ED]",
  },
]

export function ForgeFeatures() {
  return (
    <section id="forge" className="relative bg-[#FFFCF5] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 shadow-sm"
          >
            <Code2 size={14} className="text-[#D97757]" />
            <span className="text-[12px] font-medium tracking-wide text-[#575551]">THE FORGE / TOOLING</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-[36px] leading-[0.95] tracking-[-0.03em] text-[#141413] md:text-[56px]"
          >
            Crafted like a book.
            <br />
            <span className="italic font-light">Powered like an engine.</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[20px] border border-[#E8E6E1] bg-white p-[1px] shadow-paper transition-all hover:shadow-paper-lg hover:border-[#D6D3CD]"
            >
              <div className="rounded-[19px] bg-white p-6 md:p-7 h-full">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${f.accent} border border-black/[0.04]`}>
                  <f.icon size={18} className="text-[#141413]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-[20px] tracking-[-0.01em] text-[#141413]">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#575551]">{f.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-medium text-[#A8A6A0] group-hover:text-[#575551] transition-colors">
                  <span className="h-px w-6 bg-[#E8E6E1] group-hover:w-10 group-hover:bg-[#D6D3CD] transition-all" />
                  Learn more
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vault - repo management */}
        <motion.div
          id="vault"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 overflow-hidden rounded-[28px] border border-[#E8E6E1] bg-[#141413] p-2 md:mt-28"
        >
          <div className="rounded-[20px] bg-[#1A1A18] p-6 md:p-10">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <Sparkles size={12} className="text-[#D97757]" />
                  <span className="text-[11px] tracking-widest text-white/60">VAULT • REPOSITORY MANAGER</span>
                </div>
                <h3 className="mt-6 font-display text-[32px] leading-[0.9] tracking-[-0.02em] text-white md:text-[40px]">
                  One business.
                  <br />
                  <span className="italic font-light text-white/60">One repository.</span>
                </h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/50">
                  WebForge doesn’t hide your code in a walled garden. Each site is a real repo you own. Branch, PR, rollback — like it should be.
                </p>
                <div className="mt-8 space-y-3 font-mono text-[12px]">
                  <div className="flex items-center gap-3 text-white/30">
                    <span className="h-px w-8 bg-white/10" />
                    CONNECTED TO
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 w-fit">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-black">GH</div>
                    <span className="text-white/80">github.com/arenaai815-wq/webforge-ai</span>
                    <span className="ml-2 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="rounded-[16px] border border-white/10 bg-[#141413] overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="ml-3 font-mono text-[11px] text-white/30">webforge-vault • zsh</span>
                  </div>
                  <div className="p-5 font-mono text-[13px] leading-[1.7]">
                    <div className="text-white/20">$ webforge create --business "atelier no.5"</div>
                    <div className="mt-3 space-y-1">
                      <div className="text-white/60">✓ Analyzed narrative (3 chapters, 12 motifs)</div>
                      <div className="text-white/60">✓ Generated palette: clay, paper, ink</div>
                      <div className="text-white/60">✓ Created repository: atelier-no5</div>
                      <div className="text-white/60">✓ Pushed 24 files, 1.2k lines</div>
                      <div className="mt-3 text-[#D97757]">✓ Live at atelier-no5.vercel.app — 2.4s build</div>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <span className="rounded bg-white/10 px-2 py-1 text-[11px] text-white/50">main</span>
                      <span className="rounded bg-[#D97757]/20 px-2 py-1 text-[11px] text-[#D97757]">+12 commits</span>
                      <span className="rounded bg-emerald-500/20 px-2 py-1 text-[11px] text-emerald-300">● deployed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
