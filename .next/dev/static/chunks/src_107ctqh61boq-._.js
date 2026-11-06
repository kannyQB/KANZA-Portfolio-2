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

//# sourceMappingURL=src_107ctqh61boq-._.js.map