"use client"
import { businessData } from "@/lib/business-data"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Mail, Instagram, Github, Heart, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const b = businessData

  return (
    <main className="min-h-screen bg-[#FFFCF5] text-[#141413] selection:bg-[#D97757] selection:text-white">
      {/* Nav — Claude style minimal */}
      <nav className="sticky top-0 z-50 border-b border-[#E8E6E1]/60 bg-[#FFFCF5]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141413] text-[#FFFCF5] font-display text-[18px]">W</div>
            <span className="font-display text-[22px] tracking-[-0.02em]">{b.name.split(" ")[0].toLowerCase()}<span className="italic font-light">.atelier</span></span>
          </Link>
          <div className="hidden items-center gap-8 text-[14px] font-[450] tracking-[-0.01em] text-[#575551] md:flex">
            <a href="#story" className="hover:text-[#141413] transition-colors">Story</a>
            <a href="#services" className="hover:text-[#141413] transition-colors">Services</a>
            <a href="#work" className="hover:text-[#141413] transition-colors">Work</a>
            <a href="#contact" className="rounded-full bg-[#141413] px-5 py-2.5 text-white hover:bg-[#232320] transition-colors">Contact</a>
          </div>
          <Link href="/forge" className="md:hidden rounded-full bg-[#141413] px-4 py-2 text-[13px] text-white">Forge</Link>
        </div>
      </nav>

      {/* Hero — Fable 5 editorial */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-20%] h-[600px] w-[700px] rounded-full bg-[#FFE4D6]/50 blur-[120px]" />
          <div className="absolute right-[-15%] top-[10%] h-[500px] w-[600px] rounded-full bg-[#E8E6E1]/60 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-16 md:px-8 md:pb-32 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 shadow-paper"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#D97757]" />
            <span className="text-[11px] font-medium tracking-widest text-[#575551]">NOW FORGING • {b.location}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[900px] font-display text-[48px] leading-[0.85] tracking-[-0.04em] md:text-[84px] lg:text-[96px]"
          >
            Websites
            <br />
            <span className="italic font-light">woven from</span>
            <br />
            words.
          </motion.h1>

          <div className="mt-10 grid grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <p className="max-w-[480px] text-[18px] leading-[1.6] tracking-[-0.01em] text-[#575551] md:text-[19px]">
                {b.description}
                <span className="text-[#141413] font-[450]"> No templates. No drag. Just story → code.</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="group inline-flex h-[48px] items-center gap-2 rounded-full bg-[#141413] px-7 text-[15px] font-medium text-white shadow-paper-lg transition-all hover:bg-[#232320]">
                  See our fables
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#story" className="inline-flex h-[48px] items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-7 text-[15px] font-medium text-[#575551] hover:text-[#141413] hover:border-[#D6D3CD] transition-colors">
                  Our story
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <div className="relative ml-auto max-w-[420px] rounded-[24px] border border-[#E8E6E1] bg-white p-2 shadow-paper-lg">
                <div className="rounded-[16px] bg-[#141413] p-6 text-white md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[18px]">{b.name}</span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] tracking-widest text-white/60">LIVE REPO</span>
                  </div>
                  <div className="mt-16">
                    <h3 className="font-display max-w-[280px] text-[32px] leading-[0.9] tracking-[-0.02em]">Objects made to be <span className="italic font-light">lived with.</span></h3>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-px w-10 bg-white/20" />
                      <span className="text-[11px] tracking-wide text-white/40">CUSTOM REPOSITORY • FABLE 5</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-full bg-[#FFFCF5] px-3 py-1.5 shadow-paper border border-[#E8E6E1]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-medium">forged & owned</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex items-center gap-8 border-t border-[#E8E6E1] pt-8 md:mt-24"
          >
            {b.stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <span className="font-display text-[32px] tracking-[-0.02em]">{s.value}</span>
                <span className="text-[11px] tracking-widest text-[#A8A6A0]">{s.label}</span>
              </div>
            ))}
            <div className="ml-auto hidden items-center gap-2 text-[12px] text-[#A8A6A0] md:flex">
              <Sparkles size={12} />
              Claude-inspired • Fable-motion • Custom repos
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story — Manifesto */}
      <section id="story" className="border-y border-[#E8E6E1] bg-[#FAF9F5]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-32">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-5">
              <div className="sticky top-28">
                <p className="font-mono text-[11px] tracking-widest text-[#A8A6A0]">MANIFESTO / FABLE 5</p>
                <h2 className="mt-6 font-display text-[40px] leading-[0.9] tracking-[-0.03em] md:text-[56px]">
                  The web
                  <br />
                  <span className="italic font-light">forgot how</span>
                  <br />
                  to tell stories.
                </h2>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-16 bg-[#E8E6E1]" />
                  <span className="font-display italic text-[16px] text-[#787672]">hand-bound, digitally</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <p className="max-w-[520px] text-[18px] leading-[1.7] tracking-[-0.01em] text-[#575551]">{b.longDescription}</p>

              <div className="mt-16 space-y-16">
                {b.process.map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex gap-6 md:gap-10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E8E6E1] bg-white font-display text-[18px] shadow-paper">{p.step}</div>
                    <div>
                      <h3 className="font-display text-[26px] tracking-[-0.01em]">{p.title}</h3>
                      <p className="mt-3 max-w-[440px] text-[16px] leading-[1.6] text-[#575551]">{p.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 rounded-[20px] border border-[#E8E6E1] bg-white p-8 shadow-paper">
                <p className="font-display text-[20px] leading-[1.3] tracking-[-0.01em]">“A website should feel like a place you’ve been before, even if you haven’t. Familiar, like a good fable.”</p>
                <p className="mt-3 font-mono text-[11px] tracking-wide text-[#A8A6A0]">— FIELD NOTE, FABLE 5 ARCHIVE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#FFFCF5] py-20 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-widest text-[#A8A6A0]">SERVICES • CHAPTERS</p>
              <h2 className="mt-4 font-display text-[36px] leading-[0.9] tracking-[-0.03em] md:text-[56px]">Crafted like a book.<br /><span className="italic font-light">Powered like an engine.</span></h2>
            </div>
            <p className="hidden max-w-[320px] text-[14px] leading-[1.5] text-[#787672] md:block">Each service is a chapter. Choose your own story. All include custom repository.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-[#E8E6E1] bg-[#E8E6E1] md:grid-cols-3">
            {b.services.map((s) => (
              <div key={s.id} className="group bg-white p-8 md:p-10 hover:bg-[#FAF9F5] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-widest text-[#A8A6A0]">CHAPTER {s.id}</span>
                  <span className="rounded-full bg-[#F5F3EF] px-3 py-1 text-[11px] font-medium">{s.price}</span>
                </div>
                <h3 className="mt-8 font-display text-[26px] leading-[1.1] tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-4 text-[14px] leading-[1.6] text-[#575551]">{s.description}</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] font-medium text-[#A8A6A0] group-hover:text-[#141413] transition-colors">
                  <span className="h-px w-6 bg-[#E8E6E1] group-hover:w-10 group-hover:bg-[#141413] transition-all" />
                  Learn more
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-[#E8E6E1] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[32px] tracking-[-0.02em] md:text-[40px]">Selected fables</h2>
            <Link href="/projects" className="hidden items-center gap-2 text-[14px] text-[#787672] hover:text-[#141413] md:inline-flex">View vault <ArrowRight size={14} /></Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {b.work.map((w, i) => (
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[24px] border border-[#E8E6E1] p-2 shadow-paper hover:shadow-paper-lg transition-all"
              >
                <div className={`flex h-[360px] flex-col justify-between rounded-[16px] p-7 ${w.dark ? "bg-[#141413] text-white" : "bg-[#FAF9F5] text-[#141413]"}`} style={{ background: w.dark ? "#141413" : w.color }}>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-widest ${w.dark ? "border-white/20 text-white/60" : "border-black/10 text-black/50"}`}>{w.vibe.toUpperCase()}</span>
                    <ArrowUpRight size={16} className={`opacity-30 group-hover:opacity-100 transition-opacity ${w.dark ? "text-white" : "text-black"}`} />
                  </div>
                  <div>
                    <p className="font-display text-[28px] leading-[0.9] tracking-[-0.02em]">{w.name}</p>
                    <p className={`mt-2 text-[13px] ${w.dark ? "text-white/50" : "text-black/50"}`}>{w.type}</p>
                    <p className={`mt-4 font-display italic text-[15px] ${w.dark ? "text-white/70" : "text-black/60"}`}>{w.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — Fable closing */}
      <section id="contact" className="relative overflow-hidden bg-[#141413] text-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#D97757]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-32">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-7">
              <p className="font-mono text-[11px] tracking-widest text-white/40">CHAPTER III — INVITATION</p>
              <h2 className="mt-6 font-display text-[40px] leading-[0.85] tracking-[-0.04em] md:text-[72px]">
                Let’s make
                <br />
                <span className="italic font-light text-white/50">something quiet.</span>
              </h2>
              <p className="mt-8 max-w-[440px] text-[17px] leading-[1.6] text-white/60">We take 2 new fables per month. If you care about craft, about ownership, about websites that feel hand-made — let’s talk.</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`mailto:${b.email}`} className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-black hover:bg-[#F5F3EF] transition-colors">
                  <Mail size={16} />
                  {b.email}
                </a>
                <a href="#" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-[14px] text-white/70 hover:border-white/40 hover:text-white transition-colors">
                  <Instagram size={16} />
                  {b.instagram}
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
                <p className="font-mono text-[11px] tracking-widest text-white/30">ATELIER</p>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/70">
                  {b.location}
                  <br />
                  {b.name}
                  <br />
                  Open by appointment
                </p>
                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-white/40">Custom repo</span>
                    <span className="font-mono text-white/80">github.com/arenaai815-wq/webforge-ai</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-white/40">Response</span>
                    <span className="text-white/80">24h • No spam</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/business" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D97757] py-3 text-[14px] font-medium text-white hover:bg-[#C86A4D] transition-colors">
                    <Sparkles size={16} />
                    Drop your business info
                  </Link>
                  <p className="mt-3 text-center text-[11px] text-white/30">Repo active — ready for your fable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-white/30 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="font-display text-[14px] text-white/60">webforge.ai</span>
              <span>•</span>
              <span className="flex items-center gap-1">Built with <Heart size={10} className="fill-[#D97757] text-[#D97757]" /> in Fable 5</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Claude • Fable • Custom repos</span>
              <a href="https://github.com/arenaai815-wq/webforge-ai" target="_blank" className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 transition-colors">
                <Github size={12} /> View repository
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
