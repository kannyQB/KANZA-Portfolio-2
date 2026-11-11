"use client"

import { useState } from "react"
import Link from "next/link"

const assetPathPrefix = "/assets"
const imgImage = `${assetPathPrefix}/39efb.png`
const imgImage1 = `${assetPathPrefix}/976ff.png`
const imgImage2 = `${assetPathPrefix}/1da72.png`
const imgImage3 = `${assetPathPrefix}/5fbd8.png`
const imgImage4 = `${assetPathPrefix}/9b1d5.png`
const imgImage5 = `${assetPathPrefix}/aa772.png`
const imgImage6 = `${assetPathPrefix}/9204a.png`
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgGrid = `${assetPathPrefix}/16c6b.svg`
const imgList = `${assetPathPrefix}/1a91a.svg`
const imgGo = `${assetPathPrefix}/0f7cd.svg`
const imgFrame4 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame5 = `${assetPathPrefix}/764f1.svg`
const imgFrame6 = `${assetPathPrefix}/39cd9.svg`

type Category = "saas" | "mobile"

type Project = {
  slug: string
  title: string
  sub: string
  meta: string
  cat: Category
  images: string[]
  live?: { href: string; label: string }
}

const projects: Project[] = [
  {
    slug: "screen-mirroring",
    title: "Screen Mirroring",
    sub: "Cast your phone to any TV",
    meta: "Mobile app · Android · 2026 · Shipped",
    cat: "mobile",
    images: [imgImage],
  },
  {
    slug: "vigil",
    title: "Vigil",
    sub: "A safety Command Platform",
    meta: "B2B SaaS · 2026 · Concept",
    cat: "saas",
    images: [imgImage1, imgImage2],
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    sub: "Calm control for teams",
    meta: "Dashboard · 2026 · Shipped",
    cat: "saas",
    images: [imgImage3],
  },
  {
    slug: "ai-face-aging",
    title: "AI Face Aging",
    sub: "See your future self",
    meta: "Mobile app · AI · 2026 · Shipped",
    cat: "mobile",
    images: [imgImage4],
  },
  {
    slug: "freelance-ops",
    title: "Freelance Ops",
    sub: "Business tools for freelancers",
    meta: "Mobile app · Fintech · 2025 · ",
    cat: "mobile",
    images: [imgImage5],
    live: {
      href: "https://play.google.com/store/apps/details?id=com.freelanceops&hl=en",
      label: "Live on Google Play ↗",
    },
  },
  {
    slug: "maisonette",
    title: "Maisonette",
    sub: "Luxury estate command center",
    meta: "SaaS · Real estate · 2026 · Shipped",
    cat: "saas",
    images: [imgImage6],
  },
]

const filters: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "SaaS & dashboards", value: "saas" },
  { label: "Mobile apps", value: "mobile" },
]

