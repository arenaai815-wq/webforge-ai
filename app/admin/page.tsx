"use client"
import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"
import { Github, Settings, Database, GitBranch, Shield, Zap, ExternalLink, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function AdminPage() {
  const [copied, setCopied] = useState(false)

  const repoUrl = "https://github.com/arenaai815-wq/webforge-ai"

  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      <div className="mx-auto max-w-[1080px] px-6 py-12 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141413] text-white">
            <Settings size={18} />
          </div>
          <div>
            <h1 className="font-display text-[32px] tracking-[-0.02em]">Vault Admin</h1>
            <p className="text-[13px] text-[#787672]">Manage custom repositories, connections, and forge settings</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 space-y-6">
            {/* Repo Connection */}
            <div className="rounded-[24px] border border-[#E8E6E1] bg-white p-6 shadow-paper md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github size={20} />
                  <div>
                    <p className="font-medium tracking-[-0.01em]">Custom Repository Vault</p>
                    <p className="text-[12px] text-[#787672]">Each business = own folder + forge.json</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Connected
                </span>
              </div>

              <div className="mt-6 rounded-[12px] border border-[#E8E6E1] bg-[#FAF9F5] p-4 font-mono text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#787672]">REPO URL</span>
                  <a href={repoUrl} target="_blank" className="flex items-center gap-1 text-[#141413] hover:underline">
                    Open <ExternalLink size={12} />
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[#141413]">{repoUrl}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(repoUrl)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 1500)
                    }}
                    className="rounded-full border border-[#E8E6E1] bg-white p-1.5 hover:border-[#141413]"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-[11px]">
                  <div className="rounded-[8px] bg-white border border-[#E8E6E1] p-3">
                    <p className="text-[#A8A6A0]">BRANCH</p>
                    <p className="mt-1 font-medium">arena/01a07223-webforge-ai</p>
                  </div>
                  <div className="rounded-[8px] bg-white border border-[#E8E6E1] p-3">
                    <p className="text-[#A8A6A0]">SITES</p>
                    <p className="mt-1 font-medium">sites/* (custom per business)</p>
                  </div>
                  <div className="rounded-[8px] bg-white border border-[#E8E6E1] p-3">
                    <p className="text-[#A8A6A0]">STATUS</p>
                    <p className="mt-1 font-medium text-emerald-700">Active • Writable</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[12px] font-medium tracking-wide text-[#787672]">HOW CUSTOM REPOS WORK</p>
                <div className="mt-3 space-y-3 text-[13px] leading-[1.6] text-[#575551]">
                  <p>1. User drops business info in <code className="rounded bg-[#F5F3EF] px-1.5 py-0.5">/forge</code> — name, story, vibe, services.</p>
                  <p>2. WebForge creates <code className="rounded bg-[#F5F3EF] px-1.5 py-0.5">sites/{`{slug}`}/forge.json</code> + <code className="rounded bg-[#F5F3EF] px-1.5 py-0.5">app/page.tsx</code> with Fable 5 code.</p>
                  <p>3. Saved to local vault (localStorage) + file system via <code className="rounded bg-[#F5F3EF] px-1.5 py-0.5">/api/forge</code>.</p>
                  <p>4. Each folder is ownable, deployable to Vercel/Netlify. No lock-in.</p>
                </div>
              </div>
            </div>

            {/* Forge Settings */}
            <div className="rounded-[24px] border border-[#E8E6E1] bg-[#141413] p-6 text-white md:p-8">
              <p className="font-mono text-[11px] tracking-widest text-white/40">FORGE ENGINE • FABLE 5</p>
              <h3 className="mt-3 font-display text-[24px]">Claude + Fable Motion</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[12px] border border-white/10 bg-white/5 p-4">
                  <Database size={16} className="text-white/60" />
                  <p className="mt-2 text-[13px] font-medium">Editorial Intelligence</p>
                  <p className="mt-1 text-[12px] text-white/50">Parses narrative for motifs, palette, typography. No templates.</p>
                </div>
                <div className="rounded-[12px] border border-white/10 bg-white/5 p-4">
                  <Zap size={16} className="text-[#D97757]" />
                  <p className="mt-2 text-[13px] font-medium">Motion as Meaning</p>
                  <p className="mt-1 text-[12px] text-white/50">Framer Motion choreography, paper reveals, stagger.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 space-y-4">
            <div className="rounded-[20px] border border-[#E8E6E1] bg-white p-5 shadow-paper">
              <p className="text-[12px] font-medium tracking-wide text-[#787672]">QUICK ACTIONS</p>
              <div className="mt-4 space-y-2">
                <a href="/forge" className="flex items-center justify-between rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-2.5 text-[13px] font-medium hover:bg-white">
                  New forge <span>→</span>
                </a>
                <a href="/projects" className="flex items-center justify-between rounded-full border border-[#E8E6E1] bg-[#FAF9F5] px-4 py-2.5 text-[13px] font-medium hover:bg-white">
                  View vault <span>→</span>
                </a>
                <a href="https://github.com/arenaai815-wq/webforge-ai" target="_blank" className="flex items-center justify-between rounded-full bg-[#141413] px-4 py-2.5 text-[13px] font-medium text-white">
                  GitHub repo <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#FFF7ED] border border-[#FFEDD5] p-5">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#EA580C]" />
                <p className="text-[13px] font-medium">Own your fable</p>
              </div>
              <p className="mt-2 text-[12px] leading-[1.5] text-[#7C2D12]/70">No watermark, no lock-in. Every site is clean Next.js 14 you can eject. MIT licensed.</p>
            </div>

            <div className="rounded-[20px] border border-[#E8E6E1] bg-[#FAF9F5] p-5">
              <p className="flex items-center gap-2 text-[12px] font-medium tracking-wide text-[#787672]">
                <GitBranch size={12} /> DROP BUSINESS INFO
              </p>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#575551]">Go to <a href="/forge" className="underline">/forge</a> and paste your business details in the drop zone. WebForge will parse and forge instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
