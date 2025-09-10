import Hypertext from "@/app/library/hypertext";

const About = () => {
  return (
    <>
      <p className="mb-4">
        {"I'm a frontend engineer with 9+ years of experience building scalable web apps and interactive dashboards using React, D3.js, and modern JavaScript frameworks. I enjoy turning complex data into simple, meaningful user experiences, with a focus on performance, accessibility, and clean design."}
      </p>
      <p className="mb-4">
        {"Most recently, I worked at "}
        <Hypertext href="https://www.zscaler.com/">Zscaler</Hypertext>
        {" as a Staff Software Development Engineer, where I modernized legacy systems by migrating them to React, built reusable component libraries, and delivered data-driven dashboards that visualized IoT and remote work trends during COVID."}
      </p>
      <p className="mb-4">
        {"In the past, I've had the opportunity to develop software across a variety of settings - from "}
        <Hypertext href="https://www.infrrd.ai/">AI/ML focused organization</Hypertext>
        {" to "}
        <Hypertext href="https://www.kantar.com/">data analytics focused group.</Hypertext>
      </p>
      <p>
        When I'm not coding, you'll usually find me catching up on movies, smashing a few shuttlecocks on the badminton court, or just enjoying time with my wife and daughter.
      </p>
    </>
  )
}

export default About;