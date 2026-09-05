"use client"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { FableManifesto } from "@/components/FableManifesto"
import { ForgeFeatures } from "@/components/ForgeFeatures"
import { TemplateGallery } from "@/components/TemplateGallery"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Heart } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      <Hero />
      <FableManifesto />
      <ForgeFeatures />
      <TemplateGallery />

      {/* CTA - Fable closing */}
      <section className="relative overflow-hidden border-t border-[#E8E6E1] bg-[#FAF9F5]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#FFE4D6]/40 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[12px] tracking-widest text-[#A8A6A0]"
            >
              FINAL CHAPTER — YOUR TURN
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[40px] leading-[0.9] tracking-[-0.04em] text-[#141413] md:text-[72px]"
            >
              Ready to forge
              <br />
              <span className="italic font-light">your fable?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-[480px] text-[17px] leading-[1.6] text-[#575551]"
            >
              Drop your business details when the repo is active. We’ll weave it into something that feels like it’s always existed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href="/forge"
                className="group inline-flex h-[52px] items-center gap-2 rounded-full bg-[#141413] px-8 text-[16px] font-medium tracking-[-0.01em] text-white shadow-paper-lg transition-all hover:bg-[#232320] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
              >
                Open the forge
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="https://github.com/arenaai815-wq/webforge-ai"
                target="_blank"
                className="inline-flex h-[52px] items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-8 text-[15px] font-medium text-[#575551] transition-colors hover:border-[#D6D3CD] hover:text-[#141413]"
              >
                <Github size={18} />
                View repository
              </a>
            </motion.div>

            <div className="mt-16 flex justify-center">
              <div className="h-px w-24 bg-[#E8E6E1]" />
            </div>
            <p className="mt-8 font-display italic text-[15px] text-[#A8A6A0]">— end of fable five, beginning of yours —</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E8E6E1] bg-[#FFFCF5]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-8 text-[13px] text-[#A8A6A0] md:flex-row md:px-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-[16px] text-[#141413]">webforge.ai</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="fill-[#D97757] text-[#D97757]" /> in Fable 5 style
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Claude-inspired • Fable-motion • Custom repos</span>
            <span className="rounded-full border border-[#E8E6E1] bg-white px-2.5 py-1 font-mono text-[11px]">v0.1.0 — arena/01a07223</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
