import Link from "next/link"
import type { ReactNode } from "react"

export type CaseStudyConfig = {
  number: string
  title: string
  subtitle: string
  cover: string
  meta: { label: string; value: string }[]
  overview: string
  role: string[]
  problem: string
  problemDetail: string
  insight: string
  process: string
  phases: { title: string; detail: string }[]
  flows: {
    title: string
    tint: string
    screens: {
      label: string
      title: string
      detail: string
      image?: string
      preview?: {
        metricLabel: string
        metricValue: string
        rows: { title: string; detail: string; value: string }[]
        action: string
      }
    }[]
  }[]
  research?: {
    lead: string
    tags: string[]
    findings: { title: string; detail: string }[]
  }
  problemStepsHeading?: string
  problemSteps?: { title: string; detail: string }[]
  homeFeature?: {
    lead: string
    image: string
    points: { title: string; detail: string }[]
  }
  comparison?: { image: string; alt: string }
  states?: { lead: string; images: string[] }
  decisions: { title: string; detail: string }[]
  accessibility?: {
    sections: { title: string; details: string[] }[]
  }
  outcomeLabel?: string
  outcomeSignals?: string[]
  outcome: string
  learned?: { title: string; detail: string }[]
  next: { href: string; title: string; subtitle: string; image: string }
}

function Section({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      data-name="Section/Case study"
      className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
    >
      <h2
        data-name="Label"
        className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] w-[240px]"
      >
        {title}
      </h2>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative">
        {children}
      </div>
    </section>
  )
}

