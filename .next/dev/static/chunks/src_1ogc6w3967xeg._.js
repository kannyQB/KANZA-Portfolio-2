(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BeforeAfterSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeforeAfterSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-slider.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BeforeAfterSlider({ before, after, beforeLabel = "Wireframe", afterLabel = "Final UI", aspectRatio = 600 / 513, ariaLabel = "Compare the wireframe with the final interface" }) {
    _s();
    const { position, updatePosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function moveSlider(clientX) {
        const bounds = sliderRef.current?.getBoundingClientRect();
        if (!bounds || bounds.width === 0) return;
        updatePosition((clientX - bounds.left) / bounds.width * 100);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sliderRef,
        "aria-label": ariaLabel,
        className: "comparison-slider relative w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[24px] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#7a0d3b]",
        "data-name": "Before and after slider",
        onPointerDown: (event)=>{
            event.currentTarget.setPointerCapture(event.pointerId);
            moveSlider(event.clientX);
        },
        onPointerMove: (event)=>{
            if (event.buttons === 1) moveSlider(event.clientX);
        },
        style: {
            aspectRatio
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                alt: afterLabel,
                className: "comparison-slider__image pointer-events-none absolute inset-0 size-full object-cover",
                draggable: false,
                src: after
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "comparison-slider__before pointer-events-none absolute inset-0",
                style: {
                    clipPath: `inset(0 ${100 - position}% 0 0)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "comparison-slider__before-image absolute inset-0 size-full object-cover",
                    draggable: false,
                    src: before
                }, void 0, false, {
                    fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs text-[#1a0e14] shadow-[0_3.5px_10.4px_rgba(0,0,0,0.08)]",
                children: beforeLabel
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-4 top-4 rounded-full bg-white px-3 py-2 text-xs text-[#1a0e14] shadow-[0_3.5px_10.4px_rgba(0,0,0,0.08)]",
                children: afterLabel
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "comparison-slider__divider pointer-events-none absolute inset-y-0 z-[1] w-[2px] -translate-x-1/2 bg-[#7a0d3b]",
                style: {
                    left: `${position}%`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "comparison-slider__handle pointer-events-none absolute top-1/2 z-[2] flex size-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-white bg-[#7a0d3b] text-xs text-white shadow-[0_3px_10px_rgba(26,14,20,0.22)]",
                style: {
                    left: `${position}%`
                },
                children: "‹ ›"
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                "aria-label": ariaLabel,
                "aria-valuetext": `${Math.round(position)}% of the wireframe is visible`,
                className: "sr-only",
                max: "100",
                min: "0",
                onChange: (event)=>updatePosition(Number(event.currentTarget.value)),
                type: "range",
                value: position
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BeforeAfterSlider.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(BeforeAfterSlider, "vB+TLZrSwLicsYPVQhVJJPqrRgw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$slider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = BeforeAfterSlider;
var _c;
__turbopack_context__.k.register(_c, "BeforeAfterSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HomeCaseStudies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeCaseStudies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BeforeAfterSlider.tsx [app-client] (ecmascript)");
;
;
;
const caseStudies = [
    {
        number: "01",
        name: "Screen Mirroring",
        subtitle: "Cast Your Phone to Any TV",
        status: "Shipped",
        statusColor: "#e5f5ec",
        background: "#f6dae5",
        tags: [
            "Mobile app",
            "Android",
            "2026"
        ],
        image: "/assets/39efb.png",
        beforeImage: "/assets/eae9d.png",
        kpis: [
            {
                value: "3",
                label: "core tools on Home"
            },
            {
                value: "1-tap",
                label: "connect"
            },
            {
                value: "4",
                label: "connection states"
            }
        ],
        problem: "Casting apps hide the connection step — people get stuck finding their TV before they can mirror anything.",
        work: "A Home that always shows the TV connection first, with Mirror, Cast and Remote as one-tap cards.",
        outcome: "Shipped at Terafort in 2026 with 10K+ downloads on Google Play.",
        href: "/work/screen-mirroring"
    },
    {
        number: "02",
        name: "AI Face Aging",
        subtitle: "See Your Future Self",
        status: "Shipped",
        statusColor: "#e5f5ec",
        background: "#eee6f6",
        tags: [
            "Mobile app",
            "AI",
            "2026"
        ],
        image: "/assets/9b1d5.png",
        kpis: [
            {
                value: "AI",
                label: "age progression"
            },
            {
                value: "Photo",
                label: "based preview"
            },
            {
                value: "Mobile",
                label: "experience"
            }
        ],
        problem: "People need a simple, approachable way to explore an AI-generated view of their future appearance.",
        work: "Designed an end-to-end mobile experience for choosing a photo and viewing an age-progression result.",
        outcome: "Shipped as an AI-powered mobile app with a clear path from photo selection to preview.",
        href: "/work"
    },
    {
        number: "03",
        name: "Maisonette",
        subtitle: "Luxury Estate Command Center",
        status: "Shipped",
        statusColor: "#e5f5ec",
        background: "#e3eef6",
        tags: [
            "SaaS",
            "Real estate",
            "2026"
        ],
        image: "/assets/9204a.png",
        kpis: [
            {
                value: "Luxury",
                label: "estate focus"
            },
            {
                value: "Central",
                label: "command view"
            },
            {
                value: "SaaS",
                label: "experience"
            }
        ],
        problem: "Luxury estate teams need a clearer way to oversee their properties and the work around them.",
        work: "Designed a command-center experience that brings estate operations into a focused, easy-to-scan interface.",
        outcome: "Delivered a shipped SaaS experience for luxury real-estate operations.",
        href: "/work"
    },
    {
        number: "04",
        name: "Freelance Ops",
        subtitle: "Business Tools for Freelancers",
        status: "Shipped",
        statusColor: "#e5f5ec",
        background: "#f8e5da",
        tags: [
            "Mobile app",
            "Fintech",
            "2025"
        ],
        image: "/assets/aa772.png",
        kpis: [
            {
                value: "Business",
                label: "toolkit"
            },
            {
                value: "Finance",
                label: "workflows"
            },
            {
                value: "Mobile",
                label: "app"
            }
        ],
        problem: "Independent freelancers need practical business tools that fit the way they manage work on the go.",
        work: "Designed a mobile app that brings everyday freelance business tasks into one approachable experience.",
        outcome: "Shipped as a mobile app and published on Google Play.",
        href: "/work"
    },
    {
        number: "05",
        name: "Vigil",
        subtitle: "A Safety Command Platform",
        status: "Concept",
        statusColor: "#f6dae5",
        background: "#f5e4ea",
        tags: [
            "B2B SaaS",
            "Safety",
            "2026"
        ],
        image: "/assets/1da72.png",
        beforeImage: "/assets/976ff.png",
        kpis: [
            {
                value: "Live",
                label: "incident view"
            },
            {
                value: "SOS",
                label: "alert handling"
            },
            {
                value: "3",
                label: "response actions"
            }
        ],
        problem: "Emergency control-room operators need a clear way to assess SOS alerts and coordinate a response.",
        work: "Designed a live command platform linking alerts to operator actions: call, assign, or escalate.",
        outcome: "A safety-platform concept with a focused live view for control-room operators.",
        href: "/work/vigil"
    }
];
function StatusBadge({ status, background }) {
    const color = status === "Shipped" ? "#1f9d57" : "#7a0d3b";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0",
        style: {
            backgroundColor: background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "size-[7px] rounded-full",
                style: {
                    backgroundColor: color
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-['Geist:Regular'] text-[14px] leading-[22px] whitespace-nowrap",
                style: {
                    color
                },
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HomeCaseStudies.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
function CaseStudyCard({ study }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "case-study-card bg-white border border-[#e7dadd] border-solid content-stretch flex flex-col gap-[32px] items-start p-[48px] relative rounded-[40px] shrink-0 w-full",
        "data-name": `Case card/${study.name}`,
        style: {
            backgroundColor: study.background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-stretch flex items-center justify-between relative shrink-0 w-full",
                "data-name": "Card top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-['Geist:Medium'] text-[#7a0d3b] text-[12px] leading-[16px] tracking-[0.72px] uppercase whitespace-nowrap",
                        children: [
                            "(Case study · ",
                            study.number,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                        background: study.statusColor,
                        status: study.status
                    }, void 0, false, {
                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "case-study-card__layout content-stretch flex gap-[56px] items-center relative shrink-0 w-full",
                "data-name": "Feature/Website Redesign",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "case-study-card__media",
                        children: study.beforeImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            after: study.image,
                            aspectRatio: 600 / 513,
                            before: study.beforeImage,
                            ariaLabel: `Compare the ${study.name} wireframe with the final interface`
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCaseStudies.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: `${study.name} project preview`,
                            className: "size-full rounded-[24px] object-cover",
                            loading: study.number === "02" ? "eager" : "lazy",
                            src: study.image
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCaseStudies.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "case-study-card__content content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative",
                        "data-name": "Text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0",
                                children: study.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-white border border-[#e7dadd] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[999px] shrink-0 font-['Geist:Regular'] text-[#6e5b63] text-[14px] leading-[22px] whitespace-nowrap",
                                        "data-name": "Tag",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "case-study-card__title font-['Geist:Medium'] font-medium text-[#1a0e14] tracking-[-1.68px] m-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            study.name,
                                            " - "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6e5b63] font-normal tracking-[-0.84px]",
                                        children: study.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "case-study-card__kpis content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full",
                                "data-name": "KPI chips",
                                children: study.kpis.map((kpi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-[#e7dadd] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[7px] relative rounded-[999px] shrink-0",
                                        "data-name": "KPI",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-['Geist:Medium'] text-[#7a0d3b] text-[13px]",
                                                children: kpi.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-['Geist:Regular'] text-[#6e5b63] text-[13px]",
                                                children: kpi.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, `${kpi.value}-${kpi.label}`, true, {
                                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            [
                                [
                                    "Problem",
                                    study.problem
                                ],
                                [
                                    "What I did",
                                    study.work
                                ],
                                [
                                    "Outcome",
                                    study.outcome
                                ]
                            ].map(([heading, copy])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[#e7dadd] border-solid border-t content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0 w-full",
                                    "data-name": heading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] text-[#7a0d3b] text-[12px] leading-[16px] tracking-[0.72px] uppercase",
                                            children: heading
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] text-[#6e5b63] text-[16px] leading-[26px] m-0",
                                            children: copy
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, heading, true, {
                                    fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "bg-[#1a0e14] content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0 text-[15px] leading-[20px] text-white no-underline",
                                "data-name": "CTA/Case",
                                href: study.href,
                                children: [
                                    "Read case study",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "",
                                        "aria-hidden": "true",
                                        className: "size-[16px]",
                                        src: "/assets/c3095.svg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeCaseStudies.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HomeCaseStudies.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
_c1 = CaseStudyCard;
function HomeCaseStudies() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "case-study-stack",
        children: [
            caseStudies.map((study)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaseStudyCard, {
                    study: study
                }, study.number, false, {
                    fileName: "[project]/src/components/HomeCaseStudies.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "case-study-stack__footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "featured-cases__all",
                    "data-name": "CTA/AllWork",
                    href: "/work",
                    children: [
                        "All case studies ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCaseStudies.tsx",
                            lineNumber: 391,
                            columnNumber: 28
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomeCaseStudies.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HomeCaseStudies.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HomeCaseStudies.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_c2 = HomeCaseStudies;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "CaseStudyCard");
__turbopack_context__.k.register(_c2, "HomeCaseStudies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/design-pages/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeReviewFixesV2V3Eu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// label + naam, dono ek hi loop mein
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeCaseStudies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HomeCaseStudies.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const assetPathPrefix = "/assets";
const imgImage1 = `${assetPathPrefix}/8841c.png`;
const imgIconArrow = `${assetPathPrefix}/c3095.svg`;
const imgEllipse1 = `${assetPathPrefix}/2c9e9.svg`;
const imgIconArrow1 = `${assetPathPrefix}/e3aeb.svg`;
const imgFrame = `${assetPathPrefix}/67392.svg`;
const imgFrame1 = `${assetPathPrefix}/d4cb8.svg`;
const imgFrame2 = `${assetPathPrefix}/764f1.svg`;
const imgFrame3 = `${assetPathPrefix}/39cd9.svg`;
const imgFrame4 = `${assetPathPrefix}/d4cb8.svg`;
const imgFrame5 = `${assetPathPrefix}/764f1.svg`;
const imgFrame6 = `${assetPathPrefix}/39cd9.svg`;
const testimonials = [
    {
        quote: "Really impressed with her work! Clean, professional designs with great attention to detail and a strong understanding of user experience. Would highly recommend her for UI/UX design work!",
        name: "Muhammad Ali",
        role: "CEO · Design by Ali",
        initials: "MA",
        group: "CEO",
        color: "#f6dae5"
    },
    {
        quote: "A sharp eye for clean aesthetics.",
        name: "Izzah Khawar",
        role: "iOS Developer",
        initials: "IK",
        group: "Colleagues",
        color: "#ead3de"
    },
    {
        quote: "Intuitive, visually appealing designs.",
        name: "Syed Shayan Naqvi",
        role: "Mentor",
        initials: "SN",
        group: "Colleagues",
        color: "#f4e3d6"
    },
    {
        quote: "User-friendly and easy to implement.",
        name: "Munib ur Rehman",
        role: "Product Manager",
        initials: "MR",
        group: "Colleagues",
        color: "#e5e9f8"
    }
];
const designerStrip = [
    "Product Design",
    "UX Research",
    "Mobile Apps",
    "Web & SaaS",
    "Admin Dashboards",
    "Design Systems",
    "Prototyping",
    "Developer Handoff"
];
function DesignerStrip() {
    const items = [
        ...designerStrip,
        ...designerStrip
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden whitespace-nowrap border-y border-solid border-[#e7dadd] bg-white py-[28px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "marquee-track items-center gap-[28px]",
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-[28px]",
                        children: [
                            i % designerStrip.length % 2 === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-['Geist:Medium'] text-[24px] font-medium leading-[30px] tracking-[-0.48px] text-[#1a0e14]",
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-['Instrument_Serif:Italic'] italic text-[28px] leading-[30px] tracking-[-0.28px] text-[#7a0d3b]",
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[16px] leading-[26px] text-[#7a0d3b]",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/design-pages/Home.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/design-pages/Home.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-0 w-[200px] bg-gradient-to-r from-[rgba(255,255,255,0)] to-white"
            }, void 0, false, {
                fileName: "[project]/src/design-pages/Home.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/design-pages/Home.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = DesignerStrip;
const workedWith = [
    {
        name: "Izzah Khawar",
        role: "iOS Developer"
    },
    {
        name: "Asima Akhtar",
        role: "Android Developer"
    },
    {
        name: "Muhammad Ali",
        role: "CEO"
    },
    {
        name: "Muhammad Zahid",
        role: "Marketing"
    },
    {
        name: "Munib ur Rehman",
        role: "SQA"
    },
    {
        name: "Aftab Ahmed",
        role: "Designer"
    },
    {
        name: "Nouman Ahmed",
        role: "Designer"
    },
    {
        name: "Abdul Qadeer",
        role: "Project Manager"
    }
];
function WorkedWithStrip() {
    const loop = [
        {
            label: true
        },
        ...workedWith,
        {
            label: true
        },
        ...workedWith
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden whitespace-nowrap border-y border-solid border-[#e7dadd] bg-white py-[28px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "marquee-track items-center gap-[28px]",
                children: loop.map((p, i)=>{
                    if (p.label) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 items-center gap-[28px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "m-0 font-['Geist:Medium'] text-[12px] font-medium uppercase leading-[16px] tracking-[0.72px] text-[#7a0d3b]",
                                    children: "(Worked with)"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-[32px] w-px bg-[#e7dadd]"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 111,
                            columnNumber: 15
                        }, this);
                    }
                    const idx = i % (workedWith.length + 1);
                    const isSans = idx % 2 === 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-[28px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: isSans ? "m-0 flex items-baseline gap-[10px] font-['Geist:Medium'] font-medium text-[#1a0e14]" : "m-0 flex items-baseline gap-[10px] font-['Instrument_Serif:Italic'] italic text-[#7a0d3b]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isSans ? "text-[24px] leading-[30px] tracking-[-0.24px]" : "text-[28px] leading-[30px] tracking-[-0.28px]",
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-['Geist:Regular'] text-[13px] font-normal not-italic leading-[30px] tracking-[0.26px] text-[#6e5b63]",
                                        children: p.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[16px] text-[#7a0d3b]",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/design-pages/Home.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/design-pages/Home.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-0 w-[200px] bg-gradient-to-r from-[rgba(255,255,255,0)] to-white"
            }, void 0, false, {
                fileName: "[project]/src/design-pages/Home.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/design-pages/Home.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c1 = WorkedWithStrip;
function HomeReviewFixesV2V3Eu() {
    _s();
    const [testimonialGroup, setTestimonialGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [testimonialIndex, setTestimonialIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const visibleTestimonials = testimonialGroup === "All" ? testimonials : testimonials.filter((testimonial)=>testimonial.group === testimonialGroup);
    const activeTestimonial = visibleTestimonials[testimonialIndex % visibleTestimonials.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#f8f4f2] relative size-full",
        "data-node-id": "346:320",
        "data-name": "Home — Review fixes (v2) — v3 EU",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bg-[#f8f4f2] content-stretch flex flex-col items-end left-[-1px] top-[3px] w-[1442px]",
            "data-node-id": "346:321",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#f8f4f2] border-[#e7dadd] border-b border-solid content-stretch flex items-center justify-between px-[270px] py-[22px] relative shrink-0 w-full",
                    "data-node-id": "346:322",
                    "data-name": "Nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "[word-break:break-word] content-stretch flex font-['Geist:Medium'] font-medium items-start leading-[28px] overflow-clip relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-nowrap",
                            "data-node-id": "I346:322;7:113",
                            "data-name": "Logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative shrink-0 text-[#1a0e14]",
                                    "data-node-id": "I346:322;7:114",
                                    children: "Kanza Iqbal"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative shrink-0 text-[#7a0d3b]",
                                    "data-node-id": "I346:322;7:115",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "[word-break:break-word] content-stretch cursor-pointer flex font-['Geist:Regular'] font-normal gap-[40px] items-start leading-[0] overflow-clip relative shrink-0 text-[#1a0e14] text-[16px] whitespace-nowrap",
                            "data-node-id": "I346:322;7:116",
                            "data-name": "Links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "block relative shrink-0",
                                    "data-node-id": "I346:322;7:117",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "leading-[26px]",
                                        children: "Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "block relative shrink-0",
                                    "data-node-id": "I346:322;7:118",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "leading-[26px]",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "block relative shrink-0",
                                    "data-node-id": "I346:322;7:120",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "leading-[26px]",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0",
                            "data-node-id": "I346:322;7:121",
                            "data-name": "Right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap",
                                    "data-node-id": "I346:322;7:122",
                                    children: "Lahore · PKT"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "bg-[#1a0e14] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0",
                                    "data-node-id": "I346:322;7:123",
                                    "data-name": "CTA",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap",
                                            "data-node-id": "I346:322;7:123;3:42",
                                            children: "Let’s talk"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative shrink-0 size-[16px]",
                                            "data-node-id": "I346:322;7:123;3:43",
                                            "data-name": "icon/arrow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                alt: "",
                                                className: "absolute block inset-0 max-w-none size-full",
                                                src: imgIconArrow
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#f8f4f2] content-stretch flex flex-col gap-[75px] items-start overflow-clip pb-[100px] pt-[56px] px-[270px] relative shrink-0 w-full",
                    "data-node-id": "346:323",
                    "data-name": "Hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full",
                            "data-node-id": "346:324",
                            "data-name": "Top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex flex-row-reverse items-center justify-between relative shrink-0 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center gap-[8px] font-['Geist:Regular'] font-normal leading-[22px] text-[#6e5b63] text-[14px] whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Kanza Iqbal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "h-[14px] w-px bg-[#6e5b63]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Lahore, PK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "content-stretch flex gap-[8px] items-center relative shrink-0",
                                            "data-node-id": "346:344",
                                            "data-name": "Status",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative shrink-0 size-[7px]",
                                                    "data-node-id": "346:345",
                                                    "data-name": "Ellipse",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        alt: "",
                                                        className: "absolute block inset-0 max-w-none size-full",
                                                        src: imgEllipse1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[22px] relative shrink-0 text-[#6e5b63] text-[14px] whitespace-nowrap",
                                                    "data-node-id": "346:346",
                                                    children: `Available for full-time & freelance`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[32px] relative top-[90px] shrink-0 text-[#7a0d3b] text-[20px] tracking-[-0.1px] whitespace-nowrap",
                                    "data-node-id": "346:325",
                                    children: `(UI/UX & Product Designer)`
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content-stretch flex items-end relative top-[40px] shrink-0 w-[900px]",
                            "data-node-id": "346:326",
                            "data-name": "Row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative",
                                "data-node-id": "346:327",
                                "data-name": "Headline + sub",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 font-['Geist:Medium'] font-medium leading-[0] min-w-full relative text-[#1a0e14] text-[0px] tracking-[-3.84px] w-[min-content]",
                                        "data-node-id": "346:328",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-[100px] text-[96px]",
                                                        children: `Interfaces that feel`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-[100px] text-[96px]",
                                                        children: `obvious from `
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "[word-break:break-word] font-['Instrument_Serif:Italic'] italic leading-[110px] text-[#7a0d3b] text-[104px] tracking-[-2.08px]",
                                                        children: "the very"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "[word-break:break-word] font-['Instrument_Serif:Italic'] italic leading-[110px] text-[#7a0d3b] text-[104px] tracking-[-2.08px]",
                                                        children: "first tap"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-[100px] text-[96px]",
                                                        children: "."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-['Geist:Regular'] font-normal leading-[32px] relative shrink-0 text-[#6e5b63] text-[20px] tracking-[-0.1px] w-[640px]",
                                        "data-node-id": "346:329",
                                        children: `UI/UX & Product Designer focused on dashboards, SaaS and mobile apps — accessible (WCAG AA) interfaces that turn complex flows into one clear next step.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-[#1a0e14] border-solid border-t content-stretch flex gap-[64px] items-end overflow-clip pt-[64px] relative shrink-0 w-full",
                            "data-node-id": "346:330",
                            "data-name": "Bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center overflow-clip relative shrink-0 w-[264px]",
                                    "data-node-id": "346:331",
                                    "data-name": "Focus",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] uppercase w-full",
                                            "data-node-id": "346:332",
                                            children: "Focus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#1a0e14] text-[16px] w-full",
                                            "data-node-id": "346:333",
                                            children: `Mobile · Web & SaaS · Dashboards`
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative",
                                    "data-node-id": "346:334",
                                    "data-name": "Experience",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] uppercase w-full",
                                            "data-node-id": "346:335",
                                            children: "Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#1a0e14] text-[16px] w-full",
                                            "data-node-id": "346:336",
                                            children: "3+ years · 20+ projects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative",
                                    "data-node-id": "346:337",
                                    "data-name": "Currently",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#6e5b63] text-[12px] tracking-[0.72px] uppercase w-full",
                                            "data-node-id": "346:338",
                                            children: "Currently"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#1a0e14] text-[16px] w-full",
                                            "data-node-id": "346:339",
                                            children: "UI/UX Designer at Terafort"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0",
                                    "data-node-id": "346:340",
                                    "data-name": "CTAs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-[#1a0e14] content-stretch cursor-pointer flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0",
                                            "data-node-id": "346:341",
                                            "data-name": "CTA/Work",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap",
                                                    "data-node-id": "I346:341;3:42",
                                                    children: "View case studies"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative shrink-0 size-[16px]",
                                                    "data-node-id": "I346:341;3:43",
                                                    "data-name": "icon/arrow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        alt: "",
                                                        className: "absolute block inset-0 max-w-none size-full",
                                                        src: imgIconArrow
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-[#1a0e14] border-[1.2px] border-solid content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0",
                                            "data-node-id": "346:342",
                                            "data-name": "Button",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap",
                                                "data-node-id": "I346:342;3:50",
                                                children: "Download CV"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute flex h-[501px] items-center justify-center right-[270px] top-[263px] w-[500px]",
                            "data-node-id": "346:343",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "-scale-y-100 flex-none rotate-180",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[501px] relative w-[484px]",
                                    "data-name": "image 1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            alt: "",
                                            className: "absolute h-[104.93%] left-[-8.58%] max-w-none top-[-4.93%] w-[108.58%]",
                                            src: imgImage1
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignerStrip, {}, void 0, false, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white content-stretch flex flex-col items-start overflow-clip px-[270px] py-[64px] relative shrink-0 w-full",
                    "data-node-id": "346:348",
                    "data-name": "Selected work",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "[word-break:break-word] content-stretch flex items-end justify-between relative shrink-0 w-full",
                            "data-node-id": "346:349",
                            "data-name": "Section Header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex flex-[1_0_0] flex-col font-['Geist:Medium'] font-medium gap-[16px] items-start min-w-px overflow-clip relative",
                                    "data-node-id": "I346:349;7:144",
                                    "data-name": "Left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap",
                                            "data-node-id": "I346:349;7:145",
                                            children: "(Selected work)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 474,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[60px] min-w-full relative shrink-0 text-[#1a0e14] text-[56px] tracking-[-1.68px] w-[min-content]",
                                            "data-node-id": "I346:349;7:146",
                                            children: "Case studies, not just screens."
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-['Geist:Regular'] font-normal leading-[32px] relative shrink-0 text-[#6e5b63] text-[20px] tracking-[-0.1px] w-[440px]",
                                    "data-node-id": "I346:349;7:147",
                                    children: "For every project: the problem, the decisions I made and why, and what changed."
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeCaseStudies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 459,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#f8f4f2] content-stretch flex flex-col items-start overflow-clip px-[270px] py-[89px] relative shrink-0 w-full",
                    "data-node-id": "346:398",
                    "data-name": "Testimonials",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content-stretch flex gap-[124px] items-center overflow-clip relative shrink-0 w-full",
                        "data-node-id": "346:399",
                        "data-name": "Split",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[340px]",
                                "data-node-id": "346:400",
                                "data-name": "Left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap",
                                        "data-node-id": "346:401",
                                        children: "(Kind words)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] min-w-full relative shrink-0 text-[#1a0e14] text-[56px] tracking-[-1.68px] w-[min-content]",
                                        "data-node-id": "346:402",
                                        children: "What people say about working with me."
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]",
                                        "data-node-id": "346:403",
                                        children: `Recommendations from managers, colleagues and clients. `
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full",
                                        "data-node-id": "346:404",
                                        "data-name": "Legend",
                                        children: [
                                            "All",
                                            "CEO",
                                            "Colleagues"
                                        ].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-pressed": testimonialGroup === group,
                                                className: `testimonial-filter ${testimonialGroup === group ? "is-active" : ""}`,
                                                "data-name": `Testimonials/${group}`,
                                                onClick: ()=>{
                                                    setTestimonialGroup(group);
                                                    setTestimonialIndex(0);
                                                },
                                                type: "button",
                                                children: group
                                            }, group, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "content-stretch flex gap-[16px] items-center overflow-clip pt-[8px] relative shrink-0",
                                        "data-node-id": "346:408",
                                        "data-name": "Deck controls",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": "Previous testimonial",
                                                className: "testimonial-arrow testimonial-arrow--previous",
                                                "data-node-id": "346:409",
                                                "data-name": "Arrow ←",
                                                onClick: ()=>setTestimonialIndex((testimonialIndex - 1 + visibleTestimonials.length) % visibleTestimonials.length),
                                                type: "button",
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0",
                                                "data-node-id": "346:411",
                                                "data-name": "Dots",
                                                children: visibleTestimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        "aria-label": `Show testimonial from ${testimonial.name}`,
                                                        "aria-current": testimonialIndex === index ? "true" : undefined,
                                                        className: `testimonial-dot ${testimonialIndex === index ? "is-active" : ""}`,
                                                        onClick: ()=>setTestimonialIndex(index),
                                                        type: "button"
                                                    }, testimonial.name, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                "aria-label": "Next testimonial",
                                                className: "testimonial-arrow testimonial-arrow--next",
                                                "data-node-id": "346:415",
                                                "data-name": "Arrow →",
                                                onClick: ()=>setTestimonialIndex((testimonialIndex + 1) % visibleTestimonials.length),
                                                type: "button",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 591,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[850px] relative shrink-0 w-[840px]",
                                "data-node-id": "346:417",
                                "data-name": "Testimonial deck",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute flex h-[70px] items-center justify-center left-[50.9px] top-[450px] w-[820px]",
                                        "data-node-id": "346:418",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-none rotate-[2deg]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#f4e3d6] h-[460px] relative rounded-[32px] w-[800px]",
                                                "data-name": "Stack card · back 2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 616,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute flex h-[650px] items-center justify-center left-[70px] top-[120px] w-[820px]",
                                        "data-node-id": "346:419",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "-rotate-2 flex-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#ead3de] h-[500px] relative rounded-[32px] w-[800px]",
                                                "data-name": "Stack card · back 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 628,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 627,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "testimonial-card absolute content-stretch drop-shadow-[0px_24px_24px_rgba(77,13,38,0.1)] flex flex-col h-[550px] items-start justify-between left-[40px] pb-[40px] pt-[100px] px-[56px] rounded-[32px] top-[120px] w-[820px]",
                                        "data-node-id": "346:420",
                                        "data-name": "Stack card · front",
                                        style: {
                                            backgroundColor: activeTestimonial.color
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[40px] relative shrink-0 text-[#1a0e14] text-[24px] tracking-[-0.48px] w-[582px]",
                                                "data-node-id": "346:421",
                                                children: activeTestimonial.quote
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "[word-break:break-word] absolute font-['Instrument_Serif:Italic'] italic leading-[140px] left-[710px] text-[200px] text-[rgba(122,13,59,0.18)] top-[60px] whitespace-nowrap",
                                                "data-node-id": "346:422",
                                                children: "”"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 647,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full",
                                                "data-node-id": "346:423",
                                                "data-name": "Person",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#1a0e14] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]",
                                                        "data-node-id": "346:424",
                                                        "data-name": "Avatar",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "[word-break:break-word] font-['Instrument_Serif:Italic'] italic leading-[normal] relative shrink-0 text-[22px] text-white whitespace-nowrap",
                                                            "data-node-id": "346:425",
                                                            children: activeTestimonial.initials
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/design-pages/Home.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px overflow-clip relative whitespace-nowrap",
                                                        "data-node-id": "346:426",
                                                        "data-name": "Name & role",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-['Geist:Medium'] font-medium relative shrink-0 text-[#1a0e14] text-[17px]",
                                                                "data-node-id": "346:427",
                                                                children: activeTestimonial.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-['Geist:Regular'] font-normal relative shrink-0 text-[#6e5b63] text-[14px]",
                                                                "data-node-id": "346:428",
                                                                children: activeTestimonial.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-[rgba(122,13,59,0.5)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[999px] shrink-0",
                                                        "data-node-id": "346:429",
                                                        "data-name": "Relationship",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1a0e14] text-[13px] whitespace-nowrap",
                                                            "data-node-id": "346:430",
                                                            children: activeTestimonial.group
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/design-pages/Home.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/design-pages/Home.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, activeTestimonial.name, true, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 634,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/design-pages/Home.tsx",
                                lineNumber: 607,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/design-pages/Home.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkedWithStrip, {}, void 0, false, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 705,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white content-stretch flex gap-[200px] items-start overflow-clip px-[270px] py-[72px] relative shrink-0 w-full",
                    "data-node-id": "346:450",
                    "data-name": "Services",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[260px]",
                            "data-node-id": "346:451",
                            "data-name": "Left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#7a0d3b] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap",
                                    "data-node-id": "346:452",
                                    children: "(What I do)"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 716,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-['Geist:Regular'] font-normal leading-[26px] min-w-full relative shrink-0 text-[#6e5b63] text-[16px] w-[min-content]",
                                    "data-node-id": "346:453",
                                    children: "Four ways I can help your product — from the first question to a build-ready file."
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 722,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 711,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative",
                            "data-node-id": "346:454",
                            "data-name": "List",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full",
                                    "data-node-id": "346:455",
                                    "data-name": "Service/Product & UX Design",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]",
                                            "data-node-id": "I346:455;80:1507",
                                            children: `Product & UX Design`
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]",
                                            "data-node-id": "I346:455;80:1508",
                                            children: "I map the whole flow before drawing a screen, so every step has a reason to exist."
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]",
                                            "data-node-id": "I346:455;80:1509",
                                            "data-name": "Arrow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0 size-[16px]",
                                                "data-node-id": "I346:455;80:1510",
                                                "data-name": "Frame",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    className: "absolute block inset-0 max-w-none size-full",
                                                    src: imgFrame
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 756,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full",
                                    "data-node-id": "346:456",
                                    "data-name": "Service/Mobile App Design",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]",
                                            "data-node-id": "I346:456;80:1507",
                                            children: "Mobile App Design"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 774,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]",
                                            "data-node-id": "I346:456;80:1508",
                                            children: "iOS and Android screens that feel easy from the very first tap."
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 780,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]",
                                            "data-node-id": "I346:456;80:1509",
                                            "data-name": "Arrow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0 size-[16px]",
                                                "data-node-id": "I346:456;80:1510",
                                                "data-name": "Frame",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    className: "absolute block inset-0 max-w-none size-full",
                                                    src: imgFrame
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 791,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 786,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 769,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full",
                                    "data-node-id": "346:457",
                                    "data-name": "Service/Dashboards & SaaS",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]",
                                            "data-node-id": "I346:457;80:1507",
                                            children: `Dashboards & SaaS`
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 809,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]",
                                            "data-node-id": "I346:457;80:1508",
                                            children: "Dense data turned into calm tables, filters and charts teams can actually work in."
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]",
                                            "data-node-id": "I346:457;80:1509",
                                            "data-name": "Arrow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0 size-[16px]",
                                                "data-node-id": "I346:457;80:1510",
                                                "data-name": "Frame",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    className: "absolute block inset-0 max-w-none size-full",
                                                    src: imgFrame
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 825,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 820,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 804,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-[#e7dadd] border-solid border-t content-stretch flex gap-[32px] items-center py-[32px] relative shrink-0 w-full",
                                    "data-node-id": "346:458",
                                    "data-name": "Service/Design Systems & Handoff",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[54px] min-w-px relative text-[#1a0e14] text-[48px] tracking-[-1.92px]",
                                            "data-node-id": "I346:458;80:1507",
                                            children: `Design Systems & Handoff`
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 843,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[#6e5b63] text-[16px] w-[320px]",
                                            "data-node-id": "I346:458;80:1508",
                                            children: "Components, tokens and specs, so developers build exactly what was designed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 847,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#f1e8e9] content-stretch flex flex-col items-center justify-center opacity-0 overflow-clip relative rounded-[999px] shrink-0 size-[44px]",
                                            "data-node-id": "I346:458;80:1509",
                                            "data-name": "Arrow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0 size-[16px]",
                                                "data-node-id": "I346:458;80:1510",
                                                "data-name": "Frame",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    className: "absolute block inset-0 max-w-none size-full",
                                                    src: imgFrame
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 864,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 854,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 838,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#e7dadd] h-px relative shrink-0 w-full",
                                    "data-node-id": "346:459",
                                    "data-name": "Bottom line"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 872,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex items-start overflow-clip pt-[40px] relative shrink-0",
                                    "data-node-id": "346:460",
                                    "data-name": "Button row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-[#1a0e14] border-[1.2px] border-solid content-stretch flex gap-[10px] items-center px-[24px] py-[15px] relative rounded-[999px] shrink-0",
                                        "data-node-id": "346:461",
                                        "data-name": "CTA/Process",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[20px] relative shrink-0 text-[#1a0e14] text-[15px] whitespace-nowrap",
                                                "data-node-id": "I346:461;3:50",
                                                children: "See how I work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 887,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0 size-[16px]",
                                                "data-node-id": "I346:461;3:51",
                                                "data-name": "icon/arrow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    className: "absolute block inset-0 max-w-none size-full",
                                                    src: imgIconArrow1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/design-pages/Home.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 893,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 877,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 706,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#1a0e14] content-stretch flex flex-col gap-[90px] items-start pb-[80px] pt-[60px] px-[270px] relative shrink-0 w-full",
                    "data-node-id": "346:752",
                    "data-name": "Footer (mine)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[#f6dae5] text-[12px] tracking-[0.72px] uppercase whitespace-nowrap",
                            "data-node-id": "346:753",
                            children: "Got something in mind?"
                        }, void 0, false, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 913,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-white tracking-[-7px] whitespace-nowrap",
                            "data-node-id": "346:754",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "leading-[133px] text-[140px]",
                                    children: `Let’s work `
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 923,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['Instrument_Serif:Italic'] italic leading-[133px] text-[#f6dae5] text-[150px] tracking-[-3px]",
                                    children: "together."
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 924,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 919,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content-stretch flex gap-[16px] items-center overflow-clip pt-[8px] relative shrink-0",
                            "data-node-id": "346:755",
                            "data-name": "Email row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[60px] relative shrink-0 text-[56px] text-white tracking-[-1.68px] whitespace-nowrap",
                                    "data-node-id": "346:756",
                                    children: "kannyqb@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 933,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]",
                                    "data-node-id": "346:757",
                                    "data-name": "Copy email (icon)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative shrink-0 size-[18px]",
                                        "data-node-id": "346:758",
                                        "data-name": "Frame",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            alt: "",
                                            className: "absolute block inset-0 max-w-none size-full",
                                            src: imgFrame4
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 949,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/design-pages/Home.tsx",
                                        lineNumber: 944,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 939,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-[rgba(255,255,255,0.35)] border-solid content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[11px] relative rounded-[999px] shrink-0",
                                    "data-node-id": "346:761",
                                    "data-name": "CTA/LinkedIn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative shrink-0 size-[18px]",
                                            "data-node-id": "346:762",
                                            "data-name": "Frame",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                alt: "",
                                                className: "absolute block inset-0 max-w-none size-full",
                                                src: imgFrame5
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 966,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 961,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap",
                                            "data-node-id": "346:764",
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 972,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative shrink-0 size-[14px]",
                                            "data-node-id": "346:765",
                                            "data-name": "Frame",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                alt: "",
                                                className: "absolute block inset-0 max-w-none size-full",
                                                src: imgFrame6
                                            }, void 0, false, {
                                                fileName: "[project]/src/design-pages/Home.tsx",
                                                lineNumber: 983,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 978,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 956,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 928,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "[word-break:break-word] border-solid border-t border-white content-stretch flex gap-[48px] items-start overflow-clip pt-[56px] relative shrink-0 text-white w-full whitespace-nowrap",
                            "data-node-id": "346:767",
                            "data-name": "Columns",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative",
                                    "data-node-id": "346:768",
                                    "data-name": "Local time",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase",
                                            "data-node-id": "346:769",
                                            children: "Based in"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]",
                                            "data-node-id": "346:770",
                                            children: "Lahore — 14:30 PKT (GMT+5)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]",
                                            "data-node-id": "346:771",
                                            children: "Usually replies within 1 working day"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 996,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative",
                                    "data-node-id": "346:772",
                                    "data-name": "Socials",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase",
                                            "data-node-id": "346:773",
                                            children: "Elsewhere"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]",
                                            "data-node-id": "346:774",
                                            children: "Behance ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]",
                                            "data-node-id": "346:775",
                                            children: "Fiverr ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 1020,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative",
                                    "data-node-id": "346:776",
                                    "data-name": "More",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase",
                                            "data-node-id": "346:777",
                                            children: "More"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1049,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]",
                                            "data-node-id": "346:778",
                                            children: "Resume (PDF) ↓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1055,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-['Geist:Regular'] font-normal leading-[26px] relative shrink-0 text-[16px]",
                                            "data-node-id": "346:779",
                                            children: `Privacy & Impressum`
                                        }, void 0, false, {
                                            fileName: "[project]/src/design-pages/Home.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 991,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between leading-[22px] overflow-clip pt-[40px] relative shrink-0 text-[14px] text-white w-full whitespace-nowrap",
                            "data-node-id": "346:780",
                            "data-name": "Bottom bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative shrink-0",
                                    "data-node-id": "346:781",
                                    children: `© 2026 Kanza Iqbal · Designed & built with care in Lahore`
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "relative shrink-0",
                                    "data-node-id": "346:782",
                                    children: "Back to top ↑"
                                }, void 0, false, {
                                    fileName: "[project]/src/design-pages/Home.tsx",
                                    lineNumber: 1076,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/design-pages/Home.tsx",
                            lineNumber: 1067,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/design-pages/Home.tsx",
                    lineNumber: 908,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/design-pages/Home.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/design-pages/Home.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(HomeReviewFixesV2V3Eu, "TlGs9s+9e4TENtTmTH6z6QIJvIA=");
_c2 = HomeReviewFixesV2V3Eu;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DesignerStrip");
__turbopack_context__.k.register(_c1, "WorkedWithStrip");
__turbopack_context__.k.register(_c2, "HomeReviewFixesV2V3Eu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-slider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSlider(initialPosition = 50) {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPosition);
    function updatePosition(nextPosition) {
        setPosition(Math.min(100, Math.max(0, nextPosition)));
    }
    return {
        position,
        updatePosition
    };
}
_s(useSlider, "7dIHCmOULwMh9N/jKcLHXbLb4ac=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1ogc6w3967xeg._.js.map