"use client"
// label + naam, dono ek hi loop mein
import { useState } from "react"
import HomeCaseStudies from "@/components/HomeCaseStudies"

const assetPathPrefix = "/assets"
const imgImage1 = `${assetPathPrefix}/8841c.png`
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgEllipse1 = `${assetPathPrefix}/2c9e9.svg`
const imgIconArrow1 = `${assetPathPrefix}/e3aeb.svg`
const imgFrame = `${assetPathPrefix}/67392.svg`
const imgFrame1 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame2 = `${assetPathPrefix}/764f1.svg`
const imgFrame3 = `${assetPathPrefix}/39cd9.svg`
const imgFrame4 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame5 = `${assetPathPrefix}/764f1.svg`
const imgFrame6 = `${assetPathPrefix}/39cd9.svg`

const testimonials = [
  {
    quote:
      "Really impressed with her work! Clean, professional designs with great attention to detail and a strong understanding of user experience. Would highly recommend her for UI/UX design work!",
    name: "Muhammad Ali",
    role: "CEO · Design by Ali",
    initials: "MA",
    group: "CEO",
    color: "#f6dae5",
  },
  {
    quote:
      "An incredibly promising UI/UX talent, with a strong grasp of design principles, a sharp eye for clean aesthetics and a genuine eagerness to learn and adapt. What stood out most was her dedication to understanding user journeys and her collaborative spirit — always receptive to feedback and constantly raising the quality of her handoffs.",
    name: "Izzah Khawar",
    role: "iOS Developer", // VERIFY: Figma mein company name bhi hai
    initials: "IK",
    group: "Colleagues",
    color: "#ead3de",
  },
  {
    quote:
      "Over a year at Assopp, Kanza consistently showed creativity, attention to detail and a strong understanding of user-centered design. She turns ideas into intuitive, visually appealing designs that enhanced the user experience and contributed significantly to the success of our projects. Highly collaborative and always striving to improve.", // VERIFY: "Assopp" spelling
    name: "Syed Shayan Naqvi",
    role: "Mentor", // VERIFY: Figma wali role/company
    initials: "SN",
    group: "Colleagues",
    color: "#f4e3d6",
  },
  {
    quote:
      "I had the pleasure of working with Kanza as a Product Manager and SQA Engineer. She is a highly talented UI/UX designer who truly understands product requirements. Her designs are not only visually appealing but also very user-friendly and easy to implement. Communication was smooth and she delivered everything on time. Highly recommended!",
    name: "Munib ur Rehman",
    role: "Product Manager & SQA Engineer",
    initials: "MR",
    group: "Colleagues",
    color: "#e5e9f8",
  },
] as const
const designerStrip = [
  "Product Design",
  "UX Research",
  "Mobile Apps",
  "Web & SaaS",
  "Admin Dashboards",
  "Design Systems",
  "Prototyping",
  "Developer Handoff",
]

