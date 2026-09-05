"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Sparkles, Wand2, BookOpen, Layers, Globe, Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const EXAMPLES = [
  "A quiet coffee shop in Kyoto, wabi-sabi, handwritten menu",
  "Modern law firm for founders, editorial, trust & clarity",
  "Ceramic studio — earthy, tactile, shop + story",
  "AI research lab, brutalist, data as poetry",
]

export function Hero() {
  const [prompt, setPrompt] = useState("")
  const [isForging, setIsForging] = useState(false)
  const router = useRouter()

  const handleForge = () => {
    if (!prompt.trim()) return
    setIsForging(true)
    setTimeout(() => {
      // store in localStorage for forge page
      localStorage.setItem("webforge-prompt", prompt)
      router.push("/forge")
    }, 900)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient orbs - Fable style */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[600px] w-[700px] rounded-full bg-[#FFE4D6]/60 blur-[120px]" />
        <div className="absolute right-[-15%] top-[10%] h-[500px] w-[600px] rounded-full bg-[#E8E6E1]/80 blur-[100px]" />
        <div className="absolute left-[30%] bottom-[-30%] h-[800px] w-[800px] rounded-full bg-[#FAF9F5] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        {/* Eyebrow - Claude style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 shadow-paper"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#141413] text-white">
            <BookOpen size={12} />
          </span>
          <span className="text-[12px] font-medium tracking-wide text-[#575551]">
            A new fable for the web — Chapter 5 now open
          </span>
        </motion.div>

        <div className="mx-auto max-w-[900px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[48px] leading-[0.9] tracking-[-0.04em] text-[#141413] md:text-[84px] lg:text-[96px]"
          >
            Websites
            <br />
            <span className="italic font-light tracking-[-0.03em]">woven from</span>
            <br />
            words.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.6] tracking-[-0.01em] text-[#575551] md:text-[19px]"
          >
            Describe your business in plain language. WebForge reads between the lines,
            forges a custom repository, and delivers a site that feels hand-made.
            <span className="text-[#141413] font-[450]"> No templates. No drag.</span>
          </motion.p>
        </div>

        {/* Claude-style prompt box */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-10 max-w-[720px]"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[#E8E6E1] bg-white shadow-paper-lg">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#F5F3EF] px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E8E6E1]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E8E6E1]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E8E6E1]" />
                </div>
                <span className="ml-3 text-[12px] font-medium tracking-wide text-[#A8A6A0]">webforge prompt — fable mode</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#A8A6A0]">
                <Layers size={12} />
                Custom repo enabled
              </div>
            </div>

            <div className="p-2">
              <div className="relative rounded-[20px] bg-[#FAF9F5]">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Tell me about your business... who is it for, what feeling should it have, what story does it tell?"
                  className="min-h-[132px] w-full resize-none bg-transparent px-5 py-4 text-[16px] leading-[1.6] tracking-[-0.01em] text-[#141413] placeholder:text-[#A8A6A0] focus:outline-none md:text-[17px]"
                />
                <div className="flex items-center justify-between gap-3 p-3">
                  <div className="flex items-center gap-2">
                    <button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E8E6E1] bg-white px-3 text-[13px] font-medium text-[#575551] hover:text-[#141413] transition-colors">
                      <Wand2 size={14} />
                      Enhance
                    </button>
                    <span className="hidden text-[12px] text-[#A8A6A0] md:inline">Press ⌘ + Enter to forge</span>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleForge}
                    disabled={!prompt.trim() || isForging}
                    className="min-w-[132px] gap-2"
                  >
                    {isForging ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Forging...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Forge site
                        <ArrowUpRight size={16} className="opacity-60" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/60 to-transparent opacity-60" />
          </div>

          {/* Examples */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {EXAMPLES.map((ex, i) => (
              <motion.button
                key={ex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                onClick={() => setPrompt(ex)}
                className="rounded-full border border-[#E8E6E1] bg-white px-3.5 py-1.5 text-[13px] tracking-[-0.01em] text-[#575551] shadow-sm transition-all hover:border-[#D6D3CD] hover:text-[#141413] hover:shadow-paper"
              >
                {ex}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Fable preview cards - floating */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 grid max-w-[1080px] grid-cols-12 gap-4 md:mt-24"
        >
          {/* Main preview */}
          <div className="col-span-12 md:col-span-8">
            <div className="group relative overflow-hidden rounded-[24px] border border-[#E8E6E1] bg-white p-2 shadow-paper-lg">
              <div className="overflow-hidden rounded-[16px] bg-[#141413]">
                <div className="flex h-[380px] flex-col p-6 md:h-[420px] md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[22px] text-white">Atelier No. 5</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-wide text-white/60">PREVIEW</span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display max-w-[420px] text-[36px] leading-[0.95] tracking-[-0.02em] text-white md:text-[48px]">
                      Objects made to be <span className="italic font-light">lived with.</span>
                    </h3>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-px w-12 bg-white/20" />
                      <span className="text-[13px] tracking-wide text-white/50">Kyoto • 2019 —</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-[#FFFCF5] px-3 py-1.5 shadow-paper">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[12px] font-medium text-[#141413]">Live repository</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-4">
            <div className="rounded-[24px] border border-[#E8E6E1] bg-[#F5F3EF] p-6 shadow-paper">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Globe size={18} className="text-[#787672]" />
                  <span className="text-[11px] tracking-widest text-[#A8A6A0]">VAULT / 01</span>
                </div>
                <div>
                  <p className="font-display text-[20px] leading-[1.1] text-[#141413]">Custom repo created</p>
                  <p className="mt-2 font-mono text-[12px] text-[#787672]">github.com/you/atelier-no5</p>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] bg-[#141413] p-6 text-white shadow-paper-lg">
              <div className="flex h-full flex-col justify-between">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-1 w-6 rounded-full bg-white/20" />
                  ))}
                  <div className="h-1 w-6 rounded-full bg-[#D97757]" />
                </div>
                <div>
                  <p className="text-[13px] tracking-wide text-white/50">FORGE LOG</p>
                  <p className="mt-2 font-mono text-[13px] leading-[1.5] text-white/80">
                    → parsing narrative<br />
                    → crafting palette<br />
                    → weaving components<br />
                    <span className="text-[#D97757]">✓ site ready to publish</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
