"use client"
import { useEffect, useState } from "react"
import { getFromVault } from "@/lib/storage"
import { ForgeMeta, VIBE_PALETTES } from "@/lib/forge"
import { FullSiteRenderer } from "@/components/FullSiteRenderer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SitePreviewPage() {
  const params = useParams()
  const slug = params.slug as string
  const [meta, setMeta] = useState<ForgeMeta | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const local = getFromVault(slug)
    if (local) {
      setMeta(local)
      setLoading(false)
    } else {
      fetch("/api/forge")
        .then((r) => r.json())
        .then((d) => {
          const found = d.sites?.find((s: ForgeMeta) => s.slug === slug)
          if (found) setMeta(found)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FFFCF5] flex items-center justify-center p-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-pulse rounded-full bg-[#F5F3EF]" />
          <p className="mt-4 font-display text-[20px] text-[#A8A6A0]">Loading fable {slug}...</p>
        </div>
      </main>
    )
  }

  if (!meta) {
    return (
      <main className="min-h-screen bg-[#FFFCF5] flex items-center justify-center p-8">
        <div className="text-center">
          <p className="font-display text-[28px] text-[#141413]">Fable not found</p>
          <p className="mt-2 text-[14px] text-[#787672]">No repository for slug: {slug}</p>
          <Link href="/projects" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#141413] px-6 py-3 text-white">
            <ArrowLeft size={16} /> Back to vault
          </Link>
        </div>
      </main>
    )
  }

  return <FullSiteRenderer meta={meta} />
}
