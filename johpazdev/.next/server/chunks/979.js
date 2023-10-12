exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Proyectos)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@nextui-org/card/dist/chunk-BJUMDPFJ.mjs + 1 modules
var chunk_BJUMDPFJ = __webpack_require__(1697);
// EXTERNAL MODULE: ./node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs
var chunk_J333S7JQ = __webpack_require__(9810);
// EXTERNAL MODULE: ./node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs
var chunk_5ALFRFZW = __webpack_require__(9336);
// EXTERNAL MODULE: ./node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs
var chunk_JHUBASYZ = __webpack_require__(2878);
// EXTERNAL MODULE: ./node_modules/@nextui-org/button/dist/chunk-KHVXTQA4.mjs + 7 modules
var chunk_KHVXTQA4 = __webpack_require__(1818);
;// CONCATENATED MODULE: ./components/HeartIcon.jsx


const HeartIcon = ({ size = 24, width, height, strokeWidth = 1.5, fill = "none", ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        fill: fill,
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: strokeWidth
        })
    });

// EXTERNAL MODULE: ./node_modules/@nextui-org/link/dist/chunk-MPX6TMFQ.mjs + 1 modules
var chunk_MPX6TMFQ = __webpack_require__(5123);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-XJU7LDVX.mjs
var chunk_XJU7LDVX = __webpack_require__(6672);
;// CONCATENATED MODULE: ./config/site.ts
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

// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(4642);
// EXTERNAL MODULE: ./node_modules/tailwind-variants/dist/index.js + 1 modules
var dist = __webpack_require__(4175);
;// CONCATENATED MODULE: ./components/primitives.ts

