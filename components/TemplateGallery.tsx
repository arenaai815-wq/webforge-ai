"use client"
import { motion } from "framer-motion"

const TEMPLATES = [
  {
    name: "Atelier No. 5",
    vibe: "wabi-sabi",
    desc: "Quiet ceramics, Kyoto",
    bg: "bg-[#FAF9F5]",
    accent: "bg-[#D97757]",
    text: "text-[#141413]",
  },
  {
    name: "North Law",
    vibe: "editorial",
    desc: "Law for founders",
    bg: "bg-white",
    accent: "bg-[#141413]",
    text: "text-[#141413]",
  },
  {
    name: "Field Research",
    vibe: "brutalist",
    desc: "AI lab, data as poetry",
    bg: "bg-[#141413]",
    accent: "bg-white",
    text: "text-white",
  },
  {
    name: "Morrow Coffee",
    vibe: "soft-modern",
    desc: "Neighborhood roaster",
    bg: "bg-[#FFFCF5]",
    accent: "bg-[#F97316]",
    text: "text-[#141413]",
  },
]

export function TemplateGallery() {
  return (
    <section className="border-y border-[#E8E6E1] bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-[#A8A6A0]">GALLERY • FABLE ARCHIVE</p>
            <h3 className="mt-3 font-display text-[32px] tracking-[-0.02em] md:text-[40px]">Sites that feel hand-made</h3>
          </div>
          <p className="hidden max-w-[320px] text-[14px] leading-[1.5] text-[#787672] md:block">
            No templates. Each forge is bespoke. But here’s how other fables turned out.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {TEMPLATES.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-[20px] border border-black/5 p-6 ${t.bg} ${t.text} shadow-paper hover:shadow-paper-lg transition-all`}
            >
              <div className="flex h-[200px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/10 bg-white/50 px-2.5 py-1 text-[10px] tracking-widest">{t.vibe.toUpperCase()}</span>
                  <div className={`h-2 w-2 rounded-full ${t.accent}`} />
                </div>
                <div>
                  <p className="font-display text-[22px] leading-[1.1]">{t.name}</p>
                  <p className="mt-1 text-[13px] opacity-60">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
