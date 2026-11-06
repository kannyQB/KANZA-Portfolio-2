module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/interaction-layer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractionLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React marks every DOM node with a __reactFiber$ key once it has been
// hydrated. We wait for that, so we never change classes before hydration.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function routeForLabel(label) {
    if (/kanza iqbal/i.test(label)) return "/";
    if (/screen mirroring/i.test(label)) return "/work/screen-mirroring";
    if (/taskflow/i.test(label)) return "/work/taskflow";
    if (/\bvigil\b/i.test(label)) return "/work/vigil";
    if (/about/i.test(label)) return "/about";
    if (/contact|let’s talk|let's talk/i.test(label)) return "/contact";
    if (/work|case studies/i.test(label)) return "/work";
    if (/back to home/i.test(label)) return "/";
    return null;
}
function matchesProjectFilter(filter, project) {
    const projectName = `${project.dataset.name ?? ""} ${project.textContent ?? ""}`.toLowerCase();
    if (filter === "All") return true;
    if (filter === "Concepts") return projectName.includes("concept");
    if (filter === "SaaS & dashboards") {
        return /vigil|taskflow|maisonette/.test(projectName);
    }
    if (filter === "Mobile apps") {
        return /screen mirroring|ai face aging|freelance ops|typesnip/.test(projectName);
    }
    if (filter === "Web") return /zorvex|inkspire/.test(projectName);
    return true;
}
function InteractionLayer({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const selector = [
            "[data-name='Hero']",
            "[data-name='Selected work']",
            "[data-name='Testimonials']",
            "[data-name='Services']",
            "[data-name='Profile']",
            "[data-name='Experience']",
            "[data-name='Skills']",
            "[data-name='Tools']",
            "[data-name^='Section/']",
            "[data-name^='Card/']"
        ].join(",");
        let observer;
        let frame = 0;
        let tries = 0;
        const isHydrated = (element)=>Object.keys(element).some((key)=>key.startsWith("__reactFiber$"));
        const start = ()=>{
            const elements = Array.from(document.querySelectorAll(selector));
            if (elements.some((el)=>!isHydrated(el)) && tries++ < 120) {
                frame = requestAnimationFrame(start);
                return;
            }
            const io = new IntersectionObserver((entries)=>{
                for (const entry of entries){
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            }, {
                rootMargin: "0px 0px -8% 0px",
                threshold: 0.08
            });
            observer = io;
            for (const element of elements){
                element.classList.add("reveal-ready");
                io.observe(element);
            }
        };
        frame = requestAnimationFrame(start);
        return ()=>{
            cancelAnimationFrame(frame);
            observer?.disconnect();
        };
    }, [
        pathname
    ]);
    function handleClick(event) {
        const target = event.target.closest([
            "a",
            "button",
            "[data-name='Logo']",
            "[data-name='Links'] > *",
            "[data-name^='CTA']",
            "[data-name^='Card/']",
            "[data-name^='Case card/']",
            "[data-name^='Row/']",
            "[data-name^='Filter/']",
            "[data-name^='Chip/']",
            "[data-name^='View/']",
            "[data-name='Send message']",
            "[data-name^='Copy email']"
        ].join(","));
        if (!target) return;
        const label = target.textContent?.trim() ?? "";
        const name = target.dataset.name ?? "";
        if (target.closest("[data-name='Before and after slider']")) return;
        if (/back to top/i.test(label)) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }
        if (/^Copy email/.test(name)) {
            if (!navigator.clipboard) {
                console.error("Clipboard access is unavailable in this browser.");
                return;
            }
            void navigator.clipboard.writeText("kannyqb@gmail.com").then(()=>{
                target.setAttribute("data-copied", "true");
                window.setTimeout(()=>target.removeAttribute("data-copied"), 1200);
            }).catch((error)=>{
                console.error("Could not copy the email address.", error);
            });
            return;
        }
        if (name === "Send message" || /send message/i.test(label)) {
            router.push("/message-sent");
            return;
        }
        if (name.startsWith("Filter/")) {
            const filter = name.slice("Filter/".length);
            const page = target.closest(".work-page");
            const projects = page?.querySelectorAll("[data-name^='Card/'], [data-name^='Row/']");
            if (!page || !projects?.length) return;
            for (const project of projects){
                project.hidden = !matchesProjectFilter(filter, project);
            }
            for (const row of page.querySelectorAll("[data-name='Row']")){
                const cards = Array.from(row.children).filter((child)=>child instanceof HTMLElement && child.matches("[data-name^='Card/']"));
                if (cards.length) {
                    row.hidden = cards.every((card)=>card.hidden);
                }
            }
            for (const option of page.querySelectorAll("[data-name^='Filter/']")){
                const active = option === target;
                option.setAttribute("aria-pressed", String(active));
                option.dataset.active = String(active);
            }
            const count = page.querySelector("[data-name='Right'] p");
            if (count) {
                const visibleProjects = Array.from(projects).filter((project)=>!project.hidden).length;
                count.textContent = `${String(visibleProjects).padStart(2, "0")} projects`;
            }
            return;
        }
        if (/^grid$/i.test(label) || /\/grid$/i.test(name)) {
            router.push("/work?view=grid");
            return;
        }
        if (/^list$/i.test(label) || /\/list$/i.test(name)) {
            router.push("/work?view=list");
            return;
        }
        const caseStudyName = target.closest("[data-name^='Case card/']")?.dataset.name?.slice("Case card/".length);
        const route = name === "CTA/Case" ? routeForLabel(caseStudyName ?? "") ?? "/work" : name === "CTA/Process" ? "/about" : routeForLabel(name.startsWith("Card/") ? name.slice(5) : name.startsWith("Row/") ? name.slice(4) : label);
        if (route) {
            event.preventDefault();
            router.push(route);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "route-shell",
        onClickCapture: handleClick,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Mobile navigation",
                className: "mobile-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: pathname.startsWith("/work") ? "is-active" : "",
                        href: "/work",
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/src/components/interaction-layer.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: pathname === "/about" ? "is-active" : "",
                        href: "/about",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/interaction-layer.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: pathname === "/contact" ? "is-active" : "",
                        href: "/contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/interaction-layer.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interaction-layer.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, pathname, true, {
        fileName: "[project]/src/components/interaction-layer.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1gdbkzcgpzuga._.js.map