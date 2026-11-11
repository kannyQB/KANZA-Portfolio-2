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
const imgGridDark = `${assetPathPrefix}/65b28.svg`
const imgListWhite = `${assetPathPrefix}/e028d.svg`
const imgGridWhite = `${assetPathPrefix}/16c6b.svg`
const imgListDark = `${assetPathPrefix}/1a91a.svg`
const imgGo = `${assetPathPrefix}/0f7cd.svg`
const imgDotGreen = `${assetPathPrefix}/836d9.svg`
const imgDotGrey = `${assetPathPrefix}/8a632.svg`
const imgFrame4 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame5 = `${assetPathPrefix}/764f1.svg`
const imgFrame6 = `${assetPathPrefix}/39cd9.svg`

// HOVER PREVIEW IMAGES (public/assets/ mein)
const hoverScreenMirroring = `${assetPathPrefix}/hover-screen-mirroring.png`
const hoverVigil = `${assetPathPrefix}/hover-vigil.png`
const hoverTaskflow = `${assetPathPrefix}/hover-taskflow.png`
const hoverAiFaceAging = `${assetPathPrefix}/hover-ai-face-aging.png`
const hoverFreelanceOps = `${assetPathPrefix}/hover-freelance-ops.png`
const hoverMaisonette = `${assetPathPrefix}/hover-maisonette.png`

type Category = "saas" | "mobile"
type Status = "Shipped" | "Concept"

type Project = {
  title: string
  sub: string
  gridMeta: string
  listMeta: string
  cat: Category
  status: Status
  images: string[]
  hoverImage: string
  // Kisi ek project ka zoom alag chahiye to yahan number likho (1.1, 1.2...)
  hoverZoom?: number
  // true = code image par rounded corners + tilt + shadow lagayega
  // (un PNG ke liye jo seedhi photo hain, bina tilt/shadow ke)
  hoverFrame?: boolean
  live?: { href: string; gridLabel: string; listLabel: string }
}

const projects: Project[] = [
  {
    title: "Screen Mirroring",
    sub: "Cast your phone to any TV",
    gridMeta: "Mobile app · Android · 2026 · Shipped",
    listMeta: "Mobile app · 2026",
    cat: "mobile",
    status: "Shipped",
    images: [imgImage],
    hoverImage: hoverScreenMirroring,
  },
  {
    title: "Vigil",
    sub: "A safety Command Platform",
    gridMeta: "B2B SaaS · 2026 · Concept",
    listMeta: "B2B SaaS · 2026",
    cat: "saas",
    status: "Concept",
    images: [imgImage1, imgImage2],
    hoverImage: hoverVigil,
  },
  {
    title: "TaskFlow",
    sub: "Calm control for teams",
    gridMeta: "Dashboard · 2026 · Shipped",
    listMeta: "Dashboard · 2026",
    cat: "saas",
    status: "Shipped",
    images: [imgImage3],
    hoverImage: hoverTaskflow,
  },
  {
    title: "AI Face Aging",
    sub: "See your future self",
    gridMeta: "Mobile app · AI · 2026 · Shipped",
    listMeta: "Mobile app · AI · 2026",
    cat: "mobile",
    status: "Shipped",
    images: [imgImage4],
    hoverImage: hoverAiFaceAging,
  },
  {
    title: "Freelance Ops",
    sub: "Business tools for freelancers",
    gridMeta: "Mobile app · Fintech · 2025 · ",
    listMeta: "Mobile app · Fintech · 2025",
    cat: "mobile",
    status: "Shipped",
    images: [imgImage5],
    hoverImage: hoverFreelanceOps,
    live: {
      href: "https://play.google.com/store/apps/details?id=com.freelanceops&hl=en",
      gridLabel: "Live on Google Play ↗",
      listLabel: "Live on Google Play ↗",
    },
  },
  {
    title: "Maisonette",
    sub: "Luxury estate command center",
    gridMeta: "SaaS · Real estate · 2026 · Shipped",
    listMeta: "SaaS · Real estate · 2026",
    cat: "saas",
    status: "Shipped",
    images: [imgImage6],
    hoverImage: hoverMaisonette,
    hoverFrame: true,
  },
]

const filters: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "SaaS & dashboards", value: "saas" },
  { label: "Mobile apps", value: "mobile" },
]

// Colors
const DARK = "#1a0e14"
const LINE = "#e7dadd"
const MUTED = "#6e5b63"
const PINK = "#f6dae5"
const CREAM = "#f8f4f2"
// Sab hover images ka default zoom (1 = koi zoom nahi, image jaisi hai waisi)
const HOVER_ZOOM = 1

