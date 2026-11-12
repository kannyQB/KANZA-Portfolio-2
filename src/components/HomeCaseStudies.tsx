import Link from "next/link"

import BeforeAfterSlider from "@/components/BeforeAfterSlider"

type CaseStudyKpi = {
  value: string
  label: string
}

type CaseStudy = {
  number: string

  name: string

  subtitle: string

  status: "Shipped" | "Concept"

  statusColor: string

  background: string

  tags: string[]

  image: string

  beforeImage?: string

  kpis: CaseStudyKpi[]

  problem: string

  work: string

  outcome: string

  href: string
}

const caseStudies = [
  {
    number: "01",

    name: "Screen Mirroring",

    subtitle: "Cast Your Phone to Any TV",

    status: "Shipped",

    statusColor: "#e5f5ec",

    background: "#f6dae5",

    tags: ["Mobile app", "Android", "2026"],

    image: "/assets/39efb.png",

    beforeImage: "/assets/eae9d.png",

    kpis: [
      { value: "3", label: "core tools on Home" },

      { value: "1-tap", label: "connect" },

      { value: "4", label: "connection states" },
    ],

    problem:
      "Casting apps hide the connection step — people get stuck finding their TV before they can mirror anything.",

    work: "A Home that always shows the TV connection first, with Mirror, Cast and Remote as one-tap cards.",

    outcome: "Shipped at Terafort in 2026 with 10K+ downloads on Google Play.",

    href: "/work/screen-mirroring",
  },

  {
    number: "02",

    name: "AI Face Aging",

    subtitle: "See Your Future Self",

    status: "Shipped",

    statusColor: "#e5f5ec",

    background: "#eee6f6",

    tags: ["Mobile app", "AI", "2026"],

    image: "/assets/9b1d5.png",
    beforeImage: "/assets/dd0d7.png",

    kpis: [
      { value: "AI", label: "age progression" },

      { value: "Photo", label: "based preview" },

      { value: "Mobile", label: "experience" },
    ],

    problem:
      "People need a simple, approachable way to explore an AI-generated view of their future appearance.",

    work: "Designed an end-to-end mobile experience for choosing a photo and viewing an age-progression result.",

    outcome:
      "Shipped as an AI-powered mobile app with a clear path from photo selection to preview.",

    href: "/work/ai-face-aging",
  },

  {
    number: "03",

    name: "Maisonette",

    subtitle: "Luxury Estate Command Center",

    status: "Shipped",

    statusColor: "#e5f5ec",

    background: "#e3eef6",

    tags: ["SaaS", "Real estate", "2026"],

    image: "/assets/9972b.png",
    beforeImage:"/assets/7f452.png",

    kpis: [
      { value: "Luxury", label: "estate focus" },

      { value: "Central", label: "command view" },

      { value: "SaaS", label: "experience" },
    ],

    problem:
      "Luxury estate teams need a clearer way to oversee their properties and the work around them.",

    work: "Designed a command-center experience that brings estate operations into a focused, easy-to-scan interface.",

    outcome:
      "Delivered a shipped SaaS experience for luxury real-estate operations.",

    href: "/work/maisonette",
  },

  {
    number: "04",

    name: "Freelance Ops",

    subtitle: "Business Tools for Freelancers",

    status: "Shipped",

    statusColor: "#e5f5ec",

    background: "#f8e5da",

    tags: ["Mobile app", "Fintech", "2025"],

    image: "/assets/37738.png",
    beforeImage: "/assets/08cb5.png",

    kpis: [
      { value: "Business", label: "toolkit" },

      { value: "Finance", label: "workflows" },

      { value: "Mobile", label: "app" },
    ],

    problem:
      "Independent freelancers need practical business tools that fit the way they manage work on the go.",

    work: "Designed a mobile app that brings everyday freelance business tasks into one approachable experience.",

    outcome: "Shipped as a mobile app and published on Google Play.",

    href: "/work/freelance-ops",
  },

  {
    number: "05",

    name: "Vigil",

    subtitle: "A Safety Command Platform",

    status: "Concept",

    statusColor: "#f6dae5",

    background: "#f5e4ea",

    tags: ["B2B SaaS", "Safety", "2026"],

    image: "/assets/1da72.png",

    beforeImage: "/assets/976ff.png",

    kpis: [
      { value: "Live", label: "incident view" },

      { value: "SOS", label: "alert handling" },

      { value: "3", label: "response actions" },
    ],

    problem:
      "Emergency control-room operators need a clear way to assess SOS alerts and coordinate a response.",

    work: "Designed a live command platform linking alerts to operator actions: call, assign, or escalate.",

    outcome:
      "A safety-platform concept with a focused live view for control-room operators.",

    href: "/work/vigil",
  },
] as const satisfies readonly CaseStudy[]

