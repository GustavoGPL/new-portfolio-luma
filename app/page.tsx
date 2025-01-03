import About from "@/components/about";
import Address from "@/components/address";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
// import Posts from "@/components/posts";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      {/* <Posts />
      <SectionDivider /> */}
      <Experience />
      <Address />
      <SectionDivider />
      <Contact />
    </main>
  );
}
