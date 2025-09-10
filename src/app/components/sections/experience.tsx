import { MoveUpRight } from "lucide-react";

import Hypertext from "@/app/library/hypertext";
import { EXPERIENCE_DATA } from "@/app/config";

const Experience = () => {
  return (
    <>
      <ol className="group/list">
        {EXPERIENCE_DATA.map(exp => (
          <li key={exp.org} className="mb-12">
            <div className="grid relative group transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 my-2 text-sm uppercase font-semibold sm:col-span-2 text-slate-500">
                {`${exp.start} — ${exp.end}`}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-slate-200">
                  <div>
                    <Hypertext
                      cclass="group/link text-base transition-all"
                      href={exp.link}>
                      {`${exp.role} · ${exp.org}`}
                      <MoveUpRight className="size-4 ml-1" />
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    </Hypertext>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">{exp.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech.map(t => (
                    <li key={t}>
                      <div className="flex items-center px-3 py-1 rounded-full bg-rose-400/10 text-xs font-medium text-rose-400">
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <Hypertext cclass="font-semibold" href="/varun-popli-resume.pdf">
        View Full Resume
        <MoveUpRight className="size-4 ml-1" />
      </Hypertext>
    </>
  )
};

export default Experience;