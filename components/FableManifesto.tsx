"use client"
import { motion } from "framer-motion"

const CHAPTERS = [
  {
    n: "I",
    title: "Tell the tale",
    text: "No forms. No fields. Just speak as you would to a friend. Who you serve, what you believe, the feeling you want to leave behind. We listen for subtext.",
    meta: "Narrative → Structure",
  },
  {
    n: "II",
    title: "We forge",
    text: "WebForge turns story into system: typography that breathes, color that remembers, layout that guides like a well-told fable. Each site gets its own repository — yours to own.",
    meta: "Story → Code",
  },
  {
    n: "III",
    title: "You own the book",
    text: "No lock-in. Every forge creates a custom GitHub repo with clean Next.js, Tailwind, and motion. Edit by hand or ask us to rewrite a chapter. The story continues.",
    meta: "Code → Legacy",
  },
]

export function FableManifesto() {
  return (
    <section id="fable" className="relative border-y border-[#E8E6E1] bg-[#FAF9F5]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-28"
            >
              <p className="font-mono text-[12px] tracking-widest text-[#A8A6A0]">MANIFESTO / FABLE 5</p>
              <h2 className="mt-6 font-display text-[40px] leading-[0.9] tracking-[-0.03em] text-[#141413] md:text-[56px]">
                The web
                <br />
                <span className="italic font-light">forgot how</span>
                <br />
                to tell stories.
              </h2>
              <p className="mt-6 max-w-[360px] text-[16px] leading-[1.6] text-[#575551]">
                Claude taught us to think with language. Fable taught us to move with meaning.
                WebForge is both: calm like paper, alive like film.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-[#E8E6E1]" />
                <span className="font-display italic text-[18px] text-[#787672]">hand-bound, digitally</span>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="space-y-12 md:space-y-20">
              {CHAPTERS.map((ch, i) => (
                <motion.div
                  key={ch.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="flex gap-6 md:gap-10">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E6E1] bg-white font-display text-[20px] text-[#141413] shadow-paper group-hover:border-[#D6D3CD] transition-colors">
                        {ch.n}
                      </div>
                      {i !== CHAPTERS.length - 1 && (
                        <div className="mt-4 h-24 w-px bg-gradient-to-b from-[#E8E6E1] to-transparent md:h-32" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-[28px] tracking-[-0.02em] text-[#141413] md:text-[32px]">{ch.title}</h3>
                        <span className="rounded-full bg-[#141413] px-2.5 py-1 font-mono text-[10px] tracking-widest text-white">{ch.meta}</span>
                      </div>
                      <p className="mt-4 max-w-[480px] text-[16px] leading-[1.7] tracking-[-0.01em] text-[#575551] md:text-[17px]">{ch.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote block - Fable style */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 rounded-[24px] border border-[#E8E6E1] bg-white p-8 shadow-paper md:p-10"
            >
              <p className="font-display text-[22px] leading-[1.25] tracking-[-0.01em] text-[#141413] md:text-[26px]">
                “A website should feel like a place you’ve been before, even if you haven’t. Familiar, like a good fable.”
              </p>
              <p className="mt-4 font-mono text-[12px] tracking-wide text-[#A8A6A0]">— FIELD NOTE, FABLE 5 ARCHIVE</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
