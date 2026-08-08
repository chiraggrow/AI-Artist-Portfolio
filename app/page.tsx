import { Contact } from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Services } from "@/components/main/services";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Encryption />
        <Contact />
      </div>
    </main>
  );
}