export default function Desktop2() {
  const [filter, setFilter] = useState<"all" | Category>("all")
  const [view, setView] = useState<"grid" | "list">("grid")
  const visible = projects.filter((p) => filter === "all" || p.cat === filter)
  const count = String(visible.length).padStart(2, "0")

  return (
    <div
      className="bg-[#f8f4f2] content-stretch flex flex-col items-start relative size-full"
      data-name="Work"
    >
      {/* NAV */}
      <div
        className="bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
        data-name="Nav"
      >
        <Link
          href="/"
          aria-label="Kanza Iqbal home"
          className="[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
          data-name="Logo"
        >
          <p className="relative shrink-0 text-[#1a0e14]">Kanza Iqbal</p>
          <p className="relative shrink-0 text-[#7a0d3b]">.</p>
        </Link>
        <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[26px] overflow-clip relative shrink-0 text-[16px] whitespace-nowrap">
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b] underline">
            Work
          </p>
          <Link className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]" href="/about">About</Link>
          <Link className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]" href="/contact">Contact</Link>
        </div>
        <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0">
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap">
            Lahore · PKT
          </p>
          <div className="bg-[#1a0e14] content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">
              Let’s talk
            </p>
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div
        className="content-stretch flex flex-col gap-[32px] items-start px-[270px] py-[64px] relative shrink-0 w-full"
        data-name="Body"
      >
        {/* Header */}
        <div className="[word-break:break-word] content-stretch flex gap-[48px] items-end pb-[24px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative">
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap">
              (Case studies)
            </p>
            <p className="font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.88px] whitespace-nowrap">
              <span className="leading-[80px] text-[72px]">{`Problems I’ve `}</span>
              <span className="font-['Instrument_Serif:Italic'] italic leading-[80px] text-[#7a0d3b] text-[78px] tracking-[-1.56px]">
                made simple
              </span>
              <span className="leading-[80px] text-[72px]">.</span>
            </p>
          </div>
          <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[360px]">
            Each one started with something that slowed people down. Here’s how I worked it out.
          </p>
        </div>

        {/* Toolbar */}
        <div className="border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between pb-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[28px] items-start relative shrink-0">
            {filters.map((f) => {
              const active = filter === f.value
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className="content-stretch flex cursor-pointer flex-col gap-[6px] items-start bg-transparent p-0 relative shrink-0"
                >
                  <span
                    className={`[word-break:break-word] leading-[26px] text-[16px] whitespace-nowrap ${
                      active
                        ? "font-['Geist:Medium'] font-medium text-[#1a0e14]"
                        : "font-['Geist:Regular'] font-normal text-[#6e5b63]"
                    }`}
                  >
                    {f.label}
                  </span>
                  <span className={`h-[2px] w-full ${active ? "bg-[#7a0d3b]" : "bg-transparent"}`} />
                </button>
              )
            })}
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap">
              {count} projects
            </p>
            <div className="border border-[#e7dadd] border-solid content-stretch flex gap-[2px] items-start p-[3px] relative rounded-[999px] shrink-0">
              {(
                [
                  { v: "grid", label: "Grid", icon: imgGrid },
                  { v: "list", label: "List", icon: imgList },
                ] as const
              ).map((b) => {
                const active = view === b.v
                return (
                  <button
                    key={b.v}
                    type="button"
                    onClick={() => setView(b.v)}
                    aria-pressed={active}
                    className={`content-stretch flex cursor-pointer gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0 ${
                      active ? "bg-[#1a0e14]" : "bg-transparent"
                    }`}
                  >
                    <span className="relative shrink-0 size-[14px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={b.icon} />
                    </span>
                    <span
                      className={`font-['Geist:Regular'] font-normal leading-[22px] text-[14px] whitespace-nowrap ${
                        active ? "text-white" : "text-[#1a0e14]"
                      }`}
                    >
                      {b.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Grid / List */}
        {view === "grid" ? (
          <div className="grid grid-cols-2 gap-x-[32px] gap-y-[72px] pt-[16px] relative shrink-0 w-full">
            {visible.map((p) => (
              <div
                key={p.slug}
                className="content-stretch flex min-w-0 flex-col gap-[16px] items-start relative"
                data-name={`Card/${p.title}`}
              >
                <Link href={`/work/${p.slug}`} className="block w-full">
                  <div className="h-[440px] overflow-hidden relative rounded-[16px] shrink-0 w-full">
                    {p.images.map((src) => (
                      <img
                        key={src}
                        alt={p.title}
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={src}
                      />
                    ))}
                  </div>
                </Link>
                <Link
                  href={`/work/${p.slug}`}
                  className="content-stretch flex items-center justify-between gap-[16px] relative shrink-0 w-full"
                >
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] min-w-0 relative text-[#1a0e14] text-[0px] tracking-[-0.52px]">
                    <span className="leading-[34px] text-[26px]">{`${p.title} - `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[34px] text-[#6e5b63] text-[16px] tracking-normal">
                      {p.sub}
                    </span>
                  </p>
                  <div className="bg-[#7a0d3b] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[36px]">
                    <div className="relative shrink-0 size-[14px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGo} />
                    </div>
                  </div>
                </Link>
                {p.live ? (
                  <a
                    href={p.live.href}
                    target="_blank"
                    rel="noreferrer"
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]"
                  >
                    {p.meta}
                    <span className="[text-underline-position:from-font] decoration-from-font decoration-solid text-[#167a43] underline">
                      {p.live.label}
                    </span>
                  </a>
                ) : (
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]">
                    {p.meta}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full">
            {visible.map((p, i) => (
              <div
                key={p.slug}
                className="border-[#e7dadd] border-solid border-b content-stretch flex gap-[32px] items-center py-[28px] relative shrink-0 w-full"
                data-name={`Row/${p.title}`}
              >
                <Link
                  href={`/work/${p.slug}`}
                  className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-w-0 relative"
                >
                  <p className="font-['Instrument_Serif:Italic'] italic leading-[40px] text-[#7a0d3b] text-[32px] w-[56px] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="h-[110px] overflow-hidden relative rounded-[12px] shrink-0 w-[170px]">
                    <img
                      alt={p.title}
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={p.images[0]}
                    />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-0 relative">
                    <p className="font-['Geist:Medium'] font-medium leading-[34px] text-[#1a0e14] text-[26px] tracking-[-0.52px]">
                      {p.title}
                    </p>
                    <p className="font-['Geist:Regular'] font-normal leading-[24px] text-[#6e5b63] text-[16px]">
                      {p.sub}
                    </p>
                  </div>
                </Link>
                <div className="content-stretch flex flex-col items-end gap-[4px] shrink-0 w-[280px]">
                  <p className="font-['Geist:Regular'] font-normal leading-[22px] text-[#6e5b63] text-[14px] text-right">
                    {p.meta}
                  </p>
                  {p.live && (
                    <a
                      href={p.live.href}
                      target="_blank"
                      rel="noreferrer"
                      className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Geist:Regular'] leading-[22px] text-[#167a43] text-[14px] underline"
                    >
                      {p.live.label}
                    </a>
                  )}
                </div>
                <Link
                  href={`/work/${p.slug}`}
                  className="bg-[#7a0d3b] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[36px]"
                >
                  <div className="relative shrink-0 size-[14px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGo} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div
        className="bg-[#1a0e14] content-stretch flex flex-col gap-[90px] items-start pb-[80px] pt-[60px] px-[270px] relative shrink-0 w-full"
        data-name="Footer (mine)"
      >
        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#f6dae5] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap">
          Got something in mind?
        </p>
        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-white tracking-[-7px] whitespace-nowrap">
          <span className="leading-[133px] text-[140px]">{`Let’s work `}</span>
          <span className="font-['Instrument_Serif:Italic'] italic leading-[133px] text-[#f6dae5] text-[150px] tracking-[-3px]">
            together.
          </span>
        </p>
        <div className="content-stretch flex gap-[16px] items-center overflow-clip pt-[8px] relative shrink-0">
          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap">
            kannyqb@gmail.com
          </p>
          <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]">
            <div className="relative shrink-0 size-[18px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} />
            </div>
          </div>
          <div className="border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[11px] relative rounded-[999px] shrink-0">
            <div className="relative shrink-0 size-[18px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
              LinkedIn
            </p>
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame6} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-solid border-t border-white content-stretch flex gap-[48px] items-start overflow-clip pt-[56px] relative shrink-0 text-white w-full whitespace-nowrap">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative">
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase">Based in</p>
            <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">Lahore — 14:30 PKT (GMT+5)</p>
            <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">Usually replies within 1 working day</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative">
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase">Elsewhere</p>
            <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" href="https://www.behance.net/kanzaiqbal13" rel="noreferrer" target="_blank">Behance ↗</a>
            <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" href="https://www.linkedin.com/in/kanza-iqbal" rel="noreferrer" target="_blank">LinkedIn ↗</a>
            <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" href="https://www.fiverr.com/s/9dGANYe" rel="noreferrer" target="_blank">Fiverr ↗</a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative">
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase">More</p>
            <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" download href="/Kanza-Iqbal-Product-Designer.pdf">Resume (PDF) ↓</a>
            <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">Privacy & Impressum</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap">
          <p className="relative shrink-0">© 2026 Kanza Iqbal · Designed & built with care in Lahore</p>
          <p className="relative shrink-0">Back to top ↑</p>
        </div>
      </div>
    </div>
  )
}