function StatusBadge({
  status,

  background,
}: {
  status: CaseStudy["status"]

  background: string
}) {
  const color = status === "Shipped" ? "#1f9d57" : "#7a0d3b"

  return (
    <div
      className="content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
      style={{ backgroundColor: background }}
    >
      <span
        aria-hidden="true"
        className="size-[7px] rounded-full"
        style={{ backgroundColor: color }}
      />
      <span
        className="font-['Geist:Regular'] text-[14px] leading-[22px] whitespace-nowrap"
        style={{ color }}
      >
        {status}
      </span>
    </div>
  )
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      className="case-study-card bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[32px] items-start p-[48px] relative rounded-[40px] shrink-0 w-full"
      data-name={`Case card/${study.name}`}
      style={{ backgroundColor: study.background }}
    >
      <div
        className="content-stretch flex items-center justify-between relative shrink-0 w-full"
        data-name="Card top"
      >
        <p className="font-['Geist:Medium'] text-[#7a0d3b] text-[12px] leading-[16px] tracking-[0.72px] uppercase whitespace-nowrap">
          (Case study · {study.number})
        </p>
        <StatusBadge background={study.statusColor} status={study.status} />
      </div>

      <div
        className="case-study-card__layout flex gap-[56px] relative w-full"
        data-name="Feature/Website Redesign"
      >
        <div
          className={`case-study-card__media ${
            study.beforeImage ? "" : "case-study-card__media--stand-in"
          }`}
        >
          <BeforeAfterSlider
            after={study.image}
            aspectRatio={600 / 513}
            before={study.beforeImage ?? study.image}
            ariaLabel={`Compare the ${study.name} wireframe with the final interface`}
          />
        </div>
        <div
          className="case-study-card__content flex flex-col gap-[24px] items-start relative"
          data-name="Text"
        >
          <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0">
            {study.tags.map((tag) => (
              <span
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0 font-['Geist:Regular'] text-[#6e5b63] text-[14px] leading-[22px] whitespace-nowrap"
                data-name="Tag"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="case-study-card__title font-['Geist:Medium'] font-medium text-[#1a0e14] tracking-[-1.68px] m-0">
            <span>{study.name} - </span>
            <span className="text-[#6e5b63] font-normal tracking-[-0.84px]">
              {study.subtitle}
            </span>
          </h3>

          <div
            className="case-study-card__kpis content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full"
            data-name="KPI chips"
          >
            {study.kpis.map((kpi) => (
              <div
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0"
                data-name="KPI"
                key={`${kpi.value}-${kpi.label}`}
              >
                <span className="font-['Geist:Medium'] text-[#7a0d3b] text-[13px]">
                  {kpi.value}
                </span>
                <span className="font-['Geist:Regular'] text-[#6e5b63] text-[13px]">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>

          {([
            ["Problem", study.problem],

            ["What I did", study.work],

            ["Outcome", study.outcome],
          ] as const)

            .map(([heading, copy]) => (
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0 w-full"
                data-name={heading}
                key={heading}
              >
                <p className="font-['Geist:Medium'] text-[#7a0d3b] text-[12px] leading-[16px] tracking-[0.72px] uppercase">
                  {heading}
                </p>
                <p className="font-['Geist:Regular'] text-[#6e5b63] text-[16px] leading-[26px] m-0">
                  {copy}
                </p>
              </div>
            ))}

          <Link
            className="bg-[#1a0e14] content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0 text-[15px] leading-[20px] text-white no-underline"
            data-name="CTA/Case"
            href={study.href}
          >
            Read case study
            <img
              alt=""
              aria-hidden="true"
              className="size-[16px]"
              src="/assets/c3095.svg"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function HomeCaseStudies() {
  return (
    <div className="case-study-stack">
      <div className="case-study-stack__cards">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.number} study={study} />
        ))}
      </div>
      <div className="case-study-stack__footer">
        <Link
          className="featured-cases__all"
          data-name="CTA/AllWork"
          href="/work"
        >
          All case studies <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  )
}