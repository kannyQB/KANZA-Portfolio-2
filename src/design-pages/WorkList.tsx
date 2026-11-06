const assetPathPrefix = "/assets"
const imgEllipse = `${assetPathPrefix}/836d9.svg`
const imgEllipse1 = `${assetPathPrefix}/8a632.svg`
const imgIconArrow = `${assetPathPrefix}/c3095.svg`
const imgFrame = `${assetPathPrefix}/65b28.svg`
const imgFrame1 = `${assetPathPrefix}/e028d.svg`
const imgFrame2 = `${assetPathPrefix}/d4cb8.svg`
const imgFrame3 = `${assetPathPrefix}/764f1.svg`
const imgFrame4 = `${assetPathPrefix}/39cd9.svg`

type StatusBadgeProps = {
  className?: string
  status?: "Shipped" | "Concept"
}

function StatusBadge({ className, status = "Shipped" }: StatusBadgeProps) {
  const isConcept = status === "Concept"
  return (
    <div
      className={
        className ||
        `content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] ${
          isConcept ? "bg-[#f1e8e9]" : "bg-[#e5f5ec]"
        }`
      }
      id={isConcept ? "node-33_1496" : "node-33_1490"}
    >
      <div
        className="relative shrink-0 size-[7px]"
        id={isConcept ? "node-33_1497" : "node-33_1491"}
        data-name="Ellipse"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={isConcept ? imgEllipse1 : imgEllipse}
        />
      </div>
      <p
        className={`[word-break:break-word] font-["Geist:Regular"] font-normal leading-[22px] relative shrink-0 text-[14px] whitespace-nowrap ${
          isConcept ? "text-[#6e5b63]" : "text-[#1f9d57]"
        }`}
        id={isConcept ? "node-33_1498" : "node-33_1492"}
      >
        {isConcept ? "Concept" : "Shipped"}
      </p>
    </div>
  )
}

