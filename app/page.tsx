
import About from "@/components/about";
import Address from "@/components/address";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Posts from "@/components/posts";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-0 sm:pb-16 sm:px-6">
      <div className="page-shell">
        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <Intro />
          <About />
          <Projects />
          <Skills />
          {/* <Posts /> */}
          <Experience />
          <Address />
          <Contact />
          <Footer/>
        </div>
      </div>
    </main>
  );
}
