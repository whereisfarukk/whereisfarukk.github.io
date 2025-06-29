import React, { useContext, useEffect, useState } from "react";
import { Github, ExternalLink, Calendar, Users, Star, GitBranch, Eye, Download, ChevronLeft, Code2, Laptop, Smartphone, Database, Cloud, Shield, Volume2, Maximize, Pause, Play } from "lucide-react";
import { Container, DomHead, Footer, NavBar } from "../../components";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { useRouter } from "next/router";
import { ResponsiveNavbar } from "../../components/Navbar";
function SinglePage() {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, [windowWidth]);
    const router = useRouter();
    const { repoName } = router.query;
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [data, setData] = useState([]);
    const [contributors, setContributors] = useState([]);
    console.log(contributors);
    // console.log(repoName);
    useEffect(() => {
        const storedData = localStorage.getItem("user_repo");
        if (storedData) {
            const data = JSON.parse(storedData);
            setData(data);
        }
    }, []);
    // console.log(data);
    const project = data.find((p) => p.name === repoName);
    useEffect(() => {
        const fetchContributors = async () => {
            if (!project) return;

            try {
                const response = await fetch(`https://api.github.com/repos/${project.owner.login}/${project.name}/contributors`);
                const contributors = await response.json();
                setContributors(contributors);
            } catch (error) {
                console.error("Failed to fetch contributors", error);
            }
        };

        fetchContributors();
    }, [project]);
    // console.log(project);
    if (!project) return <p>Loading...</p>;
    return (
        <>
            <DomHead pageName="Projects" />
            <Container>
                <NavBar />
            </Container>
            <div id="top-head" className="relative w-full h-[35vh] bg-dark-400 p-3 flex flex-col items-start justify-start ">
                <Container className="relative">
                    <Link href={"/projects"}>
                        <FaArrowLeft className="px-3 py-1 text-white-200 text-[35px] bg-dark-100 rounded-[4px] cursor-pointer" />
                    </Link>
                    <br />
                    <h1 className="text-[50px] font-bold">
                        Projects
                        <span className="inline-block align-middle ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-11">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-[15px] text-white-300 ">Here is the description of the project.</p>
                </Container>
            </div>
            <div className="w-screen h-auto">
                {/* Navigation Header */}
                <Container>
                    {/* Hero Section */}
                    <section className="relative overflow-hidden">
                        <div className="relative max-w-7xl mx-auto px-6 py-16">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-400">Featured Project</div>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(project.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
                                            </div>
                                        </div>

                                        <h1 className="text-5xl font-bold bg-gradient-to-r from-white-100 via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">{project?.name || "Project"}</h1>

                                        <p className="text-xl text-gray-300 leading-relaxed">
                                            A comprehensive project management platform built with modern technologies. Features real-time collaboration, advanced analytics, and intuitive design to streamline team productivity and project delivery.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        {project.homepage ? (
                                            <a
                                                href={project.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-center gap-3 bg-white-100 text-[#0c0c0c] hover:bg-[#71797E] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform w-full sm:w-auto"
                                            >
                                                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                                Live Demo
                                            </a>
                                        ) : (
                                            <button disabled className="flex items-center justify-center gap-3 bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-60 w-full sm:w-auto">
                                                <ExternalLink className="w-5 h-5" />
                                                Live Demo
                                            </button>
                                        )}

                                        <a
                                            href={`${project?.html_url || "#"}`}
                                            className="flex items-center justify-center gap-2 bg-[#71797E]/20 hover:bg-[#71797E]/30 border border-[#71797E]/30 hover:border-[#71797E]/50 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Code
                                        </a>

                                        <a href={`https://github.com/${project.owner.login}/${project.name}/archive/refs/heads/${project.default_branch}.zip`} className="w-full sm:w-auto">
                                            <button className="group flex items-center justify-center gap-3 bg-[#0c0c0c]/50 hover:bg-[#0c0c0c]/70 border border-[#71797E]/30 hover:border-[#71797E]/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
                                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                                                Download
                                            </button>
                                        </a>
                                    </div>

                                    {/* Project Stats */}
                                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#71797E]/20">
                                        <div className="text-center group">
                                            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{project.stargazers_count}</div>
                                            <div className="text-sm text-[#71797E] font-medium">GitHub Stars</div>
                                        </div>
                                        <div className="text-center group">
                                            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{project.forks}</div>
                                            <div className="text-sm text-[#71797E] font-medium">Forks</div>
                                        </div>
                                        <div className="text-center group">
                                            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{contributors.length}</div>
                                            <div className="text-sm text-[#71797E] font-medium">Contributors</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Preview */}
                                <div className="relative">
                                    <div className="relative bg-[#71797E]/10 rounded-3xl p-8 border border-[#71797E]/20 shadow-2xl backdrop-blur-sm">
                                        {/* Video Container */}
                                        <div className="relative">
                                            <div className="aspect-video bg-[#0c0c0c] rounded-2xl border border-[#71797E]/30 overflow-hidden group cursor-pointer">
                                                {/* Video Placeholder */}
                                                <div className="relative w-full h-full bg-[#0c0c0c] flex items-center justify-center">
                                                    <div className="absolute inset-4 border-2 border-dashed border-[#71797E]/30 rounded-xl flex items-center justify-center">
                                                        <div className="text-center space-y-4">
                                                            <div className="w-16 h-16 bg-[#71797E]/20 border border-[#71797E]/40 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                                {isVideoPlaying ? <Pause className="w-8 h-8 text-[#71797E]" /> : <Play className="w-8 h-8 text-[#71797E] ml-1" />}
                                                            </div>
                                                            <div className="space-y-2">
                                                                <p className="text-white font-semibold">Project Demo Video</p>
                                                                <p className="text-[#71797E] text-sm">Click to play walkthrough</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Video Controls Overlay */}
                                                    <div className="absolute bottom-4 left-4 right-4 bg-[#0c0c0c]/80 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <button onClick={() => setIsVideoPlaying(!isVideoPlaying)} className="text-white hover:text-[#71797E] transition-colors">
                                                                    {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                                                </button>
                                                                <div className="w-32 h-1 bg-[#71797E]/30 rounded-full">
                                                                    <div className="w-1/3 h-full bg-white rounded-full"></div>
                                                                </div>
                                                                <span className="text-xs text-[#71797E]">1:23 / 3:45</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button className="text-white hover:text-[#71797E] transition-colors">
                                                                    <Volume2 className="w-4 h-4" />
                                                                </button>
                                                                <button className="text-white hover:text-[#71797E] transition-colors">
                                                                    <Maximize className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Video Info */}
                                            <div className="mt-6 space-y-3">
                                                <h3 className="text-lg font-semibold text-white">Full Feature Walkthrough</h3>
                                                <p className="text-[#71797E] text-sm leading-relaxed">Watch a comprehensive demo showcasing all the key features, user interface, and real-time collaboration capabilities.</p>
                                                <div className="flex items-center gap-4 text-xs text-[#71797E]/70">
                                                    <span>Duration: 3:45</span>
                                                    <span>•</span>
                                                    <span>1080p HD</span>
                                                    <span>•</span>
                                                    <span>Updated {new Date(project.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle Glow Effect */}
                                    <div className="absolute -inset-6 bg-[#71797E]/5 rounded-3xl blur-2xl opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>

                {/* Technology Stack */}
                <section className="py-16 bg-dark-400 border-t border-[#71797E]/20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "React", icon: Code2, color: "text-blue-400" },
                                { name: "TypeScript", icon: Code2, color: "text-blue-500" },
                                { name: "Node.js", icon: Database, color: "text-green-400" },
                                { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
                                { name: "AWS", icon: Cloud, color: "text-orange-400" },
                                { name: "Docker", icon: Shield, color: "text-blue-400" },
                            ].map((tech, index) => (
                                <div key={index} className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 hover:scale-105">
                                    <tech.icon className={`w-8 h-8 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                                    <div className="text-sm font-medium text-gray-300">{tech.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Container>
                    {/* Key Features */}
                    <section className="py-16 ">
                        <div className="max-w-7xl mx-auto px-4 lg:px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto">Discover the powerful features that make this project stand out from the competition</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {[
                                    {
                                        title: "Real-time Collaboration",
                                        description: "Work together seamlessly with live updates and instant synchronization across all team members.",
                                        icon: Users,
                                    },
                                    {
                                        title: "Advanced Analytics",
                                        description: "Get deep insights into project performance with comprehensive reporting and data visualization.",
                                        icon: GitBranch,
                                    },
                                    {
                                        title: "Cross-platform Support",
                                        description: "Access your projects anywhere with full desktop, tablet, and mobile compatibility.",
                                        icon: Smartphone,
                                    },
                                    {
                                        title: "Secure & Scalable",
                                        description: "Enterprise-grade security with automatic scaling to handle projects of any size.",
                                        icon: Shield,
                                    },
                                    {
                                        title: "Cloud Integration",
                                        description: "Seamlessly integrate with popular cloud services and deployment platforms.",
                                        icon: Cloud,
                                    },
                                    {
                                        title: "Developer-Friendly",
                                        description: "Built with modern development practices and comprehensive API documentation.",
                                        icon: Code2,
                                    },
                                ].map((feature, index) => (
                                    <div key={index} className="group bg-[#0c0c0c]/30 border border-[#71797E]/20 rounded-2xl p-8 hover:border-[#71797E]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-[#71797E]/10 border border-[#71797E]/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                <feature.icon className="w-7 h-7 text-[#71797E] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                        </div>
                                        <p className="text-[#71797E] leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Project Details */}
                    <section className="py-16">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-2 space-y-8">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-gray-300 text-justify leading-relaxed text-lg mb-6">
                                                TaskFlow Pro represents a significant evolution in project management software, designed from the ground up to address the complex needs of modern development teams. Built with performance, scalability, and user experience as core principles.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                                The application leverages cutting-edge technologies including React 18, TypeScript, and a robust Node.js backend with PostgreSQL. The architecture is designed for high availability and can scale horizontally to support thousands of concurrent users.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed text-lg">
                                                Special attention was paid to creating an intuitive user interface that doesn't compromise on functionality. Every interaction has been carefully crafted to provide immediate feedback and maintain the user's flow state.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Technical Highlights</h3>
                                        <ul className="space-y-3 flex flex-col items-start">
                                            {[
                                                "Microservices architecture with Docker containerization",
                                                "Real-time WebSocket connections for live collaboration",
                                                "Advanced caching strategies with Redis",
                                                "Comprehensive test coverage (95%+)",
                                                "CI/CD pipeline with automated deployments",
                                                "API-first design with OpenAPI documentation",
                                            ].map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-white-100 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-300">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-[#71797E]/5 border border-[#71797E]/20 rounded-xl p-6">
                                        <h3 className="text-xl font-semibold mb-4">Project Info</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Status</span>
                                                <span className="text-green-400 font-medium">Active</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Version</span>
                                                <span className="text-white font-medium">v2.1.0</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">License</span>
                                                <span className="text-white font-medium">MIT</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Last Updated</span>
                                                <span className="text-white font-medium">{Math.floor((Date.now() - new Date(project.updated_at)) / (1000 * 60 * 60 * 24))} days ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#71797E]/5 border border-[#71797E]/20 rounded-xl p-6">
                                        <h3 className="text-xl font-semibold mb-4">Repository Stats</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Star className="w-4 h-4 text-yellow-400" />
                                                    <span className="text-gray-400">Stars</span>
                                                </div>
                                                <span className="text-white font-medium">{project.stargazers_count}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <GitBranch className="w-4 h-4 text-green-400" />
                                                    <span className="text-gray-400">Forks</span>
                                                </div>
                                                <span className="text-white font-medium">{project.forks}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Eye className="w-4 h-4 text-blue-400" />
                                                    <span className="text-gray-400">Watchers</span>
                                                </div>
                                                <span className="text-white font-medium">{project.watchers}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4 text-purple-400" />
                                                    <span className="text-gray-400">Contributors</span>
                                                </div>
                                                <span className="text-white font-medium">{contributors.length}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-dark-400 border border-[#71797E]/20 rounded-xl p-6">
                                        <h3 className="text-xl font-semibold mb-3">Get Involved</h3>
                                        <p className="text-gray-300 text-sm mb-4">Interested in contributing? Check out our contribution guidelines and join our community.</p>
                                        <div className="space-y-2">
                                            <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                                                → Contributing Guide
                                            </a>
                                            <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                                                → Code of Conduct
                                            </a>
                                            <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                                                → Issue Tracker
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                <Footer />
                {windowWidth <= 700 && <ResponsiveNavbar pageName={"project details"} />}
            </div>
        </>
    );
}

export default SinglePage;
