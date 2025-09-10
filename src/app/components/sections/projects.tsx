import Image from "next/image";
import { MoveUpRight } from "lucide-react";

import Hypertext from "@/app/library/hypertext";
import { PROJECTS_DATA } from "@/app/config";

const Projects = () => {
  return (
    <ul className="group/list">
      {PROJECTS_DATA.map(project => (
        <li key={project.id} className="mb-12">
          <div className="grid relative group gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:col-span-6 sm:order-2">
              <h3 className="font-medium text-slate-200">
                <div>
                  <Hypertext
                    cclass="group/link text-base transition-all"
                    href={project.link}>
                    {project.name}
                    <MoveUpRight className="size-4 ml-1" />
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  </Hypertext>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">{project.desc}</p>
            </div>
            <Image
              alt={project.name}
              className="object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              height={50}
              src={project.image}
              width={200} />
          </div>
        </li>
      ))}
    </ul>
  )
};

export default Projects;