export default function Desktop4() {
  return (
    <div
      className="bg-[#f5f4f0] relative size-full"
      data-node-id="236:4531"
      data-name="Desktop - 4"
    >
      <div
        className="absolute content-stretch flex flex-col items-start left-[-2px] top-0 w-[1444px]"
        data-node-id="236:4532"
      >
        <div
          className="bg-[#f5f4f0] border-[#dedbd3] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full"
          data-node-id="236:4533"
          data-name="Nav"
        >
          <div
            className="[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap"
            data-node-id="I236:4533;7:113"
            data-name="Logo"
          >
            <p
              className="relative shrink-0 text-[#121212]"
              data-node-id="I236:4533;7:114"
            >
              Kanza Iqbal
            </p>
            <p
              className="relative shrink-0 text-[#2d3beb]"
              data-node-id="I236:4533;7:115"
            >
              .
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch cursor-pointer flex gap-[40px] items-start leading-[0] overflow-clip relative shrink-0 text-[16px] whitespace-nowrap"
            data-node-id="I236:4533;7:116"
            data-name="Links"
          >
            <a
              className="block font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[#2d3beb]"
              data-node-id="I236:4533;7:117"
            >
              <p className="decoration-[#7a0d3b] decoration-[2px] decoration-solid leading-[26px] underline">
                Work
              </p>
            </a>
            <a
              className="block font-['Geist:Regular'] font-normal relative shrink-0 text-[#121212]"
              data-node-id="I236:4533;7:118"
            >
              <p className="leading-[26px]">About</p>
            </a>
            <a
              className="block font-['Geist:Regular'] font-normal relative shrink-0 text-[#121212]"
              data-node-id="I236:4533;7:120"
            >
              <p className="leading-[26px]">Contact</p>
            </a>
          </div>
          <div
            className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0"
            data-node-id="I236:4533;7:121"
            data-name="Right"
          >
            <p
              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#5e5d58] text-[14px] whitespace-nowrap"
              data-node-id="I236:4533;7:122"
            >
              Lahore · PKT
            </p>
            <a
              className="bg-[#121212] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0"
              data-node-id="I236:4533;7:123"
              data-name="CTA"
            >
              <p
                className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap"
                data-node-id="I236:4533;7:123;3:42"
              >
                Let’s talk
              </p>
              <div
                className="relative shrink-0 size-[16px]"
                data-node-id="I236:4533;7:123;3:43"
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
          data-node-id="236:4534"
          data-name="Work W5 · Index + hover preview"
        >
          <div
            className="content-stretch flex items-end justify-between pb-[64px] relative shrink-0 w-full"
            data-node-id="236:4535"
            data-name="Header"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Medium'] font-medium gap-[12px] items-start relative shrink-0 whitespace-nowrap"
              data-node-id="236:4536"
              data-name="Title"
            >
              <p
                className="leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4537"
              >
                (Case studies)
              </p>
              <p
                className="leading-[0] relative shrink-0 text-[#1a0e14] text-[0px] tracking-[-2.88px]"
                data-node-id="236:4538"
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
              data-node-id="236:4539"
              data-name="Right"
            >
              <div
                className="border border-[#e7dadd] border-solid content-stretch flex gap-[2px] items-start p-[3px] relative rounded-[999px] shrink-0"
                data-node-id="236:4540"
                data-name="View toggle"
              >
                <div
                  className="content-stretch flex gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0"
                  data-node-id="236:4541"
                  data-name="View/Grid"
                >
                  <div
                    className="relative shrink-0 size-[14px]"
                    data-node-id="236:4542"
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
                    data-node-id="236:4544"
                  >
                    Grid
                  </p>
                </div>
                <div
                  className="bg-[#1a0e14] content-stretch flex gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0"
                  data-node-id="236:4545"
                  data-name="View/List"
                >
                  <div
                    className="relative shrink-0 size-[14px]"
                    data-node-id="236:4546"
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
                    data-node-id="236:4548"
                  >
                    List
                  </p>
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap"
                data-node-id="236:4549"
              >
                Hover a row to preview
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex h-[102px] items-start pb-[64px] relative shrink-0 w-full"
            data-node-id="236:4550"
            data-name="Toolbar"
          >
            <div
              className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal gap-[8px] items-start leading-[22px] relative shrink-0 text-[14px] whitespace-nowrap"
              data-node-id="236:4551"
              data-name="Filters"
            >
              <div
                className="bg-[#f6dae5] content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4552"
                data-name="Filter/All"
              >
                <p
                  className="relative shrink-0 text-[#7a0d3b]"
                  data-node-id="236:4553"
                >
                  All
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4554"
                >
                  9
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4555"
                data-name="Filter/SaaS & dashboards"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4556"
                >{`SaaS & dashboards`}</p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4557"
                >
                  2
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4558"
                data-name="Filter/Mobile apps"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4559"
                >
                  Mobile apps
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4560"
                >
                  5
                </p>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative rounded-[999px] shrink-0"
                data-node-id="236:4561"
                data-name="Filter/Web"
              >
                <p
                  className="relative shrink-0 text-[#1a0e14]"
                  data-node-id="236:4562"
                >
                  Web
                </p>
                <p
                  className="relative shrink-0 text-[#6e5b63]"
                  data-node-id="236:4563"
                >
                  2
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[982px] relative shrink-0 w-[1280px]"
            data-node-id="236:4564"
            data-name="Index stage"
          >
            <div
              className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]"
              data-node-id="236:4565"
              data-name="Index"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="236:4566"
              >
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4567"
                  data-name="Row/Screen Mirroring"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4568"
                  >
                    01
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4569"
                  >
                    <span className="leading-[56px] text-[52px]">{`Screen Mirroring - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      Cast your phone to any TV
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4570"
                  >
                    Mobile app . 2026
                  </p>
                  <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4572"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4573"
                  data-name="Row/Vigil"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4574"
                  >
                    02
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4575"
                  >
                    <span className="leading-[56px] text-[52px]">{`Vigil - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      A Safety Command Platform
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4576"
                  >
                    B2B SaaS . 2026
                  </p>
                  <div
                    className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0"
                    data-node-id="236:4577"
                    data-name="Status Badge"
                  >
                    <div
                      className="relative shrink-0 size-[7px]"
                      data-node-id="I236:4577;33:1497"
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
                      data-node-id="I236:4577;33:1498"
                    >
                      Concept
                    </p>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4578"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4579"
                  data-name="Row/TaskFlow"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4580"
                  >
                    03
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4581"
                  >
                    <span className="leading-[56px] text-[52px]">{`TaskFlow - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      Calm control for teams
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4582"
                  >
                    Dashboard . 2025
                  </p>
                  <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4584"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4585"
                  data-name="Row/AI Face Aging"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4586"
                  >
                    04
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4587"
                  >
                    <span className="leading-[56px] text-[52px]">{`AI Face Aging - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      See your future self
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4588"
                  >
                    Mobile app · AI · Year
                  </p>
                  <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4590"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4591"
                  data-name="Row/Freelance Ops"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4592"
                  >
                    05
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4593"
                  >
                    <span className="leading-[56px] text-[52px]">{`Freelance Ops - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      Business tools for freelancers
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4594"
                  >
                    Mobile app · Fintech · Year
                  </p>
                  <a
                    className="bg-[#e5f5ec] content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[999px] shrink-0"
                    href="https://play.google.com/store/apps/details?id=com.freelanceops&hl=en"
                    data-node-id="236:4595"
                    target="_blank"
                    data-name="Link/Live on Play & App Store → https://play.google.com/store/apps/details?id=com.freelanceops&hl=en"
                  >
                    <div
                      className="relative shrink-0 size-[7px]"
                      data-node-id="236:4596"
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
                      data-node-id="236:4597"
                      role="link"
                      tabIndex={0}
                    >
                      <p className="cursor-pointer leading-[normal]">{`Live on Play & App Store ↗`}</p>
                    </div>
                  </a>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4598"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4599"
                  data-name="Row/Maisonette"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4600"
                  >
                    06
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4601"
                  >
                    <span className="leading-[56px] text-[52px]">{`Maisonette - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      Luxury estate command center
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4602"
                  >
                    SaaS · Real estate · Year
                  </p>
                  <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4604"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4605"
                  data-name="Row/TypeSnip"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4606"
                  >
                    07
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4607"
                  >
                    <span className="leading-[56px] text-[52px]">{`TypeSnip - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      A text-expander keyboard
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4608"
                  >
                    Mobile app · Productivity
                  </p>
                  <a
                    className="bg-[#e5f5ec] content-stretch cursor-pointer flex gap-[6px] items-center overflow-clip px-[10px] py-[4px] relative rounded-[999px] shrink-0"
                    href="https://play.google.com/store/apps/details?id=com.asapp.keyboardExpanderApp&hl=en"
                    data-node-id="236:4609"
                    target="_blank"
                    data-name="Link/Live on Google Play → https://play.google.com/store/apps/details?id=com.asapp.keyboardExpanderApp&hl=en"
                  >
                    <div
                      className="relative shrink-0 size-[7px]"
                      data-node-id="236:4610"
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
                      data-node-id="236:4611"
                      role="link"
                      tabIndex={0}
                    >
                      <p className="cursor-pointer leading-[normal]">
                        Live on Google Play ↗
                      </p>
                    </div>
                  </a>
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4612"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4613"
                  data-name="Row/Inkspire Books"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4614"
                  >
                    08
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4615"
                  >
                    <span className="leading-[56px] text-[52px]">{`Inkspire Books - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      An illustrated online bookstore
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4616"
                  >
                    Website · E-commerce · Year
                  </p>
                  <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4618"
                  >
                    ↗
                  </p>
                </div>
                <div
                  className="border-[#e7dadd] border-solid border-t content-stretch flex gap-[24px] items-center py-[26px] relative shrink-0 w-full"
                  data-node-id="236:4619"
                  data-name="Row/Zorvex"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[48px]"
                    data-node-id="236:4620"
                  >
                    09
                  </p>
                  <p
                    className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[0] min-w-px relative text-[#1a0e14] text-[0px] tracking-[-2.08px]"
                    data-node-id="236:4621"
                  >
                    <span className="leading-[56px] text-[52px]">{`Zorvex - `}</span>
                    <span className="leading-[56px] text-[20px]">
                      AI-powered finance website
                    </span>
                  </p>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] whitespace-nowrap"
                    data-node-id="236:4622"
                  >{`Website · Fintech & AI · Year`}</p>
                  <StatusBadge className="bg-[#e5f5ec] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" />
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[28px] relative shrink-0 text-[#1a0e14] text-[20px] tracking-[-0.2px] whitespace-nowrap"
                    data-node-id="236:4624"
                  >
                    ↗
                  </p>
                </div>
              </div>
              <div
                className="bg-[#e7dadd] h-px relative shrink-0 w-full"
                data-node-id="236:4625"
                data-name="Rectangle"
              />
            </div>
          </div>
        </div>
        <div
          className="bg-[#121212] content-stretch flex flex-col gap-[40px] h-[743px] items-start pb-[40px] pt-[128px] px-[270px] relative shrink-0 w-full"
          data-node-id="236:4626"
          data-name="Footer (v2)"
        >
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#e3e6ff] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap"
            data-node-id="236:4627"
          >
            Got something in mind?
          </p>
          <p
            className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-white tracking-[-7px] whitespace-nowrap"
            data-node-id="236:4628"
          >
            <span className="leading-[132px] text-[140px]">{`Let’s work `}</span>
            <span className="font-['Instrument_Serif:Italic'] italic leading-[96px] text-[#fbe3ec] text-[150px] tracking-[-3px]">
              together.
            </span>
          </p>
          <div
            className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0"
            data-node-id="236:4629"
            data-name="Email row"
          >
            <p
              className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap"
              data-node-id="236:4630"
            >
              kannyqb@gmail.com
            </p>
            <div
              className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]"
              data-node-id="236:4631"
              data-name="Copy email (icon)"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="236:4632"
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
              data-node-id="236:4635"
              data-name="CTA/LinkedIn"
            >
              <div
                className="relative shrink-0 size-[18px]"
                data-node-id="236:4636"
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
                data-node-id="236:4638"
              >
                LinkedIn
              </p>
              <div
                className="relative shrink-0 size-[14px]"
                data-node-id="236:4639"
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
            data-node-id="236:4641"
            data-name="Columns"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="236:4642"
              data-name="Local time"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4643"
              >
                Based in
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4644"
              >
                Lahore — 14:30 PKT (GMT+5)
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4645"
              >
                Usually replies within 1 working day
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="236:4646"
              data-name="Socials"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4647"
              >
                Elsewhere
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4648"
              >
                Behance ↗
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4649"
              >
                Fiverr ↗
              </p>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative"
              data-node-id="236:4650"
              data-name="More"
            >
              <p
                className="font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase"
                data-node-id="236:4651"
              >
                More
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4652"
              >
                Resume (PDF) ↓
              </p>
              <p
                className="font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]"
                data-node-id="236:4653"
              >
                Privacy
              </p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap"
            data-node-id="236:4654"
            data-name="Bottom bar"
          >
            <p
              className="relative shrink-0"
              data-node-id="236:4655"
            >{`© 2026 Kanza Iqbal · Designed & built with care in Lahore`}</p>
            <p className="relative shrink-0" data-node-id="236:4656">
              Back to top ↑
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
