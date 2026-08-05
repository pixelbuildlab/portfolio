import { ArrowUpRight } from 'lucide-react'
import {
  education,
  experiences,
  profile,
  projects,
  skills,
} from './portfolioData'

export default function Orbit() {
  return (
    <div className='orbit-page'>
      <div className='orbit-aurora orbit-aurora-one' />
      <div className='orbit-aurora orbit-aurora-two' />
      <div className='orbit-topline'>
        <span>MW.</span>
        <span>ENGINEERING USEFUL FUTURES</span>
        <span>EST. 2023</span>
      </div>
      <section className='orbit-hero'>
        <div className='orbit-orbits'>
          <i />
          <i />
          <i />
          <b>MW</b>
        </div>
        <div className='orbit-copy'>
          <p className='orbit-eyebrow'>01 — ABOUT THE ENGINEER</p>
          <h1>
            Systems with
            <br />
            <span>intelligence.</span>
          </h1>
          <p className='orbit-lede'>
            {profile.name} is a {profile.positioning.toLowerCase()}, focused on
            intelligent, scalable applications powered by LLMs, agentic AI, and
            modern web technology.
          </p>
          <div className='orbit-actions'>
            <a href='#projects'>
              Explore work <ArrowUpRight size={16} />
            </a>
            <a href={`mailto:${profile.email}`}>Get in touch</a>
          </div>
        </div>
      </section>
      <section className='orbit-rail'>
        <div>
          <span>ROLE</span>
          <b>{profile.role}</b>
          <p>
            {experiences[0].company} — {experiences[0].period}
          </p>
        </div>
        <div>
          <span>EDUCATION</span>
          <b>{education.degree}</b>
          <p>
            {education.school} — CGPA {education.cgpa}
          </p>
        </div>
        <div>
          <span>RECOGNITION</span>
          <b>OCI AI Foundations</b>
          <p>Associate Certification — {education.certificationYear}</p>
        </div>
      </section>
      <section className='orbit-experience'>
        <p>02 — EXPERIENCE LOG</p>
        {experiences.map((experience) => (
          <div
            className='orbit-experience-card'
            key={experience.title}
          >
            <span>{experience.shortPeriod}</span>
            <div>
              <h2>
                {experience.title} <i>/ {experience.company}</i>
              </h2>
              <p>{experience.summary}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className='orbit-skills'>
        <p>03 — TECHNICAL CONSTELLATION</p>
        <div>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
      <section
        id='projects'
        className='orbit-projects'
      >
        <p>04 — SELECTED WORK</p>
        {projects.map((project, index) => (
          <article key={project.title}>
            <span>0{index + 1}</span>
            <div>
              <h2>{project.title}</h2>
              <p>{project.detail}</p>
              <small>{project.stack}</small>
            </div>
            {project.link ? (
              <a
                href={project.link}
                target='_blank'
                rel='noreferrer'
                aria-label={`Visit ${project.title}`}
              >
                <ArrowUpRight />
              </a>
            ) : (
              <ArrowUpRight />
            )}
          </article>
        ))}
      </section>
      <footer className='orbit-footer'>
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a
          href={profile.github}
          target='_blank'
          rel='noreferrer'
        >
          GITHUB
        </a>
        <a
          href={profile.linkedin}
          target='_blank'
          rel='noreferrer'
        >
          LINKEDIN
        </a>
        <span>© 2026 M. WAQAR</span>
      </footer>
    </div>
  )
}
