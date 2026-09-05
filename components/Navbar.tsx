"use client"
import { motion } from "framer-motion"
import { Github, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-[#E8E6E1]/60 bg-[#FFFCF5]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141413] text-[#FFFCF5]">
            <span className="font-display text-[18px] tracking-tight">W</span>
          </div>
          <span className="font-display text-[22px] tracking-[-0.02em] text-[#141413]">
            webforge<span className="italic font-light">.ai</span>
          </span>
          <span className="ml-2 hidden items-center gap-1.5 rounded-full border border-[#E8E6E1] bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-[#787672] md:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D97757]" />
            Fable 5
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/arenaai815-wq/webforge-ai"
            target="_blank"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#E8E6E1] bg-white text-[#575551] transition-colors hover:text-[#141413] md:inline-flex"
          >
            <Github size={18} />
          </a>
          <div className="hidden items-center gap-6 pr-4 text-[14px] font-[450] tracking-[-0.01em] text-[#575551] md:flex">
            <Link href="#fable" className="hover:text-[#141413] transition-colors">Manifesto</Link>
            <Link href="/forge" className="hover:text-[#141413] transition-colors">Forge</Link>
            <Link href="/projects" className="hover:text-[#141413] transition-colors">Vault</Link>
          </div>
          <Button size="md" className="gap-1.5">
            <Sparkles size={16} strokeWidth={1.75} />
            Start forging
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
