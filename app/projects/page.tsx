"use client"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/Navbar"
import { getVault } from "@/lib/storage"
import { ForgeMeta } from "@/lib/forge"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Globe, Clock, Trash2, ExternalLink, Sparkles, Folder } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [sites, setSites] = useState<ForgeMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const local = getVault()
    setSites(local)
    setLoading(false)

    // Also fetch from API (file system)
    fetch("/api/forge")
      .then((r) => r.json())
      .then((d) => {
        if (d.sites?.length) {
          // merge
          const merged = [...local]
          d.sites.forEach((s: ForgeMeta) => {
            if (!merged.find((m) => m.slug === s.slug)) merged.push(s)
          })
          setSites(merged)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <main className="min-h-screen bg-[#FFFCF5]">
      <Navbar />
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 shadow-sm">
              <Folder size={12} />
              <span className="text-[11px] font-medium tracking-widest">VAULT • {sites.length} REPOSITORIES</span>
            </div>
            <h1 className="mt-6 font-display text-[40px] leading-[0.9] tracking-[-0.04em] md:text-[56px]">
              Your fables,
              <br />
              <span className="italic font-light">forged & owned.</span>
            </h1>
          </div>
          <Link href="/forge" className="hidden h-12 items-center gap-2 rounded-full bg-[#141413] px-6 text-white md:inline-flex">
            <Sparkles size={16} />
            New forge
          </Link>
        </div>

        {loading ? (
          <div className="mt-16 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[240px] animate-pulse rounded-[24px] bg-[#F5F3EF]" />
            ))}
          </div>
        ) : sites.length === 0 ? (
          <div className="mt-20 rounded-[28px] border border-dashed border-[#D6D3CD] bg-[#FAF9F5] p-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-paper">
              <Sparkles size={20} className="text-[#A8A6A0]" />
            </div>
            <p className="mt-6 font-display text-[24px] text-[#141413]">No fables yet</p>
            <p className="mx-auto mt-2 max-w-[360px] text-[14px] leading-[1.6] text-[#787672]">
              Drop your business info in the Forge. Each forge creates a custom repository you own forever.
            </p>
            <Link href="/forge" className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#141413] px-6 text-[14px] text-white">
              Start first forge <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((site, i) => (
              <motion.div
                key={site.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-[24px] border border-[#E8E6E1] bg-white p-[1px] shadow-paper hover:shadow-paper-lg transition-all"
              >
                <div className="rounded-[23px] bg-white p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] border border-[#E8E6E1] font-display text-[18px]">
                      {site.businessName?.[0] || "W"}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-1 text-[10px] font-medium text-emerald-700">{site.status || "forged"}</span>
                      <span className="rounded-full bg-[#F5F3EF] px-2 py-1 text-[10px] font-mono text-[#787672]">{site.vibe || "editorial"}</span>
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-[22px] leading-[1.1] tracking-[-0.02em] text-[#141413]">{site.businessName}</h3>
                  <p className="mt-1 text-[13px] italic text-[#787672]">{site.tagline}</p>
                  <p className="mt-3 line-clamp-2 text-[13px] leading-[1.5] text-[#575551]">{site.description}</p>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#A8A6A0]">
                      <Clock size={12} />
                      {site.createdAt ? new Date(site.createdAt).toLocaleDateString() : "Today"}
                      <span>•</span>
                      <Github size={12} />
                      {site.repo?.split("/").slice(-2).join("/") || "custom repo"}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Link
                        href={`/sites/${site.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#E8E6E1] bg-[#FAF9F5] py-2.5 text-[13px] font-medium hover:bg-white hover:border-[#141413] transition-colors"
                      >
                        <Globe size={14} />
                        Preview
                      </Link>
                      <Link
                        href={`/forge?edit=${site.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#141413] py-2.5 text-[13px] font-medium text-white hover:bg-[#232320] transition-colors"
                      >
                        <ExternalLink size={14} />
                        Open
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 rounded-[20px] border border-[#E8E6E1] bg-[#141413] p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-widest text-white/40">CONNECTED VAULT</p>
              <p className="mt-2 font-mono text-[13px] text-white/70">github.com/arenaai815-wq/webforge-ai • custom repo per business enabled</p>
            </div>
            <a href="https://github.com/arenaai815-wq/webforge-ai" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] hover:bg-white/15 transition-colors">
              <Github size={16} /> View vault
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