// Hover box ka size (baaki 5 images isi box mein "contain" hoti hain)
const BOX_W = 320
const BOX_H = 224
// Sirf Maisonette (hoverFrame) ka card size. Position khud beech mein aati hai.
// Bara/chhota karna ho to sirf yehi 2 numbers badlo (ratio ~1.43 rakho).
const FRAME_W = 206
const FRAME_H = 144

// Hover preview.
// frame = false: image jaisi hai waisi dikhti hai (PNG mein tilt/shadow already hai).
// frame = true: code rounded corners, tilt aur shadow lagata hai (seedhi photo ke liye).
function HoverPreview({
  src,
  fallback,
  show,
  zoom = 1,
  frame = false,
}: {
  src: string
  fallback: string
  show: boolean
  zoom?: number
  frame?: boolean
}) {
  const [current, setCurrent] = useState(src)
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "52%",
        top: "50%",
        width: BOX_W,
        height: BOX_H,
        zIndex: 60,
        pointerEvents: "none",
        opacity: show ? 1 : 0,
        transform: `translateY(-50%) scale(${show ? 1 : 0.95})`,
        transformOrigin: "center",
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
      }}
    >
      {frame ? (
        <div
          style={{
            position: "absolute",
            left: (BOX_W - FRAME_W) / 2,
            top: (BOX_H - FRAME_H) / 2,
            width: FRAME_W,
            height: FRAME_H,
            transform: "rotate(4deg)",
            transformOrigin: "center",
            overflow: "hidden",
            borderRadius: 16,
            boxShadow: "0px 20px 40px 0px rgba(26,0,13,0.3)",
          }}
        >
          <img
            alt=""
            src={current}
            onError={() => {
              if (current !== fallback) setCurrent(fallback)
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              maxWidth: "none",
              objectFit: "cover",
              transform: `scale(${zoom})`,
              transformOrigin: "center",
            }}
          />
        </div>
      ) : (
        <img
          alt=""
          src={current}
          onError={() => {
            if (current !== fallback) setCurrent(fallback)
          }}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "none",
            objectFit: "contain",
            transform: `scale(${zoom})`,
            transformOrigin: "center",
          }}
        />
      )}
    </div>
  )
}

