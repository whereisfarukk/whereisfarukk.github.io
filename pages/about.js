import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, DomHead, Footer, NavBar } from "../components";
import { FaArrowLeft } from "react-icons/fa";
import { ResponsiveNavbar } from "../components/Navbar";
import { FaBirthdayCake } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faGraduationCap,
  faBriefcase,
  faChessKnight,
  faMedal,
  faSquareRootAlt,
} from "@fortawesome/free-solid-svg-icons";

import userInfo from "../data/usersInfo.json";
import { before } from "lodash";

function About() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  useEffect(() => {
    let useravatar = JSON.parse(localStorage.getItem("github_avatar"));
    setAvatar(useravatar);
  }, []);

  return (
    <div>
      <DomHead pageName="About" />
      <Container>
        <NavBar />
      </Container>
      <div
        id="top-head"
        className="relative w-full h-[35vh] bg-dark-400 p-3 flex flex-col items-start justify-start "
      >
        <Container className="relative">
          <Link href={"/"}>
            <FaArrowLeft className="px-3 py-1 text-white-200 text-[35px] bg-dark-100 rounded-[4px] cursor-pointer" />
          </Link>
          <br />
          <h1 className="text-[50px] font-bold ">About</h1>
          <p className="text-[15px] text-white-300 ">About Me.</p>
        </Container>
      </div>

      <div className="w-screen h-auto ">
        <Container>
          <div className="w-full  h-auto flex flex-col items-center justify-between p-5 md:flex-row">
            <div className="w-full md:w-[50%] ">
              <div
                className="w-full h-[450px] bg-cover bg-center bg-no-repeat md:w-[350px] rounded-md"
                style={{
                  backgroundImage: `url(${avatar})`,
                }}
              ></div>
            </div>
            <div className="w-full md:w-[50%] ">
              <div
                className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:top-0`}
              >
                <p className={`text-[12px] text-white-200 `}>Introduce</p>
                <div className={`relative top-[20px]`}>
                  <h1 className={`text-[35px] font-bold mb-[20px]`}>
                    {userInfo.greeting_type} I'm {userInfo.full_name}
                  </h1>
                  <br />
                  <br />
                  <p
                    className={`text-[15px] text-white-200 p-2 px-5 bg-dark-400 border-l-[5px] border-solid border-l-green-200 italic`}
                  >
                    {userInfo.intro_tagline}
                  </p>
                  <br />
                  {userInfo.bio_desc.length > 0
                    ? userInfo.bio_desc.map((bio, i) => {
                        return (
                          <p className={`text-[14px] mb-5 text-white-200`}>
                            {bio}
                          </p>
                        );
                      })
                    : "Opps, 😬 looks like I dont have a bio."}
                </div>
              </div>
            </div>
          </div>
          {/* the timeline pos will be here */}
          <div
            class="my-14 mx-auto mb-19 max-w-3xl bg-[#202022] bg-opacity-80 "
            style={{
              marginTop: "5rem",
              // textShadow: "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);",
            }}
          >
            <h1
              className=" mb-2 ml-24 text-3xl leading-9"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }} // Increased the offsets and blur radius
            >
              Timeline
            </h1>

            <div className="relative pl-8 sm:pl-32 py-5 group">
              {/* <span class="relative -ml-px  text-2xl bg-white dark:bg-[#111010] rounded-full -left-10 top-8">
                🐜
              </span> */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute  before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-1 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-8 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 ">
                  <h3>Software Engineer</h3>
                </div>
                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  October 2020 — July 2022
                </time>
              </div>

              <div className="flex space-x-2 mt-1">
                <span className="inline-flex items-center justify-center pl-1 pr-1.5 pt-0.5 pb-0.7 text-xs text-white rounded bg-[rgb(31,41,55)] bg-opacity-80">
                  Lavarel
                </span>

                <span className="inline-flex items-center justify-center px-1.5 py-0.7 text-xs text-white rounded-md bg-[rgb(31,41,55)] bg-opacity-80">
                  Java
                </span>

                <span className="inline-flex items-center justify-center px-1.5 py-0.7 text-xs text-white rounded-md bg-[rgb(31,41,55)] bg-opacity-80">
                  Go
                </span>
              </div>

              <div
                className=""
                style={{
                  paddingRight: "5.5rem",
                }}
              >
                <div className={`prose prose-sm mt-3 dark:prose-invert pr-20`}>
                  <ul
                    className="mt-2 pl-4 list-disc text-slate-300 space-y-1.3"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      color: "#d1d5db",
                      fontSize: "0.8rem",
                      lineHeight: 2,
                      listStyleType: "disc",
                      fontFamily: "Segoe UI Symbol",
                      fontWeight: "500", // Adjusted font weight for bolder appearance
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)", // Subtle shadow for smoothness
                      textRendering: "geometricPrecision", // Improves rendering for smoother text
                      WebkitFontSmoothing: "antialiased", // Smoothens font rendering in WebKit
                      MozOsxFontSmoothing: "grayscale", // For Firefox on macOS
                      // Remove listStyleType: "none" to show bullet points
                    }}
                  >
                    <li>
                      Built a microservice architecture (interaction map of
                      microservices and services in Miro)
                    </li>
                    <li>
                      Organized transition from the monolith into microservices
                      (Laravel PHP =&gt; PHP, Node / TS, Golang)
                    </li>
                    <li>
                      Implemented API Gateway and GraphQL (Amazon API Gateway &
                      Apollo/Yoga GraphQL)
                    </li>
                    <li>Implemented asynchronous architecture (RabbitMQ)</li>
                    <li>
                      Advised on microfrontends (Webpack Federation & React)
                    </li>
                    <li>
                      Optimized and decomposed the database structure for more
                      optimal and faster queries
                    </li>
                    <li>Introduced the practice of cross-review</li>
                    <li>
                      Organized an internal library of dependencies and packages
                      (Composer & NPM)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-5 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-7 before:mt-7 before:mb-4 before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Graduation Cap Icon with rounded border and yellow background */}
                <div className="absolute sm:left-0 bg-gray-400 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.9 p-2">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="w-4 h-4 text-black"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>
                    Intern as software enginner at{" "}
                    <a
                      href="https://www.fgc.gov.bd/"
                      className="text-pink-500 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SUST
                    </a>
                  </h3>
                </div>
                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  July 2017 — April 2019
                </time>
              </div>
            </div>
            <div className="relative pl-8 sm:pl-32 py-5 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-7 before:mt-7 before:mb-4 before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Graduation Cap Icon with rounded border and yellow background */}
                <div className="absolute sm:left-0 bg-blue-900 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.8 p-2">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="w-4 h-4 text-black"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>
                    Software Engineering at{" "}
                    <a
                      href="https://www.sust.edu/"
                      className="text-pink-500 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SUST
                    </a>
                  </h3>
                </div>
                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  Febryary 2020 — January 2024
                </time>
              </div>
            </div>
            <div class="relative pl-8 sm:pl-32 py-5 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-7 before:mt-7 before:mb-4 before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Cake Icon with rounded border and pink background */}
                <div className="absolute  sm:left-0  bg-yellow-500 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.8 p-2">
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="w-4 h-4 text-black"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>
                    Started College at{" "}
                    <a
                      href="https://www.fgc.gov.bd/"
                      className="text-pink-500 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Feni Govt. College
                    </a>
                  </h3>
                </div>
                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  July 2017 — April 2019
                </time>
              </div>
            </div>

            <div class="relative pl-8 sm:pl-32 py-5 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-7 before:mt-7 before:mb-4 before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Cake Icon with rounded border and pink background */}
                <div className="absolute  sm:left-0  bg-orange-100 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.8 p-2">
                  <FontAwesomeIcon
                    icon={faSquareRootAlt}
                    className="w-4 h-4 text-black"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>
                    Started Participating at{" "}
                    <a
                      href=""
                      className="text-pink-500 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Math Olympiad
                    </a>
                  </h3>
                </div>
                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  January 2013 — January 2018
                </time>
              </div>
            </div>
            <div class="relative pl-8 sm:pl-32 py-5 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-6 before:mt-8 before:mb-4 before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-2 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Cake Icon with rounded border and pink background */}
                <div className="absolute  sm:left-0  bg-yellow-400 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.8 p-2">
                  <FontAwesomeIcon
                    icon={faSchool}
                    className="w-4 h-4 text-black"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>
                    Started High School at{" "}
                    <a
                      href="https://fgphs.edu.bd/"
                      className="text-pink-500 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Feni Govt. Pilot High School
                    </a>
                  </h3>
                </div>

                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-6 text-right">
                  Febryary 2012 — March 2017
                </time>
              </div>
            </div>

            <div class="relative pl-8 sm:pl-32 py-3 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-8 before:mt-6 before:mb-4 before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-4 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Cake Icon with rounded border and pink background */}
                <div className="absolute  sm:left-0  bg-crimson-400 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.8 p-2">
                  <FontAwesomeIcon
                    icon={faMedal}
                    className="w-4 h-4 text-black"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 w-3/5 pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>
                    Got 3X National Talentful{" "}
                    <a
                      href=""
                      className="text-pink-500 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Scholarship
                    </a>
                  </h3>
                </div>
                <time className="w-2/5 pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  December 2011
                </time>
              </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-8 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-grey-100 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-0 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                {/* Cake Icon with rounded border and pink background */}
                <div className="absolute  sm:left-0  bg-pink-400 rounded-full flex justify-center items-center sm:ml-[6.5rem] -translate-x-1/2 translate-y-0.8 p-2">
                  <FaBirthdayCake className="w-4 h-4 text-black" />
                </div>

                {/* Text */}
                <div className="w-full pt-1.5 pb-1.5 text-sm leading-5 flex items-center">
                  <h3>Born at Feni, Bangladesh</h3>
                </div>
                <time className="w-full pt-1.5 pb-1.5 text-sm leading-5 text-right">
                  October 2000
                </time>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <br />

      <Footer />
      {windowWidth <= 700 && <ResponsiveNavbar pageName={"projects"} />}
    </div>
  );
}

export default About;
