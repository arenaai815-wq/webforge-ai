"use client"
import { ForgeMeta } from "@/lib/forge"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Mail, Clock, Sparkles } from "lucide-react"

export function FullSiteRenderer({ meta }: { meta: ForgeMeta }) {
  return (
    <main className="min-h-screen" style={{ background: meta.palette.paper, color: meta.palette.ink }}>
      <nav className="sticky top-0 z-50 border-b border-black/[0.06] backdrop-blur-xl" style={{ background: `${meta.palette.paper}CC` }}>
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141413] text-white font-display">{meta.businessName[0]}</div>
            <span className="font-display text-[20px] tracking-tight">{meta.businessName}</span>
            <span className="ml-2 hidden rounded-full border border-black/10 px-2.5 py-1 text-[10px] tracking-widest opacity-60 md:inline-flex">{meta.vibe.toUpperCase()}</span>
          </div>
          <div className="hidden items-center gap-8 text-[14px] md:flex">
            <a href="#story" className="opacity-60 hover:opacity-100 transition-opacity">Story</a>
            <a href="#services" className="opacity-60 hover:opacity-100 transition-opacity">Services</a>
            <a href="#contact" className="rounded-full bg-[#141413] px-5 py-2 text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full blur-[120px]" style={{ background: `${meta.palette.accent}33` }} />
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-[11px] tracking-widest opacity-40">EST. 2025 • {meta.vibe.toUpperCase()} • {meta.audience?.toUpperCase()}</p>
            <h1 className="mt-6 max-w-[900px] font-display text-[48px] leading-[0.85] tracking-[-0.04em] md:text-[84px]">
              {meta.businessName}
              <br />
              <span className="italic font-light opacity-70">{meta.tagline}</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[18px] leading-[1.6] opacity-70">{meta.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#141413] px-7 text-white">
                Explore services <ArrowUpRight size={16} />
              </a>
              <span className="inline-flex h-12 items-center gap-2 rounded-full border border-black/10 px-6 text-[14px]">
                <MapPin size={14} /> {meta.contact || "Remote • Worldwide"}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="story" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto grid max-w-[1280px] grid-cols-12 gap-8 px-6 py-20 md:px-8 md:py-32">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] tracking-widest opacity-40">CHAPTER I — ORIGIN</p>
            <h2 className="mt-4 font-display text-[36px] leading-[0.9] tracking-[-0.03em] md:text-[48px]">
              Made to be
              <br />
              <span className="italic font-light">lived with.</span>
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-black/10" />
              <span className="font-display italic text-[14px] opacity-50">hand-bound, digitally</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[480px] text-[17px] leading-[1.7] opacity-70">
              {meta.description} We believe in {meta.vibe} — not as a trend, but as a way of working. Every piece, every interaction, carries that intention. For {meta.audience}, we build things that age well.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
              <div><p className="font-display text-[32px]">2019</p><p className="text-[11px] tracking-widest opacity-50">FOUNDED</p></div>
              <div><p className="font-display text-[32px]">500+</p><p className="text-[11px] tracking-widest opacity-50">OBJECTS</p></div>
              <div><p className="font-display text-[32px]">{meta.audience.split(",")[0] || "Human"}</p><p className="text-[11px] tracking-widest opacity-50">FIRST</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[36px] tracking-[-0.02em] md:text-[48px]">What we make</h2>
            <p className="hidden max-w-[300px] text-[14px] opacity-60 md:block">Each service is a chapter. Choose your own story.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10 md:grid-cols-2">
            {meta.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white p-8 md:p-10 hover:bg-[#FFFCF5] transition-colors"
                style={{ background: i % 2 === 0 ? meta.palette.paper : "#FFFFFF" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] opacity-40">0{i + 1}</span>
                  <ArrowUpRight size={16} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-6 font-display text-[24px] leading-[1.1]">{s}</h3>
                <p className="mt-3 text-[14px] leading-[1.5] opacity-60">Crafted with care for {meta.audience?.split(",")[0] || "humans"} who value {meta.vibe}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#141413] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <p className="font-mono text-[11px] tracking-widest text-white/40">CHAPTER III — INVITATION</p>
              <h2 className="mt-4 font-display text-[40px] leading-[0.9] tracking-[-0.03em] md:text-[64px]">
                Let’s make
                <br />
                <span className="italic font-light text-white/50">something quiet.</span>
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`mailto:hello@${meta.slug}.com`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black">
                  <Mail size={16} /> Start a conversation
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[13px] text-white/60">
                  <Clock size={14} /> Response in 24h
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="font-mono text-[11px] tracking-widest text-white/40">STUDIO</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/70">
                  {meta.contact}
                  <br />
                  {meta.businessName}
                  <br />
                  Open by appointment
                </p>
                <div className="mt-6 h-px bg-white/10" />
                <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-white/30">
                  <Sparkles size={12} />
                  {meta.repo} • {meta.vibe}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
