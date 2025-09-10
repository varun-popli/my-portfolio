import { Github } from "lucide-react";
import { Codepen } from "lucide-react";
import { Linkedin } from "lucide-react";

const MEDIA_DATA = [
  {
    name: "linkedin",
    title: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/varun-popli-7747b559",
  },
  {
    name: "codepen",
    title: "Codepen",
    icon: Codepen,
    link: "https://codepen.io/varunpopli"
  },
  {
    name: "github",
    title: "Github",
    icon: Github,
    link: "https://github.com/varun-popli"
  }
];

const NAV_DATA = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
]

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:py-24 lg:w-[48%] lg:max-h-screen lg:flex lg:flex-col lg:justify-between">
      <div>
        <h1 className="text-slate-200 text-4xl font-bold sm:text-5xl">Varun Popli</h1>
        <h2 className="text-slate-200 text-lg mt-3 font-medium sm:text-xl">Front End Developer</h2>
        <p className="mt-4 leading-normal max-w-xs">
          I build beautiful, interactive, and data-driven web experiences that bring ideas to life.
        </p>
        <nav className="nav hidden lg:block mt-16" aria-label="In-page navigation">
          <ul className="w-max">
            {NAV_DATA.map(item => (
              <li key={item.id}>
                <a className="group flex items-center py-3" href={`#${item.id}`}>
                  <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="flex flex-row gap-4 mt-8" aria-label="Social Media Links">
        {MEDIA_DATA.map(d => (
          <li key={d.name}>
            <a
              aria-label={`${d.title} (Opens in a new tab)`}
              className="hover:text-slate-200"
              href={d.link}
              target="_blank"
              title={d.title}>
              <d.icon />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}