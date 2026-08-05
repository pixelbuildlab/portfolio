import { Github, Linkedin, Mail } from 'lucide-react'

export const skills = [
  'TypeScript',
  'React.js',
  'Next.js',
  'Python',
  'FastAPI',
  'Nest.js',
  'Node.js',
  'Node.js Upgrades',
  'AWS',
  'Docker',
  'PostgreSQL',
  'MySQL',
  'SQL Server',
  'TurboRepo',
  'Jest',
  'Snyk',
  'Dynatrace',
  'On-call Operations',
  'Vulnerability Remediation',
  'LLMs',
  'RAG',
]

export const profile = {
  name: 'Muhammad Waqar',
  role: 'Software Engineer',
  positioning: 'Software Engineer evolving into an AI Full-Stack Engineer',
  location: 'Valencia Town, Lahore 54770',
  email: 'waqardanish1@gmail.com',
  phone: '+92 (301) 307-3514',
  github: 'https://github.com/pixelbuildlab',
  linkedin: 'https://linkedin.com/in/m-waqar1',
}

export const experiences = [
  {
    period: 'August 2023 — Present',
    shortPeriod: '2023 — NOW',
    title: 'Software Engineer',
    company: 'Allzone Technologies',
    location: 'Lahore',
    summary:
      'Building enterprise insurance systems, production automations, FastAPI services, and CI/CD delivery systems.',
    highlights: [
      'Enterprise insurance platform with AWS Lambda, Fastify (TypeScript), MariaDB, Redis, microservices, SNS, and ECS.',
      'On-call rotation, production support, incident response, and operational follow-through for enterprise services.',
      'Vulnerability remediation and dependency hygiene using Snyk; service observability and performance analysis with Dynatrace.',
      'Node.js version upgrades and modernization across services; migration work from MySQL to SQL Server.',
      'TurboRepo monorepo workflows, Jest test coverage, Dockerized services, and GitHub Actions CI/CD.',
      'Built Gmail-to-Jira automations and FastAPI services with PostgreSQL, deployed to DigitalOcean.',
    ],
  },
  {
    period: 'February 2023 — August 2023',
    shortPeriod: '2023',
    title: 'PEEF Trainee Software Engineer',
    company: 'Allzone Technologies',
    location: 'Lahore',
    summary:
      'Built a full-stack Student Management application with React, TypeScript, Node.js, Express, MongoDB, and Carbon Design System.',
    highlights: [
      'Built reusable frontend features and contributed to frontend development as a shadow resource.',
    ],
  },
]

export const education = {
  degree: 'B.S. Software Engineering',
  school: 'International Islamic University — Islamabad',
  period: 'September 2018 — September 2022',
  cgpa: '3.27',
  certification:
    'Oracle Cloud Infrastructure — AI Foundations Associate Certification',
  certificationYear: '2025',
}

export const signalTape = [
  'REACT',
  'PYTHON',
  'LLMS',
  'FASTAPI',
  'AWS',
  'RAG',
  'DOCKER',
  'SNYK',
  'DYNATRACE',
  'JEST',
]

export const projects = [
  {
    title: 'Enterprise Insurance Platform',
    detail:
      'Enterprise insurance services, asynchronous workflows, production support, observability, and serverless backend systems.',
    stack:
      'TypeScript · React · AWS · Fastify · MariaDB · MySQL → SQL Server · Redis · Snyk · Dynatrace · Jest · Docker · TurboRepo',
  },
  {
    title: 'DocRag',
    detail:
      'Retrieval-Augmented Generation app for document ingestion, semantic search, and vector retrieval.',
    stack: 'RAG · LLM · FastAPI · Python · Qdrant',
    link: 'https://github.com/pixelbuildlab/ragdoc',
  },
  {
    title: 'Gmail–Jira Automation',
    detail:
      'A Python system that reads Gmail, structures messages, and turns them into Jira tickets.',
    stack: 'Python · FastAPI · Google API · Docker · PostgreSQL',
  },
  {
    title: 'Jira Change Notification Bot',
    detail:
      'Real-time monitoring and stakeholder notifications for high-volume Jira events.',
    stack: 'Python · FastAPI · Jira APIs · Docker',
  },
  {
    title: 'Sparkup AI',
    detail:
      'AI workflow dashboard with reusable components and visual workflow creation.',
    stack: 'React · TypeScript · Material UI · Reactflow',
  },
  {
    title: 'Orijin — Polygon Data Management',
    detail:
      'Full-stack polygon management with spatial APIs, REST migration, and deployment.',
    stack: 'Nest.js · React · Prisma · PostgreSQL · Turf.js',
    link: 'https://orijin.io/',
  },
  {
    title: 'HRM & ATS Platform',
    detail:
      'A full-stack people platform with real-time notifications and fast SSR delivery.',
    stack: 'Next.js · TypeScript · Material UI · WebSockets',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'waqardanish1@gmail.com',
    href: 'mailto:waqardanish1@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'pixelbuildlab',
    href: 'https://github.com/pixelbuildlab',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'm-waqar1',
    href: 'https://linkedin.com/in/m-waqar1',
    icon: Linkedin,
  },
]
