import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <section
      id='experience'
      className='py-32 px-6'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='font-mono text-primary text-sm tracking-widest uppercase mb-4'>
            Experience
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-12'>
            Where I've worked
          </h3>
        </motion.div>

        <div className='space-y-8'>
          {/* Software Engineer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative pl-8 border-l-2 border-primary/30'
          >
            <div className='absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center'>
              <Briefcase className='w-3 h-3 text-primary-foreground' />
            </div>
            <div className='mb-1'>
              <span className='font-mono text-xs text-primary'>
                February 2023 — Present
              </span>
            </div>
            <h4 className='text-xl font-bold'>Software Engineer</h4>
            <p className='text-secondary font-mono text-sm mb-3'>
              Allzone Technologies — Lahore
            </p>
            <ul className='space-y-2 text-muted-foreground text-sm'>
              <li>
                • Contributing to enterprise insurance platform using AWS
                Lambda, Fastify (TypeScript), MariaDB, and microservices
                architecture
              </li>
              <li>
                • Built automated Python apps to scan Gmail, extract content,
                and create/update Jira tickets
              </li>
              <li>
                • Developed FastAPI backend services with PostgreSQL, Docker,
                deployed to DigitalOcean
              </li>
              <li>
                • Set up CI/CD with GitHub Actions for testing, container
                builds, and deployments
              </li>
              <li>
                • Created web projects with Next.js, Tailwind CSS, and
                responsive design principles
              </li>
              <li>
                • Integrated third-party APIs with Zustand state management,
                reducing load times by 30%
              </li>
            </ul>
          </motion.div>

          {/* Trainee */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className='relative pl-8 border-l-2 border-secondary/30'
          >
            <div className='absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center'>
              <Briefcase className='w-3 h-3 text-secondary-foreground' />
            </div>
            <div className='mb-1'>
              <span className='font-mono text-xs text-secondary'>
                February 2023 — August 2023
              </span>
            </div>
            <h4 className='text-xl font-bold'>
              PEEF Trainee Software Engineer
            </h4>
            <p className='text-secondary font-mono text-sm mb-3'>
              Allzone Technologies — Lahore
            </p>
            <ul className='space-y-2 text-muted-foreground text-sm'>
              <li>
                • Built full-stack Student Management app with React,
                TypeScript, Node.js, Express, and MongoDB
              </li>
              <li>
                • Integrated Carbon Design System for consistent, scalable UI
                components
              </li>
              <li>
                • Contributed to frontend development tasks as a shadow resource
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