function PhonePreview({
  label,
  title,
  detail,
  tint,
  image,
  preview,
}: {
  label: string
  title: string
  detail: string
  tint: string
  image?: string
  preview?: {
    metricLabel: string
    metricValue: string
    rows: { title: string; detail: string; value: string }[]
    action: string
  }
}) {
  if (image) {
    return (
      <img
        role="img"
        aria-label={`${label} screen: ${title}`}
        src={image}
        className="h-auto w-full max-w-[130px] flex-none object-contain"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${label} screen preview: ${title}`}
      className="flex-none w-[190px] overflow-hidden rounded-[30px] border-[7px] border-[#1a0e14] bg-white p-[10px] shadow-[0_16px_30px_rgba(26,14,20,0.12)]"
    >
      <div className="mb-[14px] flex h-[14px] items-center justify-center">
        <div className="h-[5px] w-[48px] rounded-full bg-[#1a0e14]" />
      </div>
      {preview ? (
        <div className="flex min-h-[330px] flex-col gap-[10px] rounded-[16px] bg-[#fbf9f8] p-[10px]">
          <div className="flex items-center justify-between">
            <p className="font-['Geist:Medium'] text-[9px] text-[#1a0e14]">
              Freelance Ops
            </p>
            <span className="size-[18px] rounded-full" style={{ backgroundColor: tint }} />
          </div>
          <div>
            <p className="font-['Geist:Medium'] text-[13px] leading-[18px] text-[#1a0e14]">
              {title}
            </p>
            <p className="mt-[3px] font-['Geist:Regular'] text-[9px] leading-[14px] text-[#6e5b63]">
              {detail}
            </p>
          </div>
          <div className="rounded-[10px] p-[9px]" style={{ backgroundColor: tint }}>
            <p className="font-['Geist:Regular'] text-[8px] text-[#6e5b63]">
              {preview.metricLabel}
            </p>
            <p className="mt-[3px] font-['Geist:Medium'] text-[15px] leading-[19px] text-[#1a0e14]">
              {preview.metricValue}
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            {preview.rows.map((row) => (
              <div
                key={row.title}
                className="rounded-[9px] border border-[#eee7e9] bg-white p-[7px]"
              >
                <div className="flex items-center justify-between gap-[4px]">
                  <p className="font-['Geist:Medium'] text-[8px] text-[#1a0e14]">
                    {row.title}
                  </p>
                  <p className="font-['Geist:Medium'] text-[8px] text-[#167a43]">
                    {row.value}
                  </p>
                </div>
                <p className="mt-[3px] font-['Geist:Regular'] text-[7px] text-[#6e5b63]">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-auto rounded-full bg-[#1a0e14] px-[8px] py-[6px] text-center font-['Geist:Medium'] text-[8px] text-white">
            {preview.action}
          </div>
        </div>
      ) : (
        <div className="flex min-h-[330px] flex-col gap-[12px] rounded-[16px] bg-[#fbf9f8] p-[10px]">
          <div className="flex items-center justify-between">
            <span className="h-[7px] w-[54px] rounded-full bg-[#d8cfd2]" />
            <span className="size-[20px] rounded-full" style={{ backgroundColor: tint }} />
          </div>
          <div>
            <p className="font-['Geist:Medium'] text-[13px] leading-[18px] text-[#1a0e14]">
              {title}
            </p>
            <p className="mt-[3px] font-['Geist:Regular'] text-[9px] leading-[14px] text-[#6e5b63]">
              {detail}
            </p>
          </div>
          <div className="rounded-[12px] p-[10px]" style={{ backgroundColor: tint }}>
            <p className="font-['Geist:Regular'] text-[8px] uppercase tracking-[0.5px] text-[#6e5b63]">
              {label}
            </p>
            <div className="mt-[8px] h-[8px] w-3/4 rounded-full bg-white/80" />
            <div className="mt-[5px] h-[6px] w-1/2 rounded-full bg-white/60" />
          </div>
          <div className="flex gap-[6px]">
            <div className="h-[38px] flex-1 rounded-[9px] border border-[#e7dadd] bg-white p-[7px]">
              <div className="h-[5px] w-2/3 rounded-full bg-[#e7dadd]" />
              <div className="mt-[7px] h-[7px] w-full rounded-full" style={{ backgroundColor: tint }} />
            </div>
            <div className="h-[38px] flex-1 rounded-[9px] border border-[#e7dadd] bg-white p-[7px]">
              <div className="h-[5px] w-1/2 rounded-full bg-[#e7dadd]" />
              <div className="mt-[7px] h-[7px] w-3/4 rounded-full bg-[#f0e9eb]" />
            </div>
          </div>
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center gap-[7px] rounded-[9px] border border-[#eee7e9] bg-white p-[8px]"
            >
              <span className="size-[18px] flex-none rounded-[6px]" style={{ backgroundColor: tint }} />
              <span className="h-[5px] flex-1 rounded-full bg-[#e7dadd]" />
              <span className="h-[5px] w-[20px] rounded-full bg-[#f0e9eb]" />
            </div>
          ))}
          <div className="mt-auto flex justify-around border-t border-[#eee7e9] pt-[9px]">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className="size-[9px] rounded-[3px] bg-[#d8cfd2]" />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CaseStudyTemplate({
  config,
}: {
  config: CaseStudyConfig
}) {
  return (
    <div
      className="bg-[#f8f4f2] content-stretch flex flex-col items-start relative size-full"
      data-name={`Case/${config.title}`}
    >
      <nav
        data-name="Nav"
        className="bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
      >
        <Link
          href="/"
          className="font-['Geist:Medium'] text-[20px] tracking-[-0.2px] whitespace-nowrap"
        >
          <span className="text-[#1a0e14]">Kanza Iqbal</span>
          <span className="text-[#7a0d3b]">.</span>
        </Link>
        <div data-name="Links" className="flex gap-[40px] text-[16px] whitespace-nowrap">
          <Link href="/work" className="font-['Geist:Medium'] text-[#7a0d3b] underline">
            Work
          </Link>
          <Link href="/about" className="font-['Geist:Regular'] text-[#1a0e14]">
            About
          </Link>
          <Link href="/contact" className="font-['Geist:Regular'] text-[#1a0e14]">
            Contact
          </Link>
        </div>
        <div data-name="Right" className="flex items-center gap-[20px]">
          <p className="font-['Geist:Regular'] text-[14px] text-[#6e5b63] whitespace-nowrap">
            Lahore · PKT
          </p>
          <Link
            data-name="CTA"
            href="/contact"
            className="bg-[#1a0e14] rounded-[999px] px-[24px] py-[15px] font-['Geist:Medium'] text-[15px] text-white whitespace-nowrap"
          >
            Let’s talk
          </Link>
        </div>
      </nav>

      <div
        data-name="Cover + title card"
        className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative shrink-0 w-full"
      >
        <div
          data-name="Cover"
          className="h-[780px] overflow-clip relative rounded-[32px] shrink-0 w-full"
        >
          <img
            alt={`${config.title} app preview`}
            src={config.cover}
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full"
          />
          <div
            data-name="Title card"
            className="absolute bg-[rgba(248,244,242,0.94)] content-stretch flex flex-col gap-[12px] items-start left-[64px] p-[36px] rounded-[28px] top-[426px] w-[560px]"
          >
            <div className="flex items-center gap-[8px]">
              <p className="font-['Geist:Regular'] text-[13px] text-[#6e5b63]">
                Case study · {config.number}
              </p>
              <span className="rounded-full bg-[#e5f5ec] px-[12px] py-[6px] font-['Geist:Regular'] text-[13px] text-[#167a43]">
                Shipped
              </span>
            </div>
            <h1 className="font-['Geist:Medium'] text-[64px] leading-[66px] tracking-[-2.56px] text-[#1a0e14]">
              {config.title}
            </h1>
            <p className="font-['Geist:Regular'] text-[17px] leading-[26px] text-[#6e5b63]">
              {config.subtitle}
            </p>
            <div className="flex w-full gap-[16px] border-t border-[#e7dadd] pt-[16px] font-['Geist:Medium'] text-[14px] text-[#7a0d3b]">
              <a href="#problem">Problem ↓</a>
              <a href="#flows">Flows ↓</a>
              <a href="#decisions">Decisions ↓</a>
              <a href="#outcome">Outcome ↓</a>
            </div>
          </div>
        </div>
      </div>

      <div
        data-name="Meta"
        className="content-stretch flex flex-col items-start pt-[40px] px-[270px] relative shrink-0 w-full"
      >
        <div
          data-name="Meta"
          className="flex w-full items-start border-t border-[#e7dadd] pt-[24px]"
        >
          {config.meta.map((item) => (
            <div key={item.label} className="flex-[1_0_0] pr-[20px]">
              <p className="font-['Geist:Regular'] text-[13px] text-[#6e5b63]">{item.label}</p>
              <p className="mt-[4px] font-['Geist:Medium'] text-[15px] leading-[21px] text-[#1a0e14]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <main
        data-name="Body"
        className="content-stretch flex flex-col gap-[80px] items-start px-[270px] py-[96px] relative shrink-0 w-full"
      >
        <Section title="Overview">
          <p className="font-['Geist:Regular'] text-[20px] leading-[31px] text-[#6e5b63]">
            {config.overview}
          </p>
          <p className="font-['Geist:Medium'] text-[11px] tracking-[0.88px] text-[#6e5b63]">
            MY ROLE
          </p>
          {config.role.map((item) => (
            <div key={item} className="flex w-full items-center gap-[14px]">
              <span className="size-[6px] rounded-full bg-[#7a0d3b]" />
              <p className="font-['Geist:Regular'] text-[18px] leading-[28px] text-[#1a0e14]">
                {item}
              </p>
            </div>
          ))}
        </Section>

        <Section id="problem" title="The problem">
          <p className="font-['Geist:Medium'] text-[28px] leading-[34px] tracking-[-0.56px] text-[#1a0e14]">
            {config.problem}
          </p>
          <p className="font-['Geist:Regular'] text-[19px] leading-[30px] text-[#6e5b63]">
            {config.problemDetail}
          </p>
          {!config.problemSteps && (
            <div className="flex w-full gap-[10px] rounded-[14px] bg-[#f6dae5] px-[16px] py-[12px] text-[#7a0d3b]">
              <span className="font-['Geist:Medium']">!</span>
              <p className="font-['Geist:Regular'] text-[15px] leading-[20px]">{config.insight}</p>
            </div>
          )}
          {config.problemSteps && (
            <div className="w-full rounded-[18px] border border-[#e7dadd] bg-white p-[20px]">
              <p className="font-['Geist:Medium'] text-[10px] tracking-[0.7px] text-[#6e5b63]">
                {config.problemStepsHeading}
              </p>
              <div className="mt-[12px] grid grid-cols-4 gap-[10px] max-[650px]:grid-cols-2">
                {config.problemSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[12px] bg-[#f2e9eb] p-[12px]">
                    <p className="font-['Geist:Medium'] text-[10px] text-[#7a0d3b]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-[5px] font-['Geist:Medium'] text-[13px] text-[#1a0e14]">
                      {step.title}
                    </p>
                    <p className="mt-[4px] font-['Geist:Regular'] text-[11px] leading-[16px] text-[#6e5b63]">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-[10px] rounded-[8px] bg-[#f6dae5] px-[10px] py-[8px] font-['Geist:Regular'] text-[11px] leading-[16px] text-[#7a0d3b]">
                ! Missing at every step: one live view of every home — and proof the work was done.
              </p>
            </div>
          )}
        </Section>

        {config.research && (
          <Section id="research" title="Research">
            <p className="font-['Geist:Medium'] text-[18px] leading-[24px] text-[#1a0e14]">
              {config.research.lead}
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {config.research.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#e7dadd] bg-white px-[12px] py-[5px] font-['Geist:Regular'] text-[11px] text-[#1a0e14]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {config.research.findings.map((finding, index) => (
              <div
                key={finding.title}
                className="w-full border-t border-[#e7dadd] pt-[14px]"
              >
                <p className="font-['Geist:Medium'] text-[14px] leading-[20px] text-[#1a0e14]">
                  <span className="mr-[8px] text-[11px] text-[#7a0d3b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {finding.title}
                </p>
                <p className="mt-[4px] font-['Geist:Regular'] text-[13px] leading-[19px] text-[#6e5b63]">
                  {finding.detail}
                </p>
              </div>
            ))}
          </Section>
        )}

        <Section title="Process">
          <p className="font-['Geist:Medium'] text-[26px] leading-[32px] tracking-[-0.52px] text-[#1a0e14]">
            {config.process}
          </p>
          <div data-name="Phases" className="flex w-full items-start">
            {config.phases.map((phase, index) => (
              <div
                key={phase.title}
                className={`flex-[1_0_0] border-t-2 ${
                  index === 1 ? "border-[#7a0d3b]" : "border-[#e7dadd]"
                } border-solid pr-[24px] pt-[16px]`}
              >
                <p className="font-['Instrument_Serif:Italic'] italic text-[24px] text-[#7a0d3b]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-[10px] font-['Geist:Medium'] text-[18px] leading-[24px] text-[#1a0e14]">
                  {phase.title}
                </p>
                <p className="mt-[8px] font-['Geist:Regular'] text-[15px] leading-[22px] text-[#6e5b63]">
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <section id="flows" data-name="Section/Case study" className="flex w-full flex-col gap-[20px]">
          <h2 data-name="Label" className="font-['Geist:Medium'] text-[22px] text-[#1a0e14]">
            Key flows
          </h2>
          <div className="flex w-full flex-col gap-[24px]">
            {config.flows.map((flow) => (
              <div
                key={flow.title}
                className="flex w-full flex-col gap-[16px] rounded-[24px] px-[40px] py-[36px]"
                style={{ backgroundColor: flow.tint }}
              >
                <p className="font-['Geist:Medium'] text-[11px] tracking-[0.88px] text-[#6e5b63]">
                  {flow.title}
                </p>
                <div
                  data-name="Phones"
                  className={
                    flow.screens.some((screen) => screen.image)
                      ? "flex w-full items-start justify-between gap-[12px]"
                      : "flex w-full gap-[24px] overflow-x-auto pb-[8px]"
                  }
                >
                  {flow.screens.map((screen, index) => (
                    <div
                      key={screen.label}
                      className={`flex min-w-0 flex-none flex-col items-center gap-[12px] ${
                        screen.image
                          ? flow.screens.length === 5
                            ? "w-[17%]"
                            : "w-[22%]"
                          : ""
                      }`}
                    >
                      <PhonePreview
                        label={screen.label}
                        title={screen.title}
                        detail={screen.detail}
                        tint={flow.tint}
                        image={screen.image}
                        preview={screen.preview}
                      />
                      <p className="font-['Geist:Regular'] text-[14px] text-[#1a0e14]">
                        <span className="font-['Geist:Medium'] text-[#7a0d3b]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {` · ${screen.label}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {config.homeFeature && (
          <Section id="home" title="Home">
            <p className="font-['Geist:Medium'] text-[21px] leading-[28px] text-[#1a0e14]">
              {config.homeFeature.lead}
            </p>
            <div className="grid w-full grid-cols-[minmax(160px,0.8fr)_1.2fr] items-center gap-[28px] rounded-[24px] bg-[#dce7f8] px-[28px] py-[24px] max-[767px]:grid-cols-1">
              <img
                src={config.homeFeature.image}
                alt="Maisonette estate dashboard on a phone"
                className="mx-auto max-h-[360px] w-full max-w-[250px] rounded-[16px] object-contain"
              />
              <div className="flex flex-col gap-[18px]">
                {config.homeFeature.points.map((point, index) => (
                  <div key={point.title} className="flex items-start gap-[12px]">
                    <span className="flex size-[24px] flex-none items-center justify-center rounded-full bg-[#7a0d3b] font-['Geist:Medium'] text-[12px] text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-['Geist:Medium'] text-[14px] text-[#1a0e14]">
                        {point.title}
                      </p>
                      <p className="mt-[3px] font-['Geist:Regular'] text-[12px] leading-[17px] text-[#6e5b63]">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {config.comparison && (
          <Section title="Wireframe to final">
            <img
              src={config.comparison.image}
              alt={config.comparison.alt}
              className="w-full rounded-[24px]"
            />
          </Section>
        )}

        {config.states && (
          <section
            data-name="Section/Case study"
            className="flex w-full flex-col gap-[18px]"
          >
            <div>
              <h2 data-name="Label" className="font-['Geist:Medium'] text-[22px] text-[#1a0e14]">
                States
              </h2>
              <p className="mt-[8px] font-['Geist:Medium'] text-[18px] leading-[24px] text-[#1a0e14]">
                {config.states.lead}
              </p>
            </div>
            <div className="flex w-full items-start justify-between gap-[14px] overflow-x-auto">
              {config.states.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Maisonette visit status ${index + 1}`}
                  className="w-[18%] min-w-[125px] flex-none rounded-[18px]"
                />
              ))}
            </div>
          </section>
        )}

        <Section title="Key decisions">
          {config.decisions.map((decision, index) => (
            <div
              id={index === 0 ? "decisions" : undefined}
              key={decision.title}
              className="flex w-full flex-col gap-[8px] border-t border-[#e7dadd] pt-[20px]"
            >
              <p className="font-['Geist:Medium'] text-[14px] text-[#7a0d3b]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-['Geist:Medium'] text-[22px] leading-[28px] tracking-[-0.22px] text-[#1a0e14]">
                {decision.title}
              </h3>
              <p className="font-['Geist:Regular'] text-[16px] leading-[24px] text-[#6e5b63]">
                {decision.detail}
              </p>
            </div>
          ))}
        </Section>

        {config.accessibility && (
          <Section title="Accessibility & privacy">
            <div className="grid w-full grid-cols-2 gap-[32px] max-[767px]:grid-cols-1">
              {config.accessibility.sections.map((group) => (
                <div key={group.title}>
                  <h3 className="font-['Geist:Medium'] text-[14px] text-[#1a0e14]">
                    {group.title}
                  </h3>
                  <ul className="mt-[8px] flex flex-col gap-[6px]">
                    {group.details.map((detail) => (
                      <li
                        key={detail}
                        className="font-['Geist:Regular'] text-[12px] leading-[18px] text-[#1a0e14]"
                      >
                        ✓ {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section id="outcome" title="Outcome">
          <p className="font-['Geist:Medium'] text-[15px] text-[#1a0e14]">
            {config.outcomeLabel ?? "Shipped experience"}
          </p>
          <p className="font-['Geist:Regular'] text-[19px] leading-[30px] text-[#6e5b63]">
            {config.outcome}
          </p>
          <div className="flex w-full flex-col gap-[14px] rounded-[18px] bg-[#f6dae5] p-[24px]">
            <p className="font-['Geist:Medium'] text-[14px] text-[#7a0d3b]">
              {config.outcomeSignals ? "What I'll track" : "Design principles"}
            </p>
            {config.outcomeSignals ? (
              <div className="flex flex-col gap-[7px]">
                {config.outcomeSignals.map((signal, index) => (
                  <p key={signal} className="font-['Geist:Regular'] text-[13px] leading-[19px] text-[#1a0e14]">
                    <span className="mr-[10px] font-['Geist:Medium'] text-[#7a0d3b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {signal}
                  </p>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-[20px]">
                {config.decisions.map((decision, index) => (
                  <div key={decision.title}>
                    <p className="font-['Instrument_Serif:Italic'] italic text-[24px] text-[#7a0d3b]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-[4px] font-['Geist:Medium'] text-[15px] text-[#1a0e14]">
                      {decision.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>

        {config.learned && (
          <Section title="What I learned">
            {config.learned.map((lesson, index) => (
              <div
                key={lesson.title}
                className="w-full border-t border-[#e7dadd] pt-[14px]"
              >
                <p className="font-['Geist:Medium'] text-[14px] text-[#1a0e14]">
                  <span className="mr-[8px] text-[11px] text-[#7a0d3b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {lesson.title}
                </p>
                <p className="mt-[5px] font-['Geist:Regular'] text-[13px] leading-[19px] text-[#6e5b63]">
                  {lesson.detail}
                </p>
              </div>
            ))}
          </Section>
        )}
      </main>

      <div
        data-name="Next"
        className="content-stretch flex flex-col items-start px-[270px] pb-[120px] relative shrink-0 w-full"
      >
        <Link
          href={config.next.href}
          className="flex w-full items-center gap-[24px] border-t border-[#e7dadd] pt-[64px]"
        >
          <div className="flex flex-[1_0_0] flex-col gap-[6px]">
            <p className="font-['Geist:Regular'] text-[14px] text-[#6e5b63]">Next case study</p>
            <p className="font-['Geist:Medium'] text-[56px] leading-[58px] tracking-[-2.24px] text-[#1a0e14]">
              {config.next.title}
            </p>
            <p className="font-['Geist:Regular'] text-[17px] text-[#6e5b63]">
              {config.next.subtitle}
            </p>
          </div>
          <div className="relative h-[170px] w-[260px] flex-none overflow-hidden rounded-[16px]">
            <img
              alt=""
              src={config.next.image}
              className="absolute size-full max-w-none rounded-[16px] object-cover"
            />
          </div>
          <span className="font-['Geist:Medium'] text-[48px] text-[#7a0d3b]">→</span>
        </Link>
      </div>

      <footer
        data-name="Footer (mine)"
        className="bg-[#1a0e14] flex w-full flex-col items-start gap-[40px] px-[270px] pb-[40px] pt-[128px]"
      >
        <p className="font-['Geist:Medium'] text-[12px] uppercase tracking-[0.72px] text-[#f6dae5]">
          Got something in mind?
        </p>
        <p className="font-['Geist:Medium'] text-[0px] tracking-[-7px] text-white">
          <span className="text-[140px] leading-[132px]">Let’s work </span>
          <span className="font-['Instrument_Serif:Italic'] text-[150px] leading-[96px] italic tracking-[-3px] text-[#f6dae5]">
            together.
          </span>
        </p>
        <Link
          href="mailto:kannyqb@gmail.com"
          className="font-['Geist:Medium'] text-[56px] leading-[60px] tracking-[-1.68px] text-white"
        >
          kannyqb@gmail.com
        </Link>
        <div className="flex w-full justify-between border-t border-white pt-[40px] font-['Geist:Regular'] text-[14px] text-white">
          <p>© 2026 Kanza Iqbal · Designed & built with care in Lahore</p>
          <Link href="/work">Back to work ↑</Link>
        </div>
      </footer>
    </div>
  )
}
