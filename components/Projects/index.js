import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, GitFork, Star } from "lucide-react";

import projects from "../../data/projects.json";
import userInfo from "../../data/usersInfo.json";

function Projects() {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRepos() {
    let res;
    let url = `https://api.github.com/users/${userInfo.github_username}/repos`;
    if (localStorage.getItem("user_repos") === null) {
      try {
        setLoading(true);
        res = await fetch(url);
        let data = await res.json();
        setLoading(false);
        if (data && data.length > 0) {
          localStorage.setItem("user_repo", JSON.stringify(data));
          setRepo(data);
          return;
        }
        setLoading(false);
        setError(`No github repos found.`);
      } catch (err) {
        console.error(`FAILED: ${err.message}`);
        setLoading(false);
        setError(`Failed fetching repo: ${err.message}`);
      }
    }

    let userReopos = JSON.parse(localStorage.getItem("user_repos"));

    setRepo(userReopos);
  }

  useEffect(() => {
    (async () => {
      await fetchRepos();
    })();
  }, []);

  return (
    <div className={`projectCont w-full h-auto relative top-[50px] p-10px flex flex-col items-center justify-center mb-[50px]`}>
      <div className={`w-full flex flex-row items-center justify-center`}>
        <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
        <p data-aos="fade-up" className={`text-white-200 text-[15px]`}>
          Latest Works
        </p>
        <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>

        <Link href="/projects">
          <a data-aos="zoom-in-up" className={`text-center text-green-200 underline absolute top-[50px] text-[14px]`}>
            All Projects
          </a>
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 mt-16 mb-[50px]">
        {projects.length > 0 ? projects.slice(0, 3).map((list, i) => <ProjectCard key={list.repoName || i} project={list} />) : ""}
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 mb-5">
        {loading ? <p className="text-white-300 text-sm">Loading...</p> : error !== null ? <p className="text-white-300 text-sm">{error}</p> : <GithubRepo repos={repo} />}
      </div>
    </div>
  );
}

export default Projects;

function ProjectCard({ project }) {
  const href = project.repoName ? `/project/${project.repoName}` : "#";

  return (
    <Link href={href} passHref>
      <a
        data-aos="zoom-in"
        className="group relative flex flex-col border border-transparent bg-dark-200 overflow-hidden transition-all duration-300 hover:border-green-200/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(100,244,172,0.35)]"
      >
        <div className="relative h-[190px] w-full overflow-hidden bg-gradient-to-br from-dark-300 to-dark-100">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title ? `${project.title} preview` : "Project preview"}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FolderGit2 className="h-10 w-10 text-green-200/40" strokeWidth={1.5} />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-100/90 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-bold text-white-100">{project.title || "Project Title"}</h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-green-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="mt-2 text-[12.5px] leading-relaxed text-white-300 line-clamp-2">{project.description || "No description provided yet."}</p>

          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="rounded-full border border-green-200/15 bg-green-200/5 px-2.5 py-1 text-[10px] font-medium text-green-100">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}

function GithubRepo({ repos }) {
  return (
    <>
      {repos && repos.length > 0 ? (
        repos.slice(0, 3).map((rep, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className="group relative flex flex-col justify-between border border-transparent bg-dark-200 p-4 transition-all duration-300 hover:border-green-200/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(100,244,172,0.35)]"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[15px] font-bold text-white-100">{rep.name}</h3>
                <a href={rep.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${rep.name} on GitHub`}>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-green-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white-300 line-clamp-2">{rep.description || "No description provided yet."}</p>
            </div>

            <div className="mt-4 flex items-center gap-4 text-white-300">
              <span className="flex items-center gap-1.5 text-[12px]">
                <Star className="h-3.5 w-3.5 text-yellow-400" strokeWidth={2} />
                {rep.stargazers_count}
              </span>
              <span className="flex items-center gap-1.5 text-[12px]">
                <GitFork className="h-3.5 w-3.5 text-green-200" strokeWidth={2} />
                {rep.forks}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white-300 text-sm">Opps, No Github Repo was found.</p>
      )}
    </>
  );
}
