import { NextRequest, NextResponse } from "next/server"
import { createForgeMeta, slugify, generateSitePrompt } from "@/lib/forge"
import fs from "fs"
import path from "path"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { businessName, tagline, description, audience, vibe, services, contact, repo } = body

    if (!businessName || !description) {
      return NextResponse.json({ error: "businessName and description required" }, { status: 400 })
    }

    const slug = slugify(businessName)
    const meta = createForgeMeta({
      businessName,
      tagline,
      description,
      audience,
      vibe,
      services: typeof services === "string" ? services.split("\n").filter(Boolean) : services || [],
      contact,
      repo: repo || `arenaai815-wq/webforge-ai/sites/${slug}`,
      slug,
    })

    // Ensure sites dir
    const siteDir = path.join(process.cwd(), "sites", slug)
    if (!fs.existsSync(siteDir)) {
      fs.mkdirSync(siteDir, { recursive: true })
    }

    // Write forge.json
    fs.writeFileSync(path.join(siteDir, "forge.json"), JSON.stringify(meta, null, 2))

    // Generate app/page.tsx for that site
    const appDir = path.join(siteDir, "app")
    if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true })

    const pageCode = `"use client"
import { motion } from "framer-motion"

export default function ${slug.replace(/[^a-zA-Z0-9]/g, "")}Site() {
  return (
    <main className="min-h-screen bg-[${meta.palette.paper}] text-[${meta.palette.ink}]">
      <section className="mx-auto max-w-[1280px] px-8 py-24">
        <p className="font-mono text-[11px] tracking-widest opacity-50">${meta.businessName.toUpperCase()} • ${meta.vibe.toUpperCase()}</p>
        <h1 className="mt-6 font-display text-[64px] leading-[0.9] tracking-[-0.03em]">
          ${meta.businessName}
          <br />
          <span className="italic font-light">${meta.tagline}</span>
        </h1>
        <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] opacity-70">${meta.description}</p>
      </section>
    </main>
  )
}
`
    fs.writeFileSync(path.join(appDir, "page.tsx"), pageCode)

    const prompt = generateSitePrompt(meta)

    return NextResponse.json({ success: true, meta, prompt, slug })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function GET() {
  // List all sites from sites/ dir
  const sitesDir = path.join(process.cwd(), "sites")
  if (!fs.existsSync(sitesDir)) return NextResponse.json({ sites: [] })

  const entries = fs.readdirSync(sitesDir, { withFileTypes: true })
  const sites = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("."))
    .map((e) => {
      const forgePath = path.join(sitesDir, e.name, "forge.json")
      if (fs.existsSync(forgePath)) {
        try {
          return JSON.parse(fs.readFileSync(forgePath, "utf-8"))
        } catch {
          return { slug: e.name }
        }
      }
      return { slug: e.name }
    })

  return NextResponse.json({ sites })
}