const title = (0,dist.tv)({
    base: "tracking-tight inline font-semibold",
    variants: {
        color: {
            violet: "from-[#FF1CF7] to-[#b249f8]",
            yellow: "from-[#FF705B] to-[#FFB457]",
            blue: "from-[#5EA2EF] to-[#0072F5]",
            cyan: "from-[#00b7fa] to-[#01cfea]",
            green: "from-[#6FEE8D] to-[#17c964]",
            pink: "from-[#FF72E1] to-[#F54C7A]",
            foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]"
        },
        size: {
            sm: "text-3xl lg:text-4xl",
            md: "text-[2.3rem] lg:text-5xl leading-9",
            lg: "text-4xl lg:text-6xl"
        },
        fullWidth: {
            true: "w-full block"
        }
    },
    defaultVariants: {
        size: "md"
    },
    compoundVariants: [
        {
            color: [
                "violet",
                "yellow",
                "blue",
                "cyan",
                "green",
                "pink",
                "foreground"
            ],
            class: "bg-clip-text text-transparent bg-gradient-to-b"
        }
    ]
});
const subtitle = (0,dist.tv)({
    base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
    variants: {
        fullWidth: {
            true: "!w-full"
        }
    },
    defaultVariants: {
        fullWidth: true
    }
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/divider/dist/chunk-44JHHBS2.mjs + 10 modules
var chunk_44JHHBS2 = __webpack_require__(4746);
// EXTERNAL MODULE: ./styles/styles.module.css
var styles_module = __webpack_require__(3690);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/@nextui-org/avatar/dist/chunk-K626GFF6.mjs
var chunk_K626GFF6 = __webpack_require__(6681);
// EXTERNAL MODULE: ./node_modules/@nextui-org/avatar/dist/chunk-XBMXQVV7.mjs
var chunk_XBMXQVV7 = __webpack_require__(3807);
// EXTERNAL MODULE: ./node_modules/@nextui-org/tooltip/dist/chunk-WMIINNJ6.mjs + 1 modules
var chunk_WMIINNJ6 = __webpack_require__(2332);
;// CONCATENATED MODULE: ./components/Proyectos.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 















function Proyectos() {
    const [likedStates, setLikedStates] = react_default().useState([
        false,
        false,
        false,
        false,
        false,
        false
    ]);
    const [isHovered, setIsHovered] = react_default().useState([
        false,
        false,
        false,
        false,
        false,
        false
    ]);
    const [isVideoPlaying, setIsVideoPlaying] = react_default().useState(false);
    const handleLikeClick = (0,react_.useCallback)((index)=>{
        const newLikedStates = [
            ...likedStates
        ];
        newLikedStates[index] = !newLikedStates[index];
        setLikedStates(newLikedStates);
    }, [
        likedStates
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-4 text-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: title(),
                        children: "Proyectos\xa0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: title({
                            color: "violet"
                        }),
                        children: "Dev\xa0"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(chunk_44JHHBS2/* divider_default */.j, {
                className: "mt-4"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "grid grid-cols-2 gap-4 p-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BJUMDPFJ/* card_default */.w, {
                        className: `w-full max-w-[400px] relative ${!isHovered ? (styles_module_default()).hoveredCard : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_J333S7JQ/* card_header_default */.u, {
                                className: "pb-0 pt-2 px-4 flex-col items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-tiny uppercase font-bold",
                                        children: "App Profinder"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text-default-500 mt-8",
                                        children: "App para que los profesionales ofrezcan sus servicios a cliente que a su vez pueden publicar sus necesidades."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-bold text-medium",
                                        children: "App desarrollada con las siguientes tecnologias:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_K626GFF6/* avatar_group_default */._, {
                                        max: 15,
                                        className: "grid grid-cols-8  gap-4 justify-center mt-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "JavaScript",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/js.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "CSS",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/css.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "HTLM",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/HTML.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "React",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/react.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Redux",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/redux.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Chakra UI",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/chakra.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Vite",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/vite.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Axios",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/axios.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Express",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/express.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Node",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/node.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Sequelize",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/sequelize.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Postgresql",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/postgresql.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Nodemailer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/nodemailer.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Leaflet",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/leaflet.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "GoogleAuth",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/googleIcon.jpg"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_KHVXTQA4/* button_default */.A, {
                                        isIconOnly: true,
                                        className: "text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4",
                                        radius: "full",
                                        variant: "light",
                                        onPress: ()=>handleLikeClick(6),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                                            className: likedStates[6] ? "[&>path]:stroke-transparent" : "",
                                            fill: likedStates[6] ? "currentColor" : "none",
                                            width: 100,
                                            height: 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_5ALFRFZW/* card_body_default */.G, {
                                className: "items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative  col-span-6 md:col-span-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        controls: true,
                                        height: 500,
                                        width: 280,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/media/Profinder.mp4",
                                                type: "video/webm"
                                            }),
                                            "Tu navegador no admite el elemento de video."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_JHUBASYZ/* card_footer_default */.i, {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.discord,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.profinder,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BJUMDPFJ/* card_default */.w, {
                        className: `w-full max-w-[400px] relative ${!isHovered ? (styles_module_default()).hoveredCard : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_J333S7JQ/* card_header_default */.u, {
                                className: "pb-0 pt-2 px-4 flex-col items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-tiny uppercase font-bold",
                                        children: "App Rick And Morty Soy Henry"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text-default-500",
                                        children: "Desarrollo full stack, front y back(DB postgresql)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-bold text-medium",
                                        children: "App desarrollada con las siguientes tecnologias:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_K626GFF6/* avatar_group_default */._, {
                                        max: 12,
                                        className: "flex grid grid-cols-6  gap-4 items-center mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "JavaScript",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/js.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "CSS",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/css.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "HTLM",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/HTML.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "React",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/react.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Redux",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/redux.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Axios",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/axios.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Express",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/express.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Node",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/node.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Sequelize",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/sequelize.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Postgresql",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/postgresql.png"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_KHVXTQA4/* button_default */.A, {
                                        isIconOnly: true,
                                        className: "text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4",
                                        radius: "full",
                                        variant: "light",
                                        onPress: ()=>handleLikeClick(1),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                                            className: likedStates[1] ? "[&>path]:stroke-transparent" : "",
                                            fill: likedStates[1] ? "currentColor" : "none",
                                            width: 100,
                                            height: 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_5ALFRFZW/* card_body_default */.G, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative col-span-6 md:col-span-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        controls: true,
                                        height: 400,
                                        width: "100%",
                                        autoPlay: isHovered && !isVideoPlaying,
                                        onPlay: ()=>setIsVideoPlaying(true),
                                        onPause: ()=>setIsVideoPlaying(false),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/media/video2.webm",
                                                type: "video/webm"
                                            }),
                                            "Tu navegador no admite el elemento de video."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_JHUBASYZ/* card_footer_default */.i, {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.discord,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.rickandmorty,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BJUMDPFJ/* card_default */.w, {
                        className: `w-full max-w-[400px] relative ${!isHovered ? (styles_module_default()).hoveredCard : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_J333S7JQ/* card_header_default */.u, {
                                className: "pb-0 pt-2 px-4 flex-col items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-tiny uppercase font-bold",
                                        children: "App Pokemon Soy Henry"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text-default-500",
                                        children: "Desarrollo full stack, front y back(DB postgresql)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-bold text-medium",
                                        children: "App desarrollada con las siguientes tecnologias:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_K626GFF6/* avatar_group_default */._, {
                                        max: 12,
                                        className: "flex grid grid-cols-6  gap-4 items-center mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "JavaScript",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/js.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "CSS",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/css.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "HTLM",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/HTML.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "React",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/react.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Redux",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/redux.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Axios",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/axios.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Express",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/express.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Node",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/node.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Sequelize",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/sequelize.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Postgresql",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/postgresql.png"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_KHVXTQA4/* button_default */.A, {
                                        isIconOnly: true,
                                        className: "text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4",
                                        radius: "full",
                                        variant: "light",
                                        onPress: ()=>handleLikeClick(2),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                                            className: likedStates[2] ? "[&>path]:stroke-transparent" : "",
                                            fill: likedStates[2] ? "currentColor" : "none",
                                            width: 100,
                                            height: 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_5ALFRFZW/* card_body_default */.G, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative col-span-6 md:col-span-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        controls: true,
                                        height: 400,
                                        width: "100%",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/media/video1.webm",
                                                type: "video/webm"
                                            }),
                                            "Tu navegador no admite el elemento de video."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_JHUBASYZ/* card_footer_default */.i, {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.discord,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.pokemon,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BJUMDPFJ/* card_default */.w, {
                        className: `w-full max-w-[400px] relative ${!isHovered ? (styles_module_default()).hoveredCard : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_J333S7JQ/* card_header_default */.u, {
                                className: "pb-0 pt-2 px-4 flex-col items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-tiny uppercase font-bold",
                                        children: "App Juego Naves"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text-default-500",
                                        children: "Desarrollo en Pygame, Juego ejecutable en windows"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-bold text-medium",
                                        children: "App desarrollada con las siguientes tecnologias:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_K626GFF6/* avatar_group_default */._, {
                                        max: 3,
                                        className: "flex grid grid-cols-6  gap-4 items-center mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Python",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/python.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Pygame",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/pygame.png"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_KHVXTQA4/* button_default */.A, {
                                        isIconOnly: true,
                                        className: "text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4",
                                        radius: "full",
                                        variant: "light",
                                        onPress: ()=>handleLikeClick(5),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                                            className: likedStates[5] ? "[&>path]:stroke-transparent" : "",
                                            fill: likedStates[5] ? "currentColor" : "none",
                                            width: 100,
                                            height: 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_5ALFRFZW/* card_body_default */.G, {
                                className: "items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative  col-span-6 md:col-span-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        controls: true,
                                        height: 400,
                                        width: 250,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/media/pygame.webm",
                                                type: "video/webm"
                                            }),
                                            "Tu navegador no admite el elemento de video."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_JHUBASYZ/* card_footer_default */.i, {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.discord,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.juego,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BJUMDPFJ/* card_default */.w, {
                        className: `w-full max-w-[400px] relative ${!isHovered ? (styles_module_default()).hoveredCard : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_J333S7JQ/* card_header_default */.u, {
                                className: "pb-0 pt-2 px-4 flex-col items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-tiny uppercase font-bold",
                                        children: "App ArtGas Monitor "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text-default-500",
                                        children: "Desarrollo en Android Studio, disponible en playStore"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-bold text-medium",
                                        children: "App desarrollada con las siguientes tecnologias:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_K626GFF6/* avatar_group_default */._, {
                                        max: 3,
                                        className: "flex grid grid-cols-6  gap-4 items-center mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Java",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/java.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Kotlin",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/kotlin.png"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_KHVXTQA4/* button_default */.A, {
                                        isIconOnly: true,
                                        className: "text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4",
                                        radius: "full",
                                        variant: "light",
                                        onPress: ()=>handleLikeClick(3),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                                            className: likedStates[3] ? "[&>path]:stroke-transparent" : "",
                                            fill: likedStates[3] ? "currentColor" : "none",
                                            width: 100,
                                            height: 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_5ALFRFZW/* card_body_default */.G, {
                                className: "items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative items-center justify-center col-span-6 md:col-span-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        controls: true,
                                        height: 400,
                                        width: 250,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/media/video4.mp4",
                                                type: "video/webm"
                                            }),
                                            "Tu navegador no admite el elemento de video."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_JHUBASYZ/* card_footer_default */.i, {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.artgas,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GooglePlayIcon */.vr, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.github,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BJUMDPFJ/* card_default */.w, {
                        className: `w-full max-w-[400px] relative ${!isHovered ? (styles_module_default()).hoveredCard : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_J333S7JQ/* card_header_default */.u, {
                                className: "pb-0 pt-2 px-4 flex-col items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-tiny uppercase font-bold",
                                        children: "App Traductor Libre"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text-default-500",
                                        children: "Desarrollo en Android Studio,disponible Apk(Voz a texto, texto a voz.)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "font-bold text-medium",
                                        children: "App desarrollada con las siguientes tecnologias:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_K626GFF6/* avatar_group_default */._, {
                                        max: 3,
                                        className: "flex grid grid-cols-6  gap-4 items-center mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Java",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/java.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "Kotlin",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/kotlin.png"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_WMIINNJ6/* tooltip_default */.e, {
                                                content: "FireBase",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_XBMXQVV7/* avatar_default */.h, {
                                                    radius: "md",
                                                    src: "/icons/firebase.png"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_KHVXTQA4/* button_default */.A, {
                                        isIconOnly: true,
                                        className: "text-default-900/60 data-[hover]:bg-foreground/10 absolute top-0 right-0 m-4",
                                        radius: "full",
                                        variant: "light",
                                        onPress: ()=>handleLikeClick(4),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                                            className: likedStates[4] ? "[&>path]:stroke-transparent" : "",
                                            fill: likedStates[4] ? "currentColor" : "none",
                                            width: 100,
                                            height: 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_5ALFRFZW/* card_body_default */.G, {
                                className: "items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative  col-span-6 md:col-span-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        controls: true,
                                        height: 400,
                                        width: 250,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/media/video3.mp4",
                                                type: "video/webm"
                                            }),
                                            "Tu navegador no admite el elemento de video."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_JHUBASYZ/* card_footer_default */.i, {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.discord,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* DiscordIcon */.D7, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_MPX6TMFQ/* link_default */.O, {
                                        isExternal: true,
                                        as: (link_default()),
                                        className: (0,chunk_XJU7LDVX/* button */.L)({
                                            variant: "bordered",
                                            radius: "full"
                                        }),
                                        href: siteConfig.links.github,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHubIcon */.fy, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(chunk_44JHHBS2/* divider_default */.j, {
                className: "mt-4"
            })
        ]
    });
}


/***/ }),

/***/ 3690:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "styles_card__rFBTC",
	"card-button": "styles_card-button__Lfkrk",
	"card-element": "styles_card-element__HVCR5",
	"fadeIn": "styles_fadeIn__Q2PUY",
	"hoveredCard": "styles_hoveredCard__k_Fxq"
};


/***/ })

};
;