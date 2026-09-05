// Business Data — Edit this file with your business info
// This is the source for the main website (Claude Fable 5 style)
// Once you drop your business info, we will update this file

export const businessData = {
  name: "WebForge Atelier",
  tagline: "Websites woven from words",
  description: "We are a small atelier in Lagos and Kyoto, making websites that feel hand-made. Not from templates — from stories. Each site gets its own custom repository, its own fable. No drag, no lock-in. Just words → website.",
  longDescription: "The web forgot how to tell stories. Everything looks the same — same templates, same sections, same empty promises. We believe a website should feel like a place you've been before, even if you haven't. Familiar, like a good fable. Claude taught us to think with language. Fable taught us to move with meaning. WebForge is both: calm like paper, alive like film.",
  audience: "Founders, ateliers, studios, and quiet businesses who care about craft",
  location: "Lagos, NG • Kyoto, JP",
  email: "hello@webforge.ai",
  instagram: "@webforge.ai",
  vibe: "atelier" as const,
  palette: {
    paper: "#FFFCF5",
    ink: "#141413",
    accent: "#D97757",
    stone: "#E8E6E1",
  },
  services: [
    {
      id: "01",
      title: "Fable Sites",
      description: "Editorial websites that breathe. Serif display, paper texture, motion as meaning. Built with Next.js 14, Tailwind, Framer Motion.",
      price: "From $2,400",
    },
    {
      id: "02",
      title: "Custom Repository",
      description: "Every site gets its own GitHub repo. Clean code, your ownership, deploy anywhere. No watermark, no lock-in.",
      price: "Included",
    },
    {
      id: "03",
      title: "Story → System",
      description: "We read between the lines. Your story becomes palette, typography, layout. Not random — crafted for your audience.",
      price: "From $800",
    },
  ],
  process: [
    {
      step: "I",
      title: "Tell the tale",
      text: "No forms. Just speak as you would to a friend. Who you serve, what you believe, the feeling you want to leave behind. We listen for subtext.",
    },
    {
      step: "II",
      title: "We forge",
      text: "Story into system: typography that breathes, color that remembers, layout that guides like a well-told fable. Each site gets its own repository.",
    },
    {
      step: "III",
      title: "You own the book",
      text: "No lock-in. Clean Next.js, Tailwind, motion. Edit by hand or ask us to rewrite a chapter. The story continues.",
    },
  ],
  work: [
    {
      name: "Atelier No. 5",
      type: "Ceramics • Kyoto",
      vibe: "wabi-sabi",
      description: "Objects made to be lived with",
      color: "#FAF9F5",
    },
    {
      name: "North Law",
      type: "Law for Founders",
      vibe: "editorial",
      description: "Trust & clarity, editorial",
      color: "#FFFFFF",
    },
    {
      name: "Field Research",
      type: "AI Lab",
      vibe: "brutalist",
      description: "Data as poetry",
      color: "#141413",
      dark: true,
    },
  ],
  stats: [
    { value: "2019", label: "Founded" },
    { value: "47", label: "Fables forged" },
    { value: "100%", label: "Custom repos" },
  ],
}

export type BusinessData = typeof businessData
