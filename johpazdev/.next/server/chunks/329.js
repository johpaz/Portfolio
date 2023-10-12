exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 39085:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45473))

/***/ }),

/***/ 99294:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22478));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77966));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12209));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72017));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17878));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39959));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13962))

/***/ }),

/***/ 45473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Error({ error, reset }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Log the error to an error reporting service
        console.error(error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Something went wrong!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: // Attempt to recover by trying to re-render the segment
                ()=>reset(),
                children: "Try again"
            })
        ]
    });
}


/***/ }),

/***/ 22478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54256);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71072);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 



function Providers({ children, themeProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_system__WEBPACK_IMPORTED_MODULE_3__/* .NextUIProvider */ .w, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
            ...themeProps,
            children: children
        })
    });
}


/***/ }),

/***/ 94642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D7: () => (/* binding */ DiscordIcon),
/* harmony export */   Ve: () => (/* binding */ MoonFilledIcon),
/* harmony export */   ek: () => (/* binding */ SunFilledIcon),
/* harmony export */   fy: () => (/* binding */ GitHubIcon),
/* harmony export */   vr: () => (/* binding */ GooglePlayIcon)
/* harmony export */ });
/* unused harmony exports LinkedInIcon, SearchIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95954);



const LinkedInIcon = ()=>/*#__PURE__*/ _jsx(Image, {
        src: "./icons/linkedin.png",
        width: 60,
        height: 60
    });
const GitHubIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_image__WEBPACK_IMPORTED_MODULE_2__/* .image_default */ .J, {
        src: "/icons/iconogithub.png",
        width: 60,
        height: 60
    });
const DiscordIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_image__WEBPACK_IMPORTED_MODULE_2__/* .image_default */ .J, {
        src: "/icons/discord.png",
        width: 50,
        height: 60
    });
const GooglePlayIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_image__WEBPACK_IMPORTED_MODULE_2__/* .image_default */ .J, {
        src: "/icons/googleplay.png",
        width: 50,
        height: 60
    });
const MoonFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",
            fill: "currentColor"
        })
    });
const SunFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fill: "currentColor",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M19 12a7 7 0 11-7-7 7 7 0 017 7z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"
                })
            ]
        })
    });
const SearchIcon = (props)=>/*#__PURE__*/ _jsxs("svg", {
        "aria-hidden": "true",
        fill: "none",
        focusable: "false",
        height: "1em",
        role: "presentation",
        viewBox: "0 0 24 24",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22 22L20 20",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            })
        ]
    });


/***/ }),

/***/ 17878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitch: () => (/* binding */ ThemeSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5662);
/* harmony import */ var _nextui_org_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98961);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71072);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90466);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10566);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94642);
/* __next_internal_client_entry_do_not_use__ ThemeSwitch auto */ 






const ThemeSwitch = ({ className, classNames })=>{
    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .F)();
    const isSSR = (0,_react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__/* .useIsSSR */ .Av)();
    const onChange = ()=>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = (0,_nextui_org_switch__WEBPACK_IMPORTED_MODULE_4__/* .useSwitch */ .h)({
        isSelected: theme === "light",
        "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        onChange
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component, {
        ...getBaseProps({
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("px-px transition-opacity hover:opacity-80 cursor-pointer", className, classNames?.base)
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    ...getInputProps()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ...getWrapperProps(),
                className: slots.wrapper({
                    class: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
                        "w-auto h-auto",
                        "bg-transparent",
                        "rounded-lg",
                        "flex items-center justify-center",
                        "group-data-[selected=true]:bg-transparent",
                        "!text-default-500",
                        "pt-px",
                        "px-0",
                        "mx-0"
                    ], classNames?.wrapper)
                }),
                children: !isSelected || isSSR ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .SunFilledIcon */ .ek, {
                    size: 22
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .MoonFilledIcon */ .Ve, {
                    size: 22
                })
            })
        ]
    });
};


/***/ }),

/***/ 69710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/johpaz/Documentos/Portfolio/johpazdev/app/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 99109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(7633);
// EXTERNAL MODULE: ./config/site.ts
var site = __webpack_require__(62208);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"config/fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-sans"}],"variableName":"fontSans"}
var fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_ = __webpack_require__(82778);
var fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/johpaz/Documentos/Portfolio/johpazdev/app/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

