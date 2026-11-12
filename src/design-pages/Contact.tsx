"use client"

import { useState } from "react"
import CopyEmailButton from "../components/CopyEmailButtom"

const assetPathPrefix = "/assets"
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgEllipse = `${assetPathPrefix}/16348.svg`
const imgFrame4 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame5 = `${assetPathPrefix}/764f1.svg`
const imgFrame6 = `${assetPathPrefix}/39cd9.svg`

const helpChips = [
  "Product & UX design",
  "Mobile app",
  "Dashboard / SaaS",
  "Design system",
  "Full-time role",
  "Something else",
]

const budgetChips = ["< €1k", "€1k–3k", "€3k–6k", "€6k+", "Not sure yet"]

const steps = [
  {
    n: "01",
    t: "Share your idea",
    d: "Fill in the form or message me on WhatsApp with what you are building, what needs fixing and a rough budget.",
  },
  {
    n: "02",
    t: "Short call, fixed price",
    d: "We talk briefly about your goals, then I send a clear scope, timeline and one fixed price. No surprises later.",
  },
  {
    n: "03",
    t: "Weekly design reviews",
    d: "Every week you see the latest work in Figma and can leave comments directly on any screen.",
  },
  {
    n: "04",
    t: "Handoff and support",
    d: "Your developers get tidy, well-organised files, and I am around to answer questions during the build.",
  },
]

const faqs = [
  {
    q: "How is the price decided?",
    a: "It depends on how many screens you need and what is included. Share your budget in the form and I will send back one fixed quote, so you know the full cost before we begin.",
  },
  {
    q: "Can you work with clients in other countries?",
    a: "Yes. I am based in Lahore and work remotely with clients worldwide. We pick call and check-in times that fit your time zone.",
  },
  {
    q: "What tools do you design with?",
    a: "Figma for design and prototypes, FigJam for mapping flows, and AI tools like Claude and ChatGPT to research and try ideas faster.",
  },
  {
    q: "Will you collaborate with my developers?",
    a: "Absolutely. I hand over tidy Figma files with every state designed, and I stay reachable for quick calls while your team builds.",
  },
]