function DesignerStrip() {
  const items = [...designerStrip, ...designerStrip]

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap border-y border-solid border-[#e7dadd] bg-white py-[28px]">
      <div className="marquee-track items-center gap-[28px]">
        {items.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-[28px]">
            {(i % designerStrip.length) % 2 === 0 ? (
              <span className="font-['Geist:Medium'] text-[24px] font-medium leading-[30px] tracking-[-0.48px] text-[#1a0e14]">
                {item}
              </span>
            ) : (
              <span className="font-['Instrument_Serif:Italic'] italic text-[28px] leading-[30px] tracking-[-0.28px] text-[#7a0d3b]">
                {item}
              </span>
            )}
            <span className="text-[16px] leading-[26px] text-[#7a0d3b]">✦</span>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[200px] bg-gradient-to-r from-[rgba(255,255,255,0)] to-white" />
    </div>
  )
}
const workedWith = [
  { name: "Izzah Khawar", role: "iOS Developer" },
  { name: "Asima Akhtar", role: "Android Developer" },
  { name: "Muhammad Ali", role: "CEO" },
  { name: "Muhammad Zahid", role: "Marketing" },
  { name: "Munib ur Rehman", role: "SQA" },
  { name: "Aftab Ahmed", role: "Designer" },
  { name: "Nouman Ahmed", role: "Designer" },
  { name: "Abdul Qadeer", role: "Project Manager" },
]
function WorkedWithStrip() {
  const loop = [{ label: true }, ...workedWith, { label: true }, ...workedWith]

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap border-y border-solid border-[#e7dadd] bg-white py-[28px]">
      <div className="marquee-track items-center gap-[28px]">
        {loop.map((p: any, i: number) => {
          if (p.label) {
            return (
              <div key={i} className="flex shrink-0 items-center gap-[28px]">
                <p className="m-0 font-['Geist:Medium'] text-[12px] font-medium uppercase leading-[16px] tracking-[0.72px] text-[#7a0d3b]">
                  (Worked with)
                </p>
                <span className="h-[32px] w-px bg-[#e7dadd]" />
              </div>
            )
          }

          const idx = i % (workedWith.length + 1)
          const isSans = idx % 2 === 1

          return (
            <div key={i} className="flex shrink-0 items-center gap-[28px]">
              <p
                className={
                  isSans
                    ? "m-0 flex items-baseline gap-[10px] font-['Geist:Medium'] font-medium text-[#1a0e14]"
                    : "m-0 flex items-baseline gap-[10px] font-['Instrument_Serif:Italic'] italic text-[#7a0d3b]"
                }
              >
                <span
                  className={
                    isSans
                      ? "text-[24px] leading-[30px] tracking-[-0.24px]"
                      : "text-[28px] leading-[30px] tracking-[-0.28px]"
                  }
                >
                  {p.name}
                </span>
                <span className="font-['Geist:Regular'] text-[13px] font-normal not-italic leading-[30px] tracking-[0.26px] text-[#6e5b63]">
                  {p.role}
                </span>
              </p>
              <span className="text-[16px] text-[#7a0d3b]">✦</span>
            </div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[200px] bg-gradient-to-r from-[rgba(255,255,255,0)] to-white" />
    </div>
  )
}
export default function HomeReviewFixesV2V3Eu() {
  const [testimonialGroup, setTestimonialGroup] =
    useState<"All" | "Colleagues" | "CEO">("All")
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const visibleTestimonials =
    testimonialGroup === "All"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.group === testimonialGroup,
        )
  const activeTestimonial =
    visibleTestimonials[testimonialIndex % visibleTestimonials.length]

  return (
    <div
      className="bg-[#f8f4f2] relative size-full"
      data-node-id="346:320"
      data-name="Home — Review fixes (v2) — v3 EU"
    >
      <div
        className="absolute bg-[#f8f4f2] content-stretch flex flex-col items-end left-[-1px] top-[3px] w-[1442px]"
        data-node-id="346:321"
      >
        <div
          className="bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
          data-node-id="346:322"
          data-name="Nav"
        >
          <div
            className="[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
            data-node-id="I346:322;7:113"
            data-name="Logo"
          >
            <p
              className="relative shrink-0 text-[#1a0e14]"
              data-node-id="I346:322;7:114"
            >
              Kanza Iqbal
            </p>
            <p
              className="relative shrink-0 text-[#7a0d3b]"
              data-node-id="I346:322;7:115"
            >
              .
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch cursor-pointer flex font-['Geist:Regular'] font-normal gap-[40px] items-start leading-[0] overflow-clip relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
            data-node-id="I346:322;7:116"
            data-name="Links"
          >
            <a
              className="block relative shrink-0"
              data-node-id="I346:322;7:117"
            >
              <p className="leading-[26px]">Work</p>
            </a>
            <a
              className="block relative shrink-0"
              data-node-id="I346:322;7:118"
            >
              <p className="leading-[26px]">About</p>
            </a>
            <a
              className="block relative shrink-0"
              data-node-id="I346:322;7:120"
            >
              <p className="leading-[26px]">Contact</p>
            </a>
          </div>
          <div
            className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0"
            data-node-id="I346:322;7:121"
            data-name="Right"
          >
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
              data-node-id="I346:322;7:122"
            >
              Lahore · PK
            </p>
            <a
              className="bg-[#1a0e14] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
              data-node-id="I346:322;7:123"
              data-name="CTA"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                data-node-id="I346:322;7:123;3:42"
              >
                Let’s talk
              </p>
              <div
                className="relative shrink-0 size-[16px]"
                data-node-id="I346:322;7:123;3:43"
                data-name="icon/arrow"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgIconArrow}
                />
              </div>
            </a>
          </div>
        </div>
        <div
          className="bg-[#f8f4f2] content-stretch flex flex-col gap-[75px] items-start overflow-clip pb-[100px] pt-[56px] px-[270px] relative shrink-0 w-full"
          data-node-id="346:323"
          data-name="Hero"
        >
          <div
            className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
            data-node-id="346:324"
            data-name="Top"
          >
            <div className="content-stretch flex flex-row-reverse items-center justify-between relative shrink-0 w-full">
              <p className="flex items-center gap-[8px] font-['Geist:Regular'] font-normal leading-[22px] text-[#6e5b63] text-[14px] whitespace-nowrap">
                <span>Kanza Iqbal</span>
                <span
                  aria-hidden="true"
                  className="h-[14px] w-px bg-[#6e5b63]"
                />
                <span>Lahore, PK</span>
              </p>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="346:344"
                data-name="Status"
              >
                <div
                  className="relative shrink-0 size-[7px]"
                  data-node-id="346:345"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse1}
                  />
                </div>
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                  data-node-id="346:346"
                >{`Available for full-time & freelance`}</p>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[32px] relative top-[90px] shrink-0 text-[#7a0d3b] text-[20px] tracking-[-0.1px] whitespace-nowrap"
              data-node-id="346:325"
            >{`(UI/UX & Product Designer)`}</p>
          </div>
          <div
            className="content-stretch flex items-end relative top-[40px] shrink-0 w-[900px]"
            data-node-id="346:326"
            data-name="Row"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative"
              data-node-id="346:327"
              data-name="Headline + sub"
            >
              <div
                className="shrink-0 font-['Geist:Medium'] font-medium leading-[0] min-w-full relative text-[#1a0e14] text-[0px] tracking-[-3.84px] w-[min-content]"
                data-node-id="346:328"
              >
                <p className="mb-0">
                  <span className="leading-[100px] text-[96px]">{`Interfaces that feel`}</span>
                  <br />
                  <span className="leading-[100px] text-[96px]">{`obvious from `}</span>
                  <span className="[word-break:break-word] font-['Instrument_Serif:Italic'] italic leading-[110px] text-[#7a0d3b] text-[104px] tracking-[-2.08px]">
                    the very
                  </span>
                </p>
                <p>
                  <span className="[word-break:break-word] font-['Instrument_Serif:Italic'] italic leading-[110px] text-[#7a0d3b] text-[104px] tracking-[-2.08px]">
                    first tap
                  </span>
                  <span className="leading-[100px] text-[96px]">.</span>
                </p>
              </div>
              <p
                className="font-['Geist:Regular'] font-normal leading-[32px] relative shrink-0 text-[#6e5b63] text-[20px] tracking-[-0.1px] w-[640px]"
                data-node-id="346:329"
              >{`UI/UX & Product Designer focused on dashboards, SaaS and mobile apps — accessible (WCAG AA) interfaces that turn complex flows into one clear next step.`}</p>
            </div>
          </div>
          <div
            className="border-[#1a0e14] border-solid border-t content-stretch flex gap-[64px] items-end overflow-clip pt-[64px] relative shrink-0 w-full"
            data-node-id="346:330"
            data-name="Bottom"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center overflow-clip relative shrink-0 w-[264px]"
              data-node-id="346:331"
              data-name="Focus"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] uppercase w-full"
                data-node-id="346:332"
              >
                Focus
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#1a0e14] text-[16px] w-full"
                data-node-id="346:333"
              >{`Mobile · Web & SaaS · Dashboards`}</p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative"
              data-node-id="346:334"
              data-name="Experience"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] uppercase w-full"
                data-node-id="346:335"
              >
                Experience
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#1a0e14] text-[16px] w-full"
                data-node-id="346:336"
              >
                3+ years · 20+ projects
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative"
              data-node-id="346:337"
              data-name="Currently"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] uppercase w-full"
                data-node-id="346:338"
              >
                Currently
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#1a0e14] text-[16px] w-full"
                data-node-id="346:339"
              >
                UI/UX Designer at Terafort
              </p>
            </div>
            <div
              className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0"
              data-node-id="346:340"
              data-name="CTAs"
            >
              <button
                className="bg-[#1a0e14] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
                data-node-id="346:341"
                data-name="CTA/Work"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                  data-node-id="I346:341;3:42"
                >
                  View case studies
                </p>
                <div
                  className="relative shrink-0 size-[16px]"
                  data-node-id="I346:341;3:43"
                  data-name="icon/arrow"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgIconArrow}
                  />
                </div>
              </button>
              <a
                className="border-[#1a0e14] border-[1.2px] border-solid content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
                data-node-id="346:342"
                data-name="Button"
                download
                href="/Kanza-Iqbal-Product-Designer.pdf"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                  data-node-id="I346:342;3:50"
                >
                  Download CV
                </p>
              </a>
            </div>
          </div>
          <div
            className="absolute flex h-[501px] items-center justify-center right-[270px] top-[263px] w-[500px]"
            data-node-id="346:343"
          >
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[501px] relative w-[484px]" data-name="image 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[104.93%] left-[-8.58%] max-w-none top-[-4.93%] w-[108.58%]"
                    src={imgImage1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DesignerStrip />
        <div
          className="bg-white content-stretch flex flex-col items-start overflow-clip px-0 pt-[64px] pb-[128px] relative shrink-0 w-full"
          data-node-id="346:348"
          data-name="Selected work"
        >
          <div
            className="[word-break:break-word] content-stretch flex items-end justify-between relative shrink-0 w-full"
            data-node-id="346:349"
            data-name="Section Header"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:Medium'] font-medium gap-[16px] items-start min-w-px overflow-clip relative"
              data-node-id="I346:349;7:144"
              data-name="Left"
            >
              <p
                className="leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="I346:349;7:145"
              >
                (Selected work)
              </p>
              <p
                className="leading-[60px] min-w-full relative shrink-0 text-[#1a0e14] text-[56px] tracking-[-1.68px] w-[min-content]"
                data-node-id="I346:349;7:146"
              >
                Case studies, not just screens.
              </p>
            </div>
            <p
              className="font-['Geist:Regular'] font-normal leading-[32px] relative shrink-0 text-[#6e5b63] text-[20px] tracking-[-0.1px] w-[440px]"
              data-node-id="I346:349;7:147"
            >
              For every project: the problem, the decisions I made and why, and
              what changed.
            </p>
          </div>
          <HomeCaseStudies />
        </div>
        <div
          className="bg-[#f8f4f2] content-stretch flex flex-col items-start overflow-visible px-0 py-[89px] relative shrink-0 w-full"
          data-node-id="346:398"
          data-name="Testimonials"
        >
          <div
            className="content-stretch flex gap-[124px] items-center overflow-visible relative shrink-0 w-full"
            data-node-id="346:399"
            data-name="Split"
          >
            <div
              className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[340px]"
              data-node-id="346:400"
              data-name="Left"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:401"
              >
                (Kind words)
              </p>
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] min-w-full relative shrink-0 text-[#1a0e14] text-[56px] tracking-[-1.68px] w-[min-content]"
                data-node-id="346:402"
              >
                What people say about working with me.
              </p>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]"
                data-node-id="346:403"
              >{`Recommendations from managers, colleagues and clients. `}</p>
              <div
                className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full"
                data-node-id="346:404"
                data-name="Legend"
              >
                {(["All", "CEO", "Colleagues"] as const).map((group) => (
                  <button
                    aria-pressed={testimonialGroup === group}
                    className={`testimonial-filter ${
                      testimonialGroup === group ? "is-active" : ""
                    }`}
                    data-name={`Testimonials/${group}`}
                    key={group}
                    onClick={() => {
                      setTestimonialGroup(group)
                      setTestimonialIndex(0)
                    }}
                    type="button"
                  >
                    {group}
                  </button>
                ))}
              </div>
              <div
                className="content-stretch flex gap-[16px] items-center overflow-clip pt-[8px] relative shrink-0"
                data-node-id="346:408"
                data-name="Deck controls"
              >
                <button
                  aria-label="Previous testimonial"
                  className="testimonial-arrow testimonial-arrow--previous"
                  data-node-id="346:409"
                  data-name="Arrow ←"
                  onClick={() =>
                    setTestimonialIndex(
                      (testimonialIndex - 1 + visibleTestimonials.length) %
                        visibleTestimonials.length,
                    )
                  }
                  type="button"
                >
                  ←
                </button>
                <div
                  className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0"
                  data-node-id="346:411"
                  data-name="Dots"
                >
                  {visibleTestimonials.map((testimonial, index) => (
                    <button
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      aria-current={
                        testimonialIndex === index ? "true" : undefined
                      }
                      className={`testimonial-dot ${
                        testimonialIndex === index ? "is-active" : ""
                      }`}
                      key={testimonial.name}
                      onClick={() => setTestimonialIndex(index)}
                      type="button"
                    />
                  ))}
                </div>
                <button
                  aria-label="Next testimonial"
                  className="testimonial-arrow testimonial-arrow--next"
                  data-node-id="346:415"
                  data-name="Arrow →"
                  onClick={() =>
                    setTestimonialIndex(
                      (testimonialIndex + 1) % visibleTestimonials.length,
                    )
                  }
                  type="button"
                >
                  →
                </button>
              </div>
            </div>
            <div
              className="h-[850px] relative shrink-0 w-[840px]"
              data-node-id="346:417"
              data-name="Testimonial deck"
            >
              <div
                className="absolute flex h-[70px] items-center justify-center left-[50.9px] top-[450px] w-[820px]"
                data-node-id="346:418"
              >
                <div className="flex-none rotate-[2deg]">
                  <div
                    className="bg-[#f4e3d6] h-[460px] relative rounded-[32px] w-[800px]"
                    data-name="Stack card · back 2"
                  />
                </div>
              </div>
              <div
                className="absolute flex h-[650px] items-center justify-center left-[70px] top-[120px] w-[820px]"
                data-node-id="346:419"
              >
                <div className="-rotate-2 flex-none">
                  <div
                    className="bg-[#ead3de] h-[500px] relative rounded-[32px] w-[800px]"
                    data-name="Stack card · back 1"
                  />
                </div>
              </div>
              <div
                className="testimonial-card absolute content-stretch drop-shadow-[0px_24px_24px_rgba(77,13,38,0.1)] flex flex-col h-[550px] items-start justify-between left-[40px] pb-[40px] pt-[100px] px-[56px] rounded-[32px] top-[120px] w-[820px]"
                data-node-id="346:420"
                data-name="Stack card · front"
                key={activeTestimonial.name}
                style={{ backgroundColor: activeTestimonial.color }}
              >
                <p
                  className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[40px] relative shrink-0 text-[#1a0e14] text-[24px] tracking-[-0.48px] w-[582px]"
                  data-node-id="346:421"
                >
                  {activeTestimonial.quote}
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Instrument_Serif:Italic'] italic leading-[140px] left-[710px] text-[200px] text-[rgba(122,13,59,0.18)] top-[60px] whitespace-nowrap"
                  data-node-id="346:422"
                >
                  ”
                </p>
                <div
                  className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full"
                  data-node-id="346:423"
                  data-name="Person"
                >
                  <div
                    className="bg-[#1a0e14] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]"
                    data-node-id="346:424"
                    data-name="Avatar"
                  >
                    <p
                      className="[word-break:break-word] font-['Instrument_Serif:Italic'] italic leading-[normal] relative shrink-0 text-[22px] text-white whitespace-nowrap"
                      data-node-id="346:425"
                    >
                      {activeTestimonial.initials}
                    </p>
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px overflow-clip relative whitespace-nowrap"
                    data-node-id="346:426"
                    data-name="Name & role"
                  >
                    <p
                      className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1a0e14] text-[17px]"
                      data-node-id="346:427"
                    >
                      {activeTestimonial.name}
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[14px]"
                      data-node-id="346:428"
                    >
                      {activeTestimonial.role}
                    </p>
                  </div>
                  <div
                    className="border border-[rgba(122,13,59,0.5)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[999px] shrink-0"
                    data-node-id="346:429"
                    data-name="Relationship"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[13px] whitespace-nowrap"
                      data-node-id="346:430"
                    >
                      {activeTestimonial.group}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WorkedWithStrip />
        <div
          className="bg-white content-stretch flex items-start overflow-clip px-0 py-[72px] relative shrink-0 w-full"
          data-node-id="346:450"
          data-name="Services"
        >
          <div className="home-services__layout">
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[260px]"
              data-node-id="346:451"
              data-name="Left"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:452"
              >
                (What I do)
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]"
                data-node-id="346:453"
              >
                Four ways I can help your product — from the first question to a
                build-ready file.
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
              data-node-id="346:454"
              data-name="List"
            >
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full"
              data-node-id="346:455"
              data-name="Service/Product & UX Design"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]"
                data-node-id="I346:455;80:1507"
              >{`Product & UX Design`}</p>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]"
                data-node-id="I346:455;80:1508"
              >
                I map the whole flow before drawing a screen, so every step has
                a reason to exist.
              </p>
              <div
                className="bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
                data-node-id="I346:455;80:1509"
                data-name="Arrow"
              >
                <div
                  className="relative shrink-0 size-[16px]"
                  data-node-id="I346:455;80:1510"
                  data-name="Frame"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgFrame}
                  />
                </div>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full"
              data-node-id="346:456"
              data-name="Service/Mobile App Design"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]"
                data-node-id="I346:456;80:1507"
              >
                Mobile App Design
              </p>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]"
                data-node-id="I346:456;80:1508"
              >
                iOS and Android screens that feel easy from the very first tap.
              </p>
              <div
                className="bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
                data-node-id="I346:456;80:1509"
                data-name="Arrow"
              >
                <div
                  className="relative shrink-0 size-[16px]"
                  data-node-id="I346:456;80:1510"
                  data-name="Frame"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgFrame}
                  />
                </div>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full"
              data-node-id="346:457"
              data-name="Service/Dashboards & SaaS"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]"
                data-node-id="I346:457;80:1507"
              >{`Dashboards & SaaS`}</p>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]"
                data-node-id="I346:457;80:1508"
              >
                Dense data turned into calm tables, filters and charts teams can
                actually work in.
              </p>
              <div
                className="bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
                data-node-id="I346:457;80:1509"
                data-name="Arrow"
              >
                <div
                  className="relative shrink-0 size-[16px]"
                  data-node-id="I346:457;80:1510"
                  data-name="Frame"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgFrame}
                  />
                </div>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full"
              data-node-id="346:458"
              data-name="Service/Design Systems & Handoff"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]"
                data-node-id="I346:458;80:1507"
              >{`Design Systems & Handoff`}</p>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]"
                data-node-id="I346:458;80:1508"
              >
                Components, tokens and specs, so developers build exactly what
                was designed.
              </p>
              <div
                className="bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
                data-node-id="I346:458;80:1509"
                data-name="Arrow"
              >
                <div
                  className="relative shrink-0 size-[16px]"
                  data-node-id="I346:458;80:1510"
                  data-name="Frame"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgFrame}
                  />
                </div>
              </div>
            </div>
            <div
              className="bg-[#e7dadd] h-px relative shrink-0 w-full"
              data-node-id="346:459"
              data-name="Bottom line"
            />
            <div
              className="content-stretch flex items-start overflow-clip pt-[40px] relative shrink-0"
              data-node-id="346:460"
              data-name="Button row"
            >
              <div
                className="border-[#1a0e14] border-[1.2px] border-solid content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
                data-node-id="346:461"
                data-name="CTA/Process"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                  data-node-id="I346:461;3:50"
                >
                  See how I work
                </p>
                <div
                  className="relative shrink-0 size-[16px]"
                  data-node-id="I346:461;3:51"
                  data-name="icon/arrow"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgIconArrow1}
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#1a0e14] content-stretch flex flex-col gap-[90px] items-start pb-[80px] pt-[60px] px-[270px] relative shrink-0 w-full"
          data-node-id="346:752"
          data-name="Footer (mine)"
        >
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#f6dae5] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
            data-node-id="346:753"
          >
            Got something in mind?
          </p>
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-white tracking-[-7px] whitespace-nowrap"
            data-node-id="346:754"
          >
            <span className="leading-[133px] text-[140px]">{`Let’s work `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-[133px] text-[#f6dae5] text-[150px] tracking-[-3px]">
              together.
            </span>
          </p>
          <div
            className="content-stretch flex gap-[16px] items-center overflow-clip pt-[8px] relative shrink-0"
            data-node-id="346:755"
            data-name="Email row"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap"
              data-node-id="346:756"
            >
              kannyqb@gmail.com
            </p>
            <div
              className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
              data-node-id="346:757"
              data-name="Copy email (icon)"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="346:758"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame4}
                />
              </div>
            </div>
            <a
              className="border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[11px] relative rounded-[999px] shrink-0"
              data-node-id="346:761"
              data-name="CTA/LinkedIn"
              href="https://www.linkedin.com/in/kanza-iqbal"
              rel="noreferrer"
              target="_blank"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="346:762"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame5}
                />
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap"
                data-node-id="346:764"
              >
                LinkedIn
              </p>
              <div
                className="relative shrink-0 size-[14px]"
                data-node-id="346:765"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame6}
                />
              </div>
            </a>
          </div>
          <div
            className="[word-break:break-word] border-solid border-t border-white content-stretch flex gap-[48px] items-start overflow-clip pt-[56px] relative shrink-0 text-white w-full whitespace-nowrap"
            data-node-id="346:767"
            data-name="Columns"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="346:768"
              data-name="Local time"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="346:769"
              >
                Based in
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="346:770"
              >
                Lahore,Pakistan
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="346:771"
              >
                Usually replies within 1 working day
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="346:772"
              data-name="Socials"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="346:773"
              >
                Elsewhere
              </p>
              <a
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="346:774"
                href="https://www.behance.net/kanzaiqbal13"
                rel="noreferrer"
                target="_blank"
              >
                Behance ↗
              </a>
              <a
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                href="https://www.linkedin.com/in/kanza-iqbal"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn ↗
              </a>
              <a
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="346:775"
                href="https://www.fiverr.com/s/9dGANYe"
                rel="noreferrer"
                target="_blank"
              >
                Fiverr ↗
              </a>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="346:776"
              data-name="More"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="346:777"
              >
                More
              </p>
              <a
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="346:778"
                download
                href="/Kanza-Iqbal-Product-Designer.pdf"
              >
                Resume (PDF) ↓
              </a>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="346:779"
              >{`Privacy & Impressum`}</p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap"
            data-node-id="346:780"
            data-name="Bottom bar"
          >
            <p
              className="relative shrink-0"
              data-node-id="346:781"
            >{`© 2026 Kanza Iqbal · Designed & built with care in Lahore,Pakistan`}</p>
            <p className="relative shrink-0" data-node-id="346:782">
              Back to top ↑
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