// EXTERNAL MODULE: ./node_modules/@nextui-org/navbar/dist/index.mjs
var dist = __webpack_require__(40583);
// EXTERNAL MODULE: ./node_modules/@nextui-org/kbd/dist/chunk-GM3GRPI5.mjs + 5 modules
var chunk_GM3GRPI5 = __webpack_require__(19541);
// EXTERNAL MODULE: ./node_modules/@nextui-org/link/dist/index.mjs
var link_dist = __webpack_require__(72692);
// EXTERNAL MODULE: ./node_modules/@nextui-org/input/dist/index.mjs
var input_dist = __webpack_require__(88694);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-MOHT4OBR.mjs
var chunk_MOHT4OBR = __webpack_require__(38787);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(95182);
;// CONCATENATED MODULE: ./public/icologo.png
/* harmony default export */ const icologo = ({"src":"/_next/static/media/icologo.b525d717.png","height":497,"width":502,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEX9yUH9yT/9yUH9yT/9yTz9yTz9yTv9yT39yT39yTv+yTz9yDz/yTv+yTv9yDz9yDz/yjr/yTr+yTr9yDv/yzn/yjn/yTr9yDv9yDr8yDv7xzz5xjz4xT3ywUDwwEDtvkHnukTWsEnTrkrQrEvPrEvPq0vOq0vNqkzLqUymkValkFaejFeO+tC6AAAAFHRSTlNVVVhY6e3x8vPz9/f5+fn7/f7+/hIgd8IAAABJSURBVHjaFcpXAkAwDADQ2JtSlai9qfvfT3y/BxBgKTG0wSXRkSAPcjXcx1wXEOv9ebc2g6RZjLn6lGlaz5GJs9J/tnyUFUbOB72GBUPkCwKWAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/theme-switch.tsx

const theme_switch_proxy = (0,module_proxy.createProxy)(String.raw`/home/johpaz/Documentos/Portfolio/johpazdev/components/theme-switch.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_switch_esModule, $$typeof: theme_switch_$$typeof } = theme_switch_proxy;
const theme_switch_default_ = theme_switch_proxy.default;

const theme_switch_e0 = theme_switch_proxy["ThemeSwitch"];

// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(79555);
;// CONCATENATED MODULE: ./components/navbar.tsx













const Navbar = ()=>{
    const searchInput = /*#__PURE__*/ jsx_runtime_.jsx(input_dist/* Input */.II, {
        "aria-label": "Search",
        classNames: {
            inputWrapper: "bg-default-100",
            input: "text-sm"
        },
        endContent: /*#__PURE__*/ jsx_runtime_.jsx(chunk_GM3GRPI5/* kbd_default */.C, {
            className: "hidden lg:inline-block",
            keys: [
                "command"
            ],
            children: "K"
        }),
        labelPlacement: "outside",
        placeholder: "Search...",
        startContent: /*#__PURE__*/ jsx_runtime_.jsx(icons/* SearchIcon */.W1, {
            className: "text-base text-default-400 pointer-events-none flex-shrink-0"
        }),
        type: "search"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Navbar */.wp, {
        maxWidth: "xl",
        position: "sticky",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* NavbarContent */.ur, {
                className: "basis-1/5 sm:basis-full",
                justify: "start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* NavbarBrand */.UG, {
                        as: "li",
                        className: "gap-3 max-w-fit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "flex justify-start items-center gap-1",
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: icologo,
                                alt: "Logo",
                                width: 40,
                                height: 40
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "hidden lg:flex gap-4 justify-start ml-2",
                        children: site/* siteConfig */.J.navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* NavbarItem */.e9, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (0,clsx/* default */.Z)((0,chunk_MOHT4OBR/* link */.p)({
                                        color: "foreground"
                                    }), "data-[active=true]:text-primary data-[active=true]:font-medium"),
                                    color: "foreground",
                                    href: item.href,
                                    children: item.label
                                })
                            }, item.href))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* NavbarContent */.ur, {
                className: "hidden lg:flex basis-1/5 sm:basis-full",
                justify: "end",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* NavbarItem */.e9, {
                        className: "hidden lg:flex gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                                isExternal: true,
                                href: site/* siteConfig */.J.links.discord,
                                "aria-label": "Discord",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                                isExternal: true,
                                href: site/* siteConfig */.J.links.linkedin,
                                "aria-label": "Linkedin",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* LinkedInIcon */.nI, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                                isExternal: true,
                                href: site/* siteConfig */.J.links.github,
                                "aria-label": "Github",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(theme_switch_e0, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* NavbarItem */.e9, {
                        className: "hidden lg:flex",
                        children: searchInput
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* NavbarContent */.ur, {
                className: "sm:hidden basis-1 pl-0",
                justify: "end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                        isExternal: true,
                        href: site/* siteConfig */.J.links.github,
                        "aria-label": "Github",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                        isExternal: true,
                        href: site/* siteConfig */.J.links.discord,
                        "aria-label": "Discord",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                        isExternal: true,
                        href: site/* siteConfig */.J.links.linkedin,
                        "aria-label": "Linkedin",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* LinkedInIcon */.nI, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(theme_switch_e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* NavbarMenuToggle */.ej, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* NavbarMenu */.ez, {
                children: [
                    searchInput,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-4 mt-2 flex flex-col gap-2",
                        children: site/* siteConfig */.J.navMenuItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* NavbarMenuItem */.Ys, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(link_dist/* Link */.rU, {
                                    color: index === 2 ? "primary" : index === site/* siteConfig */.J.navMenuItems.length - 1 ? "danger" : "foreground",
                                    href: item.href,
                                    size: "lg",
                                    children: item.label
                                })
                            }, item.href))
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/layout.tsx







const metadata = {
    title: {
        default: site/* siteConfig */.J.name,
        template: `%s - ${site/* siteConfig */.J.name}`
    },
    description: site/* siteConfig */.J.description,
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "white"
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "black"
        }
    ],
    icons: {
        icon: "/icologo.png",
        shortcut: "/icologo.png",
        apple: "/icologo.png"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (0,clsx/* default */.Z)("min-h-screen bg-background font-sans antialiased", (fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default()).variable),
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    themeProps: {
                        attribute: "class",
                        defaultTheme: "dark"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative flex flex-col h-screen",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                className: "container mx-auto max-w-7xl pt-16 px-6 flex-grow",
                                children: children
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                className: "w-full flex items-center justify-center py-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-default-600",
                                        children: "Powered by JohPaz"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-primary",
                                        children: "Dev"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 79555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D7: () => (/* binding */ DiscordIcon),
/* harmony export */   W1: () => (/* binding */ SearchIcon),
/* harmony export */   fy: () => (/* binding */ GitHubIcon),
/* harmony export */   nI: () => (/* binding */ LinkedInIcon)
/* harmony export */ });
/* unused harmony exports GooglePlayIcon, MoonFilledIcon, SunFilledIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
/* harmony import */ var _nextui_org_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87692);



const LinkedInIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
        src: "./icons/linkedin.png",
        width: 60,
        height: 60
    });
const GitHubIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
        src: "/icons/iconogithub.png",
        width: 60,
        height: 60
    });
const DiscordIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
        src: "/icons/discord.png",
        width: 50,
        height: 60
    });
const GooglePlayIcon = ()=>/*#__PURE__*/ _jsx(Image, {
        src: "/icons/googleplay.png",
        width: 50,
        height: 60
    });
const MoonFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ _jsx("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",
            fill: "currentColor"
        })
    });
const SunFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ _jsx("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ _jsxs("g", {
            fill: "currentColor",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M19 12a7 7 0 11-7-7 7 7 0 017 7z"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"
                })
            ]
        })
    });
const SearchIcon = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        "aria-hidden": "true",
        fill: "none",
        focusable: "false",
        height: "1em",
        role: "presentation",
        viewBox: "0 0 24 24",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22 22L20 20",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            })
        ]
    });


/***/ }),

/***/ 62208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ siteConfig)
/* harmony export */ });
const siteConfig = {
    name: "JohpazDev",
    description: "Portfolio JohpazDev.",
    navItems: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Proyectos",
            href: "/proyectos"
        },
        {
            label: "About",
            href: "/about"
        }
    ],
    navMenuItems: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Proyectos",
            href: "/proyectos"
        },
        {
            label: "About",
            href: "/about"
        }
    ],
    links: {
        github: "https://github.com/johpaz",
        discord: "https://discord.gg/ByGfwKen",
        linkedin: "https://www.linkedin.com/in/john-alexander-paez-arias-543b0254/",
        pokemon: "https://github.com/johpaz/api-pokemon.git",
        rickandmorty: "https://github.com/johpaz/api-pokemon.git",
        profinder: "https://github.com/johpaz/Profinder.git",
        juego: "https://github.com/johpaz/juegonaves.git",
        artgas: "https://play.google.com/store/apps/details?id=johpaz.monitor"
    }
};


/***/ }),

/***/ 72017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icologo.b525d717.png","height":497,"width":502,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEX9yUH9yT/9yUH9yT/9yTz9yTz9yTv9yT39yT39yTv+yTz9yDz/yTv+yTv9yDz9yDz/yjr/yTr+yTr9yDv/yzn/yjn/yTr9yDv9yDr8yDv7xzz5xjz4xT3ywUDwwEDtvkHnukTWsEnTrkrQrEvPrEvPq0vOq0vNqkzLqUymkValkFaejFeO+tC6AAAAFHRSTlNVVVhY6e3x8vPz9/f5+fn7/f7+/hIgd8IAAABJSURBVHjaFcpXAkAwDADQ2JtSlai9qfvfT3y/BxBgKTG0wSXRkSAPcjXcx1wXEOv9ebc2g6RZjLn6lGlaz5GJs9J/tnyUFUbOB72GBUPkCwKWAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7633:
/***/ (() => {



/***/ })

};
;