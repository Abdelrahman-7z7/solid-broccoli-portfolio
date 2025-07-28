import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ExperienceTimeline />
      <ProjectsShowcase/>
      <SkillsSection />
      <Contact />
    </main>
  );
}
