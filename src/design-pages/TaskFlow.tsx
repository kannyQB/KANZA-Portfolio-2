import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import Link from "next/link"

const assetPathPrefix = "/assets"
const imgCover = `${assetPathPrefix}/5fbd8.png`
const imgAiFaceAging = `${assetPathPrefix}/9b1d5.png`
const imgTaskFlowFinal = `${assetPathPrefix}/f0670.png`
const imgTaskFlowWireframe = `${assetPathPrefix}/31aef.png`
const imgScreenPasteBoardKanban = `${assetPathPrefix}/60420.png`
const imgScreenPasteReports = `${assetPathPrefix}/dc492.png`
const imgTaskFlow = `${assetPathPrefix}/9b1d5.png`
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgEllipse = `${assetPathPrefix}/2323f.svg`
const imgEllipse1 = `${assetPathPrefix}/4f157.svg`
const imgEllipse2 = `${assetPathPrefix}/90035.svg`
const imgEllipse3 = `${assetPathPrefix}/f5214.svg`
const imgEllipse4 = `${assetPathPrefix}/735cf.svg`
const imgEllipse5 = `${assetPathPrefix}/bbff2.svg`
const imgEllipse6 = `${assetPathPrefix}/a8753.svg`
const imgEllipse7 = `${assetPathPrefix}/7d698.svg`
const imgFrame = `${assetPathPrefix}/d4cb8.svg`
const imgFrame1 = `${assetPathPrefix}/764f1.svg`
const imgFrame2 = `${assetPathPrefix}/39cd9.svg`

function BrowserMockup({
  url,
  src,
}: {
  url: string
  src: string
}) {
  return (
    <div className="bg-white flex flex-[1_0_0] flex-col min-w-0 overflow-clip rounded-[14px] shadow-[0px_16px_36px_0px_rgba(26,0,13,0.12)]">
      <div className="border-[#e7dadd] border-b border-solid flex gap-[6px] items-center px-[14px] py-[10px] shrink-0 w-full">
        <img alt="" className="block size-[9px]" src={imgEllipse4} />
        <img alt="" className="block size-[9px]" src={imgEllipse5} />
        <img alt="" className="block size-[9px]" src={imgEllipse6} />
        <div className="bg-[#0b1220] flex flex-[1_0_0] items-center justify-center min-w-px px-[10px] py-[4px] rounded-[999px]"/>
        <a>
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] text-[11px] text-white whitespace-nowrap">
            {url}
          </p>
        </a>
      </div>
      <img alt="" className="block h-auto w-full" src={src} />
    </div>
  )
}

