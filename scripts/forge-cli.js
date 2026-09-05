#!/usr/bin/env node
// WebForge CLI — create custom repo for a business from BUSINESS_TEMPLATE.md

const fs = require('fs')
const path = require('path')

function slugify(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function parseBusinessFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8')
  // Very simple parser — look for YOURS: sections
  const sections = raw.split('YOURS:')
  return {
    raw,
    // fallback: use first non-empty after BUSINESS_TEMPLATE
    businessName: (raw.match(/## 1\. Business Name[\s\S]*?YOURS:\s*\n+([^\n]+)/) || [])[1]?.trim() || 'New Business',
    tagline: (raw.match(/## 2\. Tagline[\s\S]*?YOURS:\s*\n+([^\n]+)/) || [])[1]?.trim() || 'Woven from words',
    description: (raw.match(/## 3\. Story[\s\S]*?YOURS:\s*\n+([\s\S]*?)\n+## 4\./) || [])[1]?.trim() || '',
    audience: (raw.match(/## 4\. Audience[\s\S]*?YOURS:\s*\n+([^\n]+)/) || [])[1]?.trim() || 'Curious humans',
    vibe: (raw.match(/## 5\. Vibe[\s\S]*?YOURS:\s*\n+([^\n]+)/) || [])[1]?.trim().toLowerCase() || 'editorial',
    services: (raw.match(/## 6\. Services[\s\S]*?YOURS:\s*\n+([\s\S]*?)\n+## 7\./) || [])[1]?.trim().split('\n').filter(Boolean) || [],
    contact: (raw.match(/## 7\. Contact[\s\S]*?YOURS:\s*\n+([^\n]+)/) || [])[1]?.trim() || '',
  }
}

function main() {
  const file = process.argv[2] || path.join(process.cwd(), 'BUSINESS_TEMPLATE.md')
  if (!fs.existsSync(file)) {
    console.error(`File not found: ${file}`)
    process.exit(1)
  }

  const data = parseBusinessFile(file)
  const slug = slugify(data.businessName || 'new-business')
  const siteDir = path.join(process.cwd(), 'sites', slug)

  if (!fs.existsSync(siteDir)) fs.mkdirSync(siteDir, { recursive: true })

  const meta = {
    id: `forge_${Date.now()}`,
    slug,
    businessName: data.businessName,
    tagline: data.tagline,
    description: data.description || data.raw.slice(0, 500),
    audience: data.audience,
    vibe: data.vibe.includes('wabi') ? 'wabi-sabi' : data.vibe.includes('brutal') ? 'brutalist' : data.vibe.includes('soft') ? 'soft-modern' : data.vibe.includes('noir') ? 'noir' : data.vibe.includes('atelier') ? 'atelier' : 'editorial',
    services: data.services,
    contact: data.contact,
    repo: `arenaai815-wq/webforge-ai/sites/${slug}`,
    createdAt: new Date().toISOString(),
    status: 'forged',
    palette: { paper: '#FFFCF5', ink: '#141413', accent: '#D97757', stone: '#E8E6E1' },
    typography: { display: 'Instrument Serif', sans: 'Geist' },
  }

  fs.writeFileSync(path.join(siteDir, 'forge.json'), JSON.stringify(meta, null, 2))
  console.log(`✓ Created ${siteDir}/forge.json`)
  console.log(`  Business: ${meta.businessName}`)
  console.log(`  Vibe: ${meta.vibe}`)
  console.log(`  Slug: ${slug}`)
  console.log(`\nNext: npm run dev → /sites/${slug} or /projects`)
}

main()
