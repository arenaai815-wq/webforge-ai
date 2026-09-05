"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

type Props = {
  onParsed: (data: any) => void
}

export function BusinessDropZone({ onParsed }: Props) {
  const [raw, setRaw] = useState("")
  const [dragOver, setDragOver] = useState(false)

  const handleParse = () => {
    if (!raw.trim()) return
    // Simple heuristic parser: try to extract fields from unstructured text
    const lines = raw.split("\n")
    const lower = raw.toLowerCase()
    
    // Guess business name = first line or line with "name:" 
    let name = ""
    const nameMatch = raw.match(/(?:business|company|brand)\s*name\s*[:\-]\s*(.+)/i) || raw.match(/^(.+)\n/)
    if (nameMatch) name = nameMatch[1].trim().slice(0, 60)

    // vibe guess
    let vibe = "editorial"
    if (lower.includes("wabi") || lower.includes("quiet") || lower.includes("tactile")) vibe = "wabi-sabi"
    else if (lower.includes("brutal") || lower.includes("raw") || lower.includes("bold")) vibe = "brutalist"
    else if (lower.includes("soft") || lower.includes("friendly") || lower.includes("rounded")) vibe = "soft-modern"
    else if (lower.includes("dark") || lower.includes("noir") || lower.includes("luxury") || lower.includes("cinematic")) vibe = "noir"
    else if (lower.includes("craft") || lower.includes("handmade") || lower.includes("atelier") || lower.includes("earthy")) vibe = "atelier"

    onParsed({
      name: name || "New Business",
      description: raw.slice(0, 800),
      vibe,
      raw,
    })
  }

  return (
    <div className="rounded-[24px] border border-[#E8E6E1] bg-[#FAF9F5] p-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141413] text-white">
          <FileText size={14} />
        </div>
        <div>
          <p className="text-[14px] font-medium tracking-[-0.01em]">Drop business info — raw</p>
          <p className="text-[12px] text-[#787672]">Paste website copy, brief, Notion, anything. We’ll parse it.</p>
        </div>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          const text = e.dataTransfer.getData("text")
          if (text) setRaw(text)
        }}
        className={`mt-4 rounded-[16px] border-2 border-dashed bg-white p-4 transition-colors ${dragOver ? "border-[#141413] bg-[#FFFCF5]" : "border-[#E8E6E1]"}`}
      >
        <textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder="Drop your business story here... e.g.&#10;&#10;We are Atelier No.5, a ceramic studio in Kyoto making wabi-sabi tableware for slow mornings. Our audience is designers and collectors who value imperfection. We sell hand-thrown ceramics, tableware, studio visits..."
          className="min-h-[140px] w-full resize-none bg-transparent text-[14px] leading-[1.6] placeholder:text-[#A8A6A0] focus:outline-none"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-[11px] text-[#A8A6A0]">Supports text, markdown, notion export</span>
        <Button size="sm" onClick={handleParse} disabled={!raw.trim()} className="gap-1.5">
          <Sparkles size={14} />
          Parse & autofill
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  )
}
