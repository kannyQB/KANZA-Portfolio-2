const assetPathPrefix = "/assets"
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgFrame = `${assetPathPrefix}/e726a.svg`
const imgEllipse = `${assetPathPrefix}/6e26b.svg`
const imgFrame1 = `${assetPathPrefix}/acea1.svg`
const imgFrame2 = `${assetPathPrefix}/fa4e2.svg`
const imgFrame3 = `${assetPathPrefix}/71d32.svg`
const imgFrame4 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame5 = `${assetPathPrefix}/764f1.svg`
const imgFrame6 = `${assetPathPrefix}/39cd9.svg`
const quotes = [
  { text: "A sharp eye for clean aesthetics.", author: "Izzah Khawar, iOS Developer" },
  { text: "Intuitive, visually appealing designs.", author: "Syed Shayan Naqvi, Mentor" },
  { text: "User-friendly and easy to implement.", author: "Munib ur Rehman, Product Manager" },
  { text: "Clean, professional designs with great attention to detail.", author: "Muhammad Ali, CEO, Design by Ali" },
]

function QuoteMarquee() {
  const items = [...quotes, ...quotes]

  return (
    <div className="w-full overflow-hidden whitespace-nowrap border-y border-solid border-[#e7dadd] py-[24px]">
      <div className="marquee-track marquee-quotes items-center gap-[40px]">
        {items.map((q, i) => (
          <div key={i} className="flex shrink-0 items-center gap-[40px] pr-[40px]">
            <div className="flex items-center gap-[14px]">
              <p className="m-0 font-['Instrument_Serif:Italic'] italic text-[44px] leading-normal text-[#1a0e14]">
                “{q.text}”
              </p>
              <p className="m-0 font-['Geist:Regular'] text-[13px] font-normal text-[#6e5b63]">
                — {q.author}
              </p>
            </div>
            <div className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-[#f6dae5]">
              <span className="font-['Geist:Medium'] text-[14px] font-medium text-[#7a0d3b]">✦</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default function AboutRefinedReviewV2V3Eu() {
  return (
    <div
      className="bg-[#f8f4f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="346:493"
      data-name="About — refined (review v2) — v3 EU"
    >
      <div
        className="bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
        data-node-id="346:494"
        data-name="Nav"
      >
        <div
          className="[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
          data-node-id="I346:494;7:113"
          data-name="Logo"
        >
          <p
            className="relative shrink-0 text-[#1a0e14]"
            data-node-id="I346:494;7:114"
          >
            Kanza Iqbal
          </p>
          <p
            className="relative shrink-0 text-[#7a0d3b]"
            data-node-id="I346:494;7:115"
          >
            .
          </p>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[26px] overflow-clip relative shrink-0 text-[16px] whitespace-nowrap"
          data-node-id="I346:494;7:116"
          data-name="Links"
        >
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]"
            data-node-id="I346:494;7:117"
          >
            Work
          </p>
          <p
            className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b] underline"
            data-node-id="I346:494;7:118"
          >
            About
          </p>
          <p
            className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]"
            data-node-id="I346:494;7:120"
          >
            Contact
          </p>
        </div>
        <div
          className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0"
          data-node-id="I346:494;7:121"
          data-name="Right"
        >
          <p
            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
            data-node-id="I346:494;7:122"
          >
            Lahore · PKT
          </p>
          <div
            className="bg-[#1a0e14] content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
            data-node-id="I346:494;7:123"
            data-name="CTA"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap"
              data-node-id="I346:494;7:123;3:42"
            >
              Let’s talk
            </p>
            <div
              className="relative shrink-0 size-[16px]"
              data-node-id="I346:494;7:123;3:43"
              data-name="icon/arrow"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgIconArrow}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col items-start px-[270px] py-[64px] relative shrink-0 w-full"
        data-node-id="346:495"
        data-name="Body"
      >
        <div
          className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full"
          data-node-id="346:496"
          data-name="Columns"
        >
          <div
            className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[18px] items-start p-[28px] sticky top-[24px] rounded-[28px] shrink-0 w-[360px]"
            data-node-id="346:497"
            data-name="Profile card (sticky)"
          >
            <img
              alt="Kanza Iqbal"
              src="/assets/picture.jpg"
              className="h-[400px] w-full rounded-[24px] object-cover"
            />
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[34px] relative shrink-0 text-[#1a0e14] text-[28px] tracking-[-0.56px] whitespace-nowrap"
              data-node-id="346:500"
            >
              Kanza Iqbal
            </p>
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
              data-node-id="346:501"
            >{`UI/UX & Product Designer`}</p>
            <div
              className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] pt-[10px] relative shrink-0 text-[14px] w-full whitespace-nowrap"
              data-node-id="346:502"
              data-name="Location"
            >
              <p
                className="relative shrink-0 text-[#6e5b63]"
                data-node-id="346:503"
              >
                Location
              </p>
              <p
                className="relative shrink-0 text-[#1a0e14]"
                data-node-id="346:504"
              >
                Lahore · PKT (GMT+5)
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] pt-[10px] relative shrink-0 text-[14px] w-full whitespace-nowrap"
              data-node-id="346:505"
              data-name="Email"
            >
              <p
                className="relative shrink-0 text-[#6e5b63]"
                data-node-id="346:506"
              >
                Email
              </p>
              <p
                className="relative shrink-0 text-[#1a0e14]"
                data-node-id="346:507"
              >
                kannyqb@gmail.com
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] pt-[10px] relative shrink-0 text-[14px] w-full whitespace-nowrap"
              data-node-id="346:508"
              data-name="Languages"
            >
              <p
                className="relative shrink-0 text-[#6e5b63]"
                data-node-id="346:509"
              >
                Languages
              </p>
              <p
                className="relative shrink-0 text-[#1a0e14]"
                data-node-id="346:510"
              >
                English · Urdu
              </p>
            </div>
            <div
              className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] pt-[10px] relative shrink-0 text-[14px] w-full whitespace-nowrap"
              data-node-id="346:511"
              data-name="Open to"
            >
              <p
                className="relative shrink-0 text-[#6e5b63]"
                data-node-id="346:512"
              >
                Open to
              </p>
              <p
                className="relative shrink-0 text-[#1a0e14]"
                data-node-id="346:513"
              >{`Full-time & freelance`}</p>
            </div>
            <div
              className="bg-[#1a0e14] content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0 w-full"
              data-node-id="346:514"
              data-name="Button"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-white whitespace-nowrap"
                data-node-id="I346:514;3:42"
              >
                Download CV (PDF)
              </p>
              <div
                className="relative shrink-0 size-[16px]"
                data-node-id="I346:514;3:43"
                data-name="icon/arrow"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgIconArrow}
                />
              </div>
            </div>
          </div>
                    <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative"
            data-node-id="346:515"
            data-name="Main"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
              data-node-id="346:516"
              data-name="Profile"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:517"
              >
                Profile
              </p>
              <p
                className="font-['Geist:Medium'] font-medium leading-[0] min-w-full relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-1.2px] w-[min-content]"
                data-node-id="346:518"
              >
                <span className="leading-[43px] text-[40px]">{`Mobile apps, SaaS dashboards and websites people `}</span>
                <span className="font-['Instrument_Serif:Italic'] italic leading-[43px] text-[#7a0d3b] text-[44px]">
                  understand on the first try
                </span>
                <span className="leading-[43px] text-[40px]">.</span>
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[#6e5b63] text-[20px] tracking-[-0.1px] w-[min-content]"
                data-node-id="346:519"
              >
                <span className="leading-[32px]">{`I’m Kanza, a UI/UX & Product Designer in Lahore. For `}</span>
                <span className="font-['Geist:Bold'] font-bold leading-[32px]">
                  3+ years
                </span>
                <span className="leading-[32px]">{` I’ve designed `}</span>
                <span className="font-['Geist:Bold'] font-bold leading-[32px]">
                  20+ apps and products
                </span>
                <span className="leading-[32px]">{` — from user research to developer-ready handoff — at Terafort, Asapp Studio and Design by Ali.`}</span>
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full"
              data-node-id="346:520"
              data-name="Experience"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:521"
              >
                Experience
              </p>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full"
                data-node-id="346:522"
                data-name="Terafort"
              >
                <div
                  className="content-stretch flex items-start justify-between relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="346:523"
                  data-name="Top"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px]"
                    data-node-id="346:524"
                  >
                    UI/UX Designer · Terafort
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]"
                    data-node-id="346:525"
                  >
                    June 2026 — Present
                  </p>
                </div>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                  data-node-id="346:526"
                >
                  Onsite · Lahore
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#1a0e14] text-[16px] w-[min-content]"
                  data-node-id="346:527"
                >{`— Designing end-to-end UI/UX for AI Face Aging and a screen-cast & mirroring app, currently in development.`}</p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full"
                data-node-id="346:528"
                data-name="Asapp Studio"
              >
                <div
                  className="content-stretch flex items-start justify-between relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="346:529"
                  data-name="Top"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px]"
                    data-node-id="346:530"
                  >
                    UI/UX Designer · Asapp Studio
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]"
                    data-node-id="346:531"
                  >
                    Sep 2025 — Jun 2026
                  </p>
                </div>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                  data-node-id="346:532"
                >
                  Onsite · Lahore
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#1a0e14] text-[16px] w-[min-content]"
                  data-node-id="346:533"
                >{`— Designed and shipped 7 mobile apps, including Freelance Ops (Google Play & App Store) and TypeSnip (1K+ downloads).`}</p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full"
                data-node-id="346:534"
                data-name="Design by Ali"
              >
                <div
                  className="content-stretch flex items-start justify-between relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="346:535"
                  data-name="Top"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px]"
                    data-node-id="346:536"
                  >
                    Product Designer · Design by Ali
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px]"
                    data-node-id="346:537"
                  >
                    Sep 2023 — Present
                  </p>
                </div>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                  data-node-id="346:538"
                >
                  Remote · Freelance
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#1a0e14] text-[16px] w-[min-content]"
                  data-node-id="346:539"
                >
                  — UI design for client products across web and mobile. Most
                  work is under NDA; Maisonette is one shareable example.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full"
              data-node-id="346:540"
              data-name="Skills"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:541"
              >
                Skills
              </p>
              <div
                className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full"
                data-node-id="346:542"
                data-name="Chips"
              >
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:543"
                  data-name="User research"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:544"
                  >
                    User research
                  </p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:545"
                  data-name="User flows & IA"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:546"
                  >{`User flows & IA`}</p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:547"
                  data-name="Wireframing"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:548"
                  >
                    Wireframing
                  </p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:549"
                  data-name="Prototyping"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:550"
                  >
                    Prototyping
                  </p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:551"
                  data-name="Design systems"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:552"
                  >
                    Design systems
                  </p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:553"
                  data-name="Usability testing"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:554"
                  >
                    Usability testing
                  </p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:555"
                  data-name="Accessibility (WCAG AA)"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:556"
                  >
                    Accessibility (WCAG 2.1 AA · EAA)
                  </p>
                </div>
                <div
                  className="border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                  data-node-id="346:557"
                  data-name="Developer handoff"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="346:558"
                  >
                    Developer handoff
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full"
              data-node-id="346:559"
              data-name="Tools"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:560"
              >
                Tools
              </p>
              <div
                className="content-stretch flex gap-[32px] items-stretch relative shrink-0 w-full"
                data-node-id="346:561"
                data-name="Tool groups"
              >
                <div
                  className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px p-[32px] relative rounded-[24px]"
                  data-node-id="346:562"
                  data-name="Design & handoff"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="346:563"
                  >{`Design & handoff`}</p>
                  <div
                    className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full"
                    data-node-id="346:564"
                    data-name="Chips"
                  >
                    <div
                      className="border border-[#e7dadd] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:565"
                      data-name="Figma"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:566"
                      >
                        Figma
                      </p>
                    </div>
                    <div
                      className="border border-[#e7dadd] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:567"
                      data-name="FigJam"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:568"
                      >
                        FigJam
                      </p>
                    </div>
                    <div
                      className="border border-[#e7dadd] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:569"
                      data-name="Dev Mode"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:570"
                      >
                        Dev Mode
                      </p>
                    </div>
                    <div
                      className="border border-[#e7dadd] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:571"
                      data-name="Illustrator"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:572"
                      >
                        Illustrator
                      </p>
                    </div>
                    <div
                      className="border border-[#e7dadd] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:573"
                      data-name="Photoshop"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:574"
                      >
                        Photoshop
                      </p>
                    </div>
                    <div
                      className="border border-[#e7dadd] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:575"
                      data-name="After Effects"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:576"
                      >
                        After Effects
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f6dae5] border border-[#f6dae5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px p-[32px] relative rounded-[24px]"
                  data-node-id="346:577"
                  data-name="AI-assisted"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#7a0d3b] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="346:578"
                  >
                    AI-assisted
                  </p>
                  <div
                    className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full"
                    data-node-id="346:579"
                    data-name="Chips"
                  >
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:580"
                      data-name="ChatGPT"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:581"
                      >
                        ChatGPT
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:582"
                      data-name="Gemini"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:583"
                      >
                        Gemini
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:584"
                      data-name="Claude"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:585"
                      >
                        Claude
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:586"
                      data-name="Figma Make"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:587"
                      >
                        Figma Make
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:588"
                      data-name="Google Stitch"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:589"
                      >
                        Google Stitch
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:590"
                      data-name="Banani AI"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:591"
                      >
                        Banani AI
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:592"
                      data-name="Google Flow"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:593"
                      >
                        Google Flow
                      </p>
                    </div>
                    <div
                      className="bg-white border border-solid border-white content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                      data-node-id="346:594"
                      data-name="Kling AI"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                        data-node-id="346:595"
                      >
                        Kling AI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full whitespace-nowrap"
              data-node-id="346:596"
              data-name="Languages"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase"
                data-node-id="346:597"
              >
                Languages
              </p>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex items-start justify-between pt-[12px] relative shrink-0 w-full"
                data-node-id="346:598"
                data-name="English"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px]"
                  data-node-id="346:599"
                >
                  English
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px]"
                  data-node-id="346:600"
                >
                  C1 · Professional
                </p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex items-start justify-between pt-[12px] relative shrink-0 w-full"
                data-node-id="346:601"
                data-name="Urdu"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px]"
                  data-node-id="346:602"
                >
                  Urdu
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px]"
                  data-node-id="346:603"
                >
                  Native
                </p>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Medium'] font-medium gap-[18px] items-start relative shrink-0 w-full"
              data-node-id="346:604"
              data-name="Education"
            >
              <p
                className="leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
                data-node-id="346:605"
              >
                Education
              </p>
              <p
                className="leading-[28px] min-w-full relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] w-[min-content]"
                data-node-id="346:606"
              >
                MPhil · The University of Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
                    <QuoteMarquee />
      <div
        className="bg-[#f8f4f2] content-stretch flex flex-col items-start px-[270px] py-[64px] relative shrink-0 w-full"
        data-node-id="346:613"
        data-name="How I work (rows)"
      >
        <div
          className="content-stretch flex flex-col items-start pt-[19px] relative shrink-0 w-full"
          data-node-id="346:614"
        >
          <p
            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#7a0d3b] text-[14px] whitespace-nowrap"
            data-node-id="346:615"
          >
            How I work
          </p>
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="346:616"
          >
            <div
              className="[word-break:break-word] content-stretch flex gap-[50px] items-center justify-end pb-[56px] pt-[20px] relative shrink-0 w-full"
              data-node-id="346:617"
              data-name="Head"
            >
              <p
                className="flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-3.04px]"
                data-node-id="346:618"
              >
                <span className="leading-[80px] text-[76px]">{`Three things I `}</span>
                <span className="font-['Instrument_Serif:Italic'] italic leading-[80px] text-[#7a0d3b] text-[82px]">
                  always
                </span>
                <span className="leading-[80px] text-[76px]">{` do`}</span>
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[18px] w-[420px]"
                data-node-id="346:619"
              >
                Every project is different, but these three habits show up in
                all of them.
              </p>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[48px] items-center justify-end py-[44px] relative shrink-0 w-full"
              data-node-id="346:620"
              data-name="Row/Understand"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-1.92px]"
                data-node-id="346:621"
              >
                <span className="font-['Instrument_Serif:Italic'] italic leading-[67px] text-[#7a0d3b] text-[48px] tracking-[-0.48px]">
                  Understand
                </span>
                <span className="leading-[67px] text-[48px]">{` the people`}</span>
              </p>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]"
                data-node-id="346:622"
                data-name="Text"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[18px] w-full"
                  data-node-id="346:623"
                >
                  I don’t start designing until I know who the product is for
                  and where they get stuck. A few honest conversations save
                  weeks of rework.
                </p>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[48px] items-center justify-end py-[44px] relative shrink-0 w-full"
              data-node-id="346:624"
              data-name="Row/Simplify"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-1.92px]"
                data-node-id="346:625"
              >
                <span className="font-['Instrument_Serif:Italic'] italic leading-[67px] text-[#7a0d3b] text-[48px] tracking-[-0.48px]">
                  Simplify
                </span>
                <span className="leading-[67px] text-[48px]">{` every step`}</span>
              </p>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]"
                data-node-id="346:626"
                data-name="Text"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[18px] w-full"
                  data-node-id="346:627"
                >
                  I map the whole flow and remove every step, word and choice
                  that doesn’t help the main task — until it feels obvious.
                </p>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[48px] items-center justify-end py-[44px] relative shrink-0 w-full"
              data-node-id="346:628"
              data-name="Row/Prove"
            >
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-1.92px]"
                data-node-id="346:629"
              >
                <span className="font-['Instrument_Serif:Italic'] italic leading-[67px] text-[#7a0d3b] text-[48px] tracking-[-0.48px]">
                  Prove
                </span>
                <span className="leading-[67px] text-[48px]">{` it with users`}</span>
              </p>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]"
                data-node-id="346:630"
                data-name="Text"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[18px] w-full"
                  data-node-id="346:631"
                >
                  I test with users whenever I can, fix what confuses them, and
                  hand developers files they don’t have to guess about.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#e7dadd] h-px relative shrink-0 w-full"
          data-node-id="346:632"
          data-name="Rectangle"
        />
      </div>
      <div
        className="bg-[#f8f4f2] content-stretch flex flex-col h-[1150px] items-start overflow-clip px-[270px] py-[64px] relative shrink-0 w-full"
        data-node-id="346:633"
        data-name="What I do — How I can help"
      >
        <div
          className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
          data-node-id="346:634"
        >
          <div
            className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
            data-node-id="346:635"
          >
            <p
              className="[word-break:break-word] col-1 font-['Geist:Regular'] font-normal leading-[normal] ml-[4px] mt-[36.6px] relative row-1 text-[#7a0d3b] text-[14px] whitespace-nowrap"
              data-node-id="346:636"
            >
              What I do
            </p>
            <p
              className="[word-break:break-word] col-1 font-['Geist:Medium'] font-medium ml-0 mt-[74.6px] relative row-1 text-[#1a0e14] text-[0px] tracking-[-5.6px] whitespace-nowrap"
              data-node-id="346:637"
            >
              <span className="leading-[96px] text-[92px]">{`How I can `}</span>
              <span className="font-['Instrument_Serif:Italic'] italic leading-[96px] text-[#7a0d3b] text-[100px] tracking-[-1px]">
                help
              </span>
            </p>
            <p
              className="[word-break:break-word] col-1 font-['Geist:Regular'] font-normal leading-[30px] ml-[4px] mt-[664.6px] relative row-1 text-[#6e5b63] text-[20px] w-[420px]"
              data-node-id="346:638"
            >
              From the first user interview to the final handoff to developers —
              I can help at any stage.
            </p>
            <div
              className="col-1 flex h-[770.983px] items-center justify-center ml-[551.38px] mt-[54.6px] relative row-1 w-[520.475px]"
              data-node-id="346:639"
            >
              <div className="flex-none rotate-4">
                <div
                  className="bg-[#e8defa] content-stretch flex flex-col h-[740px] items-start justify-between pb-[48px] pt-[40px] px-[40px] relative rounded-[40px] w-[470px]"
                  data-name="Card/UX Research & Strategy"
                >
                  <div
                    className="bg-[#1a0e14] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[60px]"
                    data-node-id="346:640"
                    data-name="Icon"
                  >
                    <div
                      className="relative shrink-0 size-[22px]"
                      data-node-id="346:641"
                      data-name="Frame"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgFrame}
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="346:643"
                    data-name="Bottom"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[50px] min-w-full relative shrink-0 text-[#1a0e14] text-[48px] tracking-[-1.92px] w-[min-content]"
                      data-node-id="346:644"
                    >{`UX Research & Strategy`}</p>
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[18px] w-[min-content]"
                      data-node-id="346:645"
                    >
                      User interviews and heuristic audits that show exactly
                      where people get stuck — and what to fix first.
                    </p>
                    <div
                      className="bg-[rgba(0,0,0,0.12)] h-px relative shrink-0 w-full"
                      data-node-id="346:646"
                      data-name="Rectangle"
                    />
                    <div
                      className="content-stretch flex flex-col gap-[10px] items-start pt-[8px] relative shrink-0"
                      data-node-id="346:647"
                      data-name="Bullets"
                    >
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:648"
                        data-name="User interviews & personas"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:649"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:650"
                        >{`User interviews & personas`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:651"
                        data-name="Heuristic & competitor audits"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:652"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:653"
                        >{`Heuristic & competitor audits`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:654"
                        data-name="User flows & IA"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:655"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:656"
                        >{`User flows & IA`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:657"
                        data-name="Usability testing"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:658"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:659"
                        >
                          Usability testing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-1 flex h-[763.584px] items-center justify-center ml-[1103px] mt-0 relative row-1 w-[508.084px]"
              data-node-id="346:660"
            >
              <div className="-rotate-3 flex-none">
                <div
                  className="bg-[#fbe2d2] content-stretch flex flex-col h-[740px] items-start justify-between pb-[48px] pt-[40px] px-[40px] relative rounded-[40px] w-[470px]"
                  data-name="Card/UI & Interaction Design"
                >
                  <div
                    className="bg-[#1a0e14] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[60px]"
                    data-node-id="346:661"
                    data-name="Icon"
                  >
                    <div
                      className="relative shrink-0 size-[22px]"
                      data-node-id="346:662"
                      data-name="Frame"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgFrame1}
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="346:664"
                    data-name="Bottom"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[50px] min-w-full relative shrink-0 text-[#1a0e14] text-[48px] tracking-[-1.92px] w-[min-content]"
                      data-node-id="346:665"
                    >{`UI & Interaction Design`}</p>
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[18px] w-[min-content]"
                      data-node-id="346:666"
                    >
                      Dashboard modules, navigation flows and responsive screens
                      — every state designed and ready to build.
                    </p>
                    <div
                      className="bg-[rgba(0,0,0,0.12)] h-px relative shrink-0 w-full"
                      data-node-id="346:667"
                      data-name="Rectangle"
                    />
                    <div
                      className="content-stretch flex flex-col gap-[10px] items-start pt-[8px] relative shrink-0"
                      data-node-id="346:668"
                      data-name="Bullets"
                    >
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:669"
                        data-name="Wireframes & prototypes"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:670"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:671"
                        >{`Wireframes & prototypes`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:672"
                        data-name="High-fidelity UI & design systems"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:673"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:674"
                        >{`High-fidelity UI & design systems`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:675"
                        data-name="Motion & micro-interactions"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:676"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:677"
                        >{`Motion & micro-interactions`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:678"
                        data-name="Accessibility: WCAG 2.1 AA (EAA-ready)"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:679"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:680"
                        >
                          Accessibility: WCAG 2.1 AA (EAA-ready)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-1 flex h-[755.952px] items-center justify-center ml-[1577.17px] mt-[54.6px] relative row-1 w-[495.539px]"
              data-node-id="346:681"
            >
              <div className="flex-none rotate-2">
                <div
                  className="bg-[#d7f0e6] content-stretch flex flex-col h-[740px] items-start justify-between pb-[48px] pt-[40px] px-[40px] relative rounded-[40px] w-[470px]"
                  data-name="Card/AI-Assisted Design"
                >
                  <div
                    className="bg-[#1a0e14] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[60px]"
                    data-node-id="346:682"
                    data-name="Icon"
                  >
                    <div
                      className="relative shrink-0 size-[22px]"
                      data-node-id="346:683"
                      data-name="Frame"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgFrame2}
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="346:685"
                    data-name="Bottom"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[50px] min-w-full relative shrink-0 text-[#1a0e14] text-[48px] tracking-[-1.92px] w-[min-content]"
                      data-node-id="346:686"
                    >
                      AI-Assisted Design
                    </p>
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[18px] w-[min-content]"
                      data-node-id="346:687"
                    >
                      AI helps me explore more options and move faster.
                      Research, judgement and final decisions stay human.
                    </p>
                    <div
                      className="bg-[rgba(0,0,0,0.12)] h-px relative shrink-0 w-full"
                      data-node-id="346:688"
                      data-name="Rectangle"
                    />
                    <div
                      className="content-stretch flex flex-col gap-[10px] items-start pt-[8px] relative shrink-0"
                      data-node-id="346:689"
                      data-name="Bullets"
                    >
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:690"
                        data-name="AI design tooling"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:691"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:692"
                        >
                          AI design tooling
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:693"
                        data-name="Rapid concepting"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:694"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:695"
                        >
                          Rapid concepting
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:696"
                        data-name="Agentic workflows"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:697"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:698"
                        >
                          Agentic workflows
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:699"
                        data-name="Automation of repeat tasks"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:700"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:701"
                        >
                          Automation of repeat tasks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-1 flex h-[755.952px] items-center justify-center ml-[2103px] mt-[8.2px] relative row-1 w-[495.539px]"
              data-node-id="346:702"
            >
              <div className="-rotate-2 flex-none">
                <div
                  className="bg-[#dfe7fb] content-stretch flex flex-col h-[740px] items-start justify-between pb-[48px] pt-[40px] px-[40px] relative rounded-[40px] w-[470px]"
                  data-name="Card/Growth & Marketing Graphics"
                >
                  <div
                    className="bg-[#1a0e14] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[60px]"
                    data-node-id="346:703"
                    data-name="Icon"
                  >
                    <div
                      className="relative shrink-0 size-[22px]"
                      data-node-id="346:704"
                      data-name="Frame"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgFrame3}
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="346:706"
                    data-name="Bottom"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[50px] min-w-full relative shrink-0 text-[#1a0e14] text-[48px] tracking-[-1.92px] w-[min-content]"
                      data-node-id="346:707"
                    >{`Growth & Marketing Graphics`}</p>
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[18px] w-[min-content]"
                      data-node-id="346:708"
                    >
                      Store screenshots, launch visuals and ads that turn
                      curious visitors into users.
                    </p>
                    <div
                      className="bg-[rgba(0,0,0,0.12)] h-px relative shrink-0 w-full"
                      data-node-id="346:709"
                      data-name="Rectangle"
                    />
                    <div
                      className="content-stretch flex flex-col gap-[10px] items-start pt-[8px] relative shrink-0"
                      data-node-id="346:710"
                      data-name="Bullets"
                    >
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:711"
                        data-name="Store & launch creatives"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:712"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:713"
                        >{`Store & launch creatives`}</p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:714"
                        data-name="Digital ads"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:715"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:716"
                        >
                          Digital ads
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:717"
                        data-name="Feature graphics"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:718"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:719"
                        >
                          Feature graphics
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[12px] items-center relative shrink-0"
                        data-node-id="346:720"
                        data-name="Brand assets"
                      >
                        <div
                          className="relative shrink-0 size-[6px]"
                          data-node-id="346:721"
                          data-name="Ellipse"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgEllipse}
                          />
                        </div>
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap"
                          data-node-id="346:722"
                        >
                          Brand assets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="[word-break:break-word] col-1 font-['Geist:Regular'] font-normal leading-[normal] ml-[4px] mt-[774.6px] relative row-1 text-[#6e5b63] text-[14px] whitespace-nowrap"
              data-node-id="346:723"
            >
              Swipe to explore →
            </p>
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
          <div
            className="border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[11px] relative rounded-[999px] shrink-0"
            data-node-id="346:761"
            data-name="CTA/LinkedIn"
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
          </div>
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
              Lahore — 14:30 PKT (GMT+5)
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
            <p
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="346:774"
            >
              Behance ↗
            </p>
            <p
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="346:775"
            >
              Fiverr ↗
            </p>
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
            <p
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="346:778"
            >
              Resume (PDF) ↓
            </p>
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
          >{`© 2026 Kanza Iqbal · Designed & built with care in Lahore`}</p>
          <p className="relative shrink-0" data-node-id="346:782">
            Back to top ↑
          </p>
        </div>
      </div>
    </div>
  )
}