export default function CaseStudyTaskFlowDashboardTemplate() {
  return (
    <div
      className="bg-[#f8f4f2] content-stretch flex flex-col items-start relative size-full"
      data-node-id="334:8684"
      data-name="Case Study — TaskFlow (Dashboard template)"
    >
      <div
        className="bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
        data-node-id="334:8685"
        data-name="Nav"
      >
        <a
          className="[word-break:break-word] content-stretch cursor-pointer flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] text-left tracking-[-0.2px] whitespace-nowrap"
          data-node-id="I334:8685;7:113"
          data-name="Logo"
        >
          <p
            className="relative shrink-0 text-[#1a0e14]"
            data-node-id="I334:8685;7:114"
          >
            Kanza Iqbal
          </p>
          <p
            className="relative shrink-0 text-[#7a0d3b]"
            data-node-id="I334:8685;7:115"
          >
            .
          </p>
        </a>
        <div
          className="[word-break:break-word] content-stretch cursor-pointer flex gap-[40px] items-start leading-[0] overflow-clip relative shrink-0 text-[16px] whitespace-nowrap"
          data-node-id="I334:8685;7:116"
          data-name="Links"
        >
          <a
            className="block font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b]"
            data-node-id="I334:8685;7:117"
          >
            <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[26px] underline">
              Work
            </p>
          </a>
          <a
            className="block font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]"
            data-node-id="I334:8685;7:118"
          >
            <p className="leading-[26px]">About</p>
          </a>
          <a
            className="block font-['Geist:Regular'] font-normal relative shrink-0 text-[#1a0e14]"
            data-node-id="I334:8685;7:120"
          >
            <p className="leading-[26px]">Contact</p>
          </a>
        </div>
        <div
          className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0"
          data-node-id="I334:8685;7:121"
          data-name="Right"
        >
          <p
            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
            data-node-id="I334:8685;7:122"
          >
            Lahore · PK
          </p>
          <a
            className="bg-[#1a0e14] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
            data-node-id="I334:8685;7:123"
            data-name="CTA"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
              data-node-id="I334:8685;7:123;3:42"
            >
              Let’s talk
            </p>
            <div
              className="relative shrink-0 size-[16px]"
              data-node-id="I334:8685;7:123;3:43"
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
        className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative shrink-0 w-full"
        data-node-id="334:8686"
        data-name="Cover + title card"
      >
        <div
          className="h-[760px] overflow-clip relative rounded-[32px] shrink-0 w-full"
          data-node-id="334:8687"
          data-name="Cover"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[32px] size-full"
            src={imgCover}
          />
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute h-[803px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[1405px]"
            data-node-id="334:8688"
            data-name="image 2"
          />
          <div
            className="absolute backdrop-blur-[12px] bg-[rgba(248,244,242,0.9)] content-stretch flex flex-col gap-[12px] items-start left-[80px] p-[36px] rounded-[28px] top-[384px] w-[640px]"
            data-node-id="334:8689"
            data-name="Title card"
          >
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="334:8690"
              data-name="m"
            >
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap"
                data-node-id="334:8691"
              >
                Case study · 03
              </p>
              <div
                className="bg-[#e5f5ec] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                data-node-id="334:8692"
                data-name="Concept"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#167a43] text-[13px] whitespace-nowrap"
                  data-node-id="334:8693"
                >
                  Shipped
                </p>
              </div>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[88px] relative shrink-0 text-[#1a0e14] text-[88px] tracking-[-4.4px] whitespace-nowrap"
              data-node-id="334:8694"
            >
              TaskFlow
            </p>
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[17px] w-[min-content]"
              data-node-id="334:8695"
            >
              One calm dashboard where teams plan, track and ship work — and
              leads see what’s at risk at a glance.
            </p>
            <div
              className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex font-['Geist:Medium'] font-medium gap-[16px] items-start leading-[normal] pt-[16px] relative shrink-0 text-[#7a0d3b] text-[14px] w-full whitespace-nowrap"
              data-node-id="334:8696"
              data-name="Jump to"
            >
              <p className="relative shrink-0" data-node-id="334:8697">
                Problem ↓
              </p>
              <p className="relative shrink-0" data-node-id="334:8698">
                Research ↓
              </p>
              <p className="relative shrink-0" data-node-id="334:8699">
                Solution ↓
              </p>
              <p className="relative shrink-0" data-node-id="334:8700">
                Outcome ↓
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div
        className="content-stretch flex flex-col items-start pt-[40px] px-[270px] relative shrink-0 w-full"
        data-node-id="334:8702"
        data-name="Meta"
      >
        <div
          className="[word-break:break-word] border-[#e7dadd] border-solid border-t content-stretch flex items-start pt-[24px] relative shrink-0 w-full"
          data-node-id="334:8703"
          data-name="Meta"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative"
            data-node-id="334:8704"
            data-name="Role"
          >
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap"
              data-node-id="334:8705"
            >
              Role
            </p>
            <p
              className="font-['Geist:Medium'] font-medium leading-[21px] min-w-full relative shrink-0 text-[#1a0e14] text-[15px] w-[min-content]"
              data-node-id="334:8706"
            >
              UX/UI designer
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative"
            data-node-id="334:8707"
            data-name="Year"
          >
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap"
              data-node-id="334:8708"
            >
              Year
            </p>
            <p
              className="font-['Geist:Medium'] font-medium leading-[21px] min-w-full relative shrink-0 text-[#1a0e14] text-[15px] w-[min-content]"
              data-node-id="334:8709"
            >
              2026
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative"
            data-node-id="334:8710"
            data-name="Team"
          >
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap"
              data-node-id="334:8711"
            >
              Team
            </p>
            <p
              className="font-['Geist:Medium'] font-medium leading-[21px] min-w-full relative shrink-0 text-[#1a0e14] text-[15px] w-[min-content]"
              data-node-id="334:8712"
            >
              Solo 
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative"
            data-node-id="334:8713"
            data-name="Platform"
          >
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap"
              data-node-id="334:8714"
            >
              Platform
            </p>
            <p
              className="font-['Geist:Medium'] font-medium leading-[21px] min-w-full relative shrink-0 text-[#1a0e14] text-[15px] w-[min-content]"
              data-node-id="334:8715"
            >
              Web app (1440)
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative"
            data-node-id="334:8716"
            data-name="Status"
          >
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[13px] whitespace-nowrap"
              data-node-id="334:8717"
            >
              Status
            </p>
            <p
              className="font-['Geist:Medium'] font-medium leading-[21px] min-w-full relative shrink-0 text-[#1a0e14] text-[15px] w-[min-content]"
              data-node-id="334:8718"
            >
              Shipped
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[64px] items-start pb-[112px] pt-[104px] px-[270px] relative shrink-0 w-full"
        data-node-id="334:8719"
        data-name="Body"
      >
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8720"
          data-name="Section/Overview"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8721"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8722"
            >
              Overview
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative"
            data-node-id="334:8723"
            data-name="c"
          >
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[31px] min-w-full relative shrink-0 text-[#6e5b63] text-[20px] w-[min-content]"
              data-node-id="334:8724"
            >
              TaskFlow is a B2B SaaS workspace where teams plan, track and ship
              work. It brings projects, tasks, deadlines and team activity into
              one dashboard, so leads can see what’s on track, what’s at risk
              and who’s overloaded — without a status meeting. I designed the
              UX, the UI and the design system.
            </p>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[#6e5b63] text-[11px] tracking-[0.88px] whitespace-nowrap"
              data-node-id="334:8725"
            >
              MY ROLE
            </p>
            <div
              className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full"
              data-node-id="334:8726"
              data-name="i"
            >
              <div
                className="relative shrink-0 size-[6px]"
                data-node-id="334:8727"
                data-name="Ellipse"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse}
                />
              </div>
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[28px] min-w-px relative text-[#1a0e14] text-[18px]"
                data-node-id="334:8728"
              >
                Mapped three user roles and the flows each one needs
              </p>
            </div>
            <div
              className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full"
              data-node-id="334:8729"
              data-name="i"
            >
              <div
                className="relative shrink-0 size-[6px]"
                data-node-id="334:8730"
                data-name="Ellipse"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse}
                />
              </div>
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[28px] min-w-px relative text-[#1a0e14] text-[18px]"
                data-node-id="334:8731"
              >
                Designed 24 screens across 9 views: dashboard, board, list,
                timeline, calendar, reports, team, task detail and settings
              </p>
            </div>
            <div
              className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full"
              data-node-id="334:8732"
              data-name="i"
            >
              <div
                className="relative shrink-0 size-[6px]"
                data-node-id="334:8733"
                data-name="Ellipse"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse}
                />
              </div>
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[28px] min-w-px relative text-[#1a0e14] text-[18px]"
                data-node-id="334:8734"
              >
                Built the design system: colour ramps, type scale and reusable
                components
              </p>
            </div>
            <div
              className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full"
              data-node-id="334:8735"
              data-name="i"
            >
              <div
                className="relative shrink-0 size-[6px]"
                data-node-id="334:8736"
                data-name="Ellipse"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse}
                />
              </div>
              <p
                className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[28px] min-w-px relative text-[#1a0e14] text-[18px]"
                data-node-id="334:8737"
              >
                Checked every colour pairing against WCAG 2.1 contrast
              </p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8738"
          data-name="Section/The problem"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8739"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8740"
            >
              The problem
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative"
            data-node-id="334:8741"
            data-name="c"
          >
            <p
              className="font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[#1a0e14] text-[28px] tracking-[-0.84px] w-full"
              data-node-id="334:8742"
            >
              <span className="leading-[34px]">{`Work lives in five places — and leads `}</span>
              <span className="leading-[34px] text-[#7a0d3b]">
                only see problems in the weekly sync
              </span>
              <span className="leading-[34px]">.</span>
            </p>
            <p
              className="font-['Geist:Regular'] font-normal leading-[30px] relative shrink-0 text-[#6e5b63] text-[19px] w-full"
              data-node-id="334:8743"
            >
              Tasks were spread across chats, sheets and personal to-do lists.
              Overdue work surfaced too late, and leads built reports by hand
              instead of unblocking people.
            </p>
            <div
              className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[18px] items-start p-[28px] relative rounded-[24px] shrink-0 w-full"
              data-node-id="334:8744"
              data-name="One SOS today"
            >
              <div
                className="content-stretch flex font-['Geist:Medium'] font-medium items-start justify-between relative shrink-0 w-full whitespace-nowrap"
                data-node-id="334:8745"
                data-name="Head"
              >
                <p
                  className="leading-[14px] relative shrink-0 text-[#6e5b63] text-[11px] tracking-[0.88px]"
                  data-node-id="334:8746"
                >
                  ONE STATUS UPDATE, BEFORE TASKFLOW
                </p>
                <p
                  className="leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px]"
                  data-node-id="334:8747"
                >
                  Repeated every week
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                data-node-id="334:8748"
                data-name="Tools"
              >
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px p-[16px] relative rounded-[16px]"
                  data-node-id="334:8749"
                  data-name="Alarm receiver"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[12px] whitespace-nowrap"
                    data-node-id="334:8750"
                  >
                    01
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                    data-node-id="334:8751"
                  >
                    Team chat
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[18px] min-w-full relative shrink-0 text-[#6e5b63] text-[13px] w-[min-content]"
                    data-node-id="334:8752"
                  >
                    Ask who’s on it
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                  data-node-id="334:8753"
                >
                  →
                </p>
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px p-[16px] relative rounded-[16px]"
                  data-node-id="334:8754"
                  data-name="Map"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[12px] whitespace-nowrap"
                    data-node-id="334:8755"
                  >
                    02
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                    data-node-id="334:8756"
                  >
                    Spreadsheet
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[18px] min-w-full relative shrink-0 text-[#6e5b63] text-[13px] w-[min-content]"
                    data-node-id="334:8757"
                  >
                    Find the deadline
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                  data-node-id="334:8758"
                >
                  →
                </p>
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px p-[16px] relative rounded-[16px]"
                  data-node-id="334:8759"
                  data-name="Phone"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[12px] whitespace-nowrap"
                    data-node-id="334:8760"
                  >
                    03
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                    data-node-id="334:8761"
                  >
                    To-do lists
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[18px] min-w-full relative shrink-0 text-[#6e5b63] text-[13px] w-[min-content]"
                    data-node-id="334:8762"
                  >
                    Check each person’s list
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                  data-node-id="334:8763"
                >
                  →
                </p>
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px p-[16px] relative rounded-[16px]"
                  data-node-id="334:8764"
                  data-name="Spreadsheet"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[12px] whitespace-nowrap"
                    data-node-id="334:8765"
                  >
                    04
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                    data-node-id="334:8766"
                  >
                    Weekly sync
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[18px] min-w-full relative shrink-0 text-[#6e5b63] text-[13px] w-[min-content]"
                    data-node-id="334:8767"
                  >
                    Hear what’s late
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                  data-node-id="334:8768"
                >
                  →
                </p>
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px p-[16px] relative rounded-[16px]"
                  data-node-id="334:8769"
                  data-name="Device portal"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[12px] whitespace-nowrap"
                    data-node-id="334:8770"
                  >
                    05
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                    data-node-id="334:8771"
                  >
                    Manual report
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[18px] min-w-full relative shrink-0 text-[#6e5b63] text-[13px] w-[min-content]"
                    data-node-id="334:8772"
                  >
                    Rebuild it by hand
                  </p>
                </div>
              </div>
              <div
                className="bg-[#f6dae5] content-stretch flex font-['Geist:Medium'] font-medium gap-[10px] items-center px-[16px] py-[12px] relative rounded-[14px] shrink-0 text-[#7a0d3b] w-full"
                data-node-id="334:8773"
                data-name="Gap"
              >
                <p
                  className="flex-[1_0_0] leading-[20px] min-w-px relative text-[15px]"
                  data-node-id="334:8775"
                >
                  Missing everywhere: one shared view of what’s late — and who’s
                  overloaded.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
              data-node-id="334:8776"
              data-name="Numbers"
            >
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px pt-[16px] relative"
                data-node-id="334:8777"
                data-name="5"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[40px] relative shrink-0 text-[#7a0d3b] text-[36px] tracking-[-1.08px] whitespace-nowrap"
                  data-node-id="334:8778"
                >
                  4
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8779"
                >
                  places work was scattered across
                </p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px pt-[16px] relative"
                data-node-id="334:8780"
                data-name="~12 min"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[40px] relative shrink-0 text-[#7a0d3b] text-[36px] tracking-[-1.08px] whitespace-nowrap"
                  data-node-id="334:8781"
                >
                  1×
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8782"
                >
                  a week — when overdue work finally surfaced
                </p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px pt-[16px] relative"
                data-node-id="334:8783"
                data-name="0"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[40px] relative shrink-0 text-[#7a0d3b] text-[36px] tracking-[-1.08px] whitespace-nowrap"
                  data-node-id="334:8784"
                >
                  0
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8785"
                >
                  shared views of team workload
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8786"
          data-name="Section/Research"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8787"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8788"
            >
              Research
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative"
            data-node-id="334:8789"
            data-name="c"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[34px] relative shrink-0 text-[#1a0e14] text-[28px] tracking-[-0.56px] w-full"
              data-node-id="334:8790"
            >
              Before designing, I mapped who uses TaskFlow — and what each
              person needs to see first.
            </p>
            <div
              className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="334:8791"
              data-name="Methods"
            >
              <div
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                data-node-id="334:8792"
                data-name="Desk research"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[13px] whitespace-nowrap"
                  data-node-id="334:8793"
                >
                  Role mapping
                </p>
              </div>
              <div
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                data-node-id="334:8794"
                data-name="Competitor review"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[13px] whitespace-nowrap"
                  data-node-id="334:8795"
                >
                  Competitor review
                </p>
              </div>
              <div
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                data-node-id="334:8796"
                data-name="Workflow mapping"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[13px] whitespace-nowrap"
                  data-node-id="334:8797"
                >
                  User flows
                </p>
              </div>
              <div
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                data-node-id="334:8798"
                data-name="Persona"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[13px] whitespace-nowrap"
                  data-node-id="334:8799"
                >
                  Personas
                </p>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
              data-node-id="334:8800"
              data-name="Persona + insights"
            >
              <div
                className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[10px] items-start p-[24px] relative rounded-[20px] self-stretch shrink-0 w-[300px]"
                data-node-id="334:8801"
                data-name="Persona"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[#7a0d3b] text-[11px] tracking-[0.88px] whitespace-nowrap"
                  data-node-id="334:8802"
                >
                  PERSONA
                </p>
                <p
                  className="font-['Instrument_Serif:Italic'] italic leading-[42px] relative shrink-0 text-[#1a0e14] text-[40px] whitespace-nowrap"
                  data-node-id="334:8803"
                >
                  Ayesha
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                  data-node-id="334:8804"
                >
                  Product / Team Lead
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#1a0e14] text-[15px] w-[min-content]"
                  data-node-id="334:8805"
                >
                  Needs one answer every morning: “Are we going to hit the
                  sprint?”
                </p>
              </div>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative"
                data-node-id="334:8806"
                data-name="Insights"
              >
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[16px] relative shrink-0 w-full"
                  data-node-id="334:8807"
                  data-name="Insight 1"
                >
                  <div
                    className="content-stretch flex font-['Geist:Medium'] font-medium gap-[10px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                    data-node-id="334:8808"
                    data-name="h"
                  >
                    <p
                      className="relative shrink-0 text-[#7a0d3b] text-[13px]"
                      data-node-id="334:8809"
                    >
                      01
                    </p>
                    <p
                      className="relative shrink-0 text-[#1a0e14] text-[18px]"
                      data-node-id="334:8810"
                    >
                      Leads need risk, not raw tasks
                    </p>
                  </div>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                    data-node-id="334:8811"
                  >
                    Portfolio-level KPIs, workload by teammate and reports they
                    can share upward.
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[16px] relative shrink-0 w-full"
                  data-node-id="334:8812"
                  data-name="Insight 2"
                >
                  <div
                    className="content-stretch flex font-['Geist:Medium'] font-medium gap-[10px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                    data-node-id="334:8813"
                    data-name="h"
                  >
                    <p
                      className="relative shrink-0 text-[#7a0d3b] text-[13px]"
                      data-node-id="334:8814"
                    >
                      02
                    </p>
                    <p
                      className="relative shrink-0 text-[#1a0e14] text-[18px]"
                      data-node-id="334:8815"
                    >
                      Makers need their next task
                    </p>
                  </div>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                    data-node-id="334:8816"
                  >
                    Clear priority and due dates, all context on one task page,
                    and fewer pings.
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pt-[16px] relative shrink-0 w-full"
                  data-node-id="334:8817"
                  data-name="Insight 3"
                >
                  <div
                    className="content-stretch flex font-['Geist:Medium'] font-medium gap-[10px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                    data-node-id="334:8818"
                    data-name="h"
                  >
                    <p
                      className="relative shrink-0 text-[#7a0d3b] text-[13px]"
                      data-node-id="334:8819"
                    >
                      03
                    </p>
                    <p
                      className="relative shrink-0 text-[#1a0e14] text-[18px]"
                      data-node-id="334:8820"
                    >
                      Admins need fast setup
                    </p>
                  </div>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                    data-node-id="334:8821"
                  >
                    Invites, roles, billing and integrations in one consistent
                    settings area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8822"
          data-name="Section/Process"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8823"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8824"
            >
              Process
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative"
            data-node-id="334:8825"
            data-name="c"
          >
            <p
              className="font-['Geist:Medium'] font-medium leading-[32px] relative shrink-0 text-[#1a0e14] text-[26px] tracking-[-0.52px] w-full"
              data-node-id="334:8826"
            >
              Four phases — structure first, colour later.
            </p>
            <div
              className="content-stretch flex items-start relative shrink-0 w-full"
              data-node-id="334:8827"
              data-name="Phases"
            >
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pr-[24px] pt-[20px] relative"
                data-node-id="334:8828"
                data-name="Discover"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                  data-node-id="334:8829"
                  data-name="h"
                >
                  <p
                    className="font-['Instrument_Serif:Italic'] italic relative shrink-0 text-[#7a0d3b] text-[24px]"
                    data-node-id="334:8830"
                  >
                    01
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[12px]"
                    data-node-id="334:8831"
                  >
                    Phase 1
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[24px] relative shrink-0 text-[#1a0e14] text-[19px] tracking-[-0.19px] whitespace-nowrap"
                  data-node-id="334:8832"
                >
                  Define
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8833"
                >
                  Three roles, their key questions and three user flows.
                </p>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[18px] min-w-full relative shrink-0 text-[#7a0d3b] text-[13px] w-[min-content]"
                  data-node-id="334:8834"
                >
                  → User flows
                </p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pr-[24px] pt-[20px] relative"
                data-node-id="334:8835"
                data-name="Define"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                  data-node-id="334:8836"
                  data-name="h"
                >
                  <p
                    className="font-['Instrument_Serif:Italic'] italic relative shrink-0 text-[#7a0d3b] text-[24px]"
                    data-node-id="334:8837"
                  >
                    02
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[12px]"
                    data-node-id="334:8838"
                  >
                    Phase 2
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[24px] relative shrink-0 text-[#1a0e14] text-[19px] tracking-[-0.19px] whitespace-nowrap"
                  data-node-id="334:8839"
                >
                  Structure
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8840"
                >
                  Greyscale layouts on a 248px sidebar, 76px topbar and
                  12-column grid.
                </p>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[18px] min-w-full relative shrink-0 text-[#7a0d3b] text-[13px] w-[min-content]"
                  data-node-id="334:8841"
                >
                  → Layout grid
                </p>
              </div>
              <div
                className="border-[#7a0d3b] border-solid border-t-2 content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pr-[24px] pt-[20px] relative"
                data-node-id="334:8842"
                data-name="Design & iterate"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                  data-node-id="334:8843"
                  data-name="h"
                >
                  <p
                    className="font-['Instrument_Serif:Italic'] italic relative shrink-0 text-[#7a0d3b] text-[24px]"
                    data-node-id="334:8844"
                  >
                    03
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[12px]"
                    data-node-id="334:8845"
                  >
                    Phase 3
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[24px] relative shrink-0 text-[#1a0e14] text-[19px] tracking-[-0.19px] whitespace-nowrap"
                  data-node-id="334:8846"
                >
                  Design system
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8847"
                >
                  Teal 50–900 ramps, a 60·30·10 colour split, Outfit + Inter and
                  reusable components.
                </p>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[18px] min-w-full relative shrink-0 text-[#7a0d3b] text-[13px] w-[min-content]"
                  data-node-id="334:8848"
                >
                  → Tokens · components
                </p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pr-[24px] pt-[20px] relative"
                data-node-id="334:8849"
                data-name="Hand off"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 whitespace-nowrap"
                  data-node-id="334:8850"
                  data-name="h"
                >
                  <p
                    className="font-['Instrument_Serif:Italic'] italic relative shrink-0 text-[#7a0d3b] text-[24px]"
                    data-node-id="334:8851"
                  >
                    04
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[12px]"
                    data-node-id="334:8852"
                  >
                    Phase 4
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[24px] relative shrink-0 text-[#1a0e14] text-[19px] tracking-[-0.19px] whitespace-nowrap"
                  data-node-id="334:8853"
                >
                  Screens
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] min-w-full relative shrink-0 text-[#6e5b63] text-[15px] w-[min-content]"
                  data-node-id="334:8854"
                >
                  24 screens across 9 views, all built from the same system.
                </p>
                <p
                  className="font-['Geist:Medium'] font-medium leading-[18px] min-w-full relative shrink-0 text-[#7a0d3b] text-[13px] w-[min-content]"
                  data-node-id="334:8855"
                >
                  → 24 screens
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8856"
          data-name="Section/The solution"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8857"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8858"
            >
              The solution
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative"
            data-node-id="334:8859"
            data-name="c"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[34px] relative shrink-0 text-[#1a0e14] text-[28px] tracking-[-0.56px] w-full"
              data-node-id="334:8860"
            >
              A dashboard that answers “are we on track?” at a glance.
            </p>
            <div
              className="[word-break:break-word] bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[10px] items-start p-[24px] relative rounded-[20px] shrink-0 w-full whitespace-nowrap"
              data-node-id="334:8861"
              data-name="Three zones"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[#6e5b63] text-[11px] tracking-[0.88px]"
                data-node-id="334:8862"
              >
                THE SCREEN
              </p>
              <div
                className="content-stretch flex gap-[10px] items-center leading-[normal] relative shrink-0 w-full"
                data-node-id="334:8863"
                data-name="Zones"
              >
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[18px] relative rounded-[14px]"
                  data-node-id="334:8864"
                  data-name="Live feed"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b] text-[12px]"
                    data-node-id="334:8865"
                  >
                    1
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1a0e14] text-[17px]"
                    data-node-id="334:8866"
                  >
                    KPI cards
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[13px]"
                    data-node-id="334:8867"
                  >
                    Total, in progress, done, overdue
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#6e5b63] text-[18px]"
                  data-node-id="334:8868"
                >
                  →
                </p>
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[18px] relative rounded-[14px]"
                  data-node-id="334:8869"
                  data-name="Situation"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b] text-[12px]"
                    data-node-id="334:8870"
                  >
                    2
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1a0e14] text-[17px]"
                    data-node-id="334:8871"
                  >
                    Work views
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[13px]"
                    data-node-id="334:8872"
                  >
                    Board · list · calendar · timeline
                  </p>
                </div>
                <p
                  className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#6e5b63] text-[18px]"
                  data-node-id="334:8873"
                >
                  →
                </p>
                <div
                  className="bg-[#f1e8e9] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[18px] relative rounded-[14px]"
                  data-node-id="334:8874"
                  data-name="Action"
                >
                  <p
                    className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#7a0d3b] text-[12px]"
                    data-node-id="334:8875"
                  >
                    3
                  </p>
                  <p
                    className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1a0e14] text-[17px]"
                    data-node-id="334:8876"
                  >
                    Team activity
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[13px]"
                    data-node-id="334:8877"
                  >
                    Replaces the daily status meeting
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[10px] items-start p-[24px] relative rounded-[20px] shrink-0 w-full"
              data-node-id="334:8878"
              data-name="Auto-escalation"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[14px] relative shrink-0 text-[#6e5b63] text-[11px] tracking-[0.88px] whitespace-nowrap"
                data-node-id="334:8879"
              >
                QUICK CAPTURE, FROM ANY SCREEN
              </p>
              <div
                className="content-stretch flex items-start relative shrink-0 w-full"
                data-node-id="334:8880"
                data-name="Steps"
              >
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative"
                  data-node-id="334:8881"
                  data-name="Alert received"
                >
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-full"
                    data-node-id="334:8882"
                    data-name="dot"
                  >
                    <div
                      className="relative shrink-0 size-[14px]"
                      data-node-id="334:8883"
                      data-name="Ellipse"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgEllipse1}
                      />
                    </div>
                    <div
                      className="bg-[#e7dadd] flex-[1_0_0] h-[2px] min-w-px relative"
                      data-node-id="334:8884"
                      data-name="Rectangle"
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px] whitespace-nowrap"
                    data-node-id="334:8885"
                  >
                    1
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1a0e14] text-[14px] w-[min-content]"
                    data-node-id="334:8886"
                  >
                    Topbar · New Task
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative"
                  data-node-id="334:8887"
                  data-name="Nearest responder"
                >
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-full"
                    data-node-id="334:8888"
                    data-name="dot"
                  >
                    <div
                      className="relative shrink-0 size-[14px]"
                      data-node-id="334:8889"
                      data-name="Ellipse"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgEllipse1}
                      />
                    </div>
                    <div
                      className="bg-[#e7dadd] flex-[1_0_0] h-[2px] min-w-px relative"
                      data-node-id="334:8890"
                      data-name="Rectangle"
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px] whitespace-nowrap"
                    data-node-id="334:8891"
                  >
                    2
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1a0e14] text-[14px] w-[min-content]"
                    data-node-id="334:8892"
                  >
                    Task modal
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative"
                  data-node-id="334:8893"
                  data-name="Backup responder"
                >
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-full"
                    data-node-id="334:8894"
                    data-name="dot"
                  >
                    <div
                      className="relative shrink-0 size-[14px]"
                      data-node-id="334:8895"
                      data-name="Ellipse"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgEllipse1}
                      />
                    </div>
                    <div
                      className="bg-[#e7dadd] flex-[1_0_0] h-[2px] min-w-px relative"
                      data-node-id="334:8896"
                      data-name="Rectangle"
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px] whitespace-nowrap"
                    data-node-id="334:8897"
                  >
                    3
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1a0e14] text-[14px] w-[min-content]"
                    data-node-id="334:8898"
                  >{`Assign & set due`}</p>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative"
                  data-node-id="334:8899"
                  data-name="Supervisor"
                >
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-full"
                    data-node-id="334:8900"
                    data-name="dot"
                  >
                    <div
                      className="relative shrink-0 size-[14px]"
                      data-node-id="334:8901"
                      data-name="Ellipse"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgEllipse1}
                      />
                    </div>
                    <div
                      className="bg-[#e7dadd] flex-[1_0_0] h-[2px] min-w-px relative"
                      data-node-id="334:8902"
                      data-name="Rectangle"
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px] whitespace-nowrap"
                    data-node-id="334:8903"
                  >
                    4
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1a0e14] text-[14px] w-[min-content]"
                    data-node-id="334:8904"
                  >
                    Appears on the board
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative"
                  data-node-id="334:8905"
                  data-name="Emergency services"
                >
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-full"
                    data-node-id="334:8906"
                    data-name="dot"
                  >
                    <div
                      className="relative shrink-0 size-[14px]"
                      data-node-id="334:8907"
                      data-name="Ellipse"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgEllipse2}
                      />
                    </div>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[13px] whitespace-nowrap"
                    data-node-id="334:8908"
                  >
                    5
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1a0e14] text-[14px] w-[min-content]"
                    data-node-id="334:8909"
                  >
                    Team sees it in activity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8910"
          data-name="Section/Wireframe to final"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8911"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8912"
            >
              Wireframe to final
            </p>
          </div>
          <div
            className="content-stretch flex min-w-0 flex-[1_1_0%] flex-col gap-[9px] items-start relative w-full"
            data-node-id="334:8913"
          >
            <BeforeAfterSlider
              ariaLabel="Compare the TaskFlow wireframe with the final UI"
              aspectRatio={963 / 744}
              before={imgTaskFlowWireframe}
              after={imgTaskFlowFinal}
            />
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[#6e5b63] text-[14px] w-[min-content]"
              data-node-id="334:8926"
            >
              Drag the pink handle to compare the wireframe and final UI.
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8933"
          data-name="Section/Final screens"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-name="Label"
          >
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap">
              Final screens
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-name="c"
          >
            <div
              className="bg-[#f1e8e9] flex gap-[24px] items-start justify-center p-[28px] relative rounded-[24px] w-full max-[900px]:flex-col"
              data-name="Mockups stage"
            >
              <BrowserMockup
                url="app.taskflow.io"
                src={imgScreenPasteBoardKanban}
              />
              <BrowserMockup
                url="app.taskflow.io"
                src={imgScreenPasteReports}
              />
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8962"
          data-name="Section/Key decisions"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8963"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8964"
            >
              Key decisions
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Geist:Medium'] font-medium gap-[20px] items-start min-w-px relative"
            data-node-id="334:8965"
            data-name="c"
          >
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative shrink-0 w-full"
              data-node-id="334:8966"
              data-name="One view, three zones"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#7a0d3b] text-[14px] whitespace-nowrap"
                data-node-id="334:8967"
              >
                01
              </p>
              <p
                className="leading-[30px] relative shrink-0 text-[#1a0e14] text-[24px] tracking-[-0.48px] whitespace-nowrap"
                data-node-id="334:8968"
              >
                KPI cards with trends on first load
              </p>
              <p
                className="leading-[26px] min-w-full relative shrink-0 text-[#1a0e14] text-[17px] w-[min-content]"
                data-node-id="334:8969"
              >
                Why: Leads get “are we on track?” before they scroll — overdue
                and at-risk work is visible, not buried.
              </p>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative shrink-0 w-full"
              data-node-id="334:8970"
              data-name="Actions on every alert card"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#7a0d3b] text-[14px] whitespace-nowrap"
                data-node-id="334:8971"
              >
                02
              </p>
              <p
                className="leading-[30px] relative shrink-0 text-[#1a0e14] text-[24px] tracking-[-0.48px] whitespace-nowrap"
                data-node-id="334:8972"
              >
                One set of tasks, four views
              </p>
              <p
                className="leading-[26px] min-w-full relative shrink-0 text-[#1a0e14] text-[17px] w-[min-content]"
                data-node-id="334:8973"
              >
                Why: Board, list, calendar and timeline show the same data, so
                nobody keeps two versions in sync.
              </p>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative shrink-0 w-full"
              data-node-id="334:8974"
              data-name="Nobody waits"
            >
              <p
                className="leading-[normal] relative shrink-0 text-[#7a0d3b] text-[14px] whitespace-nowrap"
                data-node-id="334:8975"
              >
                03
              </p>
              <p
                className="leading-[30px] relative shrink-0 text-[#1a0e14] text-[24px] tracking-[-0.48px] whitespace-nowrap"
                data-node-id="334:8976"
              >
                “New Task” in the topbar, on every screen
              </p>
              <p
                className="leading-[26px] min-w-full relative shrink-0 text-[#1a0e14] text-[17px] w-[min-content]"
                data-node-id="334:8977"
              >
                Why: Work gets captured the moment it comes up, instead of in a
                chat that gets lost.
              </p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8978"
          data-name="Section/Accessibility & privacy"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8979"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8980"
            >{`Accessibility & privacy`}</p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
            data-node-id="334:8981"
            data-name="c"
          >
            <div
              className="[word-break:break-word] content-stretch flex gap-[16px] items-start relative shrink-0 text-[#1a0e14] w-full whitespace-nowrap"
              data-node-id="334:8982"
              data-name="Row"
            >
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pt-[16px] relative self-stretch"
                data-node-id="334:8983"
                data-name="Accessibility"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[18px]"
                  data-node-id="334:8984"
                >
                  Accessible by default
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[15px]"
                  data-node-id="334:8985"
                >
                  ✓ Every colour pairing measured against WCAG 2.1
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[15px]"
                  data-node-id="334:8986"
                >
                  ✓ Muted meta text (2.56:1) flagged — darkened to pass AA
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[15px]"
                  data-node-id="334:8987"
                >
                  ✓ Status always has a label, never colour alone
                </p>
              </div>
              <div
                className="border-[#e7dadd] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px pt-[16px] relative self-stretch"
                data-node-id="334:8988"
                data-name="Privacy"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[18px]"
                  data-node-id="334:8989"
                >{`Privacy & access (GDPR)`}</p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[15px]"
                  data-node-id="334:8990"
                >
                  ✓ Roles: admins, members and guests
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[15px]"
                  data-node-id="334:8991"
                >
                  ✓ Guests see only the projects shared with them 
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[15px]"
                  data-node-id="334:8992"
                >
                  ✓ Activity log on every task: who changed what, and when
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:8993"
          data-name="Section/Outcome"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:8994"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:8995"
            >
              Outcome
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative"
            data-node-id="334:8996"
            data-name="c"
          >
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="334:8997"
              data-name="Status"
            >
              <div
                className="relative shrink-0 size-[8px]"
                data-node-id="334:8998"
                data-name="Ellipse"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse7}
                />
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap"
                data-node-id="334:8999"
              >
                Shipped · 2026 
              </p>
            </div>
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[29px] min-w-full relative shrink-0 text-[#6e5b63] text-[19px] w-[min-content]"
              data-node-id="334:9000"
            >
              TaskFlow shipped in 2026. It’s still early for hard numbers, so
              instead of guessing, I’m tracking the three signals below — they
              show whether the dashboard really replaces status meetings and
              manual reports.
            </p>
            <div
              className="[word-break:break-word] bg-[#f6dae5] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative rounded-[18px] shrink-0 w-full"
              data-node-id="334:9001"
              data-name="Track box"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[14px] whitespace-nowrap"
                data-node-id="334:9002"
              >
                What I’d track
              </p>
              <div
                className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full"
                data-node-id="334:9003"
                data-name="t"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[15px] whitespace-nowrap"
                  data-node-id="334:9004"
                >
                  01
                </p>
                <p
                  className="flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[26px] min-w-px relative text-[#1a0e14] text-[17px]"
                  data-node-id="334:9005"
                >
                  Time leads spend building reports each week
                </p>
              </div>
              <div
                className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full"
                data-node-id="334:9006"
                data-name="t"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[15px] whitespace-nowrap"
                  data-node-id="334:9007"
                >
                  02
                </p>
                <p
                  className="flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[26px] min-w-px relative text-[#1a0e14] text-[17px]"
                  data-node-id="334:9008"
                >
                  Overdue tasks spotted before the weekly sync
                </p>
              </div>
              <div
                className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full"
                data-node-id="334:9009"
                data-name="t"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[15px] whitespace-nowrap"
                  data-node-id="334:9010"
                >
                  03
                </p>
                <p
                  className="flex-[1_0_0] font-['Geist:Regular'] font-normal leading-[26px] min-w-px relative text-[#1a0e14] text-[17px]"
                  data-node-id="334:9011"
                >
                  Share of tasks created with “New Task”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full"
          data-node-id="334:9012"
          data-name="Section/What I learned"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]"
            data-node-id="334:9013"
            data-name="Label"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[22px] tracking-[-0.44px] whitespace-nowrap"
              data-node-id="334:9014"
            >
              What I learned
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative"
            data-node-id="334:9015"
            data-name="c"
          >
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[20px] items-start pt-[18px] relative shrink-0 w-full"
              data-node-id="334:9016"
              data-name="Test the alert card earlier"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[15px] whitespace-nowrap"
                data-node-id="334:9017"
              >
                01
              </p>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative"
                data-node-id="334:9018"
                data-name="t"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[26px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                  data-node-id="334:9019"
                >
                  Structure before colour
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]"
                  data-node-id="334:9020"
                >
                  Greyscale layouts settled the grid early, so 24 screens stayed
                  consistent.
                </p>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[20px] items-start pt-[18px] relative shrink-0 w-full"
              data-node-id="334:9021"
              data-name="Design the empty and failure states first"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[15px] whitespace-nowrap"
                data-node-id="334:9022"
              >
                02
              </p>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative"
                data-node-id="334:9023"
                data-name="t"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[26px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                  data-node-id="334:9024"
                >
                  Measure contrast, don’t guess it
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]"
                  data-node-id="334:9025"
                >
                  Checking every pairing showed the muted meta text failed AA —
                  something I wouldn’t have seen by eye.
                </p>
              </div>
            </div>
            <div
              className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[20px] items-start pt-[18px] relative shrink-0 w-full"
              data-node-id="334:9026"
              data-name="Concepts need a plan to prove them"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[15px] whitespace-nowrap"
                data-node-id="334:9027"
              >
                03
              </p>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative"
                data-node-id="334:9028"
                data-name="t"
              >
                <p
                  className="font-['Geist:Medium'] font-medium leading-[26px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                  data-node-id="334:9029"
                >
                  Test with real teams next
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]"
                  data-node-id="334:9030"
                >
                  My next step is a test with 5 team leads: how fast can they
                  find at-risk work?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col items-start pb-[64px] px-[270px] relative shrink-0 w-full"
        data-node-id="334:9031"
        data-name="Next"
      >
        <Link
          href="/work/ai-face-aging"
          className="border-[#e7dadd] border-solid border-t content-stretch cursor-pointer flex gap-[24px] items-center pt-[40px] relative shrink-0 w-full"
          data-node-id="334:9032"
          data-name="Next case study"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative whitespace-nowrap"
            data-node-id="334:9033"
            data-name="l"
          >
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[14px]"
              data-node-id="334:9034"
            >
              Next case study
            </p>
            <p
              className="font-['Geist:Medium'] font-medium leading-[58px] relative shrink-0 text-[#1a0e14] text-[56px] tracking-[-2.24px]"
              data-node-id="334:9035"
            >
              AI Face Aging
            </p>
            <p
              className="font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6e5b63] text-[17px]"
              data-node-id="334:9036"
            >
              See your future self
            </p>
          </div>
          <div
            className="h-[170px] relative rounded-[16px] shrink-0 w-[260px]"
            data-node-id="334:9037"
            data-name="TaskFlow"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[16px]"
            >
              <div className="absolute bg-[#f1e8e9] inset-0 rounded-[16px]" />
              <img
                alt=""
                className="absolute max-w-none object-cover rounded-[16px] size-full"
                src={imgAiFaceAging}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#7a0d3b] text-[48px] whitespace-nowrap"
            data-node-id="334:9038"
          >
            →
          </p>
        </Link>
      </div>
      <div
        className="bg-[#1a0e14] content-stretch flex flex-col gap-[40px] items-start pb-[40px] pt-[128px] px-[270px] relative shrink-0 w-full"
        data-node-id="334:9039"
        data-name="Footer (mine)"
      >
        <p
          className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#f6dae5] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
          data-node-id="334:9040"
        >
          Got something in mind?
        </p>
        <p
          className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-white tracking-[-7px] whitespace-nowrap"
          data-node-id="334:9041"
        >
          <span className="leading-[132px] text-[140px]">{`Let’s work `}</span>
          <span className="font-['Instrument_Serif:Italic'] italic leading-[96px] text-[#f6dae5] text-[150px] tracking-[-3px]">
            together.
          </span>
        </p>
        <div
          className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0"
          data-node-id="334:9042"
          data-name="Email row"
        >
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap"
            data-node-id="334:9043"
          >
            kannyqb@gmail.com
          </p>
          <div
            className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
            data-node-id="334:9044"
            data-name="Copy email (icon)"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="334:9045"
              data-name="Frame"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame}
              />
            </div>
          </div>
          <a
            className="border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[11px] relative rounded-[999px] shrink-0"
            data-node-id="334:9048"
            data-name="CTA/LinkedIn"
            href="https://www.linkedin.com/in/kanza-iqbal"
            rel="noreferrer"
            target="_blank"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="334:9049"
              data-name="Frame"
           />
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame1}
              />
            </a>
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap"
              data-node-id="334:9051"
            >
              LinkedIn
            </p>
            <div
              className="relative shrink-0 size-[14px]"
              data-node-id="334:9052"
              data-name="Frame"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame2}
              />
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] border-solid border-t border-white content-stretch flex gap-[48px] items-start overflow-clip pt-[56px] relative shrink-0 text-white w-full whitespace-nowrap"
          data-node-id="334:9054"
          data-name="Columns"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
            data-node-id="334:9055"
            data-name="Local time"
          >
            <p
              className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
              data-node-id="334:9056"
            >
              Based in
            </p>
            <p
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="334:9057"
            >
              Lahore,Pakistan
            </p>
            <p
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="334:9058"
            >
              Usually replies within 1 working day
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
            data-node-id="334:9059"
            data-name="Socials"
          >
            <p
              className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
              data-node-id="334:9060"
            >
              Elsewhere
            </p>
            <a
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="334:9061"
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
              data-node-id="334:9062"
              href="https://www.fiverr.com/s/9dGANYe"
              rel="noreferrer"
              target="_blank"
            >
              Fiverr ↗
            </a>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
            data-node-id="334:9063"
            data-name="More"
          >
            <p
              className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
              data-node-id="334:9064"
            >
              More
            </p>
            <a
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="334:9065"
              download
              href="/Kanza-Iqbal-Product-Designer.pdf"
            >
              Resume (PDF) ↓
            </a>
            <p
              className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
              data-node-id="334:9066"
            >
              Privacy
            </p>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap"
          data-node-id="334:9067"
          data-name="Bottom bar"
        >
          <p
            className="relative shrink-0"
            data-node-id="334:9068"
          >{`© 2026 Kanza Iqbal · Designed & built with care in Lahore,Pakistan,Pakistan`}</p>
          <p className="relative shrink-0" data-node-id="334:9069">
            Back to top ↑
          </p>
        </div>
      </div>
  )
}
