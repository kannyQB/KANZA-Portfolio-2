const assetPathPrefix = "/assets"
const imgEllipse = `${assetPathPrefix}/836d9.svg`
const imgHoverPreviewVigil = `${assetPathPrefix}/1da72.png`
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgFrame = `${assetPathPrefix}/65b28.svg`
const imgFrame1 = `${assetPathPrefix}/e028d.svg`
const imgFrame2 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame3 = `${assetPathPrefix}/764f1.svg`
const imgFrame4 = `${assetPathPrefix}/39cd9.svg`

type StatusBadgeProps = {
  className?: string
  status?: "Shipped"
}

function StatusBadge({ className, status = "Shipped" }: StatusBadgeProps) {
  return (
    <div
      className={
        className ||
        "bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px]"
      }
      data-node-id="33:1490"
    >
      <div
        className="relative shrink-0 size-[7px]"
        data-node-id="33:1491"
        data-name="Ellipse"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgEllipse}
        />
      </div>
      <p
        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1f9d57] text-[14px] whitespace-nowrap"
        data-node-id="33:1492"
      >
        Shipped
      </p>
    </div>
  )
}

export default function Desktop3() {
  return (
    <div
      className="bg-[#f5f4f0] relative size-full"
      data-node-id="236:4384"
      data-name="Desktop - 3"
    >
      <div
        className="absolute content-stretch flex flex-col items-start left-[-2px] top-0 w-[1444px]"
        data-node-id="236:4385"
      >
        <div
          className="bg-[#f5f4f0] border-[#dedbd3] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
          data-node-id="236:4386"
          data-name="Nav"
        >
          <div
            className="[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
            data-node-id="I236:4386;7:113"
            data-name="Logo"
          >
            <p
              className="relative shrink-0 text-[#121212]"
              data-node-id="I236:4386;7:114"
            >
              Kanza Iqbal
            </p>
            <p
              className="relative shrink-0 text-[#2d3beb]"
              data-node-id="I236:4386;7:115"
            >
              .
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch cursor-pointer flex gap-[40px] items-start leading-[0] overflow-clip relative shrink-0 text-[16px] whitespace-nowrap"
            data-node-id="I236:4386;7:116"
            data-name="Links"
          >
            <a
              className="block font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[#2d3beb]"
              data-node-id="I236:4386;7:117"
            >
              <p className="decoration-[#7a0d3b] decoration-[2px] decoration-solid leading-[26px] underline">
                Work
              </p>
            </a>
            <a
              className="block font-['Geist:Regular'] font-normal relative shrink-0 text-[#121212]"
              data-node-id="I236:4386;7:118"
            >
              <p className="leading-[26px]">About</p>
            </a>
            <a
              className="block font-['Geist:Regular'] font-normal relative shrink-0 text-[#121212]"
              data-node-id="I236:4386;7:120"
            >
              <p className="leading-[26px]">Contact</p>
            </a>
          </div>
          <div
            className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0"
            data-node-id="I236:4386;7:121"
            data-name="Right"
          >
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#5e5d58] text-[14px] whitespace-nowrap"
              data-node-id="I236:4386;7:122"
            >
              Lahore · PKT
            </p>
            <a
              className="bg-[#121212] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
              data-node-id="I236:4386;7:123"
              data-name="CTA"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                data-node-id="I236:4386;7:123;3:42"
              >
                Let’s talk
              </p>
              <div
                className="relative shrink-0 size-[16px]"
                data-node-id="I236:4386;7:123;3:43"
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
          className="bg-[#f8f4f2] content-stretch flex flex-col items-start overflow-clip pb-[120px] pt-[96px] px-[270px] relative shrink-0 w-[1440px]"
          data-node-id="236:4387"
          data-name="Work W5 · Index + hover preview"
        >
          <div
            className="content-stretch flex items-end justify-between pb-[64px] relative shrink-0 w-full"
            data-node-id="236:4388"
            data-name="Header"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Medium'] font-medium gap-[12px] items-start relative shrink-0 whitespace-nowrap"
              data-node-id="236:4389"
              data-name="Title"
            >
              <p
                className="leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4390"
              >
                (Case studies)
              </p>
              <p
                className="leading-[0] relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.88px]"
                data-node-id="236:4391"
              >
                <span className="leading-[72px] text-[72px]">{`Problems I’ve `}</span>
                <span className="font-['Instrument_Serif:Italic'] italic leading-[96px] text-[#7a0d3b] text-[78px] tracking-[-1.56px]">
                  made simple
                </span>
                <span className="leading-[72px] text-[72px]">.</span>
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0"
              data-node-id="236:4392"
              data-name="Right"
            >
              <div
                className="border border-[#e7dadd] border-solid content-stretch flex gap-[2px] items-start p-[3px] relative rounded-[999px] shrink-0"
                data-node-id="236:4393"
                data-name="View toggle"
              >
                <div
                  className="content-stretch flex gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0"
                  data-node-id="236:4394"
                  data-name="View/Grid"
                >
                  <div
                    className="relative shrink-0 size-[14px]"
                    data-node-id="236:4395"
                    data-name="Frame"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgFrame}
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#1a0e14] text-[14px] whitespace-nowrap"
                    data-node-id="236:4397"
                  >
                    Grid
                  </p>
                </div>
                <div
                  className="bg-[#1a0e14] content-stretch flex gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0"
                  data-node-id="236:4398"
                  data-name="View/List"
                >
                  <div
                    className="relative shrink-0 size-[14px]"
                    data-node-id="236:4399"
                    data-name="Frame"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgFrame1}
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                    data-node-id="236:4401"
                  >
                    List
                  </p>
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                data-node-id="236:4402"
              >
                Hover a row to preview
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex h-[102px] items-start pb-[64px] relative shrink-0 w-full"
            data-node-id="236:4403"
            data-name="Toolbar"
          >
            <div
              className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal gap-[8px] items-start leading-[22px] relative shrink-0 text-[14px] whitespace-nowrap"
              data-node-id="236:4404"
              data-name="Filters"
            >
              <div
                className="bg-[#f6dae5] content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4405"
                data-name="Filter/All"
              >
                <p
                  className="relative shrink-0 text-[#7a0d3b]"
                  data-node-id="236:4406"
                >
                  All
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4407"
                >
                  9
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4408"
                data-name="Filter/SaaS & dashboards"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4409"
                >{`SaaS & dashboards`}</p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4410"
                >
                  2
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4411"
                data-name="Filter/Mobile apps"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4412"
                >
                  Mobile apps
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4413"
                >
                  5
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4414"
                data-name="Filter/Web"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4415"
                >
                  Web
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4416"
                >
                  2
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4417"
                data-name="Filter/Concepts"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4418"
                >
                  Concepts
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4419"
                >
                  1
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[1098px] relative shrink-0 w-[1280px]"
            data-node-id="236:4420"
            data-name="Index stage"
          >
            <div
              className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]"
              data-node-id="236:4421"
              data-name="Index"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="236:4422"
              >
                <div
                  className="bg-[#1a0e14] border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] h-[158px] items-center px-[20px] py-[26px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="236:4423"
                  data-name="Row/Vigil"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#f6dae5] text-[16px] w-[48px]"
                    data-node-id="236:4424"
                  >
                    01
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Instrument_Serif:Italic'] italic leading-[0] min-w-px relative text-[#f8f4f2] text-[0px] tracking-[-2.4px]"
                    data-node-id="236:4425"
                  >
                    <span className="font-['Geist:Medium'] font-medium leading-[56px] text-[52px]">{`Screen Mirroring - `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      Cast your phone to any TV
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#f8f4f2] text-[16px] w-[129px]"
                    data-node-id="236:4426"
                  >
                    Mobile app · 2026
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[94px]"
                    data-node-id="236:4427"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4429"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4430"
                  data-name="Row/Screen Mirroring"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4431"
                  >
                    02
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4432"
                  >
                    <span className="leading-[56px] text-[52px]">{`Vigil - `}</span>
                    <span className="leading-[56px] text-[23px]">
                      A Safety Command Platform
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4433"
                  >
                    B2B SaaS · 2026
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4434"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4436"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4437"
                  data-name="Row/TaskFlow"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4438"
                  >
                    03
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4439"
                  >
                    <span className="leading-[56px] text-[52px]">{`TaskFlow `}</span>
                    <span className="leading-[56px] text-[48px]">-</span>
                    <span className="leading-[56px] text-[52px]">{` `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      Calm control for teams
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4440"
                  >
                    Dashboard · 2025
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4441"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4443"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4444"
                  data-name="Row/AI Face Aging"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4445"
                  >
                    04
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="317:284"
                  >
                    <span className="leading-[56px] text-[52px]">{`AI Face Aging - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      See your future self
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4447"
                  >
                    Mobile app · AI · Year
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4448"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4450"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4451"
                  data-name="Row/Freelance Ops"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4452"
                  >
                    05
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4453"
                  >
                    <span className="leading-[56px] text-[52px]">{`Freelance Ops `}</span>
                    <span className="leading-[56px] text-[48px]">-</span>
                    <span className="leading-[56px] text-[52px]">{` `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      Business tools for freelancers
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4454"
                  >
                    Mobile app · Fintech · Year
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4455"
                    data-name="Status col"
                  >
                    <a
                      className="bg-[#e5f5ec] content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[999px] shrink-0"
                      href="https://play.google.com/store/apps/details?id=com.freelanceops&hl=en"
                      data-node-id="236:4456"
                      target="_blank"
                      data-name="Link/Live on Play & App Store → https://play.google.com/store/apps/details?id=com.freelanceops&hl=en"
                    >
                      <div
                        className="relative shrink-0 size-[7px]"
                        data-node-id="236:4457"
                        data-name="Ellipse"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgEllipse}
                        />
                      </div>
                      <div
                        className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[#167a43] text-[13px] text-left whitespace-nowrap"
                        data-node-id="236:4458"
                        role="link"
                        tabIndex={0}
                      >
                        <p className="cursor-pointer leading-[normal]">{`Live on Play & App Store ↗`}</p>
                      </div>
                    </a>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4459"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4460"
                  data-name="Row/TypeSnip"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4461"
                  >
                    06
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4462"
                  >
                    <span className="leading-[56px] text-[52px]">{`TypeSnip `}</span>
                    <span className="leading-[56px] text-[48px]">-</span>
                    <span className="leading-[56px] text-[52px]">{` `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      A text-expander keyboard
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4463"
                  >
                    Mobile app · Productivity
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4464"
                    data-name="Status col"
                  >
                    <a
                      className="bg-[#e5f5ec] content-stretch cursor-pointer flex gap-[6px] items-center overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0"
                      href="https://play.google.com/store/apps/details?id=com.asapp.keyboardExpanderApp&hl=en"
                      data-node-id="236:4465"
                      target="_blank"
                      data-name="Link/Live on Google Play → https://play.google.com/store/apps/details?id=com.asapp.keyboardExpanderApp&hl=en"
                    >
                      <div
                        className="relative shrink-0 size-[7px]"
                        data-node-id="236:4466"
                        data-name="Ellipse"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgEllipse}
                        />
                      </div>
                      <div
                        className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[#1f7a46] text-[12px] text-left whitespace-nowrap"
                        data-node-id="236:4467"
                        role="link"
                        tabIndex={0}
                      >
                        <p className="cursor-pointer leading-[normal]">
                          Live on Google Play ↗
                        </p>
                      </div>
                    </a>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4468"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4469"
                  data-name="Row/Maisonette"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4470"
                  >
                    07
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4471"
                  >
                    <span className="leading-[56px] text-[52px]">{`Maisonette `}</span>
                    <span className="leading-[56px] text-[48px]">-</span>
                    <span className="leading-[56px] text-[52px]">{` `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      Luxury estate command center
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4472"
                  >
                    SaaS · Real estate · Year
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4473"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4475"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4476"
                  data-name="Row/Inkspire Books"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4477"
                  >
                    08
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4478"
                  >
                    <span className="leading-[56px] text-[52px]">{`Inkspire Books `}</span>
                    <span className="leading-[56px] text-[48px]">{`- `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      Illustrated online bookstore
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4479"
                  >
                    Website · E-commerce · Year
                  </p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4480"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4482"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4483"
                  data-name="Row/Zorvex"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4484"
                  >
                    09
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4485"
                  >
                    <span className="leading-[56px] text-[52px]">{`Zorvex `}</span>
                    <span className="leading-[56px] text-[48px]">-</span>
                    <span className="leading-[56px] text-[52px]">{` `}</span>
                    <span className="font-['Geist:Regular'] font-normal leading-[56px] text-[23px]">
                      AI-powered finance website
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[240px]"
                    data-node-id="236:4486"
                  >{`Website · Fintech & AI · Year`}</p>
                  <div
                    className="content-stretch flex items-center relative shrink-0 w-[230px]"
                    data-node-id="236:4487"
                    data-name="Status col"
                  >
                    <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4489"
                  >
                    ↗
                  </p>
                </div>
              </div>
              <div
                className="bg-[#e7dadd] h-px relative shrink-0 w-full"
                data-node-id="236:4490"
                data-name="Rectangle"
              />
            </div>
            <div
              className="absolute flex h-[220.543px] items-center justify-center left-[666px] top-[-34px] w-[300.468px]"
              data-node-id="236:4491"
            >
              <div className="flex-none rotate-4">
                <div
                  className="h-[201.002px] relative rounded-[16px] shadow-[0px_20px_40px_0px_rgba(26,0,13,0.3)] w-[287.146px]"
                  data-name="Hover preview (Vigil)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
                    src={imgHoverPreviewVigil}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#121212] content-stretch flex flex-col gap-[40px] h-[743px] items-start pb-[40px] pt-[128px] px-[270px] relative shrink-0 w-full"
          data-node-id="236:4492"
          data-name="Footer (v2)"
        >
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#e3e6ff] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
            data-node-id="236:4493"
          >
            Got something in mind?
          </p>
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-white tracking-[-7px] whitespace-nowrap"
            data-node-id="236:4494"
          >
            <span className="leading-[132px] text-[140px]">{`Let’s work `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-[96px] text-[#fbe3ec] text-[150px] tracking-[-3px]">
              together.
            </span>
          </p>
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0"
            data-node-id="236:4495"
            data-name="Email row"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap"
              data-node-id="236:4496"
            >
              kannyqb@gmail.com
            </p>
            <div
              className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
              data-node-id="236:4497"
              data-name="Copy email (icon)"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="236:4498"
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
              className="border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[11px] relative rounded-[999px] shrink-0"
              data-node-id="236:4501"
              data-name="CTA/LinkedIn"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="236:4502"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame3}
                />
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap"
                data-node-id="236:4504"
              >
                LinkedIn
              </p>
              <div
                className="relative shrink-0 size-[14px]"
                data-node-id="236:4505"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame4}
                />
              </div>
            </div>
          </div>
          <div
            className="[word-break:break-word] border-solid border-t border-white content-stretch flex gap-[48px] items-start overflow-clip pt-[56px] relative shrink-0 text-white w-full whitespace-nowrap"
            data-node-id="236:4507"
            data-name="Columns"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="236:4508"
              data-name="Local time"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4509"
              >
                Based in
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4510"
              >
                Lahore — 14:30 PKT (GMT+5)
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4511"
              >
                Usually replies within 1 working day
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="236:4512"
              data-name="Socials"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4513"
              >
                Elsewhere
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4514"
              >
                Behance ↗
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4515"
              >
                Fiverr ↗
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="236:4516"
              data-name="More"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4517"
              >
                More
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4518"
              >
                Resume (PDF) ↓
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4519"
              >
                Privacy
              </p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap"
            data-node-id="236:4520"
            data-name="Bottom bar"
          >
            <p
              className="relative shrink-0"
              data-node-id="236:4521"
            >{`© 2026 Kanza Iqbal · Designed & built with care in Lahore`}</p>
            <p className="relative shrink-0" data-node-id="236:4522">
              Back to top ↑
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
