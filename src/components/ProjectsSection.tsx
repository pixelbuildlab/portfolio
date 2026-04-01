import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Enterprise Insurance Platform',
    description:
      'Contributed to an enterprise insurance platform using TypeScript, React, Nx monorepo, AWS Lambda, MariaDB, and Redis. Managed serverless backend services and asynchronous workflows with SNS and ECS.',
    tags: ['React.js', 'TypeScript', 'AWS', 'Fastify', 'MariaDB', 'Redis'],
    color: 'primary' as const,
  },
  {
    title: 'Gmail–Jira Automation',
    description:
      'Python-based system using FastAPI to scan Gmail inboxes, parse emails, and convert content into structured Jira tickets. Deployed with Docker on DigitalOcean VPS.',
    tags: ['Python', 'FastAPI', 'Google API', 'Docker', 'PostgreSQL'],
    color: 'secondary' as const,
  },
  {
    title: 'Jira Change Notification Bot',
    description:
      'Real-time monitoring bot that tracks Jira ticket changes and sends email notifications to stakeholders using async processing for high-volume events.',
    tags: ['Python', 'FastAPI', 'Jira APIs', 'Docker'],
    color: 'accent' as const,
  },
  {
    title: 'SPARK AI',
    description:
      'AI dashboard application automating workflows using React.js and TypeScript. Built with Material UI reusable components and Reactflow for visual workflow creation.',
    tags: ['React.js', 'TypeScript', 'Material UI', 'Reactflow'],
    color: 'primary' as const,
  },
  {
    title: 'Orijin – Polygon Data Management',
    description:
      'Full-stack app on Nest.js and React.js for polygon data management with Turf.js. Converted GraphQL to REST APIs, used Prisma with PostgreSQL, and Docker for deployment.',
    tags: ['Nest.js', 'React.js', 'Prisma', 'PostgreSQL', 'Turf.js'],
    color: 'secondary' as const,
  },
  {
    title: 'HRM & ATS Platform',
    description:
      'Next.js full-stack HR management system with real-time WebSocket notifications, server-side rendering, and 35% reduction in page load times.',
    tags: ['Next.js', 'TypeScript', 'Material UI', 'WebSockets'],
    color: 'accent' as const,
  },
]

const borderColors = {
  primary: 'border-primary/30 hover:border-primary',
  secondary: 'border-secondary/30 hover:border-secondary',
  accent: 'border-accent/30 hover:border-accent',
}

const tagColors = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
}

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='py-32 px-6'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='font-mono text-primary text-sm tracking-widest uppercase mb-4'>
            Projects
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-12'>
            Featured work
          </h3>
        </motion.div>

        <div className='space-y-6'>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-card rounded-xl border ${borderColors[project.color]} p-8 transition-all duration-300`}
            >
              <div className='flex flex-col md:flex-row md:items-start justify-between gap-4'>
                <div className='flex-1'>
                  <h4 className='text-xl font-bold mb-2'>{project.title}</h4>
                  <p className='text-muted-foreground text-sm mb-4 leading-relaxed'>
                    {project.description}
                  </p>
                  <div className='flex gap-2 flex-wrap'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs ${tagColors[project.color]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
