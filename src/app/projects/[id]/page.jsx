import Image from "next/image";
import { projectDetails } from "@/app/assets/projects";

export default async function Page({ params }) {
  const { id } = await params;
  const project = projectDetails[id];

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-12">

      {/* HEADER */}
      <div>
        <p className="text-sm font-semibold text-yellow-400 tracking-wider">
          CASE STUDY
        </p>

        <h1 className="text-3xl font-bold mt-1">
          {project.title}
        </h1>

        {/* OVERVIEW */}
        <div className="mt-4 space-y-3 max-w-2xl text-gray-500">
          {project.overview?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* PREVIEW */}
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          Project Preview
        </h2>

        <div className="mt-4 p-2 rounded-xl border-2 border-yellow-400/40 bg-gradient-to-br from-yellow-400/5 to-transparent">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* PROBLEM */}
      {project.problem && (
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Problem
          </h2>

          <div className="mt-4 space-y-3 text-gray-500">
            {project.problem.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* SOLUTION */}
      {project.solution && (
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Solution
          </h2>

          <div className="mt-4 space-y-3 text-gray-500">
            {project.solution.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* RESULT */}
      {project.result && (
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Result
          </h2>

          <div className="mt-4 space-y-3 text-gray-500">
            {project.result.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* TECH STACK */}
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          Technologies Used
        </h2>

        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm border border-yellow-400/40 text-gray-700 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* LINKS */}
      {project.links && (
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Project Links
          </h2>

          <div className="mt-4 flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="px-4 py-2 border border-yellow-400 rounded-lg text-sm hover:bg-yellow-400 hover:text-black transition"
              >
                GitHub
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                className="px-4 py-2 border border-yellow-400 rounded-lg text-sm hover:bg-yellow-400 hover:text-black transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}

    </div>
  );
}