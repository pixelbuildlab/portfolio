import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className='border-t border-border py-8 px-6 text-center text-muted-foreground text-sm font-mono'>
        © {new Date().getFullYear()} Muhammad Waqar.
      </footer>
    </div>
  )
}

export default Index
