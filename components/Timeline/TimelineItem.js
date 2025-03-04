// TimelineItem.js
import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import Tag from "./Tag"; // Import the Tag component
import Markdown from "react-markdown"; // Install via `npm install react-markdown`

const ReadMore = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [height, setHeight] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.clientHeight);
    }
  }, [contentRef]);

  const shouldCover = height && height > 100;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${
        shouldCover && !isOpen ? "h-20" : ""
      }`}
    >
      <div ref={contentRef}>
        {/* Render Markdown Content */}
        <Markdown
          components={{
            ul: ({ children }) => (
              <ul className="list-disc pl-5 space-y-2 ">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="text-sm w-[75%]">{children}</li>
            ),
            p: ({ children }) => (
              <p className="text-[13px] break-words subpixel-antialiased w-[75%]">
                {children}
              </p>
            ),
          }}
        >
          {children}
        </Markdown>
      </div>
      {shouldCover && !isOpen && (
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-dark-100 flex justify-center items-end pl-4">
          <button
            className="text-primary-600 hover:text-primary-700 dark:text-[12px] w-full text-start dark:hover:text-primary-300 font-bold"
            onClick={() => setOpen(!isOpen)}
          >
            Read more
          </button>
        </div>
      )}
    </div>
  );
};

const TimelineItem = ({ item }) => {
  return (
    <article className="relative mb-2 pb-6 last:mb-0 last:pb-0 after:absolute after:bottom-0 after:left-[15px] after:top-10 after:block after:w-[2px] after:bg-gray-200 dark:after:bg-gray-700 last:after:bg-transparent">
      {/* Row Layout */}
      <div className={`flex  ${item.description ? "" : "items-center"} `}>
        {/* Icon */}
        <div className="relative flex items-center justify-center w-8 h-8">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white dark:text-gray-900 ${
              {
                gray: "bg-gray-600 dark:bg-gray-400",
                green: "bg-green-600 dark:bg-green-400",
                pink: "bg-pink-600 dark:bg-pink-400",
                blue: "bg-blue-600 dark:bg-blue-400",
                yellow: "bg-yellow-600 dark:bg-yellow-400",
                red: "bg-red-500 dark:bg-red-400",
              }[item.color || "gray"]
            }`}
          >
            <Icon icon={item.icon} className="block size-5" />
          </div>
        </div>

        {/* Title and Date */}
        <div className={`flex-grow ml-4 ${item.description ? "mt-[6px]" : ""}`}>
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {/* Render Markdown Links */}
              <Markdown
                components={{
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 hover:text-primary-700 dark:text-primary-400 dark:hover:text-pink-100"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {item.title}
              </Markdown>
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {item.duration.start}
              {item.duration.end && <> &mdash; {item.duration.end}</>}
            </span>
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-2 flex flex-row space-x-3">
              {item.tags.map((tag, index) => (
                <Tag key={`tag-${index}`}>{tag}</Tag>
              ))}
            </div>
          )}

          {/* Description */}
          {item.description && (
            <div className="flex-grow mt-2 text-[14px] break-words">
              <ReadMore className="prose prose-sm dark:prose-invert">
                {item.description}
              </ReadMore>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TimelineItem;