export default function Desktop2() {
  const [filter, setFilter] = useState<"all" | Category>("all")
  // Default view. Grid se shuru karna ho to "list" ko "grid" kar do.
  const [view, setView] = useState<"grid" | "list">("list")
  const [hovered, setHovered] = useState<string | null>(null)

  const visible = projects.filter((p) => filter === "all" || p.cat === filter)
  const countOf = (v: "all" | Category) =>
    v === "all" ? projects.length : projects.filter((p) => p.cat === v).length

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
        className="content-stretch flex flex-col items-start pb-[120px] pt-[96px] px-[270px] relative shrink-0 w-full"
        data-name="Body"
      >
        {/* Header */}
        <div className="content-stretch flex items-end justify-between pb-[48px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Medium'] font-medium gap-[12px] items-start relative shrink-0 whitespace-nowrap">
            <p className="leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase">
              (Case studies)
            </p>
            <p className="leading-[0] relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.88px]">
              <span className="leading-[80px] text-[72px]">{`Problems I’ve `}</span>
              <span className="font-['Instrument_Serif:Italic'] italic leading-[80px] text-[#7a0d3b] text-[78px] tracking-[-1.56px]">
                made simple
              </span>
              <span className="leading-[80px] text-[72px]">.</span>
            </p>
          </div>

          <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0">
            <div className="border border-[#e7dadd] border-solid content-stretch flex gap-[2px] items-start p-[3px] relative rounded-[999px] shrink-0">
              {(
                [
                  { v: "grid", label: "Grid", on: imgGridWhite, off: imgGridDark },
                  { v: "list", label: "List", on: imgListWhite, off: imgListDark },
                ] as const
              ).map((b) => {
                const active = view === b.v
                return (
                  <button
                    key={b.v}
                    type="button"
                    onClick={() => {
                      setView(b.v)
                      setHovered(null)
                    }}
                    aria-pressed={active}
                    className={`content-stretch flex cursor-pointer gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0 ${
                      active ? "bg-[#1a0e14]" : "bg-transparent"
                    }`}
                  >
                    <span className="relative shrink-0 size-[14px]">
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={active ? b.on : b.off}
                      />
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
            <p className="font-['Geist:Regular'] font-normal leading-[22px] min-h-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap">
              {view === "list" ? "Hover a row to preview" : ""}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal gap-[8px] items-start leading-[22px] pb-[40px] relative shrink-0 text-[14px] whitespace-nowrap">
          {filters.map((f) => {
            const active = filter === f.value
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`content-stretch flex cursor-pointer gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0 ${
                  active ? "bg-[#f6dae5]" : "bg-transparent"
                }`}
              >
                <span className={active ? "text-[#7a0d3b]" : "text-[#1a0e14]"}>{f.label}</span>
                <span className="text-[#6e5b63]">{countOf(f.value)}</span>
              </button>
            )
          })}
        </div>

        {/* GRID VIEW */}
        {view === "grid" && (
          <div className="grid grid-cols-2 gap-x-[32px] gap-y-[72px] relative shrink-0 w-full">
            {visible.map((p) => (
              <div
                key={p.title}
                className="content-stretch flex min-w-0 flex-col gap-[16px] items-start relative"
                data-name={`Card/${p.title}`}
              >
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
                <div className="content-stretch flex items-center justify-between gap-[16px] relative shrink-0 w-full">
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
                </div>
                {p.live ? (
                  <a
                    href={p.live.href}
                    target="_blank"
                    rel="noreferrer"
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]"
                  >
                    {p.gridMeta}
                    <span className="[text-underline-position:from-font] decoration-from-font decoration-solid text-[#167a43] underline">
                      {p.live.gridLabel}
                    </span>
                  </a>
                ) : (
                  <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]">
                    {p.gridMeta}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* LIST VIEW (hover yahan hai) */}
        {view === "list" && (
          <div
            className="content-stretch flex flex-col items-start shrink-0 w-full"
            style={{ position: "relative", zIndex: 50, pointerEvents: "auto" }}
            onMouseLeave={() => setHovered(null)}
          >
            {visible.map((p, i) => {
              const isHover = hovered === p.title
              const on = () => setHovered(p.title)
              return (
                <div
                  key={p.title}
                  onMouseEnter={on}
                  onMouseMove={on}
                  data-name={`Row/${p.title}`}
                  className="flex shrink-0 items-center gap-[24px] rounded-[16px] px-[20px] py-[26px]"
                  style={{
                    position: "relative",
                    width: "calc(100% + 40px)",
                    marginLeft: -20,
                    marginRight: -20,
                    zIndex: isHover ? 20 : 0,
                    pointerEvents: "auto",
                    cursor: "pointer",
                    backgroundColor: isHover ? DARK : "transparent",
                    borderTop: `1px solid ${isHover ? "transparent" : LINE}`,
                    transition: "background-color 200ms ease, border-color 200ms ease",
                  }}
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px] w-[48px]"
                    style={{ color: isHover ? PINK : MUTED, transition: "color 200ms ease" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[0px] tracking-[-2.08px]"
                    style={{ color: isHover ? CREAM : DARK, transition: "color 200ms ease" }}
                  >
                    <span className="leading-[56px] text-[52px]">{`${p.title} - `}</span>
                    <span className="leading-[56px] text-[20px] tracking-normal">{p.sub}</span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px] whitespace-nowrap"
                    style={{ color: isHover ? CREAM : MUTED, transition: "color 200ms ease" }}
                  >
                    {p.listMeta}
                  </p>

                  {p.live ? (
                    <a
                      href={p.live.href}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#e5f5ec] content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[999px] shrink-0"
                    >
                      <span className="relative shrink-0 size-[7px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDotGreen} />
                      </span>
                      <span className="font-['Geist:Medium'] font-medium leading-[normal] text-[#167a43] text-[13px] whitespace-nowrap">
                        {p.live.listLabel}
                      </span>
                    </a>
                  ) : (
                    <div
                      className={`content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0 ${
                        p.status === "Concept" ? "bg-white" : "bg-[#e5f5ec]"
                      }`}
                    >
                      <span className="relative shrink-0 size-[7px]">
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={p.status === "Concept" ? imgDotGrey : imgDotGreen}
                        />
                      </span>
                      <span
                        className={`font-['Geist:Regular'] font-normal leading-[22px] text-[14px] whitespace-nowrap ${
                          p.status === "Concept" ? "text-[#6e5b63]" : "text-[#1f9d57]"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  )}

                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    style={{ color: isHover ? "#ffffff" : DARK, transition: "color 200ms ease" }}
                  >
                    ↗
                  </p>

                  <HoverPreview
                    src={p.hoverImage}
                    fallback={p.images[0]}
                    show={isHover}
                    zoom={p.hoverZoom ?? HOVER_ZOOM}
                    frame={p.hoverFrame ?? false}
                  />
                </div>
              )
            })}
            <div className="bg-[#e7dadd] h-px relative shrink-0 w-full" />
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
            <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">Privacy</p>
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