import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    color: 'primary' as const,
    skills: [
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'React.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Nest.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
      },
      {
        name: 'FastAPI',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      },
      {
        name: 'Fastify',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg',
      },
      {
        name: 'React Native',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
    ],
  },
  {
    title: 'Tools & Libraries',
    color: 'secondary' as const,
    skills: [
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Redux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      },
      {
        name: 'Prisma',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
      },
      {
        name: 'SQLAlchemy',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg',
      },
      {
        name: 'Jest',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      },
      {
        name: 'Postman',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
      {
        name: 'Jira',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      },
      {
        name: 'Trello',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg',
      },
      {
        name: 'Bitbucket',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
      },
      {
        name: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      },
      {
        name: 'ESLint',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
      },
      { name: 'Zustand', logo: null },
      { name: 'Nx Monorepo', logo: null },
      { name: 'JWT', logo: null },
    ],
  },
  {
    title: 'Platforms & Databases',
    color: 'accent' as const,
    skills: [
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MariaDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg',
      },
      {
        name: 'AWS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      },
      {
        name: 'Vercel',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      },
      {
        name: 'DigitalOcean',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
      },
      {
        name: 'Google APIs',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      },
    ],
  },
  {
    title: 'Soft Skills',
    color: 'primary' as const,
    skills: [
      { name: 'Scrum', logo: null },
      { name: 'Pair Programming', logo: null },
      { name: 'Client Communication', logo: null },
      { name: 'Teamwork', logo: null },
      { name: 'Adaptability', logo: null },
      { name: 'Initiative', logo: null },
    ],
  },
]

const colorMap = {
  primary: 'border-primary/40 text-primary',
  secondary: 'border-secondary/40 text-secondary',
  accent: 'border-accent/40 text-accent',
}

const headingColor = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
}

const SkillsSection = () => {
  return (
    <section className='py-32 px-6'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='font-mono text-primary text-sm tracking-widest uppercase mb-4'>
            Skills
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-12'>
            Tech I work with
          </h3>
        </motion.div>

        <div className='space-y-10'>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h4
                className={`font-mono text-sm mb-4 ${headingColor[cat.color]}`}
              >
                {cat.title}
              </h4>
              <div className='flex flex-wrap gap-2.5'>
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className={`px-4 py-2 rounded-lg border font-mono text-xs cursor-default transition-colors hover:bg-muted flex items-center gap-2 ${colorMap[cat.color]}`}
                  >
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className='w-4 h-4'
                        loading='lazy'
                      />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