export default function ContactV2AftabStyleEuV3Eu() {
  // 0 = pehla sawal khula. Sab band chahiye to null likho.
  const [open, setOpen] = useState<number | null>(0)
  const [helpSelected, setHelpSelected] = useState("Mobile app")
  const [budgetSelected, setBudgetSelected] = useState("Not sure yet")

  return (
    <div
      className="bg-[#f8f4f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="346:1539"
      data-name="Contact — v2 (Aftab-style, EU) — v3 EU"
    >
      {/* NAV */}
      <div
        className="bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
        data-node-id="346:1540"
        data-name="Nav"
      >
        <div
          className="[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
          data-name="Logo"
        >
          <p className="relative shrink-0 text-[#1a0e14]">Kanza Iqbal</p>
          <p className="relative shrink-0 text-[#7a0d3b]">.</p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[26px] overflow-clip relative shrink-0 text-[16px] whitespace-nowrap"
          data-name="Links"
        >
          <p className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]">Work</p>
          <p className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]">About</p>
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b] underline">
            Contact
          </p>
        </div>
        <div
          className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0"
          data-name="Right"
        >
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap">
            Lahore · PK
          </p>
          <div
            className="bg-[#1a0e14] content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
            data-name="CTA"
          >
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap">
              Let’s talk
            </p>
            <div className="relative shrink-0 size-[16px]" data-name="icon/arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrow} />
            </div>
          </div>
        </div>
      </div>

      {/* BODY: info + form */}
      <div
        className="content-stretch flex gap-[80px] items-start px-[270px] py-[64px] relative shrink-0 w-full"
        data-node-id="346:1541"
        data-name="Body"
      >
        <div
          className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[500px]"
          data-name="Info"
        >
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Available">
            <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap">
              Available for full-time & freelance
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full"
            data-name="Head"
          >
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] whitespace-nowrap">
              (Contact)
            </p>
            <p className="font-['Geist:Medium'] font-medium leading-[0] min-w-full relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.56px] w-[min-content]">
          
              <span className="leading-[68px] text-[64px]">{`Got a project `}</span>
              <span className="font-['Instrument_Serif:Italic'] italic leading-[68px] text-[#7a0d3b] text-[70px]">
                in mind?
              </span>
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[28px] min-w-full relative shrink-0 text-[#6e5b63] text-[18px] w-[min-content]">
              Tell me a little about it. I read every message myself and reply within one working day.
            </p>
          </div>
          <div
            className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full"
            data-name="Email"
          >
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] whitespace-nowrap">
                EMAIL
              </p>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="r">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[30px] relative shrink-0 text-[#1a0e14] text-[24px] tracking-[-0.48px] whitespace-nowrap">
                  kannyqb@gmail.com
                </p>
                <CopyEmailButton
                  dataName="Copy email (icon)"
                  className="bg-[#f6dae5] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                >
                  <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px] whitespace-nowrap">
                    Copy
                  </p>
                </CopyEmailButton>
              </div>
            </div>
            <div
              className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full whitespace-nowrap"
              data-name="Elsewhere"
            >
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px]">
              ELSEWHERE
            </p>
            <div
              className="content-stretch flex font-['Geist:Regular'] font-normal gap-[20px] items-start leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px]"
              data-name="r"
            >
              <a className="relative shrink-0" href="https://www.linkedin.com/in/kanza-iqbal" rel="noreferrer" target="_blank">LinkedIn ↗</a>
              <a className="relative shrink-0" href="https://www.behance.net/kanzaiqbal13" rel="noreferrer" target="_blank">Behance ↗</a>
              <a
                className="relative shrink-0"
                href="https://www.fiverr.com/s/9dGANYe"
                rel="noreferrer"
                target="_blank"
              >
                Fiverr ↗
              </a>
            </div>
          </div>
          <div
            className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full whitespace-nowrap"
            data-name="Based in"
          >
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px]">
              BASED IN
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px]">
              Lahore, Pakistan 
            </p>
          </div>
          <div
            className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full whitespace-nowrap"
            data-name="Response time"
          >
            <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px]">
              RESPONSE TIME
            </p>
            <p className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px]">
              Within one working day.
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <div
          className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px p-[40px] relative rounded-[32px]"
          data-name="Form card"
        >
          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[34px] relative shrink-0 text-[#1a0e14] text-[28px] tracking-[-0.56px] whitespace-nowrap">
            Send me a message
          </p>

          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="What can I help with?">
            <div className="content-stretch flex items-start relative shrink-0">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap">
                What can I help with?
              </p>
            </div>
            <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Chips">
              {helpChips.map((c) => (
                <button
                  aria-pressed={c === helpSelected}
                  key={c}
                  className={`inline-flex max-w-full cursor-pointer items-center justify-center rounded-[999px] border px-[16px] py-[10px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a0d3b] focus-visible:ring-offset-2 ${
                    c === helpSelected
                      ? "border-[#7a0d3b] bg-[#7a0d3b] text-white"
                      : "border-[#e7dadd] bg-white text-[#1a0e14] hover:border-[#7a0d3b]"
                  }`}
                  onClick={() => setHelpSelected(c)}
                  type="button"
                >
                  <span className="font-['Geist:Regular'] text-[14px] leading-[normal]">
                    {c}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Budget">
            <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap">
              <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1a0e14]">Budget</p>
              <p className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63]">(optional)</p>
            </div>
            <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Chips">
              {budgetChips.map((c) => (
                <button
                  aria-pressed={c === budgetSelected}
                  key={c}
                  className={`inline-flex max-w-full cursor-pointer items-center justify-center rounded-[999px] border px-[16px] py-[10px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a0d3b] focus-visible:ring-offset-2 ${
                    c === budgetSelected
                      ? "border-[#7a0d3b] bg-[#7a0d3b] text-white"
                      : "border-[#e7dadd] bg-white text-[#1a0e14] hover:border-[#7a0d3b]"
                  }`}
                  onClick={() => setBudgetSelected(c)}
                  type="button"
                >
                  <span className="font-['Geist:Regular'] text-[14px] leading-[normal]">
                    {c}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Name + email">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field/Your name">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap">
                Your name
              </p>
              <input
                aria-label="Your name"
                className="bg-[#f8f4f2] border border-[#e7dadd] border-solid h-[52px] px-[16px] rounded-[14px] w-full font-['Geist:Regular'] text-[#6e5b63] text-[15px]"
                defaultValue="Anna de Vries"
              />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field/Email">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap">
                Email
              </p>
              <input
                aria-label="Email"
                className="bg-[#f8f4f2] border border-[#e7dadd] border-solid h-[52px] px-[16px] rounded-[14px] w-full font-['Geist:Regular'] text-[#6e5b63] text-[15px]"
                defaultValue="anna@company.nl"
                type="email"
              />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Field/Project details">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap">
              Project details
            </p>
            <textarea
              aria-label="Project details"
              className="bg-[#f8f4f2] border border-[#e7dadd] border-solid h-[150px] pt-[14px] px-[16px] rounded-[14px] w-full resize-none font-['Geist:Regular'] text-[#6e5b63] text-[15px]"
              placeholder="What are you building, who is it for, and when do you need it?"
            />
          </div>

          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Submit row">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap">
              <span className="leading-[18px]">{`I’ll only use your details to reply to you. `}</span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] underline">
                Privacy
              </span>
            </p>
            <button
              className="bg-[#1a0e14] content-stretch flex items-start px-[26px] py-[15px] relative rounded-[999px] shrink-0"
              data-name="Send message"
              type="button"
            >
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                Send message ↗
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <div
        className="bg-[#f8f4f2] border-[#e7dadd] border-t border-solid content-stretch flex gap-[80px] items-start px-[270px] py-[64px] relative shrink-0 w-full"
        data-name="What happens next"
      >
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[500px]">
          <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] whitespace-nowrap">
            (How we work together)
          </p>
          <p className="font-['Geist:Medium'] font-medium leading-[0] min-w-full relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.56px] w-[min-content]">
            <span className="leading-[68px] text-[64px]">{`What to `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-[68px] text-[#7a0d3b] text-[70px]">
              expect
            </span>
          </p>
        </div>
        <div className="grid flex-[1_0_0] grid-cols-2 gap-[16px] min-w-px relative">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[28px]"
            >
              <p className="font-['Instrument_Serif:Italic'] italic leading-[48px] text-[#7a0d3b] text-[44px]">
                {s.n}
              </p>
              <p className="font-['Geist:Medium'] font-medium leading-[28px] text-[#1a0e14] text-[22px] tracking-[-0.44px]">
                {s.t}
              </p>
              <p className="font-['Geist:Regular'] font-normal leading-[26px] text-[#6e5b63] text-[16px]">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div
        className="bg-[#f8f4f2] border-[#e7dadd] border-t border-solid content-stretch flex gap-[80px] items-start px-[270px] py-[64px] relative shrink-0 w-full"
        data-name="FAQ"
      >
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[500px]">
          <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] whitespace-nowrap">
            (FAQ)
          </p>
          <p className="font-['Geist:Medium'] font-medium leading-[0] min-w-full relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.56px] w-[min-content]">
            <span className="leading-[68px] text-[64px]">{`Quick `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-[68px] text-[#7a0d3b] text-[70px]">
              answers
            </span>
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[28px] min-w-full relative shrink-0 text-[#6e5b63] text-[18px] w-[min-content]">
            {`Prefer to look around first? Browse my `}
            <span className="[text-underline-position:from-font] decoration-from-font decoration-solid text-[#1a0e14] underline">
              work
            </span>
            .
          </p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="border-[#e7dadd] border-solid border-t last:border-b w-full"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[24px] bg-transparent py-[28px] text-left"
                >
                  <span className="font-['Geist:Medium'] font-medium leading-[32px] text-[#1a0e14] text-[24px] tracking-[-0.48px]">
                    {item.q}
                  </span>
                  <span
                    className={`font-['Geist:Regular'] shrink-0 text-[28px] leading-none text-[#7a0d3b] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="font-['Geist:Regular'] font-normal leading-[28px] max-w-[620px] pb-[28px] text-[#6e5b63] text-[18px]">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* FOOTER */}

// ...

<div
  className="bg-[#1a0e14] content-stretch flex flex-col gap-[90px] items-start pb-[80px] pt-[60px] px-[270px] relative shrink-0 w-full"
  data-node-id="346:752"
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

  <div
    className="content-stretch flex gap-[16px] items-center pt-[8px] relative shrink-0"
    data-name="Email row"
  >
    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap">
      kannyqb@gmail.com
    </p>

    <CopyEmailButton
      email="kannyqb@gmail.com"
      dataName="Copy email (icon)"
      className="bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.16)] transition-colors flex items-center justify-center rounded-full shrink-0 size-[44px] text-white cursor-pointer"
    >
      <img
        alt=""
        className="pointer-events-none block size-[18px]"
        src={imgFrame4}
      />
    </CopyEmailButton>
  </div>

  <div
    className="[word-break:break-word] border-solid border-t border-white content-stretch flex gap-[48px] items-start overflow-clip pt-[56px] relative shrink-0 text-white w-full whitespace-nowrap"
    data-name="Columns"
  >
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="Local time">
      <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase">
        Based in
      </p>
      <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">
        Lahore, Pakistan
      </p>
      <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">
        Usually replies within 1 working day
      </p>
    </div>

    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="Socials">
      <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase">
        Elsewhere
      </p>
      <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" href="https://www.behance.net/kanzaiqbal13" rel="noreferrer" target="_blank">
        Behance ↗
      </a>
      <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" href="https://www.linkedin.com/in/kanza-iqbal" rel="noreferrer" target="_blank">
        LinkedIn ↗
      </a>
      <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" href="https://www.fiverr.com/s/9dGANYe" rel="noreferrer" target="_blank">
        Fiverr ↗
      </a>
    </div>

    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="More">
      <p className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase">
        More
      </p>
      <a className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]" download href="/Kanza-Iqbal-Product-Designer.pdf">
        Resume (PDF) ↓
      </a>
      <p className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]">
        Privacy &amp; Impressum
      </p>
    </div>
  </div>

  <div
    className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap"
    data-name="Bottom bar"
  >
    <p className="relative shrink-0">
      © 2026 Kanza Iqbal · Designed &amp; built with care in Lahore, Pakistan
    </p>
    <a href="#top" className="relative shrink-0">Back to top ↑</a>
  </div>
</div>
    </div>
  )
}