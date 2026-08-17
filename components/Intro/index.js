import Link from "next/link";
import { Code2, Layers, Wrench, Sparkles, Sigma, Hash } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiMysql, SiNodedotjs, SiExpress, SiGit, SiGithub, SiVim, SiLatex, SiAndroid, SiLinux, SiUnity, SiJunit5, SiSpringboot, SiReact, SiNextdotjs, SiAstro } from "react-icons/si";
import skills from "../../data/skills.json";
import usersInfo from "../../data/usersInfo.json";

export default function Intro() {
    return (
        <div className={`w-full h-auto p-0 relative top-[50px] mb-[100px]`}>
            <div className={`w-full flex items-start justify-between flex-row flex-wrap-reverse`}>
                <div className={`w-full h-auto p-[10px] relative container md:w-[50%]`}>
                    <IntroCards data={skills.skill} />
                </div>
                <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:w-[45%]`}>
                    <p className={`text-[12px] text-white-200 `}>Introduce</p>
                    <div className={`relative top-[20px]`}>
                        <h1 data-aos="zoom-in-up" className={`text-[35px] font-bold mb-[20px]`}>
                            {usersInfo.greeting_type} I'm {usersInfo.full_name}.
                        </h1>
                        <br />
                        <br />
                        <p data-aos="zoom-in-right" className={`text-[15px] text-white-200 italic px-3 py-2 bg-dark-300 border-l-[3px] border-solid border-l-green-200 `}>
                            {usersInfo.intro_tagline}
                        </p>
                        <br />
                        <p data-aos="fade-up" className={`text-[14px] mb-5 text-white-200`}>
                            {usersInfo.bio_desc[0]}
                        </p>
                        <Link href="/about">
                            <a data-aos="zoom-in-up" className={`text-[14px] font-bold text-green-200 underline`}>
                                Read More
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Pick an icon that best represents each skill category, falling back
// to a generic sparkle for anything that isn't recognized.
function getCategoryIcon(name = "") {
    const key = name.trim().toLowerCase();
    if (key.includes("language")) return Code2;
    if (key.includes("frame")) return Layers;
    if (key.includes("tool")) return Wrench;
    return Sparkles;
}

// Dedicated brand icon + accent color for each language / framework / tool
// tag that scrolls inside a card. Keys are the lowercased tag text as it
// appears in data/skills.json.
const TAG_ICONS = {
    c: { Icon: SiC, color: "#A8B9CC" },
    "c++": { Icon: SiCplusplus, color: "#00599C" },
    java: { Icon: FaJava, color: "#ED8B00" },
    javascript: { Icon: SiJavascript, color: "#F7DF1E" },
    html: { Icon: SiHtml5, color: "#E34F26" },
    css: { Icon: SiCss3, color: "#1572B6" },
    mysql: { Icon: SiMysql, color: "#4479A1" },
    nodejs: { Icon: SiNodedotjs, color: "#339933" },
    expressjs: { Icon: SiExpress, color: "#E5E7EB" },
    springboot: { Icon: SiSpringboot, color: "#6DB33F" },
    react: { Icon: SiReact, color: "#61DAFB" },
    nextjs: { Icon: SiNextdotjs, color: "#E5E7EB" },
    astro: { Icon: SiAstro, color: "#FF5D01" },
    git: { Icon: SiGit, color: "#F05032" },
    github: { Icon: SiGithub, color: "#E5E7EB" },
    vim: { Icon: SiVim, color: "#019733" },
    latex: { Icon: SiLatex, color: "#4FA9A0" },
    matlab: { Icon: Sigma, color: "#D95319" },
    android: { Icon: SiAndroid, color: "#3DDC84" },
    linux: { Icon: SiLinux, color: "#FCC624" },
    unity: { Icon: SiUnity, color: "#E5E7EB" },
    junit: { Icon: SiJunit5, color: "#25A162" },
};

// Falls back to a neutral hash icon so new entries in skills.json never
// break the layout, they just render without a dedicated brand icon.
function getTagIcon(tag = "") {
    return TAG_ICONS[tag.trim().toLowerCase()] || { Icon: Hash, color: "#64f4ac" };
}

function IntroCards({ data }) {
    const maxLanguages = Math.max(...data.map((skill) => skill.description.split(",").length));

    return (
        <>
            {data.length > 0 ? (
                data.map((skill, i) => {
                    const languages = skill.description.split(",").map((language) => language.trim());
                    const extendedLanguages = [];

                    // Fill `extendedLanguages` until it reaches `maxLanguages`
                    while (extendedLanguages.length < maxLanguages) {
                        extendedLanguages.push(...languages);
                    }
                    extendedLanguages.length = maxLanguages;

                    const Icon = getCategoryIcon(skill.name);

                    return (
                        <div
                            data-aos="zoom-in-up"
                            key={i}
                            className="group relative w-full border border-transparent bg-gradient-to-b from-dark-200 to-dark-300 p-5 m-0 mt-4 overflow-hidden transition-all duration-300 hover:border-green-200/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(100,244,172,0.35)]"
                        >
                            {/* Soft glow accent that appears on hover */}
                            <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-green-200/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-200/10 border border-green-200/20 text-green-100">
                                        <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                                    </span>
                                    <p className="m-0 font-extrabold text-white-100 text-[15px] tracking-wide">{skill.name.trim()}</p>
                                </div>
                                <span className="text-[11px] font-semibold text-green-100 bg-green-200/10 border border-green-200/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                                    {skill.projects_completed}+ Projects
                                </span>
                            </div>

                            {/* Scrolling Languages as Horizontal Cards */}
                            <div className="scrolling-container relative z-10">
                                <div className="scrolling-track" style={{ animationDirection: i % 2 === 1 ? "reverse" : "normal" }}>
                                    {[...extendedLanguages, ...extendedLanguages].map((language, index) => {
                                        const { Icon: TagIcon, color } = getTagIcon(language);
                                        return (
                                            <span key={index} className="scrolling-card">
                                                <TagIcon className="scrolling-card-icon" style={{ color }} />
                                                {language}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div
                    data-aos="zoom-in-up"
                    className="group relative w-full border border-transparent bg-gradient-to-b from-dark-200 to-dark-300 p-5 m-0 mt-4 overflow-hidden transition-all duration-300 hover:border-green-200/30"
                >
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-200/10 border border-green-200/20 text-green-100">
                                <Sparkles className="w-[18px] h-[18px]" strokeWidth={2} />
                            </span>
                            <p className="m-0 font-extrabold text-white-100 text-[15px]">Skills</p>
                        </div>
                        <span className="text-[11px] font-semibold text-green-100 bg-green-200/10 border border-green-200/20 px-2.5 py-1 rounded-full whitespace-nowrap">60+ Projects</span>
                    </div>
                    <span className={`block text-[12px] text-white-300 pt-[10px] relative z-10`}>Development of beautiful and unique user interfaces.</span>
                </div>
            )}
        </>
    );
}
