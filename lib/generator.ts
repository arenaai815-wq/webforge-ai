// Full Fable 5 Site Generator
import { ForgeMeta } from "./forge"

export function generateFullSiteCode(meta: ForgeMeta): string {
  const safeName = meta.slug.replace(/[^a-zA-Z0-9]/g, "_")
  const servicesArray = meta.services.map((s, i) => {
    const clean = s.replace(/"/g, '\\"').replace(/`/g, "'")
    return `  { n: "0${i + 1}", title: "${clean}", desc: "Crafted with care for ${meta.audience.replace(/"/g, '\\"')}" }`
  }).join(",\n")

  return `"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Mail, Clock } from "lucide-react"

const services = [
${servicesArray}
]

export default function ${safeName}Site() {
  return (
    <main className="min-h-screen bg-[${meta.palette.paper}] text-[${meta.palette.ink}]">
      <nav className="sticky top-0 z-50 border-b border-black/[0.06] bg-[${meta.palette.paper}]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141413] text-white font-display">${(meta.businessName[0] || "W").toUpperCase()}</div>
            <span className="font-display text-[20px] tracking-tight">${meta.businessName.replace(/"/g, '\\"')}</span>
          </div>
          <div className="hidden items-center gap-8 text-[14px] md:flex">
            <a href="#story" className="opacity-60 hover:opacity-100">Story</a>
            <a href="#services" className="opacity-60 hover:opacity-100">Services</a>
            <a href="#contact" className="rounded-full bg-[#141413] px-5 py-2 text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-32">
          <p className="font-mono text-[11px] tracking-widest opacity-40">EST. 2025 • ${meta.vibe.toUpperCase()} • ${meta.audience.toUpperCase()}</p>
          <h1 className="mt-6 max-w-[900px] font-display text-[48px] leading-[0.85] tracking-[-0.04em] md:text-[88px]">
            ${meta.businessName.replace(/"/g, '\\"')}
            <br />
            <span className="italic font-light opacity-70">${meta.tagline.replace(/"/g, '\\"')}</span>
          </h1>
          <p className="mt-8 max-w-[560px] text-[18px] leading-[1.6] opacity-70">${meta.description.replace(/"/g, '\\"').slice(0, 300)}</p>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <h2 className="font-display text-[36px]">What we make</h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10 md:grid-cols-2">
            {services.map((s: any, i: number) => (
              <div key={i} className="bg-white p-8 md:p-10">
                <span className="font-mono text-[11px] opacity-40">{s.n}</span>
                <h3 className="mt-4 font-display text-[22px]">{s.title}</h3>
                <p className="mt-2 text-[14px] opacity-60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#141413] text-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <h2 className="font-display text-[40px]">Let&apos;s make something quiet.</h2>
          <p className="mt-4 text-white/60">${meta.contact}</p>
        </div>
      </section>
    </main>
  )
}
`
}

export function generateForgeReadme(meta: ForgeMeta): string {
  return `# ${meta.businessName} — Forged by WebForge AI

> ${meta.tagline}

**Vibe:** ${meta.vibe}
**Audience:** ${meta.audience}
**Repo:** ${meta.repo}
**Status:** ${meta.status}
**Created:** ${meta.createdAt}

## Story

${meta.description}

## Services

${meta.services.map((s) => `- ${s}`).join("\n")}

## Palette

- Paper: ${meta.palette.paper}
- Ink: ${meta.palette.ink}
- Accent: ${meta.palette.accent}

## Contact

${meta.contact}

## Tech

- Next.js 14, Tailwind, Framer Motion
- Claude Fable 5 style
- Custom repository per business

Forged with WebForge AI — github.com/arenaai815-wq/webforge-ai
`
}
