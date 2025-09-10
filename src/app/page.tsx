import Footer from "./library/footer";
import Header from "./library/header";
import * as sections from "./components/sections";

const SECTIONS_DATA = [
  { id: "about", title: "About", component: sections.About },
  { id: "experience", title: "Experience", component: sections.Experience },
  { id: "projects", title: "Projects", component: sections.Projects },
];

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-5">
      <Header />
      <main id="content" className="lg:py-24 lg:w-[52%] pt-24">
        {SECTIONS_DATA.map(section => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-16 lg:mb-36 md:mb-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                {section.title}
              </h2>
            </div>
            <section.component />
          </section>
        ))}
        <Footer />
      </main>
      <div className="hidden">
        Inspired by https://brittanychiang.com/
      </div>
    </div>
  );
